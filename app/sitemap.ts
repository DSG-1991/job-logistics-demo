import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.joblogisticsltd.co.uk';
  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/drop-off`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/skip-hire`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/trade-waste`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/landscape-supplies`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8 },
  ];
}
