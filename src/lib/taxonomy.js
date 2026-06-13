// Maps a topic / destination to URL slugs and CSS classes.
export const topicSlug = (t) => t.toLowerCase().replace(/\s+/g, '-');

export const topicClass = (t) => ({
  'Visa': 'tag--visa',
  'Finance': 'tag--finance',
  'Tools': 'tag--tools',
  'Living': 'tag--living',
  'Life Tips': 'tag--life',
  'Podcast': 'tag--podcast',
}[t] || '');

export const destSlug = (d) => d.toLowerCase();

// Sort newest first.
export const byDate = (a, b) => b.data.pubDate - a.data.pubDate;
