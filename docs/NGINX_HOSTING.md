# Nginx hosting

This project is a static Next.js export. Nginx serves the generated `out/` directory; do not run `next start` or expose port 3000.

## Build and publish

```bash
cd /var/www/html/PNC-TEAM-STARTUP
git pull --ff-only origin master
rm -rf .next out
unset NEXT_DIST_DIR
unset NEXT_PUBLIC_SITE_URL
export NODE_OPTIONS="--max-old-space-size=1024"
export NEXT_TELEMETRY_DISABLED=1
npm ci
npm run build
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

Language switching is stored in the visitor's browser, so every page uses one
real static URL. The Nginx template also resolves routes with a trailing slash
to the matching exported HTML file instead of returning a 403 error.

## HTTPS

After HTTP serves the site and AWS permits ports 80 and 443, run:

```bash
sudo certbot --nginx --redirect -d pncteamstartup.site -d www.pncteamstartup.site
sudo certbot renew --dry-run
```
