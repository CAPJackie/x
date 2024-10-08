import { TopBarMenuItems } from "@/types";
import { createContext } from "react";

type TopBarMenuContextType = {
  currentPage: TopBarMenuItems;
  setCurrentPage: (currentPage: TopBarMenuItems) => void;
};

const defaultValues: TopBarMenuContextType = {
  currentPage: TopBarMenuItems.ForYou,
  setCurrentPage: (currentPage: TopBarMenuItems) => {},
};

export const TopBarMenuContext = createContext(defaultValues);
