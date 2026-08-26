export type TeamSeat = {
  id: string;
  role: string;
  office: string;
  image?: string;
  name?: string;
};

/** ABC categories as listed on the homepage Events Calendar. */
export const eventHeadCategories: { id: string; name: string; image: string }[] = [
  { id: "byoi", name: "Build Your Own Idea", image: "/XIII Vectors/BYOI raw.png" },
  { id: "ad", name: "Ad Making", image: "/XIII Vectors/AD raw.png" },
  { id: "investomania", name: "Investomania", image: "/XIII Vectors/Investo raw.png" },
  { id: "socio", name: "Social Entrepreneurship", image: "/XIII Vectors/Socio raw.png" },
  { id: "ff", name: "Fiscal Frontier", image: "/XIII Vectors/FF raw.png" },
  { id: "mall", name: "Mall Street", image: "/XIII Vectors/Mall raw.png" },
  { id: "juris", name: "Jurisprudential", image: "/XIII Vectors/Juris raw.png" },
  { id: "rubicon", name: "Rubicon", image: "/XIII Vectors/Rubicon raw.png" },
  { id: "muney", name: "MUNey", image: "/XIII Vectors/Muney raw.png" },
  { id: "race", name: "The Amazing Race", image: "/XIII Vectors/Race raw.png" },
  { id: "tech", name: "Techeneurship", image: "/XIII Vectors/Tech raw.png" },
  { id: "enterprise", name: "The Enterprise", image: "/XIII Vectors/Enterprise raw.png" },
];

/** Three Head of Core Team seats. No named people are in the project yet. */
export const coreHeads: TeamSeat[] = [
  { id: "core-1", role: "Head of Core Team", office: "" },
  { id: "core-2", role: "Head of Core Team", office: "" },
  { id: "core-3", role: "Head of Core Team", office: "" },
];

export const directors: TeamSeat[] = [
  { id: "operations", role: "Director", office: "Operations" },
  { id: "registrations", role: "Director", office: "Registrations" },
  { id: "coordinations", role: "Director", office: "Coordinations" },
  { id: "promotions", role: "Director", office: "Promotions" },
];
