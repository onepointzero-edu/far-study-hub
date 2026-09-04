/* CPALE 2029 TOS - H.2 Accounting for Income Tax (PAS 12 / IAS 12)
   Two chapters sharing the group "Accounting for Income Tax".

   Written against the standard as currently in force, including:
     - IAS 12.7-8 formal tax base definitions, and the rule for revenue
       received in advance.
     - Deferred Tax related to Assets and Liabilities arising from a Single
       Transaction (2021 amendment, effective 1 January 2023): the initial
       recognition exemption no longer applies where equal taxable and
       deductible temporary differences arise - so a lessee DOES recognise
       deferred tax on the right-of-use asset and lease liability.
     - International Tax Reform - Pillar Two Model Rules (2023 amendment):
       mandatory temporary exception plus disclosure.
     - IAS 12.51-53: rates, manner of expected recovery, and the prohibition
       on discounting.
   Philippine context: RCIT 25% (20% for qualifying MSME domestic corporations)
   under CREATE as amended; NOLCO carried over three consecutive taxable years. */

var TAX_GROUP = "Accounting for Income Tax";

/* ==================================================================
   1. DIFFERENCES, TAX BASE AND RECOGNITION
   ================================================================== */
FARHub.addChapter({
  id: "h2a-deferred-tax-concepts",
  code: "H.2.1-2.3",
  group: TAX_GROUP,
  title: "Differences, Tax Base and Recognition",
  blurb: "Two rulebooks compute profit for the same year. Which gaps close and which never do decides whether deferred tax arises at all.",
  minutes: 80,
  outcomes: [
    "Measure accounting profit and taxable profit and reconcile one to the other.",
    "Distinguish permanent from temporary differences.",
    "Determine the tax base of an asset and of a liability, including revenue received in advance.",
    "Apply the recognition rules and exceptions for deferred tax liabilities and assets.",
    "Recognise deferred tax on unused tax losses and credits.",
    "Apply the amended initial recognition exemption to leases and decommissioning obligations."
  ],

  sections: [
{
  id: "acct-vs-taxable",
  title: "Accounting Income versus Taxable Income",
  blocks: [
    {t:"p", html:"Two authorities compute profit for the same entity, for the same year, using different rulebooks. The whole of PAS 12 exists to account for the gap between their answers."},
    {t:"table",
      head:["","Accounting income","Taxable income"],
      rows:[
        ["<b>Nature</b>","Financial or pre-tax income - net income <b>before</b> deducting income tax expense","Income determined under the rules of the taxation authorities, on which income tax is payable"],
        ["<b>Where reported</b>","The <b>income statement</b>","The <b>income tax return</b>"],
        ["<b>Rules used</b>","Financial reporting standards (<b>PFRS</b>)","BIR tax laws (the <b>Tax Code</b>)"],
        ["<b>Formula</b>","Revenues less expenses","Taxable revenues less allowable deductions"]
      ]},
    {t:"note", html:"<b>Taxable revenues</b> are those subject to the graduated income tax. Revenue already taxed at source - income subject to <b>final tax</b> - or exempt is excluded, because taxing it again would tax it twice."},
    {t:"note", html:"<b>Philippine rates, as context for the examples.</b> Under the Tax Code as amended by CREATE, the regular corporate income tax is <b>25%</b>, with <b>20%</b> for a domestic corporation whose net taxable income does not exceed P5,000,000 and whose total assets excluding land and buildings do not exceed P100,000,000. Older reviewers and handouts still use 30%, the pre-CREATE rate. <b>Examination problems normally state the rate</b>, and you should use whatever the problem gives - but do not assume 30% when a problem is silent."},
    {t:"h", html:"Two classes of difference, and only two"},
    {t:"ol", items:[
      "<b>Permanent differences</b> - never appear in the other computation.",
      "<b>Temporary differences</b> - appear in both, at different times."
    ]},
    {t:"p", html:"Sorting each item into one of the two is the first and most consequential step in every problem, because <b>only temporary differences create deferred tax</b>."}
  ],
  check:{
    q:"An entity earns interest income on government bonds that has already been subjected to final withholding tax. In computing taxable income this interest is:",
    choices:[
      "Included as a taxable revenue, with a credit for the tax withheld.",
      "Excluded - it is not a taxable revenue for this purpose, having been taxed at source.",
      "Included at half its amount.",
      "Excluded, and it gives rise to a deferred tax asset."
    ],
    answer:1,
    why:"Income already subjected to <b>final tax</b> is not a taxable revenue under the graduated rates. It is <b>deducted</b> from accounting income as a non-taxable item and, as the next part shows, it is a <b>permanent</b> difference - so no deferred tax arises."
  }
},
{
  id: "permanent",
  title: "Permanent Differences",
  blocks: [
    {t:"p", html:"A <b>permanent difference</b> is an income or expense item included in <b>either</b> accounting income <b>or</b> taxable income, but which will <b>never</b> be included in the other."},
    {t:"note", html:"<b>The defining consequence: permanent differences give rise to neither a deferred tax asset nor a deferred tax liability.</b> Nothing reverses, so there is nothing to defer. They change the tax payable permanently, and that is all. They also change the <b>effective tax rate</b>, which is why a reconciliation of the effective rate to the statutory rate is a required disclosure."},
    {t:"h", html:"Non-taxable income"},
    {t:"ul", items:[
      "Interest on time and savings deposits, government bonds, treasury bills and municipal bonds",
      "Gains subject to <b>capital gains tax</b>",
      "Dividends received by a domestic corporation from a domestic corporation",
      "Proceeds of <b>life insurance</b> on officers and employees where the entity is the beneficiary"
    ]},
    {t:"h", html:"Non-deductible expenses"},
    {t:"ul", items:[
      "Life insurance <b>premiums</b> where the entity is the beneficiary",
      "<b>Fines, penalties and surcharges</b> for violations of law",
      "Charitable contributions <b>in excess of the tax limitation</b>",
      "Expenses on which the required withholding tax was not withheld and remitted"
    ]},
    {t:"note", html:"<b>The life insurance symmetry.</b> Where the <b>entity</b> is the beneficiary, the premium is <b>not deductible</b> and the eventual proceeds are <b>not taxable</b> - the tax system declines to engage in either direction. Where the <b>employee's family</b> is the beneficiary, the premium is ordinary deductible compensation."},
    {t:"example", title:"Illustrative example 1 - sorting the items", blocks:[
      {t:"p", html:"Mitsuha Company reports accounting income of P1,000,000 and discloses the following:"},
      {t:"table",
        head:["Item","Classification","Effect on income subject to tax"],
        rows:[
          ["P10,000 fine for violating environmental regulations","<b>Permanent</b> - non-deductible","Add 10,000"],
          ["P5,000 interest income from government bonds","<b>Permanent</b> - non-taxable","Deduct 5,000"],
          ["P25,000 life insurance premium, entity the beneficiary","<b>Permanent</b> - non-deductible","Add 25,000"],
          ["P50,000 dividends from a domestic corporation","<b>Permanent</b> - non-taxable","Deduct 50,000"],
          ["P10,000 interest income from a bank deposit","<b>Permanent</b> - final tax already paid","Deduct 10,000"],
          ["Depreciation P50,000 accounting, P100,000 tax","<b>Temporary</b> - FTA","Deduct 50,000 (temporary)"],
          ["P80,000 advance collection from a customer","<b>Temporary</b> - FDA","Add 80,000 (temporary)"],
          ["P100,000 rent paid in advance for two years","<b>Temporary</b> - FTA","Deduct 50,000 (temporary)"]
        ]},
      {t:"p", html:"<b>Income subject to tax</b> = 1,000,000 + 10,000 - 5,000 + 25,000 - 50,000 - 10,000 = <b>P970,000</b>. Only after that line do the temporary differences come into play."}
    ]}
  ],
  check:{
    q:"Which of these creates a PERMANENT difference?",
    choices:[
      "Depreciation of P50,000 for accounting and P100,000 for tax on the same asset.",
      "A P40,000 surcharge for late filing of a tax return.",
      "A P500,000 warranty provision of which P100,000 has been paid.",
      "Rent of P300,000 paid in advance covering three years."
    ],
    answer:1,
    why:"A fine, penalty or surcharge is <b>never</b> deductible in any period, so nothing reverses and no deferred tax arises. The other three each originate now and reverse later, making them <b>temporary</b>."
  }
},
{
  id: "temporary",
  title: "Temporary Differences",
  blocks: [
    {t:"p", html:"A <b>temporary difference</b> is a difference between the <b>carrying amount</b> of an asset or liability and its <b>tax base</b>. Because the item eventually enters both computations, the timing gap is a genuine future tax consequence - so it <b>does</b> give rise to deferred tax."},
    {t:"table",
      head:["","Taxable temporary difference","Deductible temporary difference"],
      rows:[
        ["<b>Abbreviation</b>","TTD","DTD"],
        ["<b>Produces</b>","A <b>future taxable amount (FTA)</b>","A <b>future deductible amount (FDA)</b>"],
        ["<b>Gives rise to</b>","A <b>deferred tax liability</b>","A <b>deferred tax asset</b>"],
        ["<b>In the origination year</b>","Accounting income <b>exceeds</b> taxable income","Accounting income is <b>less than</b> taxable income"]
      ]},
    {t:"note", html:"<b>Read the direction, not the word 'income' or 'expense'.</b> A deduction taken <i>earlier</i> for tax than for accounting cuts tax now and raises it later - a future taxable amount, so a <b>liability</b>. An expense recognised <i>earlier</i> for accounting than for tax raises tax now and cuts it later - a future deductible amount, so an <b>asset</b>."},
    {t:"h", html:"Timing differences are a subset"},
    {t:"p", html:"Every <b>timing</b> difference - one that passes through profit in one period and through the tax return in another - is a temporary difference. But not every temporary difference is a timing difference. A <b>revaluation surplus</b>, or fair values assigned in a business combination, changes the carrying amount without ever touching profit. This is why PAS 12 works from carrying amounts and tax bases rather than from income and expense."},
    {t:"example", title:"Illustrative example 2 - identifying the direction", blocks:[
      {t:"p", html:"King Company, 2030. For each item compare the accounting amount with the tax amount:"},
      {t:"table",
        head:["Item","Accounting","Tax","FTA","FDA"],
        rows:[
          ["Income - goods ordered P300,000, 60% collected","300,000","180,000","120,000",""],
          ["Income - advance collection P120,000, 75% delivered","90,000","120,000","","30,000"],
          ["Expense - depreciation, straight line vs double declining","250,000","500,000","250,000",""],
          ["Expense - advertising P90,000 amortised over 3 years","30,000","90,000","60,000",""],
          ["Expense - warranty provision P500,000, 20% claimed","500,000","100,000","","400,000"],
          ["Expense - doubtful accounts 5% of P2,300,000, P25,000 written off","115,000","25,000","","90,000"],
          ["<b>Totals</b>","","","<b>430,000</b>","<b>520,000</b>"]
        ]},
      {t:"p", html:"At a 25% rate this produces a <b>deferred tax liability of P107,500</b> and a <b>deferred tax asset of P130,000</b>."}
    ]}
  ],
  check:{
    q:"An entity accrues warranty expense of P600,000 but has paid, and may deduct, only P200,000. This produces:",
    choices:[
      "A future taxable amount of P400,000 and a deferred tax liability.",
      "A future deductible amount of P400,000 and a deferred tax asset.",
      "A permanent difference of P400,000.",
      "A future deductible amount of P600,000 and a deferred tax asset."
    ],
    answer:1,
    why:"The accounting expense exceeds the tax deduction by <b>P400,000</b>, deductible in a later period when the warranty is paid - a <b>future deductible amount</b>, so a <b>deferred tax asset</b>. Taxable income is higher than accounting income now and lower later."
  }
},
{
  id: "tax-base",
  title: "The Tax Base - the Formal Definitions",
  blocks: [
    {t:"p", html:"The <b>tax base</b> of an asset or liability is the amount attributed to it <b>for tax purposes</b>. PAS 12 defines each separately, and getting the liability definition right is where most candidates lose marks."},
    {t:"table",
      head:["","Definition"],
      rows:[
        ["<b>Tax base of an ASSET</b>","The amount that will be <b>deductible for tax purposes</b> against taxable economic benefits flowing to the entity when it recovers the carrying amount"],
        ["<b>Tax base of a LIABILITY</b>","Its <b>carrying amount less any amount deductible for tax purposes</b> in respect of that liability in future periods"],
        ["<b>Revenue received in advance</b>","The carrying amount <b>less any amount of the revenue that will not be taxable</b> in future periods"]
      ]},
    {t:"note", html:"<b>Read the liability definition slowly.</b> Start at the carrying amount and <b>subtract what you will still get to deduct</b>. A warranty provision of P500,000 that will be fully deductible when paid has a tax base of 500,000 - 500,000 = <b>nil</b>. A trade payable of P500,000 for goods already deducted has nothing left to deduct, so its tax base is <b>P500,000</b> - equal to its carrying amount, and no temporary difference arises."},
    {t:"h", html:"Revenue received in advance"},
    {t:"p", html:"Where rent or interest is <b>taxed on receipt</b>, none of it will be taxable in future periods, so the tax base of the liability is its carrying amount less the whole of it - <b>nil</b>. The liability's carrying amount then exceeds its tax base, which for a liability is a <b>deductible</b> temporary difference giving a deferred tax asset."},
    {t:"h", html:"Items with no tax base"},
    {t:"p", html:"Some items have <b>no tax base at all</b>. A dividend receivable from a subsidiary that is not taxable has a tax base equal to its carrying amount, so no temporary difference arises. Where an item is recognised for accounting but the tax authority ignores it entirely, the tax base is <b>nil</b>."},
    {t:"table",
      head:["","Asset","Liability"],
      rows:[
        ["<b>Carrying amount &gt; tax base</b>","Taxable TD &rarr; <b>DTL</b>","Deductible TD &rarr; <b>DTA</b>"],
        ["<b>Carrying amount &lt; tax base</b>","Deductible TD &rarr; <b>DTA</b>","Taxable TD &rarr; <b>DTL</b>"]
      ]},
    {t:"p", html:"The liability row is the <b>mirror image</b> of the asset row. Secure the asset rule and read the liability rule backwards from it."},
    {t:"example", title:"Illustrative example 3 - computing tax bases", blocks:[
      {t:"table",
        head:["Item","Carrying amount","Reasoning","Tax base","Difference"],
        rows:[
          ["Equipment: cost 10,000,000, accounting depreciation 2,000,000, tax depreciation 3,200,000","8,000,000","Still deductible in future: 10,000,000 - 3,200,000","6,800,000","TTD 1,200,000 &rarr; <b>DTL</b>"],
          ["Inventory carried after a 2,000,000 obsolescence provision the BIR disallows","4,000,000","The provision is ignored for tax","6,000,000","DTD 2,000,000 &rarr; <b>DTA</b>"],
          ["Trade receivables net of a 1,000,000 allowance not yet allowed","3,000,000","The allowance is ignored until write-off","4,000,000","DTD 1,000,000 &rarr; <b>DTA</b>"],
          ["Warranty provision, deductible when paid","500,000","500,000 - 500,000 still deductible","nil","DTD 500,000 &rarr; <b>DTA</b>"],
          ["Rent received in advance, taxed on receipt","600,000","600,000 - 600,000 not taxable in future","nil","DTD 600,000 &rarr; <b>DTA</b>"],
          ["Trade payables for goods already deducted","6,000,000","Nothing left to deduct","6,000,000","<b>None</b>"],
          ["Cash","2,000,000","","2,000,000","<b>None</b>"]
        ]},
      {t:"note", html:"Note the last two lines. <b>Do not compute deferred tax on every line of a balance sheet</b> - only the divergences matter, and most ordinary payables and cash produce nothing at all."}
    ]}
  ],
  check:{
    q:"A liability for rent received in advance has a carrying amount of P600,000. The rent was taxed when received. What is its tax base, and what does it produce?",
    choices:[
      "Tax base P600,000; no temporary difference.",
      "Tax base nil; a deductible temporary difference giving a deferred tax asset.",
      "Tax base nil; a taxable temporary difference giving a deferred tax liability.",
      "Tax base P600,000; a deferred tax liability."
    ],
    answer:1,
    why:"For revenue received in advance the tax base is the carrying amount <b>less any amount not taxable in future periods</b>. It was taxed on receipt, so none of it is taxable in future and the tax base is <b>nil</b>. For a <b>liability</b>, carrying amount above tax base is a <b>deductible</b> temporary difference - a deferred tax <b>asset</b>."
  }
},
{
  id: "dtl",
  title: "The Deferred Tax Liability",
  blocks: [
    {t:"p", html:"A <b>deferred tax liability</b> is the amount of income tax <b>payable in future periods</b> in respect of a taxable temporary difference."},
    {t:"h", html:"Recognition"},
    {t:"p", html:"A DTL is recognised for <b>all</b> taxable temporary differences, with <b>no probability test</b> - <b>except</b> where the difference arises from:"},
    {t:"ol", items:[
      "The initial recognition of <b>goodwill</b>;",
      "The <b>initial recognition</b> of an asset or liability in a transaction that is <b>not</b> a business combination and affects <b>neither</b> accounting profit nor taxable profit <b>and</b> does not give rise to equal taxable and deductible temporary differences; or",
      "<b>Undistributed profits</b> of subsidiaries, associates, branches and joint arrangements, where the parent or investor can <b>control the timing</b> of the reversal <b>and</b> reversal is <b>not probable</b> in the foreseeable future."
    ]},
    {t:"note", html:"<b>The goodwill exception exists to avoid circularity.</b> Recognising a DTL on goodwill would increase goodwill, which would increase the liability, without end. The standard cuts the loop by prohibiting recognition."},
    {t:"note", html:"<b>The italicised words in exception 2 are new.</b> The 2021 amendment, effective 1 January 2023, added the condition that the transaction must not give rise to <b>equal</b> taxable and deductible temporary differences. That change is what brings leases and decommissioning obligations into deferred tax, and it is dealt with in its own part later in this chapter."},
    {t:"h", html:"Non-timing differences that still create a DTL"},
    {t:"ul", items:[
      "An asset is <b>revalued upward</b> with no equivalent tax adjustment.",
      "The carrying amount of an investment in a subsidiary, associate or joint venture <b>exceeds</b> its tax base through undistributed income.",
      "Fair values assigned to identifiable assets in a <b>business combination</b> with no equivalent tax adjustment."
    ]}
  ],
  check:{
    q:"An entity recognises goodwill of P5,000,000 in a business combination; the goodwill is not deductible for tax. What deferred tax arises on the goodwill?",
    choices:[
      "A deferred tax liability at the enacted rate.",
      "A deferred tax asset at the enacted rate.",
      "None - recognition is prohibited.",
      "A deferred tax liability, but only on impairment."
    ],
    answer:2,
    why:"Recognition on the initial recognition of goodwill is <b>prohibited</b>. Recognising a liability would increase goodwill, which would increase the liability again, without limit. The standard breaks the circularity outright."
  }
},
{
  id: "dta",
  title: "The Deferred Tax Asset",
  blocks: [
    {t:"p", html:"A <b>deferred tax asset</b> is the amount of income tax <b>recoverable in future periods</b> in respect of deductible temporary differences, <b>unused tax losses</b> and <b>unused tax credits</b>."},
    {t:"h", html:"Recognition - and the condition attached"},
    {t:"p", html:"A DTA is recognised <b>to the extent that it is probable that taxable profit will be available</b> against which the deductible temporary difference can be utilised."},
    {t:"note", html:"<b>This is the asymmetry at the heart of PAS 12.</b> A deferred tax <b>liability</b> is recognised for all taxable temporary differences with no probability test - the tax authority will collect regardless. A deferred tax <b>asset</b> requires probable future taxable profit, because a future deduction is worth nothing to an entity that never earns taxable profit again. This is prudence in the Conceptual Framework sense: caution under uncertainty, <b>not</b> deliberate understatement."},
    {t:"h", html:"What counts as evidence of probable taxable profit"},
    {t:"ol", items:[
      "Sufficient <b>taxable temporary differences</b> relating to the same taxation authority and the same entity, expected to reverse in the same period;",
      "It is probable the entity will have <b>taxable profit</b> in the periods in which the deduction can be utilised; or",
      "<b>Tax planning opportunities</b> are available that will create taxable profit in the appropriate period."
    ]},
    {t:"note", html:"Point 1 is worth dwelling on. An entity with a large DTL reversing in the same periods has, in effect, a ready source of taxable profit to absorb its deductions. That is why the DTA and DTL are assessed together rather than in isolation."},
    {t:"h", html:"Reassessment"},
    {t:"p", html:"The carrying amount of a DTA is <b>reviewed at each reporting date</b>. It is <b>reduced</b> to the extent it is no longer probable that sufficient taxable profit will be available, and any such reduction is <b>reversed</b> if it later becomes probable again. An <b>unrecognised</b> DTA is also reassessed at each reporting date and recognised to the extent it has become probable."},
    {t:"h", html:"Non-timing differences that create a DTA"},
    {t:"ul", items:[
      "An asset is <b>revalued downward</b> with no equivalent tax adjustment.",
      "The tax base of an investment in a subsidiary, associate or joint venture <b>exceeds</b> its carrying amount through <b>continuing losses</b>.",
      "A financial asset is carried at <b>fair value below cost</b> with no equivalent tax adjustment."
    ]}
  ],
  check:{
    q:"An entity has a P3,000,000 deductible temporary difference, has made losses for five years, and expects to continue doing so. It has no taxable temporary differences. What does it recognise?",
    choices:[
      "A deferred tax asset in full.",
      "No deferred tax asset - future taxable profit is not probable.",
      "A deferred tax liability instead.",
      "A deferred tax asset, disclosed only in the notes."
    ],
    answer:1,
    why:"A DTA is recognised only <b>to the extent that taxable profit is probable</b>. With sustained losses, no taxable temporary differences to absorb the deduction, and no tax planning opportunity, that test fails. The position is <b>reassessed at each reporting date</b> and the asset recognised later if it becomes probable."
  }
},
{
  id: "tax-losses",
  title: "Unused Tax Losses and Tax Credits",
  blocks: [
    {t:"p", html:"A deferred tax asset is recognised for the carryforward of <b>unused tax losses</b> and <b>unused tax credits</b> to the extent it is probable that <b>future taxable profit will be available</b> against which they can be utilised."},
    {t:"note", html:"<b>The standard applies a stricter eye here.</b> The very existence of unused tax losses is <b>strong evidence</b> that future taxable profit may not be available. So where an entity has a history of recent losses, it recognises a DTA <b>only to the extent</b> it has sufficient taxable temporary differences, or there is <b>convincing other evidence</b> that sufficient taxable profit will be available."},
    {t:"h", html:"The criteria the entity must consider"},
    {t:"ol", items:[
      "Whether the entity has sufficient <b>taxable temporary differences</b> relating to the same authority which will reverse in a period allowing the losses to be used;",
      "Whether it is <b>probable</b> the entity will have taxable profits <b>before the losses expire</b>;",
      "Whether the losses arise from <b>identifiable causes unlikely to recur</b>; and",
      "Whether <b>tax planning opportunities</b> are available."
    ]},
    {t:"note", html:"<b>Philippine context - NOLCO.</b> Under Section 34(D)(3) of the Tax Code, a net operating loss may be carried over as a deduction from gross income for the <b>next three consecutive taxable years</b>. Losses incurred in <b>2020 and 2021</b> were allowed a <b>five-year</b> carryover under RA 11494 and RR 25-2020, a relief now spent. The <b>expiry period matters directly to the accounting</b>: criterion 2 asks whether taxable profit is probable <i>before the losses expire</i>, so a three-year window is a real constraint on recognition."},
    {t:"example", title:"Illustrative example 4 - a loss year", blocks:[
      {t:"p", html:"An entity incurs a tax loss of <b>P4,000,000</b> in 2030 which may be carried forward three years. It has taxable temporary differences of <b>P1,600,000</b> reversing in 2031 and 2032. Management forecasts taxable profit but the forecast is not supported by convincing evidence. The rate is 25%."},
      {t:"table",
        head:["","Amount"],
        rows:[
          ["Unused tax loss","4,000,000"],
          ["Supported by taxable temporary differences reversing in time","1,600,000"],
          ["Not supported by convincing evidence","2,400,000"],
          ["<b>Deferred tax asset recognised</b> (1,600,000 x 25%)","<b>400,000</b>"],
          ["Deferred tax asset <b>not</b> recognised (2,400,000 x 25%)","600,000"]
        ]},
      {t:"p", html:"The unrecognised P600,000 is <b>disclosed</b>, together with the amount and expiry date of the unused losses, and is <b>reassessed at each reporting date</b>. Should the entity return to profitability in 2031 with convincing evidence, the asset is recognised then."}
    ]}
  ],
  check:{
    q:"An entity with a history of recent losses has P4,000,000 of unused tax losses and P1,600,000 of taxable temporary differences reversing within the carryforward period. At 25%, what deferred tax asset is recognised?",
    choices:["P1,000,000","P400,000","P600,000","Nil"],
    answer:1,
    why:"A history of recent losses is strong evidence that future taxable profit may not be available, so the DTA is recognised only to the extent of <b>sufficient taxable temporary differences</b> or convincing other evidence. P1,600,000 x 25% = <b>P400,000</b>. The unrecognised P600,000 is disclosed and reassessed each period."
  }
},
{
  id: "methods",
  title: "Two Methods, and Which the Standard Requires",
  blocks: [
    {t:"table",
      head:["","Income statement method","Balance sheet method"],
      rows:[
        ["<b>Focus</b>","<b>Timing differences</b> - differences in the periods in which items enter profit","<b>All temporary differences</b>"],
        ["<b>How amounts are found</b>","Comparing income and expense per book with per tax","Comparing the <b>carrying amount</b> of each asset and liability with its <b>tax base</b>"],
        ["<b>Status</b>","Superseded","<b>Required by PAS 12</b>"]
      ]},
    {t:"note", html:"<b>Why the distinction matters.</b> Every timing difference is a temporary difference, but not every temporary difference is a timing difference. A revaluation surplus, or fair values in a business combination, never passes through profit - so the income statement method cannot see it, while the balance sheet method catches it because carrying amount and tax base have diverged."},
    {t:"note", html:"<b>A practical consequence you must carry into every multi-year problem.</b> Under the balance sheet method you compute the <b>closing</b> deferred tax balances from the <b>cumulative</b> temporary differences at the reporting date. The <b>deferred tax expense or income for the year is the movement</b> in those balances, not a figure computed from the year's own originating differences.<br><br>Computing DTL and DTA directly from the year's FTA and FDA works <b>only</b> where there were no opening balances. Once a second year is in play - which is exactly what the comprehensive case in the next chapter does - it gives the wrong answer."}
  ],
  check:{
    q:"In the second year of a problem, how is the deferred tax expense determined under the balance sheet method?",
    choices:[
      "From the current year's originating temporary differences multiplied by the tax rate.",
      "As the movement between the opening and closing deferred tax balances, each computed from cumulative temporary differences.",
      "As the closing deferred tax liability only.",
      "It is the same as the current tax expense."
    ],
    answer:1,
    why:"Closing balances are computed from <b>cumulative</b> temporary differences at the reporting date; the expense or income for the year is the <b>movement</b> in the net position. Computing from the year's own originating differences works only in a first year with no opening balances."
  }
},
{
  id: "leases-amendment",
  title: "Deferred Tax on Leases and Decommissioning Obligations",
  blocks: [
    {t:"p", html:"This part connects directly to the Leases chapters, and it reflects an amendment many Philippine reviewers have not yet absorbed."},
    {t:"h", html:"The problem the IASB found"},
    {t:"p", html:"When a lessee recognises a right-of-use asset and a lease liability, and the tax authority gives relief on a <b>cash basis</b> as the rentals are paid, two temporary differences arise at once:"},
    {t:"ul", items:[
      "The <b>ROU asset</b> has a carrying amount but a tax base of <b>nil</b> - nothing is deductible in respect of the asset itself. Carrying amount above tax base on an asset is a <b>taxable</b> temporary difference.",
      "The <b>lease liability</b> has a carrying amount and a tax base of <b>nil</b> - the payments are deductible in future. Carrying amount above tax base on a liability is a <b>deductible</b> temporary difference."
    ]},
    {t:"p", html:"At commencement the two are <b>equal and offsetting</b>. Under the old wording of the initial recognition exemption, entities could argue no deferred tax should be recognised on either - and practice diverged."},
    {t:"note", html:"<b>Deferred Tax related to Assets and Liabilities arising from a Single Transaction</b> - amendments to PAS 12 issued in 2021 and <b>effective for annual periods beginning on or after 1 January 2023</b> - narrowed the initial recognition exemption so that it <b>no longer applies</b> where the transaction gives rise to <b>equal taxable and deductible temporary differences</b>.<br><br>The consequence: a lessee <b>must</b> recognise a <b>deferred tax asset</b> on the lease liability and a <b>deferred tax liability</b> on the right-of-use asset, and must present them <b>gross</b> rather than netting them off - subject to the ordinary offsetting criteria. The same applies to <b>decommissioning and restoration obligations</b> and their related assets."},
    {t:"example", title:"Illustrative example 5 - deferred tax on a lease", blocks:[
      {t:"p", html:"At commencement a lessee recognises a right-of-use asset of P3,000,000 and a lease liability of P3,000,000. Lease payments are deductible as paid; the tax rate is 25%."},
      {t:"table",
        head:["","Carrying amount","Tax base","Temporary difference","Deferred tax"],
        rows:[
          ["Right-of-use asset","3,000,000","nil","TTD 3,000,000","DTL 750,000"],
          ["Lease liability","3,000,000","nil","DTD 3,000,000","DTA 750,000"]
        ]},
      {t:"p", html:"At commencement the two are equal, so there is <b>no net effect on profit or loss</b>. They do <b>not</b> stay equal: the ROU asset depreciates on a straight line while the liability amortises on the effective interest method, so the balances diverge from year one and the deferred tax amounts diverge with them."},
      {t:"note", html:"That divergence is precisely the point. Because the lessee's total expense is <b>front-loaded</b> while the tax deduction follows the level cash rentals, the accounting and tax positions move apart during the lease and converge again at the end. Recognising both deferred tax balances is what makes that visible."}
    ]},
    {t:"note", html:"<b>One more current item, for completeness.</b> <b>International Tax Reform - Pillar Two Model Rules</b>, amendments to PAS 12 issued in 2023, introduce a <b>mandatory temporary exception</b> from recognising and disclosing deferred tax arising from the OECD Pillar Two global minimum tax rules, together with targeted disclosures. It affects only large multinational groups within the scope of those rules, and is unlikely to feature in a CPALE computational problem - but a candidate asked whether PAS 12 has been amended recently should know it exists."}
  ],
  check:{
    q:"Under the amended PAS 12, what deferred tax does a lessee recognise at the commencement of a lease where rentals are deductible as paid?",
    choices:[
      "None - the initial recognition exemption applies.",
      "A deferred tax liability on the right-of-use asset only.",
      "A deferred tax asset on the lease liability and a deferred tax liability on the right-of-use asset, recognised gross.",
      "A single net deferred tax asset."
    ],
    answer:2,
    why:"The 2021 amendment narrowed the exemption so it no longer applies where <b>equal</b> taxable and deductible temporary differences arise. The lessee recognises <b>both</b> - a DTA on the liability and a DTL on the asset - and presents them <b>gross</b>, subject to the ordinary offsetting criteria. They are equal only at commencement; they diverge thereafter."
  }
}
],

flashcards: [
  {f:"Distinguish accounting income from taxable income.", b:"<b>Accounting income</b> - pre-tax income in the <b>income statement</b>, computed under <b>PFRS</b>. <b>Taxable income</b> - in the <b>income tax return</b>, computed under the <b>Tax Code</b>."},
  {f:"What is the Philippine regular corporate income tax rate?", b:"<b>25%</b> under CREATE, with <b>20%</b> for a domestic corporation whose net taxable income does not exceed P5,000,000 and total assets excluding land and buildings do not exceed P100,000,000. Older handouts use the pre-CREATE 30%."},
  {f:"Define a permanent difference and state its consequence.", b:"An item included in <b>either</b> accounting or taxable income but <b>never</b> in the other. It gives rise to <b>no deferred tax</b>, but it does change the <b>effective tax rate</b>."},
  {f:"Name four items of non-taxable income.", b:"Interest on deposits, government bonds and treasury bills; gains subject to <b>capital gains tax</b>; <b>dividends</b> from a domestic corporation; <b>life insurance proceeds</b> where the entity is the beneficiary."},
  {f:"Name four non-deductible expenses.", b:"<b>Life insurance premiums</b> where the entity is beneficiary; <b>fines, penalties and surcharges</b>; charitable contributions <b>above the tax limitation</b>; expenses on which required withholding tax was not withheld."},
  {f:"Define a temporary difference.", b:"A difference between the <b>carrying amount</b> of an asset or liability and its <b>tax base</b>. It reverses in later periods, so it <b>does</b> give rise to deferred tax."},
  {f:"What does a taxable temporary difference produce?", b:"A <b>future taxable amount</b>, giving a <b>deferred tax liability</b>. In the origination year, accounting income <b>exceeds</b> taxable income."},
  {f:"What does a deductible temporary difference produce?", b:"A <b>future deductible amount</b>, giving a <b>deferred tax asset</b>. In the origination year, accounting income is <b>less than</b> taxable income."},
  {f:"Is every temporary difference a timing difference?", b:"<b>No.</b> Every timing difference is temporary, but a <b>revaluation surplus</b> or business-combination fair values change carrying amounts without touching profit - temporary but not timing."},
  {f:"Define the tax base of an ASSET.", b:"The amount that will be <b>deductible for tax purposes</b> against taxable economic benefits flowing to the entity when it recovers the carrying amount."},
  {f:"Define the tax base of a LIABILITY.", b:"Its <b>carrying amount less any amount deductible for tax purposes</b> in respect of that liability in future periods."},
  {f:"What is the tax base of revenue received in advance?", b:"The carrying amount <b>less any amount of the revenue that will not be taxable</b> in future periods. Where it was taxed on receipt, the tax base is <b>nil</b>."},
  {f:"What is the tax base of a warranty provision deductible when paid?", b:"<b>Nil</b> - carrying amount less the amount still deductible. Carrying amount above tax base on a liability is a <b>deductible</b> temporary difference, giving a <b>DTA</b>."},
  {f:"What is the tax base of trade payables for goods already deducted?", b:"<b>Equal to the carrying amount</b> - nothing remains deductible - so <b>no temporary difference</b> arises. Ordinary payables and cash usually produce nothing."},
  {f:"State the four carrying-amount versus tax-base outcomes.", b:"<b>Asset:</b> CA &gt; TB = DTL; CA &lt; TB = DTA. <b>Liability:</b> CA &gt; TB = DTA; CA &lt; TB = DTL. The liability row is the <b>mirror</b> of the asset row."},
  {f:"Define a deferred tax liability.", b:"Income tax <b>payable in future periods</b> in respect of a taxable temporary difference. Recognised for <b>all</b> taxable temporary differences, with <b>no probability test</b>."},
  {f:"State the three exceptions to recognising a deferred tax liability.", b:"(1) Initial recognition of <b>goodwill</b>; (2) <b>initial recognition</b> of an asset or liability outside a business combination affecting neither accounting nor taxable profit <b>and</b> not giving rise to equal taxable and deductible differences; (3) <b>undistributed profits</b> of subsidiaries and associates where the investor controls timing and reversal is not probable."},
  {f:"Why is no deferred tax recognised on goodwill?", b:"It would be <b>circular</b> - the liability increases goodwill, which increases the liability, without end. The standard prohibits recognition to break the loop."},
  {f:"Define a deferred tax asset and state its recognition condition.", b:"Income tax <b>recoverable in future periods</b> from deductible temporary differences, <b>unused tax losses</b> and <b>unused tax credits</b>. Recognised <b>to the extent that taxable profit is probable</b>."},
  {f:"What three sources of evidence support recognising a DTA?", b:"(1) Sufficient <b>taxable temporary differences</b> with the same authority reversing in the same period; (2) probable <b>taxable profit</b> in the relevant periods; (3) available <b>tax planning opportunities</b>."},
  {f:"How often is a deferred tax asset reassessed?", b:"At <b>each reporting date</b>. It is reduced where recovery is no longer probable, the reduction is reversed if it becomes probable again, and an <b>unrecognised</b> DTA is also reassessed and recognised if it becomes probable."},
  {f:"What extra caution applies to unused tax losses?", b:"Their existence is <b>strong evidence</b> that future taxable profit may not be available. Where there is a history of recent losses, a DTA is recognised only to the extent of <b>sufficient taxable temporary differences</b> or <b>convincing other evidence</b>."},
  {f:"State the Philippine NOLCO carryover period.", b:"<b>Three consecutive taxable years</b> under Section 34(D)(3) of the Tax Code. Losses of <b>2020 and 2021</b> had a five-year carryover under RA 11494, now spent. The expiry period constrains DTA recognition."},
  {f:"Which method does PAS 12 require, and why?", b:"The <b>balance sheet method</b>, because it captures <b>all</b> temporary differences - including revaluations and business-combination fair values that never pass through profit and so are invisible to the income statement method."},
  {f:"In a multi-year problem, how is deferred tax expense determined?", b:"As the <b>movement</b> between opening and closing deferred tax balances, each computed from <b>cumulative</b> temporary differences. Computing from the year's own originating differences works only where there are no opening balances."},
  {f:"What deferred tax does a lessee recognise on a lease?", b:"A <b>DTA on the lease liability</b> and a <b>DTL on the right-of-use asset</b>, recognised <b>gross</b>. Both have a tax base of nil where rentals are deductible as paid."},
  {f:"What did the 2021 amendment to PAS 12 change?", b:"It <b>narrowed the initial recognition exemption</b> so it no longer applies where a transaction gives rise to <b>equal taxable and deductible temporary differences</b> - bringing <b>leases</b> and <b>decommissioning obligations</b> into deferred tax. Effective <b>1 January 2023</b>."},
  {f:"Do the lease deferred tax balances stay equal?", b:"<b>Only at commencement.</b> The ROU asset depreciates straight-line while the liability amortises on the effective interest method, so they diverge through the lease and converge again at the end."},
  {f:"What is the Pillar Two amendment to PAS 12?", b:"A <b>mandatory temporary exception</b> from recognising and disclosing deferred tax arising from the OECD <b>Pillar Two</b> global minimum tax rules, with targeted disclosures. Issued 2023; affects large multinational groups only."}
],

quiz: [
  {q:"Which item is a PERMANENT difference?",
   c:["Warranty expense accrued but not yet paid","Interest income on government bonds subjected to final tax","Rent received in advance","Excess of tax depreciation over accounting depreciation"],
   a:1, why:"Interest already subjected to final tax never enters taxable income under the graduated rates, so the difference never reverses. The other three all reverse and are temporary.", tos:"H.2.1 Permanent differences"},

  {q:"Permanent differences give rise to:",
   c:["A deferred tax liability only","A deferred tax asset only","Neither, but they do change the effective tax rate","Either, depending on direction"],
   a:2, why:"Nothing reverses, so no deferred tax arises. They do change the effective tax rate, which is why a reconciliation of the effective to the statutory rate is a required disclosure.", tos:"H.2.1 Permanent differences"},

  {q:"The tax base of a LIABILITY is:",
   c:["The amount deductible against future taxable benefits","Its carrying amount less any amount deductible for tax in future periods","Always nil","Its carrying amount plus future deductions"],
   a:1, why:"Start at the carrying amount and subtract what remains deductible. A warranty provision fully deductible when paid therefore has a tax base of nil; a trade payable for goods already deducted has a tax base equal to its carrying amount.", tos:"H.2.3 Tax base"},

  {q:"Rent of P600,000 received in advance was taxed on receipt. Its tax base is:",
   c:["P600,000","Nil","P300,000","It has no tax base"],
   a:1, why:"For revenue received in advance the tax base is the carrying amount less any amount NOT taxable in future. Having been taxed on receipt, none of it is taxable in future, so the tax base is nil - producing a deductible temporary difference and a DTA.", tos:"H.2.3 Tax base"},

  {q:"Equipment costs P10,000,000; accounting depreciation to date is P2,000,000 and tax depreciation P3,200,000. The temporary difference is:",
   c:["A DTD of P1,200,000","A TTD of P1,200,000","A TTD of P1,200,000 only if the asset is sold","No difference arises"],
   a:1, why:"Carrying amount P8,000,000 exceeds the tax base of P6,800,000. For an ASSET, carrying amount above tax base is a TAXABLE temporary difference giving a deferred tax liability.", tos:"H.2.3 Tax base"},

  {q:"A LIABILITY has a carrying amount of P1,500,000 and a tax base of P900,000. This produces:",
   c:["A deferred tax liability","A deferred tax asset","No deferred tax","A permanent difference"],
   a:1, why:"For a LIABILITY the rule mirrors the asset rule: carrying amount ABOVE tax base is a deductible temporary difference, giving a deferred tax ASSET. This is the reversal candidates most often get backwards.", tos:"H.2.3 Tax base"},

  {q:"Which is an exception to recognising a deferred tax liability?",
   c:["Initial recognition of goodwill","Excess tax depreciation","Rent paid in advance","An upward revaluation with no tax adjustment"],
   a:0, why:"Recognition on the initial recognition of goodwill is prohibited because it would be circular. The other three are ordinary taxable temporary differences on which a DTL is recognised.", tos:"H.2.3 DTL recognition"},

  {q:"A deferred tax asset is recognised:",
   c:["For all deductible temporary differences without condition","To the extent that taxable profit is probable","Only where the entity is profitable in the current year","Only for unused tax losses"],
   a:1, why:"The probability test applies only to assets. A deferred tax LIABILITY is recognised for all taxable temporary differences with no such condition - the asymmetry at the heart of PAS 12.", tos:"H.2.3 DTA recognition"},

  {q:"Which is NOT evidence supporting recognition of a deferred tax asset?",
   c:["Sufficient taxable temporary differences with the same authority reversing in the same period","Probable taxable profit in the periods of utilisation","Available tax planning opportunities","A history of recent tax losses"],
   a:3, why:"A history of recent losses is evidence AGAINST recognition - the standard treats it as strong evidence that future taxable profit may not be available, restricting recognition to the extent of taxable temporary differences or convincing other evidence.", tos:"H.2.3 DTA recognition"},

  {q:"An entity has P4,000,000 of unused tax losses, a history of losses, and P1,600,000 of taxable temporary differences reversing within the carryforward period. At 25% the DTA recognised is:",
   c:["P1,000,000","P400,000","P600,000","Nil"],
   a:1, why:"Recognition is restricted to the extent of sufficient taxable temporary differences: P1,600,000 x 25% = P400,000. The unrecognised P600,000 is disclosed and reassessed at each reporting date.", tos:"H.2.3 Tax losses"},

  {q:"Under the Tax Code, a net operating loss may generally be carried over for:",
   c:["Three consecutive taxable years","Five consecutive taxable years","Indefinitely","One taxable year"],
   a:0, why:"Three consecutive taxable years under Section 34(D)(3). The five-year carryover applied only to losses incurred in 2020 and 2021 under RA 11494. The expiry window constrains DTA recognition, because taxable profit must be probable BEFORE the losses expire.", tos:"H.2.3 Tax losses"},

  {q:"How often is a deferred tax asset reassessed?",
   c:["Only when it is used","At each reporting date","Every three years","Only on a change in tax rate"],
   a:1, why:"At each reporting date. It is reduced if recovery is no longer probable, that reduction is reversed if it becomes probable again, and a previously UNRECOGNISED asset is also reassessed and recognised if it has become probable.", tos:"H.2.3 DTA recognition"},

  {q:"PAS 12 requires the balance sheet method because:",
   c:["It is simpler","It captures all temporary differences, including those never passing through profit","It avoids determining tax bases","It also captures permanent differences"],
   a:1, why:"Revaluations and business-combination fair values change carrying amounts without touching profit, so only a carrying amount versus tax base comparison detects them. Permanent differences remain excluded under either method.", tos:"H.2.3 Methods"},

  {q:"In year 2 of a problem, deferred tax expense equals:",
   c:["The year's originating differences times the rate","The movement between opening and closing deferred tax balances","The closing deferred tax liability","The current tax expense"],
   a:1, why:"Closing balances come from CUMULATIVE temporary differences; the expense is the movement in the net position. Computing from the year's own originating differences works only in a first year with no opening balances.", tos:"H.2.3 Methods"},

  {q:"Under the amended PAS 12, a lessee recognises on a lease at commencement:",
   c:["No deferred tax, under the initial recognition exemption","A DTL on the ROU asset and a DTA on the lease liability, gross","A single net DTA","A DTL on the lease liability only"],
   a:1, why:"The 2021 amendment narrowed the exemption so it no longer applies where equal taxable and deductible temporary differences arise. Both are recognised and presented gross, subject to the ordinary offsetting criteria.", tos:"H.2.3 Leases amendment"},

  {q:"The 2021 amendment to PAS 12 on a single transaction is effective for annual periods beginning on or after:",
   c:["1 January 2020","1 January 2023","1 January 2024","1 January 2026"],
   a:1, why:"1 January 2023, with earlier application permitted. It brings leases and decommissioning obligations into deferred tax, and is well in force for the 2029 examination.", tos:"H.2.3 Leases amendment"}
]
});

