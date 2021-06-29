import React from "react";
import { Router } from "@reach/router";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
// import { Home }  from "./pages";

const App = () => {
  return (
    <Router>
      <Layout path="/" />
      <Header path="/header" />
    </Router>
  )
}

export default App;
