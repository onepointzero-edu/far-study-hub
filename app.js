/* LearnAccounting - scaffolded lesson engine, flashcards, quiz.
   Content lives in content/*.js and self-registers via FARHub.addChapter(). */
(function () {
  "use strict";

  var CHAPTERS = [];
  var BY_ID = {};

  window.FARHub = {
    addChapter: function (ch) { CHAPTERS.push(ch); BY_ID[ch.id] = ch; },
    /* Chapters not yet written - shown greyed on Home so the roadmap is visible.
       Scoped to FAR 0 + FAR 3 per CHAPTERS.md; codes are CPALE 2029 TOS refs. */
    roadmap: [
      { code: "H.4", title: "Interim Reporting", sub: "FAR 3" },
      { code: "H.5", title: "Operating Segments", sub: "FAR 3" },
      { code: "D.6", title: "Non-current Assets Held for Sale", sub: "FAR 3" },
      { code: "G.2.1", title: "Accounting Changes and Prior Period Errors", sub: "FAR 3" },
      { code: "B.1.4.2", title: "Events After the Reporting Period", sub: "FAR 3" },
      { code: "B.3.3", title: "Statement of Cash Flows", sub: "FAR 3" },
      { code: "I.1", title: "Other Reporting Frameworks", sub: "FAR 3" },
      { code: "B.2", title: "Basic Accounting Concepts and the Accounting Cycle", sub: "FAR 0" },
      { code: "B.1.4", title: "Presentation and Disclosure", sub: "FAR 0" },
      { code: "C.2.4", title: "Receivables and Receivable Financing", sub: "FAR 0" },
      { code: "D.1", title: "Inventories and Inventory Estimation", sub: "FAR 0" },
      { code: "D.5", title: "Biological Assets", sub: "FAR 0" },
      { code: "D.7", title: "Prepaid Expenses and Other Assets", sub: "FAR 0" },
      { code: "A.1", title: "The Profession and the Reporting Framework", sub: "FAR 0" },
      { code: "A.2", title: "Regulation and Environment of the Profession", sub: "FAR 0" }
    ]
  };

  /* ---------------- storage ---------------- */
  var KEY = "farhub.v1";
  var store = load();
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* private mode */ }
  }
  function done(chId) {
    store[chId] = store[chId] || { cleared: [] };
    return store[chId].cleared;
  }
  /* The design's home page opens with a "Last viewed" rail, so the id of the
     chapter most recently opened is remembered alongside the progress. */
  function markSeen(chId) {
    if (store.__last === chId) return;
    store.__last = chId; save();
  }
  function lastSeen() {
    var id = store.__last;
    return id && BY_ID[id] ? BY_ID[id] : null;
  }

  function markCleared(chId, secId) {
    var d = done(chId);
    if (d.indexOf(secId) === -1) { d.push(secId); save(); }
  }

  /* ---------------- helpers ---------------- */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sum(fn) {
    return CHAPTERS.reduce(function (n, c) { return n + fn(c); }, 0);
  }
  function allCards() {
    var out = [];
    CHAPTERS.forEach(function (c) {
      (c.flashcards || []).forEach(function (f) { out.push({ f: f.f, b: f.b, code: c.code }); });
    });
    return out;
  }
  function allQuiz() {
    var out = [];
    CHAPTERS.forEach(function (c) {
      (c.quiz || []).forEach(function (q) { out.push({ q: q, code: c.code }); });
    });
    return out;
  }
  /* First chapter with unfinished parts - drives the nav "Continue" pill. */
  function nextUp() {
    for (var i = 0; i < CHAPTERS.length; i++) {
      if (done(CHAPTERS[i].id).length < CHAPTERS[i].sections.length) return CHAPTERS[i];
    }
    return CHAPTERS[0];
  }

  /* ---------------- decorative SVG ---------------- */
  /* Original shapes in the reference's flat, black-outlined style. */
  /* The hero artwork is the illustration from the Penpot file, exported as
     assets/hero-illustration.svg and scaled down to fit the page. */
  function heroDecor() {
    var d = el("div", "decor");
    var img = document.createElement("img");
    img.src = "assets/hero-illustration.svg";
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    d.appendChild(img);
    return d;
  }

  /* ---------------- block renderer ---------------- */
  function renderBlock(b) {
    if (b.t === "p") return el("p", null, b.html);
    if (b.t === "h") return el("h4", null, b.html);
    if (b.t === "note") return el("div", "note", b.html);
    /* A worked illustration, shown before the knowledge check. Nests blocks. */
    if (b.t === "example") {
      var box = el("div", "example");
      box.appendChild(el("div", "exLabel", b.title || "Illustrative example"));
      (b.blocks || []).forEach(function (x) { box.appendChild(renderBlock(x)); });
      return box;
    }
    if (b.t === "ul" || b.t === "ol") {
      var list = el(b.t === "ul" ? "ul" : "ol");
      b.items.forEach(function (i) { list.appendChild(el("li", null, i)); });
      return list;
    }
    if (b.t === "table") {
      var t = el("table"), thead = el("thead"), tr = el("tr");
      b.head.forEach(function (h) { tr.appendChild(el("th", null, h)); });
      thead.appendChild(tr); t.appendChild(thead);
      var tb = el("tbody");
      b.rows.forEach(function (r) {
        var row = el("tr");
        r.forEach(function (c) { row.appendChild(el("td", null, c)); });
        tb.appendChild(row);
      });
      t.appendChild(tb);
      return t;
    }
    return el("p", null, b.html || "");
  }

  /* ---------------- HOME ---------------- */
  function viewHome(root) {
    /* hero */
    var hero = el("div", "hero");
    hero.appendChild(heroDecor());
    var inner = el("div", "inner");
    inner.appendChild(el("h1", "display", "Understand <em>Accounting</em>,<br>not simply memorizing"));
    inner.appendChild(el("p", "sub",
      "Scaffolded lessons built from your lecture handouts and aligned to the " +
      "CPALE 2029 Table of Specifications. Every part ends in a question you must " +
      "clear before the next one opens."));
    var row = el("div", "cta-row");
    var go1 = el("button", "btn", "Start Studying");
    go1.onclick = function () { go("lesson", nextUp().id); };
    var go2 = el("button", "link", "Jump to flashcards ↗");
    go2.onclick = function () { go("cards"); };
    row.appendChild(go1); row.appendChild(go2);
    inner.appendChild(row);
    hero.appendChild(inner);

    var stats = el("div", "stats");
    [
      ["Lessons", "parts to work through", "+" + sum(function (c) { return c.sections.length; }), ""],
      ["Recall", "flashcards", "+" + sum(function (c) { return (c.flashcards || []).length; }), "p"],
      ["Practice", "exam-style items", "+" + sum(function (c) { return (c.quiz || []).length; }), "y"]
    ].forEach(function (s) {
      var b = el("div", "stat " + s[3]);
      b.appendChild(el("span", "chip", s[0]));
      b.appendChild(el("div", "lbl", s[1]));
      b.appendChild(el("div", "big", s[2]));
      stats.appendChild(b);
    });
    hero.appendChild(stats);
    root.appendChild(hero);

    /* The home page is a shortcut, not a catalogue: the design shows one row,
       so it previews three chapters beside the "Last viewed" card, or four
       when nothing has been opened yet. "Explore more" opens the full list. */
    var last = lastSeen();
    var main = root;
    if (last) {
      var rail = el("div", "rail");
      var lastCol = el("div", "railCol");
      lastCol.appendChild(el("div", "kick", "Last viewed"));
      var lastGrid = el("div", "grid one");
      lastGrid.appendChild(chapterCard(last, CHAPTERS.indexOf(last)));
      lastCol.appendChild(lastGrid);
      rail.appendChild(lastCol);
      main = el("div", "railMain");
      rail.appendChild(main);
      root.appendChild(rail);
    }

    var kick = el("div", "kick kickRow");
    kick.appendChild(el("span", null, "Available now"));
    var more = el("button", "moreLink", "Explore more ↗");
    more.onclick = function () { go("chapters"); };
    kick.appendChild(more);
    main.appendChild(kick);

    var grid = el("div", "grid preview");
    previewChapters(last, last ? 3 : 4).forEach(function (it) {
      grid.appendChild(chapterCard(it.c, it.i));
    });
    main.appendChild(grid);
  }

  /* Chapters still to finish come first, so the row stays useful as a student
     progresses; completed ones top the row up if fewer than `n` remain. */
  function previewChapters(exclude, n) {
    var open = [], closed = [];
    CHAPTERS.forEach(function (c, i) {
      if (c === exclude) return;
      (done(c.id).length < c.sections.length ? open : closed).push({ c: c, i: i });
    });
    return open.concat(closed).slice(0, n);
  }

  function chapterCard(c, i) {
    var cleared = done(c.id).length, total = c.sections.length;
    var pct = total ? Math.round(cleared / total * 100) : 0;
    var hue = ["", " a3", " a2", " a4"][i % 4];   /* white, yellow, purple, coral */
    var card = el("button", "ch" + hue);
    card.appendChild(el("span", "chip", "TOS " + c.code));
    card.appendChild(el("h3", null, c.title));
    card.appendChild(el("p", null, c.blurb));
    var bar = el("div", "bar"); var fill = el("i");
    fill.style.width = pct + "%"; bar.appendChild(fill);
    card.appendChild(bar);
    card.appendChild(el("div", "pct", pct + "% completed"));
    var meta = el("div", "meta");
    meta.innerHTML = "<span><b>" + (c.flashcards || []).length + "</b> cards</span>" +
      "<span><b>" + (c.quiz || []).length + "</b> quiz items</span>" +
      "<span><b>" + c.minutes + "</b> mins</span>";
    card.appendChild(meta);
    card.onclick = function () { go("lesson", c.id); };
    return card;
  }

  /* ---------------- ALL CHAPTERS ---------------- */
  function viewChapters(root) {
    var back = el("button", "back", "Home");
    back.onclick = function () { go("home"); };
    root.appendChild(back);

    root.appendChild(el("h2", null, "All <em>chapters</em>"));
    root.appendChild(el("p", "lede",
      "Every chapter written so far, in teaching order, with what is still being " +
      "drafted at the end. Chapters that belong to one topic are grouped together."));

    /* Chapters carrying the same `group` are rendered together under one
       heading, so a topic split across several chapters still reads as one. */
    var runs = [];
    CHAPTERS.forEach(function (c, i) {
      var prev = runs[runs.length - 1];
      /* consecutive chapters sharing a group - including the ungrouped ones,
         which share the single group `null` - go into the same grid */
      if (prev && prev.group === (c.group || null)) prev.items.push({ c: c, i: i });
      else runs.push({ group: c.group || null, items: [{ c: c, i: i }] });
    });

    root.appendChild(el("div", "kick", "Available now"));
    runs.forEach(function (run) {
      if (run.group) {
        var head = el("div", "groupHead");
        head.appendChild(el("h3", null, run.group));
        head.appendChild(el("span", "groupCount", run.items.length + " chapters"));
        root.appendChild(head);
      }
      var grid = el("div", "grid" + (run.group ? " grouped" : ""));
      run.items.forEach(function (it) { grid.appendChild(chapterCard(it.c, it.i)); });
      root.appendChild(grid);
    });

    root.appendChild(el("div", "kick", "Coming soon"));
    var g2 = el("div", "grid");
    FARHub.roadmap.forEach(function (r) {
      var c = el("div", "ch soon");
      c.appendChild(el("span", "chip", "TOS " + r.code));
      c.appendChild(el("h3", null, r.title));
      c.appendChild(el("p", null, r.sub ? r.sub + " · being written from the lecture handouts."
                                       : "Being written from the FAR lecture handouts."));
      g2.appendChild(c);
    });
    root.appendChild(g2);
  }

  /* ---------------- LESSON (scaffolded) ---------------- */
  function viewLesson(root, chId) {
    var ch = BY_ID[chId];
    if (!ch) { go("home"); return; }

    markSeen(chId);

    var back = el("button", "back", "All chapters");
    back.onclick = function () { go("chapters"); };
    root.appendChild(back);

    /* The design puts the title block in its own card above the two columns. */
    var head = el("div", "lessonHead");
    head.appendChild(el("span", "chip", "TOS " + ch.code));
    if (ch.group) head.appendChild(el("div", "groupTag", ch.group));
    head.appendChild(el("h2", null, ch.title));
    head.appendChild(el("p", "lede", ch.blurb));

    if (ch.outcomes && ch.outcomes.length) {
      var o = el("div", "outcomes");
      o.appendChild(el("h4", null, "By the end of this chapter you should be able to:"));
      var ul = el("ul");
      ch.outcomes.forEach(function (x) { ul.appendChild(el("li", null, x)); });
      o.appendChild(ul);
      head.appendChild(o);
    }
    /* progress lives at the top of the chapter map, as in the design */
    var progWrap = el("div", "tocProg");
    var progTxt = el("div", "pct");
    var progBar = el("div", "bar"), progFill = el("i");
    progBar.appendChild(progFill);
    progWrap.appendChild(progTxt);
    progWrap.appendChild(progBar);
    var progCount = el("div", "pct");
    progWrap.appendChild(progCount);

    /* two-column body: chapter map on the left, the parts themselves on the right */
    var layout = el("div", "lesson");
    var toc = el("aside", "toc");
    var tocList = el("div", "tocList");
    var tocHead = el("div", "tocHead", "In this chapter");
    toc.appendChild(progWrap);
    toc.appendChild(tocHead);
    toc.appendChild(tocList);
    var host = el("div", "lessonBody");
    var col = el("div", "lessonCol");
    col.appendChild(head); col.appendChild(host);
    layout.appendChild(toc); layout.appendChild(col);
    root.appendChild(layout);

    function refreshProgress() {
      var n = done(chId).length, t = ch.sections.length;
      progFill.style.width = Math.round(n / t * 100) + "%";
      progTxt.textContent = Math.round(n / t * 100) + "% completed";
      progCount.textContent = n + " of " + t + " Parts Completed";
      syncPill();
    }

    /* Scroll a part under the sticky chrome. Smooth scrolling is a no-op under
       prefers-reduced-motion and in some engines, so fall back to an instant jump. */
    function scrollToSec(target) {
      if (!target) return;
      /* the header is static, so it steals no space from the top of the viewport */
      var navEl = document.querySelector(".nav");
      var navH = getComputedStyle(navEl).position === "sticky" ? navEl.offsetHeight : 0;
      var tocH = getComputedStyle(toc).position === "sticky" && window.innerWidth <= 980
        ? toc.offsetHeight : 0;
      var y = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navH - tocH - 14);
      var start = window.scrollY;
      if (start === y) return;
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { window.scrollTo(0, y); return; }
      try { window.scrollTo({ top: y, behavior: "smooth" }); }
      catch (e) { window.scrollTo(0, y); markViewing(); return; }
      setTimeout(function () {
        if (window.scrollY === start) window.scrollTo(0, y);
      }, 250);
      /* update the highlight once the scroll has settled, whichever path ran */
      setTimeout(markViewing, 350);
      setTimeout(markViewing, 800);
    }

    /* The map lists every part, including locked ones, so students can see
       where they are and what is still ahead. */
    function drawToc() {
      tocList.innerHTML = "";
      var cleared = done(chId);
      var firstOpen = ch.sections.findIndex(function (s) {
        return cleared.indexOf(s.id) === -1;
      });
      if (firstOpen === -1) firstOpen = ch.sections.length;   /* all done */

      ch.sections.forEach(function (s, i) {
        var isDone = cleared.indexOf(s.id) !== -1;
        var isNow = i === firstOpen;
        var state = isDone ? "done" : isNow ? "now" : "lock";
        var b = el("button", "tocItem " + state);
        b.dataset.i = i;
        b.appendChild(el("span", "dot", isDone ? "✓" : String(i + 1)));
        b.appendChild(el("span", "t", s.title));
        if (state === "lock") {
          b.disabled = true;
          b.title = "Clear part " + (firstOpen + 1) + " to unlock this";
        } else {
          b.onclick = function () { scrollToSec(host.querySelectorAll(".sec")[i]); };
        }
        tocList.appendChild(b);
      });

      if (firstOpen >= ch.sections.length) {
        var end = el("button", "tocItem done end");
        end.appendChild(el("span", "dot", "★"));
        end.appendChild(el("span", "t", "Chapter complete"));
        end.onclick = function () {
          var secs = host.querySelectorAll(".sec");
          scrollToSec(secs[secs.length - 1]);
        };
        tocList.appendChild(end);
      }
      markViewing();
    }

    /* Highlight the part currently under the reader's eye. */
    function markViewing() {
      var secs = host.querySelectorAll(".sec");
      var idx = 0;
      for (var i = 0; i < secs.length; i++) {
        if (secs[i].getBoundingClientRect().top <= 140) idx = i;
      }
      tocList.querySelectorAll(".tocItem").forEach(function (b, i) {
        b.classList.toggle("viewing", i === idx);
      });
    }

    /* Recompute the highlight whenever a part crosses the reading line.
       IntersectionObserver rather than a scroll listener: it fires reliably,
       costs nothing while idle, and needs no throttling. */
    var io = null;
    function observeSections() {
      if (io) io.disconnect();
      if (!window.IntersectionObserver) return;
      io = new IntersectionObserver(markViewing, { rootMargin: "-140px 0px -55% 0px" });
      host.querySelectorAll(".sec").forEach(function (s) { io.observe(s); });
    }

    /* Scroll events are the fallback for engines where the observer is unreliable;
       rAF-throttled, so it costs nothing while the reader is still. */
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { markViewing(); ticking = false; });
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    cleanup = function () {
      window.removeEventListener("scroll", onScroll);
      if (io) { io.disconnect(); io = null; }
    };

    /* A section renders only if every earlier section has been cleared. */
    function draw() {
      host.innerHTML = "";
      var cleared = done(chId);
      var stop = false;

      ch.sections.forEach(function (s, i) {
        if (stop) return;
        var sec = el("div", "sec");
        sec.appendChild(el("div", "step", "Part " + (i + 1) + " of " + ch.sections.length));
        sec.appendChild(el("h3", null, s.title));
        s.blocks.forEach(function (b) { sec.appendChild(renderBlock(b)); });

        var isCleared = cleared.indexOf(s.id) !== -1;
        if (s.check) sec.appendChild(buildCheck(s, isCleared));
        host.appendChild(sec);

        if (!isCleared) {
          stop = true;
          if (i < ch.sections.length - 1) {
            host.appendChild(el("div", "gate",
              "Answer the knowledge check above to unlock Part " + (i + 2) + "."));
          }
        }
      });

      if (!stop) {
        var d = el("div", "sec");
        d.appendChild(el("div", "step", "Chapter complete"));
        d.appendChild(el("h3", null, "You have worked through every part."));
        d.appendChild(el("p", null,
          "Consolidate with the flashcards, then test yourself under exam conditions on the Quiz tab."));
        var row = el("div", "row");
        var b1 = el("button", "btn", "Go to flashcards");
        b1.onclick = function () { go("cards"); };
        var b2 = el("button", "btn pur", "Take the quiz");
        b2.onclick = function () { go("quiz"); };
        var b3 = el("button", "btn ghost", "Reset this chapter");
        b3.onclick = function () {
          store[chId] = { cleared: [] }; save(); draw(); window.scrollTo(0, 0);
        };
        row.appendChild(b1); row.appendChild(b2); row.appendChild(b3);
        d.appendChild(row);
        host.appendChild(d);
      }
      refreshProgress();
      drawToc();
      observeSections();
    }

    function buildCheck(s, isCleared) {
      var box = el("div", "check");
      box.appendChild(el("div", "step", "Knowledge check"));
      box.appendChild(el("div", "q", s.check.q));
      var why = el("div", "why");
      var opts = [];

      s.check.choices.forEach(function (txt, idx) {
        var b = el("button", "opt", txt);
        opts.push(b);
        b.onclick = function () {
          if (idx === s.check.answer) {
            b.classList.add("right");
            opts.forEach(function (o) { o.disabled = true; });
            why.className = "why ok show";
            why.innerHTML = "<b>Correct.</b> " + s.check.why;
            markCleared(chId, s.id);
            setTimeout(function () {
              var y = window.scrollY;
              draw();
              window.scrollTo(0, y);
            }, 1400);
          } else {
            b.classList.add("wrong");
            b.disabled = true;
            why.className = "why no show";
            why.innerHTML = "<b>Not quite — try again.</b> Re-read the part above before choosing.";
          }
        };
        box.appendChild(b);
      });

      if (isCleared) {
        opts.forEach(function (o, i) {
          o.disabled = true;
          if (i === s.check.answer) o.classList.add("right");
        });
        why.className = "why ok show";
        why.innerHTML = "<b>Cleared.</b> " + s.check.why;
      }
      box.appendChild(why);
      return box;
    }

    draw();
  }

  /* ---------------- ABOUT (stub) ---------------- */
  function viewAbout(root) {
    root.appendChild(el("h2", null, "About <em>Us</em>"));
    root.appendChild(el("p", "lede", "Coming soon."));
  }

  /* ---------------- FLASHCARDS ---------------- */
  function viewCards(root) {
    root.appendChild(el("h2", null, "Say it before you <em>flip</em> it"));
    root.appendChild(el("p", "lede",
      "Active recall. Read the prompt, answer it out loud or on paper, then flip. " +
      "Be honest about what you actually knew."));

    var pool = [], order = [], i = 0, flipped = false;

    var bar = el("div", "toolbar");
    var sel = el("select");
    sel.appendChild(new Option("All chapters", "all"));
    CHAPTERS.forEach(function (c) { sel.appendChild(new Option(c.code + " — " + c.title, c.id)); });
    var shufBtn = el("button", "btn ghost", "Shuffle");
    bar.appendChild(sel); bar.appendChild(shufBtn);
    root.appendChild(bar);

    var wrap = el("div", "fc");
    var inner = el("div", "fcInner");
    var fa = el("div", "fcFace"), fb = el("div", "fcFace b");
    inner.appendChild(fa); inner.appendChild(fb);
    wrap.appendChild(inner); root.appendChild(wrap);

    var nav = el("div", "row center");
    var prev = el("button", "btn ghost", "← Previous");
    var counter = el("span", "count");
    var next = el("button", "btn", "Next →");
    nav.appendChild(prev); nav.appendChild(counter); nav.appendChild(next);
    root.appendChild(nav);

    inner.onclick = function () { flipped = !flipped; inner.classList.toggle("flip", flipped); };
    prev.onclick = function () { if (i > 0) { i--; show(); } };
    next.onclick = function () { if (i < order.length - 1) { i++; show(); } };
    shufBtn.onclick = function () { order = shuffle(order); i = 0; show(); };
    sel.onchange = build;

    function build() {
      pool = sel.value === "all"
        ? allCards()
        : (BY_ID[sel.value].flashcards || []).map(function (f) {
            return { f: f.f, b: f.b, code: BY_ID[sel.value].code };
          });
      order = pool.map(function (_, k) { return k; });
      i = 0; show();
    }

    function show() {
      flipped = false; inner.classList.remove("flip");
      if (!pool.length) {
        fa.innerHTML = "<div class='txt'>No cards yet.</div>";
        counter.textContent = ""; return;
      }
      var c = pool[order[i]];
      fa.innerHTML = "<span class='chip'>TOS " + c.code + "</span>" +
        "<div class='txt' style='margin-top:16px'>" + c.f + "</div>" +
        "<div class='hint'>click the card to flip</div>";
      fb.innerHTML = "<span class='chip'>Answer</span>" +
        "<div class='txt' style='margin-top:16px'>" + c.b + "</div>";
      counter.textContent = (i + 1) + " / " + pool.length;
      prev.disabled = i === 0;
      next.disabled = i === pool.length - 1;
    }
    build();
  }

  /* ---------------- QUIZ ---------------- */
  function viewQuiz(root) {
    root.appendChild(el("h2", null, "Test it under <em>exam</em> conditions"));
    root.appendChild(el("p", "lede",
      "No feedback until you submit. Answer every item, then review the explanations — " +
      "especially for the ones you got right by guessing."));

    var setup = el("div", "qcard");
    setup.appendChild(el("h4", null, "Choose your scope"));
    var sel = el("select");
    sel.appendChild(new Option("All chapters", "all"));
    CHAPTERS.forEach(function (c) { sel.appendChild(new Option(c.code + " — " + c.title, c.id)); });
    var num = el("select");
    [10, 15, 20, 30].forEach(function (n) { num.appendChild(new Option(n + " items", n)); });
    num.value = "15";
    var start = el("button", "btn", "Start quiz");
    var row = el("div", "row");
    row.appendChild(sel); row.appendChild(num); row.appendChild(start);
    setup.appendChild(row);
    root.appendChild(setup);

    var host = el("div");
    root.appendChild(host);

    start.onclick = function () {
      var pool = sel.value === "all"
        ? allQuiz()
        : (BY_ID[sel.value].quiz || []).map(function (q) { return { q: q, code: BY_ID[sel.value].code }; });
      if (!pool.length) { host.innerHTML = "<div class='qcard'>No quiz items yet.</div>"; return; }
      run(shuffle(pool).slice(0, Math.min(+num.value, pool.length)));
    };

    function run(items) {
      setup.style.display = "none";
      host.innerHTML = "";
      var picked = new Array(items.length).fill(null);

      items.forEach(function (it, n) {
        var card = el("div", "qcard");
        var meta = el("div", "qmeta");
        meta.innerHTML = "<span>Item " + (n + 1) + " of " + items.length + "</span>" +
          "<span>TOS " + it.code + " &middot; " + it.q.tos + "</span>";
        card.appendChild(meta);
        card.appendChild(el("div", "q", it.q.q));
        var opts = [];
        it.q.c.forEach(function (t, idx) {
          var b = el("button", "opt", t);
          opts.push(b);
          b.onclick = function () {
            picked[n] = idx;
            opts.forEach(function (o) { o.classList.remove("pick"); });
            b.classList.add("pick");
          };
          card.appendChild(b);
        });
        host.appendChild(card);
      });

      var sub = el("button", "btn", "Submit answers");
      var wrapRow = el("div", "row");
      wrapRow.appendChild(sub);
      host.appendChild(wrapRow);

      sub.onclick = function () {
        var blank = picked.filter(function (p) { return p === null; }).length;
        if (blank && !confirm(blank + " item(s) unanswered. Submit anyway?")) return;
        grade(items, picked);
      };
    }

    function grade(items, picked) {
      host.innerHTML = "";
      var score = 0;
      items.forEach(function (it, n) { if (picked[n] === it.q.a) score++; });
      var pct = Math.round(score / items.length * 100);

      var sc = el("div", "scorecard");
      sc.appendChild(el("div", "score", score + " / " + items.length));
      sc.appendChild(el("div", "scoreLbl", pct + "% — " +
        (pct >= 75 ? "passing standard. Push for consistency."
         : pct >= 50 ? "the concepts are landing, but the distractors are still catching you."
         : "re-read the chapter parts before quizzing again.")));
      host.appendChild(sc);

      var card = el("div", "qcard");
      card.appendChild(el("h4", null, "Review"));
      items.forEach(function (it, n) {
        var hit = picked[n] === it.q.a;
        var r = el("div", "rev " + (hit ? "hit" : "miss"));
        r.appendChild(el("div", "qq", (n + 1) + ". " + it.q.q +
          "<span class='tag'>" + it.q.tos + "</span>"));
        var yours = picked[n] === null ? "<i>no answer</i>" : it.q.c[picked[n]];
        r.appendChild(el("div", null,
          "<b>Your answer:</b> " + yours + "<br>" +
          "<b>Correct:</b> " + it.q.c[it.q.a] + "<br>" +
          "<b>Why:</b> " + it.q.why));
        card.appendChild(r);
      });
      var again = el("button", "btn", "New quiz");
      again.onclick = function () { setup.style.display = ""; host.innerHTML = ""; window.scrollTo(0, 0); };
      var rw = el("div", "row"); rw.appendChild(again);
      card.appendChild(rw);
      host.appendChild(card);
      window.scrollTo(0, 0);
    }
  }

  /* ---------------- nav pill ---------------- */
  function syncPill() {
    var pill = document.getElementById("navpill");
    if (!pill) return;
    var total = sum(function (c) { return c.sections.length; });
    var doneN = CHAPTERS.reduce(function (n, c) { return n + done(c.id).length; }, 0);
    pill.textContent = doneN === 0 ? "Start studying"
      : doneN >= total ? "All parts done"
      : "Continue · " + Math.round(doneN / total * 100) + "%";
  }

  /* ---------------- router ---------------- */
  function go(tab, arg) { location.hash = arg ? tab + "/" + arg : tab; }

  /* Set by a view that registers global listeners; run before the next render. */
  var cleanup = null;

  function route() {
    var h = (location.hash || "#home").slice(1).split("/");
    var tab = h[0] || "home";
    var root = document.getElementById("view");
    if (cleanup) { cleanup(); cleanup = null; }
    root.innerHTML = "";
    document.querySelectorAll(".tabs button").forEach(function (b) {
      var t = b.dataset.tab;
      b.classList.toggle("on", t === tab ||
        ((tab === "lesson" || tab === "chapters") && t === "home"));
    });
    document.body.classList.toggle("lessonView", tab === "lesson");
    if (tab === "lesson") viewLesson(root, h[1]);
    else if (tab === "chapters") viewChapters(root);
    else if (tab === "cards") viewCards(root);
    else if (tab === "quiz") viewQuiz(root);
    else if (tab === "about") viewAbout(root);
    else viewHome(root);
    syncPill();
    if (tab !== "lesson") window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tabs button").forEach(function (b) {
      b.onclick = function () { go(b.dataset.tab); };
    });
    var pill = document.getElementById("navpill");
    if (pill) pill.onclick = function () { go("lesson", nextUp().id); };
    route();
  });
})();
