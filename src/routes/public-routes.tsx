import { RouteObject } from "react-router-dom";
import { Login } from "../features/auth/routes/login.route";
import { Register } from "../features/auth/routes/register.route";

export const publicRoutes: RouteObject[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
];
