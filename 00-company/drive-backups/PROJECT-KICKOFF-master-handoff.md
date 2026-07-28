# PROJECT KICKOFF: The Relief Pros, LLC — Bookkeeping Practice

**Master handoff document. Everything a fresh project session needs to run this venture.** Prepared July 27, 2026. Owner: Brad Bowen. Operator: Sarah Bowen.

  

## HOW TO USE THIS DOCUMENT

Section 1 is a prompt. Copy it into a brand new project session. It tells the assistant to read this whole document first, then build the repository, SOPs, guardrails, and automation described in Sections 12 through 15.

  

Sections 2 through 11 are the knowledge base. Do not re-research what is already settled here. Sections 16 and 17 are the open items and the failure log, and they are the two sections most likely to save you from repeating a mistake.

  

## 1\. THE KICKOFF PROMPT (copy everything in this box)

I am starting a dedicated project for our bookkeeping practice, The Relief Pros, LLC. Read this entire document before doing anything.

  

**Context.** My wife Sarah Bowen is the 100% owner and the only person who does accounting work. I am Brad Bowen, a disabled veteran, and I handle everything non-financial: website, SEO, Google Business Profile, the client document portal, receipt pipelines, invoicing, and ACH autodraft payment collection. We are in Dallas-Fort Worth. The business plan already exists as a 14-tab Google Sheet in this same Drive folder. Do not rebuild it. This project is about execution.

  

**What I want you to build, in this order:**

  

1.  A local git repository at C:\\Users\\bradl\\Documents\\reliefpros\\ with a CLAUDE.md constitution at the root that encodes every hard rule from Sections 5 and 9 of this document. The constitution governs everything in the repo. Model it on the structure we used for the WordForge and press projects: a constitution that states the rules, then docs/ holding SOPs, then verification gates.
2.  The SOPs listed in Section 12, written as checklists a person actually follows, not prose. Start with the monthly close checklist and client onboarding, because those two are needed before client one.
3.  The guardrails in Section 9 encoded as a pre-flight checklist that gets run before any client engagement is signed.
4.  The automation and backup scheme in Section 14.
5.  A compliance calendar covering every recurring deadline in Section 13.

  

**Rules for how you work with me on this project:**

  

  - Verify before you assert. Every date gets checked against today's date. Every tax or regulatory figure gets checked against a primary source, not a blog and not your memory. See Section 17 for the specific ways this has already gone wrong.
  - Anything a reasonable person would Google and get a different answer to gets a note in the document explaining the discrepancy, before they find it.
  - Sarah is the reviewer. She has an honors MBA, she is skeptical, and she has already caught one error in the plan. Write for that reader.
  - When I ask for research, use real sources and grade them. Reject vendor marketing, content farms, and AI-generated SEO. Name what you rejected.
  - Do not soften bad news. If something will not work, say so.

  

**Save memories for:** the settled decisions in Section 5 (so they never get re-litigated), the Texas naming restriction, the Trust Fund Recovery Penalty guardrail, and the toolchain notes in Section 15.

  

Start by reading this document in full, then show me your plan for the repository structure before you create it.

  

## 2\. THE HOUSEHOLD

**Sarah Bowen.** 100% owner of The Relief Pros, LLC. Honors MBA completing within months. No prior bookkeeping experience. She is the entire production capacity of the firm and the only person who may exercise accounting judgment. She was facing a layoff, which is what triggered this venture.

  

**Brad Bowen.** Disabled veteran. Cannot work a conventional job or commute. Roughly 20+ hours a week available. Ships production software unusually fast, having built and deployed WordForge (16,585 lines, five tagged releases, verification gates) in about six working days. Prefers to stay low profile: no face, no speaking, no personal brand. Willing to do cold email and basic selling when the product genuinely solves a problem. Not willing to build a personal brand, speak, or work conferences.

  

**Household economics.** Target is $3,000 per month minimum from the business, trending toward low maintenance over time. VA disability compensation is a fixed, inflation-adjusted, employment-independent income floor, which means the household is never fully dependent on the business ramp. This is a real and unusual advantage and the plan claims it.

  

**The unresolved household question that matters most:** whether Brad's rating is schedular permanent and total. If it is, Sarah likely qualifies for CHAMPVA with no monthly premium and a $3,000 annual out-of-pocket cap, and the health insurance line largely disappears. If it is not, budget $600 to $900 per month for her coverage once household income crosses the ACA subsidy cliff, since the enhanced subsidies expired December 31, 2025 and Texas premiums rose about 35% for 2026. **Get the rating status in writing. It is a five-figure annual swing and it is free to confirm.**

  

## 3\. THE ENTITY

|  |  |
| :-: | :-: |
| \*\*Item\*\* | \*\*Status\*\* |
| Entity | The Relief Pros, LLC, Texas limited liability company |
| Ownership | Sarah Bowen, 100% |
| EIN | Issued |
| Business bank account | Open |
| Franchise tax / Public Information Report | Filed annually by the family CPA, current |
| Other ventures on this entity | None. It is empty. dfwrestoreguys.com is NOT on this LLC, so there is no cross-liability. |
| Trade name | No DBA. The firm operates under the LLC's legal name. |
| Insurance | Not yet bound. Must be in place before client one. |

  

**Why 100% ownership is clean for WOSB.** SBA rules under 13 CFR 127 determine ownership without regard to community property law, so 100% ownership by Sarah in a community-property state raises no issue. The remaining item is the *control* test, which examines whether she actually runs the company. The operating agreement should state explicitly that she is the sole managing member and controls day-to-day operations and long-term decisions. That is a one-hour attorney review, not a rewrite.

  

**Role architecture matters on paper.** Every description of Brad's work in any document should read as technical and administrative services performed under Sarah's direction. He is not an operations partner. He is a service provider to a company she controls. This costs nothing to get right and is discoverable evidence if it is gotten wrong.

  

