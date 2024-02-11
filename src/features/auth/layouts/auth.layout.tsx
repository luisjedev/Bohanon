import React from "react";
import { Outlet } from "react-router-dom";
import { LoadingScreen } from "../../misc/components/loading-screen";

export function AuthLayout() {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </React.Suspense>
  );
}
