"use client";

import { createContext, useContext } from "react";
import {
  useSession as useBetterAuthSession,
  authClient,
} from "@/app/lib/auth-client";

const SessionContext = createContext({
  session: null,
  isPending: true,
  signOut: async () => {},
  refreshSession: () => {},
});

export function SessionProvider({ children }) {
  const { data: session, isPending } = useBetterAuthSession();

  const signOut = async () => {
    try {
      await authClient.signOut();
      return { success: true };
    } catch (error) {
      console.error("Sign out error:", error);
      return { success: false, error };
    }
  };

  const refreshSession = () => {};

  const value = {
    session,
    isPending,
    signOut,
    refreshSession,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}
