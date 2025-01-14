import { createBrowserRouter } from "react-router-dom";
import UserRoot from "../Pages/User/UserRoot";
import Add from "../Pages/User/Add/Add";
import Home from "../Pages/User/Home/Home";
import Basket from "../Pages/User/Basket/Basket";

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
      {
        path:"Basket",
        element:<Basket/>
      }
    ],
  },
]);
export default routes;
