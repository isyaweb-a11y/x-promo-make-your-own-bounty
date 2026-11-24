# Promote make.fun's make-your-own-bounty post on X

[![bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/isyaweb-a11y/x-promo-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/isyaweb-a11y/x-promo-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty [“Promote make.fun's make-your-own-bounty post on X”](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) ($250, top 50 share).

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and are scored and ranked in the open. Its announcement post — https://x.com/makefunai/status/2124915864336236646 — says anyone can now make a bounty of their own: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid. The page for making one is https://make.fun/sponsor/new.

## The entry is a post

The entry is one post on X from [@bakuduo9](https://x.com/bakuduo9) that quotes make.fun's post (or links to it), carries its own photo (`photo.png` in this repository), and whose text carries the `@makefunai` tag, a link to make.fun, and the entrant's play code. Places go by the post's score — its replies plus its reposts plus its quotes, as the house reads them from X at the deadline; views and likes move nothing.

The exact post text is in `POST_TEXT.txt`. The post's address goes in `POST.json` once it is posted:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## What the program does

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to the output directory — that is all it has to do; the house reads the post itself.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Files

- `main.ts` — copies `POST.json` to the output directory.
- `POST.json` — the X post's address (placeholder until the post is made).
- `POST_TEXT.txt` — the exact text of the post, with notes for the person posting it.
- `photo.png` — the post's own photo, made for this entry.
- `AGENT.md` — the task in one page.

---

Try make.fun: https://make.fun/r/sc1d8ke0
