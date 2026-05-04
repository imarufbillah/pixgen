# Deployment Guide - PixGen

This guide will help you deploy PixGen to production on Vercel.

## Prerequisites

- A Vercel account ([sign up here](https://vercel.com/signup))
- A MongoDB Atlas account ([sign up here](https://www.mongodb.com/cloud/atlas/register))
- (Optional) Google OAuth credentials for social login

## Step 1: Prepare Your Repository

1. Push your code to GitHub, GitLab, or Bitbucket
2. Ensure all files are committed, especially:
   - `public/data/images.json`
   - All component files
   - Configuration files

## Step 2: Set Up MongoDB

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a new cluster (free tier is fine)
3. Create a database user with read/write permissions
4. Whitelist all IP addresses (0.0.0.0/0) for Vercel
5. Get your connection string (should look like):
   ```
   mongodb+srv://username:password@cluster.mongodb.net/?appName=YourApp
   ```

## Step 3: (Optional) Set Up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `https://your-domain.vercel.app/api/auth/callback/google`
   - `http://localhost:3000/api/auth/callback/google` (for development)
6. Save your Client ID and Client Secret

## Step 4: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your Git repository
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next

### Option B: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## Step 5: Configure Environment Variables

In your Vercel project dashboard, go to **Settings** → **Environment Variables** and add:

### Required Variables

```env
# BetterAuth Configuration
BETTER_AUTH_SECRET=<generate-a-secure-random-string>
BETTER_AUTH_URL=https://your-domain.vercel.app
NEXT_PUBLIC_BETTER_AUTH_URL=https://your-domain.vercel.app

# Base URL (CRITICAL for data fetching)
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?appName=YourApp
```

### Optional Variables (for Google OAuth)

```env
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### How to Generate BETTER_AUTH_SECRET

```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Or using OpenSSL
openssl rand -hex 32
```

## Step 6: Redeploy

After setting environment variables:

1. Go to **Deployments** tab
2. Click the three dots on the latest deployment
3. Select **Redeploy**
4. Check "Use existing Build Cache" (optional)
5. Click **Redeploy**

**Important:** Environment variables only take effect after redeployment!

## Step 7: Verify Deployment

1. Visit your deployed site: `https://your-domain.vercel.app`
2. Check that images load correctly on the home page
3. Navigate to `/photos` and verify the gallery loads
4. Click on individual photos to test detail pages
5. Test authentication (sign up/sign in)
6. Check profile page functionality

### Common Issues

#### Images not loading
- ✅ Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- ✅ Check browser console for fetch errors
- ✅ Ensure `public/data/images.json` exists in your repository

#### Authentication not working
- ✅ Verify all `BETTER_AUTH_*` variables are set
- ✅ Check MongoDB connection string is correct
- ✅ Ensure MongoDB allows connections from all IPs (0.0.0.0/0)
- ✅ For Google OAuth, verify redirect URIs match your domain

#### Build failures
- ✅ Check build logs in Vercel dashboard
- ✅ Ensure all dependencies are in `package.json`
- ✅ Verify Node.js version compatibility

## Step 8: Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update environment variables with new domain:
   - `BETTER_AUTH_URL`
   - `NEXT_PUBLIC_BETTER_AUTH_URL`
   - `NEXT_PUBLIC_BASE_URL`
5. Update Google OAuth redirect URIs (if using)
6. Redeploy

## Step 9: SEO Setup

### Submit to Search Engines

1. **Google Search Console**
   - Add your site: https://search.google.com/search-console
   - Verify ownership
   - Submit sitemap: `https://your-domain.vercel.app/sitemap.xml`

2. **Bing Webmaster Tools**
   - Add your site: https://www.bing.com/webmasters
   - Verify ownership
   - Submit sitemap

### Add Analytics (Optional)

1. **Vercel Analytics**
   - Go to **Analytics** tab in Vercel dashboard
   - Enable Web Analytics

2. **Google Analytics**
   - Create a GA4 property
   - Add tracking code to `src/app/layout.js`

## Step 10: Monitor & Maintain

- Check Vercel deployment logs regularly
- Monitor MongoDB usage in Atlas dashboard
- Review Vercel Analytics for performance insights
- Keep dependencies updated

## Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `BETTER_AUTH_SECRET` | Yes | Secret key for auth | `abc123...` (32+ chars) |
| `BETTER_AUTH_URL` | Yes | Production URL | `https://your-domain.vercel.app` |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Yes | Public auth URL | `https://your-domain.vercel.app` |
| `NEXT_PUBLIC_BASE_URL` | Yes | Base URL for API | `https://your-domain.vercel.app` |
| `MONGODB_URI` | Yes | MongoDB connection | `mongodb+srv://...` |
| `GOOGLE_CLIENT_ID` | No | Google OAuth ID | `123-abc.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | No | Google OAuth secret | `GOCSPX-...` |

## Troubleshooting

### Data not fetching in production

The most common issue is incorrect `NEXT_PUBLIC_BASE_URL`. Make sure:

1. It's set in Vercel environment variables
2. It matches your actual domain (no trailing slash)
3. You've redeployed after setting it

### Authentication errors

1. Check MongoDB connection:
   ```bash
   # Test connection locally
   mongosh "your-connection-string"
   ```

2. Verify environment variables are set correctly
3. Check Vercel function logs for errors

### Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Better Auth Documentation](https://www.better-auth.com/docs)

---

**Deployment Checklist:**

- [ ] Code pushed to Git repository
- [ ] MongoDB cluster created and configured
- [ ] (Optional) Google OAuth credentials obtained
- [ ] Project imported to Vercel
- [ ] All environment variables set
- [ ] Redeployed after setting variables
- [ ] Site verified and tested
- [ ] Custom domain configured (optional)
- [ ] Sitemap submitted to search engines
- [ ] Analytics configured (optional)

**Your site should now be live! 🎉**
