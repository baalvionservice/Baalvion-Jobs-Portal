import { MetadataRoute } from 'next';
import { AppConfig } from '@/config/app.config';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/my-account/'],
    },
    // sitemap: `${AppConfig.baseUrl}/sitemap.xml`,
  };
}
