import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import logo from "../logo.svg";
import { Routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {Routes.map(({ path, name, to }) => {
                return (
                  <li key={path}>
                    <NavLink to={to} activeClassName="nav-active" exact>
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Switch>
            {Routes.map(({ path, Component }) => {
              return <Route key={path} path={path} component={Component} />;
            })}
            <Redirect to={Routes[0].to} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
