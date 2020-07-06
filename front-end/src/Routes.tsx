import React from "react";
import { Route } from "react-router-dom";
import Catalog from "./components/Catalog";
import Profile from "./pages/Profile";

// All the routes in the application are defined here
// define routes like this or set of components and load this component in the App.tsx??

const Routes: React.FC = () => {
  return (
    <>
      <Route key="/" exact path="/" component={Catalog} />    {/* this should be Home.tsx */}
      <Route key="/profile" path="/profile" component={Profile} />
    </>
  );
};

export default Routes;
