import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-1 my-3 d-flex flex-column">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
