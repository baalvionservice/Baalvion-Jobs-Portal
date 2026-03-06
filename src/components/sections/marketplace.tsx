
'use client';

import Image from 'next/image';
import { mockProducts } from '@/mocks/data/products';
import { Star, Globe, Tag, ArrowRight } from 'lucide-react';

export function GlobalMarketplace() {
  return (
    <section className="bg-[#F9FAFB] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Trade Discovery</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-[#111827]">Discover Verified Global Suppliers</p>
          </div>
          <button className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50">
            View All Categories
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockProducts.map((product) => (
            <div 
              key={product.id} 
              className="corporate-card overflow-hidden rounded-xl bg-white"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={product.hint}
                />
                <div className="absolute top-4 left-4 rounded-md bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-900 shadow-sm backdrop-blur-sm">
                  {product.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-[#111827] leading-tight hover:text-primary cursor-pointer transition-colors">{product.name}</h4>
                    <p className="mt-1 text-sm text-gray-500">{product.supplier}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-gray-900 bg-gray-50 px-2 py-1 rounded">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" /> {product.rating}
                  </div>
                </div>
                
                <div className="mt-6 space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Globe size={14} /> Origin: {product.origin}</span>
                    <span>MOQ: {product.moq}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#111827]">{product.price}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Per {product.unit}</span>
                  </div>
                </div>
                
                <button className="mt-8 w-full rounded-lg bg-gray-50 py-3.5 text-sm font-bold text-gray-900 transition-all hover:bg-primary hover:text-white">
                  Request Quotation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
