import { createContext } from "react";

const defaultValues = {
    currentPage: 0,
    setCurrentPage: (currentPage: number) => {}
}

export const TopBarMenuContext = createContext(defaultValues);