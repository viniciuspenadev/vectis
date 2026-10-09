import type { ImageMetadata } from 'astro';
import ocean from '../assets/images/svc-ocean.jpg';
import air from '../assets/images/svc-air.jpg';
import road from '../assets/images/svc-road.jpg';
import customs from '../assets/images/svc-customs.jpg';
import warehousing from '../assets/images/svc-warehouse.jpg';
import insurance from '../assets/images/svc-insurance.jpg';

export const serviceSlugs = ['ocean', 'air', 'road', 'customs', 'warehousing', 'insurance'] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

/** Parte visual de cada serviço (textos ficam em src/i18n). */
export const serviceVisuals: Record<ServiceSlug, { icon: string; image: ImageMetadata }> = {
  ocean: { icon: 'ship', image: ocean },
  air: { icon: 'plane', image: air },
  road: { icon: 'truck', image: road },
  customs: { icon: 'file-check', image: customs },
  warehousing: { icon: 'warehouse', image: warehousing },
  insurance: { icon: 'shield-check', image: insurance },
};
