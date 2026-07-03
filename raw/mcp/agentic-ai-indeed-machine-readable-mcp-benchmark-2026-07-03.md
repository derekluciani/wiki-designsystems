# Indeed machine-readable design-system MCP benchmark: JSON vs Markdown/TOON

- **Retrieval date:** 2026-07-03
- **Source URL(s):**
  - https://intodesignsystems.substack.com/p/ai-design-system-mcp-example
  - https://www.intodesignsystems.com/design-systems-mcp
  - https://www.intodesignsystems.com/agenda/design-systems-for-mcp-and-llms
- **Status:** Raw-style frontier note for later validation. Do not promote without user review.

## Factual summary

Diana Wolosin's Indeed work is reported as a year-long effort to make Indeed's production design system machine-readable for MCP and LLM usage. The system parsed MDX documentation into structured metadata via JavaScript parsers organized by knowledge domain—accessibility, development, localization, and design—then merged these into JSON per component and indexed them in Vectra, an open-source vector database. The reported scope was **77 components**.

The most cited contribution is a benchmark of **8 MCP configurations** and **1,056 prompt events** to evaluate metadata formats. The reported winner was JSON: equal or better accuracy than hybrid Markdown+JSON with much lower token cost.

## Key claims / data points

- Core framing: **"AI is a new user"**; docs must be codified into structured data, metadata, schemas, and explicit constraints that LLMs can parse and reason over.
- MCP flow described: user prompt → LLM keyword/query compilation → MCP → RAG/vector lookup → results to LLM → LLM prototypes experience.
- Production pipeline: MDX docs → JavaScript parsers per knowledge domain → one JSON file per component → chunking/indexing in Vectra → MCP query results.
- Reported scope: **77 components**.
- Reported benchmark setup: Cursor + Claude Sonnet 4.5 + 8 duplicated MCP configurations.
- Formats tested: Markdown/MDX, plain Markdown, hybrid Markdown+JSON, JSON, and TOON (Token-Oriented Object Notation).
- Reported formula: **22 prompts × 3 runs × 2 (MCP input and LLM output) × 8 configurations = 1,056 prompts**.
- Evaluation axes: token efficiency and LLM accuracy.
- Reported finding: JSON delivered same or better accuracy than hybrid Markdown+JSON with about **80% fewer tokens**.
- Reported cost example: the 22-query workload would cost about **$1,500/year** against original Markdown docs vs **$300/year** with JSON—roughly **5× cheaper**.
- Nuance: JSON is recommended for structured component metadata; Markdown remains useful for natural-language rules/instructions, ideally with front matter rather than verbosity.
- Reported launch impact: **4,300 AI-generated prototypes** in four months using React design-system components and Indeed visual language; these were not Figma MCP or Tailwind workflows.

## Implications for this wiki's Agentic AI cluster

- **Format is an architectural choice, not a documentation preference:** data shape changes model behavior, accuracy, and cost.
- **Do not pipe human docs straight into MCP:** human MDX can be costly and less accurate; parse into structured contracts first.
- **Benchmarking is a governance activity:** teams can evaluate metadata formats before committing to infrastructure.
- **MCP is deterministic; LLM reasoning is stochastic:** structured data reduces uncertainty but does not eliminate model variance.
- **The JSON/Markdown split is a useful synthesis point:** component contracts in JSON; rules, rationale, and narrative guidance in smaller Markdown layers.

## Citation / usage notes

- The benchmark details are reported through Into Design Systems notes and related landing pages. Validate against Diana Wolosin's full talk, slides, or internal/public benchmark artifacts before treating numbers as canonical.
- The cost figures are illustrative for the reported workload; do not generalize without local token pricing and call-volume modeling.
- High-value for future wiki debate: whether JSON is universally best or best only for structured component metadata under this benchmark's retrieval/evaluation design.
