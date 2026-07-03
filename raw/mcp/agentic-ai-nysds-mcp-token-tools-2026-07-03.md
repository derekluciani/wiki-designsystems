# New York State Design System MCP token tools: Semantic-token filtering for agents

- **Retrieval date:** 2026-07-03
- **Source URL(s):**
  - https://github.com/ITS-HCD/nysds/pull/1495
  - https://github.com/ITS-HCD/nysds
  - https://github.com/ITS-HCD/nysds/releases/tag/v1.18.3
  - https://designsystem.ny.gov/
  - https://designsystem.ny.gov/foundations/styles/
- **Status:** Raw-style frontier note for later validation. Do not promote without user review.

## Factual summary

The New York State Design System (NYSDS) is a public-sector design system built with Lit web components and CSS custom properties. It includes components, styles, themes, and Figma libraries. A merged PR from May 2026 refactored MCP token tools to make token responses more agent-appropriate. The v1.18.3 release notes include this MCP token-tool refactor among shipped changes.

The PR is a concrete example of design-system teams tuning MCP outputs for LLM behavior—not simply exposing all tokens equally.

## Key claims / data points

- NYSDS repository: reusable code components for New York State applications and websites; built with LitElement and custom CSS properties.
- Public homepage: shared accessible, mobile-friendly components, design tokens, and guidelines for NYS teams; design tokens cover colors, spacing, typography, and more.
- Repo metadata from search: latest release v1.19.2 dated 2026-06-24; v1.18.3 release on 2026-05-28 included the MCP token refactor.
- PR #1495 merged 2026-05-20 and refactored token tools:
  - Consolidated four token tools into three.
  - Merged `get_tokens` + `find_tokens` into unified `find_tokens` with `include` parameter: `recommended` / `primitive` / `all`.
  - Renamed `get_token_info` to `get_token`.
  - Kept `get_token_graph`.
  - Default response cut from **382 → 216 tokens**.
  - Default `recommended` filter excludes ~150 primitive color palette ramps that LLMs should not use directly.
  - Dropped `cssValue` from discovery responses to prevent LLMs from using primitive references instead of semantic `var()` tokens.
  - Moved agency themes out of token tools and into `get_guide(topic: "themes")` as Markdown guidance.
  - Switched to raw JSON responses and added `readOnlyHint` annotations to token tools.
  - Removed legacy parser API; only CSS-centric functions remain.
- PR timeline included a commit adding descriptions to **71 semantic tokens**.

## Implications for this wiki's Agentic AI cluster

- **Less context can be better context:** reducing default token responses from 382 to 216 tokens is a deliberate anti-confusion move.
- **Recommended defaults encode governance:** agents should see semantic/recommended tokens first, not every primitive.
- **Omitting fields can steer behavior:** dropping `cssValue` is a design decision to prevent the agent from using implementation-adjacent primitive references incorrectly.
- **Guides and tools should be separated:** token lookup returns JSON; theme guidance moves to Markdown, echoing Indeed's JSON-for-structured-data / Markdown-for-rules split.
- **Public-sector systems are participating in frontier MCP practice:** this is not limited to private SaaS design systems.

## Citation / usage notes

- Strongest evidence is the merged GitHub PR and release notes; use exact PR language for tool changes.
- Do not overclaim full NYSDS agentic architecture from this PR alone; it specifically documents token-tool optimization.
- Good micro-case for a wiki section on "MCP output shaping" or "agent-safe token APIs."
