import { User } from "@/types";

/** The signed-in user (mock). */
export const currentUser: User = {
  name: "Demo User",
  username: "demouser",
  avatar: "/images/profile.jpeg",
};

const avatars = [
  "/images/profile-x.jpeg",
  "/images/profile.jpeg",
  "/images/profileSender.jpg",
];

const user = (name: string, username: string, i: number): User => ({
  name,
  username,
  avatar: avatars[i % avatars.length],
});

/** Authors used by the generated feed posts. */
export const mockUsers = {
  nasa: user("Space Updates", "spaceupdates", 0),
  rustacean: user("Ferris Fan 🦀", "rustacean_dev", 1),
  chef: user("Marta Cocina", "martacocina", 2),
  coffee: user("bean there", "beanthere", 0),
  nba: user("Hoops Central", "hoopscentral", 1),
  futbol: user("Fútbol Global", "futbolglobal", 2),
  designer: user("Ivy Grant", "ivydesigns", 0),
  gamer: user("Pixel Pete", "pixelpete", 1),
  traveler: user("Nomad Notes", "nomadnotes", 2),
  climate: user("Climate Desk", "climatedesk", 0),
  indie: user("Ben Solo Founder", "bensolofounder", 1),
  frontend: user("Rosa Méndez", "rosafrontend", 2),
  security: user("sec_ops_sam", "secopssam", 0),
  music: user("Vinyl Vibes", "vinylvibes", 1),
  photo: user("Golden Hour", "goldenhourpics", 2),
  books: user("Page Turner", "pageturner", 0),
  fitness: user("Coach Dani", "coachdani", 1),
  memes: user("dev memes", "devmemes", 2),
  science: user("Science Bits", "sciencebits", 0),
  bogota: user("Bogotá al Día", "bogotaaldia", 1),
} satisfies Record<string, User>;

export const suggestedUsers: User[] = [
  mockUsers.nasa,
  mockUsers.designer,
  mockUsers.indie,
];
