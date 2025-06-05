import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component: Home
        },
        {
            path:"/register",
            Component: Register
        },
    ]
  },
]);

export default Router;
