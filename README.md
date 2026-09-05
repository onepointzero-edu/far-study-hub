# LearnAccounting

Scaffolded study site for Financial Accounting and Reporting, aligned to the **CPALE 2029 Table of Specifications**.
Built for Tarlac State University FAR students.

## Visual system

The look is applied from the Penpot file **"Accounting Edu Website"** (boards
*Home Page* and *When Topic is Viewed*, 1920x1080). Values below are taken from the
design's rendered fills and text styles rather than sampled by eye.

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#F7F7F5` | page ground, full bleed |
| `--lav` | `#C9B8E8` | ground behind the lesson board only |
| `--ink` | `#151513` | 2px borders on every block |
| `--black` | `#000000` | display and nav type |
| `--orange` | `#FF5734` | accent word, primary action, current part |
| `--yellow` | `#FCCC42` | knowledge checks, score card |
| `--purple` | `#BE94F5` | flashcard reverse, outcomes panel |
| `--yellow-s` | `#FADF93` | chapter-map panel, card tint |
| `--purple-s` | `#D8C1F5` | card tint |
| `--coral` | `#FB9F8B` | card tint |
| `--grey-d` | `#B1B2B5` | muted rules |

Type is **Kodchasan** (400 and 700) throughout, from Google Fonts. Corner radii are the
design's: 30 / 20 / 15 / 12.5 / 7.5px. Interactive blocks lift into a hard `4px 4px 0`
offset shadow rather than a soft blur.

Sizes are expressed as `vw` against the design's 1920px board, so the page reproduces the
design exactly at 1920 and scales proportionally below it: the display line is `4.17vw`
(80px at 1920), the logo `2.08vw` (40px), nav links `1.3vw` (25px), the subtitle `1.56vw`
(30px), the primary button `1.15vw` (22px). Each carries a `clamp()` floor so small
viewports stay readable.

The layout, palette and component shapes follow the design. The decorative artwork
(pencil, stars, cloud, rings) is **the illustration from the Penpot file**, exported to
`assets/hero-illustration.svg` and scaled down to suit the page - the geometry is the
original, only the display size changed.

One thing had to be rebuilt on export: Penpot decomposes a stroked ellipse into a
filled disc plus a heavy outline, which renders as two grey discs outside the editor.
The two rings keep their original centres and radii but are re-declared as
`fill:none` with a thin `#B1B2B5` stroke, which is what the design shows.

The header is **static** - it scrolls away with the page. The chapter map on a lesson
page is still sticky; note that this needs no `overflow:hidden` on any ancestor, since
that silently disables `position:sticky`.

### Where the build departs from the design, and why

- **Placeholder copy is not reproduced.** The boards carry lorem text - "Subtitle or
  tagline or phrases here", "Title of Part x", "TOS XX", "Discussion here". The real
  chapter content is used instead; only the structure is taken.
- **The stat figures are computed, not copied.** The design shows +94 / +264 / +167;
  the page sums the actual chapters.
- **"About Us" is a stub.** The design's fourth nav item has no source content, so it
  ships as a "Coming soon" page.
- **The nav "Continue" pill was removed** to match the design's nav, which is the logo
  plus four links. The hero's *Start Studying* button and the *Last viewed* card cover
  the same need.
- **Type is set at the previous version's scale**, not the 1920 board's. Rendered at
  the design's own ratios the page read as oversized at ordinary window widths, so the
  sizes, radii, padding and 1180px content width from before the redesign are kept and
  only the palette, typeface and layout are taken from the file.
- **Responsive behaviour is not in the design**, which is desktop-only at 1920. The
  existing breakpoints are kept: below 980px the chapter map becomes a horizontal
  timeline strip, below 760px the nav wraps.

## Tabs

- **Home** — a shortcut, not a catalogue. It previews **three** chapters beside the
  *Last viewed* card, or **four** when nothing has been opened yet, with unfinished
  chapters first. *Explore more* opens the full list.
- **All chapters** — every chapter in teaching order, grouped by topic, with the
  roadmap at the end. Reached from *Explore more* and from the **All chapters** pill on
  a lesson page. It has no nav tab of its own, matching the design's four-link nav.
- **Flashcards** — active recall across all chapters or one chapter; flip and shuffle.
- **Quiz** — exam conditions. No feedback until submission, then a full review with explanations.

## How the scaffolding works

A chapter is split into short **parts**. Each part ends in a **knowledge check**.
The next part is not rendered until the check is answered correctly. A wrong answer
disables that option, explains nothing, and asks the student to re-read — so the
answer cannot be brute-forced without reading. A correct answer reveals the reasoning
and unlocks the next part.

Progress is stored per browser in `localStorage` (key `farhub.v1`). Nothing leaves the
student's device, and no account is needed.

