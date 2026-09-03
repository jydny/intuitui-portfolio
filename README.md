# intuitui — portfolio (React + Vite + Tailwind)

A React recreation of your "intuitui" portfolio (Home, Work, Design System
case study, Jovia Deposit & Loan case study, About, Contact), ready to push
to GitHub and deploy to GitHub Pages.

## Structure

```
src/
  components/     Header, Footer, ProjectCard, PhoneMock, CaseStudyHeader
  data/           projects.js — edit project titles/summaries here
  pages/          Home, Work, DesignSystem, DepositLoan, About, Contact
  App.jsx         routes (HashRouter — works on GitHub Pages with no extra config)
  index.css       Tailwind + global styles
tailwind.config.js  color tokens (wine, olive, navy, teal, gold, crimson)
```

## Run locally

```bash
npm install
npm run dev
```

## Before deploying

1. Open `vite.config.js` and set `base` to match your GitHub repo name:
   ```js
   base: '/your-repo-name/',
   ```
2. Open `package.json` and update `homepage`:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the app and pushes the `dist` folder to a `gh-pages` branch.
Then in your repo: **Settings → Pages → Source → `gh-pages` branch**.

Your site will be live at:
`https://yourusername.github.io/your-repo-name`

## Password protection

GitHub Pages has no server, so it can't enforce a login. Instead the deploy
pipeline builds the **whole app (JS, CSS, and every image) into a single
`dist/index.html`** via `vite-plugin-singlefile`, then encrypts that file with
[StatiCrypt](https://github.com/robinmoisson/staticrypt) (AES-256). Visitors
get a password prompt; nothing renders and no asset is reachable until they
enter the correct password.

Set the password when deploying — either export it:

```bash
# macOS / Linux
STATICRYPT_PASSWORD='your-password' npm run deploy

# Windows PowerShell
$env:STATICRYPT_PASSWORD='your-password'; npm run deploy
```

…or just run `npm run deploy` and StatiCrypt will prompt for it interactively.

`npm run predeploy` runs `build` then `encrypt` automatically, so `npm run
deploy` is the only command you need.

**Trade-offs**

- One shared password for all visitors; no per-user accounts or revocation.
  Anyone who has the password (or the auto-decrypt share link) has the content.
- The encrypted `index.html` is ~13 MB and must download fully before the
  prompt appears. Compress the source images in `src/assets/` to shrink it.
- For per-person access or real accounts, host on Cloudflare Pages + Access
  (or Netlify/Vercel password protection) instead of GitHub Pages.

To publish **without** a password, run `npm run build` then `npx gh-pages -d
dist` (skipping the `encrypt` step).

## Customizing

- **Copy & content**: `src/data/projects.js` and the text inside each page
  in `src/pages/`.
- **Colors**: `tailwind.config.js` → the `wine`, `olive`, `navy`, `teal`,
  `gold`, `crimson` tokens map to the button/badge colors from your design
  system.
- **Case study visuals**: `src/pages/DesignSystem.jsx` and
  `src/pages/DepositLoan.jsx` are built with simplified/reconstructed
  versions of your Figma component tables and phone-flow mockups — replace
  the placeholder blocks with real screenshots or refine the markup to match
  your Figma file more closely.
- **Add a project**: add an entry to `src/data/projects.js`, then add a page
  in `src/pages/` and a route in `src/App.jsx`.

## Notes

- Uses `HashRouter` so page routes work correctly on GitHub Pages without
  needing a 404.html redirect trick. URLs look like
  `yoursite.com/#/work/design-system`. Swap to `BrowserRouter` if you deploy
  somewhere with proper server-side rewrites (Vercel, Netlify, etc.) instead.
- Font: Inter (loaded via Google Fonts in `index.css`).
