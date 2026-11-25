# Sampada Srivastava: Portfolio

React + Vite + Framer Motion + Lucide. Static site, no backend.

## Run locally
```
npm install
npm run dev        # development
npm run build      # production build into dist/
npm run preview    # preview the build
```

## What to replace (no code rewrite needed)
| Item | Where |
|---|---|
| Profile photo | `public/assets/profile.jpg` (a monogram placeholder shows until it exists) |
| CV | `public/assets/Sampada-Srivastava-CV.pdf` |
| Email | `config.email` in `src/data/portfolioData.js`. Until set, email links are hidden and LinkedIn is used |
| Project repo/demo URLs | `repo` / `demo` fields per project in `src/data/portfolioData.js`. Buttons only appear when set |
| Certificate links | `link` fields in `certs` |
| All copy | `src/data/portfolioData.js` |

The "Other" project filter appears automatically once a project uses the `other` category.

## Upload to GitHub
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/SampadaSrivastava/<repo-name>.git
git push -u origin main
```
(Create the empty repo on github.com first.)

## Deploy on Netlify
1. Netlify > Add new site > Import from Git > pick the repo.
2. Build command: `npm run build`. Publish directory: `dist` (already set in `netlify.toml`).
3. Deploy. Every push redeploys.
