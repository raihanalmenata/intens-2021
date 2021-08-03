import React from "react";
// import { Router } from "@reach/router";
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "./components/layout/Layout";
import Main from "./pages/main/Main";
import Product from "./pages/product-description/Product";
// import { Route } from "react-router";

// const PrivateRoute = ({ render, ...props }) => {
  // return render(props);
  // return <Route render(props) />
  // return <Route {...props} />
// };

const App = () => {
  return (
    <>
      <Helmet defaultTitle="Intens">
        <meta charSet="utf-8" />
      </Helmet>
      {/* <BrowserRouter>
        <Switch> */}
      <Router>
        <Switch>
        {/* <Product path="/res" /> */}
        <Route path="/" exact component={Layout(Main)} />
        {/* <PrivateRoute path="/rea" /> */}
        <Route path="/product" exact component={Layout(Product)} />
        </Switch>
      </Router>
      {/* </Switch>
      </BrowserRouter> */}
    </>
  )
}

export default App;
