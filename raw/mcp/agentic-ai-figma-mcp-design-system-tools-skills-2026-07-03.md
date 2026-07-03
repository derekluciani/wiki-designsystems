# Figma MCP: Design-system search, variables, Code Connect, canvas write tools, and skills

- **Retrieval date:** 2026-07-03
- **Source URL(s):**
  - https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/
  - https://github.com/figma/mcp-server-guide/
  - https://developers.figma.com/docs/figma-mcp-server/skill-figma-implement-design/
  - https://github.com/figma/mcp-server-guide/blob/HEAD/skills/figma-create-design-system-rules/SKILL.md
  - https://github.com/figma/mcp-server-guide/blob/9680714bad40503ef37a9f815fd1d2cd15150af4/skills/figma-generate-library/SKILL.md
- **Status:** Raw-style frontier note for later validation. Do not promote without user review.

## Factual summary

Figma's MCP server has become a broad agent interface for extracting, searching, and writing design context. Official tools cover design context extraction, screenshots, variable/style extraction, design-system library search, Code Connect mappings, file/library metadata, asset transfer, and remote write operations. Figma also publishes agent skills for implementing designs, creating design-system rules, and generating/updating Figma libraries from code and tokens.

The official guide positions MCP as a way to bring Figma directly into coding agents while emphasizing file structure, Code Connect, variables, semantic naming, and custom rules as prerequisites for good output.

## Key claims / data points

- Tool examples from official docs include:
  - `get_design_context`: structured design context for a layer/selection; default React + Tailwind but prompt-customizable.
  - `get_variable_defs`: variables/styles used in a selection, including colors, spacing, typography.
  - `search_design_system` (remote only): searches connected design libraries for matching components, variables, and styles.
  - `get_libraries` (remote only): lists subscribed and available libraries.
  - `get_code_connect_map`: maps selected Figma nodes to code components in the codebase.
  - `add_code_connect_map`, `get_code_connect_suggestions`, `send_code_connect_mappings`: support Code Connect mapping workflows.
  - `get_metadata`: sparse XML outline for large selections.
  - `get_screenshot`: visual reference for parity checking.
  - `download_assets` / `upload_assets`: asset export/import flows.
  - `use_figma` (remote only): create/edit/delete/inspect Figma Design, FigJam, and Slides objects.
  - `generate_figma_design` (remote only, select clients): send live UI/web interfaces to new or existing Figma files or clipboard.
- `use_figma` notes that when relevant, the agent will first check design system or existing file content before creating from scratch.
- Figma's guide recommends Code Connect as the best way to get consistent component reuse in generated code.
- Best practices: use components for reused UI, connect components to code via Code Connect, use variables for spacing/color/radius/typography, name layers semantically, use auto layout, add annotations/dev resources.
- Figma's implement-design skill requires a sequence: parse Figma URL/selection → `get_design_context` → `get_screenshot` → download assets → translate to project conventions → validate for 1:1 visual parity.
- Figma's create-design-system-rules skill writes agent rules to `CLAUDE.md`, `AGENTS.md`, or Cursor rule files and asks agents to analyze component organization, styling approach, token locations, and architecture before finalizing rules.
- Figma's generate-library skill describes a long multi-phase workflow for building/updating a professional-grade design system in Figma from a codebase, with mandatory user checkpoints and 20–100+ sequential `use_figma` calls.

## Implications for this wiki's Agentic AI cluster

- **Design-to-code is becoming code-to-design-to-rules:** Figma MCP covers extraction from designs, writing to canvas, Code Connect mapping, and agent-rule creation.
- **Code Connect is a key anti-slop mechanism:** mapping Figma components to actual code components prevents agents from reimplementing visual facsimiles.
- **Variables are machine-readable tokens in context:** `get_variable_defs` creates a bridge between visual design and token pipeline.
- **Skills encode process discipline:** official Figma skills turn fragile ad hoc prompting into required workflows with validation checkpoints.
- **Agentic design-system creation is sequential and governed:** Figma's library-generation skill explicitly warns against one-shot generation and requires user signoff between phases.

## Citation / usage notes

- Prefer official Figma docs and GitHub skill files for tool names and workflow claims.
- Some features are remote-only, beta, select-client-only, or subject to rate limits; preserve those qualifiers in any synthesis.
- This note is not evidence that Figma MCP alone ensures design-system fidelity; official docs repeatedly require Code Connect, variables, rules, and validation.
