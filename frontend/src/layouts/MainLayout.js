import React, { useEffect } from "react";
import { HorizontalSeparator } from "../components/horizontalSeparator/HorizontalSeparator";
import { HeaderComponent } from "../components/headerComponent/HeaderComponent";

export const MainLayout = ({ children, pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <HeaderComponent />
      <HorizontalSeparator />
      <main>{children}</main>
    </>
  );
};
