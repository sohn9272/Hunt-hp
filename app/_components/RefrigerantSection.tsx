import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import SectionTitle from '@/app/_components/SectionTitle';

// 冷媒データの型定義
interface Refrigerant {
  id: string;
  label: string;
  fullName: string;
  category: string;
  description: string;
  applications: string[];
  gwp?: number;
  ozoneDepleting: boolean;
}

// 冷媒データ（主要なもののみ表示用）
const mainRefrigerants: Refrigerant[] = [
  {
    id: 'r410a',
    label: '410A（R-410A）',
    fullName: 'R-410A（HFC混合冷媒）',
    category: 'HFC系',
    description:
      '家庭用・業務用エアコンで最も広く使用されている代替フロン。優れた冷却性能と安全性を持つ。',
    applications: ['家庭用エアコン', '業務用エアコン', 'ヒートポンプ'],
    gwp: 2088,
    ozoneDepleting: false,
  },
  {
    id: 'r407c',
    label: '407C（R-407C）',
    fullName: 'R-407C（HFC混合冷媒）',
    category: 'HFC系',
    description:
      'R-22の代替として開発された混合冷媒。既存設備の改修に適している。',
    applications: ['業務用エアコン', '冷凍・冷蔵設備', 'チラー'],
    gwp: 1774,
    ozoneDepleting: false,
  },
  {
    id: 'r32',
    label: 'R-32（HFC-32）',
    fullName: 'R-32（HFC-32）',
    category: 'HFC系',
    description:
      '次世代冷媒として注目される低GWP冷媒。環境負荷が少なく、エネルギー効率も優秀。',
    applications: ['最新家庭用エアコン', '業務用エアコン', 'ヒートポンプ'],
    gwp: 675,
    ozoneDepleting: false,
  },
];

export default function RefrigerantSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <ScrollAnimation>
          <SectionTitle
            en="Refrigerants"
            ja="取扱冷媒の種類"
            position="ml-auto"
          />
          <p className="mx-auto mt-6 max-w-[800px] text-center text-lg leading-relaxed">
            環境に配慮した最新の冷媒から従来の冷媒まで、
            幅広い種類の冷媒を取り扱っております。
            お客様の設備や用途に最適な冷媒をご提案いたします。
          </p>
        </ScrollAnimation>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mainRefrigerants.map((refrigerant, index) => (
            <ScrollAnimation key={refrigerant.id} delay={index * 0.1}>
              <Link
                href={`/refrigerants/${refrigerant.id}`}
                className="group block h-full"
              >
                <div className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* 冷媒画像 */}
                  <div className="mb-4 flex h-[180px] items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                    <Image
                      src={`/service/freon_gas_sales/${refrigerant.id}.png`}
                      alt={refrigerant.label}
                      width={250}
                      height={180}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* 冷媒情報 */}
                  <div className="space-y-3">
                    <h3 className="text-[20px] font-bold text-[#0C4050]">
                      {refrigerant.label}
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[#0C4050] px-3 py-1 text-sm text-white">
                        {refrigerant.category}
                      </span>
                      {!refrigerant.ozoneDepleting && (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                          オゾン層非破壊
                        </span>
                      )}
                    </div>

                    <p className="text-base leading-relaxed text-gray-600">
                      {refrigerant.description}
                    </p>

                    {/* GWP表示 */}
                    {refrigerant.gwp && (
                      <div className="flex items-center gap-2 text-base">
                        <span className="font-semibold text-gray-700">
                          GWP:
                        </span>
                        <span
                          className={`font-bold ${
                            refrigerant.gwp < 1000
                              ? 'text-green-600'
                              : refrigerant.gwp < 2000
                                ? 'text-yellow-600'
                                : 'text-red-600'
                          }`}
                        >
                          {refrigerant.gwp.toLocaleString()}
                        </span>
                      </div>
                    )}

                    {/* 主な用途 */}
                    <div>
                      <p className="mb-2 text-base font-semibold text-gray-700">
                        主な用途:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {refrigerant.applications.slice(0, 2).map((app) => (
                          <span
                            key={app}
                            className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-600"
                          >
                            {app}
                          </span>
                        ))}
                        {refrigerant.applications.length > 2 && (
                          <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-600">
                            +{refrigerant.applications.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 詳細ボタン */}
                    <div className="pt-2">
                      <div className="flex items-center justify-center gap-2 rounded-lg bg-[#0C4050] px-4 py-2 text-base font-bold text-white transition-all duration-200 group-hover:bg-[#1a6b7a]">
                        詳細を見る
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        {/* すべての冷媒を見るボタン */}
        <ScrollAnimation delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/refrigerants"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0C4050] to-[#1a6b7a] px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#0C4050]/25"
            >
              すべての冷媒を見る
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
