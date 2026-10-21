// Client-side helpers that save Blazor Server round trips. Delegated from document so they
// keep working as Blazor re-renders the elements.

// Blazor can't call showModal() itself; LinkDialog invokes these through JS interop.
window.lmDialog = {
    open: (dialog) => { if (!dialog.open) dialog.showModal(); },
    close: (dialog) => { if (dialog.open) dialog.close(); }
};

// Puts focus back after the focused element was removed by a re-render (a delete confirm
// closing, a row being deleted). Only acts when focus has fallen to <body>, so focus the user
// has already moved elsewhere is left alone.
window.lmFocus = {
    restore: (el) => {
        if (el && (!document.activeElement || document.activeElement === document.body)) el.focus();
    },
    restoreTo: (selector, fallback) =>
        lmFocus.restore(document.querySelector(selector) ?? document.querySelector(fallback))
};

// The <HeadOutlet> renders statically, so <PageTitle> only sets the first title; the
// dashboard keeps it current from here.
window.lmSetTitle = (title) => { document.title = title; };

// A click landing on the dialog element itself, rather than its content, is a backdrop click.
// The press must start there too, so a text selection dragged out of a field doesn't close it.
// It raises "cancel" like Esc does, and LinkDialog lets the server close the dialog.
let pressedOnBackdrop = false;

document.addEventListener("pointerdown", (event) => {
    pressedOnBackdrop = event.target.matches?.("dialog.lm-dialog") ?? false;
});

document.addEventListener("click", (event) => {
    if (pressedOnBackdrop && event.target.matches?.("dialog.lm-dialog")) {
        event.target.dispatchEvent(new Event("cancel", { cancelable: true }));
    }
    pressedOnBackdrop = false;
});

// Enter submits the dialog's form, but @bind only reads a field on "change", which browsers
// don't reliably fire before an Enter submit. Commit the focused field first so Save sees what
// was just typed. A window capture listener runs ahead of Blazor's own handlers.
window.addEventListener("submit", (event) => {
    const field = document.activeElement;
    if (event.target.closest?.(".lm-dialog") && field?.form === event.target
        && field.matches("input:not([type=checkbox]):not([type=radio])")) {
        field.dispatchEvent(new Event("change", { bubbles: true }));
    }
}, true);

const searchDelayMs = 150;
let searchTimer;
let searchPending = false;

// Sends the search to the server now rather than when typing pauses.
function commitSearch(el) {
    clearTimeout(searchTimer);
    searchPending = false;
    el.dispatchEvent(new Event("change", { bubbles: true }));
}

// Enter in the prompt opens the first row on screen. A search still on its way to the server
// is sent first, and the open waits until the list reflects it (<main data-search-term>).
// window.open runs here in the browser because a popup must follow the keypress closely;
// a round trip through the server would get it blocked.
function openTopMatch(el) {
    const term = el.value;
    const main = document.querySelector("main[data-search-term]");
    if (!term.trim() || !main) return;
    if (searchPending) commitSearch(el);

    // The prompt empties once the link opens, so coming back to the tab shows every link again.
    const open = () => {
        const link = document.querySelector(".lm-row-link");
        if (!link) return;
        window.open(link.href, "_blank", "noopener,noreferrer");
        el.value = "";
        commitSearch(el);
    };

    if (main.dataset.searchTerm === term) {
        open();
        return;
    }

    // Blazor updates the attribute in place once the filtered list has rendered. Give up after
    // two seconds, by which point the browser would block the popup anyway.
    const observer = new MutationObserver(() => {
        if (main.dataset.searchTerm === term) {
            observer.disconnect();
            clearTimeout(giveUp);
            open();
        }
    });
    const giveUp = setTimeout(() => observer.disconnect(), 2000);
    observer.observe(main, { attributes: true, attributeFilter: ["data-search-term"] });
}

const isTextEntry = (el) =>
    el?.closest?.("input, textarea, select, [contenteditable='true'], [contenteditable='']") != null;

document.addEventListener("keydown", (event) => {
    const el = event.target;

    if (el.matches?.(".lm-search-input")) {
        if (event.key === "Enter") {
            event.preventDefault();
            openTopMatch(el);
        } else if (event.key === "Escape" && el.value) {
            // Browsers disagree on whether Esc clears a search field, so it's done here.
            event.preventDefault();
            el.value = "";
            commitSearch(el);
        }
        return;
    }

    // "/" jumps to the prompt from anywhere that isn't taking text or behind the dialog.
    if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey
        && !isTextEntry(el) && !document.querySelector("dialog[open]")) {
        const search = document.querySelector(".lm-search-input");
        if (search) {
            event.preventDefault();
            search.focus();
            search.select();
        }
    }
});

document.addEventListener("input", (event) => {
    const el = event.target;

    // Search binds on "change"; raise it once typing pauses rather than per keystroke.
    if (el.matches?.(".lm-search-input")) {
        clearTimeout(searchTimer);
        searchPending = true;
        searchTimer = setTimeout(() => commitSearch(el), searchDelayMs);
        return;
    }

    // Brightness previews locally while dragging; the server only hears the final "change".
    if (el.matches?.(".lm-brightness-slider")) {
        el.closest(".lm-dashboard")?.style.setProperty("--lm-brightness", el.value);

        // Update the existing text node in place so Blazor's reference to it stays valid.
        const readout = el.parentElement?.querySelector(".lm-brightness-value")?.firstChild;
        if (readout) {
            readout.nodeValue = Number(el.value).toFixed(2);
        }
    }
});
