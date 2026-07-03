# GitHub Primer MCP: Public design-system server for tokens, components, and patterns

- **Retrieval date:** 2026-07-03
- **Source URL(s):**
  - https://raw.githubusercontent.com/primer/react/main/packages/mcp/README.md
  - https://github.com/primer/react/tree/main/packages/mcp
  - https://github.com/primer/react/pull/6222
  - https://github.com/primer/brand/pull/1384
- **Status:** Raw-style frontier note for later validation. Do not promote without user review.

## Factual summary

GitHub's Primer React repository includes an `@primer/mcp` package. Its README states that the Primer MCP server connects AI tools to Primer's design system and provides tools for agents to connect with design tokens, components, patterns, and more. The package can be installed as a stdio MCP server with `npx @primer/mcp@latest`, including via VS Code MCP server installation.

A prior merged Primer React PR added the experimental MCP package. A current/open Primer Brand PR adds a separate `@primer/brand-mcp` package with tools for Primer Brand usage and an eval dashboard comparing output with/without the MCP server.

## Key claims / data points

- README: `@primer/mcp` can run locally or be set up in tools like GitHub Actions for AI agents.
- VS Code setup command: `npx @primer/mcp@latest` as a stdio MCP server named Primer.
- The merged Primer React PR described tools including:
  - `get_components`
  - `get_component`
  - `get_component_examples`
  - `get_patterns`
  - `get_pattern`
  - `get_tokens`
  - `get_*_usage` for foundation usage guidelines
- The PR positioned future work around setup/init, token suggestions, and migration feedback.
- The Primer Brand PR summary says the new Brand MCP ships seven tools:
  - `primer_brand_setup`
  - `primer_brand_component`
  - `primer_brand_examples`
  - `primer_brand_tokens`
  - `primer_brand_asset`
  - `primer_brand_docs`
  - `primer_brand_review`
- Primer Brand PR reported an eval example for a GitHub Skills landing page prompt where output shifted from no Primer Brand usage to **100% Primer Brand usage** with MCP enabled (per PR screenshot/description).
- Primer Brand PR includes an MCP smoke test in CI and JSDoc guidance updates, suggesting machine-facing docs are being maintained alongside server tooling.

## Implications for this wiki's Agentic AI cluster

- **Public design systems are shipping MCP packages as package artifacts:** Primer's server is distributed like developer infrastructure, not just as docs.
- **Usage examples and patterns are first-class:** Primer exposes not only components/tokens but patterns and examples, aligning with the argument that component APIs are insufficient.
- **Evals enter design-system governance:** the Primer Brand PR references an eval harness to measure whether agents actually use Primer Brand.
- **CI can test MCP affordances:** smoke tests in the design-system repo treat the MCP as part of the production surface.
- **Brand-specific MCPs may coexist with product UI MCPs:** Primer React and Primer Brand appear as related but distinct agent-readable surfaces.

## Citation / usage notes

- Treat `@primer/mcp` README and merged PR as strong evidence of public package existence and intended use.
- Treat Primer Brand PR details as current/in-flight unless merged; cite PR state if used later.
- Useful comparison target for Storybook: Primer builds a design-system-specific server; Storybook exposes an app's existing component docs/tests as MCP.
