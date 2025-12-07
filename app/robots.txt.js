// app/robots.txt.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://osteopat.vercel.app/sitemap.xml',
  };
}