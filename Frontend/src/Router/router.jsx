import { createBrowserRouter } from "react-router-dom";
import UserRoot from "../Pages/User/UserRoot";
import Add from "../Pages/User/Add/Add";
import Home from "../Pages/User/Home/Home";

const routes = createBrowserRouter([
  {
    path: "",
    element: <UserRoot/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Add",
        element: <Add />,
      },
    ],
  },
]);
export default routes;
