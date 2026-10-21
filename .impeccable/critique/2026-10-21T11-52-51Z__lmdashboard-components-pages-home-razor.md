---
target: the site (Home.razor)
total_score: 27
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\jmwil\\Desktop\\Visual Studio Projects\\LMDashboard\\LMDashboard\\Components\\Pages\\Home.razor"
target_fingerprint: "sha256:44b25ac4fd3e3823346a2f8540463fdd0f2fe23108e9906f6c82924f50da0571"
target_path: "C:\\Users\\jmwil\\Desktop\\Visual Studio Projects\\LMDashboard\\LMDashboard\\Components\\Pages\\Home.razor"
timestamp: 2026-10-21T11-52-51Z
slug: lmdashboard-components-pages-home-razor
---
Method: dual-agent (A: design review · B: detector + browser evidence)

Scope caveat: the running app had zero saved links, so live inspection covered the empty state, the add dialog, all three themes, desktop and 375px. Populated rows were judged from LinkRow.razor, Home.razor, app.css and docs/ screenshots (stale: they stack name/URL, current code puts them on one line).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Summary, pulsing pinging dot, Checking…/Waiting are good; no last-checked time anywhere |
| 2 | Match System / Real World | 3 | Real HTTP codes, INT/EXT fit a home lab; "down" vs "Failing only" vs "redirect" drift |
| 3 | User Control and Freedom | 3 | Esc/backdrop/Cancel all work; no "clear filters", Esc doesn't back out of inline delete confirm |
| 4 | Consistency and Standards | 3 | Classic segments lack [brackets]; latency reuses redirect/down colors; reconnect modal ignores theme |
| 5 | Error Prevention | 3 | Delete confirm + URL scheme check; URL field not inputmode=url, 1s interval allowed |
| 6 | Recognition Rather Than Recall | 3 | Unlabelled numeric columns: 58ms vs 30s must be remembered |
| 7 | Flexibility and Efficiency | 2 | No shortcuts (/, Enter-to-launch); 4 tab stops per row |
| 8 | Aesthetic and Minimalist Design | 3 | Calm and tight; Pause/Edit/Delete repeat on every row; empty state shows 0/0/0 |
| 9 | Error Recovery | 2 | One generic form error line, no aria-invalid/focus on the bad field; "No links match" has no way out |
| 10 | Help and Documentation | 2 | Help only in README; Group's disabled reason only in a title tooltip |
| **Total** | | **27/40** | **Acceptable** |

## Design Specificity Verdict

LLM assessment: details are specific, composition is generic. Dark/Light are a familiar dev-tool shell (Plex, rounded card list, segmented control, chips, near-stock Tailwind status colors). Terminal heritage survives as seasoning: blinking cursor, "> no links yet_", ── group rules, v0.1'ish, and the strongest idea, sparklines quantized to eighths like ▁▂▃▅▇ block glyphs. IBM Plex is a quietly meaningful choice given the backstory. Classic carries the soul (bracketed buttons, inverse-video hover, double-rule header, glow) but is a costume over the same layout rather than a recomposition.

Deterministic scan: detector cannot parse .razor (returned [] — not a clean bill). On prerendered HTML / live URL: low-contrast ×2 per theme (placeholder 2.9–3.2:1; footer --fg-subtle text 2.9–3.25:1); Classic dark-glow ×7 and repeating-stripes (scanlines) are the intended CRT look — false positives, one decision reported many times; cramped-padding on .lm-segmented (static only) low confidence. Detector missed Classic footer at 2.91:1 and Light --ok text at 3.3:1, which manual measurement caught.

## Priority Issues

[P1] Contrast failures on data text — Light --ok #16a34a on white 3.3:1 ("200 OK", "N up"); --fg-subtle used for interval column, placeholders, footer at 2.9–3.25:1 in all themes; Light --err on hover surface 4.29:1. Fix: Light --ok → #15803d; interval → --fg-muted; raise --fg-subtle to text-safe in every theme. (typeset/colorize/audit → polish)

[P1] Screen readers get a moving-target link name and no announcements — whole row inside <a>, name = "Grafana grafana…:3000 200 OK 58ms 30s", changes each check, doesn't say new tab; sparkline aria-hidden with no text; summary not live. Fix: name-only link + sr "opens in new tab", status cells outside or labelled, sr sparkline summary, polite live region for down transitions. (harden/audit)

[P1] No keyboard path for the primary job; rows cluttered with actions — launching = tab through link + Pause + Edit + Delete per row; no / to search, Enter to open match. Fix: / focuses search, Enter opens top match, Esc clears; reveal row actions on hover/focus-within. (harden/distill)

[P2] Failures don't rise; latency color cries wolf — alphabetical only; ≥100ms amber / ≥500ms red reuse redirect/down colors for every link; capped slow bar = failure bar height. Fix: sort or pin failing; neutral latency scale; failure as distinct shape. (clarify/layout)

[P2] Theme stops at the dashboard div; reconnect modal blocks the start page — tokens scoped to .lm-dashboard.theme-*, so reconnect modal and blazor-error-ui always render Dark; showModal makes the plain hrefs unusable during a server restart. Fix: mirror tokens under html:has(.theme-*); consider non-modal reconnect banner. (polish)

## Persona Red Flags

Alex: no shortcuts; 4 tab stops/row; Esc doesn't cancel delete confirm and focus isn't moved to it; Theme only cycles; persisted "Failing only" silently hides links tomorrow.
Sam: concatenated changing link name; no live announcements; sparkline hidden; unlabelled latency/interval; Group's disabled reason only in title; latency severity color-only; form error not tied to field; brightness slider lacks aria-valuetext.
Casey: row actions 26px tall with 2px gaps; segments 28px; Theme 26px; Classic buttons collapse to 17–19px; URL field lacks inputmode/autocapitalize/spellcheck; autofocus pops keyboard.

## Minor Observations

- Empty state shows three zero counts and two Add link buttons.
- "No links match the current filters." offers no Clear filters.
- Truncated names/URLs have no title.
- Sparklines scale per row, so bars aren't comparable across rows.
- Interval is a raw seconds box; presets would help.
- Classic footer controls appear/disappear and reflow the footer.
- Monitoring checkbox uses the default focus ring.
- ReconnectModal fade animations not covered by reduced-motion.
- docs/ screenshots stale.

## Questions to Consider

- If the green screen is the soul, why is it a costume rather than the composition (bottom status line, > command line that searches and launches)?
- Start page (stable order) or monitor (triage order)? Which wins at 8am?
- Should a 160ms external site ever share the color of a 503?
- Should the start page still work when its own server is gone?
