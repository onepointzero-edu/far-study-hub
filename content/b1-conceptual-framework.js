/* CPALE 2029 TOS - B.1 The Conceptual Framework for Financial Reporting
   Source: TSU FAR 0, Module 2 (Revised Conceptual Framework), Week 4, CO2/CO4. */
FARHub.addChapter({
  id: "b1-conceptual-framework",
  code: "B.1",
  title: "The Conceptual Framework for Financial Reporting",
  blurb: "The theory the standards are built on: the objective of financial reporting, the qualitative characteristics, the elements, recognition, measurement, presentation, and capital maintenance.",
  minutes: 75,
  outcomes: [
    "Explain the purpose and status of the Conceptual Framework and what happens when it conflicts with a PFRS.",
    "Explain the fundamental and enhancing qualitative characteristics of useful financial information.",
    "Apply the revised definitions of the elements, and the recognition and derecognition criteria.",
    "Select and justify a measurement basis, and distinguish entry prices from exit prices.",
    "Distinguish the financial and physical concepts of capital and capital maintenance."
  ],

  sections: [
/* ============================ 1 ============================ */
{
  id: "purpose-status",
  title: "Purpose and Status of the Framework",
  blocks: [
    {t:"p", html:"The <b>Conceptual Framework for Financial Reporting</b> is a complete, coherent statement of the concepts that underlie the preparation and presentation of general-purpose financial statements. It is the theory from which individual accounting standards are derived. Where basic accounting asks <i>how</i> a transaction is recorded, the Conceptual Framework asks <i>why</i> that treatment is the correct one."},
    {t:"h", html:"The three purposes it serves"},
    {t:"ol", items:[
      "<b>Standard-setting.</b> It assists the IASB, and locally the FRSC, in developing standards that are internally consistent and grounded in a single set of concepts rather than assembled case by case.",
      "<b>Policy development by preparers.</b> It assists preparers in developing a consistent accounting policy when no standard applies to a transaction, or when a standard permits a choice of policy.",
      "<b>Understanding and interpretation.</b> It assists auditors, regulators, users and students in understanding and interpreting the standards."
    ]},
    {t:"h", html:"The status of the Framework: it is not a standard"},
    {t:"p", html:"This point is examinable and frequently misunderstood. The Conceptual Framework <b>is not an accounting standard</b>. It does not carry the authority of a PFRS or PAS, and nothing in it overrides any specific standard or any requirement within a standard."},
    {t:"note", html:"<b>Rule.</b> Where a conflict arises between the Conceptual Framework and a specific PFRS, <b>the requirement of the PFRS prevails.</b>"},
    {t:"p", html:"The reason is practical. In developing a particular standard, the IASB may conclude that departing from an aspect of the Framework produces more useful information for that class of transactions. Such departures are explained in the <i>Basis for Conclusions</i> of the standard concerned. The Framework guides the writing of standards; it does not sit above them."}
  ],
  check:{
    q:"An entity's Conceptual Framework analysis conflicts with an explicit requirement of PFRS 15. Which prevails?",
    choices:[
      "The Conceptual Framework, because it is the foundation from which all standards are derived.",
      "PFRS 15, because the Framework is not a standard and does not override any specific PFRS.",
      "Whichever produces the more relevant information in the circumstances.",
      "Neither - the entity must refer the matter to the FRSC for resolution."
    ],
    answer:1,
    why:"The Framework is not a standard. It informs standard-setting and fills gaps where no standard applies, but a specific PFRS requirement always prevails over it. Where the IASB deliberately departs from the Framework in writing a standard, the reason is explained in that standard's Basis for Conclusions."
  }
},
/* ============================ 2 ============================ */
{
  id: "development-2018",
  title: "Development and the 2018 Revision",
  blocks: [
    {t:"p", html:"The Framework has been revised twice since its original issuance. The <b>2018 revision</b> is comprehensive and is the version now in force."},
    {t:"table",
      head:["Year","Development","Significance"],
      rows:[
        ["1989","The original <i>Framework for the Preparation and Presentation of Financial Statements</i> was issued by the IASC.","Established the first coherent set of concepts. Contained no guidance on measurement bases, the reporting entity, presentation and disclosure, or derecognition."],
        ["2010","A partial revision replaced two chapters - the objective of financial reporting and the qualitative characteristics.","Completed jointly with the FASB as part of the convergence project. The remaining chapters carried over unchanged from 1989, leaving the document internally inconsistent."],
        ["March 2018","The IASB issued the comprehensive revised Conceptual Framework, replacing the 2010 version.","Filled the gaps, updated the definitions of asset and liability, revised the recognition criteria, and added new chapters on measurement, presentation and disclosure, and the reporting entity."],
        ["27 June 2018","The FRSC adopted the revised Conceptual Framework for application in the Philippines.","Maintains convergence of Philippine financial reporting with IFRS."],
        ["1 January 2020","Effective date for entities that use the Framework to develop accounting policies where no standard applies. Earlier application was permitted.","Effective immediately upon issuance for the IASB and the IFRS Interpretations Committee themselves."]
      ]},
    {t:"h", html:"Why the 2018 revision was needed"},
    {t:"ul", items:[
      "<b>Gaps.</b> The Framework said nothing about measurement bases, the reporting entity, presentation and disclosure, or derecognition - despite these being decisions preparers make constantly.",
      "<b>Unclear guidance.</b> The definitions of asset and liability referred to an <i>expected</i> inflow or outflow of economic benefits. That wording conflated the definition of an element with the probability of benefits arising, and led preparers to treat unlikely-but-real rights and obligations as non-existent.",
      "<b>Outdated content.</b> Some concepts no longer reflected the IASB's current thinking - most notably prudence, which had been removed in 2010 on the ground that it conflicted with neutrality."
    ]},
    {t:"h", html:"Structure of the revised Framework"},
    {t:"p", html:"The revised Framework comprises eight chapters. Chapters 3, 5, 6 and 7 are new or substantially new."},
    {t:"table",
      head:["Ch.","Title","Central question it answers"],
      rows:[
        ["1","The Objective of General-Purpose Financial Reporting","For whom, and for what decisions, is financial reporting prepared?"],
        ["2","Qualitative Characteristics of Useful Financial Information","What makes financial information useful?"],
        ["3","Financial Statements and the Reporting Entity","What is being reported, over what period, and by which entity?"],
        ["4","The Elements of Financial Statements","What qualifies as an asset, liability, equity, income or expense?"],
        ["5","Recognition and Derecognition","When does an element enter, and leave, the financial statements?"],
        ["6","Measurement","At what amount is a recognized element carried?"],
        ["7","Presentation and Disclosure","How is recognized and measured information communicated?"],
        ["8","Concepts of Capital and Capital Maintenance","Against what benchmark is profit determined?"]
      ]}
  ],
  check:{
    q:"Which set of chapters is new or substantially new in the 2018 revised Framework?",
    choices:[
      "Chapters 1 and 2 - the objective and the qualitative characteristics.",
      "Chapters 3, 5, 6 and 7 - reporting entity, recognition/derecognition, measurement, and presentation/disclosure.",
      "Chapter 8 alone - capital and capital maintenance.",
      "All eight chapters were rewritten from scratch."
    ],
    answer:1,
    why:"Chapters 1 and 2 had already been replaced in the 2010 partial revision. Chapter 8 was carried forward substantially unchanged from 1989. The 2018 revision's new material is concentrated in Chapters 3, 5, 6 and 7 - precisely the gaps the IASB had identified."
  }
},
/* ============================ 3 ============================ */
{
  id: "ch1-objective",
  title: "Chapter 1 - The Objective of General-Purpose Financial Reporting",
  blocks: [
    {t:"p", html:"The objective of general-purpose financial reporting is <b>to provide financial information about the reporting entity that is useful to existing and potential investors, lenders and other creditors in making decisions relating to providing resources to the entity.</b>"},
    {t:"p", html:"Every other concept in the Framework is subordinate to this objective. It is described as the <i>foundation</i> of the Conceptual Framework: a proposal to change any other concept is evaluated by asking whether it advances this objective."},
    {t:"h", html:"Primary users"},
    {t:"p", html:"The primary users are <b>existing and potential investors, lenders and other creditors</b>. The Framework identifies these three groups specifically because they cannot require the entity to provide information directly, and must therefore rely on general-purpose financial reports."},
    {t:"p", html:"Other parties - management, regulators, employees, customers and the general public - may find the reports useful, but the reports are not primarily directed to them. <b>Management</b> is excluded because it can obtain whatever information it needs internally; <b>regulators</b> are excluded because they have statutory authority to demand information."},
    {t:"h", html:"The decisions primary users make"},
    {t:"ul", items:[
      "<b>Resource allocation decisions</b> - buying, selling or holding equity and debt instruments; providing or settling loans and other forms of credit.",
      "<b>Stewardship decisions</b> - exercising voting rights or otherwise influencing management's actions in relation to the use of the entity's economic resources."
    ]},
    {t:"note", html:"<b>2018 change.</b> The revision gives <b>stewardship</b> a clearer and more prominent place. The 2010 version had de-emphasized it, and users complained that assessing how efficiently and effectively management has discharged its responsibilities is a distinct objective in its own right - not merely an input to predicting future returns."},
    {t:"h", html:"Limitations of general-purpose financial reports"},
    {t:"ul", items:[
      "They do not, and cannot, provide all the information users need - users must also consider general economic conditions and industry outlooks.",
      "They are <b>not designed to show the value of the entity</b>. They provide information that helps users estimate that value; they do not report it.",
      "They meet the <i>common</i> information needs of a wide range of users and cannot be tailored to any single user.",
      "They are based to a large extent on estimates, judgments and models rather than exact depictions."
    ]},
    {t:"note", html:"<b>Accrual versus past cash flows.</b> The Framework states expressly that information about financial performance reflected by accrual accounting provides a <b>better</b> basis for assessing past and future performance than information based solely on cash receipts and payments. Information about past cash flows remains useful in its own right - it helps users understand operations, evaluate liquidity, and assess the relationship between profitability and net cash flow."}
  ],
  check:{
    q:"Why does the Framework exclude management from the list of primary users?",
    choices:[
      "Because management's interests conflict with those of investors.",
      "Because management can obtain the information it needs internally and need not rely on general-purpose financial reports.",
      "Because management is not a provider of resources to the entity.",
      "Because management prepares the reports and is therefore presumed to understand them."
    ],
    answer:1,
    why:"The primary users are defined by <i>dependence</i>: investors, lenders and other creditors cannot compel the entity to give them information, so they must rely on general-purpose reports. Management can obtain what it needs internally; regulators can demand information by statute. That is why both fall outside the primary-user group."
  }
},
/* ============================ 4 ============================ */
{
  id: "ch2-fundamental",
  title: "Chapter 2 - Fundamental Qualitative Characteristics",
  blocks: [
    {t:"p", html:"The qualitative characteristics identify the types of information likely to be most useful to primary users. They divide into <b>fundamental</b> characteristics, which information must possess to be useful at all, and <b>enhancing</b> characteristics, which increase the usefulness of information that is already relevant and faithfully represented."},
    {t:"h", html:"1. Relevance"},
    {t:"p", html:"Relevant information is <b>capable of making a difference</b> in the decisions made by users. Information is capable of making a difference even if some users choose not to take advantage of it, or are already aware of it from other sources."},
    {t:"ul", items:[
      "<b>Predictive value.</b> Users can employ the information as an input to processes that predict future outcomes. It need not itself be a prediction or forecast.",
      "<b>Confirmatory value.</b> The information provides feedback that confirms or changes previous evaluations."
    ]},
    {t:"p", html:"The two are interrelated: revenue for the current year can be used both as a basis for predicting next year's revenue and to confirm the accuracy of last year's prediction."},
    {t:"p", html:"<b>Materiality</b> is the <i>entity-specific</i> aspect of relevance. Information is material if omitting, misstating or obscuring it could reasonably be expected to influence the decisions primary users make on the basis of the financial statements. Because materiality depends on the nature or magnitude of the item in the context of a particular entity's report, the Framework <b>does not specify a uniform quantitative threshold</b>."},
    {t:"h", html:"2. Faithful representation"},
    {t:"p", html:"To be useful, a depiction must be faithful to the <i>substance</i> of what it purports to represent. A perfectly faithful representation has three characteristics:"},
    {t:"ul", items:[
      "<b>Complete.</b> It includes all information necessary for a user to understand the phenomenon, including descriptions and explanations.",
      "<b>Neutral.</b> It is without bias in the selection or presentation of information - not slanted, weighted, emphasized, de-emphasized or otherwise manipulated to make it more or less likely to be received favourably.",
      "<b>Free from error.</b> There are no errors or omissions in the description, and the process used to produce the information has been selected and applied without error. This does not mean perfect accuracy: an estimate is free from error if the amount is clearly described as an estimate and the process is properly applied."
    ]},
    {t:"note", html:"<b>Substance over form.</b> The Framework does not list this as a separate characteristic. It is a <b>component of faithful representation</b>, on the reasoning that representing a legal form which differs from the economic substance could not produce a faithful representation. Where legal form and economic substance diverge, the substance governs."},
    {t:"p", html:"<b>Measurement uncertainty.</b> A high level of measurement uncertainty does not automatically prevent an estimate from being a faithful representation, provided the estimate is clearly described, its limitations explained, and no errors made in applying the process. But if uncertainty is so high that the resulting estimate would not be useful, a different measurement basis may be more appropriate."}
  ],
  check:{
    q:"An entity uses a fishing vessel exclusively and bears all its costs, but legal title is registered to the majority shareholder. The finance officer excludes the vessel from the statement of financial position. Which characteristic is most directly breached?",
    choices:[
      "Comparability, because other entities would report such a vessel.",
      "Faithful representation, because the depiction follows legal form rather than economic substance.",
      "Timeliness, because the omission was not corrected promptly.",
      "Verifiability, because no title document supports the entity's use."
    ],
    answer:1,
    why:"Substance over form is a component of faithful representation. The entity controls the vessel - it directs its use, obtains the benefits, and bears the costs - so reporting it as absent because legal title sits elsewhere depicts the legal form rather than the economic substance, and is not a faithful representation."
  }
},
/* ============================ 5 ============================ */
{
  id: "ch2-enhancing",
  title: "Chapter 2 - Enhancing Characteristics, Prudence and the Cost Constraint",
  blocks: [
    {t:"p", html:"The four enhancing characteristics increase the usefulness of information that is <i>already</i> relevant and faithfully represented. They <b>cannot make useless information useful</b>, and they cannot compensate for the absence of either fundamental characteristic."},
    {t:"table",
      head:["Characteristic","Meaning","Commonly tested"],
      rows:[
        ["Comparability","Enables users to identify and understand similarities in, and differences among, items - both across periods for one entity and across entities for one period.","Comparability is <b>not uniformity</b>. Like things must look alike and unlike things must look different; making unlike things look alike is as damaging as the reverse. <b>Consistency</b> - using the same methods period to period - is a <i>means</i> of achieving comparability, not the goal itself."],
        ["Verifiability","Different knowledgeable and independent observers could reach consensus, though not necessarily complete agreement, that a depiction is a faithful representation.","<b>Direct</b> verification means observing the amount itself, such as counting cash. <b>Indirect</b> verification means checking the inputs to a model and recalculating the output, such as recomputing ending inventory from quantities and costs."],
        ["Timeliness","Having information available to decision-makers in time to be capable of influencing their decisions.","Older information is generally less useful, but some information remains timely long after period end because users are still identifying and assessing trends."],
        ["Understandability","Classifying, characterizing and presenting information clearly and concisely.","Complex information is <b>not excluded</b> merely because some users find it difficult - excluding it would make the reports incomplete and misleading. Reports are prepared for users with a reasonable knowledge of business who review the information diligently."]
      ]},
    {t:"p", html:"Enhancing characteristics should be maximized to the extent possible, but applying them is an iterative process that follows no prescribed order. Sometimes one must be diminished to maximize another - applying a new standard prospectively may reduce comparability in the short term in order to improve relevance in the longer term."},
    {t:"note", html:"<b>Prudence returns - note precisely what it now means.</b> Prudence was removed in 2010 as inconsistent with neutrality. The 2018 revision reinstates it, recast: prudence is <b>the exercise of caution when making judgments under conditions of uncertainty</b>, and it <b>supports</b> neutrality rather than conflicting with it. Crucially, prudence <b>does not permit</b> the deliberate understatement of assets or income, or the deliberate overstatement of liabilities or expenses. Deliberate misstatement in either direction is not prudence - it is bias, and it breaches neutrality."},
    {t:"h", html:"The cost constraint"},
    {t:"p", html:"Cost is a <b>pervasive constraint</b> on the information financial reporting can provide. Reporting imposes costs on preparers, and those costs are ultimately borne by users through reduced returns. The benefits of reporting particular information must justify the costs of providing and using it. In applying the constraint, the IASB assesses whether the benefits are likely to justify the costs <b>generally</b>, not for each individual entity."}
  ],
  check:{
    q:"Which statement about prudence under the revised Framework is correct?",
    choices:[
      "Prudence requires that assets and income be understated where outcomes are uncertain.",
      "Prudence is the exercise of caution under uncertainty and supports neutrality; it does not permit deliberate misstatement in either direction.",
      "Prudence remains excluded from the Framework because it conflicts with neutrality.",
      "Prudence permits the creation of hidden reserves where management judges this to protect creditors."
    ],
    answer:1,
    why:"The 2018 revision reinstated prudence but redefined its relationship with neutrality: it is caution in judgment under uncertainty, and it <i>supports</i> neutrality. Deliberately understating assets or income - or overstating liabilities or expenses - is bias, not prudence, and breaches neutrality. Hidden reserves and excessive provisions are precisely what it forbids."
  }
},
/* ============================ 6 ============================ */
{
  id: "ch3-reporting-entity",
  title: "Chapter 3 - Financial Statements and the Reporting Entity",
  blocks: [
    {t:"p", html:"Financial statements provide information about the economic resources of the reporting entity, the claims against it, and the changes in those resources and claims that meet the definitions of the elements. They are prepared <b>from the perspective of the entity as a whole</b>, not from the perspective of any particular group of investors or creditors."},
    {t:"h", html:"Complete set of financial statements (PAS 1)"},
    {t:"ol", items:[
      "A statement of financial position as at the end of the period.",
      "A statement of profit or loss and other comprehensive income for the period, presented either as a single statement or as two statements.",
      "A statement of changes in equity for the period.",
      "A statement of cash flows for the period.",
      "Notes, comprising material accounting policy information and other explanatory information.",
      "Comparative information in respect of the preceding period.",
      "A statement of financial position as at the beginning of the preceding period, where the entity applies an accounting policy retrospectively, makes a retrospective restatement, or reclassifies items."
    ]},
    {t:"h", html:"Reporting period, comparatives and going concern"},
    {t:"p", html:"Financial statements are prepared for a specified period and present comparative information for at least one preceding period. To help users identify and assess changes and trends, they also present information about transactions and events after the end of the period where such information is necessary to meet the objective."},
    {t:"p", html:"Financial statements are normally prepared on the assumption that the entity is a <b>going concern</b> and will continue in operation for the foreseeable future. If management intends or needs to liquidate the entity or cease trading, the statements must be prepared on a <b>different basis, and that basis must be described</b>."},
    {t:"h", html:"The reporting entity"},
    {t:"p", html:"This is a new chapter. A <b>reporting entity</b> is an entity that is required, or chooses, to prepare financial statements. It is <b>not necessarily a legal entity</b> - it may be a portion of an entity, or comprise more than one entity."},
    {t:"p", html:"Determining the appropriate <b>boundary</b> of a reporting entity can be difficult where it is not a legal entity. The boundary is driven by the information needs of the primary users and must produce a set of information that is neither arbitrary nor incomplete."},
    {t:"table",
      head:["Type","Reporting entity covered","Nature"],
      rows:[
        ["Consolidated","A parent together with its subsidiaries, reported as a single reporting entity.","Information about the assets, liabilities, equity, income and expenses of both parent and subsidiaries as one entity."],
        ["Unconsolidated","The parent alone.","Information about the parent's own items - not those of its subsidiaries."],
        ["Combined","Two or more entities <b>not</b> linked by a parent-subsidiary relationship.","Information about the reporting entity comprising those entities taken together."],
        ["Individual","A single entity.","The ordinary case for an entity with no subsidiaries."]
      ]}
  ],
  check:{
    q:"Two entities are under common ownership but neither controls the other. They prepare a single set of financial statements covering both. These are:",
    choices:[
      "Consolidated financial statements.",
      "Unconsolidated financial statements.",
      "Combined financial statements.",
      "Not permitted - a reporting entity must be a legal entity."
    ],
    answer:2,
    why:"<b>Combined</b> financial statements cover two or more entities that are <i>not</i> linked by a parent-subsidiary relationship. Consolidation presupposes control by a parent; unconsolidated statements cover the parent alone. And a reporting entity need not be a legal entity - that is the point Chapter 3 makes explicit."
  }
},
/* ============================ 7 ============================ */
{
  id: "ch4-elements",
  title: "Chapter 4 - The Elements of Financial Statements",
  blocks: [
    {t:"p", html:"The elements are the broad classes into which the effects of transactions and other events are grouped. Three relate to financial position; two to financial performance."},
    {t:"h", html:"Assets"},
    {t:"p", html:"An asset is <b>a present economic resource controlled by the entity as a result of past events</b>. An economic resource is <b>a right that has the potential to produce economic benefits</b>."},
    {t:"ol", items:[
      "<b>A right.</b> Rights may correspond to an obligation of another party - the right to receive cash, goods or services - or may not, such as the right to use physical objects or intellectual property. A right must be capable of producing benefits <i>beyond those available to all other parties</i>, otherwise it is not an asset of the entity.",
      "<b>Potential to produce economic benefits.</b> The right need not be certain, or even likely, to produce benefits. It is sufficient that the potential exists <b>in at least one circumstance</b>. This is a substantive change from the previous definition, which required an <i>expected</i> inflow.",
      "<b>Control.</b> Control links the resource to the entity: the present ability to direct the use of the resource and obtain the benefits that flow from it, including the ability to prevent others from directing its use. <b>Legal ownership is evidence of control but is not required.</b>"
    ]},
    {t:"h", html:"Liabilities"},
    {t:"p", html:"A liability is <b>a present obligation of the entity to transfer an economic resource as a result of past events</b>."},
    {t:"ol", items:[
      "<b>The entity has an obligation</b> - a duty or responsibility the entity has <b>no practical ability to avoid</b>. Obligations may be legally enforceable by contract or statute, or <b>constructive</b>, arising from customary practices, published policies or specific statements that create a valid expectation in other parties.",
      "<b>The obligation is to transfer an economic resource.</b> Again the transfer need not be certain or even likely; it is enough that at least one circumstance would require it.",
      "<b>It is a present obligation arising from past events.</b> The entity must already have obtained economic benefits or taken an action, and as a consequence will or may have to transfer a resource it would not otherwise have had to transfer."
    ]},
    {t:"note", html:"The <b>'no practical ability to avoid'</b> test carries real weight. If an entity could avoid a future transfer only by liquidating or ceasing operations, it has <b>no</b> practical ability to avoid it, and the obligation exists."},
    {t:"h", html:"Equity, income and expenses"},
    {t:"p", html:"<b>Equity</b> is the residual interest in the assets of the entity after deducting all its liabilities. Equity is not measured directly; it is a <i>derived</i> amount, a consequence of how assets and liabilities are recognized and measured."},
    {t:"p", html:"<b>Income</b> - increases in assets, or decreases in liabilities, that result in increases in equity, other than those relating to contributions from holders of equity claims.<br><b>Expenses</b> - decreases in assets, or increases in liabilities, that result in decreases in equity, other than those relating to distributions to holders of equity claims."},
    {t:"note", html:"Note the structure: income and expenses are defined <b>by reference to changes in assets and liabilities</b>. This is the <b>asset-liability approach</b>. In case of doubt about whether income exists, the analysis begins with whether an asset has increased or a liability decreased - not with whether the earnings process <i>feels</i> complete."},
    {t:"table",
      head:["Element","Previous definition (2010 and earlier)","Revised definition (2018)","Effect of the change"],
      rows:[
        ["Asset","A resource controlled by the entity as a result of past events and from which future economic benefits are <b>expected to flow</b>.","A present economic resource controlled by the entity as a result of past events. An economic resource is a right that has the <b>potential</b> to produce economic benefits.","The asset is now the <i>right itself</i>, not the inflow. 'Expected to flow' is deleted, so probability is no longer embedded in the definition."],
        ["Liability","A present obligation arising from past events, the settlement of which is <b>expected to result</b> in an outflow of resources.","A present obligation of the entity to transfer an economic resource as a result of past events.","'Expected outflow' is deleted. The <b>no practical ability to avoid</b> criterion is introduced to identify an obligation."],
        ["Equity","The residual interest in the assets after deducting all liabilities.","Unchanged.","No change."],
        ["Income","Increases in economic benefits in the form of inflows or enhancements of assets or decreases of liabilities.","Increases in assets, or decreases in liabilities, that result in increases in equity, other than contributions from equity holders.","Aligned to the asset-liability approach and the revised element definitions."],
        ["Expenses","Decreases in economic benefits in the form of outflows or depletions of assets, or incurrences of liabilities.","Decreases in assets, or increases in liabilities, that result in decreases in equity, other than distributions to equity holders.","As above."]
      ]},
    {t:"h", html:"Unit of account and executory contracts"},
    {t:"p", html:"The <b>unit of account</b> is the right, group of rights, obligation, group of obligations, or group of rights and obligations to which recognition criteria and measurement concepts are applied. It is selected to provide useful information, weighed against cost. It may be a single item, or a group treated as one - a portfolio of similar receivables, for instance."},
    {t:"p", html:"An <b>executory contract</b> is a contract, or portion of one, that is equally unperformed - neither party has fulfilled any obligation, or both have fulfilled partially and to an equal extent. It establishes a <b>combined right and obligation</b> to exchange economic resources, which are interdependent and constitute a <b>single</b> asset or liability. The entity has an asset if the terms of the exchange are favourable, and a liability if they are unfavourable."}
  ],
  check:{
    q:"An entity holds a lottery ticket with a one-in-ten-million chance of paying out. Under the revised definition, does it hold an asset?",
    choices:[
      "No - the probability of an inflow of economic benefits is not high enough.",
      "No - a lottery ticket is not a right recognized in law.",
      "Yes - it is a present right, controlled as a result of a past event, with the potential to produce economic benefits in at least one circumstance.",
      "Yes, but only if the ticket can be sold to a third party."
    ],
    answer:2,
    why:"The revised definition deleted 'expected to flow'. The asset is the <i>right</i> itself; the right need only have the <b>potential</b> to produce economic benefits in at least one circumstance, however unlikely. So the ticket meets the definition of an asset. Whether it is <b>recognized</b> - and at what amount - is a separate Chapter 5 and 6 question, where low probability does bear on usefulness."
  }
},
/* ============================ 8 ============================ */
{
  id: "ch5-recognition",
  title: "Chapter 5 - Recognition and Derecognition",
  blocks: [
    {t:"p", html:"<b>Recognition</b> is the process of capturing, for inclusion in the statement of financial position or the statement of financial performance, an item that meets the definition of one of the elements. It involves depicting the item in words and by a monetary amount, and including that amount in the totals of the statement concerned."},
    {t:"p", html:"Recognition of an item requires that:"},
    {t:"ol", items:[
      "The item meets the definition of an asset, a liability, equity, income or expenses; <b>and</b>",
      "Recognizing it provides users with <b>useful information</b> - that is, <b>relevant</b> information about the item, and a <b>faithful representation</b> of it."
    ]},
    {t:"p", html:"Recognition is also subject to the <b>cost constraint</b>: the benefits of the information provided by recognizing an item must justify the cost of providing it."},
    {t:"note", html:"<b>The most important change in Chapter 5.</b> The previous Framework imposed two recognition thresholds - that it was <i>probable</i> that future economic benefits would flow, and that the item had a cost or value that could be <i>measured reliably</i>. <b>Both have been removed as recognition criteria</b>, replaced by the qualitative characteristics themselves. The practical effect: recognition is now a <b>judgment about information usefulness</b>, not the mechanical application of a probability threshold."},
    {t:"h", html:"When recognition may not provide useful information"},
    {t:"ul", items:[
      "<b>Existence uncertainty.</b> It is uncertain whether an asset or liability exists at all - for example, a disputed claim in litigation whose outcome will determine whether a right exists.",
      "<b>Low probability of an inflow or outflow.</b> The asset or liability exists, but the probability that benefits will flow is low. Recognition may still be appropriate depending on the circumstances, particularly where the item is measured at fair value.",
      "<b>High measurement uncertainty.</b> The only available measure is so uncertain that the resulting information would not be a faithful representation."
    ]},
    {t:"p", html:"In these cases the most useful treatment may be <b>disclosure rather than recognition</b>."},
    {t:"h", html:"Derecognition"},
    {t:"p", html:"<b>Derecognition</b> is the removal of all or part of a recognized asset or liability from the statement of financial position. It normally occurs when the item no longer meets the definition of an element:"},
    {t:"ul", items:[
      "For an <b>asset</b> - when the entity <b>loses control</b> of all or part of the recognized asset.",
      "For a <b>liability</b> - when the entity <b>no longer has a present obligation</b> for all or part of the recognized liability."
    ]},
    {t:"p", html:"On derecognition the accounting must faithfully represent <b>both</b> the assets and liabilities retained after the transaction, if any, <b>and</b> the change in the entity's assets and liabilities as a result of the transaction. Difficulty arises where the entity transfers part of an item but retains an interest in it; in such cases presentation and disclosure may be needed to depict the transaction faithfully."}
  ],
  check:{
    q:"An entity sells a receivables portfolio to a bank but must repurchase any receivable more than 90 days past due; historically 22% reach that status. It derecognizes the entire portfolio and recognizes a gain. The problem is that:",
    choices:[
      "Derecognition is never permitted for financial assets under the Framework.",
      "The entity has not lost control of the portfolio in full - the retained repurchase obligation means full derecognition does not faithfully represent what was retained.",
      "The gain fails the probability threshold for recognition of income.",
      "Receivables cannot be derecognized until legally extinguished."
    ],
    answer:1,
    why:"Derecognition of an asset requires loss of control. Here the entity has transferred part of the portfolio's benefits but retained a substantive repurchase obligation, so it retains exposure. The accounting must faithfully represent <i>both</i> what was retained and what changed - full derecognition plus a gain does neither. Note the distractor: probability thresholds were <b>removed</b> as recognition criteria in 2018."
  }
},
/* ============================ 9 ============================ */
{
  id: "ch6-measurement",
  title: "Chapter 6 - Measurement",
  blocks: [
    {t:"p", html:"Measurement is the process of quantifying, in monetary terms, the elements recognized in the financial statements. <b>This chapter is entirely new</b>; the previous Framework merely listed measurement bases without analyzing them."},
    {t:"h", html:"Historical cost"},
    {t:"p", html:"Historical cost provides information derived, at least in part, from the price of the transaction or other event that gave rise to the item. It does not reflect changes in prices, but it is updated over time for consumption, impairment, and the collection or fulfilment of the item."},
    {t:"h", html:"Current value"},
    {t:"table",
      head:["Basis","Definition","Perspective","Nature"],
      rows:[
        ["Fair value","The price that would be received to sell an asset, or paid to transfer a liability, in an orderly transaction between market participants at the measurement date.","Market participant assumptions. <b>Not entity-specific.</b>","An <b>exit price</b>. Not adjusted for transaction costs on disposal."],
        ["Value in use (assets)<br>Fulfilment value (liabilities)","<b>Value in use:</b> the present value of the cash flows the entity expects to derive from continuing use of an asset and from its ultimate disposal.<br><b>Fulfilment value:</b> the present value of the cash the entity expects to be obliged to transfer as it fulfils a liability.","<b>Entity-specific.</b> Reflects the entity's own expectations, not those of market participants.","An <b>exit value</b> based on entity-specific assumptions. <i>Includes</i> the present value of transaction costs on disposal or fulfilment."],
        ["Current cost","The cost of an equivalent asset at the measurement date - the consideration that would be paid plus transaction costs; or the consideration that would be received for an equivalent liability, less transaction costs.","Market-based, but reflects the entity's own acquisition or issue market.","An <b>entry price</b>, in contrast to fair value and value in use, which are exit values."]
      ]},
    {t:"note", html:"<b>Correction to basic accounting.</b> Introductory courses present the 'historical cost principle' as a governing principle of accounting. That is a fair description of traditional bookkeeping practice, but it is <b>not</b> what the revised Framework says. The Framework identifies two <i>categories</i> of measurement basis - historical cost and current value - and <b>designates neither as the default</b>. Which basis applies is determined by the individual standard governing the item; the Framework supplies the factors the IASB weighs in choosing. Several PFRSs require or permit current value: PFRS 9 for many financial instruments, PAS 40 for investment property, PAS 41 for biological assets, PAS 16 under the revaluation model."},
    {t:"h", html:"Selecting a measurement basis"},
    {t:"p", html:"The basis is selected by reference to the <b>qualitative characteristics</b> and the <b>cost constraint</b>, considering the nature of the information the basis produces in the statement of financial position <i>and</i> in the statement of financial performance. Relevant factors include the <b>characteristics of the asset or liability</b> - how sensitive its value is to market factors - and <b>how it contributes to future cash flows</b>, which depends on the nature of the entity's business activities. Where an asset produces cash flows directly, such as a trading portfolio, current value is generally more relevant; where it is used in combination with other resources to produce goods or services, historical cost is generally more relevant."}
  ],
  check:{
    q:"Which measurement basis is an ENTRY price?",
    choices:["Fair value","Value in use","Current cost","Fulfilment value"],
    answer:2,
    why:"<b>Current cost</b> is the cost of acquiring an equivalent asset at the measurement date - the entity's own acquisition market - and so is an <b>entry price</b>. Fair value, value in use and fulfilment value are all <b>exit</b> values. Note the further distinction: fair value uses market participant assumptions, while value in use and fulfilment value are entity-specific and include transaction costs."
  }
},
/* ============================ 10 ============================ */
{
  id: "ch7-presentation",
  title: "Chapter 7 - Presentation and Disclosure",
  blocks: [
    {t:"p", html:"This chapter is also new. It treats presentation and disclosure as <b>communication tools</b> rather than as a residual compliance exercise, and requires a balance between allowing entities flexibility to provide relevant information and requiring information comparable across entities and periods."},
    {t:"h", html:"Objectives of effective communication"},
    {t:"ul", items:[
      "Focusing on presentation and disclosure <b>objectives and principles</b> rather than on rules.",
      "<b>Classifying</b> information so that similar items are grouped and dissimilar items separated.",
      "<b>Aggregating</b> information so that it is obscured neither by excessive detail nor by excessive summarization."
    ]},
    {t:"h", html:"Classification"},
    {t:"p", html:"Classification is the sorting of assets, liabilities, equity, income and expenses on the basis of shared characteristics - nature, role within the business activity, or how they are measured. Classifying dissimilar items together can obscure relevant information, reduce understandability and comparability, and fail to provide a faithful representation."},
    {t:"note", html:"<b>Offsetting</b> occurs when an entity recognizes and measures an asset and a liability as <i>separate units of account</i> but groups them into a single net amount. Offsetting classifies dissimilar items together and is therefore <b>generally not appropriate</b>."},
    {t:"h", html:"Aggregation"},
    {t:"p", html:"Aggregation is the adding together of items that have shared characteristics and are included in the same classification. It makes information more useful by summarizing a large volume of detail, but it conceals some of that detail. A balance must be struck so that relevant information is obscured neither by unnecessary detail nor by excessive summarization."},
    {t:"h", html:"Profit or loss and other comprehensive income"},
    {t:"p", html:"The statement of profit or loss is the <b>primary source</b> of information about an entity's financial performance for the period. The Framework establishes a <b>presumption that all income and expenses are included in profit or loss</b>."},
    {t:"p", html:"In <b>exceptional</b> circumstances the IASB may decide to include income or expenses arising from a change in the <i>current value</i> of an asset or liability in <b>other comprehensive income</b>, where doing so results in the statement of profit or loss providing more relevant information or a more faithful representation."},
    {t:"p", html:"<b>Recycling.</b> In principle, income and expenses included in OCI in one period are reclassified into profit or loss in a future period when doing so results in profit or loss providing more relevant information or a more faithful representation. Where the IASB concludes there is no clear basis for identifying the period in which reclassification would have that effect, it may decide that the amounts are <b>not</b> to be subsequently reclassified."},
    {t:"note", html:"Chapter 7 supplies <b>concepts only</b>. The operating requirements that give effect to them - the structure of a complete set of financial statements and the notes under PAS 1, related party disclosures under PAS 24, events after the reporting period under PAS 10, and contingencies under PAS 37 - belong to the presentation and disclosure standards."}
  ],
  check:{
    q:"Under the Framework, the treatment of income and expenses in other comprehensive income is best described as:",
    choices:[
      "The default, with profit or loss reserved for realized amounts.",
      "An exception to a presumption that all income and expenses are included in profit or loss.",
      "A free policy choice available to every entity.",
      "Prohibited unless the amounts will later be recycled to profit or loss."
    ],
    answer:1,
    why:"The Framework presumes <b>all</b> income and expenses go to profit or loss, which is the primary source of information about performance. OCI is exceptional: the IASB may direct it only for changes in the <i>current value</i> of an asset or liability, and only where that makes profit or loss more relevant or more faithful. Recycling is the principle, but the IASB may decide amounts are never reclassified where no clear basis for a period exists."
  }
},
/* ============================ 11 ============================ */
{
  id: "ch8-capital",
  title: "Chapter 8 - Concepts of Capital and Capital Maintenance",
  blocks: [
    {t:"p", html:"This chapter was carried forward substantially unchanged from the 1989 Framework. It addresses a question that <i>precedes</i> the measurement of profit: <b>what must be preserved before a return can be said to have been earned?</b>"},
    {t:"table",
      head:["","Financial capital maintenance","Physical capital maintenance"],
      rows:[
        ["<b>Concept of capital</b>","Capital is the invested money or invested purchasing power - synonymous with the net assets or equity of the entity.","Capital is the <b>productive capacity</b> of the entity, based for example on units of output per day."],
        ["<b>When profit is earned</b>","Only if the <i>financial</i> amount of net assets at the end of the period exceeds the amount at the beginning, after excluding distributions to and contributions from owners.","Only if the <i>physical productive capacity</i> at the end of the period exceeds that at the beginning, after excluding distributions to and contributions from owners."],
        ["<b>Measurement unit</b>","May be measured in <b>nominal monetary units</b> or in <b>units of constant purchasing power</b>.","Requires the <b>current cost</b> basis of measurement."],
        ["<b>Treatment of price changes</b>","Under <i>nominal monetary units</i>, increases in the prices of assets held during the period are <b>holding gains</b> and form part of profit, though they may not be recognized until disposal. Under <i>constant purchasing power</i>, only the increase <b>in excess of general price inflation</b> is profit; the remainder is a capital maintenance adjustment within equity.","<b>All</b> price changes affecting assets and liabilities are viewed as changes in the measurement of physical productive capacity. They are treated as <b>capital maintenance adjustments forming part of equity</b>, not as profit."]
      ]},
    {t:"p", html:"The principal difference between the two concepts is the <b>treatment of the effects of changes in the prices</b> of the entity's assets and liabilities. The Framework <b>does not prescribe</b> a concept; the selection should be based on the needs of the users of the financial statements. In practice, most entities adopt the financial concept of capital measured in <b>nominal monetary units</b>."},
    {t:"h", html:"The chain of reasoning, end to end"},
    {t:"p", html:"Financial reporting exists to serve investors, lenders and other creditors in making resource allocation and stewardship decisions <b>(Ch. 1)</b>. To serve them, information must be relevant and faithfully represented, ideally comparable, verifiable, timely and understandable, subject to cost <b>(Ch. 2)</b>. That information is reported by a defined reporting entity for a defined period <b>(Ch. 3)</b>, organized into five elements whose definitions turn on rights, control and obligations rather than expected flows <b>(Ch. 4)</b>. An element enters the statements when recognition yields useful information <b>(Ch. 5)</b>, is carried at a measurement basis selected for relevance and representational faithfulness <b>(Ch. 6)</b>, and is presented and disclosed so as to communicate rather than merely comply <b>(Ch. 7)</b>. Profit is then determined against a chosen concept of capital <b>(Ch. 8)</b>."}
  ],
  check:{
    q:"During the year, general prices rose 6% and the replacement cost of the entity's inventory rose 11%. Under the PHYSICAL concept of capital maintenance, how is the inventory holding gain treated?",
    choices:[
      "Entirely as profit, because the increase exceeds general inflation.",
      "The excess over 6% is profit; the rest is a capital maintenance adjustment in equity.",
      "Entirely as a capital maintenance adjustment forming part of equity, not as profit.",
      "Deferred until the inventory is sold, then recognized in profit or loss."
    ],
    answer:2,
    why:"Under the <b>physical</b> concept, all price changes affecting the entity's assets and liabilities are treated as changes in the measurement of productive capacity, so the entire holding gain is a capital maintenance adjustment within equity. Splitting at general inflation is the <b>financial</b> concept measured in <i>units of constant purchasing power</i>. Treating it all as profit is the financial concept in <i>nominal monetary units</i> - the practice most entities actually adopt."
  }
}
],

/* ============================ FLASHCARDS ============================ */
flashcards: [
  {f:"What is the status of the Conceptual Framework relative to a PFRS?", b:"It is <b>not a standard</b> and does not override any PFRS. Where the two conflict, <b>the PFRS prevails</b>. Deliberate departures are explained in the standard's Basis for Conclusions."},
  {f:"What are the three purposes of the Conceptual Framework?", b:"(1) Assist the IASB/FRSC in <b>developing standards</b>; (2) assist <b>preparers</b> in developing accounting policy where no standard applies or a choice is permitted; (3) assist all parties in <b>understanding and interpreting</b> standards."},
  {f:"State the objective of general-purpose financial reporting.", b:"To provide financial information about the reporting entity that is <b>useful to existing and potential investors, lenders and other creditors</b> in making decisions relating to providing resources to the entity."},
  {f:"Who are the primary users, and why are management and regulators excluded?", b:"Primary users: <b>existing and potential investors, lenders and other creditors</b> - they cannot compel the entity to give them information. <b>Management</b> obtains information internally; <b>regulators</b> can demand it by statute."},
  {f:"What two categories of decision does financial reporting support?", b:"<b>Resource allocation</b> (buy/sell/hold instruments; provide or settle credit) and <b>stewardship</b> (assessing how efficiently and effectively management used the entity's resources). The 2018 revision raised stewardship's prominence."},
  {f:"Name four limitations of general-purpose financial reports.", b:"They (1) do not provide all information users need; (2) are <b>not designed to show the value</b> of the entity; (3) meet common - not individual - needs; (4) rest largely on <b>estimates, judgments and models</b>."},
  {f:"What are the two FUNDAMENTAL qualitative characteristics?", b:"<b>Relevance</b> and <b>faithful representation</b>. Information must have both to be useful at all."},
  {f:"What gives information relevance?", b:"<b>Predictive value</b>, <b>confirmatory value</b>, or both. <b>Materiality</b> is the <i>entity-specific</i> aspect of relevance - no uniform quantitative threshold is specified."},
  {f:"What are the three components of faithful representation?", b:"<b>Complete</b>, <b>neutral</b>, and <b>free from error</b>. <i>Substance over form</i> is not separate - it is a component of faithful representation."},
  {f:"What are the four ENHANCING qualitative characteristics?", b:"<b>Comparability, verifiability, timeliness, understandability.</b> They cannot make useless information useful, nor compensate for a missing fundamental characteristic."},
  {f:"Distinguish comparability from uniformity; where does consistency fit?", b:"Comparability means like things look alike and <b>unlike things look different</b> - it is not uniformity. <b>Consistency</b> (same methods period to period) is a <i>means</i> of achieving comparability, not the goal."},
  {f:"Direct versus indirect verification?", b:"<b>Direct</b> - observing the amount itself (counting cash). <b>Indirect</b> - checking a model's inputs and recalculating the output (recomputing ending inventory from quantities and costs)."},
  {f:"What does prudence mean under the revised Framework, and what does it NOT permit?", b:"The <b>exercise of caution under uncertainty</b>; it <b>supports</b> neutrality. It does <b>not</b> permit deliberate understatement of assets/income or overstatement of liabilities/expenses - that is bias, and it breaches neutrality."},
  {f:"What is the cost constraint?", b:"A <b>pervasive constraint</b>: the benefits of reporting information must justify the costs of providing and using it. The IASB assesses this <b>generally</b>, not entity by entity."},
  {f:"Define a reporting entity. Must it be a legal entity?", b:"An entity required, or choosing, to prepare financial statements. It <b>need not be a legal entity</b> - it may be a portion of an entity or comprise more than one. Its boundary is driven by primary users' information needs."},
  {f:"Distinguish consolidated, unconsolidated and combined financial statements.", b:"<b>Consolidated</b> - parent plus subsidiaries as one entity. <b>Unconsolidated</b> - the parent alone. <b>Combined</b> - two or more entities <b>not</b> linked by a parent-subsidiary relationship."},
  {f:"State the revised definition of an asset and its three components.", b:"A <b>present economic resource controlled</b> by the entity <b>as a result of past events</b>; an economic resource is a <b>right with the potential to produce economic benefits</b>. Components: a <b>right</b>; <b>potential</b> to produce benefits (in at least one circumstance); <b>control</b>."},
  {f:"State the revised definition of a liability and its three criteria.", b:"A <b>present obligation to transfer an economic resource as a result of past events</b>. Criteria: an <b>obligation</b> the entity has <b>no practical ability to avoid</b>; the obligation is <b>to transfer an economic resource</b>; it is a <b>present</b> obligation arising from <b>past events</b>."},
  {f:"What is the single most important change to the element definitions in 2018?", b:"The word <b>'expected'</b> was deleted from both. Probability moved <i>out</i> of the definitions - an item can be an asset or liability even where benefits are unlikely. The asset is the <b>right itself</b>, not the inflow."},
  {f:"What does 'no practical ability to avoid' mean?", b:"If the entity could avoid a future transfer <b>only by liquidating or ceasing operations</b>, it has <b>no</b> practical ability to avoid it - so the obligation exists."},
  {f:"Define income and expenses. What approach does their structure reflect?", b:"<b>Income</b> - increases in assets or decreases in liabilities that increase equity, other than contributions from equity holders. <b>Expenses</b> - the mirror, other than distributions. This is the <b>asset-liability approach</b>."},
  {f:"What is an executory contract, and when is it an asset or a liability?", b:"A contract equally unperformed by both parties. It creates a <b>combined, interdependent right and obligation</b> - a <b>single</b> asset or liability. An <b>asset</b> if the exchange terms are favourable; a <b>liability</b> if unfavourable."},
  {f:"What are the recognition criteria under the revised Framework?", b:"(1) The item meets the <b>definition</b> of an element; and (2) recognition provides <b>useful information</b> - relevant, and a faithful representation. Subject also to the <b>cost constraint</b>."},
  {f:"Which two old recognition thresholds were REMOVED in 2018?", b:"(1) <b>Probable</b> inflow/outflow of economic benefits, and (2) <b>reliable measurement</b>. Both were replaced by the qualitative characteristics - recognition is now a judgment about usefulness, not a threshold test."},
  {f:"When may recognition fail to provide useful information?", b:"<b>Existence uncertainty</b>; <b>low probability</b> of an inflow or outflow; <b>high measurement uncertainty</b>. In such cases <b>disclosure</b> may be more useful than recognition."},
  {f:"When is an asset derecognized? A liability?", b:"An <b>asset</b> - when the entity <b>loses control</b> of all or part of it. A <b>liability</b> - when the entity <b>no longer has a present obligation</b> for all or part of it."},
  {f:"Name the four measurement bases and classify each as entry or exit price.", b:"<b>Historical cost</b> (transaction-derived); <b>fair value</b> (exit); <b>value in use / fulfilment value</b> (exit, entity-specific); <b>current cost</b> - the only <b>entry</b> price."},
  {f:"Fair value versus value in use - what is the key difference in perspective?", b:"<b>Fair value</b> uses <b>market participant</b> assumptions and excludes disposal transaction costs. <b>Value in use</b> is <b>entity-specific</b> - the entity's own expectations - and <b>includes</b> the PV of transaction costs on disposal."},
  {f:"Does the Framework designate historical cost as the default measurement basis?", b:"<b>No.</b> It identifies two categories - historical cost and current value - and designates neither as the default. The individual standard governing the item determines the basis (e.g. PFRS 9, PAS 40, PAS 41, PAS 16 revaluation model)."},
  {f:"Why is offsetting generally not appropriate?", b:"Offsetting groups an asset and a liability that are <b>separate units of account</b> into one net amount, thereby classifying <b>dissimilar items together</b> - obscuring relevant information and impairing faithful representation."},
  {f:"What is the Framework's presumption about profit or loss and OCI?", b:"A presumption that <b>all</b> income and expenses go to <b>profit or loss</b>, the primary source of information about performance. OCI is <b>exceptional</b> - only for changes in the <b>current value</b> of an asset or liability, where the IASB so decides."},
  {f:"What is recycling, and when might amounts never be recycled?", b:"Reclassifying OCI amounts into profit or loss in a later period when that makes P&amp;L more relevant or more faithful. Where the IASB finds <b>no clear basis</b> for identifying that period, it may decide the amounts are <b>never reclassified</b>."},
  {f:"Financial versus physical capital maintenance - what is capital in each?", b:"<b>Financial</b> - invested money or purchasing power; synonymous with <b>net assets/equity</b>. <b>Physical</b> - the entity's <b>productive capacity</b> (e.g. units of output per day)."},
  {f:"How are holding gains treated under each capital maintenance concept?", b:"<b>Financial, nominal units</b> - the whole gain is <b>profit</b>. <b>Financial, constant purchasing power</b> - only the excess over <b>general inflation</b> is profit; the rest is a capital maintenance adjustment in equity. <b>Physical</b> - the <b>whole</b> gain is a capital maintenance adjustment in equity."},
  {f:"Which measurement basis does physical capital maintenance require?", b:"<b>Current cost.</b> The Framework does not prescribe a capital concept; most entities in practice use the <b>financial concept in nominal monetary units</b>."},
  {f:"Why is total equity not generally equal to market capitalization?", b:"Equity is a <b>residual</b> - a derived amount that falls out of how assets and liabilities are recognized and measured. Financial statements are <b>not designed to show the value of the entity</b>; unrecognized items (e.g. internally generated goodwill) and different measurement bases drive the gap."}
],

/* ============================ QUIZ ============================ */
quiz: [
  {q:"Where the Conceptual Framework conflicts with a requirement of a specific PFRS, which prevails?",
   c:["The Conceptual Framework","The specific PFRS","Whichever gives more relevant information","The FRSC must decide"],
   a:1, why:"The Framework is not a standard and overrides nothing. The PFRS prevails; deliberate departures are explained in the standard's Basis for Conclusions.", tos:"Purpose &amp; status"},

  {q:"Which of the following is NOT a primary user of general-purpose financial reports?",
   c:["A potential investor considering buying shares","A bank evaluating a loan application","The entity's chief financial officer","A trade supplier extending credit"],
   a:2, why:"Management is excluded because it can obtain whatever information it needs internally. Primary users are existing and potential investors, lenders and other creditors - parties who cannot compel the entity to provide information.", tos:"Ch.1 Objective"},

  {q:"Which statement about general-purpose financial reports is correct?",
   c:["They are designed to show the value of the reporting entity.","They provide all the information primary users need.","They are tailored to the needs of individual users.","They are based to a large extent on estimates, judgments and models."],
   a:3, why:"That is one of the four stated limitations. The reports do NOT show entity value (they help users estimate it), do not provide all needed information, and meet common rather than individual needs.", tos:"Ch.1 Objective"},

  {q:"Information that provides feedback confirming or changing a user's previous evaluation has:",
   c:["Predictive value","Confirmatory value","Verifiability","Comparability"],
   a:1, why:"Confirmatory value. Predictive value is the capacity to serve as an input to processes predicting future outcomes. Current-year revenue commonly has both.", tos:"Ch.2 Relevance"},

  {q:"Materiality is best described as:",
   c:["A uniform quantitative threshold set by the IASB","The entity-specific aspect of relevance","A component of faithful representation","An enhancing qualitative characteristic"],
   a:1, why:"Materiality is the entity-specific aspect of relevance. Because it depends on the nature or magnitude of an item in the context of a particular entity's report, the Framework specifies no uniform quantitative threshold.", tos:"Ch.2 Relevance"},

  {q:"Substance over form is treated by the revised Framework as:",
   c:["A separate qualitative characteristic","A component of faithful representation","An underlying assumption","An enhancing characteristic"],
   a:1, why:"It is not listed separately. Depicting a legal form that differs from economic substance could not be a faithful representation, so substance over form is subsumed within it.", tos:"Ch.2 Faithful representation"},

  {q:"Which statement about the enhancing qualitative characteristics is correct?",
   c:["They can make irrelevant information useful if applied rigorously.","They must be applied in a prescribed order.","One may be diminished to maximize another.","They are more important than faithful representation."],
   a:2, why:"Applying them is iterative and follows no prescribed order, and sometimes one is diminished to maximize another - e.g. prospective application of a new standard reduces comparability short-term to improve relevance long-term. They can never substitute for a missing fundamental characteristic.", tos:"Ch.2 Enhancing"},

  {q:"Under the revised Framework, prudence:",
   c:["Requires understating assets where outcomes are uncertain","Is the exercise of caution under uncertainty and supports neutrality","Was removed in 2018 as inconsistent with neutrality","Permits hidden reserves where creditors would benefit"],
   a:1, why:"Reinstated in 2018 and recast as caution in judgment under uncertainty, supporting neutrality. It forbids deliberate misstatement in EITHER direction - understating assets or income is bias, not prudence.", tos:"Ch.2 Enhancing"},

  {q:"An entity has no subsidiaries but is one of three companies under common ownership. Statements covering all three together are:",
   c:["Consolidated","Unconsolidated","Combined","Individual"],
   a:2, why:"Combined financial statements cover two or more entities NOT linked by a parent-subsidiary relationship. Consolidation presupposes control by a parent.", tos:"Ch.3 Reporting entity"},

  {q:"An entity intends to liquidate. Its financial statements must be:",
   c:["Prepared on the going concern basis with disclosure of the intention","Prepared on a different basis, and that basis described","Not prepared at all","Prepared on the going concern basis, with a note under PAS 10"],
   a:1, why:"Where management intends or needs to liquidate or cease trading, the going concern assumption does not hold; the statements must be prepared on a different basis and that basis must be described.", tos:"Ch.3 Financial statements"},

  {q:"An entity uses equipment exclusively and bears all its costs, but legal title is held by a shareholder. Under Chapter 4, the entity:",
   c:["Has no asset, because legal ownership is a condition of control","Has an asset, because control is the present ability to direct use and obtain benefits; legal ownership is evidence but not a requirement","Has an asset only if the shareholder signs a formal lease","Must disclose but not recognize the equipment"],
   a:1, why:"Control is the present ability to direct the use of the resource and obtain its benefits, including preventing others from directing it. Legal ownership is evidence of control, not a requirement. Excluding the item follows legal form over substance.", tos:"Ch.4 Elements"},

  {q:"An entity's published charter promises to replace defective goods for two years; its legal obligation is six months, and it has honoured the charter without exception for nine years. It should recognize a liability for:",
   c:["Six months only, being the legally enforceable period","Two years, because a constructive obligation has arisen that it has no practical ability to avoid","Nothing, because no legal obligation exists beyond six months","Two years, but only if the excess is material"],
   a:1, why:"Obligations may be constructive - arising from customary practice, published policy or specific statements creating a valid expectation in others. Nine years of consistent performance under a published charter leaves no practical ability to avoid the two-year commitment.", tos:"Ch.4 Elements"},

  {q:"A firm purchase contract is unperformed by both parties; the market price has risen above the contract price. Under the Framework, the entity:",
   c:["Recognizes a gain equal to the price difference","Holds a single asset arising from the combined right and obligation, because the exchange terms are favourable","Holds separate right and obligation assets and liabilities at gross amounts","Has no accountable event of any kind"],
   a:1, why:"An executory contract creates a combined and interdependent right and obligation constituting a SINGLE asset (favourable terms) or liability (unfavourable). It is not a basis for recognizing a gain simply because prices moved.", tos:"Ch.4 Elements"},

  {q:"Which pair of thresholds was REMOVED as recognition criteria in the 2018 revision?",
   c:["Relevance and faithful representation","Probability of benefits flowing, and reliable measurement","Existence uncertainty and the cost constraint","Control and past events"],
   a:1, why:"Both the 'probable inflow/outflow' and 'reliable measurement' thresholds were removed and replaced by the qualitative characteristics. Recognition became a judgment about information usefulness rather than a mechanical threshold test.", tos:"Ch.5 Recognition"},

  {q:"An entity is a defendant in litigation; whether a present obligation exists turns on how a court construes a contract clause, and the outcome is genuinely uncertain. This illustrates:",
   c:["Low probability of an outflow","High measurement uncertainty","Existence uncertainty","Failure of the cost constraint"],
   a:2, why:"Existence uncertainty - it is uncertain whether the liability exists at all. Recognition may not provide useful information, and disclosure may be the more useful treatment. Note that disclosing nothing at all is also wrong.", tos:"Ch.5 Recognition"},

  {q:"Which measurement basis is an ENTRY price?",
   c:["Fair value","Current cost","Value in use","Fulfilment value"],
   a:1, why:"Current cost is the cost of an equivalent asset in the entity's own acquisition market - an entry price. Fair value, value in use and fulfilment value are all exit values.", tos:"Ch.6 Measurement"},

  {q:"Which measurement basis is entity-specific and includes the present value of transaction costs on disposal?",
   c:["Fair value","Current cost","Value in use","Historical cost"],
   a:2, why:"Value in use reflects the entity's OWN expectations of cash flows from continuing use and ultimate disposal, and includes the PV of disposal transaction costs. Fair value uses market participant assumptions and excludes them.", tos:"Ch.6 Measurement"},

  {q:"An entity holds listed equities acquired for short-term trading and proposes to carry them at original cost because cost is more verifiable. The best objection is that:",
   c:["Verifiability is not a qualitative characteristic","Historical cost is prohibited for all financial assets by the Framework","Where an asset produces cash flows directly, current value is generally more relevant, and verifiability cannot compensate for lost relevance","The Framework designates fair value as the default measurement basis"],
   a:2, why:"Measurement basis selection turns on the asset's characteristics and how it contributes to cash flows. A trading portfolio produces cash flows directly, so current value is generally more relevant. Verifiability is only an ENHANCING characteristic and cannot compensate for a deficiency in relevance.", tos:"Ch.6 Measurement"},

  {q:"Offsetting an asset against a liability that are separate units of account is generally inappropriate because it:",
   c:["Always understates total assets and is therefore imprudent","Classifies dissimilar items together, obscuring relevant information","Breaches the going concern assumption","Is prohibited outright by Chapter 7 in all cases"],
   a:1, why:"Offsetting groups dissimilar items into one net amount, which impairs understandability, comparability and faithful representation. The Framework says it is 'generally' not appropriate rather than absolutely prohibited.", tos:"Ch.7 Presentation"},

  {q:"General prices rose 6%; the replacement cost of inventory rose 11%. Under the FINANCIAL concept measured in units of constant purchasing power, the holding gain is:",
   c:["Entirely profit","Entirely a capital maintenance adjustment in equity","Profit only to the extent it exceeds general inflation; the remainder is a capital maintenance adjustment in equity","Deferred until the inventory is sold"],
   a:2, why:"Constant purchasing power treats the inflation-equivalent portion as capital maintenance and only the excess as profit. Entirely profit would be nominal monetary units; entirely equity would be the physical concept.", tos:"Ch.8 Capital maintenance"}
]
});
