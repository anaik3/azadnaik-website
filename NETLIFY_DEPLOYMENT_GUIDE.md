# Netlify Deployment Guide for Azad Naik Portfolio

## 1. Prepare Your Project
- Ensure all files are in your project root (index.html, assets/, netlify.toml, etc.)
- Run `serve_local.bat` to preview locally and verify everything works

## 2. Deploy to Netlify (Drag & Drop)
1. Go to https://app.netlify.com and log in (or sign up)
2. Click **Add new site** > **Deploy manually**
3. Drag and drop your entire project folder (not just the files) into the upload area
4. Wait for deployment to finish
5. Your site will be live at a Netlify URL (e.g., https://your-site.netlify.app)

## 3. (Optional) Connect to Git for Continuous Deployment
- You can link your GitHub repo for automatic deploys on push

## 4. Configure Custom Domain (Optional)
- In Netlify dashboard, go to **Domain settings**
- Add your custom domain and follow Netlify’s DNS instructions

## 5. Verify
- Test your site on desktop and mobile
- Check dark/light mode, navigation, search, and forms
- Confirm PWA install prompt and offline support
- Visit `/404` to check custom 404 page

## 6. Netlify Features Used
- Automatic HTTPS
- Custom headers and security via `netlify.toml`
- SPA routing fallback to `index.html`
- Caching for performance
- Custom 404 page

## 7. Troubleshooting
- If you see a blank page, check the browser console for errors
- Make sure all asset paths are relative (e.g., `assets/js/main.js`)
- For form handling, see Netlify Forms documentation if you want to use Netlify’s built-in form backend

---

**You’re ready!**

For more, see: https://docs.netlify.com/
