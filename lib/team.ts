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

export type DirectorMember = {
  id: string;
  name: string;
  image?: string;
  imagePosition?: string;
  imageScale?: number;
};

export type DirectorGroup = {
  id: string;
  role: string;
  office: string;
  members: DirectorMember[];
};

export const directorGroups: DirectorGroup[] = [
  {
    id: "operations",
    role: "Director",
    office: "Operations",
    members: [
      { id: "sarmad-nazir", name: "Sarmad Nazir", image: "/directors/sarmad-nazir.jpg" },
      { id: "muhammad-umer", name: "Muhammad Umer", image: "/directors/muhammad-umer.jpg" },
      { id: "kanwar-uzair", name: "Kanwar Uzair", image: "/directors/kanwar-uzair.jpg" },
    ],
  },
  {
    id: "registrations",
    role: "Director",
    office: "Registrations",
    members: [
      { id: "rao-mateen", name: "Rao Mateen Khalil", image: "/directors/rao-mateen.jpg", imagePosition: "center 48%" },
      { id: "raed-mohsin-khan", name: "Raed Mohsin Khan", image: "/directors/raed-mohsin-khan.jpg", imagePosition: "center 42%" },
      { id: "mikail-liaqat", name: "Mikail Liaqat", image: "/directors/mikail-liaqat.jpg" },
    ],
  },
  {
    id: "coordinations",
    role: "Director",
    office: "Coordinations",
    members: [
      { id: "aalay-hasnain", name: "Aalay Hasnain", image: "/directors/aalay-hasnain.jpg" },
      { id: "muhammad-azaan", name: "Azaan Ahmad", image: "/directors/azaan-ahmad.jpg", imagePosition: "center 46%" },
      { id: "hashim-amjad-nagra", name: "Hashim Amjad Nagra", image: "/directors/hashim-amjad-nagra.jpg" },
    ],
  },
  {
    id: "promotions",
    role: "Director",
    office: "Promotions",
    members: [
      { id: "owais-joiya", name: "Owais Joiya", image: "/directors/owais-joiya.jpg" },
      { id: "asad-ur-rehman", name: "Asad ur Rehman", image: "/directors/asad-ur-rehman.jpg", imagePosition: "center 38%", imageScale: 2.15 },
    ],
  },
];
