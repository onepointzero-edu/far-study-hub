/* CPALE 2029 TOS - H.3 Employee Benefits (PAS 19 / IAS 19)
   Two chapters sharing the group "Employee Benefits".

   Written against the standard as currently in force, including:
     - Plan Amendment, Curtailment or Settlement (2018 amendment, effective
       1 January 2019): updated assumptions must be used to determine current
       service cost and net interest for the REMAINDER of the period, and past
       service cost / settlement gain or loss is measured IGNORING the asset
       ceiling, with the resulting change in the ceiling effect going to OCI.
     - IFRIC agenda decision, April 2021, Attributing Benefit to Periods of
       Service: benefit is attributed from the date service first leads to
       benefits until further service leads to no material further benefit.
     - IAS 19.123: net interest takes account of changes in the net defined
       benefit liability during the period.
   Philippine context: RA 7641, the Retirement Pay Law. */

var EB_GROUP = "Employee Benefits";

/* ==================================================================
   1. CATEGORIES, SHORT-TERM BENEFITS AND DEFINED CONTRIBUTION PLANS
   ================================================================== */
FARHub.addChapter({
  id: "h3a-employee-benefits-categories",
  code: "H.3.1",
  group: EB_GROUP,
  title: "Categories, Short-Term Benefits and Defined Contribution Plans",
  blurb: "Four categories separated by timing, two kinds of retirement plan separated by who carries the risk - and one plan where the employer's duty ends at the cheque.",
  minutes: 80,
  outcomes: [
    "Classify employee benefits into the four categories.",
    "Account for short-term benefits, compensated absences, and profit-sharing and bonus plans.",
    "Distinguish contributory, funded and defined contribution plans along their three separate axes.",
    "Account for a defined contribution plan, including multi-employer, state and insured plans.",
    "Account for other long-term and termination benefits."
  ],

  sections: [
{
  id: "categories",
  title: "The Four Categories",
  blocks: [
    {t:"p", html:"<b>Employee benefits</b> are all forms of consideration given by an entity in exchange for service rendered by employees, or for the termination of employment."},
    {t:"table",
      head:["Category","Definition"],
      rows:[
        ["<b>Short-term employee benefits</b>","Benefits, other than termination benefits, <b>expected to be settled wholly within 12 months</b> after the end of the annual reporting period in which the employees render the related service"],
        ["<b>Post-employment benefits</b>","Benefits payable <b>after the completion of employment</b>, other than termination benefits and short-term benefits"],
        ["<b>Other long-term employee benefits</b>","All benefits <b>other than</b> short-term, post-employment and termination benefits"],
        ["<b>Termination benefits</b>","Benefits provided in exchange for the <b>termination</b> of employment"]
      ]},
    {t:"note", html:"<b>Timing does the sorting, not generosity.</b> Short-term and other long-term benefits are separated by a single test - whether settlement is expected wholly within twelve months of the end of the period in which the service was rendered. A bonus payable in eleven months and the same bonus payable in fourteen months are accounted for under entirely different rules."},
    {t:"p", html:"<b>Termination benefits</b> are the exception. They are defined by <i>why</i> they arise rather than <i>when</i> they are paid, because they are given in exchange for <b>termination</b> rather than for service."},
    {t:"note", html:"<b>A classification, once made, is not revisited merely because the expectation changes.</b> Where a benefit classified as short-term ceases to meet the twelve-month test - because, say, a bonus scheme is deferred - the entity reclassifies it as an other long-term benefit and applies the measurement rules for that category. But a temporary change in expectation does not by itself force reclassification."}
  ],
  check:{
    q:"An entity grants a long-service award payable to employees who complete 10 years of service. Into which category does it fall?",
    choices:[
      "Short-term employee benefits",
      "Post-employment benefits",
      "Other long-term employee benefits",
      "Termination benefits"
    ],
    answer:2,
    why:"A jubilee or long-service award is not settled wholly within twelve months of the service being rendered, and it is payable <b>during</b> employment rather than after it - so it is neither short-term nor post-employment. It is an <b>other long-term employee benefit</b>."
  }
},
{
  id: "short-term",
  title: "Short-Term Employee Benefits",
  blocks: [
    {t:"h", html:"Examples"},
    {t:"ul", items:[
      "<b>Wages, salaries and social security contributions</b>",
      "<b>Paid annual leave and paid sick leave</b>",
      "<b>Profit-sharing and bonuses</b> payable within twelve months of the related service",
      "<b>Non-monetary benefits</b> - medical care, housing, cars and subsidised goods or services"
    ]},
    {t:"h", html:"Recognition and measurement"},
    {t:"p", html:"Recognised as an <b>expense when the service is rendered</b>, and measured at the <b>undiscounted</b> amount expected to be paid. The unpaid balance is a <b>liability (accrued expense)</b>; any excess already paid is an <b>asset (prepaid expense)</b>."},
    {t:"note", html:"<b>No discounting.</b> Because settlement falls within twelve months, the time value of money is immaterial and PAS 19 does not require it to be reflected. This is the only category in the chapter where present value plays no part - contrast the defined benefit obligation, which is always measured on a discounted basis."},
    {t:"example", title:"Illustrative example 1 - the expense is fixed by the service", blocks:[
      {t:"p", html:"Five employees each earn P15,000 a month for a full year, giving an annual entitlement of <b>P900,000</b>."},
      {t:"table",
        head:["Cash actually paid","Expense recognised","Balance sheet"],
        rows:[
          ["P900,000","900,000","Nothing"],
          ["P850,000","900,000","<b>Accrued expense</b> P50,000 (liability)"],
          ["P1,050,000","900,000","<b>Prepaid expense</b> P150,000 (asset)"]
        ]},
      {t:"p", html:"The <b>expense never changes</b>. Only the balance sheet account moves. This same logic reappears in the defined contribution plan later in the chapter."}
    ]}
  ],
  check:{
    q:"Five employees each earn P15,000 per month for a full year. The entity paid P1,050,000 in salaries. What does it recognise?",
    choices:[
      "Salaries expense of P1,050,000.",
      "Salaries expense of P900,000 and a prepaid expense of P150,000.",
      "Salaries expense of P900,000 and an accrued liability of P150,000.",
      "Salaries expense of P1,050,000 and a prepaid expense of P150,000."
    ],
    answer:1,
    why:"The expense is driven by the <b>service rendered</b>: 5 x P15,000 x 12 = P900,000. The extra P150,000 buys service not yet rendered, so it is a <b>prepaid expense</b>. Had the entity underpaid, the shortfall would be an accrued liability - and the expense would still be P900,000."
  }
},
{
  id: "absences",
  title: "Compensated Absences",
  blocks: [
    {t:"table",
      head:["","Accumulating","Non-accumulating"],
      rows:[
        ["<b>Meaning</b>","Carried forward to future periods if unused","Lapse if unused"],
        ["<b>Expense recognised</b>","When the <b>service is rendered</b> that gives the entitlement","Only when the <b>absence occurs</b>"],
        ["<b>Liability for unused entitlement</b>","<b>Yes</b> - accrued","<b>None</b>"]
      ]},
    {t:"h", html:"Vesting and non-vesting"},
    {t:"ul", items:[
      "<b>Vesting</b> - employees are entitled to a <b>cash payment</b> for unused entitlement on leaving.",
      "<b>Non-vesting</b> - they are not."
    ]},
    {t:"note", html:"Both create a liability, because both carry forward. Vesting status affects <b>measurement</b> - a non-vesting entitlement is reduced for the possibility that employees leave before using it - not whether a liability exists at all."},
    {t:"note", html:"<b>Philippine context.</b> The Labor Code requires <b>five days of service incentive leave</b> a year for employees with at least one year of service, and it is <b>convertible to cash</b> if unused. That makes it a <b>vesting accumulating</b> entitlement, and the unused portion must be accrued."},
    {t:"example", title:"Illustrative example 2 - accumulating versus non-accumulating", blocks:[
      {t:"p", html:"Employees earned <b>2,000 weeks</b> of vacation leave in 2030 and used <b>1,200 weeks</b>. The 2030 weekly rate is <b>P4,000</b>; rates rise <b>10%</b> each year, and employees are paid at the rate in force when the leave is taken."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["<b>Accumulating</b> - leave used","1,200 x P4,000","4,800,000"],
          ["<b>Accumulating</b> - leave unused, carried forward","800 x P4,400","3,520,000"],
          ["<b>Total expense, accumulating</b>","","<b>8,320,000</b>"],
          ["<b>Total expense, non-accumulating</b>","1,200 x P4,000 only","<b>4,800,000</b>"]
        ]},
      {t:"p", html:"The 800 unused weeks are measured at <b>next year's rate of P4,400</b>, because that is what the entity expects to pay when the leave is actually taken."}
    ]}
  ],
  check:{
    q:"Employees earn 3,000 days of ACCUMULATING leave and use 2,200. The current daily rate is P500 and rates rise 10% next year. The expense is:",
    choices:["P1,500,000","P1,100,000","P1,540,000","P1,650,000"],
    answer:2,
    why:"Used: 2,200 x P500 = P1,100,000. The 800 unused days carry forward and are accrued at the <b>expected future rate</b> of P550: P440,000. Total <b>P1,540,000</b>. Had the entitlement been non-accumulating, only the P1,100,000 would be recognised."
  }
},
{
  id: "bonus",
  title: "Profit-Sharing and Bonus Plans",
  blocks: [
    {t:"p", html:"The expected cost is recognised when, and only when, <b>both</b>:"},
    {t:"ol", items:[
      "The entity has a <b>present legal or constructive obligation</b> to make the payment as a result of past events; <b>and</b>",
      "A <b>reliable estimate</b> of the obligation can be made."
    ]},
    {t:"note", html:"A present obligation exists where the entity has <b>no realistic alternative but to pay</b>. A purely discretionary bonus the entity could still decide to withhold creates no obligation - however likely payment may appear. But a consistent past practice of paying can create a <b>constructive</b> obligation even without a contract."},
    {t:"h", html:"The four bonus bases"},
    {t:"p", html:"Let <b>B</b> = bonus, <b>NI</b> = net income before bonus and tax, <b>b</b> = bonus rate, <b>t</b> = tax rate."},
    {t:"table",
      head:["Basis","Equation"],
      rows:[
        ["Before bonus and before tax","B = b x NI"],
        ["<b>After bonus</b>, before tax","B = b x (NI - B)"],
        ["Before bonus, <b>after tax</b>","B = b x (NI - T), where T = t x (NI - B)"],
        ["<b>After bonus and after tax</b>","B = b x (NI - B - T), where T = t x (NI - B)"]
      ]},
    {t:"note", html:"Only the first is a straight multiplication. In the third and fourth, note that the tax is computed on <b>NI less the bonus</b>, because the bonus is <b>deductible</b> for tax. Setting up that second equation correctly is where the marks are."},
    {t:"example", title:"Illustrative example 3 - the four bases compared", blocks:[
      {t:"p", html:"Net income before bonus and tax is <b>P5,500,000</b>; the bonus rate is <b>10%</b> and the tax rate <b>25%</b>."},
      {t:"table",
        head:["Basis","Working","Bonus"],
        rows:[
          ["Before bonus, before tax","0.10 x 5,500,000","550,000"],
          ["<b>After bonus</b>, before tax","1.10B = 550,000","<b>500,000</b>"],
          ["Before bonus, after tax","B = 0.10(5,500,000 - 0.25(5,500,000 - B)) &rarr; 0.975B = 412,500","423,077"],
          ["After bonus and after tax","B = 0.10(5,500,000 - B - 0.25(5,500,000 - B)) &rarr; 1.075B = 412,500","383,721"]
        ]},
      {t:"p", html:"Check the second: net income after bonus is P5,000,000, and 10% of that is P500,000. The bases descend in order, because each adds another deduction before the percentage is applied."}
    ]}
  ],
  check:{
    q:"Net income before bonus and tax is P3,300,000. The bonus is 10% of income AFTER bonus but before tax. The bonus is:",
    choices:["P330,000","P300,000","P297,000","P363,000"],
    answer:1,
    why:"B = 0.10 x (3,300,000 - B), so 1.10B = 330,000 and <b>B = P300,000</b>. Check: income after bonus is P3,000,000 and 10% of that is P300,000. P330,000 would be right only if the base were income <i>before</i> bonus."
  }
},
{
  id: "plan-types",
  title: "Post-Employment Plans: Three Independent Axes",
  blocks: [
    {t:"p", html:"The same plan is described along three axes at once. Keep them separate - a plan can be contributory, funded <b>and</b> defined benefit simultaneously."},
    {t:"h", html:"1. Contributory or non-contributory - who pays in"},
    {t:"ul", items:[
      "<b>Contributory</b> - <b>both</b> employer and employee contribute. Examples: SSS and GSIS.",
      "<b>Non-contributory</b> - <b>only the employer</b> bears the cost. Example: the statutory retirement benefit under RA 7641."
    ]},
    {t:"h", html:"2. Funded or unfunded - where the money sits"},
    {t:"ul", items:[
      "<b>Funded</b> - assets are set aside with a separate funding agency such as a trustee, bank or insurer.",
      "<b>Unfunded</b> - the employer retains the obligation with no separate fund."
    ]},
    {t:"h", html:"3. Defined contribution or defined benefit - who carries the risk"},
    {t:"table",
      head:["","Defined contribution","Defined benefit"],
      rows:[
        ["<b>What is fixed</b>","The <b>contribution</b>","The <b>benefit</b>"],
        ["<b>Employer's obligation</b>","Limited to the agreed contribution","To provide the agreed benefit, whatever it costs"],
        ["<b>Who bears investment risk</b>","The <b>employee</b>","The <b>employer</b>"],
        ["<b>Who bears actuarial risk</b>","The <b>employee</b>","The <b>employer</b>"],
        ["<b>Actuarial assumptions</b>","Not required","<b>Required</b>"],
        ["<b>Measurement of the obligation</b>","Undiscounted, unless not due within 12 months","<b>Discounted</b> - present value"]
      ]},
    {t:"note", html:"<b>Everything else follows from who carries the risk.</b> Under a defined contribution plan the employer's duty ends when it pays the agreed contribution, so there is nothing left to estimate and no actuary is needed. Under a defined benefit plan the employer has promised an <i>outcome</i>, so it must estimate what that outcome will cost - hence actuarial assumptions, a discount rate, and the possibility of gains and losses when estimates prove wrong."},
    {t:"note", html:"<b>Philippine context - RA 7641, the Retirement Pay Law.</b> An employee aged at least <b>60 but not more than 65</b> with at least <b>five years of service</b> is entitled to a minimum retirement benefit of <b>one-half month salary for every year of service</b>, a fraction of at least six months counting as a whole year. 'One-half month salary' is defined as <b>22.5 days</b>: <b>15 days salary + 5 days service incentive leave + 1/12 of the 13th month pay</b>.<br><br>This matters for the accounting. The statutory minimum is a promise of an <b>outcome</b>, so it is a <b>defined benefit</b> obligation - and because most Philippine employers set nothing aside for it, it is typically an <b>unfunded, non-contributory defined benefit plan</b>. An entity whose only retirement arrangement is RA 7641 still has a defined benefit obligation requiring actuarial valuation."}
  ],
  check:{
    q:"An entity has no retirement plan of its own but is subject to RA 7641. How should it account for its retirement obligation?",
    choices:[
      "As a defined contribution plan, since it makes no contributions.",
      "As an unfunded defined benefit plan requiring actuarial valuation.",
      "No liability arises until an employee reaches age 60.",
      "As a short-term employee benefit."
    ],
    answer:1,
    why:"RA 7641 promises an <b>outcome</b> - 22.5 days pay per year of service - so the employer carries the actuarial and investment risk. That makes it a <b>defined benefit</b> obligation, measured on a discounted basis with actuarial assumptions. Setting nothing aside makes it <b>unfunded</b>; it does not make it a defined contribution plan."
  }
},
{
  id: "dcp",
  title: "The Defined Contribution Plan",
  blocks: [
    {t:"p", html:"The contribution is recognised as an <b>expense in the period in which the employee renders the related service</b>, and as a liability to the extent unpaid."},
    {t:"table",
      head:["Situation","Entry"],
      rows:[
        ["Contribution paid in full","Dr Retirement benefit expense / Cr Cash"],
        ["Contribution partly unpaid","Dr Retirement benefit expense / Cr Cash and Cr <b>Accrued retirement benefit</b>"],
        ["Contribution paid in excess","Dr Retirement benefit expense and Dr <b>Prepaid retirement benefit</b> / Cr Cash"]
      ]},
    {t:"note", html:"<b>The expense is always the contribution due for the period</b>, whatever was actually paid. Over- or underpaying changes only whether the balancing figure is a prepaid asset or an accrued liability - exactly the pattern seen with short-term benefits."},
    {t:"p", html:"Where contributions are <b>not expected to be settled wholly within twelve months</b> of the service being rendered, they are <b>discounted</b>."},
    {t:"p", html:"When a retiree is paid out of a <b>funded</b> plan, the entity makes <b>no entry</b> - the trustee pays from fund assets, and the entity's obligation was discharged when it contributed."},
    {t:"example", title:"Illustrative example 4 - three outcomes on one plan", blocks:[
      {t:"p", html:"A plan requires an annual contribution of <b>P300,000</b>."},
      {t:"table",
        head:["Contributed","Expense","Balance sheet"],
        rows:[
          ["P300,000","300,000","Nothing"],
          ["P120,000","300,000","<b>Accrued retirement benefit</b> P180,000"],
          ["P345,000","300,000","<b>Prepaid retirement benefit</b> P45,000"]
        ]}
    ]}
  ],
  check:{
    q:"A defined contribution plan requires P500,000 annually. The entity contributed P380,000. It recognises:",
    choices:[
      "Expense P380,000",
      "Expense P500,000 and an accrued retirement benefit of P120,000",
      "Expense P500,000 and a prepaid retirement benefit of P120,000",
      "Expense P620,000"
    ],
    answer:1,
    why:"The expense is the contribution <b>due</b> for the period - P500,000. The P120,000 unpaid is an <b>accrued retirement benefit</b> liability. Had the entity overpaid, the excess would be a prepaid asset instead."
  }
},
{
  id: "special-plans",
  title: "Multi-Employer, State and Insured Plans",
  blocks: [
    {t:"h", html:"Multi-employer plans"},
    {t:"p", html:"Plans that pool the assets contributed by <b>various entities not under common control</b> and use them to provide benefits to employees of more than one entity."},
    {t:"ol", items:[
      "The entity classifies the plan as <b>defined contribution or defined benefit</b> according to its terms, and accounts for it accordingly.",
      "Where it is a defined benefit plan but there is <b>insufficient information</b> to apply defined benefit accounting, the entity accounts for it <b>as if it were a defined contribution plan</b> - and <b>discloses</b> that fact, the reason, and its exposure."
    ]},
    {t:"note", html:"<b>Note the direction of the fallback.</b> Insufficient information does not change the nature of the plan; it changes only what the entity can practicably do. The disclosure exists precisely so the reader knows the reported figures understate a defined benefit exposure."},
    {t:"h", html:"State plans"},
    {t:"p", html:"Plans established by legislation to cover all entities, operated by national or local government. They are accounted for <b>in the same way as multi-employer plans</b>. Most are defined contribution in substance."},
    {t:"note", html:"<b>SSS and GSIS</b> are the Philippine examples. The employer's obligation is limited to the statutory contribution, so they are accounted for as <b>defined contribution</b> plans - the expense is simply the contribution for the period."},
    {t:"h", html:"Insured benefits"},
    {t:"p", html:"Where an entity pays insurance premiums to fund a post-employment benefit plan, it treats the plan as a <b>defined contribution</b> plan <b>unless</b> the entity retains a legal or constructive obligation either to:"},
    {t:"ul", items:[
      "Pay the benefits <b>directly</b> when they fall due; or",
      "Pay <b>further amounts</b> if the insurer does not pay all future benefits."
    ]},
    {t:"p", html:"Where either applies, the plan is a <b>defined benefit</b> plan and the insurance policy is a plan asset - or, if it qualifies, a <b>reimbursement right</b> presented as a separate asset."}
  ],
  check:{
    q:"An entity participates in a multi-employer plan that is a defined benefit plan in substance, but the administrator cannot provide information sufficient to apply defined benefit accounting. The entity should:",
    choices:[
      "Reclassify the plan as defined contribution and say nothing further.",
      "Account for it as if it were a defined contribution plan and disclose that fact, the reason and its exposure.",
      "Recognise no expense until information becomes available.",
      "Estimate the defined benefit obligation itself."
    ],
    answer:1,
    why:"Insufficient information does not change the <b>nature</b> of the plan - only what the entity can practicably do. It applies defined contribution accounting as a fallback and must <b>disclose</b> that it has done so, why, and its exposure, so the reader knows the figures understate a defined benefit obligation."
  }
},
{
  id: "other-long-term",
  title: "Other Long-Term Employee Benefits",
  blocks: [
    {t:"p", html:"Benefits <b>not</b> expected to be settled wholly within twelve months after the end of the period in which the service is rendered. Examples:"},
    {t:"ul", items:[
      "Long-term paid absences such as <b>long-service or sabbatical leave</b>",
      "<b>Jubilee</b> or other long-service benefits",
      "<b>Long-term disability</b> benefits",
      "Profit-sharing and bonuses <b>not</b> payable within twelve months",
      "<b>Deferred remuneration</b>"
    ]},
    {t:"p", html:"The recognition and measurement principles are <b>the same as for a defined benefit obligation</b> - discounted, using actuarial assumptions - with one difference."},
    {t:"note", html:"<b>The single difference, and it is examinable.</b> For other long-term benefits, <b>all</b> components of the cost - service cost, net interest <b>and remeasurements</b> - are recognised in <b>profit or loss</b>. There is no other comprehensive income treatment.<br><br>The reasoning is practical: these obligations are shorter and far less volatile than a pension, so the IASB did not consider the OCI mechanism warranted for them."},
    {t:"note", html:"<b>A long-term disability benefit has a further wrinkle.</b> Where the amount depends on <b>length of service</b>, the obligation arises as service is rendered and is attributed accordingly. Where it does not - a flat benefit payable on disability - the obligation is recognised <b>when the event causing the disability occurs</b>, not over the service period."}
  ],
  check:{
    q:"How are remeasurements of an OTHER LONG-TERM employee benefit obligation recognised?",
    choices:[
      "In other comprehensive income, as for a defined benefit plan.",
      "In profit or loss, with every other component.",
      "Directly in retained earnings.",
      "They are not recognised."
    ],
    answer:1,
    why:"This is the one difference from defined benefit accounting: <b>all</b> components of the cost of other long-term benefits, remeasurements included, go to <b>profit or loss</b>. The OCI route is reserved for post-employment defined benefit plans."
  }
},
{
  id: "termination",
  title: "Termination Benefits",
  blocks: [
    {t:"p", html:"Benefits provided in exchange for the <b>termination</b> of employment, arising from either:"},
    {t:"ul", items:[
      "An entity's <b>decision to terminate</b> employment before the normal retirement date; or",
      "An employee's decision to <b>accept an offer of benefits</b> in exchange for termination."
    ]},
    {t:"h", html:"Recognition - and its timing"},
    {t:"p", html:"A liability and expense are recognised at the <b>earlier</b> of:"},
    {t:"ol", items:[
      "When the entity can <b>no longer withdraw</b> the offer of those benefits; and",
      "When the entity recognises costs for a <b>restructuring</b> within the scope of PAS 37 that involves the payment of termination benefits."
    ]},
    {t:"note", html:"<b>Termination benefits are not given in exchange for service</b>, so they are <b>not attributed to periods of service</b> in the way a pension is. They are recognised in full when the recognition point is reached, not spread over the employee's remaining service - which is the distinction most often tested."},
    {t:"h", html:"Measurement"},
    {t:"table",
      head:["Expected to be settled...","Apply the requirements for..."],
      rows:[
        ["<b>Wholly within 12 months</b> after the end of the reporting period","<b>Short-term</b> employee benefits - undiscounted"],
        ["<b>Not</b> wholly within 12 months","<b>Other long-term</b> employee benefits - discounted, all components in profit or loss"]
      ]},
    {t:"p", html:"So termination benefits have <b>no measurement rules of their own</b>. They borrow from whichever category the settlement timing points to."},
    {t:"example", title:"Illustrative example 5 - benefit or not?", blocks:[
      {t:"table",
        head:["Situation","Termination benefit?"],
        rows:[
          ["Redundancy pay on the entity's decision to close a plant","<b>Yes</b> - the entity terminated the employment"],
          ["A voluntary redundancy offer employees accept","<b>Yes</b> - an offer accepted in exchange for termination"],
          ["Retirement benefits payable when an employee retires at normal retirement age","<b>No</b> - a <b>post-employment</b> benefit, given in exchange for service"],
          ["An enhanced retirement benefit offered to induce early retirement","<b>Yes</b>, as to the <b>enhancement</b>; the underlying retirement benefit remains post-employment"]
        ]},
      {t:"p", html:"The last line is the one worth remembering. Only the <b>increment</b> given to induce termination is a termination benefit; the benefit the employee had already earned by service is not."}
    ]}
  ],
  check:{
    q:"Termination benefits expected to be settled 18 months after the reporting period are measured using the requirements for:",
    choices:[
      "Short-term employee benefits",
      "Other long-term employee benefits",
      "Post-employment benefits",
      "Termination benefits have their own measurement rules"
    ],
    answer:1,
    why:"Termination benefits borrow their measurement. Settled wholly within twelve months, they follow <b>short-term</b> benefits; otherwise <b>other long-term</b> benefits - discounted, with all components in profit or loss."
  }
}
],

flashcards: [
  {f:"Define employee benefits.", b:"All forms of <b>consideration given in exchange for service</b> rendered by employees, or for the <b>termination</b> of employment."},
  {f:"Name the four categories of employee benefit.", b:"<b>Short-term</b>; <b>post-employment</b>; <b>other long-term</b>; <b>termination</b> benefits."},
  {f:"What separates short-term from other long-term benefits?", b:"Whether settlement is expected <b>wholly within 12 months</b> after the end of the period in which the service was rendered. Timing alone."},
  {f:"How are short-term benefits recognised and measured?", b:"As an <b>expense when the service is rendered</b>, at the <b>undiscounted</b> amount expected to be paid. Unpaid balances are accrued; excess payments are prepaid."},
  {f:"Distinguish accumulating from non-accumulating compensated absences.", b:"<b>Accumulating</b> - carry forward if unused, so the unused portion is <b>accrued</b>. <b>Non-accumulating</b> - lapse, so expense arises only <b>when the absence occurs</b>."},
  {f:"Distinguish vesting from non-vesting accumulating absences.", b:"<b>Vesting</b> - a cash payment is due for unused entitlement on leaving. <b>Non-vesting</b> - not. Both create a liability; vesting affects <b>measurement</b>, not existence."},
  {f:"What is the Philippine service incentive leave entitlement, and how is it classified?", b:"<b>Five days a year</b> after one year of service, <b>convertible to cash</b> if unused - therefore a <b>vesting accumulating</b> entitlement, and the unused portion must be accrued."},
  {f:"When is the cost of a profit-sharing or bonus plan recognised?", b:"When <b>both</b>: a <b>present legal or constructive obligation</b> exists from a past event; <b>and</b> a <b>reliable estimate</b> can be made."},
  {f:"State the equation for a bonus based on income AFTER bonus but before tax.", b:"<b>B = b x (NI - B)</b>, rearranging to <b>B = b x NI / (1 + b)</b>."},
  {f:"In a bonus computed after tax, on what is the tax computed?", b:"On <b>net income less the bonus</b> - T = t x (NI - B) - because the bonus is <b>deductible</b> for tax."},
  {f:"Distinguish contributory from non-contributory plans.", b:"<b>Contributory</b> - both employer and employee contribute (SSS, GSIS). <b>Non-contributory</b> - only the employer bears the cost (RA 7641)."},
  {f:"In a defined contribution plan, who bears investment and actuarial risk?", b:"The <b>employee</b>. The employer's obligation is limited to the agreed contribution, so no actuarial assumptions are needed and no actuarial gains or losses arise."},
  {f:"In a defined benefit plan, who bears the risk and what follows?", b:"The <b>employer</b>. Because it promised an outcome, it needs <b>actuarial assumptions</b>, a <b>discount rate</b>, and it bears <b>actuarial gains and losses</b>."},
  {f:"State the RA 7641 minimum retirement benefit.", b:"<b>One-half month salary for every year of service</b> - defined as <b>22.5 days</b>: 15 days salary + 5 days service incentive leave + 1/12 of the 13th month pay. Age <b>60 to 65</b>, at least <b>5 years</b> of service; a fraction of at least six months counts as a whole year."},
  {f:"How is an entity's RA 7641 obligation classified for accounting?", b:"As an <b>unfunded, non-contributory defined benefit plan</b>. The law promises an outcome, so actuarial valuation is required even where the employer sets nothing aside."},
  {f:"How is the expense measured under a defined contribution plan?", b:"At the <b>contribution due for the period</b>, whatever was actually paid. Unpaid amounts are an <b>accrued</b> retirement benefit; excess amounts a <b>prepaid</b> retirement benefit."},
  {f:"When are defined contribution amounts discounted?", b:"Where contributions are <b>not expected to be settled wholly within twelve months</b> after the service is rendered."},
  {f:"How is a multi-employer defined benefit plan accounted for where information is insufficient?", b:"<b>As if it were a defined contribution plan</b>, with <b>disclosure</b> of that fact, the reason, and the entity's exposure. The nature of the plan is unchanged - only what the entity can practicably do."},
  {f:"How are state plans such as SSS and GSIS accounted for?", b:"Like <b>multi-employer</b> plans. Because the employer's obligation is limited to the statutory contribution, they are <b>defined contribution</b> in substance."},
  {f:"When are insured benefits treated as a DEFINED BENEFIT plan?", b:"Where the entity retains a legal or constructive obligation to <b>pay the benefits directly</b> when due, or to <b>pay further amounts</b> if the insurer does not pay all future benefits."},
  {f:"How do other long-term benefits differ from defined benefit accounting?", b:"<b>All</b> components - including <b>remeasurements</b> - go to <b>profit or loss</b>. There is no OCI treatment."},
  {f:"When is a long-term disability benefit recognised?", b:"Over the <b>service period</b> where the amount depends on length of service; <b>when the event occurs</b> where it does not."},
  {f:"When are termination benefits recognised?", b:"At the <b>earlier</b> of when the entity can <b>no longer withdraw the offer</b>, and when it recognises <b>restructuring</b> costs under PAS 37 involving termination benefits."},
  {f:"Are termination benefits attributed to periods of service?", b:"<b>No.</b> They are not given in exchange for service, so they are recognised <b>in full</b> at the recognition point rather than spread over remaining service."},
  {f:"An enhanced retirement benefit is offered to induce early retirement. What is a termination benefit?", b:"Only the <b>enhancement</b>. The retirement benefit already earned through service remains a <b>post-employment</b> benefit."}
],

quiz: [
  {q:"Which test separates short-term from other long-term employee benefits?",
   c:["Whether the benefit is monetary","Whether settlement is expected wholly within 12 months after the period in which service was rendered","Whether the employee has vested rights","Whether the plan is funded"],
   a:1, why:"Classification turns purely on settlement timing relative to the period of service. The same bonus is short-term if payable in eleven months and other long-term if payable in fourteen.", tos:"H.3.1 Classification"},

  {q:"Six employees each earn P20,000 per month for a full year. The entity paid P1,300,000. It recognises:",
   c:["Expense P1,300,000","Expense P1,440,000 and accrued liability P140,000","Expense P1,440,000 and prepaid expense P140,000","Expense P1,160,000"],
   a:1, why:"Expense is fixed by service rendered: 6 x P20,000 x 12 = P1,440,000. The entity underpaid by P140,000, which is an accrued liability. Underpaying does not reduce the expense.", tos:"H.3.1 Short-term"},

  {q:"Employees earn 3,000 days of ACCUMULATING leave and use 2,200. The current rate is P500 a day and rates rise 10%. The expense is:",
   c:["P1,500,000","P1,100,000","P1,540,000","P1,650,000"],
   a:2, why:"Used 2,200 x P500 = P1,100,000, plus 800 unused days accrued at the expected future rate of P550 = P440,000. Total P1,540,000.", tos:"H.3.1 Compensated absences"},

  {q:"Philippine service incentive leave is best classified as:",
   c:["Non-accumulating","Accumulating and non-vesting","Accumulating and vesting","A post-employment benefit"],
   a:2, why:"Five days a year, carried forward and CONVERTIBLE TO CASH if unused - so it accumulates and it vests. The unused portion must be accrued.", tos:"H.3.1 Compensated absences"},

  {q:"Net income before bonus and tax is P4,400,000. The bonus is 10% of income AFTER bonus but before tax. The bonus is:",
   c:["P440,000","P400,000","P396,000","P484,000"],
   a:1, why:"B = 0.10 x (4,400,000 - B), so 1.10B = 440,000 and B = P400,000. Income after bonus is P4,000,000, and 10% of that is P400,000.", tos:"H.3.1 Bonus plans"},

  {q:"A discretionary bonus the entity could still decide not to pay:",
   c:["Is accrued if payment is probable","Creates no liability, as there is no present obligation","Is accrued at half its expected amount","Is a termination benefit"],
   a:1, why:"Recognition requires a present LEGAL OR CONSTRUCTIVE obligation. A genuinely discretionary bonus creates none - though a consistent past practice of paying can create a constructive obligation even without a contract.", tos:"H.3.1 Bonus plans"},

  {q:"Under which plan does the EMPLOYER bear the actuarial and investment risk?",
   c:["Defined contribution","Defined benefit","Both equally","Neither - the trustee does"],
   a:1, why:"Under a defined benefit plan the employer promised a specific outcome and must make up any shortfall. Under a defined contribution plan its duty ends with the contribution, so the employee carries the risk.", tos:"H.3.1 Plan types"},

  {q:"An entity has no company retirement plan but is subject to RA 7641. It has:",
   c:["No retirement obligation","An unfunded defined benefit obligation requiring actuarial valuation","A defined contribution obligation","A short-term employee benefit"],
   a:1, why:"RA 7641 promises an outcome - 22.5 days pay per year of service - so the employer bears the risk. That is a DEFINED BENEFIT obligation, measured on a discounted basis. Setting nothing aside makes it unfunded, not defined contribution.", tos:"H.3.1 Plan types"},

  {q:"The RA 7641 minimum retirement benefit of 'one-half month salary' comprises:",
   c:["15 days salary only","15 days salary plus 1/12 of the 13th month pay","15 days salary, 5 days service incentive leave and 1/12 of the 13th month pay - 22.5 days","30 days salary"],
   a:2, why:"22.5 days in total. Candidates who use 15 days understate the obligation by a third, which is why the composition is worth memorising.", tos:"H.3.1 Plan types"},

  {q:"A defined contribution plan requires P500,000 annually; the entity contributed P620,000. It recognises:",
   c:["Expense P620,000","Expense P500,000 and prepaid retirement benefit P120,000","Expense P500,000 and accrued retirement benefit P120,000","Expense P380,000"],
   a:1, why:"The expense is the contribution DUE - P500,000. The excess P120,000 is a prepaid retirement benefit that will absorb part of a future period's contribution.", tos:"H.3.1 Defined contribution"},

  {q:"An entity participates in a multi-employer DEFINED BENEFIT plan but cannot obtain sufficient information. It should:",
   c:["Reclassify the plan as defined contribution with no further comment","Apply defined contribution accounting and disclose the fact, reason and exposure","Recognise no expense","Estimate the obligation itself"],
   a:1, why:"Insufficient information does not change the nature of the plan. The entity applies DC accounting as a fallback and must disclose that it has done so, why, and its exposure, so readers know the figures understate a DB obligation.", tos:"H.3.1 Multi-employer"},

  {q:"An entity funds retirement benefits through an insurance policy but remains obliged to pay further amounts if the insurer does not pay in full. The plan is:",
   c:["A defined contribution plan","A defined benefit plan","Outside the scope of PAS 19","A termination benefit arrangement"],
   a:1, why:"Insured benefits are defined contribution UNLESS the entity retains an obligation to pay benefits directly or to top up any insurer shortfall. Retaining that obligation makes it a DEFINED BENEFIT plan.", tos:"H.3.1 Insured benefits"},

  {q:"Remeasurements of an OTHER LONG-TERM employee benefit are recognised in:",
   c:["Other comprehensive income","Profit or loss","Retained earnings","They are not recognised"],
   a:1, why:"This is the single difference from defined benefit accounting: all components, remeasurements included, go to profit or loss. The OCI route applies only to post-employment defined benefit plans.", tos:"H.3.1 Other long-term"},

  {q:"Termination benefits are recognised at the earlier of when the entity can no longer withdraw the offer and:",
   c:["When the employee leaves","When it recognises restructuring costs under PAS 37 involving termination benefits","When the benefit is paid","The end of the reporting period"],
   a:1, why:"Those are the two recognition points. Termination benefits are not given in exchange for service, so they are recognised in full at that point rather than attributed over remaining service.", tos:"H.3.1 Termination"},

  {q:"An entity offers an ENHANCED retirement benefit to induce early retirement. Which part is a termination benefit?",
   c:["The whole benefit","Only the enhancement","None of it","Only the portion payable within 12 months"],
   a:1, why:"Only the increment given to induce termination is a termination benefit. The benefit already earned through service remains a post-employment benefit.", tos:"H.3.1 Termination"}
]
});

