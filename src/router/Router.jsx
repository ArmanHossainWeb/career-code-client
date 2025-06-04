import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component: Home
        },
    ]
  },
]);

export default Router;
