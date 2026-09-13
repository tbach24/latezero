# LateZero — Validation Plan (v2)

**Status:** VALIDATION — AWAITING DEPLOYMENT  
**Updated:** 2026-09-12  
**Window:** 14 days from page going live (evaluate continuously — kill or escalate early if signal warrants)  
**Authorized spend:** $0–$25 autonomous / $25–$100 with documented EV / >$100 needs owner approval

---

## Hypothesis

> "Real Xero users who experience the late-fee problem will confirm price-level intent ($29/month) at a rate that justifies building the product."

---

## Evidence Classification (per owner directive)

| Level | Definition | How captured |
|-------|-----------|--------------|
| **Level 1** | PAID COMMITMENT — money actually committed | Not yet available (no payment infra yet) |
| **Level 2** | CHECKOUT INTENT — begins payment/commitment process | Future: if Stripe checkout added |
| **Level 3** | PRICE-CONFIRMED INTENT — explicitly accepts $29/month after seeing price | ✅ "Yes — I intend to subscribe" button click → Netlify form `latezero-intent` with `intent=price-confirmed-yes` |
| **Level 4** | EMAIL LEAD — email only, no price confirmation | ✅ Step 1 form submit → Netlify form `latezero-step1` |
| **Level 5** | ENGAGEMENT — click or view | ✅ JS scroll events (pricing section viewed) |

**These levels are NEVER combined in reporting.**

---

## Build Gate

**BUILD authorized for consideration ONLY when:**
- 5+ Level 1 (paid) commitments, OR
- Exceptionally strong Level 3 signal sufficient for CEO to recommend a second validation step

**5 email addresses (Level 4) are NOT sufficient to authorize build.**

---

## Success Thresholds

| Level 3 intents | Action |
|-----------------|--------|
| 10+ | STRONG SIGNAL — return to owner, propose second validation or MVP spec |
| 5–9 | SIGNAL — analyze quality, assess whether Level 1 step is warranted |
| 3–4 | AMBIGUOUS — review objections, consider second experiment |
| 0–2 with sufficient qualified traffic | Recommend KILL (product failure) |
| 0–2 with insufficient qualified traffic | INSUFFICIENT DATA — change channel |

---

## Funnel Design

### Step 1 — Email capture
- User enters email
- Captured to Netlify Form `latezero-step1` (field: `email`, `source`, `intent=email-only`)
- Evidence: **Level 4**

### Step 2 — Price-confirmed intent
- Shown immediately after Step 1 (no page reload)
- Shows: $29/month, prelaunch disclosure, explicit choice
- "Yes — I intend to subscribe" → Level 3
- "No — just curious" → records interest-only
- Captured to Netlify Form `latezero-intent` (field: `email`, `intent`, `source`, `evidence_level`)
- Evidence: **Level 3** (yes) / **Level 4** (no)

### Future — Level 1 upgrade path
If Level 3 signals are strong (5+), consider adding Stripe checkout ($1 refundable hold) to upgrade to Level 1. Requires owner approval for Stripe account creation.

---

## Form Capture — Netlify Forms

**No external SaaS account needed.** Netlify Forms captures submissions server-side from `data-netlify="true"` HTML forms. Free tier: 100 submissions/month (plenty for validation). Submissions viewable in Netlify dashboard.

Forms defined in HTML:
- `name="latezero-step1"` — email + source
- `name="latezero-intent"` — email + intent + evidence_level + source

Both fire via `fetch()` client-side after page deploy.

---

## Deployment

**Status: BLOCKED — awaiting owner action (see below)**

### What's needed from owner (one action, ~2 min):

**Option A — Netlify Drop (recommended, fastest):**
1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**
2. Log in with your GitHub (tbach24) or create free Netlify account
3. Drag the folder: `/Users/thobach/.openclaw/workspace/tinyfactory/latezero/`
4. Netlify assigns a free HTTPS URL (e.g., `latezero-early-access.netlify.app`)
5. Paste the URL here — I'll handle all outreach from that point

**Option B — GitHub Pages (if preferred):**
1. Go to github.com/new — create repo named `latezero`
2. I'll push the files via SSH (already authenticated)
3. Enable GitHub Pages in repo settings → Pages → Deploy from branch `main`
4. URL: `latezero.critfix.co`

Either option is free, HTTPS, live in under 5 minutes.

---

## Domain

- `latezero.com` — confirmed UNREGISTERED as of 2026-09-12 (whois verified)
- Registering at Cloudflare Registrar: ~$9.77/year (at-cost, free WHOIS privacy)
- Registering at Namecheap: ~$9.98/year + free WhoisGuard
- Within autonomous spend authority IF owner confirms they want it
- **Do not purchase until page is deployed and at least one channel is confirmed working**

---

## Distribution Channels (rules-checked before posting)

### Priority order (most → least qualified traffic):

1. **r/xero** — Xero users discussing invoicing pain. Check rules. Post as genuine value, mention LateZero if rules allow. UTM: `?utm_source=reddit&utm_campaign=rxero`
2. **Xero Community Forum** — community.xero.com — find threads about late fees, respond with link. UTM: `?utm_source=xero_community`
3. **r/freelanceuk + r/freelance** — freelancers using Xero, many UK-based (strong Xero market). UTM: `?utm_source=reddit&utm_campaign=freelance`
4. **r/Bookkeeping** — bookkeepers recommend tools to clients. High leverage. UTM: `?utm_source=reddit&utm_campaign=bookkeeping`
5. **LinkedIn** — post from personal account about the Xero gap. Tag #xero #freelancer #smallbusiness. UTM: `?utm_source=linkedin`
6. **Facebook: Xero user groups** — search "Xero" in FB Groups. Most have rules allowing tool sharing. UTM: `?utm_source=facebook`
7. **Personalized outreach** — find people who explicitly complained about Xero late fees in Reddit/community threads. Respond directly. Max 15–20 messages, must be personalized and genuine. UTM: `?utm_source=direct_outreach`

### Rules compliance checklist (before every post):
- [ ] Read subreddit/group rules
- [ ] Not in a no-promotion zone
- [ ] Disclosing affiliation when context requires
- [ ] Not claiming product is currently functional
- [ ] Not claiming Xero affiliation

---

## Kill Criteria (time-to-truth override)

**Kill early if:**
- 150+ qualified Xero users see the offer AND essentially no Level 3 behavior appears
- Strong pattern of "I'd use this but not for $29" → price problem, not product problem (warrants one price-point experiment)
- Strong pattern of "I already use Paidnice/Late Fee Manager" → market saturated (warrant KILL)

**Escalate early if:**
- 10+ Level 3 intents in first 48 hours → report immediately, do not wait for 14-day window

---

## Measurement Log

Updated in `VALIDATION-LOG.md` at minimum every 48 hours once live.

| Metric | Classification |
|--------|---------------|
| Unique visitors | Level 5 |
| Pricing section views | Level 5 |
| Step 1 submissions (email only) | Level 4 |
| Step 2 "Yes" clicks | Level 3 |
| Step 2 "No" clicks | Interest-only |
| Source breakdown per conversion | — |
| Objections/questions received | — |
