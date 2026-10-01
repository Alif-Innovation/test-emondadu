# 📋 Emondadu - Quick Commands Reference

Handy reference for all common development and deployment commands.

---

## 🛠️ Development Commands

### Start Development Server
```bash
npm run dev
# Opens http://localhost:5173 with hot reload
```

### Build for Production
```bash
npm run build
# Creates optimized dist/ folder (~150KB)
```

### Preview Production Build
```bash
npm run preview
# Test production build locally
```

### Code Quality Checks
```bash
npm run lint
# Check code quality with ESLint

npm run lint:fix
# Automatically fix linting issues
```

---

## 🚀 Vercel Deployment Commands

### Deploy with Vercel CLI
```bash
# Install CLI globally (first time only)
npm i -g vercel

# Login to Vercel (first time only)
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod

# View deployments
vercel ls

# View live logs
vercel logs

# Rollback to previous version
vercel rollback
```

### View Deployment Status
```bash
# Show current project info
vercel project list

# Inspect specific deployment
vercel inspect [deployment-url]

# Remove a deployment
vercel rm [deployment-id]
```

---

## 📦 Git Commands

### Commit Code
```bash
# Stage all changes
git add .

# Commit with message
git commit -m "feat: your message here"

# View commit history
git log --oneline -10

# Amend last commit
git commit --amend --no-edit
```

### Push to Remote
```bash
# Push to your branch
git push origin claude/file-redesign-q3jtz0

# Push to main (be careful!)
git push origin main

# Force push (destructive, use carefully)
git push -f origin branch-name

# Pull latest from remote
git pull origin branch-name

# Fetch all updates
git fetch origin
```

### Branching
```bash
# Create new branch
git checkout -b feature/your-feature

# Switch branches
git checkout branch-name

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name

# List all branches
git branch -a
```

---

## 🔧 NPM/Environment Commands

### Dependency Management
```bash
# Install all dependencies
npm install

# Install specific package
npm install package-name

# Install development dependency
npm install --save-dev package-name

# Update all packages
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# List installed packages
npm ls
```

### Environment Variables
```bash
# Create .env.local from template
cp .env.example .env.local

# View environment variable
echo $VITE_API_URL

# Set environment variable (temporary)
export VITE_API_URL=http://localhost:3000
```

---

## 🧪 Testing Commands

### Local Testing
```bash
# Test production build locally
npm run build && npm run preview

# Open in browser
# http://localhost:4173

# Test on mobile
# Scan QR code shown in terminal
```

### Build Quality
```bash
# Check bundle size
npm run build
du -sh dist/

# Get more details
ls -lh dist/
```

### Code Quality
```bash
# Full code quality check
npm run lint

# Fix issues automatically
npm run lint:fix

# Check specific file
npm run lint -- src/App.jsx
```

---

## 📊 Production Verification

### Pre-Deployment
```bash
# Complete pre-deployment check
npm run lint && npm run build && npm run preview

# Check file sizes
ls -lh dist/

# List all files being deployed
find dist/ -type f -exec ls -lh {} \;

# Check git status
git status
```

### Post-Deployment
```bash
# View Vercel logs
vercel logs

# View real-time logs
vercel logs --follow

# Check specific deployment
vercel inspect [deployment-url]

# See all deployments
vercel ls
```

---

## 🔐 Security Commands

### Check Dependencies
```bash
# Audit for vulnerabilities
npm audit

# Get detailed report
npm audit --json

# Fix vulnerabilities (auto)
npm audit fix

# Fix breaking changes too
npm audit fix --force
```

### Check Code
```bash
# Find hardcoded secrets
grep -r "VITE_" src/

# Should NOT find actual values

grep -r "password\|secret\|token" src/

# Should return only comments/examples
```

---

## 🌐 API & Networking

### Test API Connection
```bash
# Test API endpoint
curl https://api.example.com/health

# Get response headers
curl -i https://api.example.com

# Test with custom header
curl -H "Authorization: Bearer TOKEN" https://api.example.com
```

### Check Port Usage
```bash
# Check what's using port 5173
lsof -ti:5173

# Kill process using port
lsof -ti:5173 | xargs kill

# Alternative: use different port
npm run dev -- --port 5174
```

---

## 📝 File Management

