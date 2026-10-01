# 🚀 Emondadu Vercel Deployment Checklist

Complete checklist to ensure your deployment is production-ready.

---

## ✅ Pre-Deployment Code Quality

- [ ] **Run linter**
  ```bash
  npm run lint
  # No errors or warnings (fix with: npm run lint:fix)
  ```

- [ ] **Local build test**
  ```bash
  npm run build
  # Build completes in <2 minutes
  # No errors in console
  ```

- [ ] **Build size check**
  ```bash
  du -sh dist/
  # Size should be <5MB (typically 100-300KB)
  ```

- [ ] **Test production build locally**
  ```bash
  npm run preview
  # All pages load correctly
  # No console errors
  # Responsive on mobile
  ```

- [ ] **Code review**
  - [ ] No console.log statements in components
  - [ ] No hardcoded API URLs
  - [ ] No commented-out code blocks
  - [ ] All imports are used
  - [ ] No unused variables

---

## ✅ Configuration

- [ ] **vercel.json configured**
  ```bash
  cat vercel.json | grep buildCommand
  # Should show: "npm run build"
  ```

- [ ] **Environment variables template created**
  ```bash
  ls -la .env.example
  # File should exist with sample variables
  ```

- [ ] **.gitignore configured**
  ```bash
  grep -E "\.env|node_modules|dist" .gitignore
  # Should contain sensitive files/folders
  ```

- [ ] **package.json scripts verified**
  ```bash
  npm run dev    # ✅ Works
  npm run build  # ✅ Works
  npm run lint   # ✅ Works
  ```

---

## ✅ Security

- [ ] **No secrets in code**
  ```bash
  grep -r "VITE_" src/ | grep -v "example"
  # Should only find VITE_ variables, no actual values
  ```

- [ ] **No API keys exposed**
  ```bash
  git log --oneline --all | grep -i key
  # Should return nothing
  ```

- [ ] **Environment variables strategy**
  - [ ] Sensitive data in Vercel secrets (not .env)
  - [ ] Public variables in .env.example
  - [ ] All VITE_ variables documented

- [ ] **Headers configured**
  ```bash
  grep -A5 "headers" vercel.json
  # Security headers should be present
  ```

---

## ✅ Git Repository

- [ ] **All changes committed**
  ```bash
  git status
  # Should show: "working tree clean"
  ```

- [ ] **Commits are descriptive**
  ```bash
  git log --oneline -5
  # Messages should be clear and meaningful
  ```

- [ ] **Branch ready for deployment**
  ```bash
  git branch
  # Should be on: claude/file-redesign-q3jtz0
  ```

- [ ] **Pushed to remote**
  ```bash
  git log --oneline origin/main..HEAD
  # Should show your commits
  ```

---

## ✅ Vercel Account Setup

