import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JobDetails from "../pages/JobDetails";
import PrivetRoute from "../route/PrivetRoute";
import JobApply from "../pages/JobApply";
import MyApplication from "../pages/MyApplication";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplication from "../Component/ViewApplication";

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
          path:"/jobs/:id",
          loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`),
          Component: JobDetails

        },
        {
          path:"/myApplication",
          element:<PrivetRoute><MyApplication></MyApplication></PrivetRoute>
        },
        {
          path:"/jobApply/:id",
          element: <PrivetRoute><JobApply></JobApply></PrivetRoute>
        },
        {
          path:"/addJob",
          element: <PrivetRoute><AddJob></AddJob></PrivetRoute>
        },
        {
          path:"/myPostedJobs",
          element: <PrivetRoute><MyPostedJobs></MyPostedJobs></PrivetRoute>
        },
        {
          path:"/application/:job_id",
          element:<PrivetRoute><ViewApplication></ViewApplication></PrivetRoute>,
          loader: ({params})=> fetch(`http://localhost:3000/application/job/${params.job_id}`)
        },
        {
            path:"/register",
            Component: Register
        },
        {
            path:"/login",
            Component: Login
        },
    ]
  },
]);

export default Router;
