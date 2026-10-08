# Kinlock-Org.github.io

[![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-live-brightgreen)](https://kinlock-org.github.io)

The Kinlock documentation hub: the hosted site at
[kinlock-org.github.io](https://kinlock-org.github.io), and where documentation issues across the
whole org get filed and picked up. See [`CONTRIBUTING.md`](CONTRIBUTING.md) before filing or
working one.

## The site

Plain static HTML/CSS, no build step, no framework. It summarizes each of the four repos
(`kinlock-contracts`, `kinlock-sdk`, `kinlock-app`, `kinlock-registry`) and links out to the
canonical docs in [`.github`](https://github.com/Kinlock-Org/.github) for full depth, so there's
one source of truth, not two copies that can drift apart.

To edit a page: change the relevant `.html` file and `styles.css` directly, check it in a browser,
then push to `main` (behind a PR; branch protection requires a review). Pages rebuilds
automatically.

| File | What it covers |
|---|---|
| `index.html` | Landing page: what Kinlock is, how the four repos fit together |
| `contracts.html` | `kinlock-contracts`: entry points, invariants, testnet deployment |
| `sdk.html` | `kinlock-sdk`: public API, preflight checks, indexer |
| `app.html` | `kinlock-app`: pages, rules, stack |
| `registry.html` | `kinlock-registry`: payee fields, CI rules, who adds a payee |

## The issue hub

Documentation gaps anywhere in Kinlock get filed here with the **Documentation** issue template,
tagged with the repo they're about (`area:contract`, `area:sdk`, `area:app`, `area:registry`, or
`area:site` for this repo). Centralizing them here means a contributor looking for documentation
work has one place to check, instead of searching four repos' issue trackers.

Fixes that need a **code change**, not just prose, still happen in the repo the code lives in;
this hub tracks the gap, not necessarily the fix.

## Roadmap

This repo doesn't keep its own `ROADMAP.md`. It's tracked as row `W-10` in
[`Kinlock-Org/.github`'s `docs/ROADMAP.md`](https://github.com/Kinlock-Org/.github/blob/main/docs/ROADMAP.md).