### Create Files
```bash
# Create .env.local from template
cp .env.example .env.local

# Create new component
touch src/components/YourComponent.jsx

# Create new folder
mkdir src/components/YourFolder
```

### View Files
```bash
# List directory with details
ls -lh

# Show hidden files too
ls -lah

# Show file size
du -sh ./

# Show full file tree
tree -L 3
```

### Clean Up
```bash
# Remove node_modules (careful!)
rm -rf node_modules

# Remove dist folder
rm -rf dist

# Clear npm cache
npm cache clean --force

# Remove lock file
rm package-lock.json
```

---

## 🐛 Troubleshooting Commands

### Port Already in Use
```bash
# Kill process using port 5173
lsof -ti:5173 | xargs kill

# Or use different port
npm run dev -- --port 5174
```

### Build Issues
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### Git Issues
```bash
# Discard all changes
git checkout .

# Stash changes (save temporarily)
git stash

# Restore stashed changes
git stash pop

# Reset to last commit
git reset --hard HEAD
```

### Vercel Issues
```bash
# Rebuild current deployment
vercel rebuild

# Redeploy current code
vercel deploy --prod

# Check deployment logs
vercel logs [deployment-id]

# Get function logs
vercel logs -f [function-name]
```

---

## 🎯 Common Workflows

### Development Workflow
```bash
# 1. Start dev server
npm run dev

# 2. Make changes
# Edit files...

# 3. Check quality
npm run lint:fix

# 4. Commit changes
git add .
git commit -m "feat: your feature"

# 5. Push to remote
git push origin your-branch
```

### Deployment Workflow
```bash
# 1. Update code
git pull origin main

# 2. Install dependencies
npm install

# 3. Check quality
npm run lint

# 4. Build locally
npm run build

# 5. Test production build
npm run preview

# 6. Deploy to Vercel
vercel --prod
```

### Fix & Deploy Workflow
```bash
# 1. See deployment logs
vercel logs

# 2. Find error and fix locally
npm run dev
# Make fixes...

# 3. Test fix
npm run preview

# 4. Commit and push
git add .
git commit -m "fix: issue description"
git push origin branch-name

# 5. Auto-deploys via GitHub Actions!
```

---

## 📚 Quick Reference Table

| Task | Command |
|------|---------|
| Start dev | `npm run dev` |
| Build | `npm run build` |
| Preview | `npm run preview` |
| Lint | `npm run lint:fix` |
| Deploy (CLI) | `vercel` |
| Deploy (GitHub) | Push to main |
| View logs | `vercel logs` |
| Rollback | `vercel rollback` |
| Check git | `git status` |
| Push code | `git push` |
| Pull code | `git pull` |
| Commit | `git commit -m "msg"` |

---

## 💡 Pro Tips

### Time-Savers
```bash
# Alias for common commands (add to ~/.bashrc or ~/.zshrc)
alias dev="npm run dev"
alias build="npm run build"
alias preview="npm run preview"
alias lint="npm run lint:fix"
alias deploy="vercel --prod"
alias logs="vercel logs -f"
```

### One-Liners
```bash
# Full development cycle in one command
npm run lint:fix && npm run build && npm run preview

# Deploy after auto-fixing
npm run lint:fix && git add . && git commit -m "chore: lint" && git push

# Check everything before deploying
npm run lint && npm run build && npm run preview && git status
```

---

## 🆘 Quick Help

### Need more help?
- Development: See `SETUP.md`
- Deployment: See `QUICK_DEPLOY.md`
- Full guide: See `VERCEL_DEPLOYMENT.md`
- Pre-deploy: See `DEPLOYMENT_CHECKLIST.md`

### Official Docs
- Node.js: https://nodejs.org/docs/
- npm: https://docs.npmjs.com/
- Vercel: https://vercel.com/docs
- Vite: https://vitejs.dev/guide/

---

## 📌 Bookmarks

Create browser bookmarks for these:
- Vercel Dashboard: https://vercel.com/dashboard
- Your Project: https://your-vercel-project.com
- GitHub Repo: https://github.com/your-org/emondadu
- Vercel Docs: https://vercel.com/docs

---

**Print this page or bookmark it!** 🔖

**Status**: ✅ Ready to use as quick reference!
