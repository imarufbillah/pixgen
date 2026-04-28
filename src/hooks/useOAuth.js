import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/app/lib/auth-client";

/**
 * Custom hook for handling OAuth authentication
 * @param {Object} options - Configuration options
 * @param {string} options.redirectTo - Path to redirect after successful authentication (default: "/")
 * @param {Function} options.onSuccess - Callback function on successful authentication
 * @param {Function} options.onError - Callback function on authentication error
 * @returns {Object} - OAuth handler function and loading state
 */
export function useOAuth(options = {}) {
  const {
    redirectTo = "/",
    onSuccess,
    onError,
  } = options;

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handle OAuth sign in with specified provider
   * @param {string} provider - OAuth provider name (e.g., "google", "github")
   */
  const signInWithOAuth = async (provider) => {
    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.social({
        provider,
      });

      if (error) {
        console.error(`OAuth error (${provider}):`, error);
        toast.error("Authentication failed", {
          description: error.message || `Failed to sign in with ${provider}`,
        });

        if (onError) {
          onError(error);
        }
        return { success: false, error };
      }

      if (data) {
        toast.success("Welcome!", {
          description: "You have been signed in successfully.",
        });

        if (onSuccess) {
          onSuccess(data);
        }

        // Redirect to specified path
        router.push(redirectTo);
        return { success: true, data };
      }
    } catch (error) {
      console.error(`OAuth sign in error (${provider}):`, error);
      
      // More detailed error logging for debugging
      if (error.message) {
        console.error("Error message:", error.message);
      }
      if (error.response) {
        console.error("Error response:", error.response);
      }
      
      toast.error("Authentication failed", {
        description: "An unexpected error occurred. Please try again.",
      });

      if (onError) {
        onError(error);
      }
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signInWithOAuth,
    isLoading,
  };
}
