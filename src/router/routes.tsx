import { useRoutes } from "react-router-dom";

import LazyWrapper from "./lazy-wrapper";
import Layout from "../components/main-layout";

export default function Routes() {
  return useRoutes([
    {
      Component: Layout,
      children: [
        {
          index: true,
          element: LazyWrapper("home"),
        },
        {
          path: "about",
          element: LazyWrapper("about"),
        },
        {
          path: "task",
          element: LazyWrapper("task"),
          children: [{ path: ":id", element: LazyWrapper("task/detail") }],
        },
      ],
    },
    { path: "*", element: <h1>404</h1> },
  ]);
}
