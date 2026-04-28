/**
 * Examples of using the useOAuth hook
 */

import { useOAuth } from "./useOAuth";

// Example 1: Basic usage with Google
function BasicExample() {
  const { signInWithOAuth, isLoading } = useOAuth();

  return (
    <button 
      onClick={() => signInWithOAuth("google")}
      disabled={isLoading}
    >
      {isLoading ? "Signing in..." : "Sign in with Google"}
    </button>
  );
}

// Example 2: With custom redirect
function CustomRedirectExample() {
  const { signInWithOAuth, isLoading } = useOAuth({
    redirectTo: "/dashboard",
  });

  return (
    <button onClick={() => signInWithOAuth("google")}>
      Sign in with Google
    </button>
  );
}

// Example 3: With success and error callbacks
function WithCallbacksExample() {
  const { signInWithOAuth, isLoading } = useOAuth({
    redirectTo: "/profile",
    onSuccess: (data) => {
      console.log("User signed in:", data);
      // Additional logic after successful sign in
    },
    onError: (error) => {
      console.error("Sign in failed:", error);
      // Additional error handling
    },
  });

  return (
    <button onClick={() => signInWithOAuth("google")}>
      Sign in with Google
    </button>
  );
}

// Example 4: Multiple OAuth providers
function MultipleProvidersExample() {
  const { signInWithOAuth, isLoading } = useOAuth({
    redirectTo: "/",
  });

  return (
    <div>
      <button 
        onClick={() => signInWithOAuth("google")}
        disabled={isLoading}
      >
        Sign in with Google
      </button>
      
      <button 
        onClick={() => signInWithOAuth("github")}
        disabled={isLoading}
      >
        Sign in with GitHub
      </button>
      
      <button 
        onClick={() => signInWithOAuth("facebook")}
        disabled={isLoading}
      >
        Sign in with Facebook
      </button>
    </div>
  );
}

// Example 5: With async/await pattern
function AsyncExample() {
  const { signInWithOAuth } = useOAuth();

  const handleSignIn = async () => {
    const result = await signInWithOAuth("google");
    
    if (result.success) {
      console.log("Successfully signed in:", result.data);
    } else {
      console.error("Sign in failed:", result.error);
    }
  };

  return (
    <button onClick={handleSignIn}>
      Sign in with Google
    </button>
  );
}
