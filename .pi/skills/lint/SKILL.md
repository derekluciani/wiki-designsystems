---
name: wiki-lint
description: Run this skill when the user asks to check the content quality of the wiki.
disable-model-invocation: false
---

Use this skill as an instruction set. Follow the workflow in order.

## Workflow

1. The user will periodically ask the LLM to run a content quality health-check. Look for:
  - contradictions between pages
  - stale claims that newer sources have superseded
  - orphan pages with no inbound links
  - important concepts mentioned but lacking their own page
  - missing cross-references
  - data gaps that could be filled with a web search.
2. Report back with changes to make, but only if necessary.
