
export interface Product {
  id: string;
  name: string;
  category: string;
  origin: string;
  supplier: string;
  price: string;
  unit: string;
  moq: string;
  rating: number;
  image: string;
  hint: string;
}

export interface Metric {
  label: string;
  value: string;
  subtext?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
