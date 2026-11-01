# Kinlock-Org.github.io

[![Docs](https://img.shields.io/badge/docs-live-brightgreen)](https://kinlock-org.github.io)
[![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)

The Kinlock documentation hub: the hosted site at [kinlock-org.github.io](https://kinlock-org.github.io), and where documentation issues for the whole org get filed and picked up.

## See it in action

A 25-second overview of the hub — the site itself, the four repos it explains, the non-negotiable principles, and the honest testnet disclaimer. Plain HTML and CSS, no build step.

<video src="media/kinlock-brag.mp4" controls width="640" poster="media/kinlock-brag-poster.jpg"></video>

> If the clip doesn't play inline, download it: [media/kinlock-brag.mp4](media/kinlock-brag.mp4).

## The site

Plain static HTML and CSS — no framework, no build step, no dependencies. It explains what Kinlock is and summarizes each of the four code repos, then links out to the canonical docs in [`Kinlock-Org/.github`](https://github.com/Kinlock-Org/.github) for depth, so there is one source of truth rather than two copies that can drift apart.

| File | What it covers |
|---|---|
| `index.html` | Landing: what Kinlock promises, how the repos fit together, the non-negotiable principles, where to file a docs issue |
| `contracts.html` | `kinlock-contracts`: entry points by role, the unbending rules, the ten property-tested invariants, testnet deployment facts |
| `sdk.html` | `kinlock-sdk`: public exports, preflight and receipt behavior, the indexer and its list API |
| `app.html` | `kinlock-app`: routes, the chain-is-truth and claim-link rules, stack |
| `registry.html` | `kinlock-registry`: payee fields, what CI enforces off-chain, who may add a payee |
| `styles.css` | Design tokens, dark mode, responsive nav, animations |
| `nav.js` | Mobile nav disclosure: toggle, Escape to close, close on link click |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Icons, linked from every page |

To change a page, edit its `.html` file (plus `styles.css`, or `nav.js` if it touches navigation behavior), open it in a browser to check, then merge to `main`. GitHub Pages republishes automatically; there is no deploy step to run.

**Keep the site honest.** It states facts — entry points, versions, contract IDs, what is and isn't built — so those drift the moment code changes. When you edit a page, verify the claim against the code in that repo, not against another page.

## The issue hub

Documentation gaps anywhere in Kinlock are filed here using the **Documentation** issue template, labeled with the repo they're about: `area:contract`, `area:sdk`, `area:app`, `area:registry`, or `area:site` for this repo. Centralizing them gives a contributor looking for documentation work one place to check instead of four issue trackers.

Blank issues are disabled: a **security** report goes through the org `SECURITY.md`, and a gap that needs a code change is fixed in the repo that holds the code — this hub tracks the gap, not necessarily the fix. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for where a fix actually lands.

## Maintainers

| Name | Role | GitHub | Contact |
|---|---|---|---|
| Adenike Ajala | Core Maintainer (Smart Contracts & Protocol) | [@abrcrmb](https://github.com/abrcrmb) | [Email](mailto:adenikeajala2018@gmail.com) |
| Ayobami Yazar | Core Maintainer (Full-Stack & Integrations) | [@YazarAyobami](https://github.com/YazarAyobami) | [Email](mailto:Yazarayobami76@gmail.com) |

## Community & Discussions

- **Discussions:** [GitHub Discussions](https://github.com/Kinlock-Org/Kinlock-Org.github.io/discussions)
- **Documentation Portal:** [kinlock-org.github.io](https://kinlock-org.github.io)
- **Report Security Vulnerabilities:** Follow [`SECURITY.md`](https://github.com/Kinlock-Org/.github/blob/main/SECURITY.md)

## Contributors

Thanks to everyone who has contributed to Kinlock!

[![Contributors](https://contrib.rocks/image?repo=Kinlock-Org/Kinlock-Org.github.io)](https://github.com/Kinlock-Org/Kinlock-Org.github.io/graphs/contributors)

## Roadmap

This repo keeps no `ROADMAP.md` of its own. It is tracked as row `W-10` in [`Kinlock-Org/.github` → `docs/ROADMAP.md`](https://github.com/Kinlock-Org/.github/blob/main/docs/ROADMAP.md).
