# Citation Pack: The Relief Pros

**Status:** active reference
**Owner:** Brad
**Last reviewed:** 2026-08-07

Everything needed to create consistent business listings, in one place. Copy and paste from here rather than retyping, because the single most important rule of citations is that the name, phone, and city must be **byte-identical everywhere**. One "The Relief Pros LLC" among a set of "The Relief Pros" entries dilutes the whole effort.

## The canonical block, never varies

```
Business name:  The Relief Pros
Phone:          (469) 702-1185
City/State:     Frisco, TX
Website:        https://www.reliefprosbooks.com
Email:          admin@reliefprosbooks.com
Category:       Bookkeeping service
Hours:          Monday to Friday, 9:00 AM to 5:00 PM. Closed weekends.
Service areas:  Frisco, Prosper, Celina, Aubrey, Little Elm, McKinney, Denton, Lake Dallas, Plano
```

**Rules that are not optional:**

- The name is **"The Relief Pros"**. Not "The Relief Pros LLC", not "The Relief Pros Bookkeeping", not "The Relief Pros, LLC". The legal name is used on contracts and tax documents; the listing name is what customers know us by, and Google penalizes keyword-stuffed listing names.
- The phone is always formatted **(469) 702-1185**.
- **Never publish the street address.** Every listing is set up as a service-area business with the address hidden. If a platform requires an address to proceed, enter it and then find the setting to hide it before publishing. If it cannot be hidden, skip that platform.
- Website always uses the **www** version with https.

## Descriptions, pre-written to fit each platform's limit

**Very short (under 100 characters), for fields that truncate:**

```
Flat-fee bookkeeping for Texas small businesses and contractors. Books closed by the 15th.
```

**Short (about 250 characters):**

```
The Relief Pros provides flat-fee monthly bookkeeping for small businesses and contractors across Texas. QuickBooks Online specialists based in Frisco. Books reconciled and closed by the 15th, every month, with prices published on our website.
```

**Medium (about 500 characters):**

```
The Relief Pros provides flat-fee monthly bookkeeping for small businesses and contractors across Texas. We are QuickBooks Online specialists based in Frisco, serving the surrounding communities and businesses statewide.

Each month we categorize transactions, reconcile every bank and credit card account to the statement, and deliver a profit and loss statement, balance sheet, and plain-words summary by the 15th. Plans start at $250. We do bookkeeping only, so your books arrive tax-ready for your CPA.
```

**Long (about 750 characters), matches the Google Business Profile description:**

```
The Relief Pros provides flat-fee monthly bookkeeping for small businesses and contractors across Texas. QuickBooks Online specialists based in Frisco, serving Prosper, Celina, Aubrey, Little Elm, McKinney, Denton, Plano and businesses statewide.

Each month we categorize transactions, reconcile every bank and credit card account to the statement, and deliver a profit and loss statement, balance sheet, and plain-words summary by the 15th. Plans start at $250, prices published on our website.

Behind on your books? Our flat-price QuickBooks cleanup gets you current, quoted in writing first.

Bookkeeping only. No tax prep, no payroll, no moving your money, so your books arrive tax-ready for your CPA.
```

## The Google review link

```
https://g.page/r/CT_QCCqDAWfsEBM/review
```

Captured 2026-08-07, the day verification cleared. It is the same link for
every client and it belongs in exactly one place, which is this block. The
[review request template](../04-clients/review-request-template.md) reads from
here, so a wrong or retyped link breaks every ask at once.

## Services list, reuse everywhere

```
Monthly Bookkeeping
QuickBooks Cleanup and Catch-Up
Bookkeeping for Contractors
Bank Reconciliation
Year-End 1099 Filing
```

## The platforms, in priority order

| # | Platform | Cost | Why it matters | Notes |
|---|---|---|---|---|
| 1 | Google Business Profile | Free | The whole map pack. Nothing else comes close. | **Verified and live as of 2026-08-07.** Opening date 2020-09-16, women-owned attribute, service descriptions, SMS chat all set. Logo/cover assets: `../02-website/logo.png`, `gbp-cover.png` in this folder. |
| 2 | Apple Business Connect | Free | Feeds Apple Maps and Siri. Ignored by most competitors, which is exactly why it is worth doing. | Service-area supported. |
| 3 | Bing Places | Free | Feeds Bing and, increasingly, AI assistants that use Bing data. Can import directly from Google to save time. | Do after GBP is verified so the import is clean. |
| 4 | Yelp | Free | Major citation source that Google reads, and it ranks for its own searches. | Expect heavy upsell calls and emails for ads. Decline them; the free listing is the point. |
| 5 | Facebook Page | Free | Citation value plus the place word-of-mouth referrals actually land. | Set as a business page, not a personal profile. |
| 6 | Nextdoor Business Page | Free | Neighborhood-level reach in exactly our corridor. Strong for home-services referrals. | Underused by competitors here. |
| 7 | Find-a-ProAdvisor | Free | Both a citation and a credibility marker. | **Blocked** until Sarah completes QuickBooks certification. |
| 8 | BBB basic listing | Free | Trust signal for an older demographic; the profile itself costs nothing. | Accreditation costs annual dues and is optional. Skip it for now. |

**Deliberately skipped:** BrightLocal, Yext, Moz Local and similar aggregators. They are monthly subscriptions that syndicate your data, and listings can decay if you stop paying. At this scale, direct listings are free, permanent, and fully under our control. Also skipped: Thumbtack and Bark, which the business plan rejected on pay-per-lead economics.

## Working notes

- **Brad creates the accounts and completes any verification.** Claude does not create accounts or handle passwords. Once an account exists and is signed in, Claude can drive the browser to fill in the details consistently.
- **Do these after Google verification clears**, so the Google listing is the established source of truth and Bing's import works cleanly.
- **Never publish the home address** on any of them.
- When a platform asks for a founding or opening date, use **September 16, 2020** (the LLC formation date, matching the Google Business Profile) and keep it identical across platforms.
- After each listing goes live, add it to the drive registry or note it here so we know what exists.

## Entity links (for sameAs / profile fields)

```
Google profile:  https://g.page/r/CT_QCCqDAWfsEBM
Google Maps CID: https://maps.google.com/?cid=17034585778409754687
```

These two are already in the homepage schema's sameAs. As each citation below
goes live, add its public URL here AND to the sameAs array in
`../02-website/index.html`, then run sync.bat to deploy.

## References

- Google Business Profile setup and status: [relief-pros-build-status in the Claude Project]
- Naming and legal constraints: [CLAUDE.md](../CLAUDE.md)
- Local SEO strategy and corridor targeting: [local-seo-and-market-strategy.md](local-seo-and-market-strategy.md)
