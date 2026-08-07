# Citation Runbook: The Relief Pros

**Created:** 2026-08-07 (six parallel research agents, current as of Aug 2026)
**Companion to:** `citation-pack.md` (canonical NAP data — copy-paste from there, never retype)
**Split of labor:** OWNER steps need Brad personally (accounts, logins, verification codes, legal declarations). FORM steps Claude drives in the browser once signed in.

**The one rule:** Name "The Relief Pros" · Phone (469) 702-1185 · Frisco, TX · https://www.reliefprosbooks.com — byte-identical everywhere. Founding date September 2020 everywhere (per SOS record; exact day Sept 12, 2020 per state filing). Address never published.

---

## 1. Bing Places — ✅ DONE 2026-08-07

Imported from the verified Google Business Profile at bing.com/forbusiness (platform moved off bingplaces.com in Oct 2025). Auto-verified via Google OAuth. Address fields confirmed empty (hidden address did not leak). Category mapped to "Financial service" (Bing has no bookkeeping category — this is the correct compliant mapping). **Google sync is ON** — GBP edits propagate automatically. Publishing ETA 7–12 days; re-check the live Bing Maps listing then and confirm no address shows. Decline all Microsoft Advertising prompts ($500-credit offer requires $250 spend).

## 2. Nextdoor — RECOMMENDED NEXT (easiest, no personal account needed)

- URL: business.nextdoor.com → "Claim your free Business Page" (lands on nextdoor.com/create-business). Free.
- [OWNER] Create a **standalone business account** with admin@reliefprosbooks.com — no personal neighbor account required. (Never promote the business from a personal profile — guideline violation.)
- [FORM] Search for existing listing first; else create new. The home address is required for neighborhood placement but **can be hidden** ("Don't show business address publicly").
- [FORM] Categories (up to 10, use ≥3): Bookkeeping Services, Professional Services, Tax Preparation... skip anything "Accounting"-labeled per the Texas naming rule. Logo, cover, description (short/medium from citation pack), hours, website. Page privacy: Public.
- [OWNER] Phone verification code to (469) 702-1185.
- [OWNER, later] Optional verified-business badge: submit EIN letter (unlocks 2 free posts/month). Days to review.
- Decline: Ads Manager, Local Deals ($1/day+), Neighborhood Sponsorships ($32–150/mo).
- Time: ~30–45 min.

## 3. Yelp — DO SOON (strong citation, worst upsell pressure)

- URL: biz.yelp.com/claim → search "The Relief Pros" Frisco TX → if absent, "Add to Yelp."
- [OWNER] Free business account: admin@ email + password. **No credit card — ever.** The $300 "free ad credit" requires a card and auto-bills at full rate when exhausted.
- [FORM] Category "**Bookkeepers**" (exists!). Up to 3 — do NOT add "Accountants" (Texas naming rule; the agent suggested it, overruled). Consider "Payroll Services"? NO — firm doesn't do payroll. Bookkeepers only, or + "Business Consulting" if a third is wanted.
- [FORM] A real street address is required ON FILE, but service-area mode supports **hiding it publicly**: Business Information → Service Area → up to 6 cities (pick from the 9: Frisco, Prosper, Celina, Little Elm, McKinney, Plano) → hide address option.
- [FORM] "From the Business": Specialties (1,500 chars), History (1,000), Meet the Owner (1,000) — draft from citation pack descriptions. Logo + 3–5 photos (brand graphics only, metadata-free).
- [OWNER] Verification: code via call/text to the business line. Listing live ≤2 business days.
- [OWNER] Expect persistent ad sales calls for weeks. Script: "Free listing only, no ads, put us on your do-not-call list."
- Time: ~25–35 min.

## 4. Facebook Page — NEEDS BRAD'S REAL PERSONAL ACCOUNT

