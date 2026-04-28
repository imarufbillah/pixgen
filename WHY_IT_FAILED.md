# Why OAuth Failed on Vercel Production

## 📊 The Flow

### What Happens When User Clicks "Sign in with Google"

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User clicks "Sign in with Google" button                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. Browser (Client-Side) runs auth-client.js               │
│    Tries to read: process.env.BETTER_AUTH_URL              │
└─────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────┴───────────────────┐
        │                                       │
        ↓                                       ↓
┌──────────────────┐                  ┌──────────────────┐
│   LOCALHOST      │                  │  VERCEL PROD     │
│   ✅ Works       │                  │  ❌ Fails        │
├──────────────────┤                  ├──────────────────┤
│ Reads .env file  │                  │ Variable is      │
│ Gets:            │                  │ UNDEFINED!       │
│ localhost:3000   │                  │                  │
└──────────────────┘                  └──────────────────┘
        │                                       │
        ↓                                       ↓
┌──────────────────┐                  ┌──────────────────┐
│ Makes request to │                  │ Makes request to │
│ localhost:3000   │                  │ undefined        │
│ ✅ Success!      │                  │ ❌ ERROR!        │
└──────────────────┘                  └──────────────────┘
```

## 🔴 Why It Failed

### The Problem with `process.env.BETTER_AUTH_URL`

In Next.js, environment variables work differently based on where they're used:

| Location | Server-Side | Client-Side |
|----------|-------------|-------------|
| `process.env.VARIABLE` | ✅ Works | ❌ Undefined |
| `process.env.NEXT_PUBLIC_VARIABLE` | ✅ Works | ✅ Works |

### Your Code (Before Fix)

```javascript
// src/app/lib/auth-client.js
const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  //       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //       This is UNDEFINED on client-side in production!
});
```

### What Happened in Production

```javascript
// On Vercel Production (Client-Side)
process.env.BETTER_AUTH_URL  // undefined ❌
|| "http://localhost:3000"   // Falls back to localhost ❌

// Result: Tries to connect to localhost from user's browser!
// But localhost on user's machine ≠ your Vercel server
```

## ✅ The Fix

### Updated Code

```javascript
// src/app/lib/auth-client.js
const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 
          (typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"),
  //       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //       This WORKS on client-side! ✅
});
```

### Why This Works

```javascript
// On Vercel Production (Client-Side)
process.env.NEXT_PUBLIC_BETTER_AUTH_URL  // "https://your-app.vercel.app" ✅
|| window.location.origin                 // Fallback: "https://your-app.vercel.app" ✅

// Result: Correctly connects to your Vercel server!
```

## 🎯 Key Takeaways

### 1. Environment Variable Prefixes Matter

```javascript
// ❌ DON'T USE in client-side code
process.env.API_KEY
process.env.DATABASE_URL
process.env.SECRET_KEY

// ✅ USE in client-side code
process.env.NEXT_PUBLIC_API_URL
process.env.NEXT_PUBLIC_APP_URL
```

### 2. Localhost vs Production

| Environment | What "localhost" means |
|-------------|------------------------|
| Development | Your computer (works ✅) |
| Production | User's computer (fails ❌) |

### 3. Vercel Environment Variables

Vercel doesn't automatically:
- ❌ Copy your local `.env` file
- ❌ Make variables available on client-side
- ❌ Update Google OAuth settings

You must manually:
- ✅ Add variables in Vercel dashboard
- ✅ Use `NEXT_PUBLIC_` prefix for client-side
- ✅ Update OAuth redirect URIs

## 🔍 How to Debug Similar Issues

### 1. Check if it's a client-side issue

```javascript
// Add this temporarily to your component
console.log("Client-side env:", process.env.NEXT_PUBLIC_BETTER_AUTH_URL);
console.log("Window origin:", window.location.origin);
```

### 2. Check if it's a server-side issue

```javascript
// Add this to an API route
export async function GET() {
  return Response.json({
    serverEnv: process.env.BETTER_AUTH_URL,
    hasSecret: !!process.env.BETTER_AUTH_SECRET,
  });
}
```

### 3. Common Error Messages

| Error Message | Likely Cause |
|---------------|--------------|
| "An unexpected error occurred" | Client can't reach auth server |
| "redirect_uri_mismatch" | Google OAuth URI not configured |
| "Invalid client" | Wrong Google credentials |
| "Network error" | CORS or connectivity issue |

## 📚 Learn More

- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Better Auth Configuration](https://www.better-auth.com/docs/configuration)

---

**Remember:** Client-side code runs in the user's browser, not on your server!
