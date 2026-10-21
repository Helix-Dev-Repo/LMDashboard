---
target: the site (Home.razor), populated
total_score: 25
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\jmwil\\Desktop\\Visual Studio Projects\\LMDashboard\\LMDashboard\\Components\\Pages\\Home.razor"
target_fingerprint: "sha256:44b25ac4fd3e3823346a2f8540463fdd0f2fe23108e9906f6c82924f50da0571"
target_path: "C:\\Users\\jmwil\\Desktop\\Visual Studio Projects\\LMDashboard\\LMDashboard\\Components\\Pages\\Home.razor"
timestamp: 2026-10-21T12-01-55Z
slug: lmdashboard-components-pages-home-razor
---
Method: dual-agent (A: design review · B: detector + browser evidence). Populated run: 12 seeded links (up, 301, 404/503/unreachable, paused, long name/URL).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Live status/pulse/sparkline good; static tab title, no "down since", summary is 12px muted |
| 2 | Match System / Real World | 3 | Real reason phrases, INT/EXT; interval entered in raw seconds |
| 3 | User Control and Freedom | 3 | Dialog Esc/focus return good; inline delete confirm ignores Esc, focus falls to body after Cancel |
| 4 | Consistency and Standards | 2 | Red = down, ≥500ms latency, time-to-fail, Classic Delete; yellow = redirect and ≥100ms |
| 5 | Error Prevention | 3 | Delete confirm + URL validation; 1s interval silently allowed; Pause 2px from Edit on mobile |
| 6 | Recognition Rather Than Recall | 2 | No column headers; latency and interval side by side unlabeled; truncated names have no title |
| 7 | Flexibility and Efficiency | 2 | No / to search, no Enter to launch; 56 tab stops (4 per row) |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained; 36 always-visible row actions and latency coloring add noise |
| 9 | Error Recovery | 2 | "Unreachable" covers DNS/refused/TLS; generic form error not tied to field |
| 10 | Help and Documentation | 2 | Nothing in-app explains colors, thresholds, columns |
| **Total** | | **25/40** | **Acceptable** |

## Design Specificity Verdict

Ingredients right, applied as decoration not structure. Genuine cues: IBM Plex, blinking cursor, ── group rules, "> all systems nominal", eighth-quantized sparkline, v0.1'ish. Classic is unmistakably this product. Dark/Light layout is category-default (title left, stats right, pill toolbar, rounded card list with ghost actions).

Deterministic: URL scan desktop 15 findings (12 undersized-ui-text = one .lm-badge 10.5px rule; low-contrast placeholder 3.0, interval 3.0, footer 3.2). Light adds ok summary 3.0, down summary 4.46, status ok 3.3, paused name 4.4. Classic 76 findings, 61 dark-glow + stripes = intentional CRT (false positive), interval/placeholder 2.9. Contrast collapses to one element per color pair, so all 12 interval cells fail. Detector agrees with review on contrast; it missed color-meaning overload, sort order, and SR semantics.

## Priority Issues

[P1] Red means three things, so down stops standing out — is-slow latency red on 200s; failed checks show time-to-fail in red; Classic .lm-btn-danger red on every row (app.css:883); yellow shared by redirect and ≥100ms. Fix: --err only for failing state; neutral latency; mute latency on failed checks; Classic delete quiet until hover. (clarify/quieter)

[P1] Start page doesn't say what's broken before you look — alphabetical only (Home.razor:236), 12px muted summary, static PageTitle, no "since". Fix: tab title "(2 down) LM Dashboard"; emphasise down count; failing-first sort; since-time in status title. (layout/clarify)

[P1] Contrast failures in all three themes — --fg-subtle 2.9–3.2:1 (interval, placeholder, footer); Light --ok 3.3:1; Light hover pushes redirect/down/latency to 4.29–4.47; paused name 4.4 Light; badge 10.5px; --border-strong 1.58:1 on control edges. Fix: retune --fg-subtle, Light --ok #15803d, Light --err/--warn deeper, badge 11px, stronger control borders. (colorize/polish)

[P2] Unlabeled columns; mobile drops meaning — no header, RTT/interval unlabeled, no titles on truncated name/URL, mobile reason phrase keeps 9rem while names collapse to "Goo…", badges misalign. Fix: header line, titles, code-only status on mobile. (layout/adapt)

[P2] Keyboard and screen-reader gaps — no / or Enter-to-launch; confirm ignores Esc; focus lost after Cancel; row link name is whole row, no new-tab cue; sparkline no text; no live region; no <main>; div list. (harden)

## Persona Red Flags

Alex: no search hotkey or Enter-to-launch; ~48 tab stops across list; filters persist and broadcast across tabs.
Sam: concatenated link names; no down announcements; focus lost after delete-cancel; Light "200 OK" 3.3:1; form error not linked.
Casey: row actions 26px tall, 2px gap, Pause next to Edit; segments 28px; names truncate to a few chars on 375px.

## Minor Observations

- Classic segments run together without brackets; [SAVE]/[CANCEL] equal weight.
- Classic vignette spans the whole document on long lists instead of the viewport.
- Disabled Group's title tooltip won't show reliably.
- No-results state doesn't offer Clear search.
- 0ms/1ms for localhost looks broken; consider <1ms.
- Reconnect modal and blazor-error-ui render outside .lm-dashboard, so always Dark tokens.
- Classic glow blurs 11.5px URLs.

## Questions to Consider

- Should a failure change the page's shape (failure band, tab title, favicon) rather than one row's color?
- What would Dark look like as a real terminal readout with a header line?
- Should "Failing only" be a persisted filter or a one-glance state that never hides your launch links?
