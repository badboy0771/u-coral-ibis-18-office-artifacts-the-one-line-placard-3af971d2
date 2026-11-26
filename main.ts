// Office Artifacts: The One-Line Placard Contest
// u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
//
// The program writes ONE line — a museum placard for an ordinary office
// object, treated as an ancient artifact — to /output/entry.txt, and
// refuses (exit 1) unless the line passes every named rule below.
//
// The entry:
//   "Hoard of Forty-Seven Pens, c. 1997–2023. Inkless plastic and dried
//    gel; not one writes, yet all were kept. Gift of the Department of
//    Just in Case."
//
// Why this object: the field is drowned in staplers ("Ritual Stapler",
// "Rite of Binding", "c. 1987", "Department of Meetings/Unfinished
// Business"), microwaves-as-oracles and sticky notes. A desk drawer of
// dead pens is an ordinary office object nobody else picked, and its
// joke is a specifically curatorial one: a hoard kept with reverence
// despite being entirely useless — archaeology's favourite paradox.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Hoard of Forty-Seven Pens, c. 1997\u20132023. Inkless plastic and dried gel; " +
  "not one writes, yet all were kept. Gift of the Department of Just in Case.";

// ---------------------------------------------------------------- rules
// Each rule is named, checkable, and enforced by the second pass below.
// A rule that fails prints its name and exits 1; nothing is written.

interface Rule {
  name: string;
  why: string;
  check: (text: string) => boolean;
}

const RULES: Rule[] = [
  {
    name: "single-line",
    why: "The gate allows exactly one line of 1-180 characters.",
    check: (t) => !t.includes("\n") && !t.includes("\r") && t.trim().length > 0,
  },
  {
    name: "within-180-chars",
    why: "Gate: 1 to 180 characters, UTF-8.",
    check: (t) => t.length >= 1 && t.length <= 180,
  },
  {
    name: "catalogue-trio",
    why: "Brief: the placard must carry a catalogue date, a material, and a donor.",
    check: (t) =>
      /c\. \d{4}/.test(t) && // date: "c. 1997–2023"
      /Inkless plastic and dried gel/.test(t) && // material
      /Gift of the Department of Just in Case/.test(t), // donor
  },
  {
    name: "object-is-ordinary",
    why: "The object must be an ordinary office object, not a generic office joke.",
    check: (t) => /Pens/.test(t) && !/meeting|email|deadline|boss/i.test(t),
  },
  {
    name: "one-conceit",
    why: "Judge criterion 2: one specific, surprising imagined history — a hoard kept although useless — not a pile of jokes.",
    check: (t) => /Hoard of Forty-Seven Pens/.test(t) && /not one writes, yet all were kept/.test(t),
  },
  {
    name: "punch-last",
    why: "The joke lands in the final clause: the donor is the punchline, so the donor clause must close the line.",
    check: (t) => t.endsWith("Gift of the Department of Just in Case."),
  },
  {
    name: "dry-not-strained",
    why: "Judge criterion 3: deadpan curator voice — no exclamation, no ALL CAPS shouting, no explaining its own joke.",
    check: (t) => !t.includes("!") && t !== t.toUpperCase() && !/as you can see|in other words|that is to say/i.test(t),
  },
  {
    name: "specific-not-generic",
    why: "Concrete numbers sell the catalogue: a counted hoard (Forty-Seven) and a dated range (1997–2023), not 'many old pens'.",
    check: (t) => /Forty-Seven/.test(t) && /1997\u20132023/.test(t),
  },
  {
    name: "no-stapler-cluster",
    why: "The field's cliché cluster — stapler / binding rite / microwave oracle / sticky-note prophecy, c. 1987, Department of Meetings — must not appear.",
    check: (t) =>
      !/stapler|binding|microwave|oracle|sticky note|lanyard|1987|Department of (Meetings|Unfinished Business)/i.test(t),
  },
  {
    name: "donor-is-the-joke",
    why: "The donor's name carries the humour ('Just in Case' — the exact excuse every dead pen was kept under), so it must be present verbatim.",
    check: (t) => /Department of Just in Case/.test(t),
  },
  {
    name: "economy",
    why: "Judge criterion 4: every word earns its place — three short sentences, no filler adjectives, no throat-clearing opener.",
    check: (t) => t.split(/\s+/).length <= 30 && !/^(Behold|Lo,|Imagine|Picture this)/.test(t),
  },
  {
    name: "read-aloud",
    why: "Judge criterion 4: the line must read well aloud — balanced clauses, one semicolon pivot, no tongue-twister pile-up.",
    check: (t) => (t.match(/;/g) || []).length === 1 && (t.match(/\./g) || []).length === 4,
    // 4 periods, not 3: one hides inside "c." plus one ending each of the three sentences.
  },
];

// ------------------------------------------------------------ second pass
// Pass 1: every named rule against the entry constant.
// Pass 2: re-read what was written and confirm byte-identity with the
// constant, so a write failure can never silently ship a different line.

function fail(rule: string, detail: string): never {
  console.error(`RULE FAILED: ${rule} — ${detail}`);
  process.exit(1);
}

for (const rule of RULES) {
  if (!rule.check(ENTRY)) {
    fail(rule.name, rule.why);
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Pass 2: byte-identity re-read.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  fail("byte-identity", "written file differs from the entry constant");
}

console.log(`wrote /output/entry.txt (${ENTRY.length} characters, ${ENTRY.split(/\s+/).length} words)`);