/* ==================================================================
   2. MEASUREMENT, COMPUTATION AND PRESENTATION
   ================================================================== */
FARHub.addChapter({
  id: "h2b-income-tax-computation",
  code: "H.2.2, H.2.4",
  group: TAX_GROUP,
  title: "Measurement, Computation and Presentation",
  blurb: "Which rate, in what order, and where it all appears - ending with one company's tax computed across two years, through a rate change, to the face of the statements.",
  minutes: 90,
  outcomes: [
    "Measure current and deferred tax at the correct rates, and explain why deferred tax is not discounted.",
    "Compute taxable income, current tax expense and total income tax expense.",
    "Compute deferred tax balances from carrying amounts and tax bases across successive years.",
    "Account for a change in the enacted tax rate.",
    "Present and disclose current and deferred tax, and apply the offsetting rules.",
    "Allocate tax within a period to items outside profit or loss."
  ],

  sections: [
{
  id: "measurement",
  title: "Measurement",
  blocks: [
    {t:"table",
      head:["","Measured at"],
      rows:[
        ["<b>Current tax</b>","The amount expected to be <b>paid to or recovered from</b> the taxation authorities, using tax rates and laws <b>enacted or substantively enacted</b> by the reporting date"],
        ["<b>Deferred tax</b>","The tax rates <b>expected to apply to the period when the asset is realised or the liability settled</b>, based on rates enacted or substantively enacted by the reporting date"]
      ]},
    {t:"h", html:"The manner of expected recovery"},
    {t:"p", html:"Deferred tax must reflect the tax consequences that <b>follow from the manner in which the entity expects to recover or settle</b> the carrying amount. Where different rates apply to different manners of recovery - use versus sale, ordinary income versus capital gains - the rate used depends on the entity's expectation."},
    {t:"note", html:"<b>A Philippine illustration.</b> Land held for use would be recovered through operations, but land sold attracts <b>capital gains tax</b> on the gross selling price rather than regular corporate income tax. The measurement therefore turns on whether recovery is expected through use or through sale - the same asset, two different tax consequences."},
    {t:"h", html:"Deferred tax is not discounted"},
    {t:"note", html:"<b>PAS 12 prohibits discounting deferred tax assets and liabilities.</b> The reason given is practical rather than conceptual: reliable discounting would require detailed scheduling of the timing of every reversal, which for many entities is impracticable, and permitting but not requiring it would destroy comparability. So a deferred tax liability reversing in fifteen years is carried at its <b>full undiscounted</b> amount - unlike almost every other long-term liability you will meet."},
    {t:"h", html:"A change in the tax rate"},
    {t:"p", html:"Where a new rate is <b>enacted or substantively enacted</b> by the reporting date, deferred tax balances are <b>remeasured</b> at the rate expected to apply when the differences reverse. The effect of the remeasurement is recognised <b>where the underlying deferred tax was originally recognised</b> - in profit or loss for most items, but in other comprehensive income or equity where the item itself went there."},
    {t:"example", title:"Illustrative example 1 - a rate change", blocks:[
      {t:"p", html:"At 31 December 2031 an entity has cumulative taxable temporary differences of P1,800,000 and deductible temporary differences of P500,000. The current rate is 25%, but a law enacted in December 2031 reduces the rate to <b>20% with effect from 2032</b>. All the differences reverse from 2032 onward."},
      {t:"table",
        head:["","At 25%","At 20% - correct"],
        rows:[
          ["Deferred tax liability","450,000","<b>360,000</b>"],
          ["Deferred tax asset","(125,000)","<b>(100,000)</b>"],
          ["<b>Net deferred tax liability</b>","<b>325,000</b>","<b>260,000</b>"]
        ]},
      {t:"p", html:"<b>Current</b> tax for 2031 is still computed at <b>25%</b>, because that is the rate enacted for 2031. Only the <b>deferred</b> balances move to 20%, because they reverse in 2032 and later."}
    ]}
  ],
  check:{
    q:"A law enacted in December 2031 cuts the tax rate from 25% to 20% from 2032. How are the 2031 current and deferred tax measured?",
    choices:[
      "Both at 25%.",
      "Both at 20%.",
      "Current tax at 25%; deferred tax balances remeasured at 20%.",
      "Current tax at 20%; deferred tax at 25%."
    ],
    answer:2,
    why:"Current tax uses the rate enacted <b>for the current period</b> - 25% for 2031. Deferred tax uses the rate expected to apply <b>when the differences reverse</b> - 20%, since they reverse from 2032. The remeasurement effect goes wherever the underlying deferred tax was recognised."
  }
},
{
  id: "procedure",
  title: "The Computation, Step by Step",
  blocks: [
    {t:"h", html:"Step 1 - reconcile to taxable income"},
    {t:"table",
      head:["",""],
      rows:[
        ["Accounting income","xx"],
        ["<i>Permanent differences:</i>",""],
        ["Less: non-taxable income","(xx)"],
        ["Add: non-deductible expenses","xx"],
        ["<b>Income subject to tax</b>","<b>xx</b>"],
        ["<i>Temporary differences:</i>",""],
        ["Less: future taxable amount originating","(xx)"],
        ["Add: future deductible amount originating","xx"],
        ["<b>Taxable income</b>","<b>xx</b>"]
      ]},
    {t:"note", html:"<b>Watch the signs.</b> Future <b>taxable</b> amounts are <b>deducted now</b> because they will be taxed later. Future <b>deductible</b> amounts are <b>added now</b> because the deduction comes later. Candidates who reason from the words rather than the direction reliably invert these."},
    {t:"h", html:"Steps 2 to 5"},
    {t:"ol", items:[
      "<b>Current tax expense</b> = taxable income x the <b>current</b> tax rate.",
      "<b>Closing deferred tax liability</b> = cumulative taxable temporary differences x the <b>enacted future</b> rate.",
      "<b>Closing deferred tax asset</b> = cumulative deductible temporary differences x the <b>enacted future</b> rate, subject to the probability test.",
      "<b>Total income tax expense</b> = current tax expense + the <b>movement</b> in the net deferred tax position."
    ]},
    {t:"note", html:"<b>A free check on your answer - and its limit.</b> Where the tax rate is <b>constant</b>, <b>total income tax expense = income subject to tax x the rate</b>. Temporary differences only move tax between periods and cannot change the total, so the two routes must agree.<br><br>The check <b>fails</b> where a <b>rate change</b> is enacted, because the deferred balances are remeasured at a different rate from the current tax. The gap between the two routes is then exactly the remeasurement effect - which makes the check a useful diagnostic even when it does not tie."},
    {t:"example", title:"Illustrative example 2 - a single year", blocks:[
      {t:"p", html:"Accounting income P9,000,000; interest on government bonds P700,000; life insurance premium, entity beneficiary P100,000; tax penalties P40,000; tax depreciation exceeds accounting by P1,300,000; rent paid in advance P400,000; provision for probable losses P100,000; warranty accrued P600,000 against P200,000 paid; advance collections P200,000. Rate 30%, not expected to change. There are no opening temporary differences."},
      {t:"table",
        head:["","Amount"],
        rows:[
          ["Accounting income","9,000,000"],
          ["Less: interest income on government bonds","(700,000)"],
          ["Add: life insurance premium","100,000"],
          ["Add: tax penalties and surcharges","40,000"],
          ["<b>Income subject to tax</b>","<b>8,440,000</b>"],
          ["Less: FTA - excess tax depreciation","(1,300,000)"],
          ["Less: FTA - rent paid in advance","(400,000)"],
          ["Add: FDA - provision for probable losses","100,000"],
          ["Add: FDA - warranty (600,000 - 200,000)","400,000"],
          ["Add: FDA - advance collections","200,000"],
          ["<b>Taxable income</b>","<b>7,440,000</b>"]
        ]},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Current income tax expense","7,440,000 x 30%","<b>2,232,000</b>"],
          ["Deferred tax liability","1,700,000 x 30%","510,000"],
          ["Deferred tax asset","700,000 x 30%","(210,000)"],
          ["Net deferred tax expense","","300,000"],
          ["<b>Total income tax expense</b>","2,232,000 + 300,000","<b>2,532,000</b>"]
        ]},
      {t:"p", html:"<b>Check:</b> P8,440,000 x 30% = <b>P2,532,000</b>. It ties, as it must at a constant rate."}
    ]}
  ],
  check:{
    q:"Accounting income is P5,000,000; non-taxable income P200,000; non-deductible expenses P300,000; originating future taxable amounts P600,000; originating future deductible amounts P400,000. Taxable income is:",
    choices:["P4,900,000","P5,100,000","P5,300,000","P4,700,000"],
    answer:0,
    why:"P5,000,000 - P200,000 + P300,000 = P5,100,000 income subject to tax; then - P600,000 + P400,000 = <b>P4,900,000</b>. Future <i>taxable</i> amounts are deducted now; future <i>deductible</i> amounts are added now."
  }
},
{
  id: "presentation",
  title: "Presentation, Offsetting and Disclosure",
  blocks: [
    {t:"table",
      head:["Item","Presentation"],
      rows:[
        ["Current tax liability / current tax asset","<b>Current</b> liability or asset"],
        ["Deferred tax liability / deferred tax asset","<b>Non-current</b>, always"]
      ]},
    {t:"note", html:"<b>Deferred tax is always non-current</b> - never split into current and non-current portions, however soon the underlying difference reverses. A straightforward classification rule, and a reliable source of easy marks."},
    {t:"h", html:"Offsetting current tax"},
    {t:"p", html:"Permitted <b>only if</b> the entity has a <b>legally enforceable right</b> to set off the recognised amounts <b>and</b> intends either to settle net or to realise the asset and settle the liability <b>simultaneously</b>."},
    {t:"h", html:"Offsetting deferred tax"},
    {t:"p", html:"<b>General rule: not allowed.</b> Permitted only where <b>both</b>:"},
    {t:"ol", items:[
      "The entity has a <b>legally enforceable right</b> to set off current tax assets against current tax liabilities; <b>and</b>",
      "The deferred tax amounts relate to income taxes levied by the <b>same taxation authority</b> on either the same taxable entity, or different entities intending to settle net."
    ]},
    {t:"note", html:"Both conditions must hold. Deferred tax under <b>different tax jurisdictions</b> can never be offset, because there is no single authority against whom a net position could ever be settled."},
    {t:"h", html:"The principal disclosures"},
    {t:"ul", items:[
      "The <b>major components</b> of tax expense - current tax, deferred tax, and adjustments for prior periods.",
      "A <b>reconciliation between tax expense and accounting profit multiplied by the statutory rate</b>, or a reconciliation of the average effective rate to the statutory rate. This is where permanent differences become visible to the reader.",
      "An explanation of <b>changes in the applicable tax rates</b>.",
      "The amount and, where applicable, the <b>expiry date</b> of deductible temporary differences and unused tax losses and credits for which <b>no deferred tax asset has been recognised</b>.",
      "The aggregate deferred tax relating to items charged or credited <b>directly to equity or to other comprehensive income</b>."
    ]}
  ],
  check:{
    q:"A deferred tax asset is expected to reverse in eight months. How is it presented?",
    choices:[
      "As a current asset.",
      "As a non-current asset.",
      "Split between current and non-current.",
      "Offset against the deferred tax liability automatically."
    ],
    answer:1,
    why:"Deferred tax is <b>always non-current</b>, whatever the expected reversal date - no current portion, no split. Offsetting is also not automatic: it requires the <b>same taxation authority</b> and a legally enforceable right to set off <b>current</b> tax."
  }
},
{
  id: "allocation",
  title: "Intraperiod and Interperiod Allocation",
  blocks: [
    {t:"h", html:"Intraperiod allocation - the tax follows the income"},
    {t:"p", html:"<b>Intraperiod</b> tax allocation is the allocation of income tax expense <b>within</b> a period, to the items that gave rise to it - continuing operations, discontinued operations, and prior period errors. The principle is that <b>the tax follows the income</b>."},
    {t:"h", html:"Tax recognised outside profit or loss"},
    {t:"p", html:"Income taxes are usually recognised in profit or loss. The exceptions:"},
    {t:"p", html:"<b>In other comprehensive income:</b>"},
    {t:"ul", items:[
      "Tax on the <b>revaluation of property, plant and equipment</b>",
      "Tax on <b>exchange differences</b> from translating a foreign operation",
      "Tax on <b>remeasurements of a defined benefit plan</b>"
    ]},
    {t:"p", html:"<b>Directly in equity:</b>"},
    {t:"ul", items:[
      "Adjustment to the <b>opening balance of retained earnings</b> from a change in accounting policy or correction of an error",
      "Amounts on <b>initial recognition of the equity component</b> of a compound financial instrument"
    ]},
    {t:"note", html:"<b>The rule is consistent throughout: tax goes wherever the item it relates to went.</b> A revaluation surplus credited to OCI carries its deferred tax to OCI. A prior period error corrected against opening retained earnings carries its tax adjustment there. Never to profit or loss, which never saw the item."},
    {t:"h", html:"Interperiod allocation"},
    {t:"p", html:"<b>Interperiod</b> tax allocation is the recognition of the deferred tax asset or liability itself - the allocation of tax <b>between</b> periods. The two terms divide the subject cleanly: <b>intraperiod</b> splits one year's tax across the statements; <b>interperiod</b> moves tax across years."}
  ],
  check:{
    q:"An entity revalues buildings upward, crediting revaluation surplus in OCI, with no equivalent tax adjustment. Where is the resulting deferred tax charged?",
    choices:[
      "Profit or loss.",
      "Other comprehensive income.",
      "Opening retained earnings.",
      "Nowhere - a revaluation creates no temporary difference."
    ],
    answer:1,
    why:"The tax follows the income. The surplus went to <b>other comprehensive income</b>, so its deferred tax goes there too. And a revaluation with no equivalent tax adjustment <i>does</i> create a taxable temporary difference - the carrying amount now exceeds the tax base."
  }
},
/* ---------------- comprehensive running case ---------------- */
{
  id: "case-1",
  title: "Comprehensive Case, Stage 1 - The First Year",
  blocks: [
    {t:"p", html:"The examples so far each took a single year with no opening balances. A real problem does not. The next three parts work one company across two years, through a rate change, to the face of the statements."},
    {t:"note", html:"<b>Bulacan Steel Corporation - the facts for 2030.</b><br><br>&bull; Accounting income before tax <b>P10,000,000</b>.<br>&bull; Interest income on government bonds, subjected to final tax: <b>P500,000</b>.<br>&bull; Life insurance premium on the president, the entity being the beneficiary: <b>P120,000</b>.<br>&bull; Tax penalties and surcharges: <b>P80,000</b>.<br>&bull; Equipment costing <b>P10,000,000</b>: accounting depreciation to date <b>P2,000,000</b>, tax depreciation to date <b>P3,200,000</b>.<br>&bull; Warranty provision of <b>P500,000</b>, deductible only when paid.<br>&bull; Rent received in advance of <b>P600,000</b>, taxed on receipt, to be earned in 2031.<br>&bull; Tax rate <b>25%</b>. There are <b>no opening temporary differences</b>."},
    {t:"example", title:"Stage 1a - the temporary differences, by tax base", blocks:[
      {t:"table",
        head:["Item","Carrying amount","Tax base","Taxable TD","Deductible TD"],
        rows:[
          ["Equipment","8,000,000","6,800,000","1,200,000",""],
          ["Warranty provision","500,000","nil","","500,000"],
          ["Rent received in advance","600,000","nil","","600,000"],
          ["<b>Totals</b>","","","<b>1,200,000</b>","<b>1,100,000</b>"]
        ]},
      {t:"p", html:"Equipment: carrying amount 10,000,000 - 2,000,000 = 8,000,000; tax base 10,000,000 - 3,200,000 = 6,800,000. Both liabilities have a tax base of <b>nil</b> - the warranty because the whole P500,000 remains deductible, the rent because none of it is taxable in future, having been taxed on receipt."}
    ]},
    {t:"example", title:"Stage 1b - the computation", blocks:[
      {t:"table",
        head:["","Amount"],
        rows:[
          ["Accounting income","10,000,000"],
          ["Less: interest on government bonds","(500,000)"],
          ["Add: life insurance premium","120,000"],
          ["Add: tax penalties and surcharges","80,000"],
          ["<b>Income subject to tax</b>","<b>9,700,000</b>"],
          ["Less: taxable temporary difference originating","(1,200,000)"],
          ["Add: deductible temporary differences originating","1,100,000"],
          ["<b>Taxable income</b>","<b>9,600,000</b>"]
        ]},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Current income tax expense","9,600,000 x 25%","<b>2,400,000</b>"],
          ["Closing deferred tax liability","1,200,000 x 25%","300,000"],
          ["Closing deferred tax asset","1,100,000 x 25%","(275,000)"],
          ["Net deferred tax expense (no opening balances)","","<b>25,000</b>"],
          ["<b>Total income tax expense</b>","2,400,000 + 25,000","<b>2,425,000</b>"]
        ]},
      {t:"p", html:"<b>Check:</b> P9,700,000 x 25% = <b>P2,425,000</b>. It ties."},
      {t:"table",
        head:["31 December 2030","Debit","Credit"],
        rows:[
          ["Income tax expense","2,425,000",""],
          ["Deferred tax asset","275,000",""],
          ["&nbsp;&nbsp;&nbsp;Income tax payable","","2,400,000"],
          ["&nbsp;&nbsp;&nbsp;Deferred tax liability","","300,000"]
        ]},
      {t:"p", html:"The entity's <b>net deferred tax position</b> at 31 December 2030 is a liability of P300,000 less an asset of P275,000 = <b>net deferred tax liability of P25,000</b>. Carry that figure forward - Stage 2 turns on it."}
    ]}
  ],
  check:{
    q:"In Stage 1, why is the tax base of the P600,000 rent received in advance nil?",
    choices:[
      "Because rent is never taxable.",
      "Because it was taxed on receipt, so none of it will be taxable in future periods.",
      "Because it will be earned within twelve months.",
      "Because liabilities always have a nil tax base."
    ],
    answer:1,
    why:"For revenue received in advance the tax base is the carrying amount <b>less any amount that will not be taxable in future</b>. Having already been taxed on receipt, the whole P600,000 falls out, leaving a tax base of <b>nil</b> - a deductible temporary difference and a deferred tax asset."
  }
},
{
  id: "case-2",
  title: "Comprehensive Case, Stage 2 - The Second Year and the Reversals",
  blocks: [
    {t:"note", html:"<b>Bulacan Steel - the facts for 2031.</b><br><br>&bull; Accounting income before tax <b>P12,000,000</b>.<br>&bull; Interest income on government bonds: <b>P400,000</b>. No non-deductible expenses this year.<br>&bull; Equipment: accounting depreciation for the year <b>P2,000,000</b>, tax depreciation <b>P2,600,000</b>.<br>&bull; Warranty: accrued <b>P700,000</b>, actually paid <b>P1,000,000</b>.<br>&bull; The <b>P600,000 rent received in advance was fully earned</b> in 2031.<br>&bull; A new <b>allowance for doubtful accounts of P300,000</b> was set up; the BIR allows a deduction only on write-off.<br>&bull; Tax rate remains <b>25%</b>."},
    {t:"example", title:"Stage 2a - closing balances, not this year's movements", blocks:[
      {t:"table",
        head:["Item","Carrying amount","Tax base","Taxable TD","Deductible TD"],
        rows:[
          ["Equipment (10,000,000 - 4,000,000 / 10,000,000 - 5,800,000)","6,000,000","4,200,000","1,800,000",""],
          ["Warranty provision (500,000 + 700,000 - 1,000,000)","200,000","nil","","200,000"],
          ["Rent received in advance - fully earned","nil","nil","",""],
          ["Trade receivables, net of the new allowance","-","-","","300,000"],
          ["<b>Cumulative totals</b>","","","<b>1,800,000</b>","<b>500,000</b>"]
        ]},
      {t:"note", html:"<b>This is the step that separates a first-year problem from a real one.</b> The closing deferred tax balances are computed from <b>cumulative</b> temporary differences at 31 December 2031 - not from the movements during 2031. The expense for the year is then the <b>movement</b> between opening and closing."},
      {t:"table",
        head:["","Opening (31 Dec 2030)","Closing (31 Dec 2031)","Movement"],
        rows:[
          ["Deferred tax liability","300,000","450,000","150,000 expense"],
          ["Deferred tax asset","(275,000)","(125,000)","150,000 expense"],
          ["<b>Net deferred tax liability</b>","<b>25,000</b>","<b>325,000</b>","<b>300,000 expense</b>"]
        ]},
      {t:"p", html:"Note that <b>both</b> movements are expenses: the liability grew, and the asset shrank. Together they give a net deferred tax expense of <b>P300,000</b>."}
    ]},
    {t:"example", title:"Stage 2b - taxable income, reconciled two ways", blocks:[
      {t:"table",
        head:["","Amount"],
        rows:[
          ["Accounting income","12,000,000"],
          ["Less: interest on government bonds","(400,000)"],
          ["<b>Income subject to tax</b>","<b>11,600,000</b>"],
          ["Less: excess tax depreciation (2,600,000 - 2,000,000)","(600,000)"],
          ["Less: warranty paid over accrued (1,000,000 - 700,000)","(300,000)"],
          ["Less: rent earned in the books, already taxed in 2030","(600,000)"],
          ["Add: doubtful accounts expense, not deductible until write-off","300,000"],
          ["<b>Taxable income</b>","<b>10,400,000</b>"]
        ]},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Current income tax expense","10,400,000 x 25%","<b>2,600,000</b>"],
          ["Net deferred tax expense","from Stage 2a","300,000"],
          ["<b>Total income tax expense</b>","","<b>2,900,000</b>"]
        ]},
      {t:"p", html:"<b>Check:</b> P11,600,000 x 25% = <b>P2,900,000</b>. It ties again, because the rate is unchanged."},
      {t:"note", html:"<b>Notice the reversals doing their work.</b> The warranty and the rent both <b>reduced</b> taxable income in 2031, having increased it in 2030 - which is precisely what the deferred tax asset recognised in 2030 was predicting. The asset falls from P275,000 to P125,000 as that prediction is realised. Deferred tax is not an abstraction; it is last year's forecast being settled."},
      {t:"table",
        head:["31 December 2031","Debit","Credit"],
        rows:[
          ["Income tax expense","2,900,000",""],
          ["&nbsp;&nbsp;&nbsp;Income tax payable","","2,600,000"],
          ["&nbsp;&nbsp;&nbsp;Deferred tax liability","","150,000"],
          ["&nbsp;&nbsp;&nbsp;Deferred tax asset","","150,000"]
        ]}
    ]}
  ],
  check:{
    q:"Bulacan's deferred tax asset falls from P275,000 to P125,000 during 2031. What does that fall represent?",
    choices:[
      "A write-down because recovery is no longer probable.",
      "The reversal of the warranty and unearned rent differences, which reduced taxable income in 2031.",
      "An error in the prior year's computation.",
      "The effect of a change in the tax rate."
    ],
    answer:1,
    why:"The 2030 deferred tax asset predicted that the warranty and the unearned rent would reduce future taxable income. In 2031 they did - warranty payments exceeded the accrual and the rent was earned having already been taxed. The asset falls as its prediction is settled, partly offset by the new P300,000 doubtful accounts difference."
  }
},
{
  id: "case-3",
  title: "Comprehensive Case, Stage 3 - A Rate Change, and the Statements",
  blocks: [
    {t:"p", html:"Same facts for 2031, with one addition: <b>a law enacted in December 2031 reduces the corporate income tax rate to 20% with effect from 1 January 2032</b>. All of Bulacan's temporary differences reverse in 2032 or later."},
    {t:"example", title:"Stage 3a - remeasuring the deferred tax balances", blocks:[
      {t:"table",
        head:["","Cumulative difference","Rate","Closing balance"],
        rows:[
          ["Deferred tax liability","1,800,000","<b>20%</b>","360,000"],
          ["Deferred tax asset","500,000","<b>20%</b>","(100,000)"],
          ["<b>Net deferred tax liability</b>","","","<b>260,000</b>"]
        ]},
      {t:"table",
        head:["","Amount"],
        rows:[
          ["Net deferred tax liability, closing (at 20%)","260,000"],
          ["Net deferred tax liability, opening (at 25%)","(25,000)"],
          ["<b>Net deferred tax expense for 2031</b>","<b>235,000</b>"]
        ]},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Current income tax expense","10,400,000 x <b>25%</b>","2,600,000"],
          ["Net deferred tax expense","","235,000"],
          ["<b>Total income tax expense</b>","","<b>2,835,000</b>"]
        ]},
      {t:"note", html:"<b>Current tax stays at 25%.</b> The 2031 liability to the BIR is computed under the law in force for 2031. Only the <b>deferred</b> balances move to 20%, because they will reverse in 2032 and later."},
      {t:"note", html:"<b>And here the shortcut breaks.</b> P11,600,000 x 25% = P2,900,000, but total income tax expense is <b>P2,835,000</b>. The P65,000 gap is <b>exactly the remeasurement effect</b>: the net deferred position of P325,000 at 25% restated to P260,000 at 20%.<br><br>A candidate who applies the check mechanically will 'correct' a right answer into a wrong one. The check holds <b>only at a constant rate</b> - and when it fails, the difference should be explainable, which is more useful than the check itself."}
    ]},
    {t:"example", title:"Stage 3b - presentation and disclosure", blocks:[
      {t:"table",
        head:["Statement of financial position, 31 December 2031","Amount"],
        rows:[
          ["<b>Current liabilities</b> - income tax payable","2,600,000"],
          ["<b>Non-current liabilities</b> - deferred tax liability, net","260,000"]
        ]},
      {t:"p", html:"The DTL of P360,000 and DTA of P100,000 are presented <b>net</b>, because both relate to income taxes levied by the <b>same taxation authority</b> on the <b>same taxable entity</b>, and the entity has a legally enforceable right to set off current tax. Had the amounts arisen in <b>different jurisdictions</b>, they would be presented <b>gross</b>."},
      {t:"table",
        head:["Statement of comprehensive income, 2031","Amount"],
        rows:[
          ["Income before tax","12,000,000"],
          ["Income tax expense - current","(2,600,000)"],
          ["Income tax expense - deferred","(235,000)"],
          ["<b>Net income</b>","<b>9,165,000</b>"]
        ]},
      {t:"table",
        head:["Reconciliation of tax expense to the statutory rate","Amount"],
        rows:[
          ["Accounting income x 25%","3,000,000"],
          ["Tax effect of non-taxable interest income (400,000 x 25%)","(100,000)"],
          ["Effect of the reduction in the tax rate to 20%","(65,000)"],
          ["<b>Income tax expense</b>","<b>2,835,000</b>"]
        ]},
      {t:"note", html:"<b>This reconciliation is the disclosure that makes the whole chapter legible to a reader.</b> It shows exactly why the tax charge is not simply 25% of accounting profit: a <b>permanent</b> difference took P100,000 out, and the <b>rate change</b> took a further P65,000. Temporary differences appear nowhere in it, because they never affect the total - only its timing."}
    ]},
    {t:"h", html:"Reading the case as a whole"},
    {t:"table",
      head:["Stage","The question","The governing idea"],
      rows:[
        ["<b>Year 1</b>","What differences exist and what do they produce?","Carrying amount versus <b>tax base</b>, item by item; permanent differences fix the total, temporary ones fix the timing"],
        ["<b>Year 2</b>","How much tax this year?","Closing balances from <b>cumulative</b> differences; the expense is the <b>movement</b>. Reversals settle last year's forecast"],
        ["<b>Rate change</b>","At what rate?","<b>Current</b> tax at this year's rate; <b>deferred</b> at the rate expected on reversal. The check fails by exactly the remeasurement"],
        ["<b>Presentation</b>","Where does it appear?","Current tax <b>current</b>; deferred tax <b>always non-current</b>; offset only within the <b>same authority</b>; the rate reconciliation explains the difference to the reader"]
      ]}
  ],
  check:{
    q:"With the rate cut enacted, Bulacan's total income tax expense is P2,835,000 but income subject to tax x 25% gives P2,900,000. What is the P65,000 difference?",
    choices:[
      "An error in the computation.",
      "The remeasurement of the net deferred tax position from 25% to 20%.",
      "The tax effect of the non-taxable interest income.",
      "The current tax on the reversal of temporary differences."
    ],
    answer:1,
    why:"The net deferred position of P325,000 at 25% becomes P260,000 at 20% - a reduction of exactly <b>P65,000</b>. The shortcut check holds only at a <b>constant</b> rate; once a rate change is enacted the two routes diverge by the remeasurement effect, and being able to name that difference is worth more than the check itself."
  }
}
],

