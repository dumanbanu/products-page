import React from "react";
import Header from "../header/Index"


function Layout({children}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;