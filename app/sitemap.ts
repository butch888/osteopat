// app/sitemap.ts
export default async function sitemap() {
  const baseUrl = 'https://osteopat.vercel.app';

  // Основные страницы сайта
  const routes = [
    '/',
    '/about',
    '/services',
    '/contacts',
    // добавьте все ваши существующие маршруты
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  return routes;
}