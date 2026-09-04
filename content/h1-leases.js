/* CPALE 2029 TOS - H.1 Leases (PFRS 16 / IFRS 16)
   Three chapters sharing the group "Leases": lessee, lessor, sale and leaseback.

   Written against the standard as currently in force, NOT the older IAS 17
   treatment that survives in some Philippine reviewers. In particular:
     - PFRS 16.27(c): the lessee includes only the amount EXPECTED TO BE PAYABLE
       under a residual value guarantee, not the full guaranteed amount.
     - Appendix A: the LESSOR includes the FULL residual value guarantee.
     - PFRS 16.40-43: revised vs unchanged discount rate on remeasurement.
     - PFRS 16.99: a sale and leaseback is only a sale if it satisfies PFRS 15.
     - Lease Liability in a Sale and Leaseback (2022 amendment, effective
       1 January 2024) on subsequent measurement. */

var LEASE_GROUP = "Leases";

/* ==================================================================
   1. LESSEE ACCOUNTING
   ================================================================== */
FARHub.addChapter({
  id: "h1a-lessee",
  code: "H.1.1-1.2",
  group: LEASE_GROUP,
  title: "Lessee Accounting",
  blurb: "One model for every lease, two narrow exemptions, and a lease liability that includes only what the lessee actually expects to pay.",
  minutes: 85,
  outcomes: [
    "Apply the single lessee model and its two exemptions.",
    "Measure the lease liability, including the amount expected to be payable under a residual value guarantee.",
    "Measure and depreciate the right-of-use asset.",
    "Remeasure the lease liability, using a revised or unchanged discount rate as the trigger requires.",
    "Account for lease modifications, including a decrease in scope.",
    "Present the right-of-use asset and lease liability."
  ],

  sections: [
{
  id: "model",
  title: "The Single Lessee Model and Its Two Exemptions",
  blocks: [
    {t:"p", html:"A <b>lease</b> is a contract, or part of a contract, that conveys the <b>right to use an underlying asset for a period of time in exchange for consideration</b>."},
    {t:"p", html:"At the commencement date the lessee recognises a <b>right-of-use asset (ROU asset)</b> and a <b>lease liability</b>. There is <b>no finance/operating classification on the lessee's books</b> - that distinction survives only for the lessor."},
    {t:"note", html:"<b>Asymmetry is normal, not an error.</b> The same contract can produce a right-of-use asset and lease liability for the lessee while the lessor treats it as an operating lease and keeps the asset on its own books. Two different questions are being asked: the lessee asks <i>have I obtained a right to use an asset</i>; the lessor asks <i>have I transferred substantially all the risks and rewards</i>."},
    {t:"h", html:"The two exemptions (TOS H.1.2)"},
    {t:"ol", items:[
      "<b>Short-term lease</b> - lease term of <b>12 months or less</b> at the commencement date, and containing <b>no purchase option</b>.",
      "<b>Low-value lease</b> - the underlying asset is of low value <b>when new</b>."
    ]},
    {t:"p", html:"Where an exemption is taken, the lessee recognises the payments as an <b>expense on a straight-line basis</b> over the lease term, with no ROU asset and no lease liability."},
    {t:"note", html:"<b>No peso threshold exists.</b> PFRS 16 gives no numeric cut-off for low value; it is a matter of <b>professional judgment</b>. The figure mentioned in the standard's Basis for Conclusions is <b>US$5,000 or equivalent for a new similar asset</b>. Two consequences examiners test: the test is applied to the asset's value <b>when new</b>, so a heavily depreciated vehicle does not qualify; and the short-term election is made <b>by class of underlying asset</b>, while the low-value election is made <b>lease by lease</b>."},
    {t:"example", title:"Illustrative example 1 - applying the exemptions", blocks:[
      {t:"p", html:"An entity enters into three leases on 1 January 2030."},
      {t:"table",
        head:["Lease","Facts","Treatment"],
        rows:[
          ["A","Photocopier, 10-month term, no purchase option","<b>Short-term exemption available.</b> Straight-line rent expense; no ROU asset."],
          ["B","Five-year-old delivery van, 8-month term. A new equivalent van costs P1,800,000","<b>Short-term exemption available</b> - the term is under 12 months. The <b>low-value</b> exemption is <b>not</b>: low value is tested on the asset <b>when new</b>."],
          ["C","Laptop, 3-year term, new cost P55,000","<b>Low-value exemption available.</b> The term rules out short-term, but the asset is of low value when new."]
        ]},
      {t:"p", html:"Had lease A contained a purchase option, the short-term exemption would have been unavailable however brief the term."}
    ]}
  ],
  check:{
    q:"An entity leases a five-year-old delivery van for 8 months. The van's current market value is small, but a new equivalent costs P1,800,000. Which exemption is available?",
    choices:[
      "The low-value exemption, because the van's current value is small.",
      "The short-term exemption, because the term is 12 months or less.",
      "Both, and the entity may elect either.",
      "Neither."
    ],
    answer:1,
    why:"The <b>short-term</b> exemption applies - an 8-month term with no purchase option. The <b>low-value</b> exemption does not: low value is tested on the value of the asset <b>when new</b> (P1,800,000), not its depreciated current value. The age of the asset is irrelevant to that test."
  }
},
{
  id: "liability",
  title: "The Lease Liability - What Actually Goes In",
  blocks: [
    {t:"p", html:"The lease liability is measured at the <b>present value of the lease payments not paid at the commencement date</b>."},
    {t:"h", html:"PFRS 16.27 - the five components"},
    {t:"ol", items:[
      "<b>Fixed payments</b>, including in-substance fixed payments, <b>less any lease incentives receivable</b>.",
      "<b>Variable lease payments that depend on an index or a rate</b>, initially measured using the index or rate at the commencement date.",
      "<b>Amounts expected to be payable</b> by the lessee under <b>residual value guarantees</b>.",
      "The <b>exercise price of a purchase option</b>, if the lessee is <b>reasonably certain</b> to exercise it.",
      "<b>Payments of penalties for terminating</b> the lease, if the lease term reflects the lessee exercising a termination option."
    ]},
    {t:"note", html:"<b>Component 3 is the one that changed, and it is worth being precise about.</b><br><br>Under the <b>old IAS 17</b>, minimum lease payments included <i>amounts guaranteed by the lessee</i> - the <b>full</b> guaranteed residual value. Many Philippine reviewers and lecture handouts still carry that wording.<br><br>Under <b>PFRS 16 paragraph 27(c)</b>, the lessee includes only <b>the amount it expects to be payable</b> under the guarantee. If the lessee guarantees a residual of P500,000 but expects the asset to be worth P460,000 at the end of the lease, only <b>P40,000</b> - the expected shortfall - is discounted into the liability. If it expects no shortfall at all, <b>nothing</b> goes in."},
    {t:"p", html:"Two further exclusions follow directly:"},
    {t:"ul", items:[
      "An <b>unguaranteed residual value</b> never enters the lessee's liability - the lessee has promised nothing.",
      "<b>Variable payments linked to use or sales</b> - a percentage of turnover, or a charge per machine hour - are <b>excluded</b> and expensed as incurred. Only index- or rate-linked variables are capitalised."
    ]},
    {t:"note", html:"<b>Why the change makes sense.</b> A residual value guarantee is a <b>contingent</b> obligation: the lessee pays only if the asset is worth less than the guaranteed figure. Capitalising the whole guarantee would recognise a liability for an amount the lessee, on its own expectations, will never pay. Measuring the expected shortfall is consistent with how every other uncertain obligation is measured."},
    {t:"example", title:"Illustrative example 2 - what enters the liability", blocks:[
      {t:"p", html:"A lessee enters a 5-year lease with annual payments of <b>P100,000</b> in arrears. It guarantees a residual value of <b>P300,000</b>; the asset is expected to be worth <b>P280,000</b> at the end of the term. A further <b>P150,000</b> of residual value is unguaranteed. The lease also requires <b>2% of the lessee's sales</b> from the leased outlet. Implicit rate 10%; PV of an ordinary annuity of 1 for 5 periods at 10% = <b>3.7908</b>; PV of 1 for 5 periods at 10% = <b>0.6209</b>."},
      {t:"table",
        head:["Component","Amount included","PV"],
        rows:[
          ["Fixed annual payments","100,000 x 3.7908","379,080"],
          ["Residual value guarantee - <b>expected shortfall only</b>, 300,000 - 280,000","20,000 x 0.6209","12,418"],
          ["Unguaranteed residual value","<b>excluded</b>","-"],
          ["Variable payments based on sales","<b>excluded</b> - expensed as incurred","-"],
          ["<b>Lease liability</b>","","<b>391,498</b>"]
        ]},
      {t:"note", html:"Under the old IAS 17 approach the full P300,000 guarantee would have been discounted, giving P379,080 + P186,270 = <b>P565,350</b> - a liability nearly 45% larger than the standard now requires. If a reviewer's answer looks far too big, this is usually why."}
    ]}
  ],
  check:{
    q:"A lessee guarantees a residual value of P500,000 and expects the asset to be worth P460,000 at the end of the lease. What amount relating to the guarantee enters the lease liability?",
    choices:[
      "P500,000, the full guaranteed amount.",
      "P460,000, the expected value of the asset.",
      "The present value of P40,000, the amount expected to be payable.",
      "Nothing - residual value guarantees are never capitalised."
    ],
    answer:2,
    why:"PFRS 16.27(c) includes only <b>amounts expected to be payable</b> under the guarantee. The lessee expects a shortfall of P500,000 - P460,000 = <b>P40,000</b>, and it is that amount, discounted, which enters the liability. Capitalising the full P500,000 is the superseded <b>IAS 17</b> treatment still found in older reviewers."
  }
},
{
  id: "rate",
  title: "The Discount Rate",
  blocks: [
    {t:"p", html:"Discount the lease payments using the <b>interest rate implicit in the lease</b>. Where that rate <b>cannot be readily determined</b>, use the lessee's <b>incremental borrowing rate</b>."},
    {t:"p", html:"The <b>rate implicit in the lease</b> is the rate that causes the present value of the lease payments <i>plus</i> the unguaranteed residual value to equal the fair value of the underlying asset plus the lessor's initial direct costs. It is the <b>lessor's</b> rate of return, and the lessee often cannot compute it because it does not know the lessor's residual estimate."},
    {t:"p", html:"The <b>incremental borrowing rate</b> is the rate the lessee would have to pay to borrow, over a similar term and with similar security, the funds necessary to obtain an asset of similar value in a similar economic environment."},
    {t:"note", html:"<b>Where a problem supplies both rates, use the implicit rate.</b> The incremental borrowing rate is a <b>fallback</b>, not a choice. A question that gives you both is usually testing whether you know which one is subordinate - and the incremental rate is typically set higher so that using it produces a visibly different, wrong answer."},
    {t:"example", title:"Illustrative example 3 - choosing the rate", blocks:[
      {t:"p", html:"Brad Co. leased equipment on 1 January 2030 with annual payments of <b>P100,000</b> for 5 years in arrears. The implicit rate is <b>12%</b>; Brad's incremental borrowing rate is <b>15%</b>. PV of an ordinary annuity of 1 for 5 periods: at 12% = <b>3.6048</b>; at 15% = <b>3.3522</b>."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Lease liability - correct","100,000 x 3.6048","<b>360,480</b>"],
          ["Using the incremental rate - wrong","100,000 x 3.3522","335,220"],
          ["Interest expense, year 1","360,480 x 12%","43,258"],
          ["Reduction of liability, year 1","100,000 - 43,258","56,742"]
        ]},
      {t:"p", html:"The 15% rate is not used at all, because the implicit rate is given and therefore readily determinable."}
    ]},
    {t:"example", title:"Illustrative example 4 - payments in advance", blocks:[
      {t:"p", html:"The same facts, except the annual payments are made <b>in advance</b> (an annuity due). PV factor for an annuity due of 1 for 5 periods at 12% = 3.6048 x 1.12 = <b>4.0373</b>."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Lease liability","100,000 x 4.0373","<b>403,730</b>"],
          ["First payment, made at commencement","","(100,000)"],
          ["Liability carried into year 1","","303,730"],
          ["Interest expense, year 1","303,730 x 12%","36,448"]
        ]},
      {t:"p", html:"The first payment attracts <b>no interest</b> because it is made at the commencement date. Interest for the first year runs on the liability <i>after</i> that payment."}
    ]}
  ],
  check:{
    q:"A lease gives an implicit rate of 12% and an incremental borrowing rate of 15%. Which is used, and why?",
    choices:[
      "The 15% rate, because it reflects the lessee's own credit risk.",
      "The 12% implicit rate, because the incremental borrowing rate applies only where the implicit rate cannot be readily determined.",
      "The average of the two rates.",
      "Either, at the lessee's election."
    ],
    answer:1,
    why:"The implicit rate is used whenever it is <b>readily determinable</b>. The incremental borrowing rate is a fallback for when the lessee cannot compute the lessor's rate of return - typically because it does not know the lessor's estimate of the unguaranteed residual value."
  }
},
{
  id: "roua",
  title: "The Right-of-Use Asset at Cost",
  blocks: [
    {t:"p", html:"The ROU asset is measured at <b>cost</b> at the commencement date, comprising:"},
    {t:"ol", items:[
      "The amount of the <b>initial measurement of the lease liability</b>;",
      "Any <b>lease payments made at or before</b> the commencement date, <b>less any lease incentives received</b>;",
      "Any <b>initial direct costs</b> incurred by the lessee; and",
      "An estimate of costs to <b>dismantle and remove</b> the asset, restore the site, or restore the asset to the condition required by the lease - <b>discounted to present value</b>."
    ]},
    {t:"note", html:"<b>Two items that look like lease costs and are not.</b><br><b>Executory costs</b> - maintenance, insurance and property taxes on the underlying asset - are <b>expensed as incurred</b>, entering neither the liability nor the asset.<br><b>Leasehold improvements</b> are a <b>separate asset</b> of the lessee, depreciated over the shorter of their useful life and the lease term."},
    {t:"example", title:"Illustrative example 5 - building up the cost", blocks:[
      {t:"p", html:"A lessee's lease liability is <b>P2,000,000</b>. It also pays a lease bonus of P150,000 at commencement, receives a lease incentive of P40,000, incurs initial direct costs of P60,000, pays annual property taxes of P50,000, spends P200,000 on leasehold improvements, and has a present obligation to restore the site, estimated at P90,000 undiscounted and <b>P56,000</b> in present value terms."},
      {t:"table",
        head:["","Amount"],
        rows:[
          ["Initial lease liability","2,000,000"],
          ["Add: lease bonus paid at commencement","150,000"],
          ["Less: lease incentive received","(40,000)"],
          ["Add: initial direct costs","60,000"],
          ["Add: PV of restoration obligation","56,000"],
          ["<b>Cost of the right-of-use asset</b>","<b>2,226,000</b>"]
        ]},
      {t:"p", html:"The P50,000 property taxes are an <b>executory cost</b>, expensed. The P200,000 of leasehold improvements is a <b>separate asset</b>. The restoration cost is included at its <b>present value</b>, not the undiscounted P90,000, with the corresponding credit to a provision."},
      {t:"table",
        head:["Journal entry at commencement","Debit","Credit"],
        rows:[
          ["Right-of-use asset","2,226,000",""],
          ["&nbsp;&nbsp;&nbsp;Lease liability","","2,000,000"],
          ["&nbsp;&nbsp;&nbsp;Provision for restoration","","56,000"],
          ["&nbsp;&nbsp;&nbsp;Cash (150,000 - 40,000 + 60,000)","","170,000"]
        ]}
    ]}
  ],
  check:{
    q:"Using the facts of example 5, what is the cost of the right-of-use asset?",
    choices:["P2,170,000","P2,226,000","P2,276,000","P2,426,000"],
    answer:1,
    why:"P2,000,000 + P150,000 bonus - P40,000 incentive + P60,000 initial direct costs + P56,000 <b>present value</b> of the restoration obligation = <b>P2,226,000</b>. Property taxes are executory and expensed; leasehold improvements are a separate asset; and the restoration cost enters at present value, not the undiscounted P90,000."
  }
},
{
  id: "subsequent",
  title: "Subsequent Measurement and Depreciation",
  blocks: [
    {t:"h", html:"The lease liability"},
    {t:"p", html:"Measured at <b>amortised cost using the effective interest method</b>. Each payment splits into <b>interest expense</b> - the opening liability multiplied by the discount rate - and a <b>reduction of the liability</b> for the remainder."},
    {t:"h", html:"The right-of-use asset"},
    {t:"p", html:"Measured under the <b>cost model</b>: cost less accumulated depreciation less accumulated impairment, adjusted for any remeasurement of the lease liability."},
    {t:"table",
      head:["Circumstance","Depreciate over"],
      rows:[
        ["Ownership transfers to the lessee by the end of the lease term, <b>or</b> a purchase option is reasonably certain to be exercised","The asset's <b>useful life</b>"],
        ["Otherwise","The <b>shorter</b> of the useful life and the lease term"]
      ]},
    {t:"note", html:"The logic is straightforward. If the lessee will still hold the asset after the lease ends, it consumes the whole useful life. If the asset goes back to the lessor, the lessee only consumes it for the lease term - and cannot depreciate over longer than the useful life in either case."},
    {t:"h", html:"Alternative models"},
    {t:"ul", items:[
      "<b>Fair value model</b> - where the entity applies the fair value model to investment property and the ROU asset meets the definition of investment property.",
      "<b>Revaluation model</b> - where the ROU asset relates to a class of PPE the entity carries under revaluation, it <b>may</b> elect to revalue the ROU assets relating to that class."
    ]},
    {t:"example", title:"Illustrative example 6 - the first two years", blocks:[
      {t:"p", html:"Continuing example 3: liability P360,480, annual payment P100,000 in arrears, rate 12%, lease term 5 years, useful life 8 years, no transfer of ownership and no purchase option."},
      {t:"table",
        head:["Year","Opening liability","Interest at 12%","Payment","Closing liability"],
        rows:[
          ["1","360,480","43,258","(100,000)","303,738"],
          ["2","303,738","36,449","(100,000)","240,187"]
        ]},
      {t:"p", html:"<b>Depreciation:</b> because the asset returns to the lessor, it is depreciated over the <b>shorter</b> of the 8-year useful life and the 5-year lease term - so <b>P360,480 / 5 = P72,096</b> a year."},
      {t:"table",
        head:["Total expense, year 1","Amount"],
        rows:[
          ["Interest expense","43,258"],
          ["Depreciation","72,096"],
          ["<b>Total</b>","<b>115,354</b>"]
        ]},
      {t:"p", html:"Compare year 2: interest falls to P36,449 while depreciation stays at P72,096, so the total falls to P108,545. The expense is <b>front-loaded</b> even though the cash paid is P100,000 every year."}
    ]}
  ],
  check:{
    q:"A ROU asset costs P600,000. The lease term is 4 years, the useful life 10 years, and ownership transfers to the lessee at the end of the term. Annual depreciation is:",
    choices:["P150,000","P60,000","P600,000","Nil"],
    answer:1,
    why:"Because ownership <b>transfers</b>, depreciation runs over the <b>useful life</b> of 10 years: P600,000 / 10 = <b>P60,000</b>. The shorter-of rule applies only where the asset returns to the lessor - there, the 4-year term would have given P150,000."
  }
},
{
  id: "remeasurement",
  title: "Remeasurement - and Which Discount Rate",
  blocks: [
    {t:"p", html:"After commencement, the lease liability is remeasured when specified events occur. The remeasurement adjusts the <b>ROU asset</b>, not profit or loss - <b>except</b> where the asset has already been reduced to zero, in which case any further reduction goes to profit or loss."},
    {t:"note", html:"<b>The examinable distinction is which discount rate to use, and it turns on what changed.</b>"},
    {t:"table",
      head:["Trigger","PFRS 16","Discount rate"],
      rows:[
        ["Change in the <b>lease term</b>","40(a)","<b>Revised</b> rate"],
        ["Change in the assessment of a <b>purchase option</b>","40(b)","<b>Revised</b> rate"],
        ["Change in the <b>amounts expected to be payable under a residual value guarantee</b>","42(a)","<b>Unchanged</b> rate"],
        ["Change in future payments from a change in an <b>index or rate</b>","42(b)","<b>Unchanged</b> rate"],
        ["Change in payments from a change in <b>floating interest rates</b>","43","<b>Revised</b> rate"]
      ]},
    {t:"p", html:"The <b>revised rate</b> is the rate implicit in the lease for the remainder of the term if readily determinable, otherwise the lessee's <b>incremental borrowing rate at the date of reassessment</b>."},
    {t:"note", html:"<b>The principle behind the split.</b> A change in the lease term or a purchase option changes <b>how long the financing runs</b>, so the price of that financing is re-priced too - revised rate. A change in an expected residual payment or an index changes only <b>the amount of the cash flows</b>, not the financing period, so the original rate is kept and only the numerator moves. Floating rates are the exception because there the <b>interest rate itself</b> is what changed."},
    {t:"example", title:"Illustrative example 7 - residual value guarantee revised", blocks:[
      {t:"p", html:"A lessee guaranteed a residual of P400,000 and originally expected the asset to be worth P400,000, so <b>nothing</b> was included in the liability. Three years into a five-year lease, the market has fallen and the lessee now expects the asset to be worth only P340,000. The original discount rate was 10%; the current incremental borrowing rate is 13%. Two years remain; PV of 1 for 2 periods at 10% = <b>0.8264</b>."},
      {t:"table",
        head:["","Amount"],
        rows:[
          ["Newly expected payment under the guarantee (400,000 - 340,000)","60,000"],
          ["Discounted at the <b>unchanged</b> 10% rate: 60,000 x 0.8264","<b>49,584</b>"]
        ]},
      {t:"table",
        head:["Journal entry","Debit","Credit"],
        rows:[["Right-of-use asset","49,584",""],["&nbsp;&nbsp;&nbsp;Lease liability","","49,584"]]},
      {t:"p", html:"The <b>13% current rate is not used</b>. Only the expected cash flow changed, not the financing period, so PFRS 16.43 requires the original rate. No gain or loss reaches profit or loss - the adjustment lands on the asset and unwinds through future depreciation and interest."}
    ]},
    {t:"example", title:"Illustrative example 8 - lease term extended", blocks:[
      {t:"p", html:"Three years into a five-year lease with annual payments of P500,000, the lessee becomes reasonably certain it will exercise an option to extend by a further 5 years at P600,000 a year. The revised rate at the date of reassessment is <b>8%</b>. The carrying amount of the liability immediately before remeasurement is <b>P1,050,000</b>. PV at 8% of the remaining 2 payments of P500,000 = P891,632; PV at 8% of 5 payments of P600,000 deferred 2 years = P2,054,000."},
      {t:"table",
        head:["","Amount"],
        rows:[
          ["Remeasured lease liability (891,632 + 2,054,000)","2,945,632"],
          ["Carrying amount before remeasurement","(1,050,000)"],
          ["<b>Increase - added to the right-of-use asset</b>","<b>1,895,632</b>"]
        ]},
      {t:"p", html:"Here the <b>revised</b> 8% rate is used, because the <b>lease term</b> changed. Note again that <b>no gain or loss</b> arises: the increase is capitalised into the ROU asset and depreciated over the new, longer term."}
    ]}
  ],
  check:{
    q:"The amount a lessee expects to pay under a residual value guarantee increases. Which discount rate is used to remeasure the lease liability?",
    choices:[
      "A revised rate, being the incremental borrowing rate at the date of reassessment.",
      "The unchanged original discount rate.",
      "The rate implicit in the lease for the remainder of the term.",
      "No remeasurement is required."
    ],
    answer:1,
    why:"PFRS 16.42(a) and 43: a change in amounts <b>expected to be payable under a residual value guarantee</b> is remeasured at the <b>unchanged</b> rate. Only the cash flows changed, not the financing period. A revised rate is used for a change in the <b>lease term</b> or in the assessment of a <b>purchase option</b> - or where <b>floating interest rates</b> move."
  }
},
{
  id: "modifications",
  title: "Lease Modifications",
  blocks: [
    {t:"p", html:"A <b>modification</b> is a change in the scope or the consideration for a lease that was <b>not part of the original terms</b>. Three treatments, and telling them apart is the examinable skill."},
    {t:"h", html:"1. Accounted for as a separate lease (PFRS 16.44)"},
    {t:"p", html:"Required where <b>both</b>:"},
    {t:"ol", items:[
      "The modification <b>increases the scope</b> by adding the right to use one or more <b>additional underlying assets</b>; <b>and</b>",
      "The consideration increases by an amount <b>commensurate with the stand-alone price</b> of that increase."
    ]},
    {t:"p", html:"The original lease is untouched, and the addition is accounted for as an entirely new lease."},
    {t:"h", html:"2. Not a separate lease, scope decreased (PFRS 16.46(a))"},
    {t:"p", html:"The lessee <b>decreases the carrying amount of the ROU asset</b> to reflect the partial or full termination, and recognises a <b>gain or loss</b> in profit or loss for the difference."},
    {t:"h", html:"3. Not a separate lease, any other modification (PFRS 16.46(b))"},
    {t:"p", html:"The remeasurement is a <b>corresponding adjustment to the ROU asset</b> - no gain or loss."},
    {t:"note", html:"<b>The one place a gain or loss appears.</b> Of everything in this chapter, only a modification that <b>decreases scope</b> produces a gain or loss on remeasurement. Extensions, rent reductions, added assets at market price - all are absorbed into the ROU asset. If your answer shows a gain and the scope did not fall, check it. All modifications not accounted for as a separate lease use a <b>revised</b> discount rate."},
    {t:"example", title:"Illustrative example 9 - decrease in scope", blocks:[
      {t:"p", html:"An entity leases 5,000 square metres of office space for 10 years. At the start of year 6 it and the lessor agree to reduce the space to <b>3,000 square metres</b> - a retained proportion of <b>60%</b>. Immediately before the modification the lease liability is <b>P3,000,000</b>, the ROU asset is at cost <b>P5,000,000</b> with accumulated depreciation of <b>P2,500,000</b>. The remeasured liability for the retained 60% at the revised rate is <b>P1,740,000</b>."},
      {t:"table",
        head:["","Total (100%)","Retained (60%)","Terminated (40%)"],
        rows:[
          ["Lease liability","3,000,000","1,800,000","1,200,000"],
          ["ROU asset at cost","5,000,000","3,000,000","2,000,000"],
          ["Accumulated depreciation","(2,500,000)","(1,500,000)","(1,000,000)"],
          ["Carrying amount of ROU asset","2,500,000","1,500,000","1,000,000"]
        ]},
      {t:"p", html:"<b>Step 1 - remove the terminated portion.</b> Liability removed P1,200,000; ROU carrying amount removed P1,000,000."},
      {t:"table",
        head:["","Debit","Credit"],
        rows:[
          ["Lease liability","1,200,000",""],
          ["Accumulated depreciation","1,000,000",""],
          ["&nbsp;&nbsp;&nbsp;Right-of-use asset","","2,000,000"],
          ["&nbsp;&nbsp;&nbsp;Gain on lease modification","","200,000"]
        ]},
      {t:"p", html:"The <b>gain of P200,000</b> is the terminated liability of P1,200,000 less the terminated ROU carrying amount of P1,000,000."},
      {t:"p", html:"<b>Step 2 - remeasure the retained portion.</b> The retained liability of P1,800,000 becomes P1,740,000, a decrease of P60,000, taken to the <b>ROU asset</b>:"},
      {t:"table",
        head:["","Debit","Credit"],
        rows:[["Lease liability","60,000",""],["&nbsp;&nbsp;&nbsp;Right-of-use asset","","60,000"]]},
      {t:"p", html:"Note the two steps produce different accounting: step 1 gives a <b>gain</b> because scope fell; step 2 is a plain <b>adjustment to the asset</b>."}
    ]}
  ],
  check:{
    q:"A lessee reduces its leased floor space by 40%. The terminated portion of the lease liability is P1,200,000 and the terminated portion of the ROU asset's carrying amount is P1,000,000. What does the lessee recognise?",
    choices:[
      "No gain or loss - the difference adjusts the ROU asset.",
      "A gain of P200,000 in profit or loss.",
      "A loss of P200,000 in profit or loss.",
      "A gain of P1,200,000 in profit or loss."
    ],
    answer:1,
    why:"A modification that <b>decreases scope</b> is the one case producing a gain or loss: the liability removed (P1,200,000) exceeds the asset removed (P1,000,000), so a <b>gain of P200,000</b> arises. Any remaining remeasurement of the retained portion is an adjustment to the ROU asset, not a further gain."
  }
},
{
  id: "end-and-presentation",
  title: "End of Lease, and Presentation",
  blocks: [
    {t:"h", html:"Where the asset returns to the lessor"},
    {t:"p", html:"By the end of the term the ROU asset is fully depreciated and the liability reduced to the amount, if any, expected to be paid under a residual value guarantee. The asset and accumulated depreciation are derecognised. Where the actual shortfall <b>differs from the expectation</b>, the difference has already been picked up through the remeasurement in the final period."},
    {t:"h", html:"Where a purchase option is exercised"},
    {t:"p", html:"The remaining liability equals the option price; the payment settles it, and the ROU asset is reclassified into the appropriate class of property, plant and equipment."},
    {t:"h", html:"Presentation (TOS H.1.1.3)"},
    {t:"ul", items:[
      "The <b>right-of-use asset</b> is presented either as a <b>separate line item</b> in the statement of financial position, or within the same line as the corresponding owned asset with disclosure of which line it sits in. It is <b>non-current</b>.",
      "The <b>lease liability</b> is presented separately from other liabilities, split between its <b>current and non-current</b> portions."
    ]},
    {t:"h", html:"In profit or loss"},
    {t:"p", html:"The lessee reports <b>two</b> expenses rather than one rent expense: <b>depreciation</b> of the ROU asset and <b>interest</b> on the lease liability, the latter presented as a <b>finance cost</b>."},
    {t:"note", html:"<b>The presentation consequence examiners test.</b> Depreciation is straight-line while interest is charged on a <b>declining</b> liability, so total expense is <b>higher in early years and lower in later ones</b> even where the cash rentals are level. Over the whole term the total is the same as under the old operating-lease treatment; only its distribution changes. In the <b>statement of cash flows</b>, the principal portion is a <b>financing</b> outflow and interest follows the entity's policy for interest paid."}
  ],
  check:{
    q:"How does the lessee model change the pattern of expense compared with straight-line rent, and why?",
    choices:[
      "It is unchanged, because total cash paid is the same.",
      "Expense is front-loaded, because straight-line depreciation combines with interest on a declining liability.",
      "Expense is back-loaded, because depreciation rises over time.",
      "All expense is recognised at commencement."
    ],
    answer:1,
    why:"Depreciation is level but interest is highest at the start and falls as the liability amortises, so their sum is <b>front-loaded</b>. The total over the full term is unchanged - only its distribution across periods differs, which is what makes the pattern examinable."
  }
},
/* ---------------- comprehensive running case ---------------- */
{
  id: "case-1-initial",
  title: "Comprehensive Case, Stage 1 - Initial Measurement",
  blocks: [
    {t:"p", html:"The examples so far each isolated one idea. A CPALE problem does not: it gives one fact pattern and asks five or six requirements running from commencement to the end of the lease. The next three parts work a single lease all the way through."},
    {t:"note", html:"<b>Pampanga Logistics Corporation - the facts, used in Stages 1 to 3.</b><br><br>On <b>1 January 2030</b> Pampanga leases a warehouse.<br>&bull; Lease term <b>5 years</b>; annual payments of <b>P800,000</b> at the <b>end</b> of each year.<br>&bull; Interest rate implicit in the lease <b>10%</b>.<br>&bull; Pampanga pays a <b>lease bonus of P100,000</b> at commencement and receives a <b>lease incentive of P40,000</b>.<br>&bull; <b>Initial direct costs</b> of P60,000.<br>&bull; Pampanga must restore the site at the end of the lease; the present value of that obligation is <b>P50,000</b>.<br>&bull; Pampanga <b>guarantees a residual value of P200,000</b>. At commencement it expects the warehouse to be worth <b>P200,000</b> at the end of the term.<br>&bull; Annual property taxes of <b>P30,000</b> are payable by Pampanga.<br>&bull; Useful life <b>8 years</b>; no transfer of ownership and no purchase option.<br>&bull; PV of an ordinary annuity of 1, 5 periods at 10% = <b>3.7908</b>. PV of 1, 5 periods at 10% = <b>0.6209</b>. PV of 1, 2 periods at 10% = <b>0.8264</b>."},
    {t:"example", title:"Stage 1 - the lease liability", blocks:[
      {t:"table",
        head:["Component","Computation","Amount"],
        rows:[
          ["Fixed annual payments","800,000 x 3.7908","3,032,640"],
          ["Residual value guarantee - amount <b>expected to be payable</b>","200,000 guaranteed, 200,000 expected value, so <b>nil</b>","-"],
          ["<b>Lease liability</b>","","<b>3,032,640</b>"]
        ]},
      {t:"p", html:"The guarantee contributes <b>nothing</b> at commencement, because Pampanga expects no shortfall. Under the superseded IAS 17 the full P200,000 would have been discounted in, adding P124,180."}
    ]},
    {t:"example", title:"Stage 1 - the right-of-use asset and the entry", blocks:[
      {t:"table",
        head:["Component","Amount"],
        rows:[
          ["Initial lease liability","3,032,640"],
          ["Add: lease bonus paid at commencement","100,000"],
          ["Less: lease incentive received","(40,000)"],
          ["Add: initial direct costs","60,000"],
          ["Add: PV of the restoration obligation","50,000"],
          ["<b>Cost of the right-of-use asset</b>","<b>3,202,640</b>"]
        ]},
      {t:"table",
        head:["1 January 2030","Debit","Credit"],
        rows:[
          ["Right-of-use asset","3,202,640",""],
          ["&nbsp;&nbsp;&nbsp;Lease liability","","3,032,640"],
          ["&nbsp;&nbsp;&nbsp;Provision for restoration","","50,000"],
          ["&nbsp;&nbsp;&nbsp;Cash (100,000 - 40,000 + 60,000)","","120,000"]
        ]},
      {t:"p", html:"The <b>P30,000 property taxes</b> appear nowhere in this entry. They are an <b>executory cost</b>, expensed each year as incurred."}
    ]}
  ],
  check:{
    q:"In the Pampanga case, why does the P200,000 residual value guarantee add nothing to the lease liability at commencement?",
    choices:[
      "Because residual value guarantees are never included in a lessee's lease liability.",
      "Because the expected value of the asset equals the guarantee, so no amount is expected to be payable.",
      "Because the guarantee is unguaranteed until the end of the lease.",
      "Because the amount is immaterial."
    ],
    answer:1,
    why:"PFRS 16.27(c) includes only the amount <b>expected to be payable</b>. Pampanga expects the warehouse to be worth exactly the P200,000 it guaranteed, so it expects to pay <b>nothing</b> and includes nothing. Note this is a matter of <i>current expectation</i> - Stage 2 shows what happens when that expectation changes."
  }
},
{
  id: "case-2-subsequent",
  title: "Comprehensive Case, Stage 2 - Subsequent Measurement",
  blocks: [
    {t:"p", html:"Same facts. Depreciation runs over the <b>shorter</b> of the 8-year useful life and the 5-year lease term, because the warehouse returns to the lessor: <b>P3,202,640 / 5 = P640,528</b> a year."},
    {t:"example", title:"Stage 2a - the amortisation table, years 1 to 3", blocks:[
      {t:"table",
        head:["Year","Opening liability","Interest at 10%","Payment","Closing liability"],
        rows:[
          ["2030","3,032,640","303,264","(800,000)","2,535,904"],
          ["2031","2,535,904","253,590","(800,000)","1,989,494"],
          ["2032","1,989,494","198,949","(800,000)","1,388,444"]
        ]},
      {t:"p", html:"Depreciation is a flat P640,528 in each of those years, so the ROU asset stands at P3,202,640 - P1,921,584 = <b>P1,281,056</b> at 31 December 2032."}
    ]},
    {t:"example", title:"Stage 2b - the expectation changes", blocks:[
      {t:"p", html:"<b>At 31 December 2032</b> the property market has fallen. Pampanga now expects the warehouse to be worth only <b>P140,000</b> at the end of the lease, against its P200,000 guarantee. Its incremental borrowing rate is now 13%."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Amount now expected to be payable","200,000 - 140,000","60,000"],
          ["Periods remaining","","2"],
          ["Discount rate","<b>Unchanged 10%</b> - PFRS 16.42(a) and 43","10%"],
          ["<b>Increase in the lease liability</b>","60,000 x 0.8264","<b>49,584</b>"]
        ]},
      {t:"table",
        head:["31 December 2032","Debit","Credit"],
        rows:[["Right-of-use asset","49,584",""],["&nbsp;&nbsp;&nbsp;Lease liability","","49,584"]]},
      {t:"p", html:"The <b>13% current rate is not used</b>. Only the expected cash flow changed, not the financing period, so the original rate stands. And <b>no gain or loss</b> reaches profit or loss - the adjustment lands on the asset."},
      {t:"table",
        head:["After remeasurement, 31 December 2032","Amount"],
        rows:[
          ["Lease liability (1,388,444 + 49,584)","1,438,028"],
          ["ROU asset carrying amount (1,281,056 + 49,584)","1,330,640"],
          ["Remaining useful period","2 years"],
          ["<b>Revised annual depreciation</b>","<b>665,320</b>"]
        ]}
    ]},
    {t:"example", title:"Stage 2c - years 4 and 5", blocks:[
      {t:"table",
        head:["Year","Opening liability","Interest at 10%","Payment","Closing liability"],
        rows:[
          ["2033","1,438,028","143,803","(800,000)","781,831"],
          ["2034","781,831","78,183","(800,000)","<b>60,014</b>"]
        ]},
      {t:"note", html:"<b>The check that proves the case.</b> The liability lands at <b>P60,014</b> - the P60,000 Pampanga expects to pay under the guarantee, plus P14 of rounding. It <i>had</i> to: the remeasurement put in the present value of exactly that amount, and five years of unwinding brings it back to face value."}
    ]}
  ],
  check:{
    q:"At 31 December 2032 Pampanga's expected payment under the guarantee rises to P60,000 and its current borrowing rate is 13%. What rate does it use to remeasure, and where does the adjustment go?",
    choices:[
      "13%, with the adjustment to profit or loss.",
      "13%, with the adjustment to the right-of-use asset.",
      "The unchanged 10%, with the adjustment to the right-of-use asset.",
      "The unchanged 10%, with the adjustment to profit or loss."
    ],
    answer:2,
    why:"A change in the amount expected to be payable under a residual value guarantee is a PFRS 16.42(a) trigger, remeasured at the <b>unchanged</b> rate - only the cash flows changed, not the financing period. The adjustment is added to the <b>ROU asset</b> and works through profit or loss later, as higher depreciation over the remaining two years."
  }
},
{
  id: "case-3-presentation",
  title: "Comprehensive Case, Stage 3 - Presentation and Derecognition",
  blocks: [
    {t:"example", title:"Stage 3a - presentation at 31 December 2030", blocks:[
      {t:"table",
        head:["Statement of financial position","Amount"],
        rows:[
          ["<b>Non-current assets</b>",""],
          ["Right-of-use asset (3,202,640 - 640,528)","2,562,112"],
          ["<b>Current liabilities</b>",""],
          ["Lease liability - current portion","546,410"],
          ["<b>Non-current liabilities</b>",""],
          ["Lease liability - non-current portion","1,989,494"],
          ["Provision for restoration","50,000"]
        ]},
      {t:"p", html:"The <b>current portion</b> is the principal falling due within twelve months: the 2031 payment of P800,000 less the P253,590 of it that is interest = <b>P546,410</b>. The non-current portion is the remainder, P2,535,904 - P546,410 = P1,989,494 - which is also, as a check, the closing liability one year later."},
      {t:"table",
        head:["Profit or loss, 2030","Amount"],
        rows:[
          ["Depreciation of the right-of-use asset","640,528"],
          ["Finance cost - interest on the lease liability","303,264"],
          ["Property taxes (executory, expensed separately)","30,000"],
          ["<b>Total charged to profit or loss</b>","<b>973,792</b>"]
        ]},
      {t:"table",
        head:["Statement of cash flows, 2030","Classification","Amount"],
        rows:[
          ["Principal portion of lease payments (800,000 - 303,264)","<b>Financing</b>","496,736"],
          ["Interest paid","Operating or financing, per policy","303,264"],
          ["Property taxes","Operating","30,000"]
        ]}
    ]},
    {t:"example", title:"Stage 3b - derecognition at 31 December 2034", blocks:[
      {t:"p", html:"The lease ends. The warehouse is returned, and its actual fair value proves to be <b>P130,000</b> - worse even than the P140,000 Pampanga expected in 2032."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Guaranteed residual value","","200,000"],
          ["Actual fair value on return","","(130,000)"],
          ["<b>Cash payable under the guarantee</b>","","<b>70,000</b>"],
          ["Lease liability carried forward","","(60,014)"],
          ["<b>Additional loss</b>","70,000 - 60,014","<b>9,986</b>"]
        ]},
      {t:"table",
        head:["31 December 2034 - settle the guarantee","Debit","Credit"],
        rows:[
          ["Lease liability","60,014",""],
          ["Loss on residual value guarantee","9,986",""],
          ["&nbsp;&nbsp;&nbsp;Cash","","70,000"]
        ]},
      {t:"table",
        head:["31 December 2034 - derecognise the asset","Debit","Credit"],
        rows:[
          ["Accumulated depreciation","3,252,224",""],
          ["&nbsp;&nbsp;&nbsp;Right-of-use asset","","3,252,224"]
        ]},
      {t:"note", html:"<b>Everything closes.</b> Total depreciation is P640,528 x 3 + P665,320 x 2 = <b>P3,252,224</b>, exactly the original cost of P3,202,640 plus the P49,584 remeasurement. The ROU asset and its accumulated depreciation cancel to nil, and the lease liability is extinguished by the P70,000 payment. The only figure that could not be anticipated is the final P9,986, because the asset fell further than expected between the 2032 reassessment and the end of the lease."},
      {t:"p", html:"The restoration provision is settled separately under PAS 37 as the site work is carried out; it never formed part of the lease liability."}
    ]},
    {t:"h", html:"Reading the case as a whole"},
    {t:"table",
      head:["Stage","The question being answered","The governing idea"],
      rows:[
        ["<b>Initial</b>","What do I recognise, and at how much?","Lease payments <b>expected to be paid</b>, discounted at the implicit rate; the asset picks up the liability plus everything else the lessee spent to get the right"],
        ["<b>Subsequent</b>","How do the two balances move?","Effective interest on the liability; straight-line depreciation on the asset; <b>remeasurement when expectations change</b>, adjusting the asset not profit"],
        ["<b>Presentation</b>","Where does it appear?","ROU asset non-current; liability split current/non-current; <b>two expenses</b>, not rent; principal is a financing cash flow"],
        ["<b>Derecognition</b>","What is left, and what settles it?","The liability should equal the expected residual payment; any difference from the <b>actual</b> shortfall is a final gain or loss"]
      ]}
  ],
  check:{
    q:"At the end of the Pampanga lease the warehouse is worth P130,000 against a P200,000 guarantee, and the lease liability stands at P60,014. What does Pampanga recognise?",
    choices:[
      "Cash payment of P70,000 and an additional loss of P9,986.",
      "Cash payment of P200,000 and a loss of P139,986.",
      "Cash payment of P60,014 and no loss.",
      "No payment - the guarantee lapses on return of the asset."
    ],
    answer:0,
    why:"The shortfall actually payable is P200,000 - P130,000 = <b>P70,000</b>. The liability already carries P60,014, being the P60,000 expected at the 2032 reassessment plus unwinding. The extra <b>P9,986</b> is a loss, arising because the asset fell further than expected after that reassessment."
  }
}
],

