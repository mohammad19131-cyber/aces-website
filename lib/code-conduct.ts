export const codeOfConductIntro =
  "The standards of conduct governing participation in ACES activities, competitions, and programmes.";

export type CodeOfConductSection = {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  rules?: { title: string; text: string }[];
  list?: string[];
  afterList?: string[];
};

export const codeOfConductSections: CodeOfConductSection[] = [
  {
    id: "general",
    number: "01",
    title: "General Conduct",
    paragraphs: [
      "All participants are expected to maintain a respectful, professional, and responsible standard of conduct throughout their participation in ACES.",
    ],
    rules: [
      {
        title: "1.1 — Respect",
        text: "All participants must treat fellow participants, organizers, judges, faculty, and staff with respect and courtesy. Discrimination, harassment, intimidation, bullying, or threatening behaviour will not be tolerated.",
      },
      {
        title: "1.2 — Professionalism",
        text: "Participants are expected to conduct themselves professionally throughout all ACES events, including competitions, workshops, presentations, breaks, and interactions with other schools.",
      },
      {
        title: "1.3 — Following Instructions",
        text: "Participants must follow reasonable instructions issued by ACES organizers, event coordinators, judges, and authorized college personnel.",
      },
      {
        title: "1.4 — Punctuality",
        text: "Participants are responsible for arriving at designated venues on time. Failure to arrive within the specified timeframe may result in penalties or disqualification where applicable.",
      },
    ],
  },
  {
    id: "competition",
    number: "02",
    title: "Competition Conduct",
    rules: [
      {
        title: "2.1 — Fair Competition",
        text: "All participants must compete fairly and honestly. Deliberately exploiting loopholes, attempting to gain an unfair advantage, or interfering with another team's performance is prohibited.",
      },
      {
        title: "2.2 — Team Conduct",
        text: "Team members are collectively responsible for their conduct during an event. Serious misconduct by one member may result in consequences for the entire team where appropriate.",
      },
      {
        title: "2.3 — Judges' Decisions",
        text: "Judges' decisions are final unless an official appeal process has been explicitly provided for a particular event.",
      },
      {
        title: "2.4 — Disruption",
        text: "Participants must not intentionally disrupt another team's presentation, preparation, performance, or access to competition resources.",
      },
    ],
  },
  {
    id: "integrity",
    number: "03",
    title: "Academic & Intellectual Integrity",
    paragraphs: [
      "ACES values original thinking, honest research, and intellectual responsibility.",
    ],
    rules: [
      {
        title: "3.1 — Original Work",
        text: "Participants must submit work that is their own or appropriately attributed to its original creator.",
      },
      {
        title: "3.2 — Plagiarism",
        text: "Plagiarism, including presenting another person's ideas, writing, research, designs, or work as one's own, is prohibited.",
      },
      {
        title: "3.3 — Misrepresentation",
        text: "Participants must not knowingly provide false information about their team, school, research, business, product, financial figures, or other competition-related material.",
      },
      {
        title: "3.4 — Sources",
        text: "Where research, statistics, quotations, images, or external material are used, participants should provide appropriate attribution where required by the specific competition.",
      },
    ],
  },
  {
    id: "technology",
    number: "04",
    title: "Technology & Artificial Intelligence",
    paragraphs: [
      "Participants must comply with any event-specific rules concerning artificial intelligence, software, and other technological tools.",
    ],
    rules: [
      {
        title: "4.1 — Permitted Technology",
        text: "Where an event permits the use of AI tools, participants remain responsible for the accuracy, originality, and integrity of their submission.",
      },
      {
        title: "4.2 — Circumvention",
        text: "Using technology or AI to circumvent a competition restriction, impersonate another participant, fabricate evidence, or obtain an unfair advantage is prohibited.",
      },
      {
        title: "4.3 — Event-Specific Rules",
        text: "If an individual competition establishes specific AI or technology restrictions, those rules take precedence for that competition.",
      },
    ],
  },
  {
    id: "prohibited",
    number: "05",
    title: "Prohibited Behaviour",
    paragraphs: [
      "The following conduct may result in immediate disciplinary action:",
    ],
    list: [
      "Harassment, bullying, discrimination, or threatening behaviour.",
      "Physical violence or deliberate attempts to cause harm.",
      "Cheating or unauthorized collaboration.",
      "Plagiarism or deliberate misrepresentation.",
      "Tampering with competition equipment, software, submissions, or infrastructure.",
      "Unauthorized access to another participant's account, files, or information.",
      "Deliberately disrupting an event or another participant's performance.",
      "Falsifying documents or competition-related information.",
      "Attempting to bribe, manipulate, or improperly influence judges or organizers.",
      "Any conduct that violates Aitchison College policies or applicable law.",
    ],
  },
  {
    id: "equipment",
    number: "06",
    title: "Technology & Competition Equipment",
    paragraphs: [
      "Participants must use competition equipment, computers, networks, software, and other resources only for their intended purpose.",
      "Unauthorized modification, interference, damage, or access to competition systems is prohibited.",
      "Participants are responsible for ensuring that their own devices and materials comply with any technical requirements communicated before an event.",
    ],
  },
  {
    id: "confidentiality",
    number: "07",
    title: "Confidentiality",
    paragraphs: [
      "Participants may receive information, materials, prompts, datasets, business ideas, or other content that is intended to remain confidential during a competition.",
      "Such information must not be shared with competing teams or external parties where the organizers have designated it as confidential.",
    ],
  },
  {
    id: "reporting",
    number: "08",
    title: "Reporting Violations",
    paragraphs: [
      "Participants who believe that a serious violation has occurred should report the matter to an ACES organizer, event coordinator, or designated authority as soon as reasonably possible.",
      "Reports should be made honestly and in good faith. False or deliberately malicious accusations may themselves be considered misconduct.",
    ],
  },
  {
    id: "disciplinary",
    number: "09",
    title: "Disciplinary Action",
    paragraphs: [
      "Depending on the severity of the violation, ACES may take one or more of the following actions:",
    ],
    list: [
      "Verbal or written warning.",
      "Deduction of competition points.",
      "Removal from a particular round or activity.",
      "Disqualification of an individual.",
      "Disqualification of an entire team.",
      "Removal from the event.",
      "Referral of the matter to the appropriate school or college authority.",
    ],
    afterList: [
      "The severity of the response will depend on the nature and circumstances of the violation. ACES reserves the right to take appropriate action to preserve the integrity and safety of its events.",
    ],
  },
  {
    id: "appeals",
    number: "10",
    title: "Appeals",
    paragraphs: [
      "Where an event provides an official appeal mechanism, participants must submit appeals through the procedure and within the timeframe communicated by the organizers.",
      "Appeals must be based on a legitimate procedural or factual concern and must not be used to challenge a judge's decision simply because a participant disagrees with the outcome.",
    ],
  },
  {
    id: "responsibility",
    number: "11",
    title: "Responsibility of Participants",
    paragraphs: [
      "By participating in an ACES event, participants acknowledge that they are responsible for understanding and following the applicable rules and instructions.",
      "Participants should seek clarification from the organizers if they are uncertain about whether a particular action is permitted.",
    ],
  },
  {
    id: "authority",
    number: "12",
    title: "Final Authority",
    paragraphs: [
      "ACES reserves the right to interpret and enforce this Code of Conduct in the interests of maintaining a fair, safe, and professional environment.",
      "Event-specific rules may supplement or override sections of this Code of Conduct where explicitly stated in the relevant competition materials.",
      "ACES reserves the right to amend these guidelines where necessary due to unforeseen circumstances, operational requirements, or changes to an event.",
      "Participation in ACES activities constitutes acceptance of this Code of Conduct.",
    ],
  },
];
