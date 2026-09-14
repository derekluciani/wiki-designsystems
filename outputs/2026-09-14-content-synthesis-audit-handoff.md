# Content Synthesis Audit — Implementation Handoff

**Audit date:** 2026-09-14  
**Scope:** `index.html`, `wiki/*.html`, and relevant sources under `raw/`  
**Purpose:** Implementation backlog for a follow-on agent. This document records findings only; the audit itself made no wiki changes.

## Operating constraints

- Never modify files under `/raw`; that layer is user-owned and immutable.
- Preserve `wiki/log.html` as an append-only history. Correct old entries with a new correction entry rather than editing history.
- Build new synthesis pages from `wiki/html_template.html` as a styling reference and follow `AGENTS.md` page structure.
- Every synthesis page must be listed in `index.html` and participate in catalog-order next-page navigation.
- Claims derived from sources require inline citations to `/raw` sources.
- New synthesis or externally researched information must meet the project’s user-validation requirement before promotion.
- After implementation, check internal links, citation anchors, catalog coverage, navigation order, and source paths.

## Baseline health

- 28 synthesis/reference pages were inspected.
- No true orphan pages were found.
- No broken production links were found. The only broken placeholders are in the non-production styling reference `wiki/html_template.html`.
- No clear case was found where a newer raw source directly supersedes an older source.
- Most known disagreements already have explicit Perspectives sections.

---

## Phase 1 — Source-grounded corrections

These changes can be made from the existing corpus without external research.

### 1. Correct the “token capital” analogy

**Priority:** High  
**File:** `wiki/sovereignty-and-token-capital.html`

**Problem**

The page says:

> “In design systems, token capital comprises design tokens, component libraries, design-system-aware MCP servers, and structured guidelines.”

The cited Satya Nadella source defines token capital as a firm’s proprietary AI capability and learning loop. It does not equate token capital with design tokens or ordinary design-system artifacts. The page also claims that a design system “ensures compliance” and “prevents vendor lock-in,” which is stronger than the source supports.

**Implementation**

- Preserve Nadella’s definition of token capital.
- Reframe design tokens, component libraries, MCP interfaces, and guidelines as infrastructure that may contribute to an organization’s AI learning system—not as token capital by definition.
- Replace guarantees such as “ensures” and “prevents” with bounded language such as “constrains,” “can reduce,” or “provides a model-independent interface.”
- Add a **Perspectives** section covering:
  - the affirmative case for design systems as part of a model-portable organizational learning loop;
  - the objection that static system assets are not themselves learned AI capability;
  - remaining vendor dependencies in models, agent clients, protocols, embeddings, and evaluation infrastructure.
- Keep source-derived claims distinct from wiki synthesis.

**Acceptance criteria**

- No sentence defines design-system artifacts as token capital.
- No uncited guarantee of compliance or vendor independence remains.
- The page contains an explicit live tension rather than a single-source strategic prescription.

### 2. Restore the accessibility caveat in parametric scales

**Priority:** High  
**Files:** `wiki/parametric-scales.html`, optionally `wiki/nate-baldwin.html`

**Problem**

`wiki/parametric-scales.html` recommends Utopia and CSS `clamp()` without preserving the raw Baldwin transcript’s warning that fluid `clamp()` formulas can interfere with user text scaling. The synthesis also blurs Baldwin’s deliberate distinction between text—which responds to user font preferences—and spacing, which his example keeps in pixels.

**Implementation**

- Add a section such as **Accessibility constraints on fluid scales**.
- Cite the existing Baldwin source.
- Explain:
  - why text uses `rem` in Baldwin’s model;
  - why spacing and text do not necessarily respond to the same variables;
  - that viewport-responsive scaling and user-controlled text scaling are separate dimensions;
  - Baldwin’s warning that some `clamp()` formulas can impair text resizing.
- Revise the existing Perspectives section so the debate is not only “generated vs. hand-tuned”; include mathematical consistency vs. user override and optical/accessibility correction.
- Do not add prescriptive WCAG details until supported by a user-provided raw source or separately validated research.

**Acceptance criteria**

- The source’s `clamp()` warning is represented and cited.
- The text/spacing distinction is explicit.
- The page no longer reads as an unconditional endorsement of fluid scaling.

### 3. Soften knowledge-graph causality

**Priority:** Medium  
**File:** `wiki/knowledge-graphs.html`

**Problem**

The page says transclusion prevents documentation drift and that bidirectional links “resolve” documentation drift. These mechanics can reduce duplicated-content drift and expose dependencies, but they do not resolve divergence among code, Figma, tokens, and documentation. The page also declares the linear-versus-networked debate “resolved” by a dual interface without sufficient evidence.