/* ==================================================================
   2. DEFINED BENEFIT PLANS
   ================================================================== */
FARHub.addChapter({
  id: "h3b-defined-benefit",
  code: "H.3.2-3.3",
  group: EB_GROUP,
  title: "Defined Benefit Plans",
  blurb: "Three components, two memorandum records and one ceiling - worked from a plan amendment through a settlement to the face of the statements.",
  minutes: 100,
  outcomes: [
    "Identify the three components of defined benefit cost and where each is recognised.",
    "Compute service cost, including past service cost and gain or loss on settlement.",
    "Apply the requirement to use updated assumptions after a plan amendment, curtailment or settlement.",
    "Attribute benefit to periods of service.",
    "Compute net interest and the remeasurements, and roll the memorandum records forward.",
    "Apply the asset ceiling, and present and disclose the plan."
  ],

  sections: [
{
  id: "components",
  title: "The Three Components of Defined Benefit Cost",
  blocks: [
    {t:"table",
      head:["Component","Comprises","Recognised in"],
      rows:[
        ["<b>1. Service cost</b>","Current service cost; past service cost; gain or loss on settlement","<b>Profit or loss</b>"],
        ["<b>2. Net interest</b>","Interest on the DBO, on plan assets, and on the effect of the asset ceiling","<b>Profit or loss</b>"],
        ["<b>3. Remeasurements</b>","On the DBO, on plan assets, and on the effect of the asset ceiling","<b>Other comprehensive income</b>"]
      ]},
    {t:"p", html:"Components 1 and 2 together are the <b>employee benefit expense</b>. All three together are the <b>defined benefit cost</b>."},
    {t:"note", html:"<b>The structure explains itself.</b> Service cost is what the promise cost this year. Net interest is what the passage of time cost. Remeasurements are what turned out differently from what was assumed - and because those are volatile and outside management's control, the IASB keeps them out of profit or loss. Remeasurements are <b>never recycled</b> to profit or loss, though they may be transferred within equity."},
    {t:"h", html:"The single reconciling identity"},
    {t:"note", html:"<b>Opening accrued or prepaid benefit cost + defined benefit cost - contributions = closing accrued or prepaid benefit cost.</b><br><br>Benefits paid to retirees appear nowhere in it, because they reduce the obligation and plan assets by the same amount. This identity is the check that proves any defined benefit computation, and it is used at every stage of the comprehensive case at the end of this chapter."}
  ],
  check:{
    q:"Which component of defined benefit cost is recognised in other comprehensive income?",
    choices:[
      "Current service cost",
      "Net interest",
      "Remeasurements",
      "Past service cost"
    ],
    answer:2,
    why:"<b>Remeasurements</b> - on the obligation, on plan assets and on the effect of the asset ceiling. Service cost and net interest are in <b>profit or loss</b>, and together form the employee benefit expense. Remeasurements are never recycled to profit or loss."
  }
},
{
  id: "service-cost",
  title: "Service Cost, and the Rule After a Plan Amendment",
  blocks: [
    {t:"table",
      head:["","Definition"],
      rows:[
        ["<b>Current service cost</b>","The increase in the present value of the defined benefit obligation from employee service <b>in the current period</b>"],
        ["<b>Past service cost</b>","The change in the present value of the obligation for service in <b>prior periods</b>, resulting from a <b>plan amendment</b> or a <b>curtailment</b>"],
        ["<b>Gain or loss on settlement</b>","Arises where a transaction <b>eliminates all further legal or constructive obligation</b> for part or all of the benefits"]
      ]},
    {t:"note", html:"<b>Past service cost is recognised immediately and in full</b> at the earlier of when the plan amendment or curtailment occurs and when the entity recognises related restructuring costs or termination benefits. There is <b>no spreading over a vesting period</b> - that was the pre-2011 treatment and it is gone. A <b>curtailment</b> - a significant reduction in the number of employees covered, or in benefits for future service - is now simply part of past service cost, whether it produces a gain or a loss."},
    {t:"table",
      head:["Gain or loss on settlement",""],
      rows:[
        ["Settlement price - the plan assets transferred and any payment made","xx"],
        ["Less: present value of the defined benefit obligation settled","(xx)"],
        ["<b>Loss / (gain) on settlement</b>","<b>xx / (xx)</b>"]
      ]},
    {t:"p", html:"A positive figure is a <b>loss</b> - the entity paid more than the obligation was carried at. A negative figure is a <b>gain</b>."},
    {t:"h", html:"The 2019 amendment - updated assumptions"},
    {t:"note", html:"<b>Plan Amendment, Curtailment or Settlement</b> - amendments to PAS 19 issued in 2018 and <b>effective for annual periods beginning on or after 1 January 2019</b> - added two requirements many Philippine handouts have not yet absorbed:<br><br><b>1.</b> When a plan amendment, curtailment or settlement occurs, the entity <b>remeasures</b> the net defined benefit liability using <b>current</b> assumptions - and must then use <b>those updated assumptions</b> to determine current service cost and net interest for the <b>remainder of the annual period</b>.<br><br><b>2.</b> Past service cost, and the gain or loss on settlement, are measured <b>ignoring the effect of the asset ceiling</b>. Any change in the ceiling effect resulting from the event is determined <b>separately</b> and recognised in the normal way, in <b>other comprehensive income</b>."},
    {t:"example", title:"Illustrative example 1 - updated assumptions for the remainder", blocks:[
      {t:"p", html:"A plan is amended on <b>1 July 2031</b>. Assumptions at 1 January gave a discount rate of 8%; the remeasurement on 1 July uses a current rate of <b>9%</b>. Current service cost for the full year on the original assumptions would have been P1,200,000; on the updated assumptions it would be P1,320,000."},
      {t:"table",
        head:["Period","Assumptions used","Current service cost"],
        rows:[
          ["1 Jan - 30 Jun","<b>Original</b> (8%)","1,200,000 x 6/12 = 600,000"],
          ["1 Jul - 31 Dec","<b>Updated</b> (9%)","1,320,000 x 6/12 = 660,000"],
          ["<b>Total for 2031</b>","","<b>1,260,000</b>"]
        ]},
      {t:"p", html:"Net interest is split the same way: on the opening balances at 8% for the first half, and on the <b>remeasured</b> balances at 9% for the second."},
      {t:"note", html:"<b>Before the amendment</b>, entities generally continued using the assumptions set at the start of the year for the whole of it, even after a plan amendment had made those assumptions stale. The change removes that inconsistency."}
    ]}
  ],
  check:{
    q:"A plan is amended on 1 July. Under the 2019 amendment to PAS 19, what assumptions are used to determine current service cost for July to December?",
    choices:[
      "The assumptions set at the beginning of the year, for consistency.",
      "The updated assumptions used in the remeasurement at the date of the amendment.",
      "The assumptions expected at the next reporting date.",
      "An average of the opening and updated assumptions."
    ],
    answer:1,
    why:"The 2019 amendment requires the <b>updated</b> assumptions from the remeasurement to be used for current service cost and net interest for the <b>remainder of the period</b>. Continuing with stale opening assumptions after a plan amendment is precisely what the amendment corrected."
  }
},
{
  id: "attribution",
  title: "Attributing Benefit to Periods of Service",
  blocks: [
    {t:"p", html:"Before any of the cost can be computed, the benefit must be <b>attributed to periods of service</b>. PAS 19 requires the <b>projected unit credit method</b>: each period of service gives rise to an additional unit of benefit entitlement, and those units are measured separately to build up the final obligation."},
    {t:"note", html:"<b>The attribution period.</b> Benefit is attributed from <b>the date when employee service first leads to benefits under the plan</b> until <b>the date when further service will lead to no material amount of further benefits</b>, other than from further salary increases."},
    {t:"p", html:"Where the benefit formula gives a <b>materially higher</b> level of benefit for later years, the benefit is attributed on a <b>straight-line basis</b> across the whole attribution period."},
    {t:"note", html:"<b>The 2021 IFRIC agenda decision.</b> The Committee considered a plan giving a lump sum at a specified retirement age, where the amount depends on length of service but is <b>capped at a specified number of years</b>. It concluded that the benefit is attributed only to the years in which service actually <b>generates</b> the benefit - in the fact pattern considered, the <b>16 years to age 62</b> rather than the whole career from the date of hire.<br><br>The principle: attribution ends when further service <b>adds no material further benefit</b>. This is directly relevant to Philippine plans with service caps, and it changed practice for some entities."},
    {t:"example", title:"Illustrative example 2 - where attribution starts and stops", blocks:[
      {t:"table",
        head:["Plan","Attribution period"],
        rows:[
          ["Lump sum of P10,000 for each year of service, no cap","<b>The whole period of service</b> - every year adds benefit"],
          ["Benefit payable only after 5 years' service, then P10,000 per year of service including the first five","<b>From the first day of service</b> - the first five years do lead to benefit once the condition is met"],
          ["Lump sum capped at 20 years of service, retirement at 62","<b>From age 42 to 62</b> - service before that adds nothing to the final benefit"],
          ["A flat P500,000 payable on reaching age 60, regardless of service length","<b>From the date of hire to age 60</b> - the benefit is conditional on service to that date"]
        ]},
      {t:"p", html:"The third line is the agenda decision fact pattern. An entity attributing that benefit from the date of hire would <b>overstate</b> the obligation in the early years and understate the later cost."}
    ]}
  ],
  check:{
    q:"A plan pays a lump sum at age 62 based on length of service, capped at 20 years. Over what period is the benefit attributed?",
    choices:[
      "From the date of hire to age 62.",
      "From age 42 to age 62 - the years in which service actually generates additional benefit.",
      "Evenly over the employee's whole working life.",
      "Only in the year of retirement."
    ],
    answer:1,
    why:"Attribution runs from when service <b>first leads to benefits</b> until further service leads to <b>no material further benefit</b>. With a 20-year cap and retirement at 62, service before age 42 adds nothing to the final benefit, so it attracts no attribution - the conclusion of the 2021 IFRIC agenda decision."
  }
},
{
  id: "net-interest",
  title: "Net Interest",
  blocks: [
    {t:"p", html:"<b>Net interest</b> is the change in the net defined benefit liability or asset arising from the <b>passage of time</b>. It is computed by multiplying the <b>net</b> defined benefit liability or asset by the <b>discount rate</b>, and is conveniently split into three:"},
    {t:"ul", items:[
      "<b>Interest expense on the DBO</b> = DBO, beginning x discount rate",
      "<b>Interest income on plan assets</b> = FVPA, beginning x discount rate",
      "<b>Interest on the effect of the asset ceiling</b> = effect of the asset ceiling, beginning x discount rate"
    ]},
    {t:"p", html:"<b>Net interest = interest expense on DBO - interest income on plan assets + interest on the effect of the asset ceiling.</b>"},
    {t:"note", html:"<b>The discount rate, in order of priority:</b> the market yield on <b>high quality corporate bonds</b> at the reporting date. Where there is no deep market in such bonds, the market yield on <b>government bonds</b>. The currency and term of the bonds must be <b>consistent with the currency and estimated term of the obligation</b>.<br><br>The same single rate is applied to all three elements - which is why they can be netted into one figure. <b>Interest income on plan assets is also called the expected return on plan assets.</b>"},
    {t:"note", html:"<b>A precision point examiners simplify away.</b> PAS 19.123 requires net interest to be determined using the net liability and the discount rate at the start of the period, <b>taking account of changes during the period as a result of contributions and benefit payments</b>. In principle a contribution made in March earns interest for nine months.<br><br>In practice, and in virtually every Philippine examination problem, net interest is computed on <b>opening balances alone</b>. Use opening balances unless a problem gives you dates and clearly intends otherwise - but know that the simplification is a simplification."},
    {t:"example", title:"Illustrative example 3 - computing net interest", blocks:[
      {t:"p", html:"DBO at 1 January P9,500,000; plan assets P8,000,000; discount rate 8%."},
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Interest expense on DBO","9,500,000 x 8%","760,000"],
          ["Interest income on plan assets","8,000,000 x 8%","(640,000)"],
          ["<b>Net interest expense</b>","","<b>120,000</b>"]
        ]},
      {t:"p", html:"Equivalently: the net defined benefit liability of P1,500,000 x 8% = P120,000. Where plan assets <b>exceed</b> the obligation, net interest becomes net interest <b>income</b>."}
    ]}
  ],
  check:{
    q:"DBO at the start of the year is P6,000,000, plan assets are P4,500,000 and the discount rate is 8%. Net interest is:",
    choices:["P480,000 expense","P360,000 income","P120,000 expense","P840,000 expense"],
    answer:2,
    why:"Interest on DBO P480,000 less interest income on plan assets P360,000 = <b>P120,000 expense</b> - which is also the net liability of P1,500,000 x 8%. Where plan assets exceed the obligation this becomes net interest income."
  }
},
{
  id: "assumptions",
  title: "Actuarial Assumptions",
  blocks: [
    {t:"p", html:"Actuarial assumptions must be <b>unbiased</b> - neither imprudent nor excessively conservative - and <b>mutually compatible</b>, reflecting the economic relationships between factors such as inflation, salary increases and discount rates."},
    {t:"table",
      head:["Demographic assumptions","Financial assumptions"],
      rows:[
        ["Mortality, during and after employment","The <b>discount rate</b>"],
        ["Rates of employee turnover, disability and early retirement","Future <b>salary and benefit levels</b>"],
        ["The proportion of members with dependants eligible for benefits","Future <b>medical cost</b> trends, for medical plans"],
        ["Claim rates under medical plans","Taxes payable by the plan on contributions or benefits"]
      ]},
    {t:"note", html:"<b>Salary increases are assumed, not ignored.</b> The obligation is measured on the basis of <b>projected</b> final salary, not current salary, because the benefit formula will be applied to the salary at retirement. This is what makes the method 'projected' unit credit."},
    {t:"note", html:"<b>Actuarial gains and losses arise from two sources</b>, and problems will name them: <b>experience adjustments</b> - the differences between what was previously assumed and what actually occurred - and <b>the effects of changes in actuarial assumptions</b>. Both are remeasurements of the obligation, and both go to <b>other comprehensive income</b>."},
    {t:"p", html:"The frequency of valuation is not prescribed, but the entity must determine the obligation with <b>sufficient regularity</b> that the amounts recognised do not differ materially from those that would be determined at the reporting date."}
  ],
  check:{
    q:"Which is a FINANCIAL rather than a demographic actuarial assumption?",
    choices:[
      "Employee turnover rates",
      "Mortality during employment",
      "Future salary levels",
      "The proportion of members with eligible dependants"
    ],
    answer:2,
    why:"<b>Future salary levels</b> is a financial assumption, along with the discount rate, medical cost trends and taxes payable by the plan. The other three are <b>demographic</b>. Note that salary increases must be <b>projected</b>, not ignored - that is what makes the method <i>projected</i> unit credit."
  }
},
{
  id: "remeasurements",
  title: "Remeasurements and the Memorandum Records",
  blocks: [
    {t:"p", html:"The plan is <b>not</b> in the entity's ledger. Its details are kept in <b>memorandum records</b> holding two balances - the <b>fair value of plan assets</b> and the <b>defined benefit obligation</b> - and only the <b>net</b> figure appears in the financial statements."},
    {t:"table",
      head:["Fair value of plan assets","Defined benefit obligation"],
      rows:[
        ["Beginning balance","Beginning balance"],
        ["<b>Add:</b> interest income","<b>Add:</b> interest expense"],
        ["<b>Add:</b> contributions to the fund","<b>Add:</b> current service cost"],
        ["<b>Add:</b> remeasurement gain","<b>Add:</b> past service cost"],
        ["<b>Less:</b> benefits paid to retirees","<b>Add:</b> remeasurement (actuarial) loss"],
        ["<b>Less:</b> remeasurement loss","<b>Less:</b> benefits paid to retirees"],
        ["<b>Less:</b> assets transferred on settlement","<b>Less:</b> remeasurement (actuarial) gain"],
        ["<b>= Ending balance</b>","<b>Less:</b> obligation extinguished on settlement"],
        ["","<b>= Ending balance</b>"]
      ]},
    {t:"note", html:"<b>Benefits paid reduce both sides equally</b>, so they have <b>no net effect</b> on the accrued or prepaid benefit cost. Contributions increase plan assets only - which is why they reduce the net liability. A <b>settlement</b> reduces both, but usually by <b>different</b> amounts, and that difference is the settlement gain or loss."},
    {t:"h", html:"Determining the remeasurements"},
    {t:"table",
      head:["On plan assets","Result"],
      rows:[
        ["Actual return <b>&gt;</b> interest income","Remeasurement <b>gain</b>"],
        ["Actual return <b>&lt;</b> interest income","Remeasurement <b>loss</b>"]
      ]},
    {t:"p", html:"So <b>actual return on plan assets = interest income + remeasurement gain</b>, or interest income less a remeasurement loss. The two always reconcile to the actual return."},
    {t:"note", html:"<b>What is excluded from the return on plan assets.</b> The return is measured <b>net of the costs of managing the plan assets</b> and net of any tax payable by the plan itself. But the <b>costs of administering the plan</b> other than investment management costs are <b>not</b> deducted - they are recognised as an expense when the administration services are received."},
    {t:"table",
      head:["On the defined benefit obligation","Result"],
      rows:[
        ["DBO per actuary <b>&gt;</b> DBO per books","Remeasurement <b>loss</b>"],
        ["DBO per actuary <b>&lt;</b> DBO per books","Remeasurement <b>gain</b>"]
      ]},
    {t:"h", html:"The net figure on the balance sheet"},
    {t:"table",
      head:["","Meaning","Presentation"],
      rows:[
        ["<b>FVPA &lt; DBO</b>","<b>Accrued benefit cost</b> - a deficit, underfunded","Non-current <b>liability</b>"],
        ["<b>FVPA &gt; DBO</b>","<b>Prepaid benefit cost</b> - a surplus, overfunded","Non-current <b>asset</b>, limited to the <b>asset ceiling</b>"]
      ]}
  ],
  check:{
    q:"Plan assets open at P5,000,000, the discount rate is 10%, and the actual return is P800,000. What remeasurement arises?",
    choices:[
      "A remeasurement gain of P300,000",
      "A remeasurement loss of P300,000",
      "A remeasurement gain of P800,000",
      "None - the actual return goes to profit or loss in full"
    ],
    answer:0,
    why:"Interest income is P5,000,000 x 10% = P500,000, and that is the amount in profit or loss. The actual return of P800,000 exceeds it by <b>P300,000</b>, a <b>remeasurement gain</b> in other comprehensive income. The two reconcile to the actual return."
  }
},
{
  id: "asset-ceiling",
  title: "The Asset Ceiling",
  blocks: [
    {t:"ul", items:[
      "The <b>asset ceiling</b> is the present value of <b>economic benefits available in the form of refunds from the plan or reductions in future contributions</b>.",
      "The <b>effect of the asset ceiling</b> is the <b>excess of the surplus over that ceiling</b> - the part of the surplus that cannot be recognised."
    ]},
    {t:"note", html:"<b>Why the ceiling exists.</b> A surplus is an asset only to the extent the entity can actually <b>get at it</b> - by taking a refund or paying less in future. A surplus locked in a fund the employer can never access fails the definition of an asset, so recognition is capped. IFRIC 14 gives the detailed guidance, including how a <b>minimum funding requirement</b> can itself create an additional liability."},
    {t:"example", title:"Illustrative example 4 - Knight Company", blocks:[
      {t:"p", html:"FVPA 1 January <b>P9,000,000</b>; DBO <b>P7,500,000</b>; asset ceiling <b>P1,050,000</b>. Current service cost P1,050,000; past service cost P300,000; remeasurement gain on plan assets P300,000; contributions P1,500,000; actuarial gain on the DBO P750,000; discount rate 10%. The asset ceiling at 31 December is <b>P1,800,000</b>."},
      {t:"table",
        head:["Opening position","Amount"],
        rows:[
          ["Surplus (9,000,000 - 7,500,000)","1,500,000"],
          ["Asset ceiling","(1,050,000)"],
          ["<b>Effect of the asset ceiling</b>","<b>450,000</b>"]
        ]},
      {t:"table",
        head:["Employee benefit expense","Computation","Amount"],
        rows:[
          ["Current service cost","","1,050,000"],
          ["Past service cost","","300,000"],
          ["Interest expense on DBO","7,500,000 x 10%","750,000"],
          ["Interest income on plan assets","9,000,000 x 10%","(900,000)"],
          ["Interest on the effect of the asset ceiling","450,000 x 10%","45,000"],
          ["<b>Employee benefit expense</b>","","<b>1,245,000</b>"]
        ]},
      {t:"table",
        head:["Roll-forward","DBO","FVPA"],
        rows:[
          ["Beginning","7,500,000","9,000,000"],
          ["Interest","750,000","900,000"],
          ["Current service cost","1,050,000",""],
          ["Past service cost","300,000",""],
          ["Contributions","","1,500,000"],
          ["Remeasurement","(750,000) gain","300,000 gain"],
          ["<b>Ending</b>","<b>8,850,000</b>","<b>11,700,000</b>"]
        ]},
      {t:"table",
        head:["Closing position and remeasurement","Amount"],
        rows:[
          ["Surplus (11,700,000 - 8,850,000)","2,850,000"],
          ["Asset ceiling","(1,800,000)"],
          ["<b>Effect of the asset ceiling, closing</b>","<b>1,050,000</b>"],
          ["Less: opening effect plus its interest (450,000 + 45,000)","(495,000)"],
          ["<b>Remeasurement LOSS on the effect of the asset ceiling</b>","<b>555,000</b>"]
        ]},
      {t:"table",
        head:["Net remeasurement","Amount"],
        rows:[
          ["Remeasurement gain on plan assets","(300,000)"],
          ["Actuarial gain on the DBO","(750,000)"],
          ["Remeasurement loss on the effect of the asset ceiling","555,000"],
          ["<b>Net remeasurement GAIN</b>","<b>(495,000)</b>"]
        ]},
      {t:"p", html:"<b>Defined benefit cost = P1,245,000 - P495,000 = P750,000.</b> <b>Prepaid benefit cost recognised = P1,800,000</b>, the ceiling, not the P2,850,000 surplus."},
      {t:"note", html:"<b>Check it against the identity.</b> Opening prepaid was the lower of the P1,500,000 surplus and the P1,050,000 ceiling = P1,050,000. Then P1,050,000 + contributions P1,500,000 - defined benefit cost P750,000 = <b>P1,800,000</b>. It reconciles."}
    ]}
  ],
  check:{
    q:"Plan assets are P11,700,000, the DBO is P8,850,000 and the asset ceiling is P1,800,000. What is recognised on the statement of financial position?",
    choices:[
      "A prepaid benefit cost of P2,850,000",
      "A prepaid benefit cost of P1,800,000",
      "An accrued benefit cost of P1,050,000",
      "A prepaid benefit cost of P1,050,000"
    ],
    answer:1,
    why:"The surplus is P2,850,000 but may be recognised only up to the <b>asset ceiling of P1,800,000</b> - the present value of what the entity can actually obtain by refund or reduced contributions. The P1,050,000 excess is the <b>effect of the asset ceiling</b> and is not recognised."
  }
},
{
  id: "presentation",
  title: "Presentation and Disclosure",
  blocks: [
    {t:"table",
      head:["Component","Recognised in"],
      rows:[
        ["Service cost - current, past, and gain or loss on settlement","<b>Profit or loss</b>"],
        ["Net interest","<b>Profit or loss</b>"],
        ["Remeasurements - on the DBO, on plan assets, and on the effect of the asset ceiling","<b>Other comprehensive income</b>"]
      ]},
    {t:"note", html:"<b>Remeasurements are never reclassified.</b> Unlike some other items of other comprehensive income, remeasurements of a defined benefit plan are <b>never recycled</b> to profit or loss in a later period. They may be <b>transferred within equity</b> - typically to retained earnings - but they never pass through the income statement again. This is the Conceptual Framework's recycling question, answered definitively for this standard."},
    {t:"table",
      head:["","Presentation"],
      rows:[
        ["<b>Accrued benefit cost</b> - FVPA below DBO","Non-current <b>liability</b>"],
        ["<b>Prepaid benefit cost</b> - FVPA above DBO","Non-current <b>asset</b>, limited to the <b>asset ceiling</b>"]
      ]},
    {t:"p", html:"PAS 19 does not prescribe whether service cost and net interest are presented as one line or separately, nor in which line item. Many entities present service cost within employee benefit expense and <b>net interest within finance costs</b>."},
    {t:"h", html:"The principal disclosures"},
    {t:"p", html:"The disclosure objectives are to explain the <b>characteristics</b> of the plans and the risks associated with them; to identify and explain the <b>amounts</b> in the financial statements; and to describe how the plans may affect the <b>amount, timing and uncertainty</b> of future cash flows."},
    {t:"ul", items:[
      "A <b>reconciliation from opening to closing balances</b> of the DBO, the plan assets, and the effect of the asset ceiling, showing each component separately.",
      "A <b>disaggregation of plan assets</b> by class, distinguishing those with a quoted market price in an active market.",
      "The <b>significant actuarial assumptions</b> used.",
      "A <b>sensitivity analysis</b> for each significant actuarial assumption, showing the effect on the DBO of reasonably possible changes at the reporting date.",
      "The <b>expected contributions</b> for the next annual period, and the <b>weighted average duration</b> of the obligation."
    ]},
    {t:"note", html:"The <b>sensitivity analysis</b> is the disclosure that does most work for a reader. The obligation is the product of assumptions no reader can verify, so showing how much it moves for a reasonable change in the discount rate or salary growth is the only practical way to convey how soft the number is."}
  ],
  check:{
    q:"How are remeasurements of a defined benefit plan treated in later periods?",
    choices:[
      "Reclassified to profit or loss as benefits are paid.",
      "Reclassified over the average remaining service period.",
      "Never reclassified to profit or loss, though they may be transferred within equity.",
      "Reversed against the following year's service cost."
    ],
    answer:2,
    why:"They are <b>never recycled</b>. A transfer within equity - typically to retained earnings - is permitted, but they do not pass through the income statement in any later period. Contrast other long-term employee benefits, whose remeasurements go to profit or loss in the first place."
  }
},
/* ---------------- comprehensive running case ---------------- */
{
  id: "case-1",
  title: "Comprehensive Case, Stage 1 - The First Year",
  blocks: [
    {t:"p", html:"The examples so far each took a single year. The next three parts work one plan across two years - through a plan amendment and a settlement - to the face of the statements."},
    {t:"note", html:"<b>Rizal Cement Corporation - the facts for 2030.</b><br><br>&bull; Fair value of plan assets, 1 January: <b>P8,000,000</b><br>&bull; Defined benefit obligation, 1 January: <b>P9,500,000</b><br>&bull; Discount rate: <b>8%</b><br>&bull; Current service cost: <b>P1,200,000</b><br>&bull; Contributions to the fund: <b>P1,500,000</b><br>&bull; Benefits paid to retirees: <b>P700,000</b><br>&bull; Actual return on plan assets: <b>P800,000</b><br>&bull; Actuarial loss on the DBO from a change in assumptions: <b>P400,000</b><br>&bull; There is no asset ceiling issue - the plan is in deficit."},
    {t:"example", title:"Stage 1a - the two components in profit or loss", blocks:[
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Current service cost","","1,200,000"],
          ["Interest expense on the DBO","9,500,000 x 8%","760,000"],
          ["Interest income on plan assets","8,000,000 x 8%","(640,000)"],
          ["<b>Employee benefit expense</b>","","<b>1,320,000</b>"]
        ]},
      {t:"p", html:"Net interest is P120,000 - which is also the opening net liability of P1,500,000 x 8%."}
    ]},
    {t:"example", title:"Stage 1b - remeasurements and the defined benefit cost", blocks:[
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Remeasurement gain on plan assets","800,000 actual - 640,000 interest income","(160,000)"],
          ["Actuarial loss on the DBO","given","400,000"],
          ["<b>Net remeasurement LOSS - other comprehensive income</b>","","<b>240,000</b>"]
        ]},
      {t:"p", html:"<b>Defined benefit cost = P1,320,000 + P240,000 = P1,560,000.</b>"}
    ]},
    {t:"example", title:"Stage 1c - rolling the memorandum records forward", blocks:[
      {t:"table",
        head:["","DBO","FVPA"],
        rows:[
          ["Beginning balance","9,500,000","8,000,000"],
          ["Interest","760,000","640,000"],
          ["Current service cost","1,200,000",""],
          ["Contributions","","1,500,000"],
          ["Remeasurement","400,000 loss","160,000 gain"],
          ["Benefits paid","(700,000)","(700,000)"],
          ["<b>Ending balance</b>","<b>11,160,000</b>","<b>9,600,000</b>"]
        ]},
      {t:"p", html:"<b>Accrued benefit cost at 31 December 2030 = P11,160,000 - P9,600,000 = P1,560,000</b>, a non-current liability."},
      {t:"note", html:"<b>The identity checks.</b> Opening accrued was P9,500,000 - P8,000,000 = P1,500,000. Then P1,500,000 + defined benefit cost P1,560,000 - contributions P1,500,000 = <b>P1,560,000</b>. It reconciles. Note that benefits paid appear nowhere in the check, because they cut both records equally."}
    ]}
  ],
  check:{
    q:"In Stage 1, Rizal's accrued benefit cost moves from P1,500,000 to P1,560,000 - a rise of only P60,000, although the defined benefit cost was P1,560,000. Why?",
    choices:[
      "Because benefits of P700,000 were paid to retirees.",
      "Because contributions of P1,500,000 were made to the fund.",
      "Because the remeasurement loss is not recognised.",
      "Because interest income exceeded interest expense."
    ],
    answer:1,
    why:"The identity is <b>opening + defined benefit cost - contributions = closing</b>. The cost of P1,560,000 was almost entirely offset by contributions of P1,500,000. <b>Benefits paid have no net effect</b>, because they reduce the obligation and the plan assets by the same amount."
  }
},
{
  id: "case-2",
  title: "Comprehensive Case, Stage 2 - An Amendment and a Settlement",
  blocks: [
    {t:"note", html:"<b>Rizal Cement - the facts for 2031.</b><br><br>&bull; Opening balances carried forward: DBO <b>P11,160,000</b>; plan assets <b>P9,600,000</b>; discount rate remains <b>8%</b>.<br>&bull; Current service cost: <b>P1,300,000</b><br>&bull; On <b>1 July</b> the plan is amended to increase benefits for past service, giving a <b>past service cost of P900,000</b>. Actuarial assumptions are unchanged, so the discount rate stays at 8%.<br>&bull; On <b>31 December</b> the entity settles part of the obligation, paying <b>P1,000,000</b> out of plan assets to extinguish a defined benefit obligation of <b>P1,150,000</b>.<br>&bull; Contributions: <b>P1,600,000</b>; benefits paid to retirees: <b>P800,000</b><br>&bull; Actual return on plan assets: <b>P1,100,000</b>; actuarial <b>gain</b> on the DBO: <b>P300,000</b>"},
    {t:"example", title:"Stage 2a - service cost, including the settlement", blocks:[
      {t:"table",
        head:["Gain or loss on settlement","Amount"],
        rows:[
          ["Settlement price - plan assets transferred","1,000,000"],
          ["Less: present value of the obligation settled","(1,150,000)"],
          ["<b>GAIN on settlement</b>","<b>(150,000)</b>"]
        ]},
      {t:"table",
        head:["Service cost","Amount"],
        rows:[
          ["Current service cost","1,300,000"],
          ["Past service cost - recognised immediately and in full","900,000"],
          ["Gain on settlement","(150,000)"],
          ["<b>Total service cost</b>","<b>2,050,000</b>"]
        ]},
      {t:"note", html:"<b>Two points examiners test here.</b> First, past service cost is recognised <b>immediately and in full</b> on 1 July - there is no spreading over any vesting period. Second, the settlement gain arises because the entity extinguished an obligation of P1,150,000 for a payment of only P1,000,000 - it settled <b>cheaply</b>, and the P150,000 benefit is service cost, <b>not</b> a remeasurement."}
    ]},
    {t:"example", title:"Stage 2b - net interest and the expense", blocks:[
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Interest expense on the DBO","11,160,000 x 8%","892,800"],
          ["Interest income on plan assets","9,600,000 x 8%","(768,000)"],
          ["<b>Net interest expense</b>","","<b>124,800</b>"],
          ["Total service cost","from Stage 2a","2,050,000"],
          ["<b>Employee benefit expense</b>","","<b>2,174,800</b>"]
        ]},
      {t:"note", html:"Net interest is computed on <b>opening</b> balances, the usual examination simplification. Strictly, PAS 19.123 would take account of the July amendment and the contributions and benefit payments during the year - and, had the amendment changed the discount rate, the 2019 amendment would require the <b>updated</b> rate for July to December. Here the assumptions did not change, so the single rate holds for the whole year."}
    ]},
    {t:"example", title:"Stage 2c - remeasurements and the roll-forward", blocks:[
      {t:"table",
        head:["","Computation","Amount"],
        rows:[
          ["Remeasurement gain on plan assets","1,100,000 actual - 768,000 interest income","(332,000)"],
          ["Actuarial gain on the DBO","given","(300,000)"],
          ["<b>Net remeasurement GAIN - other comprehensive income</b>","","<b>(632,000)</b>"]
        ]},
      {t:"p", html:"<b>Defined benefit cost = P2,174,800 - P632,000 = P1,542,800.</b>"},
      {t:"table",
        head:["","DBO","FVPA"],
        rows:[
          ["Beginning balance","11,160,000","9,600,000"],
          ["Interest","892,800","768,000"],
          ["Current service cost","1,300,000",""],
          ["Past service cost","900,000",""],
          ["Contributions","","1,600,000"],
          ["Remeasurement","(300,000) gain","332,000 gain"],
          ["Benefits paid","(800,000)","(800,000)"],
          ["Settlement","(1,150,000)","(1,000,000)"],
          ["<b>Ending balance</b>","<b>12,002,800</b>","<b>10,500,000</b>"]
        ]},
      {t:"p", html:"<b>Accrued benefit cost at 31 December 2031 = P12,002,800 - P10,500,000 = P1,502,800.</b>"},
      {t:"note", html:"<b>The identity checks again.</b> P1,560,000 opening + P1,542,800 defined benefit cost - P1,600,000 contributions = <b>P1,502,800</b>.<br><br>Note the <b>settlement line</b> in the roll-forward: it reduces the obligation by P1,150,000 but plan assets by only P1,000,000. That P150,000 asymmetry <i>is</i> the settlement gain - it does not need to be recorded separately, because the two records already carry it."}
    ]}
  ],
  check:{
    q:"Rizal settles an obligation of P1,150,000 by paying P1,000,000 from plan assets. How is the P150,000 treated?",
    choices:[
      "As a remeasurement gain in other comprehensive income.",
      "As a gain on settlement, part of service cost in profit or loss.",
      "As a reduction of the current service cost only.",
      "It is not recognised until the plan is wound up."
    ],
    answer:1,
    why:"A <b>gain on settlement</b> is a component of <b>service cost</b> and therefore goes to <b>profit or loss</b>, not OCI. The entity extinguished an obligation carried at P1,150,000 for P1,000,000 - it settled cheaply, and that benefit is earned, not a change in estimate."
  }
},
{
  id: "case-3",
  title: "Comprehensive Case, Stage 3 - The Statements",
  blocks: [
    {t:"example", title:"Stage 3a - the financial statements, 2031", blocks:[
      {t:"table",
        head:["Profit or loss, 2031","Amount"],
        rows:[
          ["Current service cost","1,300,000"],
          ["Past service cost","900,000"],
          ["Gain on settlement","(150,000)"],
          ["Net interest - often presented within finance costs","124,800"],
          ["<b>Charged to profit or loss</b>","<b>2,174,800</b>"]
        ]},
      {t:"table",
        head:["Other comprehensive income, 2031 - not reclassified","Amount"],
        rows:[
          ["Remeasurement gain on plan assets","(332,000)"],
          ["Actuarial gain on the defined benefit obligation","(300,000)"],
          ["<b>Credited to other comprehensive income</b>","<b>(632,000)</b>"]
        ]},
      {t:"table",
        head:["Statement of financial position, 31 December 2031","Amount"],
        rows:[
          ["<b>Non-current liabilities</b> - accrued benefit cost","1,502,800"]
        ]},
      {t:"note", html:"<b>The two memorandum balances do not appear.</b> Neither the P12,002,800 obligation nor the P10,500,000 of plan assets is presented on the face of the statements - only the <b>net</b> P1,502,800. Both figures do appear in the notes, in the required reconciliation from opening to closing balances."}
    ]},
    {t:"example", title:"Stage 3b - the note reconciliation", blocks:[
      {t:"table",
        head:["Movement in the net defined benefit liability","Amount"],
        rows:[
          ["Net liability, 1 January 2031","1,560,000"],
          ["Amounts charged to profit or loss","2,174,800"],
          ["Amounts credited to other comprehensive income","(632,000)"],
          ["Contributions to the fund","(1,600,000)"],
          ["<b>Net liability, 31 December 2031</b>","<b>1,502,800</b>"]
        ]},
      {t:"p", html:"This is the identity written out as a disclosure. A reader can see immediately that the plan cost P1,542,800 for the year, that the entity funded P1,600,000 of it, and that the deficit therefore narrowed slightly."},
      {t:"table",
        head:["Also disclosed","Why it matters"],
        rows:[
          ["<b>Disaggregation of plan assets</b> by class, showing which have quoted prices","Tells the reader how reliable the P10,500,000 is"],
          ["<b>Significant actuarial assumptions</b> - discount rate, salary growth, mortality","The obligation is the product of these; without them the figure is uninterpretable"],
          ["<b>Sensitivity analysis</b> for each significant assumption","Shows how far the P12,002,800 would move on a reasonable change - the softness of the number"],
          ["<b>Expected contributions</b> for 2032 and the <b>weighted average duration</b>","Speaks to the amount and timing of future cash flows"]
        ]}
    ]},
    {t:"h", html:"Reading the case as a whole"},
    {t:"table",
      head:["Stage","The question","The governing idea"],
      rows:[
        ["<b>Year 1</b>","What does the promise cost?","<b>Service cost</b> and <b>net interest</b> to profit or loss; <b>remeasurements</b> to OCI; the identity ties it to the balance sheet"],
        ["<b>Amendment</b>","What if the promise changes?","<b>Past service cost immediately and in full</b>; updated assumptions for the <b>remainder</b> of the period where they change"],
        ["<b>Settlement</b>","What if part of it is bought out?","Gain or loss = <b>settlement price less the PV of the obligation settled</b>, in <b>service cost</b>, not OCI"],
        ["<b>Presentation</b>","What does the reader see?","Only the <b>net</b> figure on the face; the two memorandum balances, the assumptions and a <b>sensitivity analysis</b> in the notes"]
      ]}
  ],
  check:{
    q:"Rizal's note reconciliation shows opening P1,560,000, plus P2,174,800 to profit or loss, less P632,000 to OCI, less P1,600,000 contributions, giving P1,502,800. What does the reader learn that the face of the statements does not show?",
    choices:[
      "Nothing - the reconciliation repeats the balance sheet.",
      "That the plan cost P1,542,800 for the year, of which the entity funded P1,600,000, so the deficit narrowed.",
      "That remeasurements will be recycled to profit or loss later.",
      "The fair value of plan assets is P1,502,800."
    ],
    answer:1,
    why:"The face of the statements shows only the closing net liability. The reconciliation separates the <b>cost</b> of the year (P2,174,800 less P632,000 = P1,542,800) from the <b>funding</b> (P1,600,000), which is the difference between what the promise cost and what the entity paid towards it - the single most useful thing a reader can take from the note."
  }
}
],

