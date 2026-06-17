import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // IMPORTANT: Ensure this exactly matches your live domain
  const baseUrl = "https://kalpeshsuthar.vercel.app";

  return {
    rules: {
      // '*' means all search engine bots are welcome
      userAgent: "*",
      
      // '/' means they are allowed to scan every page on the site
      allow: "/",
    },
    
    // This line hands the Google Bot your sitemap exactly when it arrives
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}