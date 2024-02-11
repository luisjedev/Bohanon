import React from "react";
import { LoadingScreen } from "../components/loading-screen";
import { Outlet } from "react-router-dom";

export function HomeLayout() {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </React.Suspense>
  );
}
