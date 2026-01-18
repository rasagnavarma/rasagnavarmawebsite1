# Netlify Deployment Fix Instructions

## Problem
The site is still showing API calls even though the code has been updated to use static mock data.

## Root Cause
Netlify dashboard settings may be overriding the `netlify.toml` file, OR the build is using cached files.

## Solution Steps

### Step 1: Check Netlify Dashboard Build Settings
1. Go to https://app.netlify.com
2. Select your site (rasagnavarma.com)
3. Click **"Site settings"** (gear icon, top right)
4. Go to **"Build & deploy"** → **"Build settings"**
5. **IMPORTANT**: Check these settings:
   - **Base directory**: Should be **EMPTY** or set to `.`
   - **Build command**: Should be **EMPTY** (let netlify.toml handle it) OR match: `cd frontend && yarn install --force && yarn build`
   - **Publish directory**: Should be **EMPTY** (let netlify.toml handle it) OR set to `frontend/build`
6. If any settings are different, **DELETE THEM** or set them to match above
7. Click **"Save"**

### Step 2: Clear Build Cache
1. In the same "Build settings" page
2. Scroll to **"Build cache"** section
3. Click **"Clear cache and retry deploy"**
4. Wait 2-5 minutes for rebuild

### Step 3: Verify Build Logs
1. Go to **"Deploys"** tab
2. Click the latest deploy
3. Click **"View build log"**
4. Verify you see:
   - `cd frontend && rm -rf node_modules/.cache build .cache`
   - `yarn install --force`
   - `yarn build`
   - Build should succeed
5. Check what files are being published

### Step 4: Test the Site
1. Visit https://rasagnavarma.com/version.txt
   - Should show: `STATIC_SITE_VERSION_2025_01_15_NO_API_CALLS`
2. Open https://rasagnavarma.com
3. Open DevTools (F12) → Console
4. Should see: "Static site loaded - using mock data only"
5. Should NOT see any API 404 errors

## If Still Not Working

### Option A: Manual Build Command Override
In Netlify dashboard → Build settings:
- Set Build command to: `cd frontend && rm -rf node_modules/.cache build .cache && yarn install --force && yarn build`
- Set Publish directory to: `frontend/build`
- Clear cache and rebuild

### Option B: Check Branch Settings
1. Go to "Build & deploy" → "Continuous Deployment"
2. Verify it's building from `main` branch
3. Verify the branch is connected to GitHub

### Option C: Disable Build Caching
1. Go to "Build & deploy" → "Build settings"
2. Look for "Dependencies cache" or "Build cache"
3. Disable it temporarily
4. Rebuild

## Verification
The local code is 100% correct - no API calls exist. The issue is Netlify configuration or caching.
