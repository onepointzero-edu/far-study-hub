# LearnAccounting

Scaffolded study site for Financial Accounting and Reporting, aligned to the **CPALE 2029 Table of Specifications**.
Built for Tarlac State University FAR students.

## Visual system

The look is applied from the Penpot file **"Accounting Edu Website"**. The *Home Page*
board is **1440x1024** with a **1198px content column** and 121px side margins; the
*When Topic is Viewed* board is still 1920 wide. Values below are read out of the file
itself (over Penpot's MCP endpoint) rather than sampled by eye.

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#F7F7F5` | page ground, full bleed |
| `--lav` | `#C9B8E8` | ground behind the lesson board only |
| `--ink` | `#151513` | 2px borders on every block |
| `--black` | `#000000` | display and nav type |
| `--orange` | `#FF5734` | accent word, primary action, current part |
| `--yellow` | `#FCCC42` | knowledge checks, score card |
| `--purple` | `#BE94F5` | flashcard reverse, outcomes panel |
| `--yellow-s` | `#FADF93` | chapter-map panel |
| `--yellow-50` | `#FDE59D` | chapter card tint |
| `--purple-50` | `#DEC5FA` | chapter card tint |
| `--orange-50` | `#FDAB95` | chapter card tint |
| `--grey-d` | `#B1B2B5` | muted rules, decor rings |

The three card tints are the board's `#FCCC42` / `#BE94F5` / `#FF5734` drawn at 50%
opacity; they are pre-resolved against the paper ground so the cards stay flat.

Type is **Kodchasan** (400 and 700) from Google Fonts, with one exception: the three
hero counters are **Google Sans Code** 30/600, which is what the board specifies.
Home-page blocks use the board's flat 30px radius and 3px borders. Interactive blocks
lift into a hard `4px 4px 0` offset shadow rather than a soft blur.

Home-page geometry is taken from the board directly: nav bar 50px with the logo inset
62px and the links flush right; headline 50/700 at line-height 1.2; subtitle 15/400;
one 150x50 call to action; stat cards 190x140 with an 8px gap; chapter cards 250x205
sitting at content-x 0 / 287 / 554 / 821; footer rule across the full width.

The decorative artwork (two rings, three stars, pencil, cloud) is exported from the
board as `assets/hero-decor.svg` - original geometry, unscaled. It sits on a pinned
layer (`position:fixed`, `z-index:0`, `pointer-events:none`) that recreates the board's
1440-wide coordinate space centred on the content column, so it holds still while the
page scrolls and never intercepts a click meant for a card. It is home-page only and
hidden below 900px.

Two things had to be repaired on export. Penpot's `generateMarkup` emits every shape
twice - nested inside its parent group and again flattened as a top-level sibling -
and the double-draw wrecks boolean shapes; the flattened duplicates are deleted. And a
boolean's operands are geometry, not artwork: the `#B1B2B5` bar inside the cloud's
Union does not paint in the board and must not be carried over.

The header is **pinned** - `position:sticky; top:0`, so it stays at the top of the
window while the page scrolls. Its height changes when the tab row wraps (50px wide,
taller on narrow screens), so `app.js` measures it and publishes the value as `--navh`;
every sticky offset and anchor `scroll-margin-top` is derived from that rather than
hardcoded. The chapter map on a lesson page is sticky below it. Note this needs no
`overflow:hidden` on any ancestor, since that silently disables `position:sticky`.

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
- **Home cards show the title only.** The board's cards carry the chapter title and no
  blurb, so `chapterCard()` takes `{ blurb: false }` on the home row and the "Last
  viewed" card. The All chapters page still shows the subtitle.
- **Lesson prose is capped at a 640px measure** (`--measure`). Unconstrained, the wider
  board runs running text to ~102 characters a line. Note `ch` units mislead badly in
  Kodchasan - its `0` is ~11.8px against an ~8px average glyph - so the cap is in px.
- **Responsive behaviour is not in the design**, which is desktop-only. The existing
  breakpoints are kept: below 980px the chapter map becomes a horizontal timeline
  strip, below 760px the nav wraps.

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
