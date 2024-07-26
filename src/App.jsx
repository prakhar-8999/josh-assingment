import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
]);

export default router;
