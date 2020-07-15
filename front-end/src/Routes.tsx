import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./components/Register";

// All the routes in the application are defined here
// define routes like this or set of components and load this component in the App.tsx??

const Routes: React.FC = () => {
  return (
    <>
      <Route key="/" exact path="/" component={Home} />    {/* this should be Home.tsx */}
      <Route key="/profile" path="/profile" component={Profile} />
      <Route key="/register" path="/register" component={Register} />
    </>
  );
};

export default Routes;
