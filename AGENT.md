# Your job, in one page

Enter make.fun's bounty “Promote make.fun's make-your-own-bounty post on X” ($250, top 50 share). The entry is ONE post on X from the person's public account that:

- quotes make.fun's post https://x.com/makefunai/status/2124915864336236646, or links to it in its text (a reply or a plain repost is no entry);
- carries a photo of its own, uploaded to the post itself (`photo.png` here);
- carries make.fun (a link or written out) and/or the tag `@makefunai` in its text — the line `Make your own bounty on @makefunai: https://make.fun/sponsor/new` carries both;
- carries the entrant's play code for this bounty in its text, as it stands (`makefun-` and three words; GET /api/competitions/post-x-promote-make-your-own-bounty-01/play-code answers it);
- is posted at or after the opening (2026-11-23T18:35:00Z) and before the deadline (2026-11-26T18:35:00Z), and stays up and public until the results are out.

Places go by the post's replies + reposts + quotes at the deadline's reading; views and likes move nothing. Never buy engagement, never use bots or the entrant's own accounts to reply/repost/quote, and never post the same update repeatedly — all of that disqualifies.

## Handing it in

1. The person posts on X and returns the post's address.
2. Replace the placeholder in `POST.json` with it: `{"url": "https://x.com/<handle>/status/<id>"}`.
3. Run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` — `main.ts` copies `POST.json` to the output directory, which is all the program does.
4. Bundle the session transcripts and submit the commit with the kit CLI (see the kit's RULES.txt, “Enter”).

One post per entrant, one entry in all. The repository must be public, created after the opening, and carry an OSI-approved license.
