import React from "react";
import { Router } from "@reach/router";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import { Helmet } from "react-helmet";
// import { Home }  from "./pages";

const App = () => {
  return (
    <>
      <Helmet defaultTitle="Intens">
        <meta charSet="utf-8" />
      </Helmet>
      <Router>
        <Layout path="/" />
        <Header path="/header" />
      </Router>
    </>
  )
}

export default App;
