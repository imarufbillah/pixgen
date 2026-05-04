import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
});

export { authClient };
export const { signIn, signUp, useSession, updateUser } = authClient;
