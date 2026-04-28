"use client";

/**
 * Temporary Debug Component - DELETE AFTER FIXING PRODUCTION ISSUE
 * 
 * Add this to your signin page to check auth configuration:
 * import DebugAuthConfig from "@/components/DebugAuthConfig";
 * 
 * Then add in your component:
 * <DebugAuthConfig />
 */

export default function DebugAuthConfig() {
  const checkConfig = () => {
    console.log("=== Auth Configuration Debug ===");
    console.log("Window origin:", window.location.origin);
    console.log("NEXT_PUBLIC_BETTER_AUTH_URL:", process.env.NEXT_PUBLIC_BETTER_AUTH_URL);
    console.log("Current URL:", window.location.href);
    
    // Check if we can reach the auth endpoint
    fetch("/api/auth/session")
      .then(res => {
        console.log("Auth endpoint status:", res.status);
        return res.json();
      })
      .then(data => console.log("Auth endpoint response:", data))
      .catch(err => console.error("Auth endpoint error:", err));
  };

  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_DEBUG_MODE) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50">
      <p className="font-bold mb-2">Debug Mode</p>
      <button
        onClick={checkConfig}
        className="bg-white text-red-500 px-3 py-1 rounded text-sm font-semibold"
      >
        Check Auth Config
      </button>
      <p className="text-xs mt-2">Check browser console for details</p>
    </div>
  );
}
