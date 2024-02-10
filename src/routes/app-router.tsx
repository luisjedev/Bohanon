import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { protectedRoutes } from "./protected-routes";
import { publicRoutes } from "./public-routes";

export function AppRoutes() {
  const routes = [...protectedRoutes, ...publicRoutes];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router}></RouterProvider>;
}