flashcards: [
  {f:"Name the three components of defined benefit cost and where each goes.", b:"<b>Service cost</b> and <b>net interest</b> to <b>profit or loss</b> - together the employee benefit expense. <b>Remeasurements</b> to <b>other comprehensive income</b>. All three together are the defined benefit cost."},
  {f:"State the identity that checks any defined benefit computation.", b:"<b>Opening accrued/prepaid + defined benefit cost - contributions = closing accrued/prepaid.</b> Benefits paid never appear, because they reduce both records equally."},
  {f:"Define current service cost and past service cost.", b:"<b>Current</b> - the increase in the PV of the obligation from service <b>in the current period</b>. <b>Past</b> - the change in the PV of the obligation for <b>prior</b> service, from a <b>plan amendment or curtailment</b>."},
  {f:"How and when is past service cost recognised?", b:"<b>Immediately and in full</b>, at the earlier of when the amendment or curtailment occurs and when related restructuring or termination costs are recognised. <b>No spreading</b> over a vesting period."},
  {f:"How is a curtailment treated?", b:"As part of <b>past service cost</b> - whether it produces a gain or a loss. It is a significant reduction in the number of employees covered or in benefits for future service."},
  {f:"How is the gain or loss on settlement computed?", b:"<b>Settlement price</b> - the plan assets transferred and any payment made - <b>less the present value of the obligation settled</b>. Positive is a loss; negative a gain. It is <b>service cost</b>, in profit or loss."},
  {f:"What did the 2019 amendment to PAS 19 require?", b:"After a plan amendment, curtailment or settlement: use the <b>updated assumptions</b> from the remeasurement to determine <b>current service cost and net interest for the remainder of the period</b>; and measure past service cost or settlement gain/loss <b>ignoring the asset ceiling</b>, with the resulting ceiling change going to <b>OCI</b>."},
  {f:"Which method attributes benefit to periods of service?", b:"The <b>projected unit credit method</b> - each period of service gives rise to an additional unit of benefit entitlement, measured separately to build up the obligation."},
  {f:"Over what period is benefit attributed?", b:"From the date service <b>first leads to benefits</b> under the plan until the date further service leads to <b>no material further benefit</b>, other than from further salary increases."},
  {f:"A plan caps benefit at 20 years' service with retirement at 62. Over what period is benefit attributed?", b:"<b>From age 42 to 62.</b> Earlier service adds nothing to the final benefit, so it attracts no attribution - the 2021 IFRIC agenda decision."},
  {f:"How is net interest computed?", b:"<b>Interest expense on the DBO - interest income on plan assets + interest on the effect of the asset ceiling</b>, each being the <b>opening balance x the discount rate</b>. Equivalently, the net liability x the rate."},
  {f:"Which discount rate is used, in what order?", b:"The market yield on <b>high quality corporate bonds</b>; failing a deep market, <b>government bonds</b>. Currency and term must be <b>consistent with the obligation</b>."},
  {f:"What does PAS 19.123 require that examination problems simplify away?", b:"Net interest must take account of <b>changes during the period from contributions and benefit payments</b>. In practice problems use <b>opening balances alone</b>."},
  {f:"Distinguish demographic from financial actuarial assumptions.", b:"<b>Demographic</b> - mortality, turnover, disability, early retirement, dependants, claim rates. <b>Financial</b> - the <b>discount rate</b>, future <b>salary and benefit levels</b>, <b>medical cost</b> trends, taxes payable by the plan."},
  {f:"What must actuarial assumptions be?", b:"<b>Unbiased</b> - neither imprudent nor excessively conservative - and <b>mutually compatible</b>, reflecting the economic relationships between inflation, salary growth and discount rates."},
  {f:"What are the two sources of actuarial gains and losses?", b:"<b>Experience adjustments</b> - differences between what was assumed and what occurred - and the <b>effects of changes in actuarial assumptions</b>. Both are remeasurements, to OCI."},
  {f:"How is the remeasurement on plan assets determined?", b:"<b>Actual return greater than interest income = gain</b>; less than interest income = loss. So actual return = interest income plus or minus the remeasurement."},
  {f:"What is deducted in arriving at the return on plan assets?", b:"The <b>costs of managing the plan assets</b> and any <b>tax payable by the plan</b>. <b>Administration costs</b> other than investment management are <b>not</b> deducted - they are expensed when the service is received."},
  {f:"How is the remeasurement on the obligation determined?", b:"<b>DBO per actuary above DBO per books = loss</b>; below = gain."},
  {f:"Which items increase plan assets, and which the obligation?", b:"<b>Plan assets</b> - interest income, contributions, remeasurement gains; reduced by benefits paid, remeasurement losses and settlement payments. <b>Obligation</b> - interest expense, current and past service cost, actuarial losses; reduced by benefits paid, actuarial gains and obligations settled."},
  {f:"What is the effect of benefits paid on the net balance sheet figure?", b:"<b>None.</b> They reduce plan assets and the obligation equally. Contributions increase plan assets only, which is why they reduce the net liability."},
  {f:"When is there an accrued benefit cost, and how is it presented?", b:"When <b>FVPA is below the DBO</b> - a deficit. Presented as a <b>non-current liability</b>."},
  {f:"When is there a prepaid benefit cost, and how is it presented?", b:"When <b>FVPA exceeds the DBO</b> - a surplus. Presented as a <b>non-current asset</b>, limited to the <b>asset ceiling</b>."},
  {f:"Define the asset ceiling and its effect.", b:"The <b>asset ceiling</b> is the PV of economic benefits available as <b>refunds or reductions in future contributions</b>. Its <b>effect</b> is the <b>excess of the surplus over that ceiling</b>."},
  {f:"Why does the asset ceiling exist?", b:"A surplus is an asset only to the extent the entity can <b>access</b> it. A surplus it can never obtain fails the definition of an asset, so recognition is capped. <b>IFRIC 14</b> gives the detail, including minimum funding requirements."},
  {f:"Are remeasurements ever recycled to profit or loss?", b:"<b>Never.</b> They may be <b>transferred within equity</b>, typically to retained earnings, but never pass through the income statement again."},
  {f:"Name five principal PAS 19 disclosures.", b:"A <b>reconciliation</b> of opening to closing DBO, plan assets and ceiling effect; a <b>disaggregation of plan assets</b> by class; the <b>significant actuarial assumptions</b>; a <b>sensitivity analysis</b>; and <b>expected contributions</b> and the <b>weighted average duration</b>."},
  {f:"Why is the sensitivity analysis the most useful disclosure?", b:"The obligation is the product of assumptions no reader can verify. Showing how far it moves on a reasonable change in the discount rate or salary growth is the only practical way to convey <b>how soft the number is</b>."}
],

