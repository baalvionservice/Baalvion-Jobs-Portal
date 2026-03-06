import Image from 'next/image';
import { marketplaceProducts } from '@/mocks/data/marketplace-products';
import { Globe, ArrowRight, Tag } from 'lucide-react';

export function MarketplacePreview() {
  return (
    <section className="bg-secondary/20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Global Marketplace</h2>
            <p className="mt-4 text-4xl font-extrabold tracking-tight text-white">Trending Commodities</p>
          </div>
          <button className="rounded-full bg-white/5 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-white/10">
            Visit Marketplace
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {marketplaceProducts.map((product) => (
            <div 
              key={product.id} 
              className="group overflow-hidden rounded-3xl border border-white/10 bg-background transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={product.hint}
                />
                <div className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {product.category}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white">{product.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{product.supplier}</p>
                  </div>
                  <Tag className="h-5 w-5 text-primary" />
                </div>
                
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe className="h-3 w-3" /> Origin: <span className="text-white">{product.origin}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">{product.price}</p>
                    <p className="text-[10px] uppercase text-muted-foreground">Per {product.unit}</p>
                  </div>
                </div>
                
                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-sm font-bold text-white transition-all hover:bg-primary hover:text-primary-foreground">
                  Request RFQ <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
