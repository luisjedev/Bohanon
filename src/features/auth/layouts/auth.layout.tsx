import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoadingScreen } from "../../misc/components/loading-screen";
import { useSessionContext } from "../../../contexts/session-context";

export function AuthLayout() {
  const { session } = useSessionContext();

  if (session) {
    return <Navigate to={"/"} />;
  }

  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </React.Suspense>
  );
}
