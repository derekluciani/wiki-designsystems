# Primitiv: Reconciled design-system contract served via MCP

- **Retrieval date:** 2026-07-03
- **Source URL(s):**
  - https://github.com/AI-by-design/primitiv
  - https://primitiv.design
- **Status:** Raw-style frontier note for later validation. Do not promote without user review.

## Factual summary

Primitiv is an open-source/current design-system infrastructure project that scans design sources—Figma, codebase, Storybook, token files, and adapters—reconciles conflicts between them, writes a machine-readable contract, and serves that contract to agents via MCP. The project frames its thesis as **"Retrieval gives you data. Reconciliation gives you truth."**

As of retrieval, search/fetch metadata showed the repository was created in March 2026, recently pushed on 2026-07-03, and had latest release v2.1.2 on 2026-07-03.

## Key claims / data points

- Quick start:
  - `npx @ai-by-design/primitiv init`
  - `npx @ai-by-design/primitiv build`
  - `npx @ai-by-design/primitiv serve`
- `init` writes project-scoped MCP configuration and refreshes agent instructions/skills/CI wiring.
- If the project is on GitHub, `init` can install a `primitiv-verify.yml` workflow that runs `verify --strict` on PRs/pushes; branch protection can block merges on contract problems.
- Flow: scan sources → reconcile conflicts → infer design rules → write `primitiv.contract.json` → serve via MCP.
- Codebase scanner claims AST-based TypeScript/JSX extraction, classifies components by kind, extracts tokens across categories, and separates component-internal CSS variables from global design-token scale.
- MCP tools listed:
  - `get_design_context`
  - `get_token`
  - `get_component`
  - `get_conflicts`
  - `get_inferred_rules`
  - `get_violations`
- `get_component` returns props, variants, source provenance, and `kind` such as component/screen/provider/icon/other so agents reuse real UI and skip non-component artifacts.
- `get_violations` surfaces hardcoded literal/token misuse violations and smart-matches suggested tokens when possible.
- Rationale layer: `primitiv.rationale.yml` annotates tokens with `why`, `when`, `deprecated`, and `alternatives`; agents should prefer annotated tokens and refuse deprecated ones.
- Design principles include: source-agnostic, contract over documentation, active reconciliation not retrieval, inferred before prescribed, explicit governance, local-first/private, and incremental adoption.

## Implications for this wiki's Agentic AI cluster

- **Reconciliation is a missing layer in many MCP examples:** most systems expose a source; Primitiv claims to resolve conflicts among sources first.
- **Contracts can be CI-enforced:** agent-readable design-system truth can become a merge gate, not only a prompt input.
- **Provenance matters for trust:** tools can return where a token/component came from, which supports auditability and governance.
- **Agent-safe output includes violations, not only docs:** agents can query what not to do before writing UI.
- **Local-first MCP addresses privacy constraints:** useful contrast with hosted/remote MCP models.

## Citation / usage notes

- Treat as a credible current open-source/tooling example, not a large-enterprise case study; adoption evidence is not established by repo metadata.
- Validate package behavior before using as proof of claims beyond README documentation.
- Good candidate for later synthesis around "design-system contract" vs "design-system documentation" and governance-by-CI.
