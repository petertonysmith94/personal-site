import React from "react";
import { PagesWrapper } from "./page.styles";

export const Pages = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <PagesWrapper>
      { children }
    </PagesWrapper>
  )
}
