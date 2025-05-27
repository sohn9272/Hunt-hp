'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isHandlingHovered, setIsHandlingHovered] = useState(false);

  return (
    <>
      <section className="relative h-[300px] bg-[#343434] py-8 md:px-16">
        <div className="flex gap-y-32 max-md:flex-col-reverse md:justify-between md:gap-16">
          <Image
            className="max-md:mx-auto"
            height={75}
            width={113}
            alt="ロゴ"
            src={'/logo.png'}
          />
          <ul className="flex gap-4 font-bold text-white max-md:mx-auto md:gap-8">
            <li>
              <Link
                className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                href="/"
              >
                TOP
              </Link>
            </li>
            <li
              className="group relative h-8 pt-1"
              onMouseEnter={() => setIsServiceHovered(true)}
              onMouseLeave={() => setIsServiceHovered(false)}
            >
              <span className="cursor-pointer">SERVICE</span>
              <ul
                className={`absolute -left-2 z-10 mt-2 block min-w-[145px] bg-transparent font-bold whitespace-nowrap text-white md:transition-opacity md:duration-150 ${
                  isServiceHovered ? 'md:opacity-100' : 'md:opacity-0'
                }`}
              >
                <li className="pt-2">
                  <Link
                    href="/service/freon-gas-sales"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                  >
                    フロンガス販売
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    href="/service/industrial-gas-sales"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                  >
                    産業用高圧ガス販売
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    href="/service/freon-recovery-service"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                  >
                    フロンガス回収・処理の工事
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    href="/service/freon-recycling-disposal"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                  >
                    フロンガス再生・破壊処理
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="group relative h-8 pt-1"
              onMouseEnter={() => setIsHandlingHovered(true)}
              onMouseLeave={() => setIsHandlingHovered(false)}
            >
              <span className="cursor-pointer">PRODUCTS</span>
              <ul
                className={`absolute -left-2 z-10 mt-2 block min-w-[145px] bg-transparent font-bold whitespace-nowrap text-white md:transition-opacity md:duration-150 ${
                  isHandlingHovered ? 'md:opacity-100' : 'md:opacity-0'
                }`}
              >
                <li className="pt-2">
                  <Link
                    href="/refrigerants"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                  >
                    冷媒
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    href="/industrial-gases"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                  >
                    産業用高圧ガス
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                href="/about"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                href="/column"
              >
                COLUMN
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
