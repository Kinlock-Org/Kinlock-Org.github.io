# Contributing to the Kinlock docs hub

This repo is two things: the hosted site at [kinlock-org.github.io](https://kinlock-org.github.io),
and where documentation issues across the whole Kinlock org get filed and picked up, instead of
being scattered one-off across `kinlock-contracts`, `kinlock-sdk`, `kinlock-app`, and
`kinlock-registry`.

## Filing a documentation issue

Use the **Documentation** issue template. Say which repo or area it's about (`area:contract`,
`area:sdk`, `area:app`, `area:registry`, or `area:site` for this repo itself), what's missing or
wrong, and who it's for.

If fixing it needs a **code change**, not just prose, open the issue in that repo instead; this
hub is for documentation, not a general tracker.

## Picking one up

1. Comment on the issue so two people don't duplicate the work.
2. If it's about this site, edit the relevant `.html` file and `styles.css` directly; see the
   README for the page/section layout.
3. If it's about another repo's docs (its `README.md`, `SECURITY.md`, code comments, or an
   inline doc), the fix goes in **that repo**, as a normal PR there, not here. Link back to the
   issue in this repo when you open it, and it'll get closed when that PR merges.
4. If it's about the canonical docs (`ARCHITECTURE.md`, `PRD.md`, `AGENTS.md`, ADRs), the fix goes
   in `Kinlock-Org/.github`, which is the single source of truth; every other repo's copy is
   read-only and synced from there.

## Workflow for this repo

- Branches: `docs/…`, `fix/…`, `feat/…`. Never commit to `main` (branch protection requires a PR
  and a review).
- No build step: edit the `.html`/`.css` files directly and check them in a browser before
  opening a PR.
- This repo doesn't keep its own `ROADMAP.md`; it's tracked as row `W-10` in
  `Kinlock-Org/.github`'s `docs/ROADMAP.md`. Note in your PR whether it affects that row.

## What doesn't belong here

Fabricated content, invented metrics, or anything that overclaims what Kinlock actually does.
Every page should trace back to something real: a test that passes, a deployed contract, an
actual export. If you're not sure a claim is accurate, link to the source instead of restating it.
