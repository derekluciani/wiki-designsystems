# Storybook MCP for React: Component context, story previews, and self-healing tests

- **Retrieval date:** 2026-07-03
- **Source URL(s):**
  - https://storybook.js.org/docs/ai/mcp/overview.md
  - https://storybook.js.org/blog/storybook-mcp-for-react/
  - https://github.com/storybookjs/mcp
- **Status:** Raw-style frontier note for later validation. Do not promote without user review.

## Factual summary

Storybook's MCP server exposes a running Storybook as an agent-readable interface. In preview, the AI features—especially manifests and MCP—are limited to React projects and may change. The MCP server lets agents query component documentation, generate or update stories, preview story output, and run Storybook tests including accessibility checks if configured.

The official docs describe three toolsets: **docs**, **development**, and **testing**. The intended loop is that an agent reuses existing components, writes stories to preview its work, runs interaction/a11y checks, fixes problems, and reruns tests until resolved.

## Key claims / data points

- Installation: `npx storybook add @storybook/addon-mcp` registers the addon; running Storybook exposes MCP at `http://localhost:6006/mcp`.
- Agent setup: `npx mcp-add --type http --url "http://localhost:6006/mcp" --scope project` configures an MCP-compatible agent.
- Storybook recommends adding `AGENTS.md`/`CLAUDE.md` instructions requiring the agent to use the MCP before UI work and explicitly warning: **never hallucinate component properties**.
- Docs toolset includes:
  - `list-all-documentation`
  - `get-documentation`
  - `get-documentation-for-story`
- Development toolset includes:
  - `get-changed-stories`
  - `get-storybook-story-instructions`
  - `preview-stories`
- Testing toolset includes:
  - `run-story-tests`
- Storybook composition is supported: if composed Storybooks have manifests, MCP responses can include component knowledge from multiple Storybooks.
- Official blog says Storybook MCP became available in Storybook 10.3 for React projects; other framework support was planned later.
- Storybook's public MCP monorepo had a latest listed release of `@storybook/addon-mcp@0.4.2` dated 2026-03-19 in search metadata.

## Implications for this wiki's Agentic AI cluster

- **Storybook becomes an agent runtime, not just documentation:** stories are executable examples, preview surfaces, and tests.
- **Self-healing loops are moving from concept to product surface:** the agent can create a story, fail an a11y/interaction test, patch code, and rerun.
- **Component manifests are a machine-readable contract:** the manifest is the anti-hallucination substrate for props, stories, and docs.
- **AGENTS.md becomes the orchestration layer:** the MCP alone is not enough; Storybook explicitly instructs teams to add rules that force MCP use before UI generation.
- **Composition matters for multi-system environments:** cross-Storybook composition suggests a path for federated design-system context without multiple bespoke MCPs.

## Citation / usage notes

- Prefer official Storybook docs for setup/tooling claims.
- Treat benchmark or token-efficiency claims in the blog as directional unless the underlying benchmark data is obtained.
- Useful comparison target for Miro/Indeed: Storybook emphasizes a closed validation loop; Miro emphasizes support deflection and skills; Indeed emphasizes data format and context loading.
