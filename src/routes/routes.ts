import { lazy } from "react";
import { Route } from "../01-lazyload/interfaces/Route.interface";
import { NoLazyPage } from "../01-lazyload/pages/NoLazy";

export const Routes: Route[] = [
  {
    to: "/lazy-layout",
    path: "/lazy-layout",
    Component: lazy(() => import(/* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout")),
    name: "Lazy Layout",
  },
  {
    to: "/no-lazy-layout",
    path: "/no-lazy-layout",
    Component: NoLazyPage,
    name: "No Lazy Layout",
  },
];
