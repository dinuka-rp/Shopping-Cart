import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {Routes.map(({ path, component }) => (
          <Route key={path} exact path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