flashcards: [
  {f:"Define a lease.", b:"A contract, or part of a contract, that conveys the <b>right to use an underlying asset for a period of time in exchange for consideration</b>."},
  {f:"Does a lessee classify leases as finance or operating?", b:"<b>No.</b> The lessee applies a <b>single model</b> - ROU asset and lease liability - subject to two exemptions. Classification survives only for the <b>lessor</b>."},
  {f:"State the two lessee exemptions.", b:"<b>Short-term</b> - term of 12 months or less at commencement <b>and no purchase option</b>. <b>Low-value</b> - the underlying asset is of low value <b>when new</b>."},
  {f:"How are the two exemption elections made?", b:"The <b>short-term</b> election is made <b>by class of underlying asset</b>; the <b>low-value</b> election is made <b>lease by lease</b>."},
  {f:"List the five components of lease payments under PFRS 16.27.", b:"(a) <b>Fixed payments</b> less incentives receivable; (b) <b>variable payments depending on an index or rate</b>; (c) <b>amounts expected to be payable under residual value guarantees</b>; (d) the <b>exercise price of a purchase option</b> if reasonably certain; (e) <b>termination penalties</b> if the term reflects termination."},
  {f:"How much of a residual value guarantee enters the LESSEE's lease liability?", b:"Only the <b>amount expected to be payable</b> - the expected shortfall. Guarantee P500,000 with an expected value of P460,000 means <b>P40,000</b> discounted in. Nothing at all if no shortfall is expected."},
  {f:"How did IAS 17 differ on residual value guarantees, and why does it matter?", b:"IAS 17 included the <b>full guaranteed amount</b> in minimum lease payments. Many Philippine reviewers still carry that wording, so an answer computed the old way is <b>materially too large</b>."},
  {f:"Are variable payments based on sales or usage capitalised?", b:"<b>No.</b> Only variables depending on an <b>index or a rate</b> are capitalised. Payments varying with <b>use or sales</b> are excluded and <b>expensed as incurred</b>."},
  {f:"Is an unguaranteed residual value in the lessee's liability?", b:"<b>Never.</b> The lessee has promised nothing in respect of it. The <b>lessor</b>, by contrast, includes it in gross and net investment."},
  {f:"Which discount rate does a lessee use, and what is the fallback?", b:"The <b>interest rate implicit in the lease</b>; where it cannot be readily determined, the lessee's <b>incremental borrowing rate</b>. Given both, use the implicit rate."},
  {f:"Why can a lessee often not determine the implicit rate?", b:"It is the <b>lessor's</b> rate of return, and computing it requires the lessor's estimate of the <b>unguaranteed residual value</b>, which the lessee usually does not know."},
  {f:"List the four components of the cost of the right-of-use asset.", b:"(1) The <b>initial lease liability</b>; (2) <b>payments made at or before commencement</b> less incentives received; (3) <b>initial direct costs</b>; (4) the <b>present value</b> of dismantling and restoration obligations."},
  {f:"How are executory costs and leasehold improvements treated?", b:"<b>Executory costs</b> - maintenance, insurance, taxes - are <b>expensed as incurred</b>. <b>Leasehold improvements</b> are a <b>separate asset</b>, depreciated over the shorter of useful life and lease term."},
  {f:"Over what period is the right-of-use asset depreciated?", b:"The asset's <b>useful life</b> where ownership transfers or a purchase option is reasonably certain; otherwise the <b>shorter</b> of useful life and lease term."},
  {f:"Which remeasurement triggers use a REVISED discount rate?", b:"A change in the <b>lease term</b> (40a) and a change in the assessment of a <b>purchase option</b> (40b) - plus a change in <b>floating interest rates</b> (43). All modifications not treated as a separate lease also use a revised rate."},
  {f:"Which remeasurement triggers use the UNCHANGED discount rate?", b:"A change in <b>amounts expected to be payable under a residual value guarantee</b> (42a) and a change in future payments from an <b>index or rate</b> (42b). Only the cash flows changed, not the financing period."},
  {f:"Where does a remeasurement adjustment go?", b:"To the <b>right-of-use asset</b> - <b>not</b> profit or loss - except where the asset is already reduced to zero, when any further reduction goes to profit or loss."},
  {f:"When is a modification accounted for as a SEPARATE lease?", b:"When <b>both</b>: it <b>increases scope</b> by adding one or more <b>additional underlying assets</b>; <b>and</b> consideration increases <b>commensurately with the stand-alone price</b>."},
  {f:"Which modification produces a gain or loss, and how is it computed?", b:"Only a modification that <b>decreases scope</b>. The gain or loss is the <b>terminated portion of the lease liability less the terminated portion of the ROU asset's carrying amount</b>."},
  {f:"How is the right-of-use asset presented?", b:"As a <b>separate non-current line item</b>, or within the same line as the corresponding owned asset with disclosure of which line. The lease liability is shown separately and <b>split current/non-current</b>."},
  {f:"What two expenses does a lessee report, and what pattern do they produce?", b:"<b>Depreciation</b> of the ROU asset and <b>interest</b> (a finance cost) on the liability. Level depreciation plus declining interest makes total expense <b>front-loaded</b>, though the total over the term is unchanged."},
  {f:"How do lease cash flows appear in the statement of cash flows?", b:"The <b>principal</b> portion is a <b>financing</b> outflow; <b>interest</b> follows the entity's policy for interest paid. Short-term, low-value and variable payments are <b>operating</b>."}
],

