# 🚀 Production OAuth Fix - Quick Checklist

## The Problem
Getting "An unexpected error occurred. Please try again." when trying to login with Google OAuth on Vercel production (works fine on localhost).

## Root Cause
The `auth-client.js` was using `process.env.BETTER_AUTH_URL` which doesn't work on the client-side in production. Client-side environment variables in Next.js must be prefixed with `NEXT_PUBLIC_`.

---

## ✅ Step-by-Step Fix

### Step 1: Local Changes (Already Done ✓)
- [x] Updated `src/app/lib/auth-client.js` to use `NEXT_PUBLIC_BETTER_AUTH_URL`
- [x] Added fallback to `window.location.origin` for production
- [x] Updated local `.env` file with `NEXT_PUBLIC_BETTER_AUTH_URL`

### Step 2: Vercel Environment Variables (YOU NEED TO DO THIS)

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings → Environment Variables**
4. Add these variables for **Production** environment:

   | Variable Name | Value |
   |--------------|-------|
   | `BETTER_AUTH_SECRET` | `thDzjCxySVkk5N41dh4gt1F2bFbAhi54` |
   | `BETTER_AUTH_URL` | `https://YOUR-DOMAIN.vercel.app` |
   | `NEXT_PUBLIC_BETTER_AUTH_URL` | `https://YOUR-DOMAIN.vercel.app` |
   | `MONGODB_URI` | `mongodb+srv://marufbillah:551OMPCu1Rx4bHOb@pixgencluster.fzebma6.mongodb.net/?appName=PixGenCluster` |
   | `GOOGLE_CLIENT_ID` | `371053113598-qoecjdlbl73icsv1i652ghh038fl12ho.apps.googleusercontent.com` |
   | `GOOGLE_CLIENT_SECRET` | `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` |

   **⚠️ IMPORTANT:** Replace `YOUR-DOMAIN` with your actual Vercel domain!

### Step 3: Update Google OAuth Settings (YOU NEED TO DO THIS)

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click on your OAuth 2.0 Client ID: `371053113598-qoecjdlbl73icsv1i652ghh038fl12ho`
3. Under **Authorized redirect URIs**, add:
   ```
   https://YOUR-DOMAIN.vercel.app/api/auth/callback/google
   ```
4. Keep the localhost URI for development:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
5. Click **Save**

### Step 4: Deploy to Vercel

Option A - Push new commit:
```bash
git add .
git commit -m "fix: OAuth configuration for production"
git push
```

Option B - Redeploy from Vercel dashboard:
1. Go to **Deployments** tab
2. Click **...** on latest deployment
3. Select **Redeploy**
4. Uncheck "Use existing Build Cache"

### Step 5: Test

1. Wait for deployment to complete
2. Visit your production site
3. Try signing in with Google
4. Check browser console for any errors

---

## 🔍 If Still Not Working

### Check MongoDB Network Access
1. Go to MongoDB Atlas: https://cloud.mongodb.com/
2. Navigate to **Network Access**
3. Make sure you have either:
   - `0.0.0.0/0` (allow from anywhere) - easier but less secure
   - OR add Vercel's IP ranges

### Check Browser Console
1. Open DevTools (F12)
2. Go to Console tab
3. Look for errors related to:
   - Network requests
   - CORS
   - OAuth redirects

### Verify Environment Variables
Create a temporary debug endpoint:

**`src/app/api/check-env/route.js`**
```javascript
export async function GET() {
  return Response.json({
    hasMongoUri: !!process.env.MONGODB_URI,
    hasGoogleId: !!process.env.GOOGLE_CLIENT_ID,
    hasGoogleSecret: !!process.env.GOOGLE_CLIENT_SECRET,
    hasBetterAuthSecret: !!process.env.BETTER_AUTH_SECRET,
    betterAuthUrl: process.env.BETTER_AUTH_URL,
    publicBetterAuthUrl: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
  });
}
```

Visit: `https://YOUR-DOMAIN.vercel.app/api/check-env`

**DELETE THIS FILE AFTER TESTING!**

---

## 📚 Additional Resources

- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Better Auth Documentation](https://www.better-auth.com/docs)

---

## ✨ What Changed

### Before (Broken in Production):
```javascript
const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
});
```

### After (Works in Production):
```javascript
const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 
          (typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"),
});
```

The key difference:
- `NEXT_PUBLIC_` prefix makes the variable available on the client-side
- Fallback to `window.location.origin` ensures it works even if env var is missing
- `typeof window !== "undefined"` check prevents SSR errors

---

Good luck! 🚀
