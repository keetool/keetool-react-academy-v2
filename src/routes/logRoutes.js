import asyncComponent from "../helpers/AsyncFunc";

export default [
  {
    path: "/log",
    exact: true,
    component: asyncComponent(() => import("../containers/Log"))
  }
];