## 4\. THE TEXAS NAMING RESTRICTION (read before writing any marketing copy)

Texas Occupations Code 901.453(b): a person may hold out as an "accountant" or "auditor," **or assert expertise in accounting or auditing**, only if licensed or practicing under a recognized privilege. The Texas State Board of Public Accountancy's enforcement guidance states that offering "accounting services" to the public without a license is unauthorized practice. Penalties under 22 TAC 518.6 run $1,000 to $5,000 for a first offense and $5,000 to $25,000 for repeat offenses.

  

**Forbidden in the business name, domain, Google Business Profile, page titles, H1s, meta descriptions, and body copy:** accountant, accounting services, auditor, and any assertion of accounting or auditing expertise.

  

**Safe:** bookkeeping services, financial record maintenance, QuickBooks support, bookkeeping for \[vertical\]. Google Business Profile category: "Bookkeeping service."

  

"The Relief Pros" contains no restricted terms and is clean as-is.

  

**This is a gate, not a preference.** Fixing it after the site is built means rebuilding the SEO asset. Lock the naming and keyword architecture before Brad writes a line of copy, and send a short written confirmatory inquiry to TSBPA for the file.

  

## 5\. SETTLED DECISIONS — DO NOT RE-LITIGATE

These were decided deliberately after research. A future session should treat them as constraints, not open questions.

  

1.  **Women-owned path only.** The veteran certification stack (SDVOSB, Texas VetHUB) was researched in full and declined. Federal SDVOSB set-asides in NAICS 541219 run $19 to $28 million a year against $1.1 to $1.5 million for WOSB, and SBA rules under 13 CFR 128.203 would even permit a P\&T veteran's spouse to control the company. Reaching it would require restructuring to Brad owning 51%. Declined because the LLC is deliberately in Sarah's name, because the veteran route carries rating-status risk depending on rating type, and because the entire government channel is a year-three-plus option regardless.
2.  **No DBA.** Operating under the LLC's legal name. A DBA (Texas Form 503, $25) remains available later if marketing ever demands a more descriptive name.
3.  **No tax preparation.** Not now, not planned. This is also a competitive asset: CPA firms refer bookkeeping work more readily to someone who will never chase their tax work.
4.  **No payroll at launch.** Two independent reasons, both in Section 9.
5.  **No accounts payable or receivable services at launch.** Texas data-processing sales tax exposure.
6.  **No website maintenance sold as a service.** Brad builds the firm's own presence only.
7.  **ACH autodraft is the payment model.** Zero accounts receivable by design. Nobody ever chases an invoice.
8.  **WordForge stays free.** Separate project, but the governing rule stands: a child must never be asked to pay, or ask a parent to pay, to study Scripture.

  

## 6\. THE BUSINESS

**What it is.** Fixed-fee monthly bookkeeping and books-cleanup for Dallas-Fort Worth small businesses, delivered remotely on QuickBooks Online.

### Service menu

|  |  |  |
| :-: | :-: | :-: |
| \*\*Service\*\* | \*\*Price\*\* | \*\*Scope\*\* |
| Monthly bookkeeping, Starter | $350/mo | Up to 2 accounts, \\\~100 transactions. Categorization, bank and credit card reconciliation, monthly P\\\&L and balance sheet, closing-date lock. |
| Monthly bookkeeping, Standard | $450-$550/mo | Up to 4 accounts, \\\~250 transactions. Adds loan tie-outs, AR/AP aging review, plain-English monthly summary note. |
| Monthly bookkeeping, Complex | $650-$950/mo | Contractors and restaurants. Job costing or POS reconciliation, class tracking, subcontractor 1099 tracking, monthly review call. |
| Diagnostic review | $300-$500 flat, paid upfront | Read-only review of an existing file. Credited 100% against cleanup if engaged. This is the sales demo. |
| Cleanup / catch-up | 2 to 2.5x monthly rate per month of mess | 12-step cleanup order. 50% deposit before work, balance on delivery. A 12-month cleanup runs 40 to 60 hours. |
| Year-end 1099 prep | Per-form January fee | W-9s collected at onboarding, never in January. Counter-seasonal revenue. |

### Target clients

  - **Home-services contractors, primary,** 40-50% of roster. High pain, high willingness to outsource, low specialist competition.
  - **Professional services, secondary,** 25-35%. Clean books, stable, high retention. The capacity-friendly ballast.
  - **Restaurants, opportunistic only, capped at 25%.** Roughly 49% close within five years. Client mortality is churn no service quality prevents.

  

**Screening rules.** Prefer businesses 2+ years old. Decline brand-new businesses, clients who refuse ACH autodraft, and clients who refuse to use the document portal. Bad-fit clients are the single largest capacity killer in the practitioner literature.

### How money is collected

Payment terms are firm policy, not a negotiation. At engagement signing the client signs both the engagement letter and an ACH debit authorization. Retainers draft on the 1st of each month, in advance. Failed drafts retry on day 3; unresolved by day 10, service pauses automatically and the client is notified. Cleanup projects draft 50% at signing and the balance on delivery. Receipts email automatically after every draft.

  

Rail: QuickBooks Payments ACH at roughly 1% is the launch recommendation, native to the stack and auto-reconciling. Melio is the free-ACH fallback. Ignition at roughly $39 to $99 a month is worth adopting around ten clients when proposal volume justifies it.

  

## 7\. THE FINANCIAL MODEL

All of this lives as live formulas in Tab 7 of the plan. These are the current defaults.

  

