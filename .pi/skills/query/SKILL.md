---
name: wiki-query
description: Run this skill when the user asks a question about the content in the wiki.
disable-model-invocation: false
---

Use this skill as an instruction set. Follow the workflow in order.

## Workflow

1. Input prompt: ask the user, "What can I answer for you?"
2. Search the entire wiki for relevant content/pages that relate to the user's query.
3. Output: synthesize an answer with citations. The answer can take different forms depending on the question — a markdown page, a comparison table, an image or visualization, a chart (matplotlib), a canvas, etc. Write the answer to the `/outputs` directory as a draft.
4. Ask the user whether the output should be integrated into the wiki. If yes, run the `ingest` skill's `Workflow 2` (promote an `/outputs` draft) on the draft file: `../ingest/SKILL.md`.
