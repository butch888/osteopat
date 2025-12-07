// app/robots.txt.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Если у вас есть закрытые разделы, добавьте:
      // disallow: '/admin/',
    },
    sitemap: 'https://osteopat.vercel.app/sitemap.xml',
  };
}