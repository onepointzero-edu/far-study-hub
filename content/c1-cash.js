/* CPALE 2029 TOS - C.1 Cash and Cash Equivalents
   Four chapters sharing one group, following the FAR 0 module structure:
   Module 4 (cash and cash equivalents), 4A (petty cash fund),
   4B (bank reconciliation and proof of cash). */

var CASH_GROUP = "Cash and Cash Equivalents";

/* ==================================================================
   1. CASH AND CASH EQUIVALENTS  (TOS C.1.1)
   ================================================================== */
FARHub.addChapter({
  id: "c1-cash-and-equivalents",
  code: "C.1.1",
  group: CASH_GROUP,
  title: "Cash and Cash Equivalents",
  blurb: "Cash is not what the passbook says. Two tests decide what counts, and a fund's purpose - not its liquidity - decides where it is reported.",
  minutes: 60,
  outcomes: [
    "State the two tests an item must satisfy to be reported as cash.",
    "Classify items into and out of cash, and state where each excluded item belongs.",
    "Apply the three-month test for cash equivalents from the date of acquisition.",
    "Apply the measurement, presentation and disclosure requirements for cash.",
    "Describe the principal cash controls and the schemes they are designed to detect."
  ],

  sections: [
{
  id: "two-tests",
  title: "Why the Definition Matters, and the Two Tests",
  blocks: [
    {t:"p", html:"Cash is <b>not simply the balance the bank reports</b>. It is an accounting classification. Items that look like cash frequently are not, and items that do not look like cash sometimes are."},
    {t:"p", html:"Misclassification distorts every liquidity measure a user computes, and because cash is the item users trust most, an error in cash is unusually damaging to faithful representation."},
    {t:"p", html:"PAS 7 defines cash as comprising <b>cash on hand and demand deposits</b>. To be reported as cash an item must satisfy <b>two tests, and both must be met</b>:"},
    {t:"ol", items:[
      "<b>Unrestricted.</b> The item must be free of any restriction that prevents its use in settling current obligations. A deposit the entity cannot draw on is not cash, whatever the passbook says.",
      "<b>Acceptable at face value by the bank.</b> The item must be acceptable for deposit at face amount. An instrument the bank will not accept, or will accept only at a discount, is not cash."
    ]},
    {t:"note", html:"<b>Both tests, every time.</b> A post-dated cheque fails the second test - the bank will not take it today. A sinking fund fails the first - it is committed to retiring a bond. Neither is cash, for different reasons, and being able to say <i>which</i> test fails is what a theory question is asking for."}
  ],
  check:{
    q:"An entity holds a customer's cheque dated three weeks after the reporting date. Why is it not cash?",
    choices:[
      "It fails the unrestricted test - the entity cannot use it freely.",
      "It fails the test of acceptability at face value - the bank will not accept it for deposit today.",
      "It fails both tests equally.",
      "It is cash, because it will be honoured in the ordinary course."
    ],
    answer:1,
    why:"A post-dated cheque is not yet negotiable, so the bank will not accept it at face amount at the reporting date - the <b>second</b> test fails. It reverts to <b>accounts receivable</b>. Nothing restricts the entity's use of the underlying funds, so the first test is not the one in issue."
  }
},
{
  id: "included",
  title: "What Is Included in Cash",
  blocks: [
    {t:"h", html:"Cash on hand"},
    {t:"p", html:"Undeposited collections, customers' cheques, <b>cashier's or manager's cheques</b>, traveller's cheques, bank drafts and money orders."},
    {t:"h", html:"Cash in bank"},
    {t:"p", html:"Demand deposits, savings deposits, and current or chequing accounts <b>unrestricted as to withdrawal</b>."},
    {t:"h", html:"Cash funds set aside for current operations"},
    {t:"p", html:"<b>Petty cash fund, payroll fund, change fund, dividend fund, tax fund, travel fund, interest fund.</b> All are cash, because all are held to settle current obligations."},
    {t:"h", html:"Bank overdrafts"},
    {t:"p", html:"An overdraft in one account <b>may be offset</b> against a positive balance in another account <b>with the same bank</b>. Overdrafts with <b>different</b> banks may <b>not</b> be offset and are reported as a <b>current liability</b>."},
    {t:"note", html:"<b>Two different questions, often confused.</b> Valix and Millan treat an overdraft as a current liability unless offsettable against a positive balance at the same bank - that is the <b>statement of financial position</b> question. PAS 7 separately permits an overdraft repayable on demand that forms an integral part of cash management to be included in cash and cash equivalents <b>for the purposes of the statement of cash flows</b>. Answer the question you are actually asked."}
  ],
  check:{
    q:"An entity has a P285,000 overdraft in its Metrobank current account and a P610,000 balance in its BDO savings account. How is the overdraft reported in the statement of financial position?",
    choices:[
      "Offset against the BDO balance, giving net cash of P325,000.",
      "As a current liability of P285,000, because the accounts are with different banks.",
      "Deducted from total cash with no separate presentation.",
      "As a non-current liability."
    ],
    answer:1,
    why:"Offsetting is permitted only <b>within the same bank</b>. Metrobank and BDO are different banks, so the overdraft stands as a <b>current liability</b> of P285,000 and the BDO balance is reported in full as cash. Had the overdraft been with BDO, offsetting would have been correct."
  }
},
{
  id: "excluded",
  title: "What Is Excluded from Cash",
  blocks: [
    {t:"table",
      head:["Item","Report instead as"],
      rows:[
        ["<b>Post-dated cheques received</b> - not yet negotiable","Accounts receivable"],
        ["<b>Post-dated cheques drawn and recorded but not released</b>, and cheques released but long outstanding (ordinarily beyond six months)","Restore to cash and credit <b>accounts payable</b>"],
        ["<b>Stale cheques</b> and <b>NSF or DAIF cheques</b>","Restore to <b>receivables</b>"],
        ["<b>IOUs and advances to employees</b>","Receivables"],
        ["<b>Postage stamps and unused office supplies</b>","Prepaid expenses or supplies"],
        ["<b>Bank deposits in a closed or bankrupt bank</b>","A <b>receivable</b>, at estimated recoverable amount"],
        ["<b>Undelivered or unreleased cheques</b> of the entity","Restore to cash and credit the liability"]
      ]},
    {t:"h", html:"Compensating balances"},
    {t:"ul", items:[
      "<b>Legally restricted</b> against a <b>short-term</b> borrowing - presented as a <b>current asset separately</b> from cash, clearly described.",
      "<b>Not legally restricted</b> - remains part of <b>cash</b>, and the arrangement is <b>disclosed</b>.",
      "Restricted against a <b>long-term</b> borrowing - presented as a <b>non-current investment</b>."
    ]},
    {t:"h", html:"Funds set aside for non-current purposes"},
    {t:"p", html:"<b>Sinking fund, preference share redemption fund, plant expansion fund, contingency fund, insurance fund</b> - reported as <b>non-current investments</b>."},
    {t:"note", html:"<b>The recurring examination trap.</b> A sinking fund is highly liquid, held in a bank and available on demand as a matter of fact - yet it is <b>not cash</b>, because it is set aside to retire a long-term liability. Conversely, where the related bond matures <b>within twelve months</b> and is classified as current, the sinking fund becomes a <b>current asset</b>. <b>Classification follows the purpose of the fund and the classification of the related liability, not the liquidity of the instrument.</b>"}
  ],
  check:{
    q:"An entity holds a sinking fund of P850,000 for bonds payable maturing on 31 March next year. How is the fund classified?",
    choices:[
      "Non-current investment, because sinking funds are always non-current.",
      "A current asset, because the related bond liability is current.",
      "Part of cash and cash equivalents, because the fund is on deposit and available on demand.",
      "A receivable from the trustee."
    ],
    answer:1,
    why:"The classification follows <b>the classification of the related liability</b>. The bond matures within twelve months and is therefore current, so the fund set aside to retire it is a <b>current asset</b> - presented separately and clearly described, not merged into cash. Liquidity is not the test: a sinking fund for a bond maturing in three years is equally liquid but is a non-current investment."
  }
},
{
  id: "equivalents",
  title: "Cash Equivalents and the Three-Month Test",
  blocks: [
    {t:"p", html:"Cash equivalents are <b>short-term, highly liquid investments that are readily convertible to known amounts of cash and subject to an insignificant risk of changes in value</b>."},
    {t:"note", html:"<b>The test runs from the date of acquisition by the entity: three months or less remaining.</b> It does <b>not</b> depend on the original term of the instrument, and it does <b>not</b> depend on the term remaining at reporting date. Get this one sentence right and the whole topic follows."},
    {t:"table",
      head:["Instrument","Classification"],
      rows:[
        ["Three-month BSP treasury bill purchased on issue","<b>Cash equivalent</b>"],
        ["One-year treasury bill purchased nine months after issue, three months remaining","<b>Cash equivalent</b>"],
        ["One-year treasury bill purchased on issue, only two months remaining at reporting date","<b>Not</b> a cash equivalent - a short-term investment"],
        ["Three-month time deposit","<b>Cash equivalent</b>"],
        ["Six-month time deposit","Short-term investment"],
        ["Time deposit maturing more than twelve months after reporting date","Long-term investment"]
      ]},
    {t:"p", html:"<b>Equity investments are excluded</b>, because they have no maturity and the amount of cash to be received is not known. The exception is <b>redeemable preference shares acquired within three months of their redemption date</b>."}
  ],
  check:{
    q:"An entity buys a one-year treasury bill on the date it is issued. At reporting date only two months remain to maturity. How is it classified?",
    choices:[
      "Cash equivalent, because only two months remain at reporting date.",
      "Short-term investment, because the term remaining at the date of acquisition was one year.",
      "Cash equivalent, because treasury bills are always highly liquid.",
      "Long-term investment."
    ],
    answer:1,
    why:"The three-month test is applied at the <b>date the entity acquired the instrument</b>. One year remained then, so it is a <b>short-term investment</b> and stays one - the passage of time does not reclassify it. Compare the same bill bought nine months after issue with three months left: that <i>is</i> a cash equivalent."
  }
},
{
  id: "measurement",
  title: "Measurement, Presentation and Disclosure",
  blocks: [
    {t:"ul", items:[
      "Cash is measured at <b>face value</b>.",
      "Cash in a <b>foreign currency</b> is translated at the <b>closing rate</b> at reporting date.",
      "Cash and cash equivalents are presented as the <b>first line item under current assets</b>."
    ]},
    {t:"h", html:"Disclosures"},
    {t:"ol", items:[
      "The <b>components</b> of cash and cash equivalents.",
      "A <b>reconciliation</b> of the amounts in the statement of cash flows with the equivalent items in the statement of financial position.",
      "The amount of significant balances <b>not available for use</b>, with a commentary by management."
    ]},
    {t:"note", html:"Notice that restricted balances are <b>disclosed</b> even where they remain inside cash. An unrestricted compensating balance stays in cash and the arrangement is described in the notes; only a <b>legally</b> restricted one is pulled out onto the face of the statement. Silence is not an option in either case."}
  ],
  check:{
    q:"A compensating balance against a short-term loan is NOT legally restricted. How is it treated?",
    choices:[
      "Presented separately as a current asset outside cash.",
      "Presented as a non-current investment.",
      "Remains part of cash, with the arrangement disclosed in the notes.",
      "Deducted from the related loan."
    ],
    answer:2,
    why:"Without a legal restriction the entity can still use the funds, so both tests are satisfied and the balance <b>remains within cash</b> - but the arrangement must be <b>disclosed</b>. Only a <b>legally restricted</b> compensating balance is presented separately, as current or non-current following the term of the related loan."
  }
},
{
  id: "control",
  title: "Cash Control, and the Three Schemes",
  blocks: [
    {t:"p", html:"Cash is the asset most susceptible to misappropriation: portable, not readily identifiable as belonging to any particular owner, and universally desirable. Controls over cash are designed <b>less to produce accurate arithmetic than to remove opportunity</b>."},
    {t:"h", html:"The four principal controls"},
    {t:"ul", items:[
      "<b>Segregation of duties.</b> The person who handles cash must not record it, and neither should reconcile the bank account. Where the entity is too small, the compensating control is <b>direct owner involvement</b> in the reconciliation and in signing cheques.",
      "<b>Daily deposit intact.</b> All receipts are deposited daily and in full. Disbursements are never made out of undeposited collections, because that destroys the audit trail between the collection record and the deposit slip.",
      "<b>Payment by cheque or transfer</b> against an approved voucher, with supporting documents cancelled at signing to prevent resubmission.",
      "<b>The imprest system.</b> Every fund is held at a fixed amount, so cash on hand plus vouchers must equal the imprest balance at any moment. <b>A shortage is visible without any computation.</b>"
    ]},
    {t:"h", html:"The voucher system"},
    {t:"p", html:"Every disbursement is authorised by a voucher recorded in a <b>voucher register</b> before payment, and paid through a <b>cheque register</b>; <b>vouchers payable</b> replaces accounts payable in the general ledger. The control value lies in the sequence - an obligation is approved and recorded <b>before</b> any cash moves, so unapproved payments have no route into the cheque register."},
    {t:"h", html:"Three schemes, and how each is detected"},
    {t:"table",
      head:["Scheme","What it is","How it is detected"],
      rows:[
        ["<b>Window dressing</b>","Deliberately overstating liquidity - keeping the books open past the reporting date to record later collections, or recording as at reporting date cheques released afterwards","Examining collections and disbursements recorded near the cut-off against the <b>underlying dates</b>"],
        ["<b>Lapping</b>","Concealing the theft of one customer's collection by applying a <b>later customer's</b> collection to the first customer's account","Comparing dates and amounts on <b>deposit slips and remittance advices</b> with postings to the subsidiary ledger"],
        ["<b>Kiting</b>","Drawing a cheque on one bank and depositing it in another near the cut-off, so the same peso is counted twice","A <b>schedule of interbank transfers</b> spanning the reporting date, comparing book and bank dates on each side"]
      ]},
    {t:"note", html:"<b>The interbank transfer diagnostic.</b> If the <b>receipt</b> is recorded in the books in December but the corresponding <b>disbursement</b> is recorded in the books in January, cash is <b>overstated</b> and the transfer indicates <b>kiting</b>. If <b>both</b> sides are recorded in the books in December and only the <i>bank</i> dates straddle the cut-off, that is a <b>normal timing difference</b> producing a deposit in transit and an outstanding cheque."}
  ],
  check:{
    q:"An interbank transfer is recorded in the books as a receipt on 30 December and as a disbursement on 2 January. The bank dates straddle the cut-off. What does this indicate?",
    choices:[
      "A normal timing difference producing a deposit in transit.",
      "Kiting - cash at 31 December is overstated.",
      "Lapping of customer collections.",
      "Window dressing of receivables."
    ],
    answer:1,
    why:"The <b>book</b> dates straddle the year end: the receipt is recorded in December while the matching disbursement is not recorded until January, so the same peso is counted in two bank accounts and cash is <b>overstated</b>. That is <b>kiting</b>. A normal timing difference has <b>both book entries in December</b> and only the bank dates differing."
  }
}
],

flashcards: [
  {f:"State the two tests an item must satisfy to be reported as cash.", b:"It must be <b>unrestricted</b> - free of any restriction preventing its use in settling current obligations - and <b>acceptable at face value by the bank</b> for deposit. <b>Both</b> must be met."},
  {f:"How does PAS 7 define cash?", b:"<b>Cash on hand and demand deposits.</b>"},
  {f:"What cash funds are included in cash?", b:"Funds set aside for <b>current operations</b>: <b>petty cash, payroll, change, dividend, tax, travel and interest funds</b>."},
  {f:"When may a bank overdraft be offset against a positive balance?", b:"Only where both accounts are with the <b>same bank</b>. Overdrafts with <b>different</b> banks are reported as a <b>current liability</b>."},
  {f:"How is a post-dated cheque received reported?", b:"As <b>accounts receivable</b> - it is not yet negotiable, so it fails the test of acceptability at face value."},
  {f:"How is an entity's own cheque, drawn and recorded but undelivered, treated?", b:"<b>Restored to cash</b>, with the liability credited back. No money has left the bank and none will on the strength of an instrument the payee does not hold."},
  {f:"How are stale cheques and NSF cheques treated?", b:"<b>Restored to receivables.</b> A stale cheque is one ordinarily outstanding beyond <b>six months</b>."},
  {f:"How are IOUs and postage stamps in the cash box reported?", b:"<b>IOUs and employee advances</b> - receivables. <b>Postage stamps and unused supplies</b> - prepaid expenses or supplies."},
  {f:"How is a deposit in a closed or bankrupt bank reported?", b:"As a <b>receivable</b>, measured at its <b>estimated recoverable amount</b>."},
  {f:"State the three treatments of a compensating balance.", b:"<b>Legally restricted, short-term borrowing</b> - separate current asset. <b>Not legally restricted</b> - stays in cash, arrangement disclosed. <b>Restricted, long-term borrowing</b> - non-current investment."},
  {f:"Why is a sinking fund for bonds maturing in three years not cash?", b:"Because classification follows the <b>purpose of the fund and the classification of the related liability</b>, not the liquidity of the instrument. It is a <b>non-current investment</b>."},
  {f:"When does a sinking fund become a current asset?", b:"When the <b>related bond matures within twelve months</b> and is itself classified as current. Present it as a separate, clearly described current asset."},
  {f:"Define cash equivalents.", b:"<b>Short-term, highly liquid investments readily convertible to known amounts of cash and subject to an insignificant risk of changes in value.</b>"},
  {f:"From what date is the three-month cash equivalent test applied?", b:"From the <b>date of acquisition by the entity</b> - three months or less remaining. <b>Not</b> the date of issue, and <b>not</b> the reporting date."},
  {f:"Is a one-year treasury bill bought on issue with two months remaining at reporting date a cash equivalent?", b:"<b>No.</b> One year remained at acquisition, so it is a <b>short-term investment</b> and stays one. Time passing does not reclassify it."},
  {f:"Why are equity investments excluded from cash equivalents, and what is the exception?", b:"They have <b>no maturity</b> and the amount of cash to be received is not known. Exception: <b>redeemable preference shares acquired within three months of the redemption date</b>."},
  {f:"How is cash measured, including foreign currency cash?", b:"At <b>face value</b>; foreign currency cash is translated at the <b>closing rate</b> at reporting date."},
  {f:"What three disclosures are required for cash and cash equivalents?", b:"The <b>components</b>; a <b>reconciliation</b> with the statement of cash flows; and the amount of significant balances <b>not available for use</b>, with management commentary."},
  {f:"Name the four principal controls over cash.", b:"<b>Segregation of duties</b>; <b>daily intact deposit</b>; <b>payment by cheque against an approved voucher</b>; and the <b>imprest system</b>."},
  {f:"What is the control value of the voucher system?", b:"The <b>sequence</b>: an obligation is approved and recorded in the voucher register <b>before</b> any cash moves, so unapproved payments have no route into the cheque register."},
  {f:"Distinguish lapping from kiting.", b:"<b>Lapping</b> - concealing theft of one customer's collection by applying a <b>later customer's</b> payment to it; detected by comparing deposit slips and remittance advices with subsidiary ledger postings. <b>Kiting</b> - drawing a cheque on one bank and depositing it in another across the cut-off so a peso is counted twice; detected by an <b>interbank transfer schedule</b>."},
  {f:"What is window dressing, and how is it detected?", b:"Deliberately <b>overstating liquidity</b> - holding the books open past the cut-off, or dating released cheques back. Detected by comparing transactions recorded near the cut-off with the <b>underlying dates</b>."},
  {f:"On an interbank transfer schedule, what indicates kiting?", b:"The <b>book</b> receipt recorded in December with the matching <b>book</b> disbursement recorded in January - cash is overstated. If <b>both book entries</b> fall in December and only bank dates straddle the cut-off, it is a normal timing difference."}
],

quiz: [
  {q:"An item is reported as cash only if it is:",
   c:["Highly liquid and held in a bank","Unrestricted AND acceptable at face value by the bank","Either unrestricted or acceptable at face value","Convertible to cash within three months"],
   a:1, why:"Both tests must be met. A sinking fund fails the first; a post-dated cheque fails the second. Neither is cash, and identifying WHICH test fails is what a theory question asks for.", tos:"C.1.1 Nature"},

  {q:"Which is included in cash?",
   c:["A customer's post-dated cheque","A payroll fund","Postage stamps on hand","An employee IOU"],
   a:1, why:"Funds set aside for CURRENT operations - petty cash, payroll, change, dividend, tax, travel, interest - are cash. Post-dated cheques revert to receivables, stamps to prepaid expenses, IOUs to receivables.", tos:"C.1.1 Composition"},

  {q:"An entity's own cheque for P138,000, drawn and recorded on 20 December, remained undelivered at 31 December. The correct treatment is:",
   c:["Deduct it as an outstanding cheque in the bank reconciliation","Restore P138,000 to cash and credit accounts payable","Leave it as recorded - the cheque has been drawn","Report it as a receivable"],
   a:1, why:"No money has left the bank and none will, because the payee does not hold the instrument. The amount is restored to cash on the BOOK side with the liability credited back. It is not an outstanding cheque - that requires release to the payee.", tos:"C.1.1 Composition"},

  {q:"An entity has a P140,000 overdraft at BDO and a P610,000 BDO savings balance. The overdraft is:",
   c:["Reported as a current liability of P140,000","Offset, giving net BDO cash of P470,000","Offset against balances at any bank","Reported as a non-current liability"],
   a:1, why:"Offsetting is permitted WITHIN the same bank. Both accounts are with BDO, so a net P470,000 is reported. Only overdrafts with a DIFFERENT bank must stand as a current liability.", tos:"C.1.1 Composition"},

  {q:"A sinking fund of P1,500,000 relates to bonds maturing on 30 June 2028. At 31 December 2026 it is classified as:",
   c:["Part of cash and cash equivalents","A current asset","A non-current investment","A receivable"],
   a:2, why:"The related bond is non-current, so the fund set aside to retire it is a NON-CURRENT INVESTMENT - however liquid it is. Classification follows the purpose of the fund and the classification of the related liability.", tos:"C.1.1 Composition"},

  {q:"A 120-day time deposit purchased on 1 October 2026 matures on 29 January 2027. At acquisition it is:",
   c:["A cash equivalent","A short-term investment","A long-term investment","Part of cash"],
   a:1, why:"120 days exceeds three months at the date of acquisition, so it is a SHORT-TERM INVESTMENT. The test is applied at acquisition, not at reporting date - even though under three months remain at 31 December.", tos:"C.1.1 Cash equivalents"},

  {q:"Which IS a cash equivalent?",
   c:["A one-year treasury bill purchased on issue","Ordinary shares in a listed company","A one-year treasury bill purchased nine months after issue","A six-month time deposit purchased on issue"],
   a:2, why:"Three months remain at the DATE OF ACQUISITION, so it qualifies. Equity investments are excluded because they have no maturity - the exception being redeemable preference shares acquired within three months of redemption.", tos:"C.1.1 Cash equivalents"},

  {q:"An entity holds: cash on hand P120,000; current account P850,000; a 90-day time deposit acquired on issue P400,000; a six-month time deposit P300,000; a payroll fund P95,000; a plant expansion fund P600,000; and post-dated customers' cheques P75,000. Cash and cash equivalents total:",
   c:["P1,370,000","P1,465,000","P1,765,000","P2,065,000"],
   a:1, why:"P120,000 + P850,000 + P400,000 + P95,000 = P1,465,000. The six-month deposit is a short-term investment, the plant expansion fund a non-current investment, and the post-dated cheques are receivables.", tos:"C.1.1 Composition"},

  {q:"A legally restricted compensating balance against a LONG-TERM borrowing is presented as:",
   c:["Part of cash","A separate current asset","A non-current investment","A deduction from the loan"],
   a:2, why:"Presentation follows the term of the related loan. Restricted against a short-term borrowing it is a separate current asset; against a long-term borrowing, a non-current investment. Only an UNRESTRICTED compensating balance stays inside cash.", tos:"C.1.1 Presentation"},

  {q:"Concealing the theft of one customer's collection by applying a later customer's payment to that account is:",
   c:["Window dressing","Lapping","Kiting","Teeming"],
   a:1, why:"That is LAPPING, detected by comparing dates and amounts on deposit slips and remittance advices with subsidiary ledger postings. Kiting involves interbank transfers; window dressing is overstating liquidity at the cut-off.", tos:"C.1.2 Cash control"},

  {q:"On an interbank transfer schedule, cash is OVERSTATED where:",
   c:["Both book entries fall in December and the bank dates straddle the cut-off","The book receipt is in December and the book disbursement is in January","Both bank entries fall in December","The book disbursement is in December and the book receipt is in January"],
   a:1, why:"The book receipt is recognised before the matching book disbursement, so the peso is counted in two accounts at the cut-off - kiting. Both book entries in December with only bank dates differing is an ordinary timing difference.", tos:"C.1.2 Cash control"},

  {q:"The examination value of the imprest system as a control is that:",
   c:["It eliminates the need for a bank reconciliation","A shortage becomes visible without any computation","It removes the need for petty cash vouchers","It allows disbursements from undeposited collections"],
   a:1, why:"Cash on hand plus vouchers must always equal the fixed imprest amount, so any shortage is apparent from a count alone - no ledger, journal or bank statement needed. That immediacy is exactly the property a control should have.", tos:"C.1.2 Cash control"}
]
});