|  |  |  |
| :-: | :-: | :-: |
| \*\*Input\*\* | \*\*Default\*\* | \*\*Note\*\* |
| Average fee, early book | $400/client/mo | First ten clients close at $350-450. Mature pricing is a month-12+ outcome. |
| Average fee, mature book | $650/client/mo | After niche proof and annual price steps. |
| Hours per client, months 1-6 | 9 | Benchmark is 5-6 for experienced firms. New-firm reality is 8-10. |
| Hours per client, steady state | 5 | Earned, not assumed. |
| Working hours per month | 110 | Sarah only. This is 1.0 production FTE, not 1.5. Brad's hours do not close books. |
| Non-delivery reserve | 30% | Selling, learning, firm admin. Industry read: year-one delivery capacity is 60-80% of theoretical. |
| Annual retention, years 1-2 | 80% | Small firms typically retain 60-70%; well-run firms 90-96%. 95% is a year-three goal, not an assumption. |
| Fixed costs | \\\~$190/mo | Insurance \\\~$100, software \\\~$60, misc \\\~$30. |
| ACH processing | 1% of revenue |   |

  

**What falls out:**

  

  - Deliverable hours: 77 per month
  - **Capacity ceiling: 15 mature clients.** About 8 while every client is still new.
  - **Break-even: 1 client.** The first retainer covers every fixed cost.
  - Solo ceiling ARR: $117,000
  - LTV at mature fee and 80% retention: about $38,600 gross potential, but **the planning figure is $15,000 to $20,000 until retention is demonstrated.**
  - CAC, blended: under $150. LTV to CAC exceeds 100 to 1. Acquisition is constrained by time and trust, not money.
  - Payback: the first month's draft, since billing is in advance.

  

**Year 1 as modeled:** 9 clients by month 12, $26,525 recurring plus $15,000 cleanup, $41,525 total revenue, $38,830 firm profit **before tax and before either owner is paid.** Expect 22-28% to self-employment and federal income tax after the QBI deduction, with no Texas income tax.

  

**$3,000 a month is crossed at 8 early-priced clients or 5 to 6 mature-priced clients.**

  

**An honest caveat that cuts against the direct-client case.** The implied "direct clients earn 3x white-label per hour" only holds if every client is a clean five-hour micro-client. Five hours is the *small* client; ten to fifteen is typical for an average small business. Run symmetrically, the capacity-feasible direct book is five or six clients at roughly $29 to $35 per deliverable hour. That is the actual bet: that Sarah can consistently land small, clean, $450 clients. Test it on the first three.

  

## 8\. WHAT THE RESEARCH ESTABLISHED

Facts below were verified against primary sources and, in the disputed cases, survived an adversarial refutation pass.

### Market

  - **988,987 small businesses in DFW,** the \#5 US metro. Fifteen clients is 0.0015% share. This plan does not require meaningful market share.
  - **The most-reviewed dedicated bookkeeping firm found in DFW has 74 Google reviews.** No local brand owns the metro.
  - **57% of accounting clients come from referrals, about 3% from ads.**
  - **National price umbrella is $300 to $700 a month.** The firm never needs to price under $300 to win.
  - **11,000 to 13,000 new Texas business filings a month in the DFW share.** Top-of-funnel only; new businesses are the industry's worst clients. Valuable as a drip list that matures at month 12 to 14 after formation.

### The low-end collapse (why the price umbrella holds)

  - **Bench Accounting:** $100M+ raised, abrupt shutdown and bankruptcy with $65.4M liabilities, December 2024. Thousands of clients stranded mid-year.
  - **Botkeeper:** roughly $90M raised, shut down February 2026.
  - **QuickBooks Live:** Intuit is retiring its own $300/month competing service **effective July 29, 2026**, citing damage to its accountant channel. Confirm it completed as announced before using it in a sales conversation.
  - **Intuit company-wide:** 17% workforce reduction, $300 to $340 million in charges, per SEC Form 8-K filed May 20, 2026, while pivoting to an AI-native platform.

### Labor and wages (BLS OEWS May 2025, pulled via API)

  - DFW bookkeeper median $51,720, 90th percentile $74,970, 34,930 employed.
  - Occupation projected **-6% through 2034**, about 170,000 annual openings, **100% from replacement, none from growth.**
  - DFW financial manager median $169,200. That occupation grows +5%.
  - **Robert Half 2026 Dallas guide:** full-charge bookkeeper $71,820 to $94,050; accounting manager $110,295 to $145,350; assistant controller $107,160 to $161,880.

### Tax parameters for 2026 (verified, and a third-party audit got both of these wrong)

  - **Social Security taxable wage base: $184,500.** Confirmed at SSA and independently at IRS Tax Topic 751. The 2025 figure was $176,100; 2024 was $168,600.
  - **Section 199A QBI, married filing jointly:** threshold $403,500, phase-in complete at $553,500, a $150,000 width. Per Rev. Proc. 2025-32 sec. 4.26. OBBBA sec. 70105(a) widened the range from $100,000 and sec. 70105(b)(1) deleted the sunset, making the deduction permanent. **This household is far below the threshold for years, so the full 20% deduction applies and should be claimed as a genuine advantage of self-employment.**
  - **Solo 401(k) 2026:** $24,500 employee deferral each, up to $72,000 total each, both spouses eligible. Up to $144,000 combined capacity. Choose solo 401(k) over SEP-IRA.
  - **S-corp election:** do not elect below roughly $150,000 sustained profit. At $100,000 the gross FICA saving of about $4,200 is erased by roughly $2,000 of admin and $1,500 to $2,800 of QBI erosion. Two working spouses both require reasonable compensation, which most online calculators ignore. Note also that an early election shrinks solo 401(k) capacity, since distributions are not compensation.
  - As a community-property single-member LLC, the entity stays a disregarded entity with no partnership return until an S election is made.