quiz: [
  {q:"A lessee guarantees a residual value of P600,000 and expects the asset to be worth P540,000 at the end of the lease. What enters the lease liability in respect of the guarantee?",
   c:["The PV of P600,000","The PV of P540,000","The PV of P60,000","Nothing"],
   a:2, why:"PFRS 16.27(c) includes only amounts EXPECTED TO BE PAYABLE - the expected shortfall of P60,000, discounted. Capitalising the full P600,000 is the superseded IAS 17 treatment still printed in older reviewers.", tos:"H.1.1.1 Lease payments"},

  {q:"A lessee guarantees a residual of P400,000 and expects the asset to be worth P450,000. What enters the lease liability?",
   c:["The PV of P400,000","The PV of P50,000","Nothing","The PV of P450,000"],
   a:2, why:"No shortfall is expected, so no amount is expected to be payable under the guarantee and NOTHING is included. Under IAS 17 the full P400,000 would have been capitalised - which is why the two approaches give very different answers.", tos:"H.1.1.1 Lease payments"},

  {q:"Which payment is EXCLUDED from the lessee's lease liability?",
   c:["Fixed payments less incentives receivable","Variable payments linked to the consumer price index","Variable payments of 2% of the lessee's sales","A purchase option price the lessee is reasonably certain to exercise"],
   a:2, why:"Variable payments depending on USE OR SALES are excluded and expensed as incurred. Only variables depending on an INDEX OR RATE are capitalised - the CPI-linked payment is included at the commencement-date index.", tos:"H.1.1.1 Lease payments"},

  {q:"An 8-month lease of equipment contains an option to purchase the asset at the end of the term. Is the short-term exemption available?",
   c:["Yes - the term is 12 months or less","No - a lease containing a purchase option cannot be a short-term lease","Yes, but only if the option is not reasonably certain","Only if the asset is also of low value"],
   a:1, why:"The short-term definition excludes any lease that contains a purchase option, however brief the term. The presence of the option, not its likelihood, is what disqualifies it.", tos:"H.1.2 Exemptions"},

  {q:"A lease provides annual payments of P100,000 for 5 years in arrears; implicit rate 12% (factor 3.6048); incremental borrowing rate 15% (factor 3.3522). The lease liability is:",
   c:["P335,220","P360,480","P403,730","P500,000"],
   a:1, why:"Use the implicit rate whenever readily determinable: P100,000 x 3.6048 = P360,480. The incremental borrowing rate is only a fallback. P403,730 would apply if payments were made in advance.", tos:"H.1.1.1 Discount rate"},

  {q:"Using those facts, interest expense for year 1 is:",
   c:["P43,258","P56,742","P72,096","P100,000"],
   a:0, why:"P360,480 x 12% = P43,258; the remaining P56,742 of the payment reduces the liability. P72,096 is the annual depreciation - a different figure.", tos:"H.1.1.2 Subsequent measurement"},

  {q:"Payments of P100,000 for 5 years are made IN ADVANCE at an implicit rate of 12% (annuity-due factor 4.0373). Interest expense for year 1 is:",
   c:["P48,448","P36,448","P43,258","Nil"],
   a:1, why:"The liability is P403,730, but the first P100,000 is paid at commencement and attracts no interest. Interest runs on P303,730 x 12% = P36,448.", tos:"H.1.1.1 Discount rate"},

  {q:"A lessee's liability is P1,000,000. It pays a P80,000 bonus, receives P30,000 of incentives, incurs P40,000 of initial direct costs, pays P25,000 of insurance, and has a restoration obligation of P70,000 undiscounted / P45,000 in present value. The ROU asset cost is:",
   c:["P1,090,000","P1,135,000","P1,160,000","P1,185,000"],
   a:1, why:"1,000,000 + 80,000 - 30,000 + 40,000 + 45,000 (PV of restoration) = P1,135,000. Insurance is executory and expensed; the restoration cost enters at PRESENT VALUE, not the undiscounted P70,000.", tos:"H.1.1.1 ROU asset"},

  {q:"A ROU asset costs P800,000; lease term 5 years; useful life 12 years; the lessee is reasonably certain to exercise a purchase option. Annual depreciation is:",
   c:["P160,000","P66,667","P800,000","Nil"],
   a:1, why:"A purchase option reasonably certain to be exercised means the lessee will own the asset, so depreciation runs over the 12-year USEFUL LIFE: P66,667. The shorter-of rule applies only where the asset returns to the lessor.", tos:"H.1.1.2 Depreciation"},

  {q:"The amount expected to be payable under a residual value guarantee increases. The lessee remeasures using:",
   c:["A revised discount rate","The unchanged original discount rate","The rate implicit for the remainder of the term","The average of the original and current rates"],
   a:1, why:"PFRS 16.42(a)/43 require the UNCHANGED rate, because only the cash flows changed, not the financing period. A revised rate is used for a change in lease term, in the assessment of a purchase option, or in floating rates.", tos:"H.1.1.2 Remeasurement"},

  {q:"A lessee becomes reasonably certain it will exercise an option to extend the lease. It remeasures using:",
   c:["The unchanged original rate","A revised discount rate","No remeasurement is required","The lessor's implicit rate at commencement"],
   a:1, why:"A change in the LEASE TERM is a paragraph 40(a) trigger, requiring a REVISED rate - the implicit rate for the remainder if determinable, otherwise the incremental borrowing rate at the reassessment date. The financing period itself has changed.", tos:"H.1.1.2 Remeasurement"},

  {q:"A remeasurement increases the lease liability by P400,000. The lessee:",
   c:["Recognises a P400,000 loss","Adds P400,000 to the right-of-use asset","Recognises P400,000 in other comprehensive income","Treats it as a separate lease"],
   a:1, why:"Remeasurement adjusts the ROU asset, with no immediate effect on profit or loss - except where the asset has already been reduced to zero. A gain or loss arises only on a modification that DECREASES SCOPE.", tos:"H.1.1.2 Remeasurement"},

  {q:"Which condition is NOT required for a modification to be a separate lease?",
   c:["It increases the scope by adding an additional underlying asset","The consideration increases commensurately with the stand-alone price","The lessor consents to the change","Both stated conditions are met"],
   a:2, why:"PFRS 16.44 requires an additional underlying asset AND a commensurate, stand-alone-price increase. Lessor consent is inherent in any modification and is not one of the two tests.", tos:"H.1.1.2 Modifications"},

  {q:"On a modification decreasing scope, the terminated liability is P900,000 and the terminated ROU carrying amount is P1,050,000. The lessee recognises:",
   c:["A gain of P150,000","A loss of P150,000","No gain or loss","A loss of P900,000"],
   a:1, why:"The asset removed exceeds the liability removed, so a LOSS of P150,000 arises. Had the liability been larger, it would have been a gain. This is the only remeasurement in the chapter that touches profit or loss.", tos:"H.1.1.2 Modifications"},

  {q:"In the statement of cash flows, the principal portion of lease payments is presented as:",
   c:["An operating outflow","An investing outflow","A financing outflow","A non-cash item"],
   a:2, why:"Principal repayments are FINANCING outflows; interest follows the entity's policy for interest paid. Payments for short-term, low-value and variable leases stay in operating.", tos:"H.1.1.3 Presentation"},

  {q:"Compared with straight-line rent, the lessee model makes total expense:",
   c:["Unchanged in every period","Higher in early years and lower in later years","Lower in early years and higher in later years","Recognised entirely at commencement"],
   a:1, why:"Straight-line depreciation plus interest on a declining liability is front-loaded. The total over the whole term is the same; only its distribution across periods changes.", tos:"H.1.1.3 Presentation"}
]
});

