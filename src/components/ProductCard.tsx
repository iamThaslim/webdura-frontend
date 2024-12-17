'use client'

import Image from 'next/image'
import Link from 'next/link';
import { services } from '@/data/db';
import { SectionHeader } from './ui/SectionHeader';
import { Carousel } from './ui/Carousel';

export default function ProductCard() {
  return (
    <section className="container mx-auto py-12">
      <SectionHeader
        title="Our Services"
        description="Discover our range of professional fitness and wellness services"
      />

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <Carousel>
          {services.map((product) => (
            <div key={product.id} className="pb-4">
              <Link
                href={`/services/${product.id}`}
                className="block"
              >
                <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {product.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {product.category}
                        </p>
                      </div>
                      <p className="text-lg font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="mt-4 line-clamp-2 text-gray-700">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-8">
        {services.map((product) => (
          <Link
            key={product.id}
            href={`/services/${product.id}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-[16/9]">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <p className="mt-4 line-clamp-2 text-gray-700">
                  {product.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}


