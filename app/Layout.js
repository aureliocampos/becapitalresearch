import React from "react";
import Footer from "./modules/Footer";

import Header from "./modules/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <main className="main-wrapper">{children}</main>
        <Footer/>
    </>
  )
}