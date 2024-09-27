import { TopBarMenuItems } from "./top-bar-menu-items";

export type Trending = {
  title: string;
  name: string;
  tweets: number;
};

export type TrendingSection = Record<TopBarMenuItems, Trending[]>;
