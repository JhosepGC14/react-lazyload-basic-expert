import { Switch, Route, NavLink, Redirect, useRouteMatch } from "react-router-dom";
import { RoutesChildren } from "./childrenRouter";

export const NavigationChildren = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <h2>LazyLayout Pages</h2>

      <ul>
        {RoutesChildren.map(({ to , name}) => {
          return (
            <li key={to}>
              <NavLink to={`${url}${to}`}>{name}</NavLink>
            </li>
          );
        })}
      </ul>

      <Switch>
        {RoutesChildren.map(({ to, Component }) => {
          return (
            <Route
              key={to}
              exact
              path={`${path}${to}`}
              render={() => <Component />}
            />
          );
        })}

        <Redirect to={`${path}/lazy1`} />
      </Switch>
    </>
  );
};