**Implementation**

- Replace absolute language such as “prevents” and “resolves” with bounded language such as “reduces,” “makes visible,” or “helps detect.”
- Distinguish three separate capabilities:
  1. transclusion reduces duplicate copies of canonical content;
  2. bidirectional links expose dependencies and impact;
  3. reconciliation determines which source wins when sources disagree.
- Cross-link the reconciliation distinction to `components-as-data.html`, `mcp-interface.html`, and/or `mcp-case-studies.html`.
- Change “the debate is resolved” into a defensible wiki position while preserving unresolved tradeoffs in authoring, discoverability, implementation complexity, and maintenance.

**Acceptance criteria**

- Graph mechanics are not represented as automatic source reconciliation.
- The Perspectives section retains a real disagreement.
- Relevant reconciliation pages are linked.

### 4. Resolve the missing “Broken Promises” page record

**Priority:** Medium  
**Files:** `wiki/log.html`, `index.html`, neighboring catalog pages; potentially a new synthesis page

**Problem**

`wiki/log.html` records:

> `[2026-06-06] | The Broken Promises of Design Systems`

No corresponding synthesis HTML file exists. The material currently appears in `itai-vonshak.html`, `adoption-and-trust.html`, `success-metrics.html`, and `agentic-readiness.html`.

**Preferred implementation**

Create a debate-centered synthesis page rather than another person profile. It should synthesize:

- the adherence fallacy;
- documentation as an “unread novel” when intent is not encoded;
- internal product-market fit and adoption cost;
- centralized-system compromise at organizational scale;
- rigid static systems vs. dynamic AI-mediated interfaces;
- responses from Frost, Mall, the token architecture material, and the maturity/governance pages.

Then:

- add it to the most appropriate section of `index.html`;
- update catalog-order navigation on adjacent pages;
- link it from `itai-vonshak.html`, `what-is-a-design-system.html`, `adoption-and-trust.html`, `success-metrics.html`, and `agentic-readiness.html` where appropriate;
- append a new log entry explaining that the previously recorded synthesis page has now been materialized.

**Fallback implementation**

If the user does not want a separate page, append a correction to `wiki/log.html` stating that the material was consolidated into the Itai Vonshak profile and related topic pages. Do not alter the historical 2026-06-06 entry.

**Acceptance criteria**

- The log no longer implies an unexplained missing artifact.
- If created, the page is cataloged, cited, cross-linked, and included in nav order.

### 5. Catalog the metrics reference page

**Priority:** Medium  
**Files:** `index.html`, `wiki/measuring-design-systems.html`, `wiki/measuring-success-metrics-table.html`, and the next catalog page

**Problem**

`wiki/measuring-success-metrics-table.html` has meaningful inbound links but is the only synthesis/reference page absent from `index.html`. Its next-page navigation therefore cannot match catalog order.

**Implementation**

- Add a concise listing under **III. Team, Governance & Adoption**, next to `measuring-design-systems.html`.
- Place it immediately after `measuring-design-systems.html` unless the user prefers reference pages in a separate index subsection.
- Update next-page navigation:
  - `measuring-design-systems.html` → metrics table;
  - metrics table → first Agentic AI page, if using the proposed order.
- Add an inline citation from the table’s introductory sentence or caption to `#s-1`; its source is currently listed but never referenced inline.

**Acceptance criteria**

- Every synthesis/reference HTML page is represented in `index.html`.
- Static next-page links match catalog order.
- The table’s source has an inline citation.

### 6. Add missing reciprocal links

**Priority:** Low  
**Files:** related-page footers on the named pages

Add links where the conceptual dependency is already present in the body:

- `mcp-case-studies.html` ↔ `agent-trust-levels.html`
- `sovereignty-and-token-capital.html` ↔ `knowledge-graphs.html`

Avoid inflating Related pages with weak associations.

---

## Phase 2 — Evidence validation before stronger claims

These tasks require web research and/or user-provided immutable source captures. Do not write external research directly into `/raw`; ask the user to add approved source material or follow the project’s established ingestion workflow.

### 7. Re-grade evidence in the MCP cluster

**Priority:** High  
**Files:**

- `wiki/mcp-case-studies.html`
- `wiki/mcp-interface.html`
- `wiki/agentic-readiness.html`
- `wiki/components-as-data.html`
- `wiki/evals-observability.html`
- related agentic pages using `raw/mcp/*.md`

**Problem**

