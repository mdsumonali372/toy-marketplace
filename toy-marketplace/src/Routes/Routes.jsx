import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import AddToys from "../components/pages/AddToys/AddToys";
import AllToys from "../components/pages/AllToys/AllToys";
import Blog from "../components/pages/Blog/Blog";
import Error from "../components/pages/Error/Error";
import Home from "../components/pages/Home/Home/Home";
import Login from "../components/pages/Login/Login";
import MyToys from "../components/pages/MyToys/MyToys";
import Registration from "../components/pages/Registration/Registration";
import ViewDetails from "../components/pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/addtoys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-swart.vercel.app/viewdetails/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
