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
  { id: "chess", name: "Chess", image: "/XIII Vectors/Chess raw.png" },
  { id: "muney", name: "MUNey", image: "/XIII Vectors/Muney raw.png" },
  { id: "race", name: "The Amazing Race", image: "/XIII Vectors/Race raw.png" },
  { id: "canvas", name: "Corporate Canvas", image: "/XIII Vectors/Canvas raw.png" },
  { id: "tech", name: "Techeneurship", image: "/XIII Vectors/Tech raw.png" },
  { id: "enterprise", name: "The Enterprise", image: "/XIII Vectors/Enterprise raw.png" },
];

export const directors: TeamSeat[] = [
  { id: "operations", role: "Director", office: "Operations" },
  { id: "registrations", role: "Director", office: "Registrations" },
  { id: "coordinations", role: "Director", office: "Coordinations" },
  { id: "promotions", role: "Director", office: "Promotions" },
];
