export type NewsFigure = {
  src: string;
  alt: string;
};

export type NewsEditorial =
  | { type: "pair"; after: number; shape?: "wide" | "frame"; images: [NewsFigure, NewsFigure] }
  | { type: "wide"; after: number; image: NewsFigure };

export type AcesHighlight = {
  id: string;
  slug: string;
  kicker: string;
  headline: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  editorial?: NewsEditorial[];
};

/** Society news shown on the ACES highlights carousel. */
export const acesHighlights: AcesHighlight[] = [
  {
    id: "packages",
    slug: "packages-limited",
    kicker: "Factory Visit Packages Limited",
    headline: "Stepping into the real business world",
    image: "/news/packages-hero.png",
    imageAlt: "ACES students outside Packages Limited",
    paragraphs: [
      "The Entrepreneurial Society organised an educational tour of Packages Limited, providing students with an opportunity to gain first-hand insight into the operations of one of Pakistan’s leading packaging and printing companies.",
      "The tour began with the Arts Department, where students were introduced to the creative and design processes through which products are conceptualised and developed. The department provided an insight into how initial designs are created and refined before moving into the production stage.",
      "Students were then taken through the company’s production and printing facilities, observing the processes involved in transforming designs into finished packaging products. The visit provided a practical understanding of the scale and complexity of industrial manufacturing, from production planning and machinery to quality control and final output.",
      "The tour also covered the operational systems that enable the facility to function continuously. Students gained insight into production capacities and limits, workplace safety protocols, energy consumption, and daily production planning. Particular emphasis was placed on how operations are carefully scheduled and coordinated to ensure that the facility maintains continuous production without unnecessary interruptions.",
      "The visit offered students a valuable perspective on the relationship between design, manufacturing, operations, and business management, complementing classroom learning with direct exposure to a large-scale industrial environment. It further highlighted the importance of planning, efficiency, safety, and coordination in maintaining complex business operations.",
    ],
    editorial: [
      {
        type: "pair",
        after: 1,
        shape: "wide",
        images: [
          {
            src: "/news/packages-2.png",
            alt: "Students walking through the Packages Limited facility",
          },
          {
            src: "/news/packages-3.png",
            alt: "Printing press on the Packages Limited production floor",
          },
        ],
      },
      {
        type: "wide",
        after: 3,
        image: {
          src: "/news/packages-4.png",
          alt: "Wide view of the Packages Limited production hall",
        },
      },
    ],
  },
  {
    id: "markhors",
    slug: "markhors-den",
    kicker: "Markhor's Den",
    headline: "Five years. Still unstoppable.",
    image: "/news/markhors-den-2026.png",
    imageAlt: "ACES delegation with the Markhor's Den Best Delegation trophy",
    paragraphs: [
      "The Entrepreneurial Society continued its strong record at Markhor’s Den, one of Pakistan’s most competitive inter-school competitions, hosted by ISL Ring Road Campus from 25th to 27th September 2026. The Society sent a four-team delegation, with its boys delivering an outstanding performance across multiple competitive disciplines.",
      "The Society secured First Place in Conception, Wolf of Wall Street, and Top Trade, alongside Runner-Up positions in Brand Innovators, Economic Prowess, Social Vanguard, Den Chambers, and Stealth Mission.",
      "In addition to its category achievements, Team X secured the Best Team award, while Aitchison College was named Best Delegation. This marked the first time the Society had won both distinctions simultaneously, further highlighting the strength and consistency of its delegation.",
      "The competition demanded strategic thinking, creativity, communication, teamwork, and effective decision-making under pressure. The Society’s performance across multiple categories reflected the preparation, coordination, and competitive spirit demonstrated by all four teams.",
      "These achievements further strengthen the Entrepreneurial Society’s record at Markhor’s Den and reaffirm its position among the leading competing societies on Pakistan’s inter-school circuit.",
    ],
  },
  {
    id: "jt-empresario",
    slug: "jt-empresario",
    kicker: "JT Empresario",
    headline: "Entrepreneurial Society Dominates JT Empresario",
    image: "/news/jt-empresario-2026.png",
    imageAlt: "ACES delegation with Best Delegation and Best Team trophies at JT Empresario",
    paragraphs: [
      "The Entrepreneurial Society continued its successful competitive season at JT Empresario, held from 9th to 11th October 2026. The Society sent a delegation to compete against some of the leading schools from across Pakistan in a range of demanding competitive events.",
      "After three days of intense competition, the boys delivered an outstanding performance, securing First Place in Game Theory and Invisible Hand, alongside Runner-Up positions in Court of Cornelius and Frantic Fusion. The events tested participants across strategic thinking, commercial awareness, negotiation, problem-solving, creativity, and decision-making under pressure.",
      "A particularly significant achievement was Team X securing the Best Team award, while Aitchison College was named Best Delegation. This marked the first time in JT Empresario's history that the Society had secured both distinctions simultaneously. Furthermore, the Best Delegation title marked the Society's return to the award for the first time in five years.",
      "These results represent a major milestone for the Entrepreneurial Society and reflect the dedication, preparation, and teamwork demonstrated throughout the competition. The delegation's success further reinforces the Society's standing among the leading entrepreneurial societies on Pakistan's inter-school circuit.",
    ],
  },
  {
    id: "kges",
    slug: "kges-2026",
    kicker: "KGES",
    headline: "Excellence in Karachi.",
    image: "/news/kges-2026.jpg",
    imageAlt: "ACES delegation with the KGES Overall Best Delegation award",
    paragraphs: [
      "The Entrepreneurial Society continued its strong record at KGES, hosted by Karachi Grammar School in Karachi from 22nd to 24th October 2026. As an outstation competition and one of the most challenging events on Pakistan's inter-school circuit, KGES brought together leading schools from across the country for three days of demanding competition.",
      "The delegation delivered an outstanding performance, securing First Place in Venture Vista, alongside Runner-Up positions in Crisis at Work, Venture Vista, and Negotiation Conclave. The events tested participants across entrepreneurship, strategic thinking, negotiation, crisis management, and decision-making under pressure.",
      "Beyond the team results, seven members of the Society were recognised among the Top 20 Delegates of the competition: Muhammad Umer, Raed Mohsin Khan, Mikail Omer Liaqat, Kanwar Uzair, Aalay Hussnain, Sarmad Nazir Ahmad, and Hashim Amjad Nagra. This distinction also provided them with the opportunity to be considered for selection to the prestigious Pakistan Entrepreneurship Team.",
      "Capping off an exceptional performance, Aitchison College was named Best Delegation at KGES, further strengthening the Society's record at one of the country's most demanding entrepreneurial competitions. The achievement reflects the preparation, adaptability, and competitive spirit demonstrated by the delegation throughout its outstation participation.",
    ],
    editorial: [
      {
        type: "wide",
        after: 0,
        image: {
          src: "/news/kges-2026-travel.jpg",
          alt: "ACES delegation travelling for KGES in Karachi",
        },
      },
    ],
  },
  {
    id: "ja-pakistan",
    slug: "ja-pakistan-leadership",
    kicker: "JA Pakistan",
    headline: "JA Pakistan Leadership Session",
    image: "/news/ja-pakistan-session-1.jpg",
    imageAlt: "Hassan Noor Pagganwala speaking at the JA Pakistan Career Readiness Workshop",
    paragraphs: [
      "The Entrepreneurial Society had the privilege of hosting Hassan Noor Pagganwala, Chief Executive Officer of JA Pakistan, alongside members of his team for an insightful session introducing students to JA Worldwide and its global network.",
      "The session provided a comprehensive overview of JA Worldwide, its international reach, programmes, and the opportunities and benefits it offers young entrepreneurs. The visiting team shared valuable insights into the business world, offering practical perspectives on entrepreneurship, professional development, and the realities of working in the corporate sector.",
      "Beyond the organisational introduction, the session also featured meaningful advice on navigating professional life, developing business acumen, building effective leadership skills, and preparing for future careers. The discussions offered students a valuable opportunity to gain first-hand perspectives from experienced professionals and better understand the expectations and challenges of the corporate world.",
      "The engagement served as an important learning opportunity for members of the Society, strengthening their understanding of entrepreneurship and the wider professional landscape while encouraging them to think more critically about their future aspirations.",
    ],
    editorial: [
      {
        type: "pair",
        after: 1,
        shape: "wide",
        images: [
          {
            src: "/news/ja-pakistan-session-2.jpg",
            alt: "JA Pakistan team member addressing students during the leadership session",
          },
          {
            src: "/news/ja-pakistan-session-3.jpg",
            alt: "Students attending the JA Pakistan leadership session",
          },
        ],
      },
    ],
  },
  {
    id: "water",
    slug: "water-security",
    kicker: "Panel Discussion",
    headline: "Aitchison’s first discussion on water security",
    image: "/news/speaker-3.png",
    imageAlt: "Speaker addressing students during the water security discussion",
    paragraphs: [
      "The Entrepreneurial Society hosted Aitchison College’s first dedicated discussion on water scarcity and conservation, bringing together students and a distinguished expert for an important conversation on one of Pakistan’s most pressing environmental and economic challenges.",
      "The session featured Mr. Tahir Basharat Cheema, a senior engineer, policy expert, and former senior WAPDA official with more than three decades of experience across Pakistan’s energy, water, infrastructure, and public administration sectors. His extensive professional experience provided students with valuable insight into the scale of Pakistan’s water challenges and the importance of effective resource management.",
      "The discussion examined the growing pressures on freshwater resources arising from climate change, population growth, pollution, and inefficient resource management, while also exploring the role of innovation in addressing these challenges. Particular attention was given to emerging solutions such as smart irrigation, AI-based water monitoring, wastewater recycling, desalination, rainwater harvesting, and leak detection technologies.",
      "The session also explored water scarcity through an entrepreneurial lens, highlighting how sustainability can extend beyond responsibility to become an opportunity for innovation and the development of practical solutions to real-world challenges.",
      "The discussion was highly interactive, with students engaging actively through a wide range of questions and discussions. The exchange provided an opportunity for students to gain first-hand perspectives from an experienced professional and develop a deeper understanding of the complexities surrounding Pakistan’s water security.",
      "As Aitchison College’s first dedicated discussion on water scarcity and conservation, the session marked a significant step in encouraging informed dialogue on sustainability, national resource management, and the role of future leaders in addressing Pakistan’s long-term challenges.",
    ],
    editorial: [
      {
        type: "pair",
        after: 1,
        shape: "frame",
        images: [
          {
            src: "/news/speaker-2.png",
            alt: "Students attending the water security discussion",
          },
          {
            src: "/news/speaker-1.png",
            alt: "Guest speaker with students after the discussion",
          },
        ],
      },
    ],
  },
  {
    id: "ja",
    slug: "ja-worldwide",
    kicker: "JA Worldwide",
    headline: "First in South Asia. History achieved.",
    image: "/ja worlds.jpeg",
    imageAlt: "ACES JA Worldwide team",
    paragraphs: [
      "Aitchison College secured the PMIEF Best Application of Project Management Award at the international stage of the JA Worldwide Company of the Year Program 2026, following its success at the national round.",
      "For the national competition, the students established Next Papers, a company providing fully customised academic resources for students and teachers across Cambridge and other examination boards. Following their national victory, the team — Sirmed Mehmood, Hussain Nawaz, Taha Irfan, and Mohammad bin Ishaq, under the mentorship of Ms. Nida — earned a fully funded opportunity to represent Pakistan at the international competition in Seoul, South Korea.",
      "At the international stage, Next Papers was presented alongside leading student enterprises representing thirteen other countries. The competition provided a global platform for participants to demonstrate the strength of their business models, operational strategies, innovation, and execution.",
      "The PMIEF Best Application of Project Management Award recognised the team’s effective application of project management principles throughout the development and execution of Next Papers. The achievement represents a significant international accomplishment for Aitchison College and establishes a notable milestone for South Asian participation in the programme.",
    ],
  },
  {
    id: "yles",
    slug: "yles",
    kicker: "YLES",
    headline: "19 years. History made.",
    image: "/yles.jpeg",
    imageAlt: "ACES delegation at YLES",
    paragraphs: [
      "YLES is a four-day national competition that brings together more than 1,000 delegates from leading schools across Pakistan. The event provides a highly competitive platform for students to demonstrate their capabilities across entrepreneurship, business strategy, leadership, innovation, and problem-solving.",
      "Throughout the competition, the C1 delegation maintained a high standard of performance across the various stages, demonstrating preparation, discipline, strategic thinking, and effective teamwork. Competing against a strong national field required sustained performance across four demanding days.",
      "Securing Best Team after 19 years represents a significant milestone for the society and a notable achievement at one of Pakistan’s most competitive entrepreneurial platforms. The result reflects the sustained effort, commitment, and collective performance demonstrated throughout the competition.",
    ],
  },
];

export function getAcesHighlight(slug: string) {
  return acesHighlights.find((story) => story.slug === slug);
}

export type RecognitionPerson = {
  id: string;
  name: string;
  role: string;
  context: string;
  year?: string;
  result?: string;
  image?: string;
  imageAlt?: string;
};

export const recognitionIntro =
  "ABC XIV recognises students who keep the co-curricular ecosystem running, and those who stand out in competition. Contribution behind the scenes, and results on the floor.";

/** Named contributors are not yet published. */
export const featuredContributors: RecognitionPerson[] = [];

/** Named competition awards are not yet published. */
export const topPerformers: RecognitionPerson[] = [];

export const recognitionSlotCount = 3;
