---
target: the site (Home.razor), final
total_score: 27
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\jmwil\\Desktop\\Visual Studio Projects\\LMDashboard\\LMDashboard\\Components\\Pages\\Home.razor"
target_fingerprint: "sha256:c7418277a9419060f135c4b8df4ecf9cecad9e9e9d926845bd8adbc9699a8568"
target_path: "C:\\Users\\jmwil\\Desktop\\Visual Studio Projects\\LMDashboard\\LMDashboard\\Components\\Pages\\Home.razor"
timestamp: 2026-10-21T13-44-14Z
slug: lmdashboard-components-pages-home-razor
---
Method: dual-agent (A: design review · B: detector + browser evidence). Final run after fixes batch, column header line and command-line search. 12 sample links.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Tab title, "for 3m", sparkline strong; down rows stay alphabetical |
| 2 | Match System / Real World | 3 | "Resp" on a failed check is time-to-fail |
| 3 | User Control and Freedom | 3 | Esc/Cancel everywhere; persisted Failing only can open to an empty start page |
| 4 | Consistency and Standards | 3 | Classic inverse video means both primary action and pressed state; mixed empty-state voices |
| 5 | Error Prevention | 3 | Confirm focuses Cancel; 1s interval allowed silently |
| 6 | Recognition Rather Than Recall | 2 | "/" not shown anywhere visible; row actions hidden until hover/focus |
| 7 | Flexibility and Efficiency | 2 | "/" + Enter great; 4 tab stops per row, no row movement keys |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained; Add link is the loudest element |
| 9 | Error Recovery | 3 | Clear messages; invalid fields not visually marked |
| 10 | Help and Documentation | 2 | Shortcuts only in README and sr-only hint |
| **Total** | | **27/40** | **Acceptable** |

## Design Specificity Verdict

Specific in behavior (prompt search, eighth-step sparkline, report header line, ── titles, tab-title alert, Classic inverse hover that keeps failures red); Dark/Light visual skin remains category-standard. Deterministic: CLI 0 findings desktop and mobile; overlay 0 in Dark at 1280/375 and with More open; Light 1 real failure (pressed Group chip 3.85:1); Dark top-match advisory (is-fail latency 4.45:1); Classic 34 dark-glow + scanlines = intended (false positive). Header columns align to 0.0px. No text under 11px. Landmarks correct.

## Priority Issues

[P1] A down link doesn't change the screen — alphabetical only, no row-level emphasis, 12px summary, Add link loudest. Fix: failing first, larger down count, demote Add link. (layout)

[P1] Contrast regressions — Light pressed chips 3.85 / 4.23; Classic top-match background drops red to 3.75 and subtle to 4.11; Dark top-match is-fail 4.45. Fix: darker pressed-chip text in Light; top match marked by outline rather than fill in Classic, lighter tint elsewhere. (polish)

[P2] Saved filter state works against a start page — Failing only persists and can open to "all systems nominal" with no links; search term stays after Enter. Fix: way back to all links in that state; clear the prompt after Enter opens. (harden)

[P2] Keyboard efficiency — "/" undiscoverable, 4 tab stops/row. Fix: visible key legend; roving tabindex later. (clarify)

[P3] Classic primary/pressed collision; invalid fields unstyled. (polish)

## Persona Red Flags

Alex: 48 tab stops; no row movement; prompt keeps old term after Enter; "/" only in README.
Sam: Light pressed chips 3.84/4.23; Classic top-match red 3.75; h1 focus fallback has outline:none; Group disabled reason only in title.
Casey: down-count shortcut 57x18; segments 34px; Classic [FAILING ONLY] wraps.

## Minor Observations

- Status column fixed 16.5rem leaves a gap after "200 OK".
- Failed checks still fill Resp.
- Empty-state voices mixed ("No links match x." vs "> all systems nominal").
- Classic hover red dots/fail bars 2.51:1 on green.
- Dialog placeholders close to value color.

## Questions to Consider

- Should a failure reorder the screen like a console printing an alert line?
- Would a PF-key legend in the footer be the most authentic System/370 nod?
- Should a start page remember filters at all?
