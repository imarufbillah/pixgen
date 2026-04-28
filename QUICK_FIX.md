# 🚀 Quick Fix - 3 Steps

## The Issue
OAuth works on localhost but fails on Vercel with "An unexpected error occurred"

## The Fix (3 Steps)

### Step 1️⃣: Add to Vercel Environment Variables
Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Add these 6 variables for **Production**:

```
BETTER_AUTH_SECRET=thDzjCxySVkk5N41dh4gt1F2bFbAhi54
BETTER_AUTH_URL=https://YOUR-DOMAIN.vercel.app
NEXT_PUBLIC_BETTER_AUTH_URL=https://YOUR-DOMAIN.vercel.app
MONGODB_URI=mongodb+srv://marufbillah:551OMPCu1Rx4bHOb@pixgencluster.fzebma6.mongodb.net/?appName=PixGenCluster
GOOGLE_CLIENT_ID=371053113598-qoecjdlbl73icsv1i652ghh038fl12ho.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
```

⚠️ **Replace `YOUR-DOMAIN` with your actual Vercel domain!**

### Step 2️⃣: Update Google OAuth
Go to: https://console.cloud.google.com/apis/credentials

Click your OAuth Client ID, add to **Authorized redirect URIs**:
```
https://YOUR-DOMAIN.vercel.app/api/auth/callback/google
```

Click **Save**

### Step 3️⃣: Deploy
```bash
git add .
git commit -m "fix: OAuth production configuration"
git push
```

OR click **Redeploy** in Vercel dashboard

---

## ✅ Done!
Wait for deployment to complete, then test OAuth on production.

---

## 🆘 Still Not Working?

### Check MongoDB Network Access
MongoDB Atlas → Network Access → Add `0.0.0.0/0`

### Check Browser Console
Press F12 → Console tab → Look for errors

### Verify Environment Variables
Visit: `https://YOUR-DOMAIN.vercel.app/api/auth/session`
Should return JSON (not 404)

---

## 📖 Need More Details?
- `PRODUCTION_FIX_CHECKLIST.md` - Detailed checklist
- `WHY_IT_FAILED.md` - Technical explanation
- `VERCEL_SETUP.md` - Complete setup guide
