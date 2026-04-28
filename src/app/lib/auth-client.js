import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
});

export { authClient };
export const { signIn, signUp, useSession } = authClient;
