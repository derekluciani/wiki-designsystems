---
name: wiki-ingest
description: Run this skill when the user asks to ingest a new document into the wiki.
---

If the user asks to ingest a document from the `/raw` directory, proceed to `Workflow 1`.
If the user asks to ingest a document from the `/outputs` directory, proceed to `Workflow 2`.

Both workflows distribute *synthesis* into the wiki's synthesis pages. They never create a page that merely mirrors a single document. Every page that takes content from a source must cite it: inline citations on specific claims plus a `Sources` section (see the page-structure convention in `AGENTS.md`).

## Workflow 1 — ingest a `/raw` source

1. Read the document and present *synthesis takeaways* to the user.
2. Propose whether the new *synthesis* content should be folded into existing wiki page(s) or added as a net-new page in the `/wiki` directory. Ask for user approval before moving to the next step.
3. If a net-new page is created, use a renamed copy of `html_template.html` for consistent styling, then structure the content per the page-structure convention in `AGENTS.md`.
4. Integrate the synthesis, citing the immutable `/raw` source: inline citations on specific claims and an entry in the page's `Sources` section that links to the source file in `/raw`.
5. If necessary, update `index.html` with a new `listing` (Title, one-line summary, link to page) in the appropriate category.
6. Update all existing cross-references and `Related pages` sections across the wiki.
7. Append an `entry` to `log.html`. Ensure the latest entry is added to the top of the list.

## Workflow 2 — promote an `/outputs` draft

1. Read the draft. (Do not re-present takeaways — the content was already reviewed with the user during the query that produced it.)
2. Propose whether the draft should be folded into existing wiki page(s) or added as a net-new page in the `/wiki` directory. Ask for user approval before moving to the next step.
3. If a net-new page is created, use a renamed copy of `html_template.html` for consistent styling, then structure the content per the page-structure convention in `AGENTS.md`.
4. Integrate the synthesis, preserving the citations already present in the draft (inline citations + a `Sources` section that links back to the originating `/raw` sources).
5. If necessary, update `index.html` with a new `listing` (Title, one-line summary, link to page) in the appropriate category.
6. Update all existing cross-references and `Related pages` sections across the wiki.
7. Append an `entry` to `log.html`. Ensure the latest entry is added to the top of the list.
8. Delete the original `/outputs` draft file — the wiki page and log entry are now the source of truth.
