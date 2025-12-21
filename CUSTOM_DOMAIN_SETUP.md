# Custom Domain Setup Guide for GitHub Pages + GoDaddy

## Step 1: Update CNAME File

1. Edit `public/CNAME` and replace `yourdomain.com` with your actual domain
   - For root domain: `precisionwellness.com`
   - For www subdomain: `www.precisionwellness.com`
   - For both: You'll need to use one in CNAME and set up redirects

## Step 2: Update Site Configuration

When using a custom domain, the base path should be `/` instead of `/precisionwellness/`

Update these files:
- `vite.config.ts`: Change `base: '/precisionwellness/'` to `base: '/'`
- `src/App.tsx`: Remove or set `basename=""` in Router
- `src/utils/paths.ts`: Update BASE_URL to `/`
- `public/404.html`: Set `pathSegmentsToKeep = 0`

## Step 3: Configure DNS in GoDaddy

### Option A: Using Root Domain (example.com)

1. Log into GoDaddy
2. Go to **My Products** → **DNS** (or **Domains** → **DNS**)
3. Add/Edit these A records (point to GitHub Pages IPs):
   - Type: **A**
   - Name: **@** (or leave blank)
   - Value: **185.199.108.153**
   - TTL: 600 seconds
   
   Repeat for these IPs (add 4 A records total):
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

### Option B: Using www Subdomain (www.example.com)

1. Log into GoDaddy
2. Go to **My Products** → **DNS**
3. Add a CNAME record:
   - Type: **CNAME**
   - Name: **www**
   - Value: **precisionpep.github.io**
   - TTL: 600 seconds

### Option C: Using Both (Root + www)

1. Set up www as CNAME (Option B)
2. Set up root domain A records (Option A)
3. In GitHub Pages settings, enable "Enforce HTTPS" and "Redirect www to root" (or vice versa)

## Step 4: Configure GitHub Pages

1. Go to your repository: https://github.com/PrecisionPep/precisionwellness
2. Click **Settings** → **Pages**
3. Under **Custom domain**, enter your domain (e.g., `precisionwellness.com`)
4. Check **Enforce HTTPS** (wait for DNS to propagate first)
5. Save

## Step 5: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate
- Check status at: https://www.whatsmydns.net/
- Once DNS is ready, GitHub will show "DNS check successful"

## Step 6: Verify SSL Certificate

- GitHub automatically provisions SSL certificates for custom domains
- After DNS propagates, enable "Enforce HTTPS" in GitHub Pages settings
- This may take a few minutes to hours

## Troubleshooting

- If site doesn't load: Check DNS propagation status
- If HTTPS doesn't work: Wait for GitHub to provision SSL (can take up to 24 hours)
- If you see GitHub's 404: Make sure CNAME file is in the `public` folder and committed
- If paths are broken: Make sure base path is set to `/` in vite.config.ts

