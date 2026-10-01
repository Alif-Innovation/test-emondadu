# 🚀 Quick Vercel Deployment Guide

Deploy your Emondadu dashboard to Vercel in 5 minutes!

## Option 1: Easiest - Vercel CLI (2 minutes)

```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Login to Vercel (opens browser)
vercel login

# 3. Deploy from project directory
cd /path/to/emondadu
vercel

# 4. Answer the prompts:
# - Set up and deploy? → yes
# - Which scope? → Your team/username
# - Link to existing project? → no
# - Project name? → emondadu
# - Directory? → ./
# - Override settings? → no

# ✅ Done! Your app is live!
```

You'll get a URL like: `https://emondadu.vercel.app`

---

## Option 2: GitHub Integration (3 minutes)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "chore: ready for vercel deployment"
git push origin claude/file-redesign-q3jtz0
```

### Step 2: Deploy via Vercel Dashboard
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Select branch: `claude/file-redesign-q3jtz0`
5. Click "Import"

### Step 3: Configure
- **Framework**: Vite (auto-detected)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)

### Step 4: Add Environment Variables
If your app needs environment variables:
1. Click "Environment Variables"
2. Add from `.env.example`:
   ```
   VITE_API_URL = https://your-api.com
   ```
3. Click "Deploy"

### Step 5: Done! 🎉
Your app is live! Get the URL from the deployment page.

---

## 🔑 Required Secrets for GitHub Actions (Optional)

If you want automatic deployments on push:

1. Go to your GitHub repo → Settings → Secrets and Variables → Actions
2. Add these secrets:
   ```
   VERCEL_TOKEN        (from vercel.com/account/tokens)
   VERCEL_ORG_ID       (from vercel dashboard)
   VERCEL_PROJECT_ID   (from vercel project settings)
   ```

3. Then every push to `main` will auto-deploy! ✨

---

## 📋 Pre-Deployment Checklist

Before going live:

```bash
# 1. Check code quality
npm run lint

# 2. Test build locally
npm run build
npm run preview

# 3. Verify no errors in console

# 4. Test responsive design on mobile
```

---

## 🌐 Custom Domain (Optional)

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel Dashboard → Project Settings → Domains
3. Add your domain
4. Update DNS records (Vercel will show you how)
5. Done! SSL certificate is automatic

---

## 📊 After Deployment

### Monitor Your App
```bash
# View deployments
vercel ls

# View live logs
vercel logs

# Rollback if needed
vercel rollback
```

### Check Performance
1. Visit Vercel Dashboard
2. Click your project
3. Analytics tab shows:
   - Page load speed
   - Web Vitals
   - Error rates
   - Top paths

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Test locally first
npm run lint:fix
npm run build
```

### Environment Variables Not Working
- Make sure they start with `VITE_`
- Add them in Vercel Dashboard → Environment Variables
- Redeploy after adding variables

### 404 on Routes
- Already fixed in `vercel.json`
- It rewrites all routes to `index.html`

---

## 💡 Tips

✅ **Auto-deploy from GitHub** - Every push = instant deployment
✅ **Preview URLs** - Get preview links for every PR
✅ **Instant rollbacks** - One-click rollback if something breaks
✅ **Free SSL** - HTTPS automatically enabled
✅ **Analytics included** - Monitor performance for free
✅ **Edge Network** - Your app served from ~300 data centers globally

---

## 📱 Test Your Deployment

After deploying:

```bash
# Visit your Vercel URL
https://emondadu.vercel.app

# Test on mobile
# Use any mobile device or inspect element → device toolbar

# Check performance
# Lighthouse audit: Chrome DevTools → Lighthouse tab
```

---

## 🔒 Environment Variables Reference

### Required for Most Apps
```env
VITE_API_URL=https://api.yourdomain.com
```

### Optional
```env
VITE_APP_NAME=Emondadu
VITE_REGION=asia-southeast
VITE_TIMEZONE=Asia/Jakarta
VITE_ENABLE_ANALYTICS=true
```

See `.env.example` for complete list.

---

## 🎓 Next Steps

1. ✅ Choose deployment option (CLI or GitHub)
2. ✅ Run deployment commands
3. ✅ Visit your live URL
4. ✅ Test functionality
5. ✅ Share with team! 🎉

---

**Need more details?**
See `VERCEL_DEPLOYMENT.md` for comprehensive guide.

**Status**: ✅ Ready to Deploy - Pick Option 1 or 2 above and go live!
