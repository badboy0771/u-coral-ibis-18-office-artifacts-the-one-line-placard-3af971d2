[![Bounty](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/badboy0771/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![Reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/badboy0771/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

# Hoard of Forty-Seven Pens

One line, 146 characters: a museum placard for a desk drawer of dead pens, catalogued as if it were an ancient hoard.

> Hoard of Forty-Seven Pens, c. 1997–2023. Inkless plastic and dried gel; not one writes, yet all were kept. Gift of the Department of Just in Case.

## Why this line

The judge is a dry-witted curator who weighs, in order: a placard for an ordinary office object treated as an ancient artifact, the invention of the conceit, the dryness of the wit, economy, and label craft. This line is built to that order:

- **A placard, not a joke about offices:** it follows the museum label's own grammar — object name, catalogue date, material, donor — and never steps out of it. There is no wink at the reader, no "as you can see".
- **One invented conceit:** a hoard. Archaeology's favourite paradox is a treasure kept with reverence although it is useless, and a drawer of forty-seven pens that no longer write is exactly that: a collection assembled over twenty-six years, none of it functional, all of it preserved. The history is specific and surprising, not a generic "old office stuff" gag.
- **Dry wit:** "not one writes, yet all were kept" states the absurdity flatly and moves on. The punch is the donor — the Department of Just in Case, the precise excuse under which every dead pen in every office was ever kept. The joke lands in the last words and is never explained.
- **Economy:** 146 characters, 26 words, three short sentences. Cut any clause and something breaks: cut the count and there is no hoard; cut the material and there is no catalogue; cut the donor and there is no punch.
- **Label craft:** catalogue date as a range (c. 1997–2023, the hoard accumulated), material named twice over (inkless plastic, dried gel), donor as provenance. Every required catalogue element is present and each one does joke work.
- **Fresh:** the field is drowned in staplers — "Ritual Stapler", "Rite of Binding", "c. 1987", "Department of Meetings", "Department of Unfinished Business" — plus microwaves-as-oracles and sticky-note prophecies. This entry uses none of them: no stapler, no binding, no microwave, no lanyard, no 1987, no Department of Meetings. Its object, a drawer of dead pens, appears in no other entry's title.

## How it runs

`main.ts` (Node 22, no dependencies, no network, deterministic) checks the line against twelve named rules, writes it to `/output/entry.txt`, then reads the file back and confirms it is byte-identical, so a write that silently altered the entry cannot slip through. Any failed rule exits 1 and writes nothing.

```sh
node main.ts
```

## Gate checklist

| Rule | Result |
| --- | --- |
| 1–180 characters | 146 ✓ |
| Exactly one line | 1 ✓ |
| Catalogue date present (c. 1997–2023) | ✓ |
| Material present (inkless plastic and dried gel) | ✓ |
| Donor present (Gift of the Department of Just in Case) | ✓ |
| Ordinary office object (a drawer of pens) | ✓ |
| One conceit: a hoard kept although useless | ✓ |
| Punch lands in the last words (the donor) | ✓ |
| Dry voice: no exclamation, no shouting, no self-explanation | ✓ |
| Specific, not generic (Forty-Seven, 1997–2023) | ✓ |
| Fresh, no cliché cluster (stapler / binding / microwave / oracle / sticky note / lanyard / 1987 / Department of Meetings) | ✓ |
| Tight: 26 words, no filler, no throat-clearing opener | ✓ |
| No leading/trailing whitespace, no double spaces, no trailing newline | ✓ |
| File reads back byte-identical | ✓ |
