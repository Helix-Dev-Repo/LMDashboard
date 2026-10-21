---
target: the site (Home.razor), populated, post-polish
total_score: 27
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\jmwil\\Desktop\\Visual Studio Projects\\LMDashboard\\LMDashboard\\Components\\Pages\\Home.razor"
target_fingerprint: "sha256:3a086eafbc8dd8a6799138ecca0f0f53d2999e2b63d88f375669ae2b29f77576"
target_path: "C:\\Users\\jmwil\\Desktop\\Visual Studio Projects\\LMDashboard\\LMDashboard\\Components\\Pages\\Home.razor"
timestamp: 2026-10-21T13-00-47Z
slug: lmdashboard-components-pages-home-razor
---
Method: dual-agent (A: design review · B: detector + browser evidence). Populated run after polish pass + delete-confirm focus fix.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Last checked only in tooltip; no down duration; static tab title |
| 2 | Match System / Real World | 3 | Interval column "5m" unlabeled, can read as "5 minutes ago" |
| 3 | User Control and Freedom | 3 | Esc/Cancel everywhere with focus return; Clear search drops focus to body; no undo |
| 4 | Consistency and Standards | 3 | Consistent tokens; Classic hover recolours every status black |
| 5 | Error Prevention | 3 | Confirm defaults to Cancel; interval in seconds only; placeholders read as values |
| 6 | Recognition Rather Than Recall | 2 | No column headers; actions hidden until hover on desktop |
| 7 | Flexibility and Efficiency | 2 | No / or Enter-to-launch; 4 tab stops per row |
| 8 | Aesthetic and Minimalist Design | 3 | Desktop dense and restrained; mobile rows bloat with action bar |
| 9 | Error Recovery | 3 | Store errors caught; form errors generic, no aria-invalid |
| 10 | Help and Documentation | 2 | No legend for sparkline, INT/EXT, interval |
| **Total** | | **27/40** | **Acceptable** (was 25/40) |

## Design Specificity Verdict

Identity is real but lives mostly in Classic; Dark/Light read as a generic neutral-dark status table with heritage accents (cursor, prompts, ── rules, eighth-step sparkline, Plex). Deterministic: CLI and overlay 0 findings in Dark and Light at 1280 and 375 (was 15/19). Classic 28 = 27 dark-glow + 1 scanline stripes, intentional CRT (false positive). All measured text ≥4.5:1 at rest and hover in all themes; tightest Light hover 4.81–4.82. Detector-invisible issues found by measurement: Classic focus ring 1:1 on hovered row; Classic vignette drops top-right down count to ~2.9–3.4.

## Priority Issues

[P1] Down links aren't promoted — alphabetical only, static tab title, summary not actionable. Fix: dynamic PageTitle "(6 down)", failing-first or status sort, "6 down" toggles Failing only. (layout) — user previously declined failing-first sort.

[P1] Mobile rows starve the name and double in height — name 80px at 375, status 84px for "503", latency 56px, badge 35px; permanent action bar makes rows 83–104px; toolbar wraps to 3 lines with Add link last. Fix: status/latency onto URL line, fold badge, compact actions, search+Add on line 1. (adapt)

[P2] Classic loses meaning — inverse hover strips red status/dot/fail bars; focus ring invisible on hovered row (1:1); brightness <~0.87 breaks 4.5:1 for down text (filter dims text not bg); vignette darkens summary corner. Fix: keep status hue on hover, contrasting focus ring on hover, brightness floor ~0.85 or filter bg too, push vignette stop out. (polish)

[P2] Unlabeled columns, no down duration — "454ms 5m", last checked tooltip-only, no "down for 2h". Fix: quiet mono header row or "every 5m", duration from first failing sample. (clarify) — header line previously declined.

[P2] Keyboard efficiency — Clear search removes itself and drops focus to body (regression from polish); no / or Enter-to-launch; 4 tab stops/row. Fix: return focus to #lm-search; optional shortcuts. (harden)

## Persona Red Flags

Alex: no /, autofocus or Enter-to-launch; 48 tab stops; Clear search loses focus; Theme cycles.
Sam: filtering/zero results not announced; form errors lack aria-invalid; Classic hover strips status color, low brightness breaks contrast; Light redirect/down dots similar hue (text backs up).
Casey: segments 34px, row buttons 36px, none 44px; name 80px; 103px rows with permanent Delete; confirm's Delete directly below row Delete (double-tap risk); Add link on 3rd toolbar line.

## Minor Observations

- Paused row still shows interval "30s".
- Row hover background applies on touch (not gated by hover media).
- header/footer inside main lose banner/contentinfo landmarks.
- _announcement never cleared; identical repeat won't re-announce.
- Interval and sparkline absent on mobile and not in aria-label.
- Light focus ring 4.46 on hovered row (3:1 needed for UI, passes).
- Sparkline scale per row.

## Questions to Consider

- Why is the green screen opt-in and a generic table the default; could Dark borrow Classic's structure?
- Should the tab title and favicon be the primary status display for a pinned start page?
- What if search were a command line (> open proxmox, > down)?