/* ==================================================================
   2. PETTY CASH FUND  (TOS C.1.2.2)
   ================================================================== */
FARHub.addChapter({
  id: "c1-petty-cash",
  code: "C.1.2.2",
  group: CASH_GROUP,
  title: "The Petty Cash Fund",
  blurb: "One equation governs the whole topic: currency plus vouchers plus anything else the custodian must answer for equals the imprest amount.",
  minutes: 55,
  outcomes: [
    "Explain the purpose of the fund and state the imprest equation.",
    "Distinguish the imprest from the fluctuating fund system.",
    "Record the six events that can affect an imprest fund.",
    "Sort the contents of a petty cash box to their correct destinations.",
    "Compute both the reported petty cash fund and the cash shortage or overage."
  ],

  sections: [
{
  id: "why",
  title: "Why the Fund Exists, and the Imprest Equation",
  blocks: [
    {t:"p", html:"The fundamental rule of cash control is that all receipts are deposited intact and daily, and all disbursements are made by cheque against an approved voucher. The rule is sound - a cheque leaves a permanent record naming payee, amount and signatory, and separates the person who authorises a payment from the person who receives it."},
    {t:"p", html:"The rule is also, in its pure form, <b>unworkable</b>. No entity can draw a cheque for eighty pesos of jeepney fare or two hundred pesos of registered postage. The cost of drawing, signing, releasing and reconciling the cheque exceeds the amount disbursed, and the payee frequently cannot accept a cheque at all."},
    {t:"note", html:"<b>The petty cash fund is the deliberate, controlled exception to the rule.</b> It does not weaken cash control - it <b>concentrates the exception</b> into a single small, countable, constantly testable pocket of money, so the general rule can be enforced without exception everywhere else."},
    {t:"h", html:"Who is who"},
    {t:"ul", items:[
      "<b>The custodian</b> - one named individual, and only one, personally accountable for the fund. <i>Accountability that is shared is accountability that is absent</i>: if two people can open the box, neither can be held answerable for a shortage.",
      "<b>The imprest amount</b> - the fixed sum at which the fund is established and to which it is restored at every replenishment. It is the figure carried in the Petty cash fund ledger account.",
      "<b>The petty cash voucher</b> - a pre-numbered slip for every disbursement, with the receipt attached. It is the document that converts a missing peso into a documented expense.",
      "<b>The replenishment cheque</b> - drawn to the custodian for the total of the vouchers, restoring the fund to its imprest amount.",
      "<b>The cash count</b> - a physical count, conducted without notice and in the custodian's presence."
    ]},
    {t:"h", html:"The imprest equation"},
    {t:"note", html:"<b>At every moment: currency and coin on hand + vouchers not yet replenished + any other item for which the custodian is accountable = the imprest amount.</b> If the total is less, there is a <b>shortage</b>; if more, an <b>overage</b>.<br><br>To test the fund you need neither the ledger, the journals nor the bank statement - only a fixed number and the contents of a drawer. Every problem in this chapter is an application of that one equation."}
  ],
  check:{
    q:"Why does concentrating small payments into a petty cash fund STRENGTHEN rather than weaken cash control?",
    choices:[
      "Because petty amounts are too small to matter.",
      "Because it isolates the exception into one small, countable, constantly testable fund, letting the cheque rule be enforced everywhere else without exception.",
      "Because the custodian is bonded.",
      "Because petty cash disbursements need no documentation."
    ],
    answer:1,
    why:"Without the fund, small payments would force exceptions to the cheque rule throughout the entity - and an exception available everywhere is no rule at all. The fund <b>concentrates</b> every exception into one drawer that can be counted at any moment against a fixed number."
  }
},
{
  id: "two-systems",
  title: "The Two Systems",
  blocks: [
    {t:"p", html:"The two systems differ in a single respect, from which everything else follows: <b>whether the Petty cash fund ledger account is touched when a disbursement is made</b>."},
    {t:"table",
      head:["","Imprest fund system","Fluctuating fund system"],
      rows:[
        ["<b>Establishing</b>","Dr Petty cash fund / Cr Cash in bank","Dr Petty cash fund / Cr Cash in bank"],
        ["<b>A disbursement</b>","<b>No entry.</b> The voucher takes the place of the cash inside the fund","Dr Expense / Cr <b>Petty cash fund</b>"],
        ["<b>Replenishment</b>","Dr Expense / Cr <b>Cash in bank</b> (total of vouchers)","Dr <b>Petty cash fund</b> / Cr Cash in bank (any amount)"],
        ["<b>Reporting date, unreplenished</b>","Adjusting entry: Dr Expense / Cr Petty cash fund","No adjustment needed - already recorded"],
        ["<b>What the ledger balance means</b>","The <b>fixed imprest amount</b> - a measure of accountability","The <b>actual money</b> in the fund"],
        ["<b>Control strength</b>","<b>Strong</b> - an independent, externally fixed standard","<b>Weak</b> - no fixed accountability to test against"],
        ["<b>Examination frequency</b>","<b>Almost always.</b> Named expressly in the 2029 TOS","Occasionally, to test whether you can tell them apart"]
      ]},
    {t:"note", html:"<b>A petty cash problem that does not name the system is an imprest problem.</b> Philippine examiners treat imprest as the default and say so only when they mean the other. Read for the giveaway phrases: <i>maintained at P20,000 and replenished to its imprest balance</i> means imprest; <i>the petty cash account is debited for replenishments and credited for disbursements</i> means fluctuating."},
    {t:"p", html:"The fluctuating system's ledger shows the actual money at any time, which sounds like an advantage and is in fact its weakness. Under imprest the custodian is measured against a number <b>fixed in advance by management</b>. Under fluctuating he is measured against a number produced by <b>the same records his own vouchers feed</b> - so there is no independent standard of accountability."}
  ],
  check:{
    q:"Under the IMPREST system, what entry is made when the custodian pays P250 for postage?",
    choices:[
      "Dr Postage expense P250 / Cr Petty cash fund P250",
      "Dr Postage expense P250 / Cr Cash in bank P250",
      "No entry - the voucher replaces the cash inside the fund",
      "Dr Petty cash fund P250 / Cr Postage expense P250"
    ],
    answer:2,
    why:"<b>No entry.</b> This is the hardest idea in the topic, because something plainly happened and nothing is recorded. The fund has not changed in value: before, the box held P15,000 in currency; after, it holds P14,750 and a voucher for P250. The account measuring the fund is still correct. The expense is recognised on <b>replenishment</b>, or by adjustment at reporting date."
  }
},
{
  id: "six-events",
  title: "The Six Events and Their Entries",
  blocks: [
    {t:"p", html:"Under the imprest system only six things can ever happen to the fund. Learn the six and you have learned the topic."},
    {t:"h", html:"1. The fund is established"},
    {t:"p", html:"<b>Dr Petty cash fund / Cr Cash in bank</b>, at the imprest amount. Both accounts are assets - the money has merely moved. Total assets are unchanged and <b>no expense arises</b>."},
    {t:"h", html:"2. A disbursement is made"},
    {t:"p", html:"<b>No entry.</b>"},
    {t:"h", html:"3. The fund is replenished"},
    {t:"p", html:"<b>Dr the individual expenses / Cr Cash in bank</b>, for the total of the vouchers. The credit is to <b>Cash in bank, never to Petty cash fund</b> - the fund is being <i>restored</i>, not reduced."},
    {t:"note", html:"<b>Where the cheque amount comes from.</b> The cheque equals the total of the vouchers <i>when the fund is exactly in balance</i>. Where there is a shortage or overage it does not: the cheque equals <b>the imprest amount less the currency actually counted</b>, because that is what it takes to restore the fund. The difference between the two figures is the shortage or overage."},
    {t:"h", html:"4. Reporting date arrives with vouchers unreplenished"},
    {t:"p", html:"<b>Dr the individual expenses / Cr Petty cash fund</b>, for the vouchers on hand. The expenses belong to the period now ending, not to the period in which the replenishment cheque happens to be drawn."},
    {t:"p", html:"<b>This entry, and only this entry, is reversed</b> on the first day of the following period, so that the eventual replenishment can be recorded in the ordinary way of Event 3."},
    {t:"note", html:"<b>The effect of omitting it:</b> the petty cash fund is <b>overstated</b> and expenses <b>understated</b> - so current assets and profit are both overstated. The amounts are usually small; the point is examined as a matter of <b>principle</b>, and it is examined often."},
    {t:"h", html:"5. The fund is increased or decreased"},
    {t:"p", html:"<b>Increase:</b> Dr Petty cash fund / Cr Cash in bank. <b>Decrease:</b> Dr Cash in bank / Cr Petty cash fund."},
    {t:"note", html:"<b>The trap.</b> The entry is for the <b>change</b>, not the new imprest amount. A fund increased from P15,000 to P25,000 is recorded at <b>P10,000</b>. Debiting P25,000 doubles the asset and is one of the most reliable wrong answers offered in a multiple-choice item."},
    {t:"h", html:"6. A shortage or overage is discovered"},
    {t:"p", html:"Recorded in a temporary account, <b>Cash short or over</b>. An <b>overage</b> of undetermined cause is credited to <b>miscellaneous income</b>; a <b>shortage</b> of undetermined cause is debited to <b>loss</b>, or to <b>Due from cashier</b> where the custodian is held accountable."},
    {t:"note", html:"<b>Derive the direction, do not memorise it.</b> A shortage means money is missing, so the asset comes down and something must absorb the loss - the absorbing account is <b>debited</b>. An overage means there is more money than there should be, so the absorbing account is <b>credited</b>."}
  ],
  check:{
    q:"A petty cash fund is increased from P15,000 to P25,000. The entry is:",
    choices:[
      "Dr Petty cash fund P25,000 / Cr Cash in bank P25,000",
      "Dr Petty cash fund P10,000 / Cr Cash in bank P10,000",
      "Dr Cash in bank P10,000 / Cr Petty cash fund P10,000",
      "No entry until the fund is next replenished"
    ],
    answer:1,
    why:"The entry records the <b>change</b> in the imprest amount, not the new amount. The fund rises by P10,000, so that is what is debited. Recording P25,000 would carry the fund at P40,000 in total - a reliably offered wrong answer."
  }
},
{
  id: "sorting",
  title: "Sorting the Contents of the Fund",
  blocks: [
    {t:"p", html:"Establishing, replenishing and adjusting are mechanical once seen. The genuine difficulty of an examination problem is always the same: <b>an examiner empties the drawer onto the table and asks you to say what each thing is</b>."},
    {t:"p", html:"A petty cash box in a problem never contains only currency and vouchers. It contains an employee's promissory note, a customer's cheque dated next month, an envelope of birthday contributions, a strip of postage stamps, and a company cheque made out to the custodian."},
    {t:"table",
      head:["Item found in the box","Destination"],
      rows:[
        ["Currency and coin of the entity","<b>Petty cash fund</b>"],
        ["Cheques negotiable at the reporting date","<b>Petty cash fund</b>"],
        ["Unreplenished petty cash vouchers","The <b>expenses</b> they evidence"],
        ["Employee IOU or promissory note","<b>Receivable</b> from the employee"],
        ["Customer's post-dated cheque","<b>Accounts receivable</b>"],
        ["Postage stamps","<b>Prepaid expense</b> or supplies"],
        ["Entity's own cheque payable to the custodian, undelivered","<b>Restore to cash in bank</b>"],
        ["Money belonging to employees (collections for a gift)","<b>Liability</b> to the employees"]
      ]},
    {t:"note", html:"<b>The two amounts constantly confused</b> - an examiner will usually ask for both in the same problem, and they are computed from <b>different sets of items</b>.<br><br><b>The petty cash fund reported in the statement of financial position:</b> <i>money only</i> - currency and coin belonging to the entity, plus cheques negotiable at the reporting date.<br><br><b>The cash shortage or overage:</b> the imprest amount <i>less everything the custodian can produce</i>, whether money or not - currency, vouchers, IOUs, cheques of every kind, stamps."},
    {t:"p", html:"State the two to yourself in this form before every problem: <b>the reported fund asks what is money; the shortage asks what he can account for.</b> An IOU answers the second question and not the first, which is precisely why the two figures differ."}
  ],
  check:{
    q:"A fund with an imprest balance of P20,000 contains currency P6,200, unreplenished vouchers P8,400, and an employee IOU of P5,400. What is the shortage or overage?",
    choices:[
      "Shortage of P13,800",
      "Shortage of P5,400",
      "Neither - the fund balances",
      "Overage of P200"
    ],
    answer:2,
    why:"The custodian can account for P6,200 + P8,400 + P5,400 = <b>P20,000</b>, exactly the imprest amount - so there is <b>no shortage or overage</b>. An IOU is not money, but it <i>does</i> discharge accountability by showing where the cash went. Note the reported <b>petty cash fund</b> would be only <b>P6,200</b>, since that is all that is money."
  }
},
{
  id: "two-amounts",
  title: "Computing the Two Amounts",
  blocks: [
    {t:"p", html:"Work an example where the fund does <b>not</b> balance, so the two computations visibly diverge."},
    {t:"p", html:"A fund with an imprest balance of <b>P25,000</b> is counted and contains: currency <b>P7,300</b>, vouchers <b>P15,900</b>, and an employee IOU of <b>P1,200</b>."},
    {t:"table",
      head:["Cash shortage or overage","Amount"],
      rows:[
        ["Imprest amount","25,000"],
        ["Currency and coin","(7,300)"],
        ["Unreplenished vouchers","(15,900)"],
        ["Employee IOU","(1,200)"],
        ["<b>Shortage</b>","<b>600</b>"]
      ]},
    {t:"p", html:"<b>Entry:</b> Dr Cash short or over P600 / Cr Petty cash fund P600 - or Dr <b>Due from cashier</b> where the custodian is held accountable."},
    {t:"table",
      head:["Petty cash fund reported in the SFP","Amount"],
      rows:[
        ["Currency and coin","7,300"],
        ["Vouchers - not money, they are expenses","-"],
        ["Employee IOU - not money, it is a receivable","-"],
        ["<b>Petty cash fund reported</b>","<b>7,300</b>"]
      ]},
    {t:"note", html:"<b>Two questions, two answers, one drawer.</b> The shortage is P600 and the reported fund is P7,300, and both are correct. Notice that the amounts have almost nothing in common - which is exactly why confusing the questions is the most common single error in the topic."},
    {t:"h", html:"A customer's post-dated cheque in the box"},
    {t:"p", html:"Where the count also discloses a customer's cheque <b>dated after</b> the reporting date, it is <b>not</b> money at the reporting date - it goes to accounts receivable and is excluded from the reported fund. But it <b>does</b> count toward what the custodian can produce, so it is deducted in computing the shortage. Same instrument, opposite treatment in the two computations."}
  ],
  check:{
    q:"A fund with an imprest balance of P30,000 contains currency P9,000, vouchers P17,000, an IOU of P2,000, and a customer's cheque dated next month for P1,500. What is the reported petty cash fund?",
    choices:["P9,000","P10,500","P28,000","P29,500"],
    answer:0,
    why:"The reported fund is <b>money only</b>: currency P9,000. The vouchers are expenses, the IOU a receivable, and the post-dated cheque is not negotiable at the reporting date so it is a receivable too. Note the <b>shortage</b> is a different computation entirely: P30,000 - 9,000 - 17,000 - 2,000 - 1,500 = P500."
  }
}
],

flashcards: [
  {f:"State the imprest equation.", b:"<b>Currency and coin on hand + unreplenished vouchers + anything else the custodian is accountable for = the imprest amount.</b> Less means a shortage; more means an overage."},
  {f:"Why does a petty cash fund strengthen rather than weaken cash control?", b:"It <b>concentrates the exception</b> to the cheque rule into one small, countable, constantly testable fund, so the general rule can be enforced without exception everywhere else."},
  {f:"Why must there be only ONE custodian?", b:"<b>Accountability that is shared is accountability that is absent.</b> If two people can open the box, neither can be held answerable for a shortage."},
  {f:"Under the imprest system, what entry is made when a disbursement occurs?", b:"<b>No entry.</b> The voucher takes the place of the cash, so the fund is still worth the imprest amount. The expense is recognised on replenishment, or by adjustment at reporting date."},
  {f:"What is credited on replenishment under the imprest system?", b:"<b>Cash in bank</b> - never Petty cash fund. The fund is being <i>restored</i>, not reduced."},
  {f:"How much is the replenishment cheque when the fund does not balance?", b:"<b>The imprest amount less the currency actually counted</b> - that is what it takes to restore the fund. The difference between this and the voucher total is the shortage or overage."},
  {f:"What adjusting entry is made at reporting date if the fund is unreplenished?", b:"<b>Dr the individual expenses / Cr Petty cash fund</b> for the vouchers on hand. It is <b>reversed</b> on the first day of the next period."},
  {f:"What is the effect of omitting the reporting-date adjustment?", b:"The <b>petty cash fund is overstated</b> and <b>expenses understated</b> - so current assets and profit are both overstated."},
  {f:"How is an increase in the fund from P15,000 to P25,000 recorded?", b:"<b>Dr Petty cash fund P10,000 / Cr Cash in bank P10,000.</b> The entry is for the <b>change</b>, not the new imprest amount."},
  {f:"How are an unexplained shortage and an unexplained overage treated?", b:"<b>Overage</b> - credited to <b>miscellaneous income</b>. <b>Shortage</b> - debited to <b>loss</b>, or to <b>Due from cashier</b> if the custodian is accountable."},
  {f:"How do you derive whether Cash short or over is debited or credited?", b:"A <b>shortage</b> means money is missing, so the absorbing account is <b>debited</b>. An <b>overage</b> means there is too much, so it is <b>credited</b>. Derive it from the equation rather than memorising."},
  {f:"Contrast the imprest and fluctuating systems in one sentence.", b:"Under <b>imprest</b> the ledger shows the <b>fixed accountability</b> and disbursements are not journalised; under <b>fluctuating</b> the ledger shows the <b>actual money</b> and every disbursement is journalised."},
  {f:"Why is the fluctuating system the weaker control?", b:"The custodian is measured against a number produced by <b>the same records his own vouchers feed</b>, so there is no <b>independent, externally fixed</b> standard of accountability."},
  {f:"A petty cash problem does not name the system. Which applies?", b:"The <b>imprest</b> system. Philippine examiners treat it as the default and name the fluctuating system expressly when they mean it. It is also the only one named in the 2029 TOS."},
  {f:"What goes into the PETTY CASH FUND reported in the statement of financial position?", b:"<b>Money only</b> - currency and coin of the entity, plus cheques <b>negotiable at the reporting date</b>. Everything else in the drawer is reported elsewhere."},
  {f:"What is deducted in computing the CASH SHORTAGE OR OVERAGE?", b:"<b>Everything the custodian can produce</b>, money or not - currency, vouchers, IOUs, cheques of every kind, stamps. A voucher is not cash but it does discharge accountability."},
  {f:"Where do an employee IOU, a customer's post-dated cheque, and postage stamps in the box belong?", b:"<b>IOU</b> - receivable from the employee. <b>Post-dated cheque</b> - accounts receivable. <b>Stamps</b> - prepaid expense or supplies. None is part of the reported petty cash fund."},
  {f:"How is the entity's own undelivered cheque payable to the custodian treated?", b:"<b>Restored to cash in bank.</b> It is not money in the fund, because no cash has left the bank."}
],

quiz: [
  {q:"Under the imprest system, a P400 disbursement from the fund is recorded by:",
   c:["Dr Expense / Cr Petty cash fund","Dr Expense / Cr Cash in bank","No entry","Dr Petty cash fund / Cr Expense"],
   a:2, why:"No entry. The voucher replaces the cash, so the fund is still worth its imprest amount and the ledger account remains correct. The expense is taken up on replenishment or by adjustment at reporting date. Crediting Petty cash fund is the FLUCTUATING system.", tos:"C.1.2.2 Imprest system"},

  {q:"On replenishment under the imprest system, the credit is to:",
   c:["Petty cash fund","Cash in bank","Cash short or over","Accounts payable"],
   a:1, why:"Cash in bank. The fund is being restored to its imprest amount, not reduced, so Petty cash fund is untouched. Crediting the fund would leave it permanently below its imprest balance.", tos:"C.1.2.2 Imprest system"},

  {q:"A fund with an imprest balance of P25,000 holds currency P7,300, vouchers P15,900 and an employee IOU of P1,200. The shortage is:",
   c:["P600","P1,800","P1,200","Nil"],
   a:0, why:"P25,000 - (7,300 + 15,900 + 1,200) = P600 shortage. The IOU is deducted because although it is not money, it does discharge the custodian's accountability by showing where the cash went.", tos:"C.1.2.2 Shortage"},

  {q:"Using the same fund, what is reported as the PETTY CASH FUND in the statement of financial position?",
   c:["P25,000","P24,400","P7,300","P8,500"],
   a:2, why:"Money only - currency of P7,300. Vouchers are expenses and the IOU is a receivable. This is the most common single error in the topic: the reported fund asks what is MONEY, the shortage asks what the custodian can ACCOUNT FOR.", tos:"C.1.2.2 Reported fund"},

  {q:"A fund is increased from P20,000 to P35,000. The entry debits Petty cash fund for:",
   c:["P35,000","P20,000","P15,000","P55,000"],
   a:2, why:"The entry records the CHANGE in the imprest amount: P15,000. Debiting P35,000 would carry the fund at P55,000 in total - a reliably offered distractor.", tos:"C.1.2.2 Six events"},

  {q:"Failing to make the reporting-date adjustment for unreplenished vouchers:",
   c:["Understates the fund and overstates expenses","Overstates the fund and understates expenses","Has no effect on the financial statements","Overstates both the fund and expenses"],
   a:1, why:"The fund is carried at its imprest amount although part of it is vouchers rather than money, and the expenses are pushed into the following period. Both current assets and profit are overstated.", tos:"C.1.2.2 Adjustment"},

  {q:"Which entry is reversed at the beginning of the following period?",
   c:["Establishment of the fund","Replenishment of the fund","The reporting-date adjustment for unreplenished vouchers","An increase in the imprest amount"],
   a:2, why:"Only the reporting-date adjustment is reversed, so that the eventual replenishment cheque can be recorded in the ordinary way without anyone tracking which vouchers were already taken up. It is a bookkeeping convenience, not a change of principle.", tos:"C.1.2.2 Adjustment"},

  {q:"An unexplained OVERAGE in the fund is:",
   c:["Debited to Cash short or over and closed to loss","Credited to miscellaneous income","Credited to Due from cashier","Ignored if immaterial"],
   a:1, why:"An overage of undetermined cause is credited to miscellaneous income. A shortage of undetermined cause is debited to loss, or to Due from cashier where the custodian is held accountable.", tos:"C.1.2.2 Shortage"},

  {q:"Which phrase indicates a FLUCTUATING fund system?",
   c:["The fund is maintained at P20,000","The fund is replenished to its imprest balance","The petty cash account is debited for replenishments and credited for disbursements","A cash count was made at year end"],
   a:2, why:"Journalising disbursements against Petty cash fund, and debiting replenishments to it in whatever amount, is the fluctuating system. A problem that names no system is an imprest problem - imprest is the examiners' default and the only system named in the 2029 TOS.", tos:"C.1.2.2 Systems"},

  {q:"The imprest system is the STRONGER control because:",
   c:["It requires fewer journal entries","The custodian is measured against a number fixed in advance by management, independent of his own records","It eliminates shortages","Vouchers are pre-numbered"],
   a:1, why:"Under imprest the standard of accountability is set externally and in advance. Under the fluctuating system the benchmark is produced by the same records the custodian's own vouchers feed, so there is no independent standard.", tos:"C.1.2.2 Systems"}
]
});

