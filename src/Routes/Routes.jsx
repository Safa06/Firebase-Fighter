import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Components/Homepage";
import AboutUs from '../Components/AboutUs'
import Profile from '../Components/Profile'
import Signin from '../Components/Signin'
import Signup from '../Components/Signup'


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/signin",
        Component: Signin,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
]);