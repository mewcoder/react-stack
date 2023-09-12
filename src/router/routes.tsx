import { useRoutes } from "react-router-dom";

import Home from "../views/home";
import LazyWrapper from "./lazy-wrapper";

export default function Routes() {
  const element = useRoutes([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/about",
      element: LazyWrapper("about"),
    },
  ]);
  return element;
}