/* ==================================================================
   3. BANK RECONCILIATION  (TOS C.1.2.1)
   ================================================================== */
FARHub.addChapter({
  id: "c1-bank-reconciliation",
  code: "C.1.2.1",
  group: CASH_GROUP,
  title: "The Bank Reconciliation Statement",
  blurb: "Two records of one thing, differing for two reasons only. One rule tells you which items produce journal entries, and a three-step method stops you inverting the sign on an error.",
  minutes: 65,
  outcomes: [
    "Explain why the book and bank balances differ, and state the golden rule on adjusting entries.",
    "Place any reconciling item into the correct one of four boxes.",
    "Correct book errors without inverting the direction.",
    "Prepare a reconciliation under the adjusted balance method and draft the adjusting entries.",
    "Convert between the adjusted balance, book to bank and bank to book forms."
  ],

  sections: [
{
  id: "why-differ",
  title: "Why the Two Balances Differ",
  blocks: [
    {t:"p", html:"The entity records its current account in the ledger account <b>Cash in bank</b>. The bank keeps a record of the same account and sends it out monthly as the <b>bank statement</b>. Both purport to describe the same money at the same date, and they almost never agree."},
    {t:"note", html:"<b>The mirror.</b> The account is an <b>asset to the entity</b> and a <b>liability to the bank</b> - the bank owes the depositor the money it holds. Every statement the bank sends is written from the <b>bank's side of the mirror</b>. When the bank says it has <b>credited</b> your account it means it has increased what it owes you, so <b>your asset increases</b>. When it says it has <b>debited</b> your account it has reduced what it owes you, so your asset decreases.<br><br>This is why a <b>credit memo is added</b> to your book balance and a <b>debit memo deducted</b> - which reads backwards until you see the mirror, and is obvious afterwards."},
    {t:"h", html:"Only two causes"},
    {t:"ol", items:[
      "<b>Timing differences.</b> One party has recorded a transaction the other has not yet recorded. Neither is wrong; one is merely earlier. Every timing difference <b>corrects itself</b> in the following period without anyone doing anything.",
      "<b>Errors.</b> One party has recorded a transaction incorrectly, or against the wrong account. An error <b>does not correct itself</b> - it is corrected by whoever made it."
    ]},
    {t:"note", html:"<b>The golden rule.</b> <b>Only book-side reconciling items and book errors give rise to adjusting entries.</b> Deposits in transit, outstanding cheques and bank errors <b>never</b> do - the first two correct themselves when the bank gets round to recording them, and the bank corrects its own errors. <i>If you find yourself journalising a deposit in transit, you have misunderstood the statement.</i>"},
    {t:"h", html:"The four boxes"},
    {t:"table",
      head:["","Added","Deducted"],
      rows:[
        ["<b>To the BANK balance</b><br><i>no entry required</i>","Deposits in transit;<br>bank errors understating the bank balance","Outstanding cheques;<br>bank errors overstating the bank balance"],
        ["<b>To the BOOK balance</b><br><i>adjusting entry required</i>","Credit memoranda;<br>book errors understating the book balance","Debit memoranda;<br>book errors overstating the book balance"]
      ]},
    {t:"p", html:"Every reconciling item you will ever meet falls into <b>exactly one</b> of those four boxes. Learn the boxes and the individual items become instances rather than facts to be memorised."}
  ],
  check:{
    q:"Which reconciling item requires an adjusting entry in the entity's books?",
    choices:[
      "A deposit in transit of P285,000",
      "Outstanding cheques of P412,800",
      "Bank service charges of P2,300",
      "A cheque of another depositor charged to the entity's account"
    ],
    answer:2,
    why:"Bank service charges are a <b>debit memorandum</b> - a book-side item the entity has not yet recorded - so an adjusting entry is required. Deposits in transit and outstanding cheques correct themselves when the bank records them, and the <b>bank</b> corrects its own errors."
  }
},
{
  id: "bank-side",
  title: "Bank-Side Items - No Entry Is Ever Made",
  blocks: [
    {t:"h", html:"Deposits in transit - added to the bank balance"},
    {t:"p", html:"Collections already received, recorded in the books and lodged with the bank, but <b>not yet credited by the bank</b> at the cut-off. The entity has recorded them; the bank has not, so the bank balance is too low. Usual instances: deposits made after banking hours on the last day, and deposits mailed near the cut-off."},
    {t:"h", html:"Outstanding cheques - deducted from the bank balance"},
    {t:"p", html:"Cheques drawn, recorded and <b>released to the payee</b>, but not yet presented for payment. The entity has recorded the disbursement; the bank has not, so the bank balance is too high."},
    {t:"note", html:"<b>Certified cheques are excluded from outstanding cheques.</b> On certification the bank immediately earmarks and charges the funds, so the amount is <b>already reflected</b> in the bank statement balance. Deducting it again counts it twice. This is examined more often than its importance warrants - because the intuitive answer is wrong."},
    {t:"note", html:"<b>The item most frequently misplaced.</b> Cheques drawn and recorded but <b>NOT released</b>, and <b>post-dated</b> cheques drawn, are <b>not outstanding cheques at all</b>. No money has left the bank and none is going to, on the strength of an instrument the payee does not hold. They are corrected on the <b>book side</b>, by restoring the amount to cash and crediting back the liability. <b>Stale cheques</b> - ordinarily outstanding beyond six months - are treated the same way."},
    {t:"h", html:"Bank errors"},
    {t:"ul", items:[
      "A deposit <b>of the entity</b> credited to another depositor, or a cheque <b>of another depositor</b> charged against the entity's account - each <b>understates</b> the bank balance and is <b>added</b>.",
      "A deposit <b>of another depositor</b> credited to the entity, or the entity's cheque charged <b>twice</b> - each <b>overstates</b> the bank balance and is <b>deducted</b>."
    ]},
    {t:"p", html:"In every case the bank is told and <b>the bank corrects its records</b>. The entity makes no entry."}
  ],
  check:{
    q:"Outstanding cheques total P894,000, which includes a certified cheque of P74,000. What is deducted from the bank balance?",
    choices:["P894,000","P820,000","P74,000","Nothing - certified cheques cancel the deduction"],
    answer:1,
    why:"Certification causes the bank to charge the account <b>immediately</b>, so the P74,000 is already reflected in the bank statement balance. Deducting it again would count it twice. Only <b>P820,000</b> of genuinely outstanding cheques is deducted."
  }
},
{
  id: "book-side",
  title: "Book-Side Items - Every One Produces an Entry",
  blocks: [
    {t:"h", html:"Credit memoranda - added to the book balance"},
    {t:"ul", items:[
      "<b>Notes receivable collected by the bank</b> on the entity's behalf, with the interest",
      "Proceeds of a <b>loan credited directly</b> to the account",
      "<b>Interest earned</b> on the deposit",
      "<b>Matured time deposits</b> transferred to the current account"
    ]},
    {t:"note", html:"<b>Gross entry, net reconciliation.</b> Where the bank deducts a collection charge, the <b>reconciliation uses the net figure</b> the bank actually credited, but the <b>journal entry records the transaction gross</b> - the note, the interest income and the charge separately - because those are three different economic events. <i>The statement follows the bank; the entry follows the transaction.</i>"},
    {t:"h", html:"Debit memoranda - deducted from the book balance"},
    {t:"ul", items:[
      "<b>NSF or DAIF cheques</b> returned",
      "<b>Bank service charges</b> and the cost of cheque books",
      "<b>Automatic loan amortisations</b> charged directly to the account",
      "<b>Technically defective cheques</b> returned unpaid"
    ]},
    {t:"note", html:"<b>The NSF cheque and the January clearing.</b> A cheque returned NSF in December is, at 31 December, a <b>receivable and not cash</b>, and it is deducted from the book balance. That it was redeposited in January and cleared <b>does not change the position at the reporting date</b> - the later clearing confirms recoverability, so no impairment arises, but it does not convert a dishonoured instrument into cash retrospectively."}
  ],
  check:{
    q:"The bank collected a note of P150,000 plus interest of P6,000, crediting the account net of a P1,500 collection charge. What is added to the book balance in the reconciliation?",
    choices:["P150,000","P156,000","P154,500","P157,500"],
    answer:2,
    why:"The reconciliation uses <b>what the bank actually credited</b>: P156,000 less the P1,500 charge = <b>P154,500</b>. The journal entry, by contrast, is recorded <b>gross</b> - debit cash P154,500 and bank charges P1,500, credit notes receivable P150,000 and interest income P6,000 - because those are distinct economic events."
  }
},
{
  id: "book-errors",
  title: "Book Errors - A Method That Cannot Go Wrong",
  blocks: [
    {t:"p", html:"A cheque for P47,000 recorded in the cash disbursements journal as P74,000. An accountant who tries to reason this out in one movement <b>inverts the sign about half the time</b>. Do not reason it out in one movement. Use three short steps, in writing."},
    {t:"ol", items:[
      "<b>Was it a receipt or a disbursement?</b> A cheque drawn - a <b>disbursement</b>.",
      "<b>By how much, and in which direction, is the recorded amount wrong?</b> Recorded 74,000; correct 47,000. The disbursement is <b>overstated by 27,000</b>.",
      "<b>What did that do to the book balance, and so what must be done?</b> Too much was taken away, so the book balance is <b>understated</b>. <b>Add 27,000.</b>"
    ]},
    {t:"table",
      head:["If the error is in a...","and the recorded amount is...","then the book balance is...","so you..."],
      rows:[
        ["Receipt","too high (overstated)","overstated","<b>deduct</b> the difference"],
        ["Receipt","too low (understated)","understated","<b>add</b> the difference"],
        ["Disbursement","too high (overstated)","understated","<b>add</b> the difference"],
        ["Disbursement","too low (understated)","overstated","<b>deduct</b> the difference"]
      ]},
    {t:"note", html:"<b>Do not memorise the table - derive it.</b> A <b>receipt adds</b> to the balance, so an error in a receipt pushes the balance <b>the same way</b> the error runs. A <b>disbursement subtracts</b> from the balance, so an error in a disbursement pushes the balance <b>the opposite way</b>. Two sentences replace four rows, and they cannot be transposed under pressure the way four rows can."},
    {t:"p", html:"Worked: a collection of P36,000 recorded as P63,000. A <b>receipt</b>, overstated by P27,000, so the book balance is <b>overstated</b> and P27,000 is <b>deducted</b>."}
  ],
  check:{
    q:"A cheque drawn for P57,000 was recorded in the cash disbursements journal as P75,000. In the reconciliation you should:",
    choices:[
      "Deduct P18,000 from the book balance",
      "Add P18,000 to the book balance",
      "Deduct P18,000 from the bank balance",
      "Add P18,000 to the bank balance"
    ],
    answer:1,
    why:"A <b>disbursement overstated</b> by P18,000. Too much was taken away, so the book balance is <b>understated</b> and P18,000 must be <b>added</b>. Derive it: a disbursement subtracts, so an error in a disbursement pushes the balance the <i>opposite</i> way to the error."
  }
},
{
  id: "forms",
  title: "The Three Forms, and a Worked Reconciliation",
  blocks: [
    {t:"ul", items:[
      "<b>Adjusted balance method.</b> Both balances are brought to the <b>correct cash balance</b>. This is the form used in practice and in financial reporting, because the figure it produces is the amount reported in the statement of financial position.",
      "<b>Book to bank method.</b> The book balance is reconciled to the bank statement balance.",
      "<b>Bank to book method.</b> The bank statement balance is reconciled to the book balance."
    ]},
    {t:"note", html:"<b>Use the adjusted balance method unless the problem requires otherwise.</b> The two-sided forms are examined principally to test whether you understand the <b>direction</b> of each item, since <b>every item added under one method is deducted under the other</b> - you are travelling the same road in the opposite direction."},
    {t:"h", html:"Worked example - Tarlac Craft Traders, 31 July 2030"},
    {t:"p", html:"Balance per bank <b>P1,842,500</b>; balance per books <b>P1,610,500</b>. Deposits in transit P285,000; outstanding cheques P412,800; a note of P150,000 plus interest P6,000 collected by the bank net of a P1,500 charge, unrecorded; bank service charges P2,300; a customer's cheque for P48,000 returned NSF, unrecorded."},
    {t:"table",
      head:["","Bank","Books"],
      rows:[
        ["Balance per statement / per books","1,842,500","1,610,500"],
        ["Add: deposits in transit","285,000",""],
        ["Add: credit memo - note collected, net","","154,500"],
        ["Less: outstanding cheques","(412,800)",""],
        ["Less: bank service charges","","(2,300)"],
        ["Less: NSF cheque","","(48,000)"],
        ["<b>Adjusted balance</b>","<b>1,714,700</b>","<b>1,714,700</b>"]
      ]},
    {t:"p", html:"The two columns agree at <b>P1,714,700</b>, and <b>that</b> figure - not the bank's 1,842,500 and not the ledger's 1,610,500 - is the Cash in bank reported in the statement of financial position."},
    {t:"h", html:"The adjusting entries"},
    {t:"p", html:"Ask first which items need an entry: <b>the three on the book side, and only those</b>."},
    {t:"table",
      head:["","Debit","Credit"],
      rows:[
        ["Cash in bank","154,500",""],
        ["Bank service charges","1,500",""],
        ["&nbsp;&nbsp;&nbsp;Notes receivable","","150,000"],
        ["&nbsp;&nbsp;&nbsp;Interest income","","6,000"],
        ["Bank service charges","2,300",""],
        ["&nbsp;&nbsp;&nbsp;Cash in bank","","2,300"],
        ["Accounts receivable","48,000",""],
        ["&nbsp;&nbsp;&nbsp;Cash in bank","","48,000"]
      ]},
    {t:"note", html:"<b>A check worth thirty seconds.</b> Under the adjusted balance method the two columns <b>must</b> agree. If they do not, the error is almost always one of three things: a book-side item placed on the bank side; an item added that should have been deducted; or a <b>certified cheque left inside the outstanding cheques</b>. Check those three before recomputing anything.<br><br>And note that the book column <i>is</i> a list of the journal entries you are about to make - so if your entries do not net to the movement in that column, one of them is wrong."}
  ],
  check:{
    q:"Balance per bank P1,240,000; deposits in transit P186,000; outstanding cheques P254,000; a bank error understating the bank balance P30,000. The adjusted cash balance is:",
    choices:["P1,172,000","P1,202,000","P1,232,000","P1,262,000"],
    answer:1,
    why:"P1,240,000 + P186,000 - P254,000 + P30,000 = <b>P1,202,000</b>. A bank error that <i>understates</i> the bank balance is <b>added</b> - and note that no journal entry arises from any of these items, since all four are on the bank side."
  }
}
],

flashcards: [
  {f:"For what two reasons - and only two - do the book and bank balances differ?", b:"<b>Timing differences</b>, where one party has recorded what the other has not yet recorded; and <b>errors</b> by either party. Timing differences correct themselves; errors do not."},
  {f:"State the golden rule of bank reconciliation.", b:"<b>Only book-side reconciling items and book errors give rise to adjusting entries.</b> Deposits in transit, outstanding cheques and bank errors never do."},
  {f:"Why is a bank CREDIT memo added to the book balance?", b:"The <b>mirror</b>: the account is a liability to the bank. When the bank credits your account it has <b>increased what it owes you</b>, so your asset increases. A debit memo reduces what it owes, so it is deducted."},
  {f:"Define a deposit in transit and state its treatment.", b:"A collection recorded in the books and lodged with the bank but <b>not yet credited</b> at the cut-off. <b>Added to the bank balance; no entry.</b>"},
  {f:"Define an outstanding cheque and state its treatment.", b:"A cheque drawn, recorded and <b>released to the payee</b> but not yet presented for payment. <b>Deducted from the bank balance; no entry.</b>"},
  {f:"Why are certified cheques excluded from outstanding cheques?", b:"On certification the bank <b>immediately earmarks and charges</b> the funds, so the amount is already reflected in the bank statement balance. Deducting it again counts it twice."},
  {f:"How are cheques drawn but NOT released, post-dated, or stale treated?", b:"They are <b>not outstanding cheques</b>. They are corrected on the <b>book side</b> - restore the amount to cash and credit back the liability. This is the item most often misplaced."},
  {f:"How is a bank error treated?", b:"Added to or deducted from the <b>bank balance</b> depending on direction, with <b>no entry by the entity</b> - the bank corrects its own records."},
  {f:"List four credit memoranda.", b:"<b>Notes receivable collected</b> by the bank with interest; <b>loan proceeds</b> credited directly; <b>interest earned</b> on the deposit; <b>matured time deposits</b> transferred to the current account."},
  {f:"List four debit memoranda.", b:"<b>NSF or DAIF cheques</b>; <b>bank service charges</b> and cheque book costs; <b>automatic loan amortisations</b>; <b>technically defective cheques</b> returned."},
  {f:"A note is collected net of a bank charge. Which figure goes in the reconciliation, and which in the entry?", b:"The <b>net</b> amount the bank actually credited goes in the <b>reconciliation</b>; the entry is recorded <b>gross</b> - note, interest and charge separately. <i>The statement follows the bank; the entry follows the transaction.</i>"},
  {f:"An NSF cheque from December clears when redeposited in January. Does that change the reconciliation?", b:"<b>No.</b> At 31 December it was a <b>receivable, not cash</b>, and is deducted from the book balance. The later clearing confirms recoverability but does not convert a dishonoured instrument into cash retrospectively."},
  {f:"State the three-step method for a book error.", b:"(1) Was it a <b>receipt or a disbursement</b>? (2) By how much and in which direction is the recorded amount wrong? (3) What did that do to the <b>book balance</b>, so what must be done to it?"},
  {f:"How do you derive the direction of a book error without a table?", b:"A <b>receipt adds</b> to the balance, so an error in a receipt pushes the balance the <b>same way</b> the error runs. A <b>disbursement subtracts</b>, so an error in a disbursement pushes the balance the <b>opposite way</b>."},
  {f:"A disbursement recorded too high - what is the effect and the correction?", b:"Too much was taken away, so the book balance is <b>understated</b>. <b>Add</b> the difference."},
  {f:"Name the three forms of bank reconciliation, and say which to use.", b:"<b>Adjusted balance</b> (both brought to the correct balance), <b>book to bank</b>, and <b>bank to book</b>. Use the <b>adjusted balance</b> method unless told otherwise - it produces the figure reported in the statement of financial position."},
  {f:"Why are the two-sided forms examined?", b:"They test whether you understand the <b>direction</b> of each item rather than a memorised layout - <b>every item added under one method is deducted under the other</b>."},
  {f:"The two columns do not agree. What are the three likeliest causes?", b:"A <b>book-side item placed on the bank side</b>; an item <b>added that should have been deducted</b>; or a <b>certified cheque left inside the outstanding cheques</b>. Check those before recomputing."}
],

quiz: [
  {q:"Which item requires NO adjusting entry?",
   c:["Bank service charges","A note collected by the bank","A deposit in transit","An NSF cheque returned"],
   a:2, why:"A deposit in transit is a bank-side timing difference that corrects itself when the bank records it. The other three are book-side items the entity has not yet recorded, so each produces an entry.", tos:"C.1.2.1 Golden rule"},

  {q:"A bank credit memorandum is ADDED to the book balance because:",
   c:["Credits always increase assets","The bank has increased what it owes the depositor, so the depositor's asset increases","It reduces the bank's liability","Credit memoranda are errors"],
   a:1, why:"The account is an asset to the entity and a liability to the bank. A bank credit increases what the bank owes, so the entity's asset increases. This is the mirror, and it makes debit and credit memos read correctly.", tos:"C.1.2.1 The mirror"},

  {q:"Outstanding cheques of P620,000 include a certified cheque of P50,000. The deduction from the bank balance is:",
   c:["P620,000","P570,000","P50,000","Nil"],
   a:1, why:"Certification causes the bank to charge the account immediately, so the P50,000 is already in the bank statement balance. Only P570,000 is deducted; deducting the full P620,000 counts the certified cheque twice.", tos:"C.1.2.1 Bank-side items"},

  {q:"A cheque drawn and recorded on 20 December remained UNDELIVERED at 31 December. It is:",
   c:["An outstanding cheque, deducted from the bank balance","Added to the book balance, with the liability credited back","Deducted from the book balance","Ignored - it will be delivered in January"],
   a:1, why:"No money has left the bank and none will, because the payee does not hold the instrument. It is corrected on the BOOK side: restore the amount to cash and credit back accounts payable. This is the most frequently misplaced item in the topic.", tos:"C.1.2.1 Bank-side items"},

  {q:"The bank erroneously charged the entity's account for another depositor's cheque of P118,000. The treatment is:",
   c:["Add P118,000 to the bank balance; no entry","Add P118,000 to the book balance; adjusting entry required","Deduct P118,000 from the bank balance; no entry","Deduct P118,000 from the book balance"],
   a:0, why:"The bank error UNDERSTATES the bank balance, so it is added on the bank side. The bank corrects its own records and the entity makes no journal entry.", tos:"C.1.2.1 Bank errors"},

  {q:"A collection of P36,000 was recorded in the books as P63,000. In the reconciliation:",
   c:["Add P27,000 to the book balance","Deduct P27,000 from the book balance","Add P27,000 to the bank balance","Deduct P27,000 from the bank balance"],
   a:1, why:"A RECEIPT overstated by P27,000. A receipt adds to the balance, so an error in a receipt pushes the balance the same way - the book balance is overstated and P27,000 is deducted.", tos:"C.1.2.1 Book errors"},

  {q:"A cheque for P48,000 was recorded as P84,000. In the reconciliation:",
   c:["Deduct P36,000 from the book balance","Add P36,000 to the book balance","Deduct P36,000 from the bank balance","No adjustment - the bank will correct it"],
   a:1, why:"A DISBURSEMENT overstated by P36,000. Too much was taken away, so the book balance is understated and P36,000 is added. A disbursement subtracts, so an error in it pushes the balance the opposite way.", tos:"C.1.2.1 Book errors"},

  {q:"Balance per books P980,000; note collected P150,000; interest earned P4,000; NSF cheque P62,000; service charges P3,500; a cheque for P48,000 recorded as P84,000. The adjusted book balance is:",
   c:["P1,068,500","P1,104,500","P1,032,500","P1,140,500"],
   a:1, why:"980,000 + 150,000 + 4,000 - 62,000 - 3,500 + 36,000 = P1,104,500. The last item is a disbursement overstated by P36,000, which is ADDED because the book balance was understated.", tos:"C.1.2.1 Adjusted balance"},

  {q:"Balance per bank P1,240,000; deposits in transit P186,000; outstanding cheques P254,000; a bank error understating the bank balance P30,000. The adjusted balance is:",
   c:["P1,172,000","P1,202,000","P1,232,000","P1,142,000"],
   a:1, why:"1,240,000 + 186,000 - 254,000 + 30,000 = P1,202,000. All four are bank-side items, so none produces a journal entry.", tos:"C.1.2.1 Adjusted balance"},

  {q:"A note of P200,000 plus interest of P8,000 was collected by the bank net of a P2,000 charge. The amount ADDED to the book balance in the reconciliation is:",
   c:["P200,000","P208,000","P206,000","P210,000"],
   a:2, why:"The reconciliation uses what the bank actually credited: P208,000 less the P2,000 charge = P206,000. The journal entry is recorded gross, splitting out the note, the interest income and the charge.", tos:"C.1.2.1 Credit memoranda"},

  {q:"Which form of reconciliation produces the figure reported in the statement of financial position?",
   c:["Book to bank","Bank to book","Adjusted balance","All three produce it"],
   a:2, why:"The adjusted balance method brings both balances to the correct cash balance, and that figure is what is reported. The two-sided forms are examined mainly to test understanding of the direction of each item.", tos:"C.1.2.1 Forms"},

  {q:"Under the adjusted balance method the two columns do not agree. The likeliest cause is NOT:",
   c:["A book-side item placed on the bank side","An item added that should have been deducted","A certified cheque left inside outstanding cheques","A deposit in transit that has not been journalised"],
   a:3, why:"A deposit in transit is never journalised, so failing to journalise one cannot cause a disagreement. The other three are the standard causes worth checking before recomputing anything.", tos:"C.1.2.1 Forms"}
]
});

