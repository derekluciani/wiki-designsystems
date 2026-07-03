# Miro Aura: Design-system MCP + Claude Code skills

- **Retrieval date:** 2026-07-03
- **Source URL(s):**
  - https://intodesignsystems.medium.com/how-miro-onboarded-ai-into-their-design-system-with-mcp-and-claude-code-skills-1dc2975eb098
  - https://www.intodesignsystems.com/blog/miro-ai-design-system-mcp-claude-code-skills
  - https://developers.miro.com/docs/miro-mcp
  - https://github.com/miroapp/miro-ai
- **Status:** Raw-style frontier note for later validation. Do not promote without user review.

## Factual summary

Miro's design-system team framed AI as a new team member to onboard, naming the practice **Aura**. The reported internal stack combines documentation cleanup, richer metadata, a simple design-system MCP server, Claude Code routing instructions, Claude Code skills, and contribution workflows. The reported team size was six people serving 48+ product teams. Miro also has an official public MCP server for Miro boards and a public `miroapp/miro-ai` repository that bundles MCP configuration and agent skills for tools such as Claude Code, Gemini CLI, Cursor, Codex, Kiro, and others.

The design-system-specific Aura case is primarily reported via Into Design Systems notes from Andressa Lombardo and Eddie Machado's AI Conference for Designers 2026 session. The official Miro MCP docs/repository corroborate Miro's broader MCP and skills direction, but not every internal Aura metric.

## Key claims / data points

- Miro treated AI as a literal onboarding target: "new hire" framing, with emphasis on explicit rules, consistency, and experimentation.
- First failure mode: agents chose wrong icons and a deprecated token because names and docs lacked machine-usable intent. Miro reportedly fixed this by adding visual descriptions, use cases, categories, and explicit "do not use" language to icons/tokens.
- Initial design-system MCP reportedly had two tools: `list components` and `get component docs`.
- Adding explicit routing instructions in the team's root Claude file reportedly reduced design-system Slack support questions by **70–80%**.
- Icon/token lookup loops emerged because internal React-rendered documentation links were not accessible to the agent as Markdown.
- Miro built `search icons` and `search tokens` as Claude Code skills first, not MCP tools, because skills were faster to build and iterate.
- Reported token optimization: one icon-search skill compressed from **33,000 tokens** to about **410 tokens** (~98% reduction).
- A `wrap-up` skill reportedly runs linting, quality/accessibility/localization checklists, commit summaries, and PR templating.
- Reported contribution experiment: on a bug-bash day, Aura created **17 PRs in an hour**.
- Official Miro MCP server exposes board-level tools including board creation/search, layout read/write, board context extraction, diagram/document/table creation, comments, and image operations; it uses OAuth 2.1, enterprise controls, permissions, and rate limiting.

## Implications for this wiki's Agentic AI cluster

- **Metadata beats model worship:** hallucination was treated as a context-quality failure, not primarily a model failure.
- **Negative constraints matter:** "do not use for X; use Y instead" belongs inside machine-readable token/icon metadata, not just prose docs.
- **MCP vs skill is a strategic split:** stable, shared capabilities may deserve MCP; fast workflow-specific lookup/PR flows can start as skills.
- **Agent routing is governance:** if multiple MCPs are loaded, a root instruction file can be the difference between discovery and non-use.
- **Instrumentation must adapt:** if MCP becomes frictionless, call counts may become less visible; support deflection and contribution volume may be better adoption proxies.
- **Docs rendering is now infrastructure:** client-rendered documentation can make the design system invisible to agents.

## Citation / usage notes

- Treat the internal Aura metrics (70–80% support deflection, 33k→410 tokens, 17 PRs/hour) as conference-report claims until validated against primary Miro materials or recordings.
- Use official Miro MCP docs/repo only for claims about the public Miro board MCP and plugin/skills distribution, not for internal design-system outcomes.
- Good candidate for later synthesis under: AI-ready metadata, skills vs MCP boundaries, support-deflection metrics, and design-system contribution automation.
