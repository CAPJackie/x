import { TopBarMenuItems } from "@/types";
import { createContext } from "react";

const defaultValues = {
  currentPage: TopBarMenuItems.ForYou,
  setCurrentPage: (currentPage: TopBarMenuItems) => {},
};

export const TopBarMenuContext = createContext(defaultValues);