/* ==================================================================
   2. LESSOR ACCOUNTING
   ================================================================== */
FARHub.addChapter({
  id: "h1b-lessor",
  code: "H.1.3",
  group: LEASE_GROUP,
  title: "Lessor Accounting",
  blurb: "The lessor still classifies - and unlike the lessee, it counts the whole residual value guarantee and the unguaranteed residual too.",
  minutes: 70,
  outcomes: [
    "Classify a lease as finance or operating from the lessor's perspective.",
    "Account for an operating lease, including lease bonuses and initial direct costs.",
    "Compute gross and net investment in a finance lease.",
    "Distinguish a direct financing lease from a sales-type lease and compute the amounts each produces.",
    "Account for residual value outcomes at the end of the lease."
  ],

  sections: [
{
  id: "classification",
  title: "Classification - the Lessor Still Classifies",
  blocks: [
    {t:"p", html:"PFRS 16 left <b>lessor accounting substantially unchanged</b> from IAS 17. The lessor still asks whether the lease <b>transfers substantially all the risks and rewards incidental to ownership</b>."},
    {t:"ul", items:[
      "<b>Finance lease</b> - it does.",
      "<b>Operating lease</b> - it does not."
    ]},
    {t:"h", html:"The indicators - any ONE may suffice"},
    {t:"ol", items:[
      "<b>Ownership transfers</b> to the lessee by the end of the lease term.",
      "The lessee has a <b>bargain purchase option</b> - an option at a price sufficiently below fair value that exercise is reasonably certain at inception.",
      "The <b>lease term is for the major part</b> of the asset's remaining economic life.",
      "The present value of the lease payments amounts to <b>substantially all of the fair value</b> of the asset.",
      "The asset is of such a <b>specialised nature</b> that only the lessee can use it without major modification."
    ]},
    {t:"p", html:"Three further indicators may individually or in combination point to a finance lease: the lessee bears the lessor's losses on <b>cancellation</b>; gains or losses from movements in the <b>residual value</b> fall to the lessee; and the lessee can <b>continue the lease for a secondary period at substantially below market rent</b>."},
    {t:"note", html:"<b>The bright lines are US GAAP, not PFRS.</b> Under US GAAP 'major part' is <b>75%</b> of economic life and 'substantially all' is <b>90%</b> of fair value. <b>PFRS deliberately gives no numerical thresholds</b> - the assessment is one of substance. Philippine examiners use the 75% and 90% figures in computational problems, but a theory question asking whether PFRS prescribes a threshold must be answered <b>no</b>."},
    {t:"p", html:"Classification is made at <b>inception</b> and is <b>not revisited</b> unless there is a lease modification. A change in estimate or in circumstances does not trigger reclassification."}
  ],
  check:{
    q:"A lease term covers 70% of the asset's economic life and the PV of lease payments is 85% of fair value. No other indicator applies. Under PFRS, is it a finance lease?",
    choices:[
      "No - it fails both the 75% and 90% thresholds.",
      "It requires judgment: PFRS sets no numerical thresholds, so the substance of the arrangement governs.",
      "Yes - partial satisfaction of either test is sufficient.",
      "No - all five indicators must be met."
    ],
    answer:1,
    why:"The 75% and 90% figures come from <b>US GAAP</b>. PFRS asks only whether substantially all the risks and rewards have transferred, which is a matter of judgment on all the facts. Note too that only <b>one</b> indicator need apply - requiring all five is wrong under any framework."
  }
},
{
  id: "operating",
  title: "The Operating Lease",
  blocks: [
    {t:"p", html:"The lessor <b>keeps the asset on its own books</b> and continues to depreciate it under its normal policy for that class of asset."},
    {t:"p", html:"Lease payments are recognised as <b>income on a straight-line basis</b> over the lease term, unless another systematic basis is more representative of the pattern in which benefit from the asset is diminished."},
    {t:"note", html:"<b>Straight-line means the total consideration is spread evenly, whatever the payment schedule.</b> A rent-free period, a stepped rental or a lump-sum bonus changes the <b>cash</b>, never the annual <b>income</b>. Almost every operating lease problem lives here."},
    {t:"table",
      head:["Item","Lessor's treatment"],
      rows:[
        ["<b>Initial direct costs</b>","<b>Added to the carrying amount</b> of the underlying asset and recognised as an expense over the lease term, on the same basis as lease income"],
        ["<b>Lease bonus received</b>","<b>Unearned rent income</b>, amortised to income over the lease term"],
        ["<b>Refundable security deposit</b>","A <b>liability</b>"],
        ["<b>Non-refundable deposit</b>","<b>Unearned rent income</b>, amortised over the term"],
        ["<b>Executory costs</b> - depreciation, taxes, insurance, maintenance","<b>Expensed as incurred</b>"]
      ]},
    {t:"example", title:"Illustrative example 1 - a rent-free period", blocks:[
      {t:"p", html:"A lessor leases equipment for <b>12 months from 1 June 2030</b> at <b>P10,000</b> a month, giving the first <b>3 months rent free</b>."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Total consideration","9 paying months x 10,000","90,000"],
          ["Monthly income, straight-line","90,000 / 12","7,500"],
          ["Income for 2030 - June to December","7 x 7,500","<b>52,500</b>"],
          ["Income for 2031 - January to May","5 x 7,500","37,500"]
        ]},
      {t:"p", html:"In 2030 the lessor <b>received</b> only P40,000 in cash (4 paying months, September to December) but <b>recognises</b> P52,500 of income. The P12,500 difference sits as a <b>rent receivable</b>."}
    ]},
    {t:"example", title:"Illustrative example 2 - a full operating lease", blocks:[
      {t:"p", html:"On 1 January 2030 a lessor buys equipment for <b>P160,000</b> to lease out. Useful life 5 years, residual value P10,000, straight-line. It leases the asset for <b>3 years</b> at P5,000 a month. The lessee pays P60,000 (one year's rent), a <b>P3,000 lease bonus</b>, and a <b>P5,000 refundable security deposit</b>. The lessor pays P12,000 commission to negotiate the lease, and P1,500 of minor repairs and P1,000 of maintenance during the year."},
      {t:"table",
        head:["Income for 2030","Computation","Amount"],
        rows:[
          ["Rent income","12 x 5,000","60,000"],
          ["Amortisation of lease bonus","3,000 / 3 years","1,000"],
          ["<b>Total income</b>","","<b>61,000</b>"]
        ]},
      {t:"table",
        head:["Expenses for 2030","Computation","Amount"],
        rows:[
          ["Depreciation of the equipment","(160,000 - 10,000) / 5","30,000"],
          ["Amortisation of initial direct cost","12,000 / 3 years","4,000"],
          ["Repairs and maintenance","1,500 + 1,000","2,500"],
          ["<b>Total expenses</b>","","<b>36,500</b>"]
        ]},
      {t:"p", html:"<b>Net income from the lease = P61,000 - P36,500 = P24,500.</b> The P5,000 security deposit is a <b>liability</b> and affects neither income nor expense."},
      {t:"note", html:"Note the two different lives at work: the equipment is depreciated over its <b>5-year useful life</b>, but the initial direct cost is amortised over the <b>3-year lease term</b>. Using one period for both is the commonest error here."}
    ]}
  ],
  check:{
    q:"Using illustrative example 2, what is the net income from the lease for 2030?",
    choices:["P21,500","P24,500","P29,500","P30,000"],
    answer:1,
    why:"Income of P61,000 (rent P60,000 + bonus amortisation P1,000) less expenses of P36,500 (depreciation P30,000 over the <b>5-year useful life</b> + initial direct cost P4,000 over the <b>3-year lease term</b> + repairs and maintenance P2,500) = <b>P24,500</b>. The refundable deposit is a liability and does not enter income."
  }
},
{
  id: "finance-investment",
  title: "The Finance Lease: Gross and Net Investment",
  blocks: [
    {t:"p", html:"At commencement the lessor <b>derecognises the underlying asset</b> and recognises a <b>receivable at an amount equal to the net investment in the lease</b>. The net investment is subsequently measured like an amortised cost financial asset, using the <b>effective interest method</b>."},
    {t:"table",
      head:["","Definition"],
      rows:[
        ["<b>Gross investment</b>","The <b>undiscounted</b> sum of the lease payments receivable <b>plus</b> any unguaranteed residual value accruing to the lessor"],
        ["<b>Net investment</b>","The gross investment <b>discounted</b> at the rate implicit in the lease"],
        ["<b>Unearned interest income</b>","Gross investment <b>less</b> net investment"]
      ]},
    {t:"note", html:"<b>The asymmetry with the lessee - and it is deliberate.</b><br><br>For the <b>lessee</b>, lease payments include only the amount <b>expected to be payable</b> under a residual value guarantee, and <b>never</b> the unguaranteed residual.<br><br>For the <b>lessor</b>, lease payments include the <b>full residual value guarantee</b> - regardless of the likelihood that payment will be due - given by the lessee, a party related to the lessee, or a financially capable unrelated third party. The <b>unguaranteed</b> residual is then added on top in arriving at gross investment.<br><br>The reason: the residual is the <b>lessor's asset either way</b>. Whether it is guaranteed only determines <i>who bears the risk of shortfall</i>, not whether the lessor expects to recover the value."},
    {t:"table",
      head:["Amount","Lessee includes?","Lessor includes?"],
      rows:[
        ["Fixed lease payments","Yes","Yes"],
        ["Residual value guarantee","Only the amount <b>expected to be payable</b>","The <b>full</b> guaranteed amount"],
        ["Unguaranteed residual value","<b>No</b>","<b>Yes</b>"],
        ["Purchase option reasonably certain","Yes","Yes"]
      ]},
    {t:"example", title:"Illustrative example 3 - gross and net investment", blocks:[
      {t:"p", html:"A lessor leases equipment for 5 years, annual payments of <b>P400,000</b> in arrears. The lessee guarantees a residual of <b>P200,000</b>; a further <b>P100,000</b> is unguaranteed. Implicit rate 10%; PV of an ordinary annuity of 1 for 5 periods at 10% = <b>3.7908</b>; PV of 1 for 5 periods at 10% = <b>0.6209</b>."},
      {t:"table",
        head:["","Undiscounted","PV factor","Present value"],
        rows:[
          ["Annual payments","2,000,000","3.7908","1,516,320"],
          ["Guaranteed residual value - <b>in full</b>","200,000","0.6209","124,180"],
          ["Unguaranteed residual value","100,000","0.6209","62,090"],
          ["<b>Gross / net investment</b>","<b>2,300,000</b>","","<b>1,702,590</b>"]
        ]},
      {t:"p", html:"<b>Unearned interest income = P2,300,000 - P1,702,590 = P597,410.</b>"},
      {t:"note", html:"Contrast the lessee on the same facts: if the lessee expected the asset to be worth P200,000 or more, it would include <b>nothing</b> for the guarantee and nothing for the unguaranteed residual - a lease liability of only P1,516,320. The two parties measure the same contract differently, and correctly."}
    ]}
  ],
  check:{
    q:"A lessor's lease has payments with a PV of P1,516,320, a guaranteed residual with a PV of P124,180, and an unguaranteed residual with a PV of P62,090. What is the net investment in the lease?",
    choices:["P1,516,320","P1,640,500","P1,702,590","P1,578,410"],
    answer:2,
    why:"The lessor includes the <b>full</b> guaranteed residual <b>and</b> the unguaranteed residual: P1,516,320 + P124,180 + P62,090 = <b>P1,702,590</b>. The residual accrues to the lessor whether guaranteed or not; the guarantee only decides who bears the shortfall risk."
  }
},
{
  id: "df-vs-st",
  title: "Direct Financing versus Sales-Type",
  blocks: [
    {t:"p", html:"Both are finance leases. What separates them is <b>who the lessor is</b> - and that single fact drives every difference."},
    {t:"table",
      head:["","Direct financing lease","Sales-type lease"],
      rows:[
        ["<b>Who the lessor is</b>","A company in the <b>financing business</b>","A <b>manufacturer or dealer</b>"],
        ["<b>Is there a sale?</b>","No","<b>Yes</b> - the lease is a means of marketing"],
        ["<b>Income</b>","<b>Interest income only</b>, over the term","<b>Gross profit at commencement</b>, plus interest income over the term"],
        ["<b>Net investment</b>","Cost of the asset <b>plus initial direct costs</b>","The <b>present value</b> of the lease payments plus the PV of the unguaranteed residual"],
        ["<b>Initial direct costs</b>","<b>Included</b> in the net investment - they reduce the effective rate","<b>Expensed at commencement</b>, forming part of cost of sales"],
        ["<b>Sales revenue</b>","Not applicable","<b>Lower of</b> the fair value of the asset and the PV of the lease payments"],
        ["<b>Cost of sales</b>","Not applicable","Carrying amount <b>less the PV of the unguaranteed residual</b>"]
      ]},
    {t:"note", html:"<b>Two precision points on the sales-type figures.</b><br>For <b>sales revenue</b>, the PV of the lease payments <b>includes the full residual value guarantee</b> but <b>excludes</b> the unguaranteed residual.<br>For <b>cost of sales</b>, the PV of the <b>unguaranteed</b> residual is <b>deducted</b> from the carrying amount - because the lessor has not sold that portion; it expects it back.<br><br>The consequence: <b>gross profit is the same whether the residual is guaranteed or unguaranteed</b>, since an unguaranteed residual is removed from both sides."},
    {t:"example", title:"Illustrative example 4 - sales-type lease", blocks:[
      {t:"p", html:"A dealer leases equipment. The fair value and the PV of the lease payments are both <b>P2,000,000</b>; the equipment's carrying amount is <b>P1,500,000</b>; initial direct costs are <b>P50,000</b>; the PV of the unguaranteed residual value is <b>P100,000</b>."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Sales revenue","Lower of FV and PV of lease payments","2,000,000"],
          ["Cost of sales","1,500,000 - 100,000","(1,400,000)"],
          ["<b>Gross profit</b>","","<b>600,000</b>"],
          ["Initial direct costs - expensed at commencement","","(50,000)"],
          ["<b>Profit at commencement</b>","","<b>550,000</b>"]
        ]},
      {t:"p", html:"Interest income of the remaining unearned amount is then recognised over the lease term using the effective interest method."}
    ]},
    {t:"example", title:"Illustrative example 5 - direct financing lease", blocks:[
      {t:"p", html:"A finance company acquires equipment for <b>P1,500,000</b> to lease out, incurring <b>P50,000</b> of initial direct costs. Annual payments are <b>P420,000</b> for 5 years in arrears; the gross investment including residual amounts is <b>P2,300,000</b>."},
      {t:"table",
        head:["","Amount"],
        rows:[
          ["Cost of the asset","1,500,000"],
          ["Add: initial direct costs","50,000"],
          ["<b>Net investment in the lease</b>","<b>1,550,000</b>"],
          ["Gross investment","2,300,000"],
          ["<b>Unearned interest income</b>","<b>750,000</b>"]
        ]},
      {t:"p", html:"<b>No gross profit arises</b> - there is no sale. The initial direct costs are <b>included in the net investment</b>, which lowers the effective rate and spreads their recovery over the term. The same P50,000 outlay would have been <b>expensed immediately</b> in a sales-type lease."}
    ]}
  ],
  check:{
    q:"A dealer-lessor incurs P50,000 of initial direct costs on a SALES-TYPE lease. How are they treated?",
    choices:[
      "Included in the net investment and recovered through interest income.",
      "Expensed at the commencement date, forming part of cost of sales.",
      "Capitalised into the underlying asset and depreciated.",
      "Deducted from sales revenue."
    ],
    answer:1,
    why:"In a <b>sales-type</b> lease the lessor is recognising a sale now, so the costs of achieving it are <b>expensed at commencement</b>. In a <b>direct financing</b> lease there is no sale, so the same outlay is <b>included in the net investment</b> and unwound through interest income. Identical cost, opposite treatment - determined solely by which kind of lessor is involved."
  }
},
{
  id: "residual-outcomes",
  title: "Residual Value Outcomes and Presentation",
  blocks: [
    {t:"table",
      head:["Situation at end of lease","Consequence"],
      rows:[
        ["Residual <b>guaranteed</b>, actual fair value <b>at or above</b> the guarantee","No cash received, no loss - the guarantee is simply not called on"],
        ["Residual <b>guaranteed</b>, actual fair value <b>below</b> the guarantee","The lessee (or guarantor) <b>pays the deficiency</b> to the lessor. The lessor recovers its residual in full"],
        ["Residual <b>unguaranteed</b>, actual fair value <b>below</b> the estimate","The <b>lessor bears it</b> - a <b>loss on finance lease</b>"],
        ["Residual <b>unguaranteed</b>, actual fair value <b>above</b> the estimate","A gain, recognised on derecognition"]
      ]},
    {t:"note", html:"<b>The whole point of a guarantee, in one line:</b> a guaranteed residual transfers the <b>downside risk</b> of the residual to the lessee; an unguaranteed residual leaves it with the lessor. That is why the lessor must <b>review its estimate of the unguaranteed residual at least annually</b> - a reduction is recognised immediately as a loss, revising the income allocation over the remaining term."},
    {t:"h", html:"Presentation and disclosure"},
    {t:"ul", items:[
      "<b>Finance lease</b> - the <b>net investment in the lease</b> is presented as a receivable. Finance income is recognised so as to reflect a <b>constant periodic rate of return</b> on the net investment.",
      "<b>Operating lease</b> - the underlying asset stays in the lessor's own statement of financial position, presented <b>according to the nature of the asset</b>, and lease income is presented as revenue."
    ]},
    {t:"p", html:"The lessor discloses, for finance leases, a <b>maturity analysis</b> of lease payments receivable for at least each of the first five years and a total for the remaining years, together with a <b>reconciliation of undiscounted lease payments to the net investment</b> - which is, in effect, the unearned interest income."},
    {t:"example", title:"Illustrative example 6 - the residual falls short", blocks:[
      {t:"p", html:"A lessor's net investment at the end of the lease consists solely of a residual value of <b>P200,000</b>. The asset is returned with a fair value of <b>P150,000</b>."},
      {t:"table",
        head:["Case","Lessor's accounting"],
        rows:[
          ["The P200,000 was <b>guaranteed</b> by the lessee","Dr Equipment 150,000; Dr Cash 50,000; Cr Lease receivable 200,000. <b>No loss</b> - the guarantee makes the lessor whole."],
          ["The P200,000 was <b>unguaranteed</b>","Dr Equipment 150,000; Dr Loss on finance lease 50,000; Cr Lease receivable 200,000. <b>The lessor absorbs the shortfall.</b>"]
        ]},
      {t:"p", html:"Same asset, same fair value, same lessor - and a P50,000 difference in profit, decided entirely by whether anyone guaranteed the residual."}
    ]}
  ],
  check:{
    q:"A lessor's residual value of P200,000 is UNGUARANTEED. The asset is returned with a fair value of P150,000. The lessor recognises:",
    choices:[
      "Nothing - the residual is derecognised at its carrying amount.",
      "A loss on finance lease of P50,000.",
      "A receivable of P50,000 from the lessee.",
      "A loss of P200,000."
    ],
    answer:1,
    why:"An <b>unguaranteed</b> residual leaves the downside risk with the <b>lessor</b>, so the P50,000 shortfall is its own <b>loss on finance lease</b>. Had the residual been guaranteed, the lessee would have paid the deficiency and the lessor would have suffered nothing."
  }
},
/* ---------------- comprehensive running case ---------------- */
{
  id: "lessor-case-1",
  title: "Comprehensive Case, Stage 1 - The Other Side of the Same Lease",
  blocks: [
    {t:"p", html:"This case is deliberately the <b>same warehouse lease</b> worked in the lessee chapter, seen now from the lessor's books. Nothing about the contract changes. The measurements do."},
    {t:"note", html:"<b>Tarlac Warehousing Inc. - the facts.</b><br><br>On <b>1 January 2030</b> Tarlac leases a warehouse to Pampanga Logistics.<br>&bull; Lease term <b>5 years</b>; annual payments of <b>P800,000</b> at the end of each year.<br>&bull; Rate implicit in the lease <b>10%</b>.<br>&bull; The lessee <b>guarantees a residual value of P200,000</b>. A further <b>P50,000</b> of residual value is <b>unguaranteed</b>.<br>&bull; The warehouse has a <b>carrying amount of P3,000,000</b> and a <b>fair value of P3,200,000</b>. Tarlac is a <b>dealer</b> in warehouse facilities.<br>&bull; Tarlac incurs <b>initial direct costs of P40,000</b>.<br>&bull; Lease term is for the major part of the remaining economic life, so the lease is classified as a <b>finance lease</b>.<br>&bull; PV of an ordinary annuity of 1, 5 periods at 10% = <b>3.7908</b>. PV of 1, 5 periods at 10% = <b>0.6209</b>."},
    {t:"example", title:"Stage 1a - gross and net investment", blocks:[
      {t:"table",
        head:["","Undiscounted","Present value"],
        rows:[
          ["Annual payments (800,000 x 5)","4,000,000","3,032,640"],
          ["Guaranteed residual value - <b>in full</b>","200,000","124,180"],
          ["Unguaranteed residual value","50,000","31,045"],
          ["<b>Gross investment / net investment</b>","<b>4,250,000</b>","<b>3,187,865</b>"]
        ]},
      {t:"p", html:"<b>Unearned interest income = P4,250,000 - P3,187,865 = P1,062,135.</b>"},
      {t:"note", html:"<b>Compare the two sets of books on identical facts.</b> Pampanga's lease liability was <b>P3,032,640</b>; Tarlac's net investment is <b>P3,187,865</b>. The P155,225 difference is the present value of the two residual amounts - which Tarlac counts in full and Pampanga counts not at all. Neither is wrong."}
    ]},
    {t:"example", title:"Stage 1b - it is a sales-type lease", blocks:[
      {t:"p", html:"Tarlac is a dealer, so the lease is a means of marketing and a sale is recognised at commencement."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["PV of lease payments (payments + <b>full</b> RVG, excluding UGRV)","3,032,640 + 124,180","3,156,820"],
          ["Fair value of the asset","","3,200,000"],
          ["<b>Sales revenue</b> - lower of the two","","<b>3,156,820</b>"],
          ["Carrying amount","","3,000,000"],
          ["Less: PV of the unguaranteed residual","","(31,045)"],
          ["<b>Cost of sales</b>","","<b>(2,968,955)</b>"],
          ["<b>Gross profit</b>","","<b>187,865</b>"],
          ["Initial direct costs - expensed at commencement","","(40,000)"],
          ["<b>Profit recognised at commencement</b>","","<b>147,865</b>"]
        ]},
      {t:"note", html:"<b>A check on the gross profit.</b> Net investment P3,187,865 less the carrying amount P3,000,000 = <b>P187,865</b>. The two routes must agree, and if they do not you have mishandled the unguaranteed residual on one side or the other."},
      {t:"p", html:"<b>Had Tarlac been a finance company rather than a dealer</b>, this would be a <b>direct financing</b> lease: no sale, no gross profit, and the net investment would be the carrying amount plus initial direct costs - P3,000,000 + P40,000 = <b>P3,040,000</b> - with the whole P1,210,000 difference from gross investment recognised as interest income over the term."}
    ]}
  ],
  check:{
    q:"On identical facts, Pampanga's lease liability is P3,032,640 but Tarlac's net investment is P3,187,865. What explains the P155,225 difference?",
    choices:[
      "Tarlac used a different discount rate.",
      "Tarlac includes the full guaranteed residual and the unguaranteed residual; Pampanga includes neither.",
      "Tarlac included its initial direct costs.",
      "One of the two measurements must be wrong."
    ],
    answer:1,
    why:"The difference is the present value of the P200,000 guaranteed residual (P124,180) and the P50,000 unguaranteed residual (P31,045). The <b>lessor</b> counts both, because the residual accrues to it. The <b>lessee</b> counts neither - it expects no shortfall on the guarantee, and it never counts an unguaranteed residual. Both measurements are correct."
  }
},
{
  id: "lessor-case-2",
  title: "Comprehensive Case, Stage 2 - Through to Derecognition",
  blocks: [
    {t:"example", title:"Stage 2a - unwinding the net investment", blocks:[
      {t:"table",
        head:["Year","Opening net investment","Interest income at 10%","Collection","Closing"],
        rows:[
          ["2030","3,187,865","318,787","(800,000)","2,706,652"],
          ["2031","2,706,652","270,665","(800,000)","2,177,317"],
          ["2032","2,177,317","217,732","(800,000)","1,595,049"],
          ["2033","1,595,049","159,505","(800,000)","954,554"],
          ["2034","954,554","95,455","(800,000)","<b>250,009</b>"]
        ]},
      {t:"note", html:"<b>The closing figure is the whole point.</b> After the last rental the net investment is <b>P250,009</b> - the guaranteed P200,000 plus the unguaranteed P50,000, plus P9 of accumulated rounding. The receivable has amortised down to exactly the residual the lessor still expects to recover from the asset itself."}
    ]},
    {t:"example", title:"Stage 2b - the asset comes back worth less than expected", blocks:[
      {t:"p", html:"At 31 December 2034 the warehouse is returned with an actual fair value of <b>P130,000</b>."},
      {t:"table",
        head:["","Amount"],
        rows:[
          ["Net investment outstanding","250,000"],
          ["Fair value of the asset recovered","(130,000)"],
          ["Cash received from the lessee under the guarantee (200,000 - 130,000)","(70,000)"],
          ["<b>Loss on finance lease</b>","<b>50,000</b>"]
        ]},
      {t:"table",
        head:["31 December 2034","Debit","Credit"],
        rows:[
          ["Warehouse (at fair value on repossession)","130,000",""],
          ["Cash","70,000",""],
          ["Loss on finance lease","50,000",""],
          ["&nbsp;&nbsp;&nbsp;Net investment in the lease","","250,000"]
        ]},
      {t:"note", html:"<b>The loss is exactly the unguaranteed residual.</b> P50,000 - not a coincidence. The guarantee made Tarlac whole up to P200,000, so the only exposure it ever carried was the P50,000 nobody guaranteed. That is the entire economic function of a residual value guarantee, visible in one number."},
      {t:"p", html:"Note the symmetry with the lessee's books: Pampanga paid <b>P70,000</b> and recognised a loss of P9,986 against its own carrying amount. Tarlac received that same P70,000 and lost P50,000. The two entities are not mirror images, because they measured different things at the start."}
    ]},
    {t:"h", html:"Presentation across the case"},
    {t:"table",
      head:["","Tarlac's financial statements"],
      rows:[
        ["Statement of financial position","<b>Net investment in the lease</b> as a receivable, split current and non-current. The warehouse is <b>derecognised</b> at commencement."],
        ["Profit or loss, 2030","<b>Sales revenue</b> P3,156,820; <b>cost of sales</b> P2,968,955; <b>initial direct costs</b> P40,000; <b>finance income</b> P318,787"],
        ["Profit or loss, later years","<b>Finance income</b> only, at a constant periodic rate of return on the net investment"],
        ["Disclosure","A <b>maturity analysis</b> of lease payments receivable for at least five years, and a <b>reconciliation of undiscounted payments to the net investment</b>"]
      ]}
  ],
  check:{
    q:"Tarlac's loss on derecognition is P50,000, exactly the unguaranteed residual value. Why is that not a coincidence?",
    choices:[
      "Because unguaranteed residuals are always written off in full at the end of a lease.",
      "Because the guarantee makes the lessor whole up to P200,000, so its only exposure was the P50,000 nobody guaranteed.",
      "Because the lessee's loss must equal the lessor's loss.",
      "Because the asset's fair value happened to equal the guaranteed amount."
    ],
    answer:1,
    why:"The lessee's guarantee covers any shortfall below P200,000, and it paid P70,000 to make that good. Everything above P200,000 in the receivable - the <b>P50,000 unguaranteed residual</b> - was the lessor's own risk, and the asset did not deliver it. That is precisely what a residual value guarantee does and does not do."
  }
}
],

