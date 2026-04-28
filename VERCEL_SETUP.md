# Vercel Production Setup Guide

## 🔴 Issue: "An unexpected error occurred" on Vercel Production

This error occurs because environment variables aren't properly configured for production.

## ✅ Solution Steps

### 1. Update Your Local `.env` File

Add the client-side environment variable:

```env
# BetterAuth Credentials
BETTER_AUTH_SECRET=thDzjCxySVkk5N41dh4gt1F2bFbAhi54
BETTER_AUTH_URL=http://localhost:3000

# Client-side BetterAuth URL (for production)
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# MongoDB Connection String
MONGODB_URI=mongodb+srv://marufbillah:551OMPCu1Rx4bHOb@pixgencluster.fzebma6.mongodb.net/?appName=PixGenCluster

# Google OAuth Credentials
GOOGLE_CLIENT_ID=371053113598-qoecjdlbl73icsv1i652ghh038fl12ho.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
```

### 2. Configure Vercel Environment Variables

Go to your Vercel project dashboard:

1. Navigate to: **Project Settings → Environment Variables**

2. Add these variables for **Production, Preview, and Development**:

   ```
   BETTER_AUTH_SECRET=thDzjCxySVkk5N41dh4gt1F2bFbAhi54
   
   BETTER_AUTH_URL=https://your-domain.vercel.app
   
   NEXT_PUBLIC_BETTER_AUTH_URL=https://your-domain.vercel.app
   
   MONGODB_URI=mongodb+srv://marufbillah:551OMPCu1Rx4bHOb@pixgencluster.fzebma6.mongodb.net/?appName=PixGenCluster
   
   GOOGLE_CLIENT_ID=371053113598-qoecjdlbl73icsv1i652ghh038fl12ho.apps.googleusercontent.com
   
   GOOGLE_CLIENT_SECRET=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
   ```

   **Important:** Replace `https://your-domain.vercel.app` with your actual Vercel domain!

### 3. Update Google OAuth Authorized Redirect URIs

Go to [Google Cloud Console](https://console.cloud.google.com/):

1. Navigate to: **APIs & Services → Credentials**
2. Click on your OAuth 2.0 Client ID
3. Under **Authorized redirect URIs**, add:
   ```
   https://your-domain.vercel.app/api/auth/callback/google
   ```
4. Also keep the localhost URI for development:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
5. Click **Save**

### 4. Redeploy on Vercel

After adding environment variables:

1. Go to **Deployments** tab
2. Click the **three dots** on the latest deployment
3. Select **Redeploy**
4. Make sure to check **"Use existing Build Cache"** is OFF

OR simply push a new commit to trigger a fresh deployment.

## 🔍 Debugging Tips

### Check if environment variables are set:

Add this temporary API route to verify:

**`src/app/api/debug/route.js`** (DELETE AFTER TESTING):
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

Visit: `https://your-domain.vercel.app/api/debug`

### Check browser console:

Open DevTools → Console and look for:
- Network errors (401, 403, 500)
- CORS errors
- OAuth redirect errors

### Common Issues:

1. **"redirect_uri_mismatch"**: Google OAuth redirect URI not configured correctly
2. **"Invalid client"**: Google Client ID/Secret mismatch
3. **MongoDB connection timeout**: Check MongoDB Network Access (allow Vercel IPs or use 0.0.0.0/0)
4. **CORS errors**: Make sure BETTER_AUTH_URL matches your domain exactly

## 📝 Why This Happens

- **Client-side code** in Next.js can only access env vars prefixed with `NEXT_PUBLIC_`
- **Server-side code** can access all env vars
- The `auth-client.js` runs on the client, so it needs `NEXT_PUBLIC_BETTER_AUTH_URL`
- Vercel doesn't automatically copy your local `.env` file

## ✅ Verification Checklist

- [ ] Added `NEXT_PUBLIC_BETTER_AUTH_URL` to local `.env`
- [ ] Added all env vars to Vercel dashboard
- [ ] Updated `BETTER_AUTH_URL` to production domain in Vercel
- [ ] Updated Google OAuth redirect URIs
- [ ] Redeployed on Vercel
- [ ] Tested OAuth login on production
- [ ] Removed debug API route (if created)

## 🎯 Expected Result

After following these steps, OAuth should work correctly on Vercel production!
