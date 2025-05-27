'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollStartY, setScrollStartY] = useState(0);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      // スクロール方向が変わったら基準位置を更新
      if (isScrollingDown && scrollDirection === 'up') {
        setScrollDirection('down');
        setScrollStartY(currentScrollY);
      } else if (!isScrollingDown && scrollDirection === 'down') {
        setScrollDirection('up');
        setScrollStartY(currentScrollY);
      }

      // スクロール量に基づいて状態を更新
      const scrollAmount = Math.abs(currentScrollY - scrollStartY);
      if (scrollDirection === 'down' && scrollAmount > 100) {
        setIsScrolled(true);
      } else if (scrollDirection === 'up' && scrollAmount > 50) {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDirection, scrollStartY]);

  // マウント前は初期状態を表示
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 z-50 h-[75px] w-full bg-transparent">
        <div className="mx-auto flex h-[75px] items-center justify-between px-4 max-lg:bg-[#343434] md:px-16">
          <Link href="/">
            <Image
              height={75}
              width={113}
              alt="ロゴ"
              src={'/logo.png'}
              className="h-10 w-auto md:h-12"
            />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            <ul className="flex h-full items-center gap-8 font-bold text-[#343434]">
              <li className="flex items-center">
                <Link
                  className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                  href="/"
                >
                  TOP
                </Link>
              </li>
              <li className="flex items-center">
                <span className="cursor-pointer">SERVICE</span>
              </li>
              <li className="flex items-center">
                <span className="cursor-pointer">PRODUCTS</span>
              </li>
              <li className="flex items-center">
                <Link
                  className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                  href="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                  href="/column"
                >
                  COLUMN
                </Link>
              </li>
            </ul>
            <Link
              href="/contact"
              className="rounded bg-[#0C4050] px-6 py-2 font-bold text-white transition-colors duration-300 hover:bg-[#072635]"
            >
              CONTACT
            </Link>
          </nav>
          <button className="lg:hidden" aria-label="メニュー">
            <div className="space-y-2">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>
        </div>
      </header>
    );
  }

  return (
    <header
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isHeaderHovered || isScrolled ? 'bg-[#343434]' : 'bg-transparent'
      } ${isServiceHovered || isProductsHovered ? 'h-[210px]' : 'h-[75px]'}`}
    >
      <div className="mx-auto flex h-[75px] items-center justify-between px-4 max-lg:bg-[#343434] md:px-16">
        <Link href="/">
          <Image
            height={75}
            width={113}
            alt="ロゴ"
            src={'/logo.png'}
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <ul
            className={`flex h-full items-center gap-8 font-bold ${
              isHeaderHovered || isScrolled ? 'text-white' : 'text-[#343434]'
            }`}
          >
            <li className="flex items-center">
              <Link
                className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                href="/"
              >
                TOP
              </Link>
            </li>
            <li
              className="group relative flex h-full items-center"
              onMouseEnter={() => setIsServiceHovered(true)}
              onMouseLeave={() => setIsServiceHovered(false)}
            >
              <span className="cursor-pointer">SERVICE</span>
              <ul
                className={`absolute top-[18px] -left-1 z-10 mt-2 block min-w-[145px] bg-transparent text-sm font-bold whitespace-nowrap text-white transition-opacity duration-150 ${
                  isServiceHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <li>
                  <Link
                    href="/service/freon-gas-sales"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                  >
                    フロンガス販売
                  </Link>
                </li>

                <li>
                  <Link
                    href="/service/industrial-gas-sales"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                  >
                    産業用高圧ガス販売
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/freon-recovery-service"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                  >
                    フロンガス回収・処理の工事
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/freon-recycling-disposal"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                  >
                    フロンガス再生・破壊処理
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="group relative flex h-full items-center"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <span className="cursor-pointer">PRODUCTS</span>
              <ul
                className={`absolute top-[18px] -left-1 z-10 mt-2 block min-w-[145px] bg-transparent text-sm font-bold whitespace-nowrap text-white transition-opacity duration-150 ${
                  isProductsHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <li>
                  <Link
                    href="/refrigerants"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                  >
                    冷媒
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industrial-gases"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                  >
                    産業用高圧ガス
                  </Link>
                </li>
              </ul>
            </li>
            <li className="flex items-center">
              <Link
                className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                href="/about"
              >
                ABOUT
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050] hover:text-white"
                href="/column"
              >
                COLUMN
              </Link>
            </li>
          </ul>
          <Link
            href="/contact"
            className="rounded bg-[#0C4050] px-6 py-2 font-bold text-white transition-colors duration-300 hover:bg-[#072635]"
          >
            CONTACT
          </Link>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <div className="space-y-2">
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? 'translate-y-2.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? '-translate-y-2.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 w-full bg-[#343434] transition-all duration-300 lg:hidden ${
          isOpen ? 'h-[calc(100vh-4rem)]' : 'h-0'
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 overflow-hidden">
          <ul className="flex flex-col items-center gap-8 font-bold text-white">
            <li className="text-[24px]">
              <Link
                className="rounded p-2 transition-colors duration-300 hover:bg-[#0C4050]"
                href="/"
                onClick={() => setIsOpen(false)}
              >
                TOP
              </Link>
            </li>
            <li>
              <div className="text-[24px]">SERVICE</div>
              <ul className="mt-2 flex flex-col items-center gap-3 text-[20px]">
                <li>
                  <Link
                    href="/service/freon-gas-sales"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                  >
                    フロンガス販売
                  </Link>
                </li>

                <li>
                  <Link
                    href="/service/industrial-gas-sales"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                  >
                    産業用高圧ガス販売
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/freon-recovery-service"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                  >
                    フロンガス回収・処理の工事
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/freon-recycling-disposal"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                  >
                    フロンガス再生・破壊処理
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="text-[24px]">PRODUCTS</div>
              <ul className="mt-2 flex flex-col items-center gap-3 text-[20px]">
                <li>
                  <Link
                    href="/refrigerants"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                    onClick={() => setIsOpen(false)}
                  >
                    冷媒
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industrial-gases"
                    className="block w-fit rounded bg-transparent px-3 py-1 hover:bg-[#0C4050]"
                    onClick={() => setIsOpen(false)}
                  >
                    産業用高圧ガス
                  </Link>
                </li>
              </ul>
            </li>
            <li className="text-[24px]">
              <Link
                className="rounded p-2 transition-colors duration-300 hover:bg-[#0C4050]"
                href="/about"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li className="text-[24px]">
              <Link
                className="rounded p-2 transition-colors duration-300 hover:bg-[#0C4050]"
                href="/column"
                onClick={() => setIsOpen(false)}
              >
                COLUMN
              </Link>
            </li>
          </ul>
          <Link
            href="/contact"
            className="rounded bg-[#0C4050] px-6 py-2 text-[24px] font-bold text-white transition-colors duration-300 hover:bg-[#8a0e1c]"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
