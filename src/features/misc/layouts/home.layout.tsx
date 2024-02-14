import React from "react";
import { LoadingScreen } from "../components/loading-screen";
import { Outlet } from "react-router-dom";
import { useSessionContext } from "../../../contexts/session-context";
import { Navigate } from "react-router-dom";

export function HomeLayout() {
  const { session } = useSessionContext();

  if (!session) {
    return <Navigate to={"/auth/signin"} />;
  }
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </React.Suspense>
  );
}
