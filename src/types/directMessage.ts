import { User } from "./user";

export type DirectMessage = {
  id: number;
  user: User;
  date: string;
  content: string;
};
