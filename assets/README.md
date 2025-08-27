# KRICS — Starter Website

This is a simple, clean starter you can open in **Visual Studio Code** and run with **Live Server**.

## 1) Open in VS Code
- Open VS Code → **File → Open Folder…** → select the `krics-website` folder.

## 2) Run locally (no backend needed)
- Install the VS Code extension **Live Server** (by Ritwick Dey).
- In `index.html`, right–click → **Open with Live Server**.
- Your site opens at a local address (like `http://127.0.0.1:5500`).

## 3) Edit content
- Text & layout: `index.html`
- Styles (colors, spacing): `styles.css`
- Small interactions: `script.js`
- Logo & images: `assets/`

### Quick tweaks
- Change brand name: search for **KRICS** in `index.html` and `logo.svg`.
- Update email link: find `hello@krics.example` in `index.html`.
- Colors: edit CSS variables at the top of `styles.css` (`--brand`, `--brand-2`, etc.).

## 4) Publish free (pick one)
**GitHub Pages**
1. Create a GitHub account and new repo named `krics-website`.
2. Upload all files (or use Git).
3. In repo **Settings → Pages**, set Source to **Deploy from a branch**, select **main** and folder **/** (root).
4. Wait a minute—your site will appear at `https://<your-username>.github.io/krics-website/`.

**Netlify (drag & drop)**
1. Create a Netlify account.
2. Drag the `krics-website` folder onto the Netlify Dashboard → **Sites**.
3. Netlify gives you a public URL immediately (you can add a custom domain later).

## 5) Optional: Use a custom domain
- Buy a domain (e.g., from Namecheap/Google Domains/Cloudflare).
- Point DNS to your host (GitHub Pages or Netlify docs show exact steps).
- Add HTTPS (both hosts support it free).

---

Need help adding a contact form, gallery, or blog? Hook this to **Formspree**, **Netlify Forms**, or turn it into a **Next.js** app later.
