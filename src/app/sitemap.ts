import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  
  const siteUrl = 'https://www.clancig.com.ar'; // Replace with your actual domain

  // For a single-page portfolio with hash links, we only need the root URL.
  // If you add more pages (like a blog), you would add them here.
  const routes = ['/'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
