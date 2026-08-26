export const site = {
  shortName: "ABC XIV",
  fullName: "Aitchison Business Concept",
  edition: "XIV",
  editionLabel: "XIV Edition",
  host: "Aitchison College",
  organiser: "Aitchison College Entrepreneurial Society",
  /**
   * Countdown target. Update this when the official start time is confirmed.
   * Invite date: 8–9 January 2027.
   */
  eventStartISO: "2027-01-08T09:00:00+05:00",
  eventDateLabel: "8–9 January 2027",
  /**
   * Official registration link. Leave empty until the form URL is provided.
   * The navigation and CTA will then point to the Register section.
   */
  registrationUrl: "https://forms.gle/hwTgDKNLNuLbWNw2A",
};

export const registerHref = site.registrationUrl || "#register";

export const navLinks = [
  { href: "#society", label: "ACES", tab: "society" },
  { href: "#abc", label: "ABC", tab: "abc" },
  { href: "/our-team", label: "Our Team" },
  { href: "/abr", label: "ABR" },
  { href: "/study-guide", label: "Study Guide" },
  { href: "/recognition", label: "Recognition" },
  { href: "#response", label: "Suggestion", tab: "response" },
  { href: "/code-of-conduct", label: "Code of Conduct" },
  { href: "/waiver.pdf", label: "Liability Waiver" },
] as const;

export const aboutText =
  "The Aitchison Business Concept is organised by the Aitchison College Entrepreneurial Society. The fourteenth edition brings students together across fourteen categories to test entrepreneurial skill, judgement, and collaboration.";

export const eventFacts = [
  { label: "Date", value: site.eventDateLabel },
  { label: "Host", value: site.host },
  { label: "Organised by", value: site.organiser },
] as const;

export type CouncilMember = {
  name: string;
  role: string;
  image: string;
};

export const president: CouncilMember = {
  name: "Muhammad Bin Salman",
  role: "President",
  image: "/council/president.png",
};

export const generalSecretary: CouncilMember = {
  name: "Eqaan Ali Syed",
  role: "General Secretary",
  image: "/council/general-secretary.png",
};

export const executiveMembers: CouncilMember[] = [
  {
    name: "Ali Hussain",
    role: "Executive Member",
    image: "/council/ali-hussein.png",
  },
  {
    name: "Muahid Ahmad",
    role: "Executive Member",
    image: "/council/muahid-ahmad.png",
  },
  {
    name: "Rai Behram",
    role: "Executive Member",
    image: "/council/rai-behram.png",
  },
];

export type Category = {
  number: string;
  name: string;
  description: string;
};

export const compulsoryCategories: Category[] = [
  {
    number: "01",
    name: "Build Your Own Idea",
    description:
      "This category involves delegates coming up with their own business ideas that they will pitch to investors. As they battle for investment into their business idea, teams are expected to create a well-thought-out business idea, as well as conduct appropriate research in order to give a skeleton to their raw idea.",
  },
  {
    number: "02",
    name: "Ad Making",
    description:
      "Media has become an important aspect of our lives, and it is used by all multinational corporations. In this category, delegates will be required to create an ad and set up stalls for allotted companies, allowing them to show their mettle and prowess in the fields of creativity, cinematography, and editing.",
  },
  {
    number: "03",
    name: "Social Entrepreneurship",
    description:
      "In this category, delegates will tackle social or environmental problems by developing a feasible business plan for a struggling business that is environmentally friendly or socially beneficial whilst remaining profitable.",
  },
  {
    number: "04",
    name: "Investomania",
    description:
      "This category introduces the stock market to the delegates who will role-play as investors. Teams will use the money allotted to them to invest in the stock market throughout the event. There will be regular updates to the stock market, and delegates are expected to invest accordingly.",
  },
  {
    number: "05",
    name: "The Enterprise",
    description:
      "Serving as a mystery category, The Enterprise will bring together the top-performing teams from across all categories to compete in a series of undisclosed, high-stakes challenges.",
  },
];

export const optionalCategories: Category[] = [
  {
    number: "06",
    name: "Corporate Espionage",
    description:
      "The category will test a plethora of skills in the world of corporate espionage, ranging from quick thinking to financial prowess. Based on a case study, delegates will be required to interrogate, arbitrate, and come to conclusions.",
  },
  {
    number: "07",
    name: "Rubicon",
    description:
      "The category will test the economic prowess of the delegates taking part in it. Delegates shall be tested regarding various aspects of economics through quizzes, case studies, and economic crises.",
  },
  {
    number: "08",
    name: "Mall Street",
    description:
      "Every entrepreneur needs to be frugal, especially when they are handling a startup with little investment. This category will put the frugality of participants to the test, as they step into the shoes of a cash-strapped business.",
  },
  {
    number: "09",
    name: "Jurisprudential",
    description:
      "This category will push delegates to embody their inner lawyer by tackling real-time legal challenges and applying knowledge and creativity on the spot, making it an immersive crucible for honing practical legal skills.",
  },
  {
    number: "10",
    name: "MUNey",
    description:
      "The flagship public speaking category of the Aitchison Business Concept will follow the rules and technicalities of a Model United Nations conference, where delegates will discuss solutions to the crises pertaining to the business that will be announced during the event.",
  },
  {
    number: "11",
    name: "The Amazing Race",
    description:
      "This category will challenge delegates to think on their feet as they navigate high-pressure corporate negotiations and various kinds of crisis situations. Delegates will be required to collaborate, analyse business case studies, and reach mutual agreements under tight deadlines.",
  },
  {
    number: "12",
    name: "Techeneurship",
    description:
      "Innovation defines entrepreneurship, and what better sector is there for innovation than technology? In this high-stakes and intense category, delegates will need to use their wits and knowledge regarding fintech to gain any advantage they can amidst multiple crises.",
  },
];
