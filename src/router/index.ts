import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/about",
    lazy: () => import("../views/about"),
  },
];

export default routes;

/**
 * https://baimingxuan.github.io/react-router6-doc
 *
 * 2023.3  v6.9.0  Component
 * 
 * useRoutes 定义对象 而不是JSX
 */
