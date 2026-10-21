---
name: LM Dashboard
description: A home-lab start page and uptime monitor that remembers the machine room, set in IBM Plex.
colors:
  console-black: "#0f1113"
  panel-charcoal: "#16191b"
  row-hover-charcoal: "#1c2023"
  pressed-graphite: "#262b2e"
  hairline: "#262a2e"
  control-edge: "#363c41"
  field-edge: "#636b66"
  cold-white: "#e3e6e4"
  instrument-gray: "#939b96"
  idle-gray: "#858d88"
  phosphor-green: "#4ade80"
  phosphor-ink: "#06240f"
  status-up: "#4ade80"
  status-redirect-amber: "#facc15"
  status-down-red: "#f87171"
typography:
  headline:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  title:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  control:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  summary:
    fontFamily: "IBM Plex Mono, ui-monospace, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  data:
    fontFamily: "IBM Plex Mono, ui-monospace, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
  url:
    fontFamily: "IBM Plex Mono, ui-monospace, Consolas, monospace"
    fontSize: "11.5px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.06em"
rounded:
  xs: "4px"
  sm: "6px"
  lg: "10px"
  full: "50%"
spacing:
  2xs: "2px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
  3xl: "48px"
components:
  button:
    backgroundColor: "{colors.panel-charcoal}"
    textColor: "{colors.cold-white}"
    typography: "{typography.control}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "34px"
  button-hover:
    backgroundColor: "{colors.row-hover-charcoal}"
  button-small:
    padding: "0 8px"
    height: "26px"
  button-primary:
    backgroundColor: "{colors.phosphor-green}"
    textColor: "{colors.phosphor-ink}"
    typography: "{typography.control}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "34px"
  button-add:
    backgroundColor: "{colors.panel-charcoal}"
    textColor: "{colors.phosphor-green}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "34px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.instrument-gray}"
    rounded: "{rounded.sm}"
    padding: "0 8px"
    height: "26px"
  button-ghost-hover:
    backgroundColor: "{colors.pressed-graphite}"
    textColor: "{colors.cold-white}"
  button-danger-solid:
    backgroundColor: "{colors.status-down-red}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.sm}"
    padding: "0 8px"
    height: "26px"
  chip-pressed:
    backgroundColor: "rgba(74, 222, 128, 0.14)"
    textColor: "{colors.phosphor-green}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "34px"
  chip-danger-pressed:
    backgroundColor: "rgba(248, 113, 113, 0.14)"
    textColor: "{colors.status-down-red}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "34px"
  segmented:
    backgroundColor: "{colors.panel-charcoal}"
    rounded: "{rounded.sm}"
    padding: "2px"
  segment:
    backgroundColor: "transparent"
    textColor: "{colors.instrument-gray}"
    typography: "{typography.control}"
    rounded: "{rounded.xs}"
    padding: "0 12px"
    height: "28px"
  segment-on:
    backgroundColor: "{colors.pressed-graphite}"
    textColor: "{colors.cold-white}"
  input:
    backgroundColor: "{colors.panel-charcoal}"
    textColor: "{colors.cold-white}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0 10px"
    height: "34px"
  search-prompt:
    backgroundColor: "{colors.panel-charcoal}"
    textColor: "{colors.cold-white}"
    typography: "{typography.summary}"
    rounded: "{rounded.sm}"
    padding: "0 10px 0 26px"
    height: "34px"
  link-list:
    backgroundColor: "{colors.panel-charcoal}"
    rounded: "{rounded.lg}"
  link-row:
    backgroundColor: "{colors.panel-charcoal}"
    textColor: "{colors.cold-white}"
    typography: "{typography.body}"
    padding: "4px 8px 4px 14px"
  link-row-hover:
    backgroundColor: "{colors.row-hover-charcoal}"
  list-head:
    textColor: "{colors.instrument-gray}"
    typography: "{typography.label}"
    padding: "7px 8px 5px 14px"
  type-badge:
    textColor: "{colors.instrument-gray}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    padding: "1px 6px"
    width: "3.5em"
  status-dot:
    backgroundColor: "{colors.idle-gray}"
    rounded: "{rounded.full}"
    size: "8px"
  sparkline:
    backgroundColor: "{colors.phosphor-green}"
    width: "80px"
    height: "16px"
  dialog:
    backgroundColor: "{colors.panel-charcoal}"
    textColor: "{colors.cold-white}"
    rounded: "{rounded.lg}"
    padding: "20px"
    width: "min(560px, calc(100vw - 32px))"
  footer-key:
    textColor: "{colors.instrument-gray}"
    typography: "{typography.label}"
    padding: "1px 5px"
