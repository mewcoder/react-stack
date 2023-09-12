import { createBrowserRouter } from "react-router-dom";

import Home from "../views/home";
import LazyWrapper from "./lazy-wrapper";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "about",
    loader: () => <div>loader</div>,
    element: LazyWrapper("about"),
  },
]);

export default router;
