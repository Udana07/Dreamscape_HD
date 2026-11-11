# Dreamscape HD

A static wallpaper journal with a secure Netlify publishing endpoint. The public site reads only `data/posts.json`; the GitHub token and admin password never reach browser code.

## Work locally first (no Netlify or GitHub required)

Install [Node.js](https://nodejs.org/), open a terminal in this folder, and run:

```powershell
npm start
```

Open `http://localhost:3000/admin.html`. The local admin password is **`dreamscape123`**. It writes real changes directly to `data/posts.json`, uploads a single collage image to `assets/uploads/`, and refreshes `sitemap.xml`. These files are ready to upload to free hosting later. To change the local password, start the server with `ADMIN_PASSWORD=your-password npm start` (PowerShell: `$env:ADMIN_PASSWORD='your-password'; npm start`).

Do not open `admin.html` by double-clicking it: it needs this local server to save files.

## Deploy and configure remote publishing

## Deploy and configure

1. Create a GitHub repository, add these files, and connect it to Netlify. Set the build base to the repository root; there is no build command.
2. In GitHub, create a fine-grained personal access token restricted to this repository with **Contents: Read and write**. Do not place it in any file.
3. In Netlify → Site configuration → Environment variables, add every variable in `.env.example`. Use a long random `ADMIN_SESSION_SECRET`; set `GITHUB_OWNER`, `GITHUB_REPO`, and optional `GITHUB_BRANCH` correctly. `ADMIN_PASSWORD` is checked only in the function.
4. Deploy. Update `SITE_URL` and replace the example URLs in `sitemap.xml` with your public domain (or add a build step to generate it).

## Publishing

Visit `/admin.html`, sign in, then create/edit/delete a collection. The editor validates one collage image only; an uploaded image is committed to `assets/uploads/`, then its post and metadata are committed to `data/posts.json`. Every edit triggers a Netlify deploy through GitHub. Never publish while the prior GitHub commit/deploy is still processing.

The **Preview** button opens an article-shaped draft preview in a new tab; publish to make it public.

## Ads

Paste each approved Adsterra snippet into its matching field in `assets/config.js`: `home`, `article`, `download`, or `footer`. Blank fields render nothing. Add each placement only once and use only ad formats/locations approved by Adsterra. This file is intentionally public because ad snippets must load in visitors’ browsers; it cannot use environment variables on a static site.

## Content and security

Posts support lightweight Markdown (`##`, bold, italics, HTTPS links). Rendering escapes HTML first to prevent stored XSS. The function validates payloads, authenticates temporary HMAC-signed sessions, and keeps GitHub credentials server-side. Change the supplied Gumroad URLs and legal contact before launch.
