import React from 'react';

interface SectionTitleProps {
  en: string;
  ja: string;
  position: string;
  variant?: boolean;
  large?: boolean;
}

export default function SectionTitle({
  en,
  ja,
  position,
  variant,
  large,
}: SectionTitleProps) {
  return (
    <>
      <div
        className={`${position} ${large ? 'w-[200px] md:w-[300px]' : 'w-[150px] md:w-[200px]'}`}
      >
        <p
          className={`font-ryo-gothic w-fit rounded-xs px-4 py-[2px] text-center text-[16px] font-bold tracking-[0.08em] text-white md:text-[18px] ${
            variant ? 'bg-[#343434]' : 'bg-[#0C4050]'
          }`}
        >
          {en}
        </p>
        <h2
          className={`mt-2 text-right text-[30px] font-bold md:text-[40px] ${
            variant ? 'text-white' : ''
          }`}
        >
          {ja}
        </h2>
      </div>
    </>
  );
}