/* ==================================================================
   4. PROOF OF CASH
   ================================================================== */
FARHub.addChapter({
  id: "c1-proof-of-cash",
  code: "C.1.2.1",
  group: CASH_GROUP,
  title: "Proof of Cash",
  blurb: "A reconciliation stretched over a period rather than pinned to a date - and the only instrument that exposes an unrecorded receipt hidden behind an unrecorded disbursement.",
  minutes: 45,
  outcomes: [
    "Explain what a proof of cash is and when it is prepared.",
    "Explain why it detects a defalcation a single-date reconciliation conceals.",
    "Place beginning and ending timing differences into the correct columns.",
    "Prepare and check a four-column proof of cash."
  ],

  sections: [
{
  id: "what",
  title: "What It Is, and Why It Exists",
  blocks: [
    {t:"p", html:"A <b>proof of cash</b> is an expanded reconciliation covering a <b>period</b> rather than a single date. It reconciles, in <b>four columns</b>, the beginning balance, the receipts, the disbursements and the ending balance - for both books and bank."},
    {t:"p", html:"It is prepared where <b>internal control over cash is weak</b> or a <b>defalcation is suspected</b>."},
    {t:"note", html:"<b>Why it catches what a single-date reconciliation cannot.</b> Consider an unrecorded receipt of P50,000 concealed by an unrecorded disbursement of the same amount. At a point in time the two <b>net to zero</b> and the balances still reconcile - the fraud is invisible. In a proof of cash the same two items appear in the <b>receipts column</b> and the <b>disbursements column</b> separately, where they cannot cancel. The activity is exposed even though the balance is not."},
    {t:"p", html:"That is the whole justification for the schedule. A bank reconciliation asks whether the <b>balance</b> is right; a proof of cash asks whether the <b>movement</b> is right."},
    {t:"note", html:"<b>A note on scope.</b> Proof of cash is <b>not named in the 2029 Table of Specifications</b>, which lists only the bank reconciliation statement and the petty cash fund under cash control. It is, however, in the FAR 0 OBTL, and it is treated fully by Valix and the review centres. Learn it as the best available training in reading a cash account <b>across a period</b> rather than at a point - and do not mistake breadth of coverage for weight of examination."}
  ],
  check:{
    q:"Why does a proof of cash detect a defalcation that a single-date bank reconciliation does not?",
    choices:[
      "It uses the bank statement rather than the ledger.",
      "An unrecorded receipt offset by an unrecorded disbursement nets to zero at a point in time, but appears separately in the receipts and disbursements columns.",
      "It covers two banks rather than one.",
      "It is prepared by an external auditor rather than the entity."
    ],
    answer:1,
    why:"Offsetting unrecorded items cancel in a balance but <b>cannot cancel across two different columns</b>. The bank reconciliation asks whether the <b>balance</b> is right; the proof of cash asks whether the <b>movement</b> is right, which is a harder question to answer falsely."
  }
},
{
  id: "rules",
  title: "The Column Rules",
  blocks: [
    {t:"p", html:"Every rule below follows from one idea: <b>a timing difference at the beginning of the period was recorded by the other party during this period, and a timing difference at the end has not been recorded by them yet.</b>"},
    {t:"h", html:"Deposits in transit"},
    {t:"ul", items:[
      "<b>Beginning</b> - <b>deducted</b> from bank receipts for the current month. The bank recorded them <i>this</i> month; the books recorded them <i>last</i> month.",
      "<b>Ending</b> - <b>added</b> to bank receipts. The books have recorded them; the bank has not yet."
    ]},
    {t:"h", html:"Outstanding cheques"},
    {t:"ul", items:[
      "<b>Beginning</b> - <b>deducted</b> from bank disbursements for the current month.",
      "<b>Ending</b> - <b>added</b> to bank disbursements."
    ]},
    {t:"h", html:"Credit memoranda"},
    {t:"ul", items:[
      "Of the <b>current</b> month, not yet recorded in the books - <b>added</b> to book receipts.",
      "Of the <b>prior</b> month, recorded in the books this month - <b>deducted</b> from book receipts."
    ]},
    {t:"h", html:"Debit memoranda"},
    {t:"ul", items:[
      "Of the <b>current</b> month, not yet recorded in the books - <b>added</b> to book disbursements.",
      "Of the <b>prior</b> month, recorded in the books this month - <b>deducted</b> from book disbursements."
    ]},
    {t:"note", html:"<b>The symmetry is total.</b> Beginning timing differences are always <b>deducted</b> and ending timing differences always <b>added</b>, on whichever line the item belongs to. Once you see that, there are only four facts to hold rather than sixteen: <i>bank-side items adjust the bank lines, book-side items adjust the book lines; beginnings come out, endings go in.</i>"},
    {t:"p", html:"<b>Errors</b> are entered in the column and on the side that corrects them, and a <b>single error may affect two columns</b>."},
    {t:"h", html:"The arithmetic check"},
    {t:"p", html:"<b>Beginning balance + receipts - disbursements = ending balance</b>, on both the book line and the bank line. And after adjustment the two lines must agree <b>column by column</b>."}
  ],
  check:{
    q:"Deposits in transit at 30 November were P342,000 and at 31 December were P528,000. In the December proof of cash, how are these treated in the bank receipts column?",
    choices:[
      "Both added",
      "Both deducted",
      "P342,000 deducted and P528,000 added",
      "P342,000 added and P528,000 deducted"
    ],
    answer:2,
    why:"The <b>beginning</b> deposit in transit was recorded by the bank <i>this</i> month but by the books <i>last</i> month, so it is <b>deducted</b> from bank receipts. The <b>ending</b> one is in the books but not yet at the bank, so it is <b>added</b>. Beginnings come out; endings go in."
  }
},
{
  id: "worked",
  title: "A Worked Proof of Cash",
  blocks: [
    {t:"p", html:"December 2026 for a BPI current account:"},
    {t:"table",
      head:["","Books","Bank"],
      rows:[
        ["Balance, 30 November","2,764,000","3,054,200"],
        ["Receipts / credits for December","6,420,000","6,696,700"],
        ["Disbursements / debits for December","6,004,000","6,012,700"],
        ["Balance, 31 December","3,180,000","3,738,200"]
      ]},
    {t:"p", html:"Deposits in transit: 30 November <b>342,000</b>; 31 December <b>528,000</b>. Outstanding cheques: 30 November <b>636,000</b>; 31 December <b>894,000</b>."},
    {t:"table",
      head:["Bank line","Beginning","Receipts","Disbursements","Ending"],
      rows:[
        ["Balance per bank","3,054,200","6,696,700","6,012,700","3,738,200"],
        ["Deposits in transit, beginning","342,000","(342,000)","",""],
        ["Deposits in transit, ending","","528,000","","528,000"],
        ["Outstanding cheques, beginning","(636,000)","","(636,000)",""],
        ["Outstanding cheques, ending","","","894,000","(894,000)"],
        ["<b>Adjusted bank</b>","<b>2,760,200</b>","<b>6,882,700</b>","<b>6,270,700</b>","<b>3,372,200</b>"]
      ]},
    {t:"p", html:"Check the bank line across: 2,760,200 + 6,882,700 - 6,270,700 = <b>3,372,200</b>. It foots."},
    {t:"note", html:"<b>Read the beginning column carefully.</b> A beginning deposit in transit is <b>added</b> to the beginning bank <i>balance</i> (the books had it; the bank did not) but <b>deducted</b> from bank <i>receipts</i> (the bank records it this month; the books did last month). The same figure moves in opposite directions in two different columns, and this is where proofs of cash are most often got wrong."},
    {t:"p", html:"The book line is then adjusted for credit and debit memoranda on the same beginning-out, ending-in principle, and the two adjusted lines must agree column by column."}
  ],
  check:{
    q:"Deposits in transit were P300,000 at 30 November and P420,000 at 31 December. Bank credits for December were P5,800,000. Ignoring memoranda, book receipts for December were:",
    choices:["P5,680,000","P5,920,000","P6,100,000","P5,500,000"],
    answer:1,
    why:"Adjusted receipts = P5,800,000 - P300,000 (beginning DIT, recorded by the bank this month) + P420,000 (ending DIT, in the books but not yet at the bank) = <b>P5,920,000</b>. Beginnings come out; endings go in."
  }
},
{
  id: "interbank",
  title: "Reading the Result",
  blocks: [
    {t:"p", html:"A proof of cash is only useful if you can say what a discrepancy <b>means</b>. Three patterns recur."},
    {t:"table",
      head:["What you see","What it suggests"],
      rows:[
        ["Adjusted book and bank <b>balances</b> agree, but the <b>receipts</b> and <b>disbursements</b> columns do not","Offsetting unrecorded items - the classic signature of a concealed defalcation"],
        ["Both columns are out by the <b>same amount in the same direction</b>","A single unrecorded item, most often a memorandum the entity has not yet taken up"],
        ["The columns foot but the <b>beginning</b> balance does not agree","An error carried forward from the prior period's reconciliation"]
      ]},
    {t:"note", html:"<b>Where this connects to the rest of the topic.</b> Kiting is detected by an <b>interbank transfer schedule</b>, not by a proof of cash - a proof of cash covers <b>one</b> account, while kiting exploits the gap between <b>two</b>. Lapping is detected by comparing deposit slips and remittance advices with the subsidiary ledger. The proof of cash catches the third pattern: <b>unrecorded activity within a single account</b>."},
    {t:"p", html:"So the three instruments are complementary rather than alternatives. Asked which procedure detects a given scheme, match the scheme to the number of accounts and records involved: one account's activity means proof of cash; two accounts across a cut-off means an interbank transfer schedule; receivables postings mean lapping."}
  ],
  check:{
    q:"An auditor suspects kiting. Which procedure detects it?",
    choices:[
      "A four-column proof of cash",
      "A schedule of interbank transfers spanning the reporting date",
      "Comparing deposit slips with the receivables subsidiary ledger",
      "A surprise count of the petty cash fund"
    ],
    answer:1,
    why:"Kiting exploits the gap between <b>two</b> bank accounts across the cut-off, so it is detected by an <b>interbank transfer schedule</b> comparing book and bank dates on each side of every transfer. A proof of cash covers only <b>one</b> account; comparing deposit slips with the subsidiary ledger detects <b>lapping</b>."
  }
}
],

flashcards: [
  {f:"What is a proof of cash?", b:"An <b>expanded reconciliation covering a period</b> rather than a single date, reconciling in <b>four columns</b> the beginning balance, receipts, disbursements and ending balance for both books and bank."},
  {f:"When is a proof of cash prepared?", b:"Where <b>internal control over cash is weak</b> or a <b>defalcation is suspected</b>."},
  {f:"Why does a proof of cash detect what a single-date reconciliation cannot?", b:"An unrecorded receipt concealed by an unrecorded disbursement of the same amount <b>nets to zero</b> at a point in time, but appears <b>separately in the receipts and disbursements columns</b>, where the two cannot cancel."},
  {f:"In one sentence, how do a bank reconciliation and a proof of cash differ in purpose?", b:"A bank reconciliation asks whether the <b>balance</b> is right; a proof of cash asks whether the <b>movement</b> is right."},
  {f:"How are deposits in transit treated in a proof of cash?", b:"<b>Beginning</b> - deducted from bank receipts. <b>Ending</b> - added to bank receipts."},
  {f:"How are outstanding cheques treated in a proof of cash?", b:"<b>Beginning</b> - deducted from bank disbursements. <b>Ending</b> - added to bank disbursements."},
  {f:"How are credit memoranda treated in a proof of cash?", b:"<b>Current month, unrecorded in the books</b> - added to book receipts. <b>Prior month, recorded this month</b> - deducted from book receipts."},
  {f:"How are debit memoranda treated in a proof of cash?", b:"<b>Current month, unrecorded in the books</b> - added to book disbursements. <b>Prior month, recorded this month</b> - deducted from book disbursements."},
  {f:"State the single principle behind all the column rules.", b:"<b>Beginning timing differences are deducted; ending timing differences are added</b> - on whichever line the item belongs to. Bank-side items adjust the bank lines, book-side items the book lines."},
  {f:"Why does a beginning deposit in transit move in two directions?", b:"It is <b>added</b> to the beginning bank <i>balance</i> (the books had it, the bank did not) but <b>deducted</b> from bank <i>receipts</i> (the bank records it this month, the books did last month). This is where proofs of cash are most often got wrong."},
  {f:"State the arithmetic check on a proof of cash.", b:"<b>Beginning + receipts - disbursements = ending</b>, on both the book and bank lines, and after adjustment the two lines agree <b>column by column</b>."},
  {f:"Adjusted balances agree but the receipts and disbursements columns do not. What does that suggest?", b:"<b>Offsetting unrecorded items</b> - the classic signature of a concealed defalcation, and exactly what the schedule exists to find."},
  {f:"Which procedure detects kiting, and why not a proof of cash?", b:"A <b>schedule of interbank transfers</b> spanning the reporting date. Kiting exploits the gap between <b>two</b> accounts; a proof of cash covers only <b>one</b>."},
  {f:"Is proof of cash in the 2029 Table of Specifications?", b:"<b>No.</b> The TOS names only the <b>bank reconciliation statement</b> and the <b>petty cash fund</b> under cash control. Proof of cash is in the FAR 0 OBTL and is examinable in the subject, but carries no separate licensure weight."}
],

quiz: [
  {q:"A proof of cash is prepared principally where:",
   c:["The entity has more than one bank account","Internal control over cash is weak or a defalcation is suspected","The bank statement is unavailable","The entity uses a voucher system"],
   a:1, why:"It is a fraud-detection instrument. Where controls are sound and no defalcation is suspected, a single-date bank reconciliation is sufficient.", tos:"Proof of cash"},

  {q:"A proof of cash exposes an unrecorded receipt concealed by an unrecorded disbursement because:",
   c:["It uses the bank statement directly","The two items appear in separate columns and cannot cancel","It covers a longer period","It is prepared monthly"],
   a:1, why:"The two offsetting items net to zero in a balance but land in the receipts column and the disbursements column respectively, where they cannot cancel. That is the entire justification for the schedule.", tos:"Proof of cash"},

  {q:"Deposits in transit at the BEGINNING of the month are treated in the bank RECEIPTS column by:",
   c:["Adding them","Deducting them","Ignoring them","Adding them to disbursements instead"],
   a:1, why:"The bank recorded them this month while the books recorded them last month, so they must be removed from this month's bank receipts. Beginnings come out; endings go in.", tos:"Proof of cash"},

  {q:"Outstanding cheques at the END of the month are treated in the bank DISBURSEMENTS column by:",
   c:["Adding them","Deducting them","Ignoring them","Deducting them from receipts"],
   a:0, why:"The books have recorded the disbursement but the bank has not yet paid the cheque, so it is added to bank disbursements to bring the bank line up to the book basis. Ending timing differences are always added.", tos:"Proof of cash"},

  {q:"A credit memorandum of the PRIOR month, recorded in the books this month, is:",
   c:["Added to book receipts","Deducted from book receipts","Added to bank receipts","Deducted from bank disbursements"],
   a:1, why:"The bank credited it last month and the books have only now caught up, so it must be removed from this month's book receipts. Prior-month items come out of the current month.", tos:"Proof of cash"},

  {q:"Deposits in transit were P300,000 at 30 November and P420,000 at 31 December; bank credits for December were P5,800,000. Book receipts, ignoring memoranda, were:",
   c:["P5,680,000","P5,920,000","P6,100,000","P5,380,000"],
   a:1, why:"5,800,000 - 300,000 + 420,000 = P5,920,000. The beginning deposit in transit comes out of bank receipts and the ending one goes in.", tos:"Proof of cash"},

  {q:"Bank debits for December were P6,012,700; outstanding cheques were P636,000 at 30 November and P894,000 at 31 December. Adjusted disbursements are:",
   c:["P5,754,700","P6,270,700","P6,528,700","P5,118,700"],
   a:1, why:"6,012,700 - 636,000 + 894,000 = P6,270,700. Beginning outstanding cheques are deducted from bank disbursements, ending ones added.", tos:"Proof of cash"},

  {q:"The arithmetic check on a proof of cash is that:",
   c:["Book and bank ending balances agree before adjustment","Beginning + receipts - disbursements = ending, on both lines, and the adjusted lines agree column by column","Total receipts equal total disbursements","The bank line needs no adjustment"],
   a:1, why:"Each line must foot across, and after adjustment the book and bank lines must agree in every one of the four columns - not merely in the ending balance.", tos:"Proof of cash"},

  {q:"Kiting is detected by:",
   c:["A proof of cash","A schedule of interbank transfers spanning the reporting date","A petty cash count","Comparing the bank statement with the cash receipts journal"],
   a:1, why:"Kiting exploits the timing gap between TWO bank accounts across the cut-off, so it needs a schedule comparing book and bank dates on both sides of each transfer. A proof of cash covers only one account.", tos:"Cash control"},

  {q:"Under the 2029 Table of Specifications, proof of cash is:",
   c:["Named expressly under cash control","Not named - the TOS lists only the bank reconciliation statement and the petty cash fund","Named under other financial assets","Named under the statement of cash flows"],
   a:1, why:"The 2029 TOS specifies the nature and composition of cash, and cash control comprising the bank reconciliation statement and the petty cash fund under the imprest system. Proof of cash is in the FAR 0 OBTL but carries no separate licensure weight.", tos:"Scope"}
]
});
