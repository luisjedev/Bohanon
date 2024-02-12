import { RouteObject } from "react-router-dom";
import { HomeLayout } from "../features/misc/layouts/home.layout";

export const protectedRoutes: RouteObject[] = [
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <h1 className="bg-blue-500">Pantalla principal</h1>,
      },
      {
        path: "favorites",
        element: <h1>Favoritos</h1>,
      },
      {
        path: "profile",
        element: <h1>Perfil</h1>,
      },
    ],
  },
];