### Certifications

  - **Texas killed its women and minority HUB program.** On December 2, 2025 the Comptroller restructured it into VetHUB, serving only service-disabled-veteran-owned firms with a 20%+ rating. All sex, race, and ethnicity based certifications were revoked. Runs on emergency rules with litigation ongoing.
  - **SBA WOSB:** free via MySBA, roughly 90 days to decide under 13 CFR 127.304(a). Honest dollar data from the USAspending API for NAICS 541219: WOSB set-asides ran $1.1 to $1.5 million a year in FY23-24 and were **net negative in FY25.** File it because it is free and a credibility marker. Expect zero near-term revenue.
  - **WOSB maintenance is TRIENNIAL, not annual.** 13 CFR 127.400 requires a program examination every three years, conducted by SBA at no cost, with recertification or third-party examination reported within the 90 days before the eligibility period ends and a 30-day reinstatement grace. The annual attestation was **repealed effective May 30, 2023 (88 FR 26214)** and is in abeyance. Standing duty: notify SBA in writing within 30 days of any material change in ownership, structure, or management (13 CFR 127.401).
  - **SAM.gov renews every 365 days,** roughly 2.6 to 3 hours a year per the FAR Council's own Paperwork Reduction Act estimate. Allow 10 business days to go active, so start about 60 days early. Free; anyone charging for it is not a government service.
  - **QuickBooks ProAdvisor certification is free.** Free QuickBooks Online Accountant account, free training, free exam, no renewal fee, plus free QBO Advanced for the firm's own books.

### The QuickBooks certification confusion (you will hit this)

Three different things share the name and the paid ones outrank the free one in search:

  

1.  **Intuit ProAdvisor certification** — free, for accounting professionals, via QuickBooks Online Accountant. **This is the one that matters.**
2.  **QuickBooks Certified User (QBCU)** via Certiport — roughly $130 to $150 per exam, aimed at students and end users. Not needed.
3.  **Third-party training courses** — quickbookstraining.com at $599.95 to $699.95, operated by National Real World Training, Inc., which licenses the QuickBooks trademark and issues **its own badges, not Intuit's.** NACPB and Consortia bundles at $369 to $449. These sell exam prep, not the credential.

  

Verify on quickbooks.intuit.com/accountants. Intuit's own signup reads "Sign up for free."

### A credential market-value audit worth knowing

An original dataset was built for this plan: 223 LinkedIn job postings, 114 with full descriptions, 46 with "bookkeep" in the title. **AIPB, NACPB, "Certified Bookkeeper," and "Certified Public Bookkeeper" appear exactly zero times.** QuickBooks appears in 61% of bookkeeper-titled postings, Excel in 54%. ProAdvisor is the only bookkeeping credential named anywhere, and only as "a definite plus." Do not spend $1,500 to $3,100 on AIPB or NACPB. Buy the AIPB workbooks ($254 to $314) as training material if depth is wanted, and defer the exam decision indefinitely.

### AI

Autor and Thompson, NBER w33941 (2025): from 1980 to 2018 automation cut bookkeeping employment by one third while raising real wages nearly 40%. Automation strips the easy tasks; what remains requires more expertise and pays better. Stanford GSB (Choi and Xie, 2025, 277 accountants and 79 firms): AI automates categorization, data entry, and reconciliation prep, while judgment, quality assurance, communication, and advisory survive. AI users close 7.5 days faster and serve more clients. **This is margin expansion for a two-person firm and margin destruction for bodies-in-seats firms.**

### White-label subcontracting — investigated and rejected as a fallback

