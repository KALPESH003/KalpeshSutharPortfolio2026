import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kalpeshsuthar.vercel.app'; // IMPORTANT: Replace with your actual live domain

  return [
    // 1. THE ROOT (Highest Priority)
    // Google should index this first and check it somewhat frequently for updates.
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    
    // 2. CORE PORTFOLIO PAGES (High Priority)
    // Your main selling points.
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Weekly if you are actively adding projects/commits
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // 3. SECONDARY PAGES (Medium Priority)
    // Contact and resume pages change less often, but are still vital.
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    
    // Note: If you have dynamic routes (e.g., /projects/[slug]), 
    // you would map over your project data here and push them to this array!
  ];
}