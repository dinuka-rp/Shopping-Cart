import React from "react";
import { Route } from "react-router-dom";
import Catalog from "./components/Catalog";
import Login from "./components/Login";
import Register from "./components/Register";

// All the routes in the application are defined here
// define routes like this or set of components and load this component in the App.tsx??

const Routes: React.FC = () => {
  return (
    <>
      <Route key="/" exact path="/" component={Catalog} />
      <Route key="/login" path="/login" component={Login} />
      <Route key="/sign-up" path="/sign-up" component={Register} />
    </>
  );
};

export default Routes;
