# Nginx hosting

This project is a static Next.js export. Nginx serves the generated `out/` directory; do not run `next start` or expose port 3000.

## Build and publish

```bash
cd /var/www/pncteamstartup.site/repo
git pull --ff-only origin master
rm -rf .next-deploy out
export NODE_OPTIONS="--max-old-space-size=1024"
export NEXT_TELEMETRY_DISABLED=1
export NEXT_DIST_DIR=".next-deploy"
export NEXT_PUBLIC_SITE_URL=https://pncteamstartup.site
npm ci
npm run build

release="/var/www/pncteamstartup.site/releases/$(date +%Y%m%d%H%M%S)"
sudo mkdir -p "$release"
sudo rsync -a --delete out/ "$release/"
sudo chmod -R a+rX "$release"
sudo ln -sfn "$release" /var/www/pncteamstartup.site/current
sudo nginx -t && sudo systemctl reload nginx
```

`npm run build` completes only after every static route, including every team and project profile, has been checked.

## Enable the site

```bash
sudo cp deploy/nginx/pncteamstartup.site.conf /etc/nginx/sites-available/pncteamstartup.site
sudo ln -sfn /etc/nginx/sites-available/pncteamstartup.site /etc/nginx/sites-enabled/pncteamstartup.site
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

The Nginx template maps `/en/...` and `/km/...` to their static exported files. This preserves language switching without a Node.js server.

## HTTPS

After HTTP serves the site and AWS permits ports 80 and 443, run:

```bash
sudo certbot --nginx --redirect -d pncteamstartup.site -d www.pncteamstartup.site
sudo certbot renew --dry-run
```