Every current `raw/mcp/*.md` source labels itself a frontier note requiring later validation. Several distinguish public facts from reported internal practices and unverified outcome metrics. The wiki sometimes upgrades this evidence into field-level conclusions, especially in `mcp-case-studies.html` under “What these cases prove.”

**Implementation**

- Audit each claim into one of three evidence grades:
  1. publicly verifiable product/tool capability;
  2. reported internal practice;
  3. reported outcome or benchmark.
- Retain “reported” qualifiers for grades 2–3.
- Replace “prove” with “demonstrate,” “indicate,” or “provide evidence that,” as appropriate.
- Validate exact quantitative claims against first-party materials before treating them as canonical, especially:
  - Indeed’s 8 configurations, 1,056 prompt events, ~80% token reduction, and prototype volume;
  - Miro’s support-question reduction;
  - Spotify’s architecture, evaluation framework, and adoption metrics;
  - Primer Brand’s evaluation outcomes.
- Preserve the distinction between open-source existence and demonstrated organizational adoption.

**Acceptance criteria**

- No secondary reported metric is phrased as settled fact.
- Public capabilities and internal outcome reports are visibly distinguished.
- General field conclusions are proportional to the evidence.

### 8. Verify current Polaris GraphQL status

**Priority:** Medium  
**Files:** `wiki/knowledge-graphs.html`, `wiki/mcp-interface.html`

**Problem**

The former says Polaris currently “implements” a GraphQL API; the latter says it “previously pioneered” one. Both depend on a 2021 source.

**Implementation**

- Verify whether the API still exists and is public, internal, deprecated, or replaced.
- Date the example explicitly.
- Make both pages use consistent temporal language.

**Acceptance criteria**

- Both pages agree.
- Present-tense claims have current evidence; otherwise the example is clearly historical.

### 9. Deepen Web Components vs. typed-framework evidence

**Priority:** Medium  
**File:** `wiki/component-architecture.html`

**Problem**

The current debate relies mainly on one advocate for Web Components and one for React/TypeScript. “One implementation serves React, Vue…” omits integration costs such as wrappers, event handling, SSR/hydration, form behavior, accessibility behavior, and framework-level typing.

**Implementation**

Add current evidence before expanding the Perspectives section. Compare:

- standards longevity and cross-framework reuse;
- wrapper and integration overhead;
- custom-event and form semantics;
- SSR/hydration constraints;
- type inference and invalid-state modeling;
- accessibility responsibility;
- when a web-component core plus framework adapters is a defensible hybrid.

**Acceptance criteria**

- Neither camp is represented solely by aspiration.
- The page gives an explicit contingent position: architecture choice depends on platform mix, runtime constraints, and required compile-time guarantees.

### 10. Move the DTCG citation into the immutable provenance layer

**Priority:** Low  
**Files:** `wiki/token-architecture.html`, `wiki/token-pipelines.html`

**Problem**

Both pages cite `https://www.designtokens.org/tr/2025.10/` directly from their Sources sections, contrary to the convention that cited sources link into `/raw`.

**Blocker**

The implementation agent must not create or modify `/raw` files. Ask the user to provide an approved immutable snapshot or source document.

**After the source is provided**

- Update both pages to cite the `/raw` file.
- Verify the specification’s status, version, supported features, and actual tool interoperability.
- Keep the distinction between standardized interchange format and locally chosen token architecture.

---

## Future synthesis candidate

### Design-system evolution and change propagation

A dedicated page may be warranted after user validation. The topic is currently fragmented across:

- migrations and codemods in `team-maturity.html`;
- dependency freshness and release predictability in `measuring-design-systems.html`;
- schema governance and flowing change in `components-as-data.html`;
- source reconciliation in `mcp-interface.html` and `mcp-case-studies.html`;
- transclusion and dependency visibility in `knowledge-graphs.html`.

A useful debate core would contrast centralized contract control, federated evolution, automated migration, semantic versioning, and continuous reconciliation. Do not create this page without confirming that the existing corpus or new user-provided sources support sufficient depth.

## Post-implementation verification

Run checks for:

1. every `wiki/*.html` synthesis/reference page represented in `index.html`;
2. next-page links exactly matching catalog order, with the last page wrapping to the first;
3. no broken sibling, index, asset, or `/raw` links;
4. every `href="#s-N"` resolving to a unique source ID;
5. every listed source used by at least one inline citation;
6. every source-derived factual claim having an inline citation;
7. root-level footers containing Sources and Related pages;
8. new cross-links being reciprocal where useful;
9. a new append-only `wiki/log.html` entry listing every changed synthesis page;
10. `git diff` containing no changes under `/raw` unless the user—not the agent—supplied them.
