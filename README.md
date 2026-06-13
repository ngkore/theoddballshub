# The Oddballs

A simple, dynamic content site for sharing real-life lessons from moving and living
abroad. Built with [Astro](https://astro.build), hosted free on GitHub Pages. Add a
post by dropping a markdown file in a folder — no rebuild, no CMS.

## How content is organised

Every post is tagged on **two axes**, so the same article can live under a topic *and*
a destination:

- **Topic** — Visa, Finance, Tools, Living, Life Tips, Podcast
- **Destination** — Prague, France, General (general = applies everywhere)

The navigation, topic pages and destination pages all build themselves from these tags.

## Writing a new post

1. Create a file in `src/content/posts/`, e.g. `my-post.md`.
2. Start it with this block (the "frontmatter"):

   ```yaml
   ---
   title: "Your title"
   description: "One sentence shown on cards."
   author: "The Oddballs"      # or your name
   pubDate: 2026-06-13
   topic: "Visa"               # one of the six topics
   destination: "Prague"       # Prague, France, or General
   featured: false             # true = show on homepage "Worth your time"
   ---
   ```

3. Write below it in normal markdown. Save. Done — it appears automatically.

You can do all of this directly in GitHub's web editor — no software to install.

## Adding a new destination later (e.g. Germany)

Open `src/content/config.ts`, add the name to the `DESTINATIONS` list. That's the only
change — the new destination page and nav entry generate themselves.

## Running it locally (optional)

```bash
npm install
npm run dev        # preview at http://localhost:4321
```

## Going live on GitHub Pages

1. Push this folder to a GitHub repo (e.g. `oddballs-site`).
2. In **astro.config.mjs**, set `site` and `base` (instructions are in the file).
3. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Every push to `main` now builds and deploys automatically.

### Logo
Drop your logo file in `public/images/` and reference it as `/images/the-oddballs.png`.
