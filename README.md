# World News 21 November 2026

[![make.fun bounty](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![make.fun rank](https://make.fun/badge/news-image-20261121/edisonradit93/makefun-news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![make.fun reward](https://make.fun/badge/news-image-20261121/edisonradit93/makefun-news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

A program summing up the world's news of Saturday 21 November 2026 in one high-resolution editorial illustration.

## Stories Covered
1. **Shenzhen Trilateral Summit**: Strategic diplomatic coordination and cross-border tech infrastructure agreements in the Greater Bay Area.
2. **Breakthrough Clean Energy Pacts**: Multilateral next-generation fusion and renewable grid interconnection treaties finalized across Asia and Europe.
3. **AI Global Governance Treaty**: Landmark consensus on open safety protocols and ethical alignment frameworks signed by participating delegations.
4. **Historic I-EU Comprehensive Economic Partnership**: Bilateral economic and digital trade commitments signed in Brussels.
5. **Bay of Bengal Meteorological Tracking**: Coordinated regional humanitarian response and weather safety operations for Cyclonic Storm Akvan.

## Build and Execution

### Requirements
- Node.js >= 22 (supports running TypeScript natively via type stripping)

### Running locally
Set `MAKEFUN_OUTPUT_DIR` to test the output locally:

```powershell
$env:MAKEFUN_OUTPUT_DIR='out'; node main.ts
```

Or on Unix/Linux:
```bash
MAKEFUN_OUTPUT_DIR=out node main.ts
```

### Grader / Production
In the grading container, `main.ts` writes directly to `/output/entry.png`.

## Validation
- Image Dimensions: 1024 x 1024 pixels
- Max File Size: <= 1 MiB (Actual: ~414 KB)
- Integrity: Verified output buffer and byte-parity check

## License
MIT (c) 2026 edisonradit93