flashcards: [
  {f:"At what rate is CURRENT tax measured?", b:"The amount expected to be paid to or recovered from the tax authorities, using rates and laws <b>enacted or substantively enacted by the reporting date</b> for the <b>current</b> period."},
  {f:"At what rate is DEFERRED tax measured?", b:"The rates expected to apply <b>in the period when the asset is realised or the liability settled</b>, based on rates enacted or substantively enacted by the reporting date."},
  {f:"What does 'manner of expected recovery' mean for deferred tax?", b:"Deferred tax must reflect the tax consequences of <b>how the entity expects to recover or settle</b> the carrying amount - through <b>use</b> or through <b>sale</b> - where different rates apply to each."},
  {f:"May deferred tax be discounted?", b:"<b>No.</b> PAS 12 prohibits it. Reliable discounting would need detailed scheduling of every reversal, and permitting but not requiring it would destroy comparability."},
  {f:"A new tax rate is enacted. What happens to current and deferred tax?", b:"<b>Current</b> tax stays at the rate enacted for the current period. <b>Deferred</b> balances are <b>remeasured</b> at the rate expected on reversal, with the effect recognised <b>where the underlying deferred tax was recognised</b>."},
  {f:"State the reconciliation from accounting income to taxable income.", b:"Accounting income; <b>less</b> non-taxable income; <b>add</b> non-deductible expenses = <b>income subject to tax</b>; <b>less</b> originating future taxable amounts; <b>add</b> originating future deductible amounts = <b>taxable income</b>."},
  {f:"How are current tax expense and total income tax expense computed?", b:"<b>Current</b> = taxable income x the current rate. <b>Total</b> = current tax expense <b>plus the movement</b> in the net deferred tax position."},
  {f:"State the arithmetic check on a tax computation, and its limit.", b:"At a <b>constant</b> rate, <b>total income tax expense = income subject to tax x rate</b>. It <b>fails</b> where a rate change is enacted, by exactly the remeasurement effect on the deferred balances."},
  {f:"How are current tax assets and liabilities presented?", b:"As <b>current</b> assets or liabilities."},
  {f:"How are deferred tax assets and liabilities presented?", b:"<b>Always non-current</b>, whatever the expected timing of reversal. No current portion and no split."},
  {f:"When may current tax assets and liabilities be offset?", b:"Only where there is a <b>legally enforceable right</b> to set off <b>and</b> the entity intends to settle net or realise and settle <b>simultaneously</b>."},
  {f:"When may deferred tax assets and liabilities be offset?", b:"Only where <b>both</b>: there is a legally enforceable right to set off <b>current</b> tax; <b>and</b> the amounts relate to the <b>same taxation authority</b> on the same entity, or different entities intending to settle net."},
  {f:"Name five principal PAS 12 disclosures.", b:"The <b>major components</b> of tax expense; a <b>reconciliation of tax expense to accounting profit x the statutory rate</b>; an explanation of <b>rate changes</b>; unrecognised deductible differences and losses with <b>expiry dates</b>; and deferred tax charged to <b>equity or OCI</b>."},
  {f:"What does the rate reconciliation disclosure reveal?", b:"Why the tax charge is not simply the statutory rate times accounting profit - it exposes <b>permanent differences</b> and <b>rate changes</b>. Temporary differences never appear, because they affect timing, not the total."},
  {f:"What is intraperiod tax allocation?", b:"Allocating tax <b>within</b> a period to the items producing it - continuing operations, discontinued operations, prior period errors. '<b>The tax follows the income.</b>'"},
  {f:"What is interperiod tax allocation?", b:"The recognition of the <b>deferred</b> tax asset or liability - the allocation of tax <b>between</b> periods."},
  {f:"Which taxes are recognised in other comprehensive income?", b:"Tax on the <b>revaluation of PPE</b>; on <b>exchange differences</b> from translating a foreign operation; and on <b>remeasurements of a defined benefit plan</b>."},
  {f:"Which taxes are recognised directly in equity?", b:"Adjustments to <b>opening retained earnings</b> from a change in policy or correction of an error; and amounts on <b>initial recognition of the equity component</b> of a compound financial instrument."},
  {f:"In a second-year problem, what is the single most common structural error?", b:"Computing the closing deferred tax balances from <b>this year's movements</b> instead of from <b>cumulative</b> temporary differences at the reporting date. The expense is the <b>movement</b> between opening and closing balances."}
],

