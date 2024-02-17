import { createContext, useContext, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import { signInWithEmail } from "../features/auth/services/auth-service";

interface ContextProps {
  session: Session | null;
}

const SessionContext = createContext<ContextProps>({
  session: null,
});

export function SessionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    console.log(session);
    return () => subscription.unsubscribe();
  }, []);
  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
}

//Custom hook para utilizar la session
export function useSessionContext() {
  return useContext(SessionContext);
}
