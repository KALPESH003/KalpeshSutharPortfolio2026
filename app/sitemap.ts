import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kalpeshksuthar.vercel.app'; // IMPORTANT: Replace with your actual live domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/ui-archive`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}