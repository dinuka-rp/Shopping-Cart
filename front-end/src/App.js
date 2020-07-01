import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Route } from "react-router-dom";
import Routes from "./Routes";
import { CSSTransition } from "react-transition-group";

const App = () => {
  return (
    <div className="App">
      {Routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={500}
              classNames="view"
              unmountOnExit
            >
              <div className="view">
                {/* rendering the component onto the div */}
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  );
};

export default App;