flashcards: [
  {f:"Did PFRS 16 change lessor accounting?", b:"<b>Substantially no</b> - it carried forward the IAS 17 model. The lessor still classifies leases as <b>finance</b> or <b>operating</b> by asking whether substantially all the risks and rewards of ownership have transferred."},
  {f:"Name the five principal indicators of a finance lease.", b:"(1) <b>Transfer of ownership</b>; (2) <b>bargain purchase option</b>; (3) lease term for the <b>major part</b> of economic life; (4) PV of lease payments amounts to <b>substantially all</b> of fair value; (5) asset of a <b>specialised nature</b>. Any <b>one</b> may suffice."},
  {f:"Do the 75% and 90% thresholds come from PFRS?", b:"<b>No - US GAAP.</b> PFRS gives <b>no numerical thresholds</b>; classification is a judgment about substance. Philippine problems use the figures computationally, but a theory question must be answered 'no'."},
  {f:"When is lease classification made, and is it revisited?", b:"At <b>inception</b>, and it is <b>not revisited</b> unless there is a lease modification. Changes in estimate or circumstance do not cause reclassification."},
  {f:"How does an operating lessor recognise income?", b:"On a <b>straight-line basis</b> over the lease term unless another systematic basis better reflects the diminishing benefit. Rent-free periods and stepped rentals change the <b>cash</b>, not the income."},
  {f:"How does an operating lessor treat initial direct costs?", b:"<b>Added to the carrying amount</b> of the underlying asset and expensed <b>over the lease term</b>, on the same basis as lease income. Note the asset itself is depreciated over its <b>useful life</b> - two different periods."},
  {f:"How does a lessor treat a lease bonus and a refundable security deposit?", b:"<b>Lease bonus</b> - unearned rent income, amortised over the lease term. <b>Refundable deposit</b> - a <b>liability</b>. A <b>non-refundable</b> deposit is unearned income."},
  {f:"Define gross investment and net investment in a lease.", b:"<b>Gross</b> - the <b>undiscounted</b> lease payments receivable <b>plus</b> any unguaranteed residual value accruing to the lessor. <b>Net</b> - the gross investment <b>discounted</b> at the implicit rate. The difference is <b>unearned interest income</b>."},
  {f:"How much of a residual value guarantee does the LESSOR include?", b:"The <b>full guaranteed amount</b>, regardless of the likelihood of payment - from the lessee, a related party, or a financially capable unrelated third party. Contrast the lessee, which includes only the amount <b>expected to be payable</b>."},
  {f:"Does the lessor include the unguaranteed residual value?", b:"<b>Yes</b> - in both gross and net investment. The lessee never does. The residual is the lessor's asset either way; the guarantee only decides who bears the shortfall risk."},
  {f:"Who is the lessor in a direct financing lease, and what income arises?", b:"A company in the <b>financing business</b>. There is <b>no sale</b>, so <b>interest income only</b>, recognised over the term."},
  {f:"Who is the lessor in a sales-type lease, and what income arises?", b:"A <b>manufacturer or dealer</b>, for whom the lease is a means of marketing. <b>Gross profit at commencement plus interest income</b> over the term."},
  {f:"How are initial direct costs treated in each kind of finance lease?", b:"<b>Direct financing</b> - <b>included</b> in the net investment, lowering the effective rate. <b>Sales-type</b> - <b>expensed at commencement</b> as part of cost of sales."},
  {f:"How are sales revenue and cost of sales computed in a sales-type lease?", b:"<b>Sales</b> = the <b>lower</b> of fair value and the PV of lease payments (including the <b>full</b> RVG, excluding the unguaranteed residual). <b>Cost of sales</b> = carrying amount <b>less the PV of the unguaranteed residual</b>."},
  {f:"Is gross profit affected by whether the residual is guaranteed?", b:"<b>No.</b> The PV of an unguaranteed residual is removed from <b>both</b> sales and cost of sales, so the margin is unchanged."},
  {f:"What happens at expiry where a guaranteed residual exceeds the asset's fair value?", b:"The <b>lessee or guarantor pays the deficiency</b>, so the lessor recovers its residual in full and suffers <b>no loss</b>."},
  {f:"What happens where an UNGUARANTEED residual exceeds the asset's fair value?", b:"The <b>lessor bears the shortfall</b> and recognises a <b>loss on finance lease</b>."},
  {f:"How often must the lessor review the unguaranteed residual value?", b:"At least <b>annually</b>. A reduction is recognised <b>immediately</b> and the income allocation over the remaining term is revised."},
  {f:"How does a lessor present a finance lease and an operating lease?", b:"<b>Finance</b> - the <b>net investment</b> as a receivable, with finance income at a <b>constant periodic rate of return</b>. <b>Operating</b> - the asset stays on the lessor's books, presented <b>by its nature</b>, with lease income as revenue."}
],

