// Maps a topic / destination to URL slugs and CSS classes.
export const topicSlug = (t) => t.toLowerCase().replace(/\s+/g, '-');

export const topicClass = (t) => ({
  'Visa': 'tag--visa',
  'Finance': 'tag--finance',
  'Tools': 'tag--tools',
  'Living': 'tag--living',
  'Life Tips': 'tag--life',
  'Creativity': 'tag--creativity',
  'Quotes': 'tag--quotes',
  'Misc': 'tag--misc',
  'Podcast': 'tag--podcast',
}[t] || '');

export const destSlug = (d) => d.toLowerCase();

// Resolves a cover image: external URLs (http/https) pass through unchanged,
// local paths get the site's base prepended.
export const imgSrc = (base, src) =>
  /^https?:\/\//.test(src) ? src : (base + src).replace(/\/{2,}/g, '/');

// Sort newest first.
export const byDate = (a, b) => b.data.pubDate - a.data.pubDate;
