import { RouteObject } from "react-router-dom";
import { HomeLayout } from "../features/series/layouts/home-layout";

export const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
  },
];
