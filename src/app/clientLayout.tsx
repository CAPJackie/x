"use client";

import { Footer, Header } from "@/components";
import { TopBarMenuContext } from "@/context";
import { TopBarMenuItems } from "@/types";
import { useState } from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPage, setCurrentPage] = useState(TopBarMenuItems.ForYou);
  return (
    <TopBarMenuContext.Provider value={{ currentPage, setCurrentPage }}>
      <Header />
      {children}
      <Footer />
    </TopBarMenuContext.Provider>
  );
}
