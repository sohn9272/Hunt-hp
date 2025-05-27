'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import FreonGasSales from './serviceContents/FreonGasSales';
import IndustrialGasSales from './serviceContents/IndustrialGasSales';
import FreonRecoveryService from './serviceContents/FreonRecoveryService';
import FreonRecyclingDisposal from './serviceContents/FreonRecyclingDisposal';
import Image from 'next/image';
import SectionTitle from '@/app/_components/SectionTitle';

interface Section {
  id: string;
  title: string;
  element: HTMLElement | null;
}

export default function ServiceBody() {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    if (contentRef.current) {
      const sectionElements =
        contentRef.current.querySelectorAll('h3').length > 0
          ? Array.from(contentRef.current.querySelectorAll('h3')).map(
              (h3) => h3.parentElement
            )
          : contentRef.current.children;

      const newSections = Array.from(sectionElements)
        .map((section, index) => {
          const titleElement =
            section instanceof HTMLElement ? section.querySelector('h3') : null;
          return {
            id: `section-${index}`,
            title: titleElement?.textContent || '',
            element: section as HTMLElement,
          };
        })
        .filter((section) => section.title);

      setSections(newSections);

      // Intersection Observerの設定
      const observer = new IntersectionObserver(
        (entries) => {
          // 交差しているセクションを探す
          const intersectingEntry = entries.find(
            (entry) => entry.isIntersecting
          );
          if (intersectingEntry) {
            setActiveSection(intersectingEntry.target.id);
          }
        },
        {
          root: null,
          // ビューポートの中央部分のみを監視エリアとして設定
          // 上下45%をマージンとして設定することで、中央10%の帯状エリアのみを監視
          rootMargin: '-45% 0px -45% 0px',
          threshold: [0, 1],
        }
      );

      newSections.forEach((section) => {
        if (section.element) {
          section.element.id = section.id;
          observer.observe(section.element);
        }
      });

      return () => observer.disconnect();
    }
  }, [pathname]);

  const handleSidebarClick = (sectionId: string) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section?.element) {
      const offset = 100; // 上部の余白
      const elementPosition = section.element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const renderServiceContent = () => {
    switch (pathname) {
      case '/service/freon-gas-sales':
        return <FreonGasSales />;
      case '/service/industrial-gas-sales':
        return <IndustrialGasSales />;
      case '/service/freon-recovery-service':
        return <FreonRecoveryService />;
      case '/service/freon-recycling-disposal':
        return <FreonRecyclingDisposal />;
      default:
        return <p>コンテンツがありません。</p>;
    }
  };

  // ヘッダー画像のsrcをURLごとに切り替え
  const getHeaderImageSrc = () => {
    switch (pathname) {
      case '/service/freon-gas-sales':
        return '/service/freon-gas-sales-header.webp';
      case '/service/industrial-gas-sales':
        return '/service/industrial-gas-sales-header.png';
      case '/service/freon-recovery-service':
        return '/service/freon-recovery-service-header.png';
      case '/service/freon-recycling-disposal':
        return '/service/freon-recycling-disposal-header.png';
      default:
        return '/service/freon-gas-sales-header.webp';
    }
  };

  // タイトルをURLごとに切り替え
  const getServiceTitle = () => {
    switch (pathname) {
      case '/service/freon-gas-sales':
        return { en: 'Our Service', ja: 'フロンガス販売' };
      case '/service/industrial-gas-sales':
        return { en: 'Our Service', ja: '産業用高圧ガス販売' };
      case '/service/freon-recovery-service':
        return { en: 'Our Service', ja: 'フロンガス回収・処理の工事' };
      case '/service/freon-recycling-disposal':
        return { en: 'Our Service', ja: 'フロンガス再生・破壊処理' };
      default:
        return { en: 'Our Service', ja: 'サービス' };
    }
  };

  return (
    <>
      {/* ヘッダー画像 */}
      <div className="relative">
        <div className="h-[420px] sm:h-[520px]">
          <Image
            src={getHeaderImageSrc()}
            alt="サービスヘッダー"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
        <SectionTitle
          en={getServiceTitle().en}
          ja={getServiceTitle().ja}
          position="absolute bottom-10 left-4 md:left-10 text-white "
        />
      </div>

      {/* コンテンツエリア */}
      <div className="relative bg-[#343434]">
        <div className="mx-auto flex w-full">
          {/* サイドバー */}
          <div className="relative w-[254px] shrink-0 max-md:hidden">
            <aside className="sticky top-[100px] h-fit w-[254px] px-1 py-8 text-white">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className={`w-fit cursor-pointer list-none rounded px-2 py-1 text-[16px] transition-colors ${
                      activeSection === section.id
                        ? 'bg-[#0C4050] text-white'
                        : 'text-white/50'
                    }`}
                    onClick={() => handleSidebarClick(section.id)}
                  >
                    {section.title}
                  </li>
                ))}
              </nav>
            </aside>
          </div>

          {/* メインコンテンツ */}
          <div className="w-full">
            <div
              ref={contentRef}
              className="-mt-6 w-full rounded-tl-3xl bg-white py-10 pl-2 md:pl-10"
            >
              {renderServiceContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