quiz: [
  {q:"Under PFRS 16, lessor accounting:",
   c:["Uses a single model like the lessee","Retains the finance/operating classification substantially unchanged from IAS 17","Was abolished","Applies only to finance leases"],
   a:1, why:"PFRS 16 transformed lessee accounting but carried lessor accounting forward substantially unchanged. The lessor still asks whether substantially all the risks and rewards of ownership have transferred.", tos:"H.1.3 Classification"},

  {q:"How many finance lease indicators must be satisfied?",
   c:["All five","At least three","Any one may suffice, judged on substance","Exactly two"],
   a:2, why:"The indicators are examples of situations that individually or in combination would normally lead to finance lease classification. Any one may be enough; the test is whether substantially all risks and rewards have transferred.", tos:"H.1.3 Classification"},

  {q:"A lessor leases equipment for 12 months from 1 April at P10,000 a month, with the first 2 months rent free. Income for the calendar year is:",
   c:["P75,000","P83,333","P90,000","P100,000"],
   a:0, why:"Total consideration = 10 paying months x P10,000 = P100,000 over a 12-month term, so P8,333.33 a month straight-line. Nine months fall in the year (April to December): 9 x P8,333.33 = P75,000.", tos:"H.1.3 Operating lease"},

  {q:"An operating lessor's initial direct costs are:",
   c:["Expensed immediately","Added to the carrying amount of the asset and expensed over the LEASE TERM","Added to the asset and depreciated over its USEFUL LIFE","Deducted from lease income"],
   a:1, why:"They are added to the asset's carrying amount but recognised as an expense over the LEASE TERM, on the same basis as lease income. The asset itself is depreciated over its useful life - two different periods, and confusing them is the common error.", tos:"H.1.3 Operating lease"},

  {q:"A lessor receives a refundable security deposit. It is:",
   c:["Unearned rent income amortised over the term","Recognised immediately as income","A liability","Deducted from the carrying amount of the asset"],
   a:2, why:"A REFUNDABLE deposit must be returned, so it is a liability. A NON-REFUNDABLE deposit, and a lease bonus, are unearned rent income amortised over the lease term.", tos:"H.1.3 Operating lease"},

  {q:"The difference between gross investment and net investment in a lease is:",
   c:["Unearned interest income","Gross profit","The unguaranteed residual value","Initial direct cost"],
   a:0, why:"Gross investment is undiscounted; net investment is its present value at the implicit rate. The difference is unearned interest income, recognised over the term at a constant periodic rate of return.", tos:"H.1.3 Finance lease"},

  {q:"How much of a residual value guarantee does a LESSOR include in lease payments?",
   c:["Only the amount expected to be payable","The full guaranteed amount regardless of the likelihood of payment","Half the guaranteed amount","None"],
   a:1, why:"The lessor includes the FULL guarantee from the lessee, a related party, or a financially capable unrelated third party. The LESSEE, by contrast, includes only the amount expected to be payable - the deliberate asymmetry in PFRS 16.", tos:"H.1.3 Finance lease"},

  {q:"Which party includes the UNGUARANTEED residual value in its measurement?",
   c:["The lessee only","The lessor only","Both","Neither"],
   a:1, why:"The lessor includes it in gross and net investment, because the residual accrues to the lessor. The lessee has promised nothing in respect of it and never includes it.", tos:"H.1.3 Finance lease"},

  {q:"Lease payments have a PV of P1,516,320, the guaranteed residual a PV of P124,180 and the unguaranteed residual a PV of P62,090. The lessor's net investment is:",
   c:["P1,516,320","P1,640,500","P1,702,590","P1,578,410"],
   a:2, why:"P1,516,320 + P124,180 + P62,090 = P1,702,590. The lessor includes the full guaranteed residual AND the unguaranteed residual.", tos:"H.1.3 Finance lease"},

  {q:"In a SALES-TYPE lease, cost of sales is:",
   c:["The carrying amount of the asset","The carrying amount less the PV of the unguaranteed residual value","The carrying amount plus initial direct costs","The PV of the lease payments"],
   a:1, why:"The PV of the unguaranteed residual is deducted because the lessor has not sold that portion - it expects the asset back. Removing it from both sales and cost of sales leaves gross profit unaffected by whether the residual is guaranteed.", tos:"H.1.3 Sales-type"},

  {q:"A dealer leases equipment: fair value and PV of lease payments both P3,000,000; carrying amount P2,200,000; initial direct costs P80,000; PV of unguaranteed residual P150,000. Gross profit is:",
   c:["P800,000","P870,000","P950,000","P950,000 less P80,000"],
   a:2, why:"Sales P3,000,000 less cost of sales (P2,200,000 - P150,000 = P2,050,000) = P950,000 gross profit. The P80,000 of initial direct costs is expensed at commencement, reducing profit to P870,000 - but it is not part of gross profit itself.", tos:"H.1.3 Sales-type"},

  {q:"Which is TRUE of a DIRECT FINANCING lease?",
   c:["The lessor is a manufacturer or dealer","Gross profit is recognised at commencement","Initial direct costs are included in the net investment","Sales revenue is the lower of fair value and PV of lease payments"],
   a:2, why:"There is no sale, so no gross profit and no sales revenue. The initial direct costs are included in the net investment, lowering the effective rate. The other three describe a sales-type lease.", tos:"H.1.3 Direct financing"},

  {q:"A lessor's UNGUARANTEED residual of P300,000 turns out to be worth P240,000 at the end of the lease. The lessor:",
   c:["Recognises a loss on finance lease of P60,000","Bills the lessee for P60,000","Recognises no loss","Recognises a loss of P300,000"],
   a:0, why:"An unguaranteed residual leaves the downside risk with the lessor, so the P60,000 shortfall is its own loss. Had the residual been guaranteed, the lessee would have paid the deficiency.", tos:"H.1.3 Residual outcomes"},

  {q:"How often must a lessor review its estimate of the unguaranteed residual value?",
   c:["Only at the end of the lease","At least annually","Only on a lease modification","Never - it is fixed at inception"],
   a:1, why:"At least annually. A reduction is recognised immediately as a loss and the allocation of finance income over the remaining term is revised.", tos:"H.1.3 Residual outcomes"},

  {q:"A lessor presents an OPERATING lease asset:",
   c:["As a net investment receivable","In its own statement of financial position according to the nature of the asset","Off balance sheet","As a right-of-use asset"],
   a:1, why:"In an operating lease the lessor keeps and depreciates the asset, presenting it by its nature. Only a FINANCE lease produces a net investment receivable in place of the asset.", tos:"H.1.3 Presentation"}
]
});

