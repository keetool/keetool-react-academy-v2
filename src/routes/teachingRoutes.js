import asyncComponent from "../helpers/AsyncFunc";

export default [
  {
    path: "/teaching",
    children: [
      {
        path: "/registers",
        component: asyncComponent(() => import("../containers/Teaching/Registers"))
      },
      {
        path: "/classes",
        component: asyncComponent(() => import("../containers/Teaching/Classes"))
      }
    ]
  }
];
