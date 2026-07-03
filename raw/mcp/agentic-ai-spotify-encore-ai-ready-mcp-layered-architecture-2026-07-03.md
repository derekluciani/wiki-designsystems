# Spotify Encore: AI-ready design system via MCP, evaluation, and layered architecture

- **Retrieval date:** 2026-07-03
- **Source URL(s):**
  - https://www.intodesignsystems.com/blog/how-spotify-design-system-ai-ready
  - https://www.intodesignsystems.com/use-cases/spotify-design-system
  - https://www.youtube.com/watch?v=W_gbQS78Fuw
- **Status:** Raw-style frontier note for later validation. Do not promote without user review.

## Factual summary

Spotify's Encore design-system team is reported to be rethinking the system for AI-first workflows. The core concern is that teams increasingly ask AI agents before checking design-system documentation, which can bypass Encore and produce inconsistent custom UI. Their response has two workstreams: make Encore documentation machine-readable through an MCP server and redesign component architecture into clearer layers that are easier for humans and machines to use.

This case is based on Into Design Systems notes and a recorded Spotify meetup session featuring Victoria Tholerus and Aleksander Djordjevic.

## Key claims / data points

- Problem framing: "What happens when AI becomes the go-to teammate instead of our human ones?"
- Reported risks: inconsistent UI, custom non-compliant code, reduced design-system adoption, and loss of system relevance.
- Strategic shift: design systems must serve both humans and machines.
- Reported MCP workstream: Encore documentation/guidelines exposed to AI agents such as Cursor so generated code can align with Spotify standards.
- Testing framework reportedly evaluates:
  - generated components vs Encore components
  - lint errors
  - similarity scores
  - visual output
- Spotify reportedly compares different MCP tools against each other to judge which gives users more value.
- Architecture workstream: move from rigid component bundles to a **layered architecture**:
  1. foundational layer
  2. component style layer
  3. component behavior layer
- Headless component systems such as React Aria and Base UI provide interaction logic; Encore focuses on brand, accessibility, and consistency.
- Reported benefit for machines: smaller context bubbles; agents can understand foundations, button context, and headless systems already common in model training data.
- The public notes report 220+ designers at the meetup; the transcript mentions Encore shared styles used more than 220,000 times, components used in 86,000 places, and developer satisfaction of 93% among Spotify "golden technologies".

## Implications for this wiki's Agentic AI cluster

- **Presence where agents operate is existential:** if the design system is absent from AI workflows, teams may route around it by default.
- **Evaluation must include visual output:** lint/component matching is insufficient when prototypes shape product decisions.
- **Architecture can reduce context burden:** layered/headless design may help both humans and agents compose without bespoke variants for every need.
- **Design-system relevance shifts from documentation traffic to agent integration:** adoption may mean being the default substrate for AI-generated UI.
- **The component bundle vs layered architecture debate is intensified by agents:** rigid abstractions can create hacks for humans and confusion for machines.

## Citation / usage notes

- Treat as a reported case unless cross-checked against Spotify-authored material; the YouTube recording is stronger than blog recap but still requires timestamped verification for exact claims.
- Useful as a strategic contrast: Spotify focuses on system presence and architecture; Indeed on metadata format/context loading; Miro on onboarding/skills/support deflection.