/* ==================================================================
   3. SALE AND LEASEBACK
   ================================================================== */
FARHub.addChapter({
  id: "h1c-sale-leaseback",
  code: "H.1.4",
  group: LEASE_GROUP,
  title: "Sale and Leaseback",
  blurb: "First ask whether a sale happened at all. If it did, the seller-lessee kept part of the asset - and recognises gain only on the part it gave up.",
  minutes: 55,
  outcomes: [
    "Apply the PFRS 15 test to decide whether the transfer is a sale.",
    "Account for a transfer that is not a sale as a financing arrangement.",
    "Measure the right-of-use asset and the gain where the transfer is a sale.",
    "Adjust for a selling price above or below fair value.",
    "Explain the subsequent measurement requirement introduced by the 2024 amendment."
  ],

  sections: [
{
  id: "is-it-a-sale",
  title: "The Threshold Question: Is It a Sale?",
  blocks: [
    {t:"p", html:"A <b>sale and leaseback</b> is a transaction in which one party sells an asset and immediately leases it back from the buyer."},
    {t:"note", html:"<b>Do not begin with the formula.</b> PFRS 16.99 requires the entity to <b>first apply PFRS 15</b> to determine whether the transfer of the asset is accounted for as a <b>sale</b> - that is, whether the buyer-lessor has obtained <b>control</b> of the asset. Everything else follows from the answer, and the two answers give completely different accounting. Most reviewers skip straight to the ROU asset formula, which is only the second half of the topic."},
    {t:"h", html:"What usually decides it"},
    {t:"p", html:"Control has generally <b>not</b> passed - so there is <b>no sale</b> - where, for example:"},
    {t:"ul", items:[
      "The seller-lessee has a <b>substantive repurchase option</b> over the asset;",
      "The leaseback is for <b>substantially all</b> of the asset's remaining economic life; or",
      "The transaction is in substance a <b>borrowing secured on the asset</b>."
    ]},
    {t:"table",
      head:["","Transfer IS a sale","Transfer is NOT a sale"],
      rows:[
        ["<b>Seller-lessee</b>","<b>Derecognises</b> the asset; recognises a ROU asset and lease liability; recognises gain only on the rights transferred","<b>Continues to recognise</b> the asset; recognises a <b>financial liability</b> equal to the transfer proceeds, under PFRS 9"],
        ["<b>Buyer-lessor</b>","Recognises the purchase under the applicable standard and accounts for the lease as a lessor","Does <b>not</b> recognise the asset; recognises a <b>financial asset</b> equal to the transfer proceeds, under PFRS 9"]
      ]},
    {t:"example", title:"Illustrative example 1 - a transfer that is not a sale", blocks:[
      {t:"p", html:"An entity 'sells' a building with a carrying amount of <b>P8,000,000</b> for <b>P10,000,000</b> and leases it back for <b>the whole of its remaining 20-year economic life</b>."},
      {t:"p", html:"Because the leaseback covers substantially all the remaining life, the buyer never obtains control, so <b>no sale occurs</b>."},
      {t:"table",
        head:["Seller-lessee's entry","Debit","Credit"],
        rows:[["Cash","10,000,000",""],["&nbsp;&nbsp;&nbsp;Financial liability","","10,000,000"]]},
      {t:"p", html:"The building <b>stays on the seller-lessee's books at P8,000,000</b> and continues to be depreciated. <b>No gain of P2,000,000 is recognised</b> - nothing has been sold. The financial liability is measured at amortised cost under PFRS 9, with the lease payments split into interest and principal."},
      {t:"note", html:"The commercial substance is a <b>secured 20-year loan of P10,000,000</b>, and the accounting says exactly that. A candidate who reaches for the ROU asset formula here loses the whole question."}
    ]}
  ],
  check:{
    q:"An entity transfers an asset with a carrying amount of P8,000,000 for P10,000,000 and leases it back for the whole of its remaining economic life. How does the seller-lessee account for the transaction?",
    choices:[
      "Derecognise the asset and recognise a gain of P2,000,000.",
      "Derecognise the asset and recognise a gain on the rights transferred only.",
      "Continue to recognise the asset and recognise a financial liability of P10,000,000.",
      "Recognise a right-of-use asset of P8,000,000."
    ],
    answer:2,
    why:"A leaseback for <b>substantially all</b> the remaining economic life means the buyer never obtains control, so under PFRS 15 there is <b>no sale</b>. The seller-lessee keeps the asset on its books and recognises a <b>financial liability</b> of P10,000,000 under PFRS 9. No gain arises, because nothing was sold - the substance is a secured borrowing."
  }
},
{
  id: "if-a-sale",
  title: "Where the Transfer Is a Sale",
  blocks: [
    {t:"p", html:"PFRS 16.100(a): the seller-lessee measures the right-of-use asset arising from the leaseback at <b>the proportion of the previous carrying amount of the asset that relates to the right of use retained</b>. It therefore recognises <b>only the amount of gain or loss that relates to the rights transferred</b> to the buyer-lessor."},
    {t:"note", html:"<b>The idea underneath the formulas.</b> The seller-lessee has not disposed of the whole asset. It sold the rights it gave up and <b>kept</b> the right to use the asset for the leaseback term. So the old carrying amount is <b>split in proportion</b>, and only the portion transferred is treated as sold. The <b>right retained is measured by the lease liability</b> - the present value of the leaseback payments."},
    {t:"table",
      head:["",""],
      rows:[
        ["<b>Right-of-use asset</b>","carrying amount x (lease liability / fair value of the asset)"],
        ["<b>Gain recognised</b>","total gain x [(fair value - lease liability) / fair value]"]
      ]},
    {t:"p", html:"Equivalently, the gain recognised is the total gain multiplied by the <b>proportion transferred</b>, and the gain relating to the <b>retained</b> proportion is not recognised - it is absorbed into the carrying amount of the ROU asset."},
    {t:"example", title:"Illustrative example 2 - sale at fair value", blocks:[
      {t:"p", html:"An asset with a carrying amount of <b>P3,000,000</b> and a fair value of <b>P4,000,000</b> is sold for <b>P4,000,000</b> and leased back. The present value of the leaseback payments is <b>P1,500,000</b>. The transfer qualifies as a sale."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Right retained (= lease liability)","","1,500,000"],
          ["Proportion retained","1,500,000 / 4,000,000","37.5%"],
          ["<b>Right-of-use asset</b>","3,000,000 x 37.5%","<b>1,125,000</b>"],
          ["Total gain on sale","4,000,000 - 3,000,000","1,000,000"],
          ["<b>Gain recognised</b>","1,000,000 x 62.5%","<b>625,000</b>"],
          ["Gain not recognised","1,000,000 x 37.5%","375,000"]
        ]},
      {t:"table",
        head:["Journal entry","Debit","Credit"],
        rows:[
          ["Cash","4,000,000",""],
          ["Right-of-use asset","1,125,000",""],
          ["&nbsp;&nbsp;&nbsp;Building (carrying amount)","","3,000,000"],
          ["&nbsp;&nbsp;&nbsp;Lease liability","","1,500,000"],
          ["&nbsp;&nbsp;&nbsp;Gain on sale and leaseback","","625,000"]
        ]},
      {t:"p", html:"The entry balances at P5,125,000, and the unrecognised P375,000 of gain is embedded in the ROU asset - it will emerge through <b>lower depreciation</b> over the leaseback term."}
    ]}
  ],
  check:{
    q:"An asset with a carrying amount of P2,400,000 and a fair value of P3,000,000 is sold at fair value and leased back. The lease liability is P1,200,000. What is the right-of-use asset?",
    choices:["P960,000","P1,200,000","P2,400,000","P1,440,000"],
    answer:0,
    why:"ROU asset = carrying amount x (lease liability / fair value) = P2,400,000 x (P1,200,000 / P3,000,000) = <b>P960,000</b>. It is a <b>proportion of the old carrying amount</b> - neither the lease liability itself nor any fair-value figure. Of the P600,000 total gain, P600,000 x 60% = P360,000 would be recognised."
  }
},
{
  id: "not-fair-value",
  title: "Where the Price Is Not Fair Value",
  blocks: [
    {t:"p", html:"PFRS 16.101: where the consideration for the sale does <b>not</b> equal the fair value of the asset, or the lease payments are <b>not at market rates</b>, the entity adjusts to measure the sale proceeds at fair value:"},
    {t:"table",
      head:["Situation","Substance","Adjustment"],
      rows:[
        ["<b>Below-market terms</b> - selling price below fair value","A <b>prepayment of lease payments</b>","<b>Add</b> the difference to the lease liability in establishing the proportion"],
        ["<b>Above-market terms</b> - selling price above fair value","<b>Additional financing</b> provided by the buyer-lessor","<b>Deduct</b> the excess from the lease liability in establishing the proportion"]
      ]},
    {t:"p", html:"PFRS 16.102 requires the adjustment to be measured on the <b>more readily determinable</b> of the difference between the fair value of the consideration and the fair value of the asset, and the difference between the present value of the contractual lease payments and the present value of payments at market rates."},
    {t:"note", html:"<b>Why the directions are what they are.</b> If the buyer pays <b>more</b> than the asset is worth, the excess is not sale proceeds - it is cash lent to the seller, to be repaid through the lease payments. That portion of the liability is <b>financing, not lease</b>, so it is stripped out before measuring the right retained. If the buyer pays <b>less</b>, the seller has effectively paid part of its rent up front, so that prepayment is <b>added</b> to the right retained."},
    {t:"example", title:"Illustrative example 3 - selling price above fair value", blocks:[
      {t:"p", html:"An asset with a carrying amount of <b>P2,000,000</b> and a fair value of <b>P3,000,000</b> is sold for <b>P3,400,000</b> and leased back. The present value of the leaseback payments is <b>P1,700,000</b>."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Excess of price over fair value - additional financing","3,400,000 - 3,000,000","400,000"],
          ["Total liability recognised","","1,700,000"],
          ["Less: financing component","","(400,000)"],
          ["<b>Lease liability used in the proportion</b>","","<b>1,300,000</b>"],
          ["Proportion retained","1,300,000 / 3,000,000","43.33%"],
          ["<b>Right-of-use asset</b>","2,000,000 x 43.33%","<b>866,667</b>"],
          ["Total gain","3,000,000 - 2,000,000","1,000,000"],
          ["<b>Gain recognised</b>","1,000,000 x 56.67%","<b>566,667</b>"]
        ]},
      {t:"p", html:"The gain is computed against <b>fair value of P3,000,000</b>, not the P3,400,000 received. The extra P400,000 is a <b>loan</b>, not a gain."}
    ]},
    {t:"example", title:"Illustrative example 4 - selling price below fair value", blocks:[
      {t:"p", html:"The same asset - carrying amount <b>P2,000,000</b>, fair value <b>P3,000,000</b> - is sold for <b>P2,700,000</b> and leased back, with the PV of leaseback payments being <b>P1,300,000</b>."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Shortfall of price against fair value - prepaid rent","3,000,000 - 2,700,000","300,000"],
          ["Lease liability","","1,300,000"],
          ["Add: prepayment","","300,000"],
          ["<b>Right retained used in the proportion</b>","","<b>1,600,000</b>"],
          ["Proportion retained","1,600,000 / 3,000,000","53.33%"],
          ["<b>Right-of-use asset</b>","2,000,000 x 53.33%","<b>1,066,667</b>"],
          ["<b>Gain recognised</b>","1,000,000 x 46.67%","<b>466,667</b>"]
        ]},
      {t:"p", html:"Selling cheap means the seller-lessee retained <b>more</b> of the asset, so the ROU asset is larger and the recognised gain smaller. The two examples are mirror images."}
    ]}
  ],
  check:{
    q:"An asset with a fair value of P3,000,000 is sold for P3,400,000 and leased back; the PV of the leaseback payments is P1,700,000. Which figure is used as the right retained in the proportion?",
    choices:["P1,700,000","P1,300,000","P2,100,000","P3,400,000"],
    answer:1,
    why:"The P400,000 by which the price exceeds fair value is <b>additional financing</b> provided by the buyer-lessor, not sale proceeds. It is <b>deducted</b> from the lease liability, leaving <b>P1,300,000</b> as the right retained. Had the price been <i>below</i> fair value, the difference would be a prepayment and would be <b>added</b> instead."
  }
},
{
  id: "subsequent",
  title: "Subsequent Measurement and the 2024 Amendment",
  blocks: [
    {t:"p", html:"After initial recognition the seller-lessee accounts for the ROU asset and lease liability like any other lease - depreciation of the asset and the effective interest method on the liability."},
    {t:"note", html:"<b>The gap the IASB closed.</b> PFRS 16 as originally issued said how to measure a sale and leaseback <b>at the date of the transaction</b> but was silent on <b>subsequent</b> measurement where the leaseback payments are <b>variable and not linked to an index or rate</b>. Applying the ordinary rules would have excluded those payments from the liability altogether, and the seller-lessee would then have recognised a <b>gain on the right of use it had retained</b> - precisely what paragraph 100 forbids."},
    {t:"p", html:"<b>Lease Liability in a Sale and Leaseback</b> - amendments to PFRS 16 issued in 2022 and <b>effective for annual periods beginning on or after 1 January 2024</b> - added paragraph 102A. The seller-lessee subsequently measures the lease liability by determining the lease payments in a way that <b>recognises no gain or loss relating to the right of use it retains</b>."},
    {t:"p", html:"In practice this permits variable payments that do not depend on an index or rate to be included in the subsequent measurement of the liability. Two approaches are used:"},
    {t:"ul", items:[
      "<b>Expected lease payments</b> at the commencement date; or",
      "<b>Equal periodic payments</b> over the lease term."
    ]},
    {t:"note", html:"<b>For the CPALE 2029 examination this is in force.</b> The Table of Specifications states that new standards and issuances effective as at the date of the examination supersede the syllabus. The amendment took effect on 1 January 2024, well before October 2029, so the amended text governs. <i>Confirm the FRSC adoption date before publishing this to students.</i>"},
    {t:"h", html:"The buyer-lessor"},
    {t:"p", html:"The buyer-lessor accounts for the <b>purchase</b> under the standard applicable to that class of asset, and for the <b>lease</b> under the ordinary lessor requirements - classifying it as a finance or operating lease in the usual way. There is no special rule; only the seller-lessee's side is modified."},
    {t:"example", title:"Illustrative example 5 - reading the whole transaction", blocks:[
      {t:"p", html:"Bring the three questions together for a single transaction:"},
      {t:"table",
        head:["Question","Where the answer comes from"],
        rows:[
          ["1. Is there a sale?","<b>PFRS 15</b> - has the buyer obtained control? A substantive repurchase option or a leaseback for substantially all the remaining life means <b>no</b>."],
          ["2. If not a sale, what happens?","Asset <b>stays</b> with the seller-lessee; a <b>financial liability</b> equal to the proceeds, under PFRS 9. No gain."],
          ["3. If a sale, how much gain?","Only the portion relating to the <b>rights transferred</b>. ROU asset = carrying amount x (right retained / fair value), adjusting the right retained for any excess or shortfall against fair value."]
        ]},
      {t:"p", html:"Answering them in that order is the whole method. A candidate who starts at question 3 will produce an immaculate computation of an amount that should never have been computed."}
    ]}
  ],
  check:{
    q:"Why did the IASB amend PFRS 16 in respect of sale and leaseback transactions with variable payments?",
    choices:[
      "To require all sale and leaseback gains to be deferred.",
      "Because the original standard was silent on subsequent measurement, so a seller-lessee could recognise a gain on the right of use it had retained.",
      "To prohibit sale and leaseback transactions with variable payments.",
      "To align the buyer-lessor's accounting with the seller-lessee's."
    ],
    answer:1,
    why:"PFRS 16 originally addressed only the <b>initial</b> measurement. Where leaseback payments were variable and not index-linked, applying the ordinary subsequent-measurement rules excluded them from the liability, producing a gain on the <b>retained</b> right of use - contradicting paragraph 100. Paragraph 102A closes that gap, effective 1 January 2024."
  }
},
/* ---------------- comprehensive running case ---------------- */
{
  id: "slb-case",
  title: "Comprehensive Case - Commencement to Derecognition",
  blocks: [
    {t:"note", html:"<b>Clark Manufacturing Corporation - the facts.</b><br><br>On <b>1 January 2030</b> Clark sells a factory building to a financing company and immediately leases it back.<br>&bull; <b>Carrying amount</b> of the building <b>P2,000,000</b>; <b>fair value P3,000,000</b>; <b>selling price P3,000,000</b>.<br>&bull; Leaseback term <b>5 years</b>, annual payments at the end of each year, discounted at <b>10%</b>, giving a present value of <b>P1,200,000</b>.<br>&bull; The building's remaining economic life is <b>25 years</b>, and Clark holds no repurchase option.<br>&bull; PV of an ordinary annuity of 1, 5 periods at 10% = <b>3.7908</b>."},
    {t:"example", title:"Step 1 - is it a sale?", blocks:[
      {t:"p", html:"The leaseback runs <b>5 years against a remaining economic life of 25</b>, and Clark has <b>no repurchase option</b>. Control of the building has passed to the buyer, so the transfer <b>is a sale</b> under PFRS 15 and the sale and leaseback measurement rules apply."},
      {t:"p", html:"Had the leaseback covered substantially all of the 25 years, or had Clark held a substantive repurchase option, there would be <b>no sale</b>: the building would stay on Clark's books at P2,000,000 and a <b>financial liability of P3,000,000</b> would be recognised. None of what follows would apply."}
    ]},
    {t:"example", title:"Step 2 - initial measurement", blocks:[
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Right retained (= lease liability)","","1,200,000"],
          ["Proportion retained","1,200,000 / 3,000,000","40%"],
          ["Proportion transferred","","60%"],
          ["<b>Right-of-use asset</b>","2,000,000 x 40%","<b>800,000</b>"],
          ["Total gain on sale","3,000,000 - 2,000,000","1,000,000"],
          ["<b>Gain recognised</b>","1,000,000 x 60%","<b>600,000</b>"],
          ["Gain not recognised - absorbed into the ROU asset","1,000,000 x 40%","400,000"]
        ]},
      {t:"table",
        head:["1 January 2030","Debit","Credit"],
        rows:[
          ["Cash","3,000,000",""],
          ["Right-of-use asset","800,000",""],
          ["&nbsp;&nbsp;&nbsp;Building","","2,000,000"],
          ["&nbsp;&nbsp;&nbsp;Lease liability","","1,200,000"],
          ["&nbsp;&nbsp;&nbsp;Gain on sale and leaseback","","600,000"]
        ]},
      {t:"p", html:"The entry balances at P3,800,000."}
    ]},
    {t:"example", title:"Step 3 - subsequent measurement", blocks:[
      {t:"p", html:"The annual payment is P1,200,000 / 3.7908 = <b>P316,556</b>. The ROU asset is depreciated over the <b>5-year lease term</b> - the building returns to the buyer-lessor - giving P800,000 / 5 = <b>P160,000</b> a year."},
      {t:"table",
        head:["Year","Opening liability","Interest at 10%","Payment","Closing liability"],
        rows:[
          ["2030","1,200,000","120,000","(316,556)","1,003,444"],
          ["2031","1,003,444","100,344","(316,556)","787,232"],
          ["2032","787,232","78,723","(316,556)","549,399"],
          ["2033","549,399","54,940","(316,556)","287,783"],
          ["2034","287,783","28,778","(316,556)","<b>5</b>"]
        ]},
      {t:"table",
        head:["Profit or loss, 2030","Amount"],
        rows:[
          ["Gain on sale and leaseback","600,000"],
          ["Depreciation of the right-of-use asset","(160,000)"],
          ["Finance cost - interest","(120,000)"],
          ["<b>Net effect on profit, year 1</b>","<b>320,000</b>"]
        ]},
      {t:"note", html:"<b>Where the unrecognised P400,000 goes.</b> It never appears as income. It is buried in the ROU asset, which is carried at P800,000 rather than the P1,200,000 the right retained is worth. Over five years that lower carrying amount produces P80,000 a year less depreciation than it otherwise would - so the gain is <b>released through reduced expense</b>, not recognised as a gain."}
    ]},
    {t:"example", title:"Step 4 - presentation and derecognition", blocks:[
      {t:"table",
        head:["31 December 2030","Amount"],
        rows:[
          ["<b>Non-current assets</b> - right-of-use asset (800,000 - 160,000)","640,000"],
          ["<b>Current liabilities</b> - lease liability (316,556 - 100,344)","216,212"],
          ["<b>Non-current liabilities</b> - lease liability","787,232"]
        ]},
      {t:"p", html:"At <b>31 December 2034</b> the ROU asset is fully depreciated and the lease liability is extinguished by the final payment - the residual P5 in the table above is accumulated rounding, absorbed in the last period:"},
      {t:"table",
        head:["Derecognition","Debit","Credit"],
        rows:[
          ["Accumulated depreciation","800,000",""],
          ["&nbsp;&nbsp;&nbsp;Right-of-use asset","","800,000"]
        ]},
      {t:"p", html:"Nothing else remains. Clark walks away having recognised P600,000 of gain at the start and P400,000 of foregone depreciation across five years - which together are the full P1,000,000 economic gain, allocated exactly as the standard intends."}
    ]},
    {t:"h", html:"The four questions, in order"},
    {t:"table",
      head:["Step","Question","If you get it wrong"],
      rows:[
        ["<b>1</b>","Is it a sale under PFRS 15?","You compute an immaculate ROU asset for a transaction that was only a loan"],
        ["<b>2</b>","How much of the asset was retained?","The ROU asset and the gain are both wrong, in opposite directions"],
        ["<b>3</b>","Is the price equal to fair value?","The right retained is misstated, so both figures shift"],
        ["<b>4</b>","How does it unwind?","The deferred gain never emerges, or emerges twice"]
      ]}
  ],
  check:{
    q:"Clark recognises a gain of P600,000 at commencement out of a P1,000,000 total gain. What happens to the other P400,000?",
    choices:[
      "It is recognised as deferred income and amortised over the lease term.",
      "It is never recognised, being embedded in a lower right-of-use asset and released as reduced depreciation.",
      "It is recognised in other comprehensive income.",
      "It is recognised immediately in retained earnings."
    ],
    answer:1,
    why:"There is <b>no deferred gain account</b> under PFRS 16. The ROU asset is carried at P800,000 rather than the P1,200,000 the retained right is worth, so depreciation is P80,000 a year lower for five years. The gain on the retained portion emerges as <b>reduced expense</b>, never as income."
  }
}
],

