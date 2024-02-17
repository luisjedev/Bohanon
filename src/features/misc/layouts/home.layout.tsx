import React, { useEffect } from "react";
import { LoadingScreen } from "../components/loading-screen";
import { Outlet } from "react-router-dom";
import { useSessionContext } from "../../../contexts/session-context";
import { useNavigate } from "react-router-dom";

export function HomeLayout() {
  const { session } = useSessionContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/auth/signin");
    }
  }, [session]);

  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </React.Suspense>
  );
}
