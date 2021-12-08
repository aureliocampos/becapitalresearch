import React from "react";

import Header from "./modules/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <main className="main-wrapper">{children}</main>
    </>
  )
}