quiz: [
  {q:"Which component of defined benefit cost goes to other comprehensive income?",
   c:["Current service cost","Past service cost","Net interest","Remeasurements"],
   a:3, why:"Remeasurements - on the obligation, on plan assets and on the ceiling effect. Service cost and net interest go to profit or loss and together form the employee benefit expense.", tos:"H.3.2 Components"},

  {q:"Past service cost from a plan amendment is:",
   c:["Spread over the vesting period","Recognised immediately and in full","Recognised in other comprehensive income","Deferred until the employees retire"],
   a:1, why:"Recognised immediately and in full at the earlier of the amendment or curtailment and the recognition of related restructuring or termination costs. Spreading over a vesting period was the pre-2011 treatment and is gone.", tos:"H.3.2 Service cost"},

  {q:"An entity pays P1,000,000 from plan assets to extinguish an obligation of P1,150,000. It recognises:",
   c:["A settlement loss of P150,000 in profit or loss","A settlement gain of P150,000 in profit or loss","A remeasurement gain of P150,000 in OCI","Nothing until the plan is wound up"],
   a:1, why:"Gain or loss on settlement = settlement price less the PV of the obligation settled = 1,000,000 - 1,150,000 = a GAIN of P150,000. It is part of SERVICE COST and therefore profit or loss, not OCI.", tos:"H.3.2 Settlement"},

  {q:"After a plan amendment on 1 July, what assumptions determine current service cost for the rest of the year?",
   c:["The assumptions set at 1 January","The updated assumptions used in the remeasurement at the amendment date","The assumptions expected at 31 December","An average of opening and updated assumptions"],
   a:1, why:"The 2019 amendment requires the updated assumptions to be used for current service cost and net interest for the REMAINDER of the period. Continuing with stale opening assumptions is precisely what it corrected.", tos:"H.3.2 2019 amendment"},

  {q:"Under the 2019 amendment, past service cost is measured:",
   c:["Taking the asset ceiling into account","Ignoring the effect of the asset ceiling, with any resulting ceiling change going to OCI","Net of the related deferred tax","After deducting plan administration costs"],
   a:1, why:"Past service cost and settlement gains or losses are measured ignoring the ceiling. Any change in the ceiling effect resulting from the event is determined separately and recognised in OCI in the normal way.", tos:"H.3.2 2019 amendment"},

  {q:"A plan pays a lump sum at age 62 based on service, capped at 20 years. Benefit is attributed:",
   c:["From the date of hire to age 62","From age 42 to age 62","Evenly over the whole working life","Only in the final year"],
   a:1, why:"Attribution runs from when service first leads to benefits until further service adds no material further benefit. With a 20-year cap and retirement at 62, service before age 42 adds nothing - the 2021 IFRIC agenda decision.", tos:"H.3.2 Attribution"},

  {q:"DBO opens at P6,000,000, plan assets at P4,500,000, discount rate 8%. Net interest is:",
   c:["P480,000 expense","P360,000 income","P120,000 expense","P840,000 expense"],
   a:2, why:"480,000 less 360,000 = P120,000 expense, which is also the net liability of P1,500,000 x 8%. Where plan assets exceed the obligation this becomes net interest income.", tos:"H.3.2 Net interest"},

  {q:"Which discount rate does PAS 19 require?",
   c:["The entity's incremental borrowing rate","The expected return on plan assets","High quality corporate bonds, or government bonds where no deep market exists","The risk-free rate plus a risk premium"],
   a:2, why:"High quality corporate bonds first, with government bonds as the fallback. Currency and term must be consistent with the obligation, and the same single rate applies to all three elements of net interest.", tos:"H.3.2 Net interest"},

  {q:"Which is a FINANCIAL actuarial assumption?",
   c:["Employee turnover","Future salary levels","Mortality","Claim rates under a medical plan"],
   a:1, why:"Financial assumptions are the discount rate, future salary and benefit levels, medical cost trends and taxes payable by the plan. The other three are demographic.", tos:"H.3.2 Assumptions"},

  {q:"Plan assets open at P8,000,000, discount rate 10%, actual return P650,000. The remeasurement is:",
   c:["A gain of P150,000","A loss of P150,000","A loss of P650,000","Nil"],
   a:1, why:"Interest income is P800,000, taken to profit or loss. The actual return falls SHORT by P150,000, a remeasurement LOSS in other comprehensive income.", tos:"H.3.2 Remeasurements"},

  {q:"Which is deducted in arriving at the return on plan assets?",
   c:["All costs of administering the plan","The costs of managing the plan assets and tax payable by the plan","Contributions received","Benefits paid to retirees"],
   a:1, why:"Investment management costs and plan taxes are deducted from the return. Other administration costs are NOT - they are expensed when the service is received.", tos:"H.3.2 Remeasurements"},

  {q:"Benefits paid to retirees from a funded plan have what effect on the accrued benefit cost?",
   c:["They increase it","They decrease it","None - both records fall equally","They are recognised as an expense"],
   a:2, why:"A payment to a retiree takes cash from the fund and discharges an equal part of the obligation, so both memorandum balances fall by the same amount and the net figure is unchanged. Contributions increase plan assets only.", tos:"H.3.2 Memorandum records"},

  {q:"Plan assets are P11,700,000, the DBO P8,850,000 and the asset ceiling P1,800,000. The statement of financial position shows:",
   c:["Prepaid benefit cost P2,850,000","Prepaid benefit cost P1,800,000","Accrued benefit cost P1,050,000","Prepaid benefit cost P1,050,000"],
   a:1, why:"The surplus of P2,850,000 is recognised only up to the asset ceiling of P1,800,000 - the PV of what the entity can actually recover. The P1,050,000 excess is the effect of the asset ceiling.", tos:"H.3.2 Asset ceiling"},

  {q:"Opening accrued benefit cost is P1,560,000, defined benefit cost for the year P1,542,800 and contributions P1,600,000. Closing accrued benefit cost is:",
   c:["P1,502,800","P1,617,200","P1,560,000","P1,442,800"],
   a:0, why:"Opening + cost - contributions = 1,560,000 + 1,542,800 - 1,600,000 = P1,502,800. Benefits paid never enter this identity, because they reduce both memorandum records equally.", tos:"H.3.2 Defined benefit"},

  {q:"Remeasurements recognised in OCI are:",
   c:["Recycled to profit or loss as benefits are paid","Recycled over the average remaining service period","Never recycled, though they may be transferred within equity","Reversed against the next year's service cost"],
   a:2, why:"They never pass through the income statement again. A transfer within equity, typically to retained earnings, is permitted. Contrast other long-term benefits, whose remeasurements go to profit or loss in the first place.", tos:"H.3.3 Presentation"},

  {q:"Which disclosure best conveys how uncertain the defined benefit obligation is?",
   c:["The disaggregation of plan assets by class","The sensitivity analysis for each significant actuarial assumption","The expected contributions for the next period","The weighted average duration of the obligation"],
   a:1, why:"The obligation is the product of assumptions a reader cannot verify. Showing how far it moves on a reasonable change in the discount rate or salary growth is the only practical way to convey how soft the figure is.", tos:"H.3.3 Disclosure"}
]
});
