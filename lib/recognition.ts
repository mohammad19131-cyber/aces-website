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
    kicker: "Markhors Den",
    headline: "Four years. Still unstoppable.",
    image: "/markhors den.jpeg",
    imageAlt: "ACES at Markhors Den",
    paragraphs: [
      "The society continued its strong record at Markhors Den, one of Pakistan’s most competitive inter-school competitions, with participation from leading schools across the country. The H1 side recorded a particularly strong performance, securing multiple victories across the competition.",
      "The society secured First Place in Stealth Mission, Conception, and Den Chambers, while also achieving Runner-Up in Wolf of Wall Street and an Honourable Mention in Stealth Mission.",
      "The strong results reflected the high level of preparation, coordination, and competitive performance demonstrated throughout the event. With demanding rounds requiring strategic thinking, creativity, communication, teamwork, and decision-making under pressure, the competition provided a rigorous test across multiple disciplines.",
      "Markhors Den continues to stand among the most challenging competitions on Pakistan’s inter-school circuit, attracting participation from some of the country’s leading schools. The society’s multiple category victories and additional podium finishes further strengthen its four-year record of sustained excellence at the competition.",
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
