import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
// IMPORTANT — set these two before your first deploy:
//
//  site: your full GitHub Pages URL
//  base: the repo name with leading slash, e.g. '/oddballs-site'
//
// If you later use a custom domain (e.g. theoddballs.com) OR a
// repo named  theoddballshub.github.io , set base to '/' and
// site to your domain.
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://theoddballshub.github.io',
  base: '/oddballs-site',
});
