
import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Industrial Grade Copper Cathodes',
    category: 'Metals',
    origin: 'Chile',
    supplier: 'Andean Mining Group',
    price: '$8,420',
    unit: 'Metric Ton',
    moq: '25 Tons',
    rating: 4.9,
    image: 'https://picsum.photos/seed/copper/600/400',
    hint: 'copper metal'
  },
  {
    id: 'p2',
    name: 'Precision CNC Milling Center',
    category: 'Industrial Machinery',
    origin: 'Germany',
    supplier: 'Bavarian Precision Works',
    price: '$145,000',
    unit: 'Unit',
    moq: '1 Unit',
    rating: 5.0,
    image: 'https://picsum.photos/seed/machinery/600/400',
    hint: 'industrial machine'
  },
  {
    id: 'p3',
    name: 'High-Density Lithium-Ion Cells',
    category: 'Electronics',
    origin: 'South Korea',
    supplier: 'Seoul Energy Solutions',
    price: '$12.40',
    unit: 'Unit',
    moq: '1,000 Units',
    rating: 4.8,
    image: 'https://picsum.photos/seed/battery/600/400',
    hint: 'battery cells'
  },
  {
    id: 'p4',
    name: 'Organic Durum Wheat',
    category: 'Agriculture',
    origin: 'Canada',
    supplier: 'Prairie Harvest Co.',
    price: '$412',
    unit: 'Metric Ton',
    moq: '100 Tons',
    rating: 4.7,
    image: 'https://picsum.photos/seed/wheat/600/400',
    hint: 'wheat field'
  },
  {
    id: 'p5',
    name: 'Grade A Liquid Nitrogen',
    category: 'Chemicals',
    origin: 'USA',
    supplier: 'Nexus Gases Corp',
    price: '$0.85',
    unit: 'Liter',
    moq: '5,000 Liters',
    rating: 4.9,
    image: 'https://picsum.photos/seed/chemical/600/400',
    hint: 'liquid gas'
  },
  {
    id: 'p6',
    name: 'Automotive Grade Steel Sheets',
    category: 'Automotive',
    origin: 'Japan',
    supplier: 'Nippon Steel Dynamics',
    price: '$1,250',
    unit: 'Metric Ton',
    moq: '50 Tons',
    rating: 4.8,
    image: 'https://picsum.photos/seed/steel/600/400',
    hint: 'steel plates'
  }
];
