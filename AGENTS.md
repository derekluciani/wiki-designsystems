## Wiki Purpose

- The wiki is a compounding learning base that maps the Design Engineer role and the potential impact for enterprise organizations in the new age of AI — its concepts, craft, tools, people and orgs — through multiple faithful perspectives, with the enterprise-impact angle woven throughout, organized as cited synthesis pages you browse and query.

## What Success looks like
- Not a thesis to defend; not a tool aimed at a specific decision. Purely, understanding for its own sake.
- Every notable person, organization, concept, and comparison about the role has a clear page where multiple (even conflicting) perspectives sit side-by-side.
- The base corpus compounds — querying it produces outputs that, once promoted back into the wiki, make it richer over time.

### Structural model
The wiki is essentially a graph of synthesis pages, organized by concept / person / org / comparison. Raw documents are inputs that get cited, never pages of their own.
Two spines: the role (primary — sociological, organizational, enterprise impact) and the craft (supporting — the concrete competencies, kept descriptive, showing what the work actually is).
The "enterprise impact" angle is a recurring dimension across role pages, not a separate destination.

## Wiki Architecture

`/raw` — a directory of source documents (ie. articles, papers, images, data files, etc.) curated by the user. These files are _immutable_ — the LLM reads them but _never modifies_ them. The user owns this layer entirely.

`/wiki` — a directory of HTML _synthesis pages_ (ie. summaries, synthesis, entities, concepts, comparisons, visualization, etc.). These files are _mutable_ — the LLM owns this layer entirely and is responsible for:
1. creating HTML pages and updating them when new /raw sources are ingested.
2. maintaining cross-references across wiki pages.
3. keeping everything consistent.

`/outputs` — a directory of documents produced by the LLM from user queries.

`/skills` — a directory of repeatable instructions invoked by the user.

## Key Files

`index.html` — is a _content-oriented catalog of everything in the wiki_.
- Each _synthesis page_ in the wiki is represented here as a short `listing` (ie. title, one-line summary, hyperlink).
- Each `listing` is organized into categories (entities, concepts, sources, etc.) identified, created and maintained by the LLM.

`log.html` — is an append-only, _chronological record of what happened and when_.
- Naming convention: `[YYYY-MM-DD] | Synthesis Title`
- The purpose of the log is to enable the LLM to easily parse the records with simple unix commands (ie. `grep`).

## Conventions

### Page structure
Every synthesis page (built from a renamed copy of `wiki/html_template.html`, which exists only as a styling reference) follows this shape:
1. A `<nav class="wiki-nav">` header with `← Return to Index` (left) and the next page in catalog order as `${PAGE_NAME} →` (right), matching the order in `index.html` (last page links back to the first).
2. `<h1>` — the page title.
3. A one-line italic summary directly under the title.
4. The body, organized with `<h2>`/`<h3>` sections. For any topic where sources disagree, include a **Perspectives** section that presents the differing views side-by-side rather than collapsing them into one.
5. A root-level `<footer class="markdown-body">` (sibling of `<article class="markdown-body">`, not nested inside it) wrapping `Sources` and `Related pages` — each as an `<h4>` heading, with Sources as an ordered list linking to `/raw` files (citation targets) and Related pages as links to sibling wiki pages.

### Provenance
Claims drawn from a source carry an **inline citation** (a superscript link to the matching item in that page's `Sources` section), and every cited source appears in the `Sources` section linking back to its file in `/raw`. Raw documents are inputs that get cited — never pages of their own.

### Paths
`index.html` is the front door and lives at the repo root; it references the wiki as `wiki/<name>.html` and `wiki/styles.css`. `log.html`, `html_template.html`, `styles.css`, and all synthesis pages live in `/wiki`. Synthesis pages reference `./styles.css`, sibling pages as `./<name>.html`, the catalog as `../index.html`, and raw sources as `../raw/<file>`.