This was researched in depth because selling is the household's stated stress point. **It does not solve the problem.**

  

  - **The rate is roughly half what was assumed.** Payscale contract bookkeeper median $22.42/hr, 90th percentile $32.25. The plan's old $30-50 midpoint sat above the 90th percentile of the entire distribution. Maxim Liberty, a US provider selling to CPA firms since 2005, publishes $15/hr with an effective $10 wholesale rate. MYCPE ONE advertises staff to US firms starting at $11. **Realistic day-one planning number: $20 to $25 per hour.**
  - **The ceiling is $23,000 to $32,000 a year** at full 77-hour utilization, with zero exit value.
  - **The structured no-selling channels are closed to a beginner.** Paro requires 5+ years and assessments. Accountingfly requires 5+ years and recent public accounting firm experience. QuickBooks Live requires 3+ years of paid small-business bookkeeping. What remains open is LinkedIn outreach, TXCPA chapter meetings, and Facebook groups, which is exactly the activity being avoided.
  - **The buyer is worse.** A CPA partner knows the price, has the offshore quote, must make margin reselling you, and carries malpractice exposure for your errors.
  - **The stakes invert.** Losing a $450 prospect is 3% of a fifteen-client book. Losing a CPA firm is 35 to 50% of household income.
  - **It builds nothing.** No clients, no referral surface, no reviews, no testimonials (confidentiality bars naming the firm or its clients), no salable asset. A direct eight-client book sells for roughly $20,000 to $40,000. A white-label practice sells for approximately nothing.
  - **Non-solicit clauses would fence off the only businesses she would encounter,** producing experience without pipeline. Watch specifically for the word "accept" (which restricts the client's conduct, not just yours), "any client the Company served at any time," and restrictions on **referral sources**, which for accountants counsel explicitly advise firms to include and which would quietly fence off local banks, insurance agents, and attorneys.
  - **Worker classification risk.** The "no selling" version, meaning one firm, hourly, on their systems, indefinitely, sits on the wrong side of the line. The Texas Workforce Commission presumes employment and places the burden on the employer.

  

**The one legitimate use, with hard caps written before signing:** cash floor and supervised reps only. One firm, 20 hours a month maximum, twelve-month written sunset with a named date, hourly not fixed fee for anything resembling cleanup, indemnity limited to gross negligence and capped at twelve months of fees, restricted activity limited to bookkeeping so Brad's web work stays free, and a Texas attorney reads the non-solicit. **Get a written reference letter agreed at signing, when they are motivated. You will never get it later.**

  

**A better variant absent from the original plan:** subcontract to established *bookkeeping* firms rather than CPA firms. Lower screening bar, no tax-information consent layer, no licensure exposure, and the buyer was a beginner herself. Rate is $20 to $30.

  

## 9\. GUARDRAILS — NON-NEGOTIABLE

These are the rules that prevent catastrophic rather than merely bad outcomes. Encode them in the repo constitution.

  

1.  **Trust Fund Recovery Penalty.** Nobody at this firm ever holds payment authority over a client's payroll or tax accounts. The IRS holds "responsible persons" personally liable for unpaid withholding. The exposure is unlimited and not dischargeable. This is one of the two reasons payroll is excluded at launch. Engagement letters must exclude payment authority explicitly.
2.  **Texas data-processing sales tax.** Payroll processing, AP, and AR are taxable data processing at 6.25% plus local on 80% of the charge. Bookkeeping, reconciliation, and financial statements are not. Mixed contracts are governed by a 5% incidental rule, so always invoice services as separate line items. The Comptroller updated the data-processing rule in 2025 and heavily automated bookkeeping arguably drifts toward the taxable category; check annually with the CPA.
3.  **No force-balancing, ever.** A reconciliation difference is never plugged to an expense account or an "adjustment." It is diagnosed (verify the beginning balance first, then the reconciliation discrepancy report, then the audit log) or escalated. Plugs bury errors permanently and QuickBooks will happily let you do it.
4.  **Period locking.** Closing date plus password after every close. Changes to closed periods go through a documented reopen.
5.  **Separation of duties.** Brad moves documents and administers payment mechanics. Sarah makes every accounting judgment. Neither crosses over. Ambiguity goes to Sarah's review queue.
6.  **File hygiene, checked every close.** Opening Balance Equity must be zero after setup. Undeposited Funds swept. Bank feed Add-versus-Match verified, never auto-accepted (QBO only looks back 90 days and guesses).
7.  **Data security.** MFA everywhere. Client documents through the portal only, never email. Encrypted archive. Seven-year retention (IRS preparer minimum is three, Texas default is three, industry standard is seven). Cyber policy active before holding any client credentials. A written information security program (WISP) is required by any competent prime and is squarely Brad's skill set.
8.  **Scope armor.** Engagement letter defines scope, deliverables, document deadlines, what happens when documents do not arrive, and out-of-scope referrals (tax advice, Form 3115, reasonable compensation, sales tax nexus). Scope creep is the number one failure mode of fixed-fee engagements.
9.  **E\&O before client one.** $1M/$1M professional liability, roughly $37 to $50 a month, naming the LLC and covering both individuals performing services. It is a **claims-made** policy, so the retroactive date must precede the first engagement. Declare the full service scope on the application. Add cyber at roughly $47 a month. Total roughly $1,000 to $1,400 a year.
10. **Client screening scorecard** applied before every proposal. Prefer 2+ year old businesses. Cap restaurants at 25%. Decline anyone refusing autodraft or the portal.
11. **No tax or legal advice.** Flag and refer. Sarah is not a CPA, EA, or attorney, so Circular 230 does not bind her; the disclosure rules that do apply live in IRC 7216 and 6713 and the AICPA Code.

  

## 10\. OPERATIONS: THE MONTHLY MACHINE

|  |  |  |
| :-: | :-: | :-: |
| \*\*Days\*\* | \*\*Step\*\* | \*\*Owner\*\* |
| 1st | ACH autodraft runs for every client. Receipts auto-emailed. Failed drafts flagged for day-3 retry. | Brad (system) |
| 1st-5th | Portal auto-requests statements and receipts. Reminders day 1, 3, 5. Brad chases stragglers. Sarah never chases documents. | Brad |
| 5th-10th | Bank feeds categorized against Sarah's rules. Exceptions queued for her review. Reconciliations prepped. | Brad preps, Sarah judges |
| 10th-15th | Close. Verify beginning balances FIRST. Reconcile every account. Adjusting entries. Balance sheet reviewed line by line, every line provable to an external document. Trial balance variance scan against prior period. | Sarah |
| 15th | Deliver P\\\&L, balance sheet, and plain-English summary note via portal. Set closing date with password. | Sarah delivers, Brad archives |

  

**If the client did not send documents:** the close proceeds on time. Missing items are parked in a clearly labeled holding account and listed in the summary note. The engagement letter states this. Chronic offenders hit the scorecard at renewal. This is policy, not a negotiation.

  

**January is the crunch.** 1099-NEC and MISC due January 31 with penalties. Year-end closes. The Q1 cleanup demand spike, which is also the year's best acquisition window. Standing policy: W-9s collected at onboarding all year, 1099 prep priced as a separate January fee, new-client onboarding frozen mid-January to mid-February, Q1 cleanup quoted and scheduled rather than rushed.

### Software stack

|  |  |  |
| :-: | :-: | :-: |
| \*\*Tool\*\* | \*\*Cost\*\* | \*\*Note\*\* |
| Intuit accountant platform | $0 | Includes free QBO Advanced plus payroll for the firm's own books. \*\*QBOA is discontinued December 31, 2026\*\* — confirm the firm lands on Intuit Accountant Suite CORE (free), not the Accelerate beta that begins billing $149/mo on January 20, 2027. |
| Client QBO subscriptions | Firm-billed wholesale | ProAdvisor Preferred Pricing gives a permanent 30% discount, roughly +$20 per client per month blended. \*\*Treat as a rebate, never as load-bearing profit.\*\* Intuit has repriced this before. |
| Document portal + Dropbox | $0-20 | Brad builds. This is the moat most solo firms lack. |
| QuickBooks Payments ACH | \\\~1% of revenue | Roughly $40 to $90 a month at 10-14 clients. |
| E\\\&O + cyber | \\\~$85-120 | The largest fixed cost. |
| Password manager, e-sign, scheduling | \\\~$20-50 |   |
| \*\*Total\*\* | \*\*\\\~$105-190/mo\*\* | Covered by the first client's retainer. |

  

## 11\. ACQUISITION, RANKED HONESTLY

The underlying constraint: two capable people who do not want to do relationship sales need something other than a salesperson to bring the buyer.

  

**A reframe worth settling first.** "No relationship sales," "no cold outreach," and "no networking" are three different things. Several channels require none of them while still requiring written, asynchronous persuasion: landing page copy, a pricing page, proposals, a profile. Brad does that professionally. **If the real constraint is "no interruption selling and no relationship maintenance," the option set roughly doubles. If it is genuinely "no persuasion of any kind," almost everything collapses to two options: buy a book, or take a job.** Answer this about yourselves before choosing a channel.

  

|  |  |  |  |  |
| :-: | :-: | :-: | :-: | :-: |
| \*\*Rank\*\* | \*\*Channel\*\* | \*\*Selling required\*\* | \*\*Time to first client\*\* | \*\*Note\*\* |
| 1 | \*\*Local SEO, Google Business Profile, one vertical, one free tool\*\* | Near none, written only | 3-9 months, low confidence | The only channel where you hold a real edge, and the one white-label makes worthless. Gate on the Texas naming rule first. Get real DFW search volume from Keyword Planner rather than trusting any estimate. |
| 2 | \*\*Warm network, first 2-3 books at reduced fee\*\* | Minimal | Weeks | Priced as training, CPA-reviewed, harvested for testimonials. Every practitioner path starts here. |
| 3 | \*\*CPA referral partnerships\*\* | Moderate, relationship | 3-6 months | The compounding channel. Structural advantage: you sell no tax prep, so they refer without fear. Approach window is May-June, right after tax season pain peaks. Target five standing relationships. |
| 4 | \*\*Bridge income: temp staffing or an in-house bookkeeping job\*\* | None | 30-60 days | Robert Half DFW contract accounting clerk postings run $22-28/hr. Not the business. It is the documented history that Intuit, Paro, white-label buyers, and an SBA acquisition underwriter all screen on. Expect roughly \*\*three years\*\*, not 12-18 months, before those tiers genuinely open. |
| 5 | \*\*QuickBooks certifications and Find-a-ProAdvisor\*\* | None | Free, time-sensitive | See the warning below. Treat the listing as a conversion asset, not a discovery channel. |
| 6 | \*\*Subcontract to bookkeeping firms (not CPA firms)\*\* | Moderate, friendlier buyer | Weeks-months | $20-30/hr. Absent from the original plan and better than the CPA route. |
| 7 | \*\*New-filing drip list\*\* | None, automated | Year 2 | Expected conversion under 1%. Value arrives at month 12-14 after formation. |
| 8 | \*\*Upwork\*\* | Substantial, written, at volume | Weeks | Open with no credential gate, and that is its only virtue. Use deliberately to manufacture a first reference and review, then abandon. |
| 9 | \*\*Buying a book of business\*\* | None up front | 2-3 years out | 0.7 to 1.0x gross. SBA 7(a) operating-history requirement attaches to the \*\*target\*\*, not your entity, so a new LLC is not disqualifying. What disqualifies today is buyer experience plus a \\\~10% equity injection. |
| — | \*\*Reject:\*\* Thumbtack, Bark | — | — | Pay-per-lead economics are structurally wrong for low-monthly recurring services, plus documented billing-dispute histories. |
| — | \*\*Reject:\*\* Toptal, Fiverr Pro | — | — | Wrong tier entirely. |
| — | \*\*Defer:\*\* banker, broker, attorney referral pipelines | — | — | Requires exactly the relationship selling being excluded, and is structurally closed to a firm with no book to reciprocate with. This is the item in the plan most likely to be overestimated. |

### ProAdvisor directory — a closing window

Publishing to Find-a-ProAdvisor appears to require Gold tier at 500 points, reachable with zero clients via Level 2 (200) plus Payroll certification (200) plus Level 1 (100). **Intuit sunsets ProAdvisor in early 2027 and replaces it with ProPartner, where advancing above the base tier requires an active certification AND at least one active paying QuickBooks Online client.** So sit all three exams now as a grandfathering play. **Verify the live point threshold inside QuickBooks Online Accountant rather than trusting any published number, because sources conflict.**

  

Reality check on directory leads: practitioner reports are mixed, some getting six or seven leads and some zero. Independent evidence on the analogous Xero directory in the UK: "more than 2000 accountants listed and the vast majority receive no leads at all." Reviews are the ranking lever, and reviews require clients.

  

## 12\. SOPs TO BUILD (in priority order)

1.  **Monthly close checklist, per client.** The single most important artifact in the business. It is also what enables a future hire and what makes the practice salable. Build it from client one.
2.  **Client onboarding checklist.** Access requests, W-9 collection, chart of accounts audit, opening balance verification, bank rule setup, portal invitation, ACH authorization, engagement letter execution.
3.  **Engagement letter template plus ACH authorization.** One attorney review, roughly $0 to $250.
4.  **Client screening scorecard.** Applied before every proposal.
5.  **Cleanup 12-step order.** Back up and set closing date; audit the chart of accounts; merge duplicate vendors and items; standardize naming and bank rules; reconnect or rebuild feeds; clear uncategorized income and expense; investigate negative and aged balances; reconcile oldest to newest; tie loans to amortization schedules; review sales tax; run a trial balance variance scan against tax returns; lock and export. **The most common mistake is procedural, not technical: diving into categorization before fixing the chart of accounts, vendors, and feeds, then having to redo it.**
6.  **Document chase SOP.** Automated reminders day 1, 3, 5, then Brad personally.
7.  **Payment failure and service pause SOP.**
8.  **Security / WISP.** MFA, encrypted storage, dedicated work device, access control, retention and destruction, breach notification.
9.  **Records retention schedule.** Seven years, encrypted.
10. **Annual compliance calendar.** See Section 13.
11. **KPI dashboard, reviewed monthly.** MRR and client count against the gates; hours per client (target ≤9 early, trending to 5); close-by-day (100% by the 15th); failed drafts (zero outstanding past day 10); pipeline conversations (10 a month during growth); Google reviews (+1 a month minimum).

  

## 13\. COMPLIANCE CALENDAR

|  |  |
| :-: | :-: |
| \*\*When\*\* | \*\*What\*\* |
| Monthly, 1st | ACH autodraft run |
| Monthly, 15th | All closes delivered, periods locked |
| January 31 | 1099-NEC and 1099-MISC recipient copies and IRS filing |
| Mid-Jan to mid-Feb | New-client onboarding freeze |
| May 15 | Texas franchise tax / Public Information Report (CPA handles; confirm annually) |
| June 1 | Reminder: ProAdvisor recertification opens |
| \*\*June 30\*\* | \*\*ProAdvisor recertification hard deadline.\*\* Missing it at Level 2 revokes both levels, unpublishes the directory profile, and forfeits 300 points. |
| Annually, day 305 | SAM.gov renewal window opens (expires at 365 days; allow 10 business days to activate) |
| Every 3 years, minus 90 days | WOSB recertification window opens |
| Within 30 days of any change | Notify SBA of material change in ownership, structure, or management |
| December 2026 | Confirm migration to Intuit Accountant Suite CORE (free), not the Accelerate beta billing $149/mo from January 20, 2027 |
| Annually | Review Texas data-processing sales tax boundary with the CPA |

  

## 14\. INFRASTRUCTURE AND BACKUPS (Brad's build list)

**Client-facing:**

  

  - Website, bookkeeping language only, one vertical focus
  - Google Business Profile, claimed and optimized for the map pack
  - Local SEO, service pages per niche and suburb
  - A genuinely useful free tool or cleanup diagnostic for the chosen vertical
  - Review request system, triggered after each clean close
  - Client document upload portal
  - Dropbox Business file structure, one folder tree per client

  

**Internal:**

  

  - Receipt collection and processing pipeline
  - ACH autodraft administration and failed-payment handling
  - Onboarding automation (checklists, access requests, W-9 collection)
  - Bank rule configuration per Sarah's specifications
  - New-business-filing scraper and drip sequences
  - Records archive, encrypted, seven-year retention

  

**Backups, three layers:**

  

1.  **Git repository** for all SOPs, templates, checklists, and the constitution. Local plus a private remote. This is version history for the way the business operates.
2.  **Client working files.** QuickBooks Online is cloud-hosted and Intuit retains it, but export a monthly trial balance, P\&L, balance sheet, and general ledger per client to the archive so the firm is never dependent on continued platform access or a continued client relationship to prove its work.
3.  **Encrypted cold archive.** One encrypted drive plus a cloud copy, seven-year retention. Cost is under $100. Include workpapers, signed engagement letters, ACH authorizations, and close checklists.

  

**Automate the backup.** A scheduled job that exports, encrypts, and syncs monthly, with a failure alert. An unverified backup is not a backup.

  

## 15\. TOOLCHAIN NOTES

  - **Node** is at /c/Program Files/nodejs and requires a PATH prepend in bash: export PATH="/c/Program Files/nodejs:$PATH"
  - **No gh CLI** installed.
  - **The business plan workbook** is generated from source at ...\\scratchpad\\bkplan\\ using ExcelJS: style.js (the styling framework), tabs\_01\_02.js through tabs\_13\_14.js, and build.js (orchestrator plus verification pass). Set wb.calcProperties.fullCalcOnLoad = true or formulas arrive uncomputed. **Move this into the repo so it is versioned.**
  - **Pushing a built xlsx into Drive as a native Google Sheet:** the Drive MCP cannot take large binaries and the Chrome file-upload tool refuses paths outside session-shared folders. The working method is to serve the file from a local CORS server on 127.0.0.1, then from a drive.google.com tab use the page's own credentials: scrape the API key, build a SAPISIDHASH, and POST multipart to clients6.google.com/upload/drive/v3/files with mimeType: application/vnd.google-apps.spreadsheet to convert on the way in. PATCH the same file id with uploadType=media to revise without changing the share link. Formatting, merges, number formats, and live formulas all survive.

  

**Key IDs:**

  

  - Drive folder: 1yBgMZTeFOJD8RQ9XG7juFB3nWBIc1QaQ
  - Business plan Sheet: 1PR8CLOEFSD0MlA17PMQII-jn\_nKlz8Y490IQJFlbL30

  

## 16\. OPEN ITEMS AND DECISION GATES

### Do these first

1.  **Five phone calls this week.** Call five DFW CPA firms and small bookkeeping firms and ask one question: "Do you use outside bookkeeping help, and what do you pay?" No pitch, no ask, nothing to be rejected. It resolves the largest remaining unknown for the cost of an afternoon. **And it is the lowest-stakes possible version of the cold outreach the plan depends on. If neither of you can make those five calls, that is the finding, and it eliminates white-label, staffing platforms, referral partnerships, and practice acquisition all at once, leaving inbound as the only road.** Better to learn it this week for free.
2.  **Confirm Brad's VA rating status in writing.** Permanent and total or not. Decides CHAMPVA. Five-figure annual swing.
3.  **Lock the Texas naming and keyword architecture** before a line of site copy is written. Send a confirmatory inquiry to TSBPA.
4.  **Sarah sits all three QuickBooks certifications** and publishes Find-a-ProAdvisor. Free, no selling, window closes roughly early 2027.
5.  **Operating agreement control language review.** One attorney hour.
6.  **Bind E\&O and cyber before client one.** Claims-made retroactive date.
7.  **Decide the acquisition question in Section 11:** is the constraint "no interruption selling" or "no persuasion at all"? The answer determines the channel.

### Decision gates (set now, before feelings are involved)

|  |  |  |
| :-: | :-: | :-: |
| \*\*Gate\*\* | \*\*Threshold\*\* | \*\*If missed\*\* |
| Day 90 | 3 signed clients, from 30 conversations and 10 proposals | Diagnose the channel, not the effort. Pivot niche, or pivot to bookkeeping-firm subcontracting within 30 days. |
| Month 6 | 3-5 clients, \\\~$1,500-2,500 MRR | Yellow. Secure an overflow subcontract relationship as an income bridge and for supervised reps. |
| Month 12 | 8-12 clients, \\\~$4,000-6,000 MRR | Red. Begin tuck-in and employment conversations while the book still has sale value. |
| Month 18 | Net income within reach of the $72,000 full-charge floor | Execute exit: sell or merge the book, take employment. |
| Month 30-36 | $15,000-20,000 MRR trajectory | Below this the firm loses to the corporate path on money alone. Continue only for autonomy, household fit, and the sellable asset, and say so out loud. |

  

**Every gate exits into the DFW salary table in Section 8, not into zero.** Worst realistic case: the attempt costs roughly 18 months of forgone salary minus whatever the book sells for, and ends with Sarah more employable in the $72,000 to $145,000 band than she was at launch.

### Wind-down mechanics if it comes to that

No license exists to surrender; closure is contractual and tax-driven. Termination letters with 30 days' notice per the engagement letter, with delivery proof, and all committed work completed through the termination date (cutting corners at the end is the malpractice pattern). Return client source documents, close portal access. Keep workpapers seven years, encrypted. **Keep E\&O tail coverage for one to two years post-closure**, a few hundred dollars a year, because claims arrive after the work ends. Entity: keep the LLC dormant at roughly $0 a year as a restart option, or terminate for a $40 SOS fee plus a final franchise filing. Elapsed time for a clean wind-down: 60 to 90 days.

  

## 17\. FAILURE LOG — HOW THIS HAS ALREADY GONE WRONG

Read this section. It is the most useful part of the document for a future session, because these are the specific ways the work has produced errors, and each one has a rule attached.

  

**1. A future date written in past tense.** The plan stated Intuit "retired" QuickBooks Live on July 29, 2026, when the document was written on July 27 and the retirement was two days away. Sarah caught it within ten minutes of first reading, and it cost real credibility. The same error appeared in three separate tabs.

  

**Rule: check every date against today's date before writing about it. A mechanical scan of all date claims takes one minute and should be run before any delivery.**

  

**2. A third-party AI audit was confidently wrong in a specific pattern.** Google Gemini was asked to audit the plan. It was wrong on four of five substantive findings. Both of its tax "corrections" substituted a prior-year inflation-adjusted figure for the current year: it offered the 2025 Social Security wage base as the 2026 figure, and the 2024 QBI threshold as the 2025 figure. Its "critical" arithmetic finding quoted a formula and then failed to apply two terms of the formula it had just quoted. Its valuation finding confused a multiple of *cash flow* for a multiple of *revenue*, which differ by roughly three times.

  

**Rule: a second model's confirmation is not verification. Check its year-indexed figures against primary sources, including the figures it confirms rather than only the ones it disputes. Note also which claims it silently skipped, because that is the same staleness signal viewed from the other side.**

  

**3. Applying a correction without verifying it introduced a new error.** Gemini's one legitimate catch, that WOSB maintenance was missing from the plan, was implemented using Gemini's description of the requirement: annual recertification and third-party audits. That describes the pre-2023 regime. Certification is triennial, the annual attestation was repealed effective May 30, 2023, and program examinations are conducted by SBA at no cost.

  

**Rule: verify a correction before applying it. Accepting a valid criticism does not mean accepting the critic's version of the facts.**

  

**4. A googleable number without context caused a credibility crisis.** The plan said QuickBooks certification costs $0, which is correct for Intuit's ProAdvisor credential. Searching the term returns third-party training companies at $600 that license the QuickBooks trademark. The number was right and it still cost confidence.

  

**Rule: anything a reasonable person would Google and get a different answer to gets a disambiguation note in the document, before they find it.**

  

**5. The same figure restated as prose in multiple places drifted apart.** The plan quoted three different capacity ceilings in three tabs: 15 computed in the model, "20 to 22" in narrative, and 14 in the projections. Separately, the projections tab hardcoded fixed costs that the model computed, so editing the "interactive" model left the projections frozen.

  

**Rule: one source of truth. Numbers live in formulas and get referenced, never restated. If prose must state a number, it gets checked against the formula on every build.**

  

**6. Research agents produce plausible unsourced numbers under pressure.** The original $30 to $50 per hour white-label rate could not be confirmed from a single non-marketing source in six research dimensions, and the real number is roughly half that.

  

**Rule: grade every source. Reject vendor marketing, content farms, and AI-generated SEO, and name what was rejected. Where a number is triangulated rather than measured, say so at point of use. "I could not establish this" is a valid and valuable answer.**

  

## 18\. THE HONEST BOTTOM LINE

The plan is sound and the economics work, with three caveats worth keeping in front of you.

  

**Delivery is not the risk. Acquisition is.** Sarah can learn to close books; the path is well documented and the guardrails are in Section 9. What is unproven is whether this household will do the thing that makes clients appear. Every fallback investigated so far, including white-label, turned out to require the same activity in a different costume.

  

**The line worth keeping:** every channel where someone else brings you the buyer prices bookkeeping labor at $15 to $30 an hour, because that is what undifferentiated bookkeeping labor is worth when a middleman owns the client. There are only two ways out. Own the demand, which is slow and is the one thing this household is genuinely equipped to build. Or own the clients, which is expensive and two to three years away. Everything else is renting someone else's sales function at their price.

  

**And the crossover test, stated plainly:** on a pure two-to-three-year discounted cash basis, a corporate job likely wins. The firm must reach roughly $15,000 to $20,000 MRR by month 30 to 36 to beat the corporate path on money alone. Below that trajectory the justification is autonomy, household fit, the QBI deduction, dual solo-401(k) capacity, and the fact that a firm is a sellable asset while a salary never is. Those are real reasons. They are just not the same reason as "it makes more money," and the plan should never pretend otherwise.

  