import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivetRoute from "./PrivetRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRouter from "./AdminRouter";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItems/UpdateItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "order/:category",
        element: <Order></Order>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      // admin only routes
      {
        path: 'addItems',
        element: <AdminRouter><AddItems></AddItems></AdminRouter>
      },
      {
        path: 'manageItems',
        element: <AdminRouter><ManageItems></ManageItems></AdminRouter>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRouter><UpdateItem></UpdateItem></AdminRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRouter><AllUsers></AllUsers></AdminRouter>
      }
    ]
  }
]);