- Pages can't exist standalone; they hang off a personal profile. **Duplicate personal accounts violate Meta ToS** — use Brad's real account. Admin identity is never shown publicly; post/comment "as the Page."
- [OWNER] facebook.com/pages/create from Brad's account. Name "The Relief Pros."
- [FORM] Category: **"Financial Service"** primary + "Business Service" secondary (Facebook has no bookkeeping category; NEVER "Accountant" even though offered).
- [FORM] No service-area feature: enter city/state only ("Frisco, TX"), street blank, map/check-ins OFF. Coverage sentence in the bio: "Flat-fee bookkeeping for Texas small businesses. Serving Frisco, Prosper, Celina & North DFW." (≤155 chars.)
- [FORM] Phone, website, email, hours — identical to GBP. Logo (square) + cover (gbp-cover.png works). Services list from the pack.
- [OWNER] Claim username @TheReliefPros (fallback @TheReliefProsTX). Changeable every 60 days.
- Skip all verification products (Meta Verified is paid; Business Manager verification only needed if ads happen someday).
- Time: ~45–60 min.

## 5. Apple Business — THE LONG POLE (do when EIN letter is handy)

- Rebranded ~April 2026; portal is now **business.apple.com** (Business Connect merged in). Free.
- [OWNER] Create a **business Apple Account** (not personal iCloud) — email + SMS codes at signup.
- [OWNER] Org verification needs **two** proofs from: EIN, D-U-N-S, DNS TXT record on reliefprosbooks.com (14-day window — Claude can add the record via GoDaddy/Vercel DNS when the time comes), official docs (license, utility bill). Review up to 5 business days (sometimes weeks). **Hard 60-day deadline** to finish verification or the org is deleted — don't start until ready to finish.
- ⚠️ **Address risk:** the place-card flow REQUIRES an address with no hide toggle, and Apple has historically rejected storefront-less businesses. Plan A: register the org + brand features without a public place card. Plan B: submit the place card with the real address and accept possible rejection — NEVER a fake commercial address. Decide at execution; policy for service-area businesses is in flux.
- [FORM] If a card is created: category closest available (avoid "Accounting" labels where an alternative exists), description ~250 chars (no URLs/phone in text), photos ≥1920×1080 metadata-free brand graphics, hours.
- Time: ~30–60 min active + days of review.

## 6. BBB — DELIBERATELY LAST: wait for LLC reinstatement

- Free non-accredited profile via bbb.org/get-listed (routes to BBB North Central Texas, Dallas). BBB does **not** check Texas SOS status for free profiles — but post-submit self-editing is restricted, and the cleanest record lists "The Relief Pros, LLC" *after* the entity is back in good standing. **File the week Form 801 reinstatement completes.**
- [FORM] Submit: legal name "The Relief Pros, LLC", category Bookkeeping Services, email/phone/website, real address on file.
- [OWNER] Answer BBB's verification call; state home-based and **request the street address not be published** (by-request accommodation, not a toggle — probably yes, not guaranteed).
- [FORM] Login email arrives ~2 days; complete profile carefully in one pass. Live in 1–2 weeks.
- [OWNER] Decline accreditation sales calls (~$500+/yr; scales with headcount). The free profile stays either way.
- Time: ~20–30 min + one call.

## After each listing goes live

1. Add its public URL to the "Entity links" block in `citation-pack.md`.
2. Add it to the `sameAs` array in `02-website/index.html` and run sync.bat.
3. Log the login email used + date created below.

## Account log

| Platform | Status | Account email | Created | Public URL |
|---|---|---|---|---|
| Google Business Profile | Live, verified | bradleybowen80@gmail.com | 2026-07-31 | https://g.page/r/CT_QCCqDAWfsEBM |
| Bing Places | Pending publish (7–12d) | (Brad's Microsoft acct) | 2026-08-07 | — pending |
| Nextdoor | not started | | | |
| Yelp | not started | | | |
| Facebook | not started | | | |
| Apple Business | not started | | | |
| BBB | HOLD until reinstatement | | | |
| Find-a-ProAdvisor | HOLD until Sarah certified | | | |

---

# PHASE 2 — Long-tail directories & aggregators (triaged from the DFW Restore Guys BrightLocal list, 2026-08-07)

Four research agents audited BrightLocal's 50-site list plus the aggregator networks. Verdict: BrightLocal's $245 buys form-filling we can do free — but ~40% of their list is junk not worth even free minutes. Below is what survives.

## The aggregator layer (higher value than the whole long tail)

| Source | Free? | Verdict |
|---|---|---|
| **Data Axle** (feeds search engines, nav systems, YP network) | **YES** — local-listings.data-axle.com, free ≤10 listings | **DO** — BUT they tele-verify (call the business line up to 3× over 3 days; answer it) and the submitted address becomes licensed circulating data. **Decision needed: use the CPA/registered address (4645 Wyndham Ln Ste 120a) as the public anchor, same as the Apple plan.** Never a fake address. |
| TransUnion Localeze | NO — free tier eliminated, $99/yr | **SKIP** unless a future NAP audit shows Localeze-sourced errors |
| Foursquare (feeds Uber, TomTom, thousands of apps) | Add-a-place is $0 (via Placemaker/Swarm); claiming now costs $20 one-time (BrightLocal charges $30 for this) | **DO the free add** with the public-anchor address; $20 claim optional later. Address is always public here — same decision as Data Axle. |
| YP/Yellowpages (Thryv; mirrors Superpages + DexKnows) | Self-serve claim is DEAD — "claim" page is a Thryv sales funnel | **NEVER call their advisor line.** Data Axle propagation is the free route onto YP. |
| HERE Maps (mapfeedback.here.com) | Free | Optional 10-min flyer |
| OpenStreetMap | Free | SKIP while address-hidden (OSM maps physical reality; don't pin the house) |

## Long-tail DO list (18 sites, in execution order)

Session batches of ~6, Claude driving, Brad doing email-confirmation clicks. Universal rules: **street field blank or city/ZIP only** (none of these postcard-verify; many have NO listing-removal path, so never enter the home address) · dedicated email recommended (these WILL drip spam — consider a citations@ alias) · decline every paid tier.

**Batch 1 (friendliest):** Hotfrog (explicit hide-address toggle) · AGreaterTown (no address required at all) · Zipleaf.us (passwordless email-code login) · ProvenExpert (review platform bonus, skip the auto-trial confusion) · EnrollBusiness · BizHwy
**Batch 2:** Storeboard · Brownbook · FreeListingUSA · Find-Us-Here · A-ZBusinessFinder (sister site of previous) · TrustLink (review site w/ BBB lineage, worth extra minutes)
**Batch 3:** Manta (highest authority of the tail — but a sales-call machine: use the business line knowing it'll ring, decline everything) · freebusinessdirectory.com · Trueen (decline $39 featured) · Qdexx · LinkCentre (web directory, no address at all) · Opendi.us (abort if street required)

**If bored later:** Hubbiz, Cybo, CallUpContact (site unstable), Trepup, Tupalo (verification now costs €12 — unverified listing only), n49, iFormative, LocalStar, WhatsYourHours, Cataloxy, biztobiz.org (note: biztobiz/bizthistown/choice.directory/smallbusinessusa are ONE shared network — one submission max).

**SKIP (junk/dead/wrong vertical):** StartUs (EU startups), Locable (chamber-gated SaaS), EarthMom (eco niche + absurd pricing), AnnounceAmerica (dead), IndustryHuddle (industrial B2B + spam farm), BizRatings (survey SaaS, not a directory), YourBizLocal, YPLocal.us (Florida spam farm), Bizista (content farm), All.biz (CIS-region B2B).

## Milestone log

- **2026-08-07/08 overnight session:** Google verified+overhauled, Bing imported, Yelp claimed+built, Nextdoor built (name fixed to "The Relief Pros", address corrected to 2321 Mackinac hidden). AI Overview for "relief pros bookkeeping" now correctly describes the firm as a woman-owned Texas bookkeeping service citing the site — ~24h after the entity work + feedback report. Baseline problem (competitor recommendations) resolving faster than the 2-4 week estimate.
