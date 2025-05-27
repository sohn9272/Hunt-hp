'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    src: '/top/firstview/biwako.png',
    alt: 'スライド1',
  },
  {
    id: 2,
    src: '/top/firstview/gas-company-service-cart.webp',
    alt: 'スライド2',
  },
  {
    id: 3,
    src: '/top/firstview/lpg-gas-cylinders-storage.webp',
    alt: 'スライド3',
  },
];

export default function FirstView() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative h-[50vh] w-full overflow-hidden lg:aspect-[1440/890] lg:h-auto lg:max-h-[100vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-3000 ${
              index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
          >
            <div
              className={
                index === currentSlide
                  ? 'slow-zoom h-full w-full'
                  : 'h-full w-full'
              }
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-[center_top_30%]"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-1/10 left-2 z-20 text-white sm:left-6 lg:bottom-20 lg:left-14">
        <h2 className="trackign-0.1rem text-[28px] leading-[1.5] sm:text-[36px] md:text-[40px] lg:text-[60px]">
          Supporting
          <br />
          Your Life&apos;s Foundation.
        </h2>
        <p className="mt-2 lg:mt-6">次世代に繋ぐ、クリーンガステクノロジー</p>
      </div>
    </div>
  );
}