quiz: [
  {q:"Deferred tax is measured at:",
   c:["The current year's tax rate","The rate expected to apply when the difference reverses, enacted or substantively enacted by the reporting date","The average of current and future rates","Whichever rate gives the lower liability"],
   a:1, why:"Deferred amounts settle in the future, so they use the rate expected then. Current tax uses the rate enacted for the current period. Where no rate change is announced the two coincide and the distinction is invisible.", tos:"H.2.2 Measurement"},

  {q:"May a deferred tax liability reversing in fifteen years be discounted?",
   c:["Yes, at the entity's incremental borrowing rate","Yes, at the risk-free rate","No - PAS 12 prohibits discounting deferred tax","Only if the timing of reversal is reliably determinable"],
   a:2, why:"PAS 12 prohibits it outright. Reliable discounting would require detailed scheduling of every reversal, which is often impracticable, and permitting but not requiring it would destroy comparability.", tos:"H.2.2 Measurement"},

  {q:"A rate cut from 25% to 20% is enacted in December 2031, effective 2032. For 2031:",
   c:["Both current and deferred tax use 20%","Both use 25%","Current tax uses 25%; deferred balances are remeasured at 20%","Current tax uses 20%; deferred stays at 25%"],
   a:2, why:"Current tax is the liability for 2031 under the law in force for 2031 - 25%. Deferred balances reverse in 2032 and later, so they are remeasured at 20%.", tos:"H.2.2 Measurement"},

  {q:"Accounting income P6,000,000; non-taxable income P400,000; non-deductible expenses P250,000; originating FTA P900,000; originating FDA P500,000. Taxable income is:",
   c:["P5,450,000","P5,850,000","P6,250,000","P5,050,000"],
   a:0, why:"6,000,000 - 400,000 + 250,000 = 5,850,000 income subject to tax; then - 900,000 + 500,000 = 5,450,000. Future taxable amounts are deducted now; future deductible amounts are added now.", tos:"H.2.2 Computation"},

  {q:"Using those figures at a constant 25%, total income tax expense is:",
   c:["P1,362,500","P1,462,500","P1,500,000","P1,262,500"],
   a:1, why:"At a constant rate, total ITE = income subject to tax x rate = 5,850,000 x 25% = 1,462,500. The long route agrees: current 5,450,000 x 25% = 1,362,500 plus net deferred (900,000 - 500,000) x 25% = 100,000.", tos:"H.2.2 Computation"},

  {q:"Cumulative taxable temporary differences are P1,800,000 and deductible P500,000. Opening net deferred tax liability was P25,000. At 25%, the net deferred tax expense for the year is:",
   c:["P325,000","P300,000","P450,000","P125,000"],
   a:1, why:"Closing net DTL = (1,800,000 x 25%) - (500,000 x 25%) = 450,000 - 125,000 = 325,000. The expense is the MOVEMENT: 325,000 - 25,000 = 300,000.", tos:"H.2.2 Computation"},

  {q:"With the same closing differences but a rate cut to 20% enacted, the net deferred tax expense becomes:",
   c:["P300,000","P235,000","P260,000","P65,000"],
   a:1, why:"Closing net DTL at 20% = 360,000 - 100,000 = 260,000. Less the opening 25,000 = 235,000. The P65,000 reduction against the 25% figure is the remeasurement effect.", tos:"H.2.2 Measurement"},

  {q:"The check 'income subject to tax x rate' fails when:",
   c:["There are permanent differences","There are deductible temporary differences","A change in tax rate has been enacted","The entity has unused tax losses"],
   a:2, why:"Permanent differences are already removed in arriving at income subject to tax, and temporary differences only shift tax between periods. A rate change breaks the check, by exactly the remeasurement effect on the deferred balances.", tos:"H.2.2 Computation"},

  {q:"A deferred tax asset expected to reverse in six months is presented as:",
   c:["A current asset","A non-current asset","Split between current and non-current","Offset against the deferred tax liability"],
   a:1, why:"Deferred tax is ALWAYS non-current, whatever the expected reversal date. Offsetting is not automatic either - it requires the same taxation authority and a legally enforceable right to set off current tax.", tos:"H.2.4 Presentation"},

  {q:"Deferred tax assets and liabilities arising in TWO different tax jurisdictions:",
   c:["May be offset if the entity intends to settle net","May be offset at the entity's option","May never be offset","Must always be offset"],
   a:2, why:"Offsetting requires the same taxation authority, because there is no single authority against whom a net position across jurisdictions could ever be settled.", tos:"H.2.4 Offsetting"},

  {q:"Which disclosure reveals the effect of permanent differences to a reader?",
   c:["The maturity analysis of deferred tax","The reconciliation of tax expense to accounting profit multiplied by the statutory rate","The split between current and non-current tax","The analysis of unused tax losses"],
   a:1, why:"The rate reconciliation shows why the charge is not simply the statutory rate times accounting profit - exposing permanent differences and rate changes. Temporary differences never appear in it, because they affect timing rather than the total.", tos:"H.2.4 Disclosure"},

  {q:"An entity revalues property upward with no equivalent tax adjustment. The deferred tax is charged to:",
   c:["Profit or loss","Other comprehensive income","Opening retained earnings","Nowhere - no temporary difference arises"],
   a:1, why:"The tax follows the income: the surplus went to OCI, so its deferred tax goes there. And a revaluation with no tax adjustment does create a taxable temporary difference - the carrying amount now exceeds the tax base.", tos:"H.2.4 Allocation"},

  {q:"Tax on remeasurements of a defined benefit plan is recognised in:",
   c:["Profit or loss","Other comprehensive income","Equity directly","It is not recognised"],
   a:1, why:"The remeasurements themselves are recognised in OCI, so the tax on them follows. This is the same principle applied in the Employee Benefits chapter, seen now from the tax side.", tos:"H.2.4 Allocation"},

  {q:"Allocating income tax expense between continuing and discontinued operations is:",
   c:["Interperiod allocation","Intraperiod allocation","Offsetting","The balance sheet method"],
   a:1, why:"INTRAperiod allocation splits one period's tax across the items that produced it. INTERperiod allocation is the recognition of deferred tax, moving tax across years.", tos:"H.2.4 Allocation"},

  {q:"In a second-year problem, the closing deferred tax liability is computed from:",
   c:["The current year's originating taxable temporary differences","The cumulative taxable temporary differences at the reporting date","The opening balance plus current tax","The movement in taxable income"],
   a:1, why:"Closing balances always come from cumulative differences at the reporting date; the year's deferred tax expense is then the movement between opening and closing. Working from the year's own originating differences is the commonest structural error in multi-year problems.", tos:"H.2.2 Computation"}
]
});