---

# Design System: LM Dashboard

## Overview

**Creative North Star: "The Machine Room"**

The system remembers one place: the cold, air-conditioned IBM System/370 room, calm and humming and precise, where a green screen glowed in the corner. The green is carried as a memory rather than a costume. In the default Dark theme it survives as a single phosphor accent, a blinking underscore after the title, a `>` prompt mark, and monospace for everything the machine reports. The full green-phosphor CRT is still on the premises, but behind a door: the opt-in Classic theme, with its glow, scanlines, vignette and brightness dial.

The voice is crisp, technical, warm. Crisp in its hairline rules, fixed columns and 14px base; technical in its terminal-report column header, function-key legend and HTTP phrases spelled out ("503 Service Unavailable for 12m"); warm in its small kindnesses: actions that wait until you reach for them, a down count you can click, an empty state that reads "> all systems nominal". Density is that of an operator's console: one link per line, every value in its column, nothing decorative between them.

Hierarchy is set by what is broken. Healthy links recede into calm gray and green; a failure is the one thing permitted to raise its voice, in red and in weight. Everything else, including adding a link, stays quiet.

**Key Characteristics:**
- Three themes on one token set: Dark (default), Light, and Classic green phosphor.
- Flat tonal surfaces in four steps; the dialog is the only lifted object.
- IBM Plex Sans for what people wrote and act on, IBM Plex Mono for what the machine reports.
- Green, amber and red mean up, redirect and down, and nothing else.
- Fixed-width columns under a terminal-report header line; actions revealed on intent.
- Every text token clears 4.5:1 in every theme.

## Colors

A near-black, faintly cool console palette with one phosphor-green voice and three status colors that are spoken for.

