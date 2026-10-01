# Vercel Deployment Guide for Emondadu

Complete guide to deploy your Emondadu React dashboard to Vercel with production-ready configuration.

## 📋 Prerequisites

Before deploying, ensure you have:
- [ ] Vercel account (free at [vercel.com](https://vercel.com))
- [ ] Git repository (GitHub, GitLab, or Bitbucket)
- [ ] Node.js 18+ installed locally
- [ ] npm or yarn package manager

## 🚀 Quick Deployment (5 minutes)

### Method 1: Vercel CLI (Easiest)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. Follow the prompts and you're done! 🎉

### Method 2: GitHub Integration (Recommended)

1. **Push your code to GitHub:**
```bash
git push origin claude/file-redesign-q3jtz0
```

2. **Visit [vercel.com/new](https://vercel.com/new)**

3. **Select "Import Git Repository"**
   - Connect your GitHub account
   - Select your repository
   - Select branch: `claude/file-redesign-q3jtz0`

4. **Configure Project:**
   - Framework: `Vite`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install`

5. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add variables from `.env.example`:
     - `VITE_API_URL`: Your API endpoint
     - `VITE_APP_NAME`: Emondadu
     - Others as needed

6. **Deploy!** Click "Deploy" button

---

## 📁 Project Structure for Vercel

```
emondadu/
├── src/                    # React source code
├── public/                 # Static assets (optional)
├── vercel.json            # Vercel configuration ✅
├── vite.config.js         # Build configuration ✅
├── package.json           # Dependencies ✅
├── .env.example           # Environment template ✅
└── dist/                  # Build output (created during build)
```

## 🔧 Configuration Details

### vercel.json Breakdown

```json
{
  "buildCommand": "npm run build",      // How to build
  "installCommand": "npm install",      // How to install deps
  "outputDirectory": "dist",             // Where built files go
  "framework": "vite",                   // Framework type
  "env": {                               // Environment variables
    "VITE_API_URL": "https://api..."
  }
}
```

### Available Regions

Configure in `vercel.json`:
```json
"regions": ["sin1", "sfo1", "iad1"]
```

- **sin1** - Singapore (Asia Southeast)
- **sfo1** - San Francisco (US West)
- **iad1** - Virginia (US East)
- **arn1** - Stockholm
- **cdg1** - Paris
- **cle1** - Cleveland
- **kix1** - Osaka

Choose regions closest to your users.

---

## 🌍 Environment Variables

### Production (.env)

Set in Vercel Dashboard → Project Settings → Environment Variables

```env
VITE_API_URL=https://api.production.com
VITE_REGION=asia-southeast
VITE_TIMEZONE=Asia/Jakarta
VITE_ENABLE_ANALYTICS=true
```

### Development (.env.local)

Local file (never commit):
```env
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true
```

### Staging (Optional)

Create separate environment:
```bash
vercel --environment staging
```

---

## 📊 Deployment Checklist

Before going live:

### Code Quality
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - builds successfully
- [ ] Test locally: `npm run preview`
- [ ] All components render correctly
- [ ] No console errors/warnings

### Configuration
- [ ] `vercel.json` configured correctly
- [ ] Environment variables set in Vercel dashboard
- [ ] API endpoints are correct
- [ ] Firebase/DB credentials configured (if needed)

### Performance
- [ ] Lighthouse score >90
- [ ] Build time <2 minutes
- [ ] Initial load <3 seconds
- [ ] Mobile responsive tested

### Security
- [ ] No API keys in code
- [ ] HTTPS enabled (automatic)
- [ ] CORS configured if needed
- [ ] Security headers set in vercel.json

---

## 🔐 Security Best Practices

### 1. **Protect Sensitive Data**
Never commit sensitive information:
```bash
# Create .gitignore entries
.env
.env.local
.env.*.local
.env.production
```

### 2. **Use Secret Environment Variables**
For sensitive data, use Vercel Secrets:
```bash
vercel env add VITE_API_KEY
```

### 3. **Security Headers**
Already configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### 4. **CORS Configuration**
If your API is on different domain:
```json
"headers": [
  {
    "source": "/api/(.*)",
    "headers": [
      {
        "key": "Access-Control-Allow-Origin",
        "value": "https://yourdomain.com"
      }
    ]
  }
]
```

---

## 🚀 Deployment Steps by Method

### Method 1: CLI (Recommended for Simple Projects)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy from project root
vercel

# 4. First deployment asks:
# - Set up and deploy "~/emondadu"? → yes
# - Which scope? → your-team/username
# - Link to existing project? → no (first time)
# - What's your project's name? → emondadu
# - In which directory is your code? → ./
# - Want to override the settings? → no

# 5. Live! Get your URL
```

### Method 2: GitHub + Vercel Dashboard (Recommended for Teams)

```bash
# 1. Push to GitHub
git add .
git commit -m "chore: prepare for vercel deployment"
git push origin claude/file-redesign-q3jtz0

# 2. Go to vercel.com/new
# 3. Import your GitHub repository
# 4. Select branch: claude/file-redesign-q3jtz0
# 5. Configure settings:
#    - Framework: Vite
#    - Build Command: npm run build
#    - Install Command: npm install
#    - Output Directory: dist
# 6. Add environment variables
# 7. Click Deploy
```

### Method 3: GitLab/Bitbucket

Same as GitHub but select GitLab or Bitbucket in Vercel dashboard.

---

## 🔄 Continuous Deployment (CD)

Once linked to GitHub:

1. **Auto-Deploy on Push**
   - Every push to main branch → auto-deploys
   - Preview URLs for PRs

2. **Configure Auto-Deploy Settings**
   - Vercel Dashboard → Project Settings
   - Git → Deploy on Push
   - Select branches to auto-deploy

3. **Rollback Deployments**
   - Vercel Dashboard → Deployments
   - Click any previous deployment → "Promote to Production"

---

## 📈 Monitoring & Analytics

### View Deployment Logs
```bash
# Real-time logs
vercel logs

# Function logs
vercel logs --follow

# Tail specific function
vercel logs [function-name]
```

### Performance Monitoring
1. Visit Vercel Dashboard
2. Project → Analytics
3. View:
   - Page Performance
   - Web Vitals
   - Request/Response times
   - Edge Network cache hits

### Error Tracking
1. Dashboard → Deployments
2. Click active deployment
3. View build logs and runtime errors

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Command npm run build failed"**
```bash
# Local test
npm run lint:fix
npm run build

# Check errors locally first
npm run dev
```

**Solution:**
- Run `npm run lint:fix` locally
- Ensure `.env` variables are set
- Check Node.js version (need 18+)

### Environment Variables Not Working

**Issue: VITE_API_URL is undefined**
```bash
# Vercel must have .env variables set
# They must start with VITE_ to be exposed to client

# Check locally
echo $VITE_API_URL

# Set in Vercel dashboard
# Project Settings → Environment Variables
```

### Deployment Hangs

**Issue: Deployment takes >10 minutes**
```bash
# Check build size
npm run build
du -sh dist/

# Optimize if >5MB
npm install --save-dev compression-webpack-plugin
```

### 404 on Routes

**Issue: Refreshing a route shows 404**
```json
// Already configured in vercel.json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

---

## 📞 Getting Help

### Vercel Support
- Docs: [vercel.com/docs](https://vercel.com/docs)
- Community: [vercel.com/community](https://vercel.com/community)
- Status: [status.vercel.com](https://status.vercel.com)

### Common Commands

```bash
# View all deployments
vercel ls

# View specific deployment
vercel inspect [deployment-url]

# Rollback to previous
vercel rollback

# Remove a deployment
vercel rm [deployment-id]

# Show current project info
vercel project list
```

---

## 📊 Post-Deployment Checklist

After deploying:

- [ ] Visit your live URL
- [ ] Test all features
- [ ] Check mobile responsiveness
- [ ] Verify API connections
- [ ] Monitor error logs
- [ ] Set up Slack/Email notifications
- [ ] Configure custom domain (if needed)
- [ ] Enable branch protection
- [ ] Set up CI/CD checks
- [ ] Document deployment URL

---

## 🎯 Custom Domain Setup

1. **Purchase domain** (Vercel, Namecheap, GoDaddy, etc.)

2. **Add to Vercel:**
   - Dashboard → Project Settings → Domains
   - Enter domain name
   - Follow DNS configuration steps

3. **Update DNS Records:**
   ```
   Type: A
   Name: @
   Value: 76.76.19.165
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **SSL Certificate:**
   - Automatic with Vercel (free)
   - Ready in 5-15 minutes

---

## 📈 Performance Tips

### Optimize Build
```bash
# Check bundle size
npm run build -- --analyze

# Optimize imports
# Use dynamic imports for large components
const Dashboard = lazy(() => import('./Dashboard'))
```

### Cache Strategy
Configure in `vercel.json`:
```json
"headers": [
  {
    "source": "/(.*)",
    "headers": [
      {
        "key": "Cache-Control",
        "value": "public, max-age=3600"
      }
    ]
  }
]
```

### Image Optimization
Use Vercel Image Optimization:
```jsx
// Coming soon with Next.js features
import Image from 'next/image'
```

---

## 🎓 Next Steps

1. ✅ Review this guide
2. ✅ Test locally: `npm run build && npm run preview`
3. ✅ Set up Vercel account
4. ✅ Choose deployment method
5. ✅ Deploy! 🚀
6. ✅ Monitor in Vercel dashboard
7. ✅ Set up custom domain (optional)

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Best Practices](https://react.dev/learn)
- [Web Performance Tips](https://web.dev/performance/)

---

**Status**: ✅ Ready for Deployment

Your Emondadu dashboard is fully configured for Vercel deployment!