- [ ] **Vercel account created**
  - [ ] Account active at [vercel.com](https://vercel.com)
  - [ ] Email verified
  - [ ] Payment method added (if needed)

- [ ] **GitHub connected** (if using GitHub integration)
  - [ ] GitHub account linked
  - [ ] Repository selected
  - [ ] Permission granted

- [ ] **Project settings configured**
  - [ ] Framework: Vite
  - [ ] Build Command: `npm run build`
  - [ ] Install Command: `npm install`
  - [ ] Output Directory: `dist`

---

## ✅ Environment Variables

### Required Variables (Add in Vercel Dashboard)

- [ ] **VITE_API_URL**
  ```
  Your API endpoint, e.g., https://api.example.com
  ```

### Optional Variables

- [ ] **VITE_APP_NAME** = "Emondadu"
- [ ] **VITE_REGION** = "asia-southeast"
- [ ] **VITE_TIMEZONE** = "Asia/Jakarta"
- [ ] **VITE_ENABLE_ANALYTICS** = "true"

**How to add in Vercel:**
1. Go to Project Settings
2. Environment Variables
3. Add each variable
4. Redeploy after adding

---

## ✅ API Integration (If Applicable)

- [ ] **API endpoint configured**
  ```bash
  grep VITE_API_URL .env.example
  # Should have example value
  ```

- [ ] **CORS configured** (if API is different domain)
  ```bash
  grep -A10 "Access-Control" vercel.json
  # Should have CORS headers
  ```

- [ ] **API timeout set** (default: 10 seconds)
  ```bash
  grep API_TIMEOUT .env.example
  # Should be reasonable (10000-30000ms)
  ```

- [ ] **Error handling implemented**
  - [ ] Network errors handled gracefully
  - [ ] Fallback UI for failures
  - [ ] User-friendly error messages

---

## ✅ Performance

- [ ] **Build time under 2 minutes**
  ```bash
  time npm run build
  # Real time should be <2m
  ```

- [ ] **Bundle size optimized**
  ```bash
  npm run build
  du -sh dist/
  # Should be <5MB, ideally <500KB
  ```

- [ ] **No console warnings**
  ```bash
  npm run build 2>&1 | grep -i warn
  # Should return nothing or non-critical warnings
  ```

- [ ] **CSS and JS minified**
  ```bash
  ls -lh dist/
  # Files should be .min.js and .min.css
  ```

---

## ✅ Testing

- [ ] **All pages load**
  - [ ] Home page loads
  - [ ] Sections render correctly
  - [ ] Charts display properly
  - [ ] Cards and buttons work

- [ ] **Mobile responsive**
  - [ ] Test on iPhone (Safari)
  - [ ] Test on Android (Chrome)
  - [ ] Test on tablet
  - [ ] All UI elements accessible

- [ ] **Forms and inputs** (if any)
  - [ ] Form submission works
  - [ ] Validation messages appear
  - [ ] Error states clear
  - [ ] Success states work

- [ ] **Links and navigation**
  - [ ] All internal links work
  - [ ] External links open correctly
  - [ ] No 404 errors on page refresh

---

## ✅ Browser Compatibility

- [ ] **Chrome/Chromium**
  ```bash
  npm run preview
  # Open in Chrome, test thoroughly
  ```

- [ ] **Firefox**
  ```bash
  # Open preview URL in Firefox
  # All features should work
  ```

- [ ] **Safari**
  ```bash
  # Test on iOS Safari if possible
  # Mobile experience should be good
  ```

- [ ] **Edge**
  ```bash
  # Test on Windows Edge
  # No critical issues
  ```

---

## ✅ Analytics & Monitoring

- [ ] **Vercel Analytics enabled**
  - [ ] Navigate to Project Settings
  - [ ] Analytics section visible
  - [ ] Web Vitals enabled

- [ ] **Error tracking configured**
  - [ ] Sentry (optional): `npm install @sentry/react`
  - [ ] Or use Vercel's built-in analytics

- [ ] **Monitoring dashboard bookmarked**
  - [ ] Save: `vercel.com/dashboard`
  - [ ] Know where to find logs
  - [ ] Know how to rollback

---

## ✅ Documentation

- [ ] **README.md complete**
  - [ ] Project overview
  - [ ] Installation instructions
  - [ ] Development commands
  - [ ] Deployment instructions
  - [ ] Contributing guidelines

- [ ] **VERCEL_DEPLOYMENT.md created**
  - [ ] Deployment steps
  - [ ] Environment variables
  - [ ] Troubleshooting guide

- [ ] **QUICK_DEPLOY.md created**
  - [ ] 5-minute quick start
  - [ ] Common commands
  - [ ] Pre-deployment checklist

---

## ✅ Deployment Day

### 1 Hour Before

- [ ] Final linting pass
  ```bash
  npm run lint:fix
  npm run build
  npm run preview
  ```

- [ ] Verify all changes committed
  ```bash
  git status  # Should be clean
  git push    # Latest changes on remote
  ```

- [ ] Check Vercel dashboard accessibility
  - [ ] Can log in to Vercel
  - [ ] Project visible in dashboard
  - [ ] All settings correct

### During Deployment

- [ ] Deploy using chosen method:
  - [ ] **CLI**: `vercel`
  - [ ] **GitHub**: Push to main
  - [ ] **Dashboard**: Click Deploy

- [ ] Monitor deployment
  - [ ] Watch build logs
  - [ ] Note deployment URL
  - [ ] Wait for "Ready" status

### After Deployment

- [ ] Visit live URL
  - [ ] All pages load
  - [ ] No console errors
  - [ ] Responsive on mobile
  - [ ] All features work

- [ ] Run smoke tests
  - [ ] Refresh page (check rewrites)
  - [ ] Navigate between sections
  - [ ] Test API calls (if applicable)
  - [ ] Check mobile layout

- [ ] Monitor first hour
  - [ ] Check error logs
  - [ ] Monitor Web Vitals
  - [ ] Monitor response times
  - [ ] Note any issues

---

## ✅ Post-Deployment

- [ ] **Create DNS record** (if custom domain)
  - [ ] Add A record to domain registrar
  - [ ] Wait for propagation (5-30 min)
  - [ ] Verify HTTPS working

- [ ] **Set up monitoring alerts** (optional)
  - [ ] Slack notifications
  - [ ] Email alerts on errors
  - [ ] Uptime monitoring

- [ ] **Plan scaling** (if high traffic)
  - [ ] Monitor response times
  - [ ] Watch error rates
  - [ ] Plan capacity increases

- [ ] **Document deployment**
  - [ ] Note deployment date
  - [ ] Document deployed version
  - [ ] Record deployment URL
  - [ ] Update team

---

## 🎯 Final Verification

Run this final check before declaring success:

```bash
# 1. Code quality
npm run lint              # ✅ 0 errors

# 2. Build works
npm run build             # ✅ Completes in <2 min

# 3. No security issues
npm audit --level=critical  # ✅ No critical issues

# 4. All tests pass (if applicable)
npm test                  # ✅ All tests pass

# 5. Deployment ready
git status                # ✅ Clean working tree
git log --oneline -1      # ✅ Latest commit pushed
```

---

## ✅ Sign-Off

- [ ] All checks completed
- [ ] Code reviewed
- [ ] Testing done
- [ ] Deployment successful
- [ ] Live URL verified
- [ ] Team notified
- [ ] Monitoring set up

**Deployment Status**: ✅ READY FOR PRODUCTION

**Deployed Date**: ___________
**Deployed By**: ___________
**Deployed URL**: ___________

---

## 🆘 Emergency Procedures

If something goes wrong:

### Quick Rollback
```bash
# Via CLI
vercel rollback

# Via Dashboard
# Deployments tab → Previous version → Promote
```

### Check Logs
```bash
vercel logs                    # All logs
vercel logs --follow          # Real-time
vercel logs [function-name]   # Specific function
```

### Get Help
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Status Page: [status.vercel.com](https://status.vercel.com)
- Community: [vercel.com/community](https://vercel.com/community)

---

**Status**: ✅ DEPLOYMENT READY

Use this checklist before every deployment!