### Primary
- **Phosphor Green** (`--accent`): the one accent. The `>` prompt mark and caret, the blinking cursor, focus rings (2px outline, 2px offset), pressed chips, the Add link text, the filled Save button, sparkline bars, checkbox and slider tint. In Light it deepens to #15803d; in Classic it is the phosphor itself, #33ff33.
- **Phosphor Ink** (`--accent-fg`): text on a filled accent surface (Save, the reconnect Retry). White (#ffffff) in Light, black (#0c0c0c) in Classic.

### Status
- **Status Up** (`--ok`): up counts, OK dots, 2xx status text. Shares Phosphor Green's value in Dark and Classic; in Light it is #137a3a, a hair deeper than the accent.
- **Redirect Amber** (`--warn`): redirect counts, dots and 3xx status text. #a34a06 in Light, #ffff33 in Classic.
- **Down Red** (`--err`): down counts, dots, failure sparkline bars, the down status and its "for Nm" outage time, the error alert, invalid fields, Delete on hover and the solid confirm-delete button. #c81e1e in Light, #ff4444 in Classic.

### Neutral
- **Console Black** (`--bg`): the page. #f5f6f5 in Light, #0c0c0c in Classic.
- **Panel Charcoal** (`--surface`): the list, inputs, buttons, dialog, reconnect modal. #ffffff in Light; in Classic it equals the page, #0c0c0c.
- **Row-Hover Charcoal** (`--surface-2`): row hover and button hover. #f0f2f1 in Light, #0c0c0c in Classic (Classic hovers in inverse video instead).
- **Pressed Graphite** (`--surface-3`): the selected segment and ghost-button hover. #e3e7e5 in Light, #143a14 in Classic.
- **Hairline** (`--border`): row dividers, list outline, footer rule. #e1e4e2 in Light, #143a14 in Classic.
- **Control Edge** (`--border-strong`): button and segmented outlines, the type badge, key caps, dialog border, empty sparkline slots. #c9cfcb in Light, #1a6a1a in Classic.
- **Field Edge** (`--border-input`): input and boxed-checkbox edges, held at 3:1 so fields stay findable. #868f8a in Light, #2ea82e in Classic.
- **Cold White** (`--fg`): primary text, link names, slow latency. #1b1f1d in Light, #33ff33 in Classic.
- **Instrument Gray** (`--fg-muted`): URLs, the summary line, the column header, field labels, latency, outage time. #58615c in Light, #22bb22 in Classic.
- **Idle Gray** (`--fg-subtle`): intervals, placeholders, footer text, pending dots, disabled buttons, a failed check's time-to-fail. #646c66 in Light, #2ea82e in Classic.

Theme-specific values outside the token set: in Light, pressed chips deepen their text to #0f6a30 (accent) and #a51818 (danger) because the pale tint would pull the token colors under 4.5:1. In Classic, button and segment hover brighten to #88ff88.

### Named Rules
**The Spoken-For Rule.** Green, amber and red mean up, redirect and down. Nothing else may borrow them: latency stays out of the status colors (slow reads brighter in Cold White, a failed check's time steps back to Idle Gray), and Delete stays neutral until hovered.

**The Loudest Thing Is What's Broken Rule.** Only failure raises its voice. The down count alone grows (15px, weight 700) and turns red; Add link is a quiet outlined button with green text, not a filled one.

**The 4.5 Floor Rule.** Every text token clears 4.5:1 on `--bg`, `--surface` and `--surface-2` in all three themes, and field edges clear 3:1. Dim with a quieter token, never with opacity (a paused name turns Instrument Gray); Classic's brightness dial stops at 0.85 because red "down" text fails below it.

## Typography

**Display Font:** none; the largest type is the 20px page title.
**Body Font:** IBM Plex Sans (with system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, Consolas)

**Character:** IBM's own typeface family for a room IBM built: Plex Sans is the operator's handwriting, Plex Mono is the printout. Both are self-hosted (Sans 400/500/600, Mono 400/700). In Classic, `--font-sans` becomes Plex Mono and the whole page is printout.

### Hierarchy
- **Headline** (600, 20px, 1.5, -0.01em): the page title, followed by a blinking mono underscore in Phosphor Green; also the standalone error-page heading. Classic sets it uppercase, weight 400, 0.2em tracking, between double rules.
- **Title** (600, 16px, 1.5): the Add/Edit dialog title. Classic: uppercase, weight 400, 0.1em tracking.
- **Body** (400, 14px, 1.5): base text, inputs, the error alert. Link names use weight 500 at the same size.
- **Control** (400, 13px): buttons, segments, chips (12px on small buttons). Primary and Add link step to 600. Field labels sit at 12px in Instrument Gray.
- **Summary** (Mono 400, 13px): the up/redirect/down/pending/paused line and the search prompt. The down count steps to 15px, 700.
- **Data** (Mono 400, 12px): status code and phrase, latency, interval.
- **URL** (Mono 400, 11.5px): the link URL beside its name.
- **Label** (Mono 400, 11px, uppercase): the column header (0.06em), group headings such as "── Internal · 3" (0.08em), the INT/EXT badge (0.04em), footer key caps.

### Named Rules
**The Printout Rule.** What the machine reports is set in Plex Mono: URLs, status codes, latency, intervals, counts, key caps, the prompt. What a person named or acts on is set in Plex Sans: link names, buttons, field labels.

**The Report Heading Rule.** Uppercase belongs to the 11px mono label tier only, as on a terminal report. Sans text is never set uppercase outside Classic.

## Layout

A single centered column (max 1100px, padding 28px 24px 20px; 20px 16px under 760px) holds header, toolbar, list and footer. The header pairs the title and the summary on one baseline, wrapping with 8px/24px gaps. The toolbar is one wrapping line, gap 8px: search prompt (flexes from 220px, max 320px), segmented type filter, Group and Failing only chips, a spacer, then Add link at the far right.

The list is a table drawn as flex rows. Every column holds a fixed width so values line up down the page: status dot 8px, name and URL sharing the flexible column (the name keeps up to 60% and the URL truncates first), type badge 3.5em, sparkline 80px, status 16.5rem (fits "503 Service Unavailable for 12m"), latency 4rem right-aligned, interval 3.75rem right-aligned, then the actions, whose first button holds 64px so Pause and Resume rows align. The column header line reuses the row's own column widths; its invisible stand-in buttons reserve the actions' width.

Spacing runs on a small 2/4/8/12/16/20/24 rhythm: 12px between row columns, 14px inside the link cluster, 16px between toolbar and list, 24px above the footer, 48px inside the empty state.

Under 760px each link becomes two lines on a grid ("dot name name badge" / ". url status latency"): the name wraps to two lines, the sparkline, interval, column header and status phrase drop out (the code alone carries the status), the toolbar puts search and Add link first, and row actions fold behind a three-dot More toggle. Under `pointer: coarse` controls grow to 40px, small buttons to 36px, the More toggle to 44px, and the down count gains a padded tap area without moving its text. The function-key legend disappears on devices that cannot hover.

### Named Rules
**The Fixed Columns Rule.** Every row value has a fixed-width slot, and state changes never shift a column: actions hide by opacity, not display, and Pause/Resume share a minimum width.

**The Reveal on Intent Rule.** Row actions appear only when the row is hovered, focused within, or confirming a delete (opacity, 120ms ease-out). Touch screens keep them visible; under 760px they fold behind the More toggle.

## Elevation & Depth

The system is flat. Depth comes from four tonal steps (Console Black page, Panel Charcoal list and controls, Row-Hover Charcoal on hover, Pressed Graphite for pressed state) and from 1px hairlines. The only real shadows belong to modal dialogs, which sit above a 55% black backdrop. Focus rings and the input focus halo are outlines of state, not elevation.

### Shadow Vocabulary
- **Dialog lift** (`box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45)`): the Add/Edit dialog. The reconnect modal uses a near twin (`0 12px 40px rgba(0, 0, 0, 0.45)`).
- **Input focus halo** (`box-shadow: 0 0 0 3px` accent at 22%): focused fields; red at 22% when invalid.
- **Top-match ring** (`box-shadow: inset 0 0 0 1px` accent at 45%, over a 5% accent tint): the row Enter would open.
- **Classic dialog** (`box-shadow: 0 0 0 2px #000, 0 0 30px rgba(51, 255, 51, 0.12)`): a black keyline and a faint phosphor bloom.

### Named Rules
**The Flat Machine Rule.** Rows, lists, buttons and chips never cast shadows. A modal dialog is the only object allowed to lift off the page.

## Shapes

Gently softened rectangles: controls and inputs at 6px (`--radius`), the list, dialog and empty state at 10px (`--radius-lg`), the type badge and inner segments at 4px. Status dots are perfect 8px circles; a paused dot is a hollow 1.5px ring. Sparkline bars are 1px-rounded slivers. Borders are 1px solid hairlines; the empty state alone is dashed.

Classic squares everything off: both radii drop to 0, dots become square pixels, sparkline bars go square, the list, dialog and row dividers turn dashed, inputs lose all but a bottom rule, and the header sits between 3px double rules.

## Components

### Buttons
Quiet, outlined, word-labeled.
- **Shape:** gently rounded (6px), 34px tall (26px small, 40px/36px on touch).
- **Default:** Panel Charcoal fill, Control Edge outline, Cold White 13px text; hover steps to Row-Hover Charcoal. Disabled text drops to Idle Gray.
- **Primary (Save, empty-state Add link):** filled Phosphor Green with Phosphor Ink text, weight 600; hover brightens 8%. Reserved for committing an action.
- **Add link (toolbar):** a default button with Phosphor Green text at 600, deliberately not filled.
- **Ghost (row Pause/Edit/Delete, Dismiss):** transparent, Instrument Gray text; hover fills Pressed Graphite and lifts to Cold White. Delete turns red only on hover or focus. The confirm-delete button is solid red with page-colored text.
- **Focus:** a 2px Phosphor Green outline at 2px offset on every button, segment and row link.

### Chips
- **Style:** default buttons that toggle (Group, Failing only, Classic's Scanlines and Vignette). `aria-pressed` drives both the style and the screen-reader state.
- **State:** pressed fills with a 14% accent tint, a 55% accent edge and accent text. Failing only presses in red. Light deepens pressed text to #0f6a30 / #a51818.

### Segmented Control
A 2px-padded outlined track (6px) holding 28px segments with 4px corners. Idle segments are Instrument Gray text on nothing; the selected one fills Pressed Graphite in Cold White. It serves the toolbar type filter (buttons with `aria-pressed`) and the dialog's Internal/External choice (a radiogroup), where it stretches to fill its grid column.

### Inputs / Fields
- **Style:** Panel Charcoal fill, 1px Field Edge stroke, 6px corners, 34px tall, 10px horizontal padding; URL and search fields switch to 13px mono.
- **Focus:** the edge turns Phosphor Green with a 3px accent halo at 22%.
- **Error:** `aria-invalid` turns the edge red with a red halo on focus; the message sits left of the dialog actions in red.
- **Checkbox:** 16px, accent-tinted, boxed like an input inside the dialog grid.

### Command Prompt Search
The search field is a command line: a Phosphor Green `>` mark inset 10px, a 13px mono field padded to clear it, an accent caret, and the placeholder "filter · enter to open". `/` jumps to it from anywhere, Enter opens the top match in a new tab, Esc clears. The top match carries a 1px inset accent ring over a 5% accent tint; Classic marks it with a 1px dashed outline instead.

### Link Row
The heart of the system, one link per line on Panel Charcoal, divided by hairlines inside a 10px-rounded list: status dot (pulsing while a check is in flight), name (Plex Sans 500, underlined in Idle Gray on hover) beside its mono URL, optional INT/EXT badge, the sparkline, mono status (code plus phrase, then "for Nm" in Instrument Gray when down), right-aligned latency and interval, and the hover-revealed ghost actions. Hover steps the row to Row-Hover Charcoal on hover-capable devices only. A paused row grays its name, blanks its interval, hollows its dot and fades its sparkline to 60%.

### Sparkline
Twenty 1px-gapped bars in an 80 by 16px box, heights quantized to eighths like block characters. Successful checks are Phosphor Green at 80% opacity, failures solid Down Red, unfilled slots 2px Control Edge stubs.

### Column Header Line
A terminal-report heading above each list: 11px mono uppercase in Instrument Gray, labels Name, Type, Last 20, Status, Resp, Every, aligned by the rows' own column classes. Hidden from assistive tech and dropped under 760px.

### Summary
A mono 13px line beside the title: up, redirect and down counts, each with its dot, plus pending and paused when present. Counts take their status color only when non-zero; zero counts stay Instrument Gray with half-strength dots. A non-zero down count is a 15px bold red button that toggles Failing only and underlines when pressed.

### Dialog
A native modal, min(560px, viewport minus 32px), Panel Charcoal with a Control Edge border, 10px corners, the dialog lift, and a 140ms ease-out rise from 6px. Inside, a 20px body holds a six-column form grid (gap 12px/16px): Name and URL on the first row, Type, interval and Monitoring on the second, with Cancel and Save right-aligned below.

### Footer
A hairline-topped line in 12px Idle Gray: the version in mono, a function-key legend after the PF-key strip on 3270 screens (`/` find, `enter` open, `esc` clear, as 11px key caps with a Control Edge border and 3px corners), and the controls (Theme cycle; in Classic also the brightness slider and Scanlines/Vignette chips).

### Classic Translation
Classic restyles every component rather than adding new ones. Buttons and segments lose their box and become uppercase `[BRACKETED]` words that underline and brighten to #88ff88 on hover. Primary buttons, pressed chips and the selected segment render in inverse video (green fill, black text); a pressed Failing only inverts in red. Rows hover in inverse video, but failure keeps its color: a down status becomes a red inverse tag, and red dots and failure bars stay red. Text glows with an inherited `text-shadow: 0 0 5px` (2px on small mono, 10px on the title). Scanlines and vignette are fixed to the viewport like the glass of a screen, and the brightness filter (0.85 to 1.5) applies to the shell only.

### Named Rules
**The Pressed State Is the Attribute Rule.** Toggle state lives in `aria-pressed` (or `aria-expanded`, or a checked radio), and the styling reads from it, so what sighted users see and what screen readers announce cannot drift apart.

**The Inverse Video Rule.** In Classic, inverse video marks the primary action, a pressed toggle and the hovered row, and status hue survives the inversion.

## Do's and Don'ts

### Do:
- **Do** set machine-reported values (URLs, status, latency, intervals, counts, keys) in IBM Plex Mono at 11 to 13px, and names, buttons and labels in IBM Plex Sans.
- **Do** keep green, amber and red for up, redirect and down, and render latency in Cold White (slow), Instrument Gray (normal) or Idle Gray (failed).
- **Do** clear 4.5:1 for any new text in all three themes on `--bg`, `--surface` and `--surface-2`, and dim with a quieter token instead of opacity.
- **Do** give every new column a fixed width and hide row-level controls with opacity so columns never shift.
- **Do** reveal row actions on hover and focus-within (120ms ease-out), keep them visible on touch, and fold them behind the More toggle under 760px.
- **Do** drive toggle styling from `aria-pressed`, `aria-expanded` or checked state.
- **Do** grow targets under `pointer: coarse` (40px controls, 36px small buttons, 44px More).
- **Do** stop the cursor blink, ping pulse and dialog rise under `prefers-reduced-motion`.
- **Do** give every new element its Classic translation: 0 radius, uppercase bracketed buttons, inverse video for pressed and primary, dashed rules.

### Don't:
- **Don't** color latency, Delete at rest, or any non-status value red or amber.
- **Don't** fill a routine action with the accent; the filled Phosphor Green button is for Save and the empty state's first Add link.
- **Don't** add shadows to rows, lists, chips or buttons; only modal dialogs lift.
- **Don't** bring glow, scanlines, vignette or the brightness filter into Dark or Light; CRT effects live only in Classic.
- **Don't** let Classic's inverse hover erase failure: down status, red dots and failure bars stay red.
- **Don't** tint the top match in Classic; mark it with the dashed outline, since a green fill would pull its red and dim-green text below readable contrast.
- **Don't** replace action words with icons; the three-dot More toggle (inline SVG) is the only icon in the system.
