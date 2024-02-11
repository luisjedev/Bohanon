import { RouteObject } from "react-router-dom";
import { Login } from "../features/auth/routes/login.route";
import { Register } from "../features/auth/routes/register.route";
import { AuthLayout } from "../features/auth/layouts/auth.layout";

export const publicRoutes: RouteObject[] = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "singin",
        element: <Login />,
      },
      {
        path: "singup",
        element: <Register />,
      },
    ],
  },
];
