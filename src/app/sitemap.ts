import { MetadataRoute } from 'next';
import { AppConfig } from '@/config/app.config';
import { talentService } from '@/services/talent.service';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = AppConfig.baseUrl;

  const staticRoutes = [
    '', // Homepage
    '/careers',
    '/careers/open-positions',
    '/careers/hiring-process',
    '/careers/hiring-strategy',
    '/careers/internship-program',
    '/careers/life-at-baalvion',
    '/about',
    '/about/diversity',
    '/about/team',
    '/contact',
    '/privacy',
    '/data-protection',
    '/terms',
    '/faqs',
    '/products',
    '/projects',
    '/studio',
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const [allJobs, allCountries] = await Promise.all([
    talentService.getJobs({ status: 'published' }),
    talentService.getCountries({ isActive: true }),
  ]);

  const countryUrls = allCountries.map((country) => ({
    url: `${baseUrl}/careers/countries/${country.slug}`,
    lastModified: new Date(),
  }));

  const jobUrls = allJobs.data
    .map((job: any) => {
      const country = allCountries.find((c) => c.id === job.countryId);
      if (!country) return null;
      return {
        url: `${baseUrl}/careers/countries/${country.slug}/jobs/${job.id}`,
        lastModified: new Date(job.updatedAt),
      };
    })
    .filter(Boolean) as MetadataRoute.Sitemap;

  return [...staticUrls, ...countryUrls, ...jobUrls];
}
