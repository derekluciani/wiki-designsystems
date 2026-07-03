# Indeed progressive context plugin: Beyond MCP toward layered context architecture

- **Retrieval date:** 2026-07-03
- **Source URL(s):**
  - https://www.designsystemscollective.com/fully-machine-readable-design-systems-3d43329ec3e3
  - https://intodesignsystems.substack.com/p/ai-design-system-mcp-example
- **Status:** Raw-style frontier note for later validation. Do not promote without user review.

## Factual summary

Diana Wolosin's follow-up article argues that a design-system MCP solves component retrieval but not full UI quality. At Indeed, prototypes generated with the design-system MCP could retrieve components correctly yet still violate typography hierarchy, spacing, color usage, icon conventions, and brand feel. The proposed solution is **progressive context disclosure**: package design-system knowledge as a plugin/context library with skills, references, agents, MCP definitions, and rules, each loaded at the moment and level of persistence appropriate to the task.

The design-system MCP remains authoritative for components, props, tokens, and icons. The plugin carries surrounding design knowledge: when to use components, composition shapes, spatial rhythm, implementation rules, quality/taste standards, and brand expression.

## Key claims / data points

- Indeed's design system serves more than **2,000 R&D designers and engineers** across jobseeker and employer platforms.
- Failure mode: prompts like "build me a card" retrieve Card/Button knowledge but not global spacing grammar, typography hierarchy, icon conventions, or compositional intuition.
- Principle: **components are on-demand; foundations must be attached before the LLM writes UI code**.
- Plugin packaging: Anthropic/Claude Code and Cursor both use plugin-like conventions but parse folder paths differently.
- Portable overlaps reported: `skills/*/SKILL.md`, `agents/*.md`, and `references/`.
- Indeed reportedly created six reference layers rather than one `DESIGN.md`; a top-level skill indexes the design-system context and routes the LLM to the right layer.
- Production audit: Sourcegraph MCP audit across **14 production codebases**, **1,697 files**, and **6,147 spacing token occurrences**; this evidence identified six recurring spacing tokens and four global recipes.
- Calibration runs exposed documentation defects; one deprecated active-card left-border accent persisted because the docs still instructed it.
- Loading taxonomy described: foundations when `.tsx`/`.ts` files are open; quality/taste when reviewing/composing; implementation when writing source; composition recipes when assembling; spatial rhythm when spacing matters; MCP for specific component questions.
- Claimed result: with only MCP, generated prototypes had component correctness but foundation drift; with the plugin, components, foundations, composition, spatial rhythm, and brand expression aligned more closely.

## Implications for this wiki's Agentic AI cluster

- **MCP is necessary but insufficient:** retrieval can answer "what is the Button API?" but not always "what makes this surface feel like us?"
- **Context timing is a first-class design-system problem:** always-on foundations, task-routed references, and on-demand MCP calls load different knowledge at different moments.
- **DESIGN.md is too blunt at enterprise scale:** one monolithic file may collapse under the variety of design knowledge; small layered references are a more scalable pattern.
- **Taste/judgment can be partially operationalized:** not fully automated, but grounded through production audits, recurring recipes, and calibration runs.
- **Documentation debt becomes visible through agent failure:** if the LLM follows wrong docs, the issue is not prompt quality; it is system truth quality.

## Citation / usage notes

- This is a primary-ish practitioner article by Diana Wolosin, but public screenshots/results should still be treated as case evidence, not independently reproduced benchmark data.
- Strong candidate for a wiki debate section: "MCP-only architecture vs plugin/context-library architecture."
- Do not merge this note with the JSON benchmark uncritically: the benchmark addresses metadata format; the plugin article addresses context loading and design-quality failures after retrieval works.