### The chapter map

Each lesson carries a left panel listing every part in the chapter, which doubles as
a progress timeline:

- **green tick** — cleared
- **orange number** — the part they are on now
- **grey number** — still locked

Cleared and current parts are clickable and jump to that part; locked ones are
disabled with a tooltip saying which part unlocks them. Titles of locked parts stay
visible on purpose, so the chapter reads as a roadmap rather than a black box. The
highlight follows the reader down the page via `IntersectionObserver`, with a scroll
listener as a fallback.

Below 980px the panel becomes a horizontal timeline strip that sticks under the nav.

## Adding a chapter

1. Copy `content/b1-conceptual-framework.js` to `content/<new-id>.js`.
2. Edit the object. The shape is:

```js
FARHub.addChapter({
  id: "b2-presentation",          // unique, used in the URL hash
  code: "B.2",                    // CPALE TOS reference shown on the badge
  title: "...",
  blurb: "...",                   // one or two sentences for the home card
  minutes: 60,
  outcomes: ["...", "..."],       // intended learning outcomes

  sections: [{                    // one entry per scaffolded part
    id: "unique-within-chapter",
    title: "...",
    blocks: [                     // rendered in order
      {t:"p",     html:"..."},
      {t:"h",     html:"sub-heading"},
      {t:"note",  html:"highlighted box"},
      {t:"ul",    items:["...","..."]},
      {t:"ol",    items:["...","..."]},
      {t:"table", head:["...","..."], rows:[["...","..."]]}
    ],
    check: {                      // the gate
      q: "...",
      choices: ["...","...","...","..."],
      answer: 1,                  // zero-based index
      why: "explanation shown once correct"
    }
  }],

  flashcards: [{f:"prompt", b:"answer"}],
  quiz: [{q:"...", c:["...","..."], a:0, why:"...", tos:"Ch.1 Objective"}]
});
```

3. Add a `<script src="content/<new-id>.js"></script>` line to `index.html`,
   after `app.js` and alongside the existing content script.
4. Remove the chapter from the `roadmap` array at the top of `app.js` so it no longer
   shows under "Coming soon".

Inline HTML is allowed in every text field (`<b>`, `<i>`, `<br>`). Use `&amp;` for a
literal ampersand.

## Running locally

```bash
python -m http.server 5173
```

Then open <http://localhost:5173>. A plain `file://` open also works in most browsers
since there is no `fetch` — the content files are loaded as `<script>` tags.

## Live site

**<https://onepointzero-edu.github.io/far-study-hub/>**

Deployed from the `main` branch of
<https://github.com/onepointzero-edu/far-study-hub>, root folder. The site is fully
static — no build step, no server, no database — so GitHub Pages serves the files
as-is, for free.

### Publishing an update

Everything on `main` is live within a minute or two of the push:

```bash
git add -A
git commit -m "Add chapter D.1 Inventories"
git push
```

To confirm the build finished:

```bash
gh api repos/onepointzero-edu/far-study-hub/pages --jq .status
```

`built` means it is live.

### Cache busting

Browsers cache `app.js`, `styles.css` and the content files hard, so a student can be
left on an old copy after a push. Every local asset in `index.html` therefore carries a
`?v=` token. Bump it whenever one of those files changed:

```bash
./bump.sh && git add -A && git commit -m "..." && git push
```

The token is just a timestamp; changing it makes the browser treat the file as a new
URL and fetch it. Nothing needs bumping when only chapter *text* inside an already
listed content file changed and you are happy to wait out the cache — but bumping is
free, so bump anyway.

### Note on visibility

The repository is public, which is what GitHub Pages requires on a free plan — so the
lecture content is publicly readable. If it ever needs to be private, Netlify and
Cloudflare Pages both serve a private repo for free.

## Source material

The **Cash and Cash Equivalents** group (chapters C.1.1, C.1.2.1 and C.1.2.2) is drawn
from the TSU FAR 0 lecture *Module 4 — Cash and Cash Equivalents* with its guided
handouts *4A — Petty Cash Fund* and *4B — Bank Reconciliation and Proof of Cash*, and
cites PAS 7, PAS 1, PAS 32 and Valix. The four chapters share one running case,
**Zambales Trading Corporation**, taken from the Module 4 guided application. Three
figures in those handouts were stale and are corrected on the site; the discrepancies
and the reasoning are recorded in `CHAPTERS.md`.

Chapter B.1 is drawn from the TSU FAR 0 lecture, *Module 2 — The Revised Conceptual
Framework for Financial Reporting* (Week 4, CO2/CO4), which cites the IASB
*Conceptual Framework for Financial Reporting* (2018), the FRSC adoption of
27 June 2018, PAS 1, and Valix, Villaluz and Ballada.
