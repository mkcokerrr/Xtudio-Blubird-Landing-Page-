export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export interface ComparisonPoint {
  label: string;
  competitor: boolean;
  us: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