flashcards: [
  {f:"What is the FIRST question in any sale and leaseback?", b:"Whether the transfer is a <b>sale under PFRS 15</b> - has the buyer-lessor obtained <b>control</b>? The two answers give completely different accounting."},
  {f:"Name three circumstances suggesting control has NOT passed.", b:"A <b>substantive repurchase option</b> held by the seller-lessee; a leaseback for <b>substantially all</b> the remaining economic life; a transaction that is in substance a <b>borrowing secured on the asset</b>."},
  {f:"How does the SELLER-LESSEE account for a transfer that is NOT a sale?", b:"It <b>continues to recognise the asset</b> and recognises a <b>financial liability equal to the transfer proceeds</b> under PFRS 9. <b>No gain</b> is recognised - nothing was sold."},
  {f:"How does the BUYER-LESSOR account for a transfer that is not a sale?", b:"It does <b>not</b> recognise the asset. It recognises a <b>financial asset</b> equal to the transfer proceeds under PFRS 9."},
  {f:"State the ROU asset formula in a sale and leaseback.", b:"<b>ROU asset = carrying amount x (right retained / fair value of the asset)</b>, where the right retained is measured by the lease liability."},
  {f:"State the gain formula in a sale and leaseback.", b:"<b>Gain recognised = total gain x [(fair value - right retained) / fair value]</b>. Only the gain on the <b>rights transferred</b> is recognised."},
  {f:"Why is only part of the gain recognised?", b:"The seller-lessee did not dispose of the whole asset - it <b>kept</b> the right to use it for the leaseback term. The gain on that retained portion is absorbed into the ROU asset and emerges as <b>lower depreciation</b>."},
  {f:"Selling price ABOVE fair value - what is the excess, and what is done with it?", b:"<b>Additional financing</b> provided by the buyer-lessor. It is <b>deducted</b> from the lease liability in establishing the right retained, and the gain is computed against <b>fair value</b>, not the price received."},
  {f:"Selling price BELOW fair value - what is the difference, and what is done with it?", b:"A <b>prepayment of lease payments</b>. It is <b>added</b> to the lease liability in establishing the right retained, making the ROU asset larger and the recognised gain smaller."},
  {f:"How is the adjustment for an off-market price measured?", b:"On the <b>more readily determinable</b> of: the difference between the fair value of the consideration and the fair value of the asset; and the difference between the PV of the contractual lease payments and the PV of payments at market rates."},
  {f:"What gap did the 2022 amendment to PFRS 16 close?", b:"<b>Subsequent</b> measurement where leaseback payments are <b>variable and not index-linked</b>. Under the original rules those payments fell out of the liability, producing a gain on the <b>retained</b> right of use - contrary to paragraph 100."},
  {f:"What does paragraph 102A require, and from when?", b:"The seller-lessee determines the lease payments so that <b>no gain or loss relating to the retained right of use is recognised</b>. Effective for annual periods beginning on or after <b>1 January 2024</b>."},
  {f:"How does the buyer-lessor account for a transfer that IS a sale?", b:"It accounts for the <b>purchase</b> under the applicable standard for that asset, and for the <b>lease</b> under the ordinary lessor requirements - classifying it as finance or operating in the usual way. No special rule applies."}
],

quiz: [
  {q:"The first step in accounting for a sale and leaseback is to:",
   c:["Compute the right-of-use asset","Determine whether the transfer is a sale under PFRS 15","Measure the gain on sale","Classify the leaseback as finance or operating"],
   a:1, why:"PFRS 16.99 requires the PFRS 15 control test first. If there is no sale, the ROU asset formula never applies at all - the transaction is a secured borrowing.", tos:"H.1.4 Sale test"},

  {q:"An entity transfers a building for P10,000,000 and leases it back for substantially all its remaining economic life. The seller-lessee:",
   c:["Derecognises the building and recognises the full gain","Derecognises the building and recognises a partial gain","Keeps the building on its books and recognises a financial liability of P10,000,000","Recognises a right-of-use asset equal to fair value"],
   a:2, why:"A leaseback for substantially all the remaining life means control never passed, so there is no sale. The asset stays on the books and a financial liability of P10,000,000 is recognised under PFRS 9. The substance is a secured loan.", tos:"H.1.4 Sale test"},

  {q:"Where a transfer is NOT a sale, the buyer-lessor recognises:",
   c:["The underlying asset","A financial asset equal to the transfer proceeds","A net investment in the lease","Nothing at all"],
   a:1, why:"Mirroring the seller-lessee's financial liability, the buyer-lessor recognises a financial asset under PFRS 9 and does not recognise the underlying asset, because it never obtained control of it.", tos:"H.1.4 Sale test"},

  {q:"An asset with a carrying amount of P5,000,000 and fair value of P6,000,000 is sold at fair value and leased back; the lease liability is P2,400,000. The right-of-use asset is:",
   c:["P2,000,000","P2,400,000","P5,000,000","P3,000,000"],
   a:0, why:"P5,000,000 x (P2,400,000 / P6,000,000) = P2,000,000. The ROU asset is a proportion of the OLD CARRYING AMOUNT - never the lease liability itself and never a fair value figure.", tos:"H.1.4 Measurement"},

  {q:"Using those facts, how much gain is recognised?",
   c:["P400,000","P600,000","P1,000,000","Nil"],
   a:1, why:"Total gain P1,000,000 x [(6,000,000 - 2,400,000)/6,000,000] = P1,000,000 x 60% = P600,000. The remaining P400,000 relates to the retained right of use and is absorbed into the ROU asset.", tos:"H.1.4 Measurement"},

  {q:"An asset with a fair value of P3,000,000 is sold for P3,400,000; the PV of leaseback payments is P1,700,000. The right retained used in the proportion is:",
   c:["P1,700,000","P1,300,000","P2,100,000","P400,000"],
   a:1, why:"The P400,000 excess over fair value is additional financing, not sale proceeds, so it is DEDUCTED: P1,700,000 - P400,000 = P1,300,000. The gain is computed against fair value of P3,000,000, not the P3,400,000 received.", tos:"H.1.4 Off-market price"},

  {q:"An asset with a fair value of P3,000,000 is sold for P2,700,000; the PV of leaseback payments is P1,300,000. The right retained is:",
   c:["P1,300,000","P1,000,000","P1,600,000","P2,700,000"],
   a:2, why:"The P300,000 shortfall against fair value is a PREPAYMENT of lease payments, so it is ADDED: P1,300,000 + P300,000 = P1,600,000. Selling cheap means the seller-lessee retained more of the asset.", tos:"H.1.4 Off-market price"},

  {q:"Selling below fair value has what effect on the recognised gain, compared with selling at fair value?",
   c:["A larger gain, because the right retained is smaller","A smaller gain, because the right retained is larger","No effect on the gain","The gain becomes a loss"],
   a:1, why:"The shortfall is added to the right retained, so a larger proportion of the asset is treated as kept. The ROU asset is larger and the proportion transferred - and hence the recognised gain - is smaller.", tos:"H.1.4 Off-market price"},

  {q:"The 2022 amendment to PFRS 16, effective 1 January 2024, addresses:",
   c:["Whether a transfer is a sale","Subsequent measurement of the lease liability where leaseback payments are variable and not index-linked","The buyer-lessor's classification of the leaseback","The definition of fair value"],
   a:1, why:"The original standard covered only initial measurement. Where payments were variable and not index-linked, subsequent measurement under the ordinary rules produced a gain on the RETAINED right of use, contrary to paragraph 100. Paragraph 102A requires payments to be determined so that no such gain arises.", tos:"H.1.4 2024 amendment"},

  {q:"Where the transfer IS a sale, the buyer-lessor:",
   c:["Recognises a financial asset under PFRS 9","Accounts for the purchase under the applicable standard and for the lease under the ordinary lessor requirements","Always treats the leaseback as a finance lease","Recognises no asset"],
   a:1, why:"No special rule applies to the buyer-lessor when there is a sale: it buys an asset and grants a lease, classifying that lease as finance or operating in the ordinary way. Only the seller-lessee's accounting is modified by the sale and leaseback rules.", tos:"H.1.4 Buyer-lessor"}
]
});
