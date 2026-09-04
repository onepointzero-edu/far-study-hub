# FAR Study Hub

Scaffolded study site for Financial Accounting and Reporting, aligned to the **CPALE 2029 Table of Specifications**.
Built for Tarlac State University FAR students.

## Visual system

The look follows the "Learnify" education concept by Ronas IT
(dribbble.com/shots/25272282): a lavender ground with the whole site sitting in
one large rounded white card, chunky 2px black borders on every block, flat
orange / purple / yellow fills, and oversized display type with one accent word.

Palette, sampled from the reference:

| Token | Value | Use |
| --- | --- | --- |
| `--lav` | `#BEB0D2` | page ground behind the card |
| `--paper` | `#F7F7F5` | the app card |
| `--ink` | `#0A0A0A` | borders and display type |
| `--orange` | `#FC5736` | primary action, accent word |
| `--purple` | `#BD94F4` | secondary blocks, flashcard reverse |
| `--yellow` | `#FCCC41` | knowledge checks, score card |

Type is **Outfit** (display, 800) over **Plus Jakarta Sans** (body), both from
Google Fonts. Interactive blocks lift on hover into a hard `4px 4px 0` offset
shadow rather than a soft blur.

The layout, palette and component shapes follow the reference. The decorative
artwork (pencil, stars, cloud, arcs) is drawn fresh as inline SVG in `app.js`
rather than copied from the shot, so none of the original illustration is reused.

## Tabs

- **Home** — chapter cards with progress. Opening one starts the scaffolded lesson.
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

`built` means it is live. Students may need a hard refresh (Ctrl+Shift+R) to pick up
a changed `app.js` or `styles.css`, since browsers cache them.

### Note on visibility

The repository is public, which is what GitHub Pages requires on a free plan — so the
lecture content is publicly readable. If it ever needs to be private, Netlify and
Cloudflare Pages both serve a private repo for free.

## Source material

Chapter B.1 is drawn from the TSU FAR 0 lecture, *Module 2 — The Revised Conceptual
Framework for Financial Reporting* (Week 4, CO2/CO4), which cites the IASB
*Conceptual Framework for Financial Reporting* (2018), the FRSC adoption of
27 June 2018, PAS 1, and Valix, Villaluz and Ballada.
