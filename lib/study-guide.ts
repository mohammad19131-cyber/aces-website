export type StudyGuideCategory = {
  id: string;
  name: string;
  tagline: string;
  type: "entrepreneurship" | "creative" | "finance" | "strategy";
  img: string;
  overview: string;
  details: string;
};

export const studyGuideTypes = [
  { id: "all", label: "All" },
  { id: "entrepreneurship", label: "Entrepreneurship" },
  { id: "finance", label: "Finance" },
  { id: "strategy", label: "Strategy" },
  { id: "creative", label: "Creative" },
] as const;

export const studyGuideData: StudyGuideCategory[] = [
  {
    id: "byoi",
    name: "Build Your Own Idea",
    tagline: "Product Creation & Business Thinking",
    type: "entrepreneurship",
    img: "/XIII Vectors/BYOI raw.png",
    overview:
      "This category involves delegates coming up with their own business ideas that they will pitch to investors. As they battle for investment into their business idea, teams are expected to create a well thought out business idea, as well as conduct appropriate research in order to give a skeleton to their raw idea.",
    details:
      "Build Your Own Idea combines creative product development with business knowledge. Teams manage limited resources, develop a product from their available materials, build a coherent business concept, and defend the idea through presentation and questioning.",
  },
  {
    id: "ad",
    name: "Ad Making",
    tagline: "Advertising & Creative Strategy",
    type: "creative",
    img: "/XIII Vectors/AD raw.png",
    overview:
      "Media has become an important aspect of our lives, and it is utilized by all multinational corporations. In this category, delegates will be required to create an ad and set up stalls for allotted companies, allowing them to show their mettle and prowess in the fields of creativity, cinematography, and editing.",
    details:
      "Ad Making tests creativity, marketing insight, storytelling, cinematography, editing, and the ability to defend advertising decisions under pressure.",
  },
  {
    id: "investomania",
    name: "Investomania",
    tagline: "Interactive Stock Market Simulation",
    type: "finance",
    img: "/XIII Vectors/Investo raw.png",
    overview:
      "This category introduces the stock market to the delegates who will role-play as investors. Teams will use the money allotted to them to invest in the stock market throughout the event. There will be regular updates to the stock market, and delegates are expected to invest accordingly.",
    details:
      "Investomania is an interactive stock market simulation. Teams manage an allocated budget, respond to market updates, buy and sell shares, and make strategic investment decisions across a fictional portfolio of companies. The winner is determined by the value of the team's capital after the investment period.",
  },
  {
    id: "socio",
    name: "Social Entrepreneurship",
    tagline: "Business Solutions & Social Responsibility",
    type: "entrepreneurship",
    img: "/XIII Vectors/Socio raw.png",
    overview:
      "In this category, delegates will tackle social or environmental problems by developing a feasible business plan for a struggling business, that is environmentally friendly or socially beneficial whilst remaining profitable.",
    details:
      "Social Entrepreneurship challenges teams to identify a company's core problem, develop a feasible and profitable solution, and consider customers, employees, communities, environmental responsibility, ethics, and long-term social value.",
  },
  {
    id: "espionage",
    name: "Corporate Espionage",
    tagline: "Investigation & Corporate Intelligence",
    type: "strategy",
    img: "/XIII Vectors/Espionage raw.png",
    overview:
      "Corporate Espionage challenges teams to investigate a corporate incident, distinguish useful evidence from deliberate misdirection, identify suspects and motives, and build a coherent theory from fragmented information.",
    details:
      "Teams receive a confidential corporate case file containing company background, incident summaries, employee profiles, communications, security logs, and media leaks. They analyze evidence, build a timeline, identify prime suspects and motives, solve ciphers, interrogate witnesses, construct an evidence board, and present a coherent theory.",
  },
  {
    id: "ff",
    name: "Fiscal Frontier",
    tagline: "Finance & Accounting",
    type: "finance",
    img: "/XIII Vectors/FF raw.png",
    overview:
      "Fiscal Frontier tests delegates' understanding of accounting and finance through timed questions, numerical reasoning, and practical financial decision-making.",
    details:
      "Fiscal Frontier consists of timed questions covering liquidity, profit versus cash, cost classification, receivables, payables, financing decisions, financial ratios, working capital, costs, cash flow, financing, and pricing.",
  },
  {
    id: "wall",
    name: "Wall Street",
    tagline: "Interactive Investment Challenge",
    type: "finance",
    img: "/XIII Vectors/Mall raw.png",
    overview:
      "Every entrepreneur needs to be frugal, especially when they are handling a startup with little investment. This category will put the frugality of participants to the test, as they step into the shoes of a cash-strapped business.",
    details:
      "Mall Street tests financial judgment and frugality. Teams operate with limited resources and must make careful business decisions while balancing investment, spending, risk, and the needs of a cash-strapped company.",
  },
  {
    id: "rubicon",
    name: "Rubicon",
    tagline: "Business Negotiation & Strategic Decision-Making",
    type: "strategy",
    img: "/XIII Vectors/Rubicon raw.png",
    overview:
      "The category will test the economic prowess of the delegates taking part in it. The delegates shall be tested regarding various aspects of economics through quizzes, case studies, and economic crises.",
    details:
      "Rubicon tests economic knowledge and strategic decision-making through quizzes, case studies, economic scenarios, and crisis-based challenges. Teams must apply economic concepts quickly and defend their decisions under pressure.",
  },
  {
    id: "chess",
    name: "Chess",
    tagline: "Strategy & Business Acumen",
    type: "strategy",
    img: "/XIII Vectors/Chess raw.png",
    overview:
      "Chess combines strategic thinking, foresight, and composure with a business-focused rapid-fire challenge that tests knowledge and decision-making under pressure.",
    details:
      "Chess combines strategic thinking, foresight, composure, and business-focused rapid-fire decision-making. Delegates must think several moves ahead while applying knowledge quickly and accurately under pressure.",
  },
  {
    id: "muney",
    name: "MUNey",
    tagline: "CEO Diplomacy & Crisis Simulation",
    type: "finance",
    img: "/XIII Vectors/Muney raw.png",
    overview:
      "MUNey reimagines Model United Nations by placing delegates in the roles of global CEOs, combining traditional MUN procedure with corporate strategy, alliances, and crisis management.",
    details:
      "The flagship public speaking category of the Aitchison Business Concept will follow the rules and technicalities of a Model United Nations conference, where delegates will discuss solutions to the crises pertaining to the business that will be announced during the event. Delegates represent renowned CEOs rather than countries and combine diplomacy, corporate strategy, alliances, private directives, and crisis management.",
  },
  {
    id: "canvas",
    name: "Corporate Canvas",
    tagline: "Brand Identity & Visual Marketing",
    type: "creative",
    img: "/XIII Vectors/Canvas raw.png",
    overview:
      "The category will test a plethora of skills in the world of corporate espionage, ranging from quick thinking to the financial prowess. Based on a case study, delegates will be required to interrogate, arbitrate and come to conclusion.",
    details:
      "Corporate Canvas tests corporate strategy, visual branding, marketing consistency, and the ability to translate a brand identity into a convincing public-facing experience.",
  },
  {
    id: "tech",
    name: "Techeneurship",
    tagline: "Startup Creation, Expansion & Crisis Management",
    type: "entrepreneurship",
    img: "/XIII Vectors/Tech raw.png",
    overview:
      "Techeneurship challenges delegates to develop an innovative start-up, turn it into a viable business model, and defend its value under a high-pressure crisis.",
    details:
      "Techeneurship challenges delegates to develop an innovative start-up, turn it into a viable business model, present an investment-ready concept, and defend its value under a high-pressure crisis. The category emphasizes innovation, feasibility, pitching, risk mitigation, negotiation, and leadership.",
  },
  {
    id: "race",
    name: "The Amazing Race",
    tagline: "Scavenger Hunt & Problem Solving",
    type: "creative",
    img: "/XIII Vectors/Race raw.png",
    overview:
      "The Amazing Race is an interactive category designed to test delegates' thinking and detective skills through a simulated scavenger hunt.",
    details:
      "The competition is simulated as a scavenger hunt and is designed to test delegates' thinking skills alongside their detective skills.",
  },
  {
    id: "juris",
    name: "Jurisprudential",
    tagline: "Corporate Law & Courtroom Advocacy",
    type: "strategy",
    img: "/XIII Vectors/Juris raw.png",
    overview:
      "This category tests delegates' ability to understand legal issues in a corporate setting, propose practical legal corrections, and apply legal principles through structured argument and courtroom advocacy.",
    details:
      "The category combines corporate legal analysis with courtroom advocacy. Delegates work through legal issues and propose corrections before applying legal principles through structured arguments and cross-questioning in a moot-court setting.",
  },
];
