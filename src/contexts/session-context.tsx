import { createContext, useContext, useEffect, useState } from "react";
import { Session, User, WeakPassword } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import { signInWithEmail } from "../features/auth/services/auth-service";

interface ContextProps {
  session: Session | null;
  isLoading: Boolean;
  signin: (
    email: string,
    password: string
  ) => Promise<
    | {
        user: User;
        session: Session;
        weakPassword?: WeakPassword | undefined;
      }
    | undefined
  >;
}

const SessionContext = createContext<ContextProps>({
  session: null,
  isLoading: true,
  signin: signInWithEmail,
});

export function SessionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsLoading(false);
    });
    console.log(session);
    return () => subscription.unsubscribe();
  }, []);
  return (
    <SessionContext.Provider
      value={{ session, isLoading, signin: signInWithEmail }}
    >
      {children}
    </SessionContext.Provider>
  );
}

//Custom hook para utilizar la session
export function useSessionContext() {
  return useContext(SessionContext);
}
