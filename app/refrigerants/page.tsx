import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

// 冷媒データの型定義
interface Refrigerant {
  id: string;
  label: string;
  fullName: string;
  category: string;
  description: string;
  applications: string[];
  gwp?: number; // Global Warming Potential
  ozoneDepleting: boolean;
}

// 冷媒データ
const refrigerants: Refrigerant[] = [
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
    id: 'r404a',
    label: '404A（R-404A）',
    fullName: 'R-404A（HFC混合冷媒）',
    category: 'HFC系',
    description:
      '低温冷凍用途に特化した混合冷媒。冷凍・冷蔵設備で広く使用される。',
    applications: ['冷凍・冷蔵設備', 'アイスクリーム製造機', '冷凍倉庫'],
    gwp: 3922,
    ozoneDepleting: false,
  },
  {
    id: 'r22',
    label: 'R-22（HCFC-22）',
    fullName: 'R-22（HCFC-22）',
    category: 'HCFC系',
    description:
      '従来から広く使用されてきた冷媒。現在は新規製造が規制されており、回収・再生品のみ使用可能。',
    applications: ['既存エアコン（メンテナンス用）', '既存冷凍・冷蔵設備'],
    gwp: 1810,
    ozoneDepleting: true,
  },
  {
    id: 'r32',
    label: 'R-32（HFC-32）',
    fullName: 'R-32（HFC-32）',
    category: 'HFC系',
    description:
      '次世代冷媒として注目される低GWP冷媒。環境負荷が少なく、エネルギー効率も優秀。昨今、主流になりつつある。',
    applications: ['最新家庭用エアコン', '業務用エアコン', 'ヒートポンプ'],
    gwp: 675,
    ozoneDepleting: false,
  },
];

export default function RefrigerantsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-[#0C4050] to-[#1a6b7a] py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimation>
            <h1 className="mb-4 text-center text-[28px] font-bold md:text-[36px]">
              取扱冷媒の種類
            </h1>
            <p className="mb-6 text-center text-xl opacity-90">
              Types of Refrigerants Handled
            </p>
            <p className="mx-auto max-w-[800px] text-center text-lg leading-relaxed">
              当社では、環境に配慮した最新の冷媒から従来の冷媒まで、
              幅広い種類の冷媒を取り扱っております。
              お客様の設備や用途に最適な冷媒をご提案いたします。
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* 冷媒一覧セクション */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimation>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-[24px] font-bold text-[#0C4050] md:text-[28px]">
                冷媒ラインナップ
              </h2>
              <p className="text-lg text-gray-600">
                各冷媒の特性と用途をご確認いただけます
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {refrigerants.map((refrigerant, index) => (
              <ScrollAnimation key={refrigerant.id} delay={index * 0.1}>
                <Link
                  href={`/refrigerants/${refrigerant.id}`}
                  className="group block h-full"
                >
                  <div className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    {/* 冷媒画像 */}
                    <div className="mb-4 flex h-[200px] items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                      <Image
                        src={`/service/freon_gas_sales/${refrigerant.id}.png`}
                        alt={refrigerant.label}
                        width={300}
                        height={200}
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
        </div>
      </section>

      {/* 環境への取り組みセクション */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="mb-4 text-[24px] font-bold text-[#0C4050] md:text-[28px]">
                環境への取り組み
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                地球環境保護のため、低GWP冷媒の普及に努めています
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-[40px]">🌍</div>
                  <h3 className="mb-2 text-lg font-bold text-[#0C4050]">
                    地球温暖化防止
                  </h3>
                  <p className="text-base text-gray-600">
                    低GWP冷媒の推奨により、地球温暖化への影響を最小限に抑えます
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-[40px]">♻️</div>
                  <h3 className="mb-2 text-lg font-bold text-[#0C4050]">
                    冷媒回収・再生
                  </h3>
                  <p className="text-base text-gray-600">
                    使用済み冷媒の適切な回収・再生により、資源の有効活用を図ります
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-[40px]">🔬</div>
                  <h3 className="mb-2 text-lg font-bold text-[#0C4050]">
                    最新技術対応
                  </h3>
                  <p className="text-base text-gray-600">
                    次世代冷媒技術の導入により、環境負荷の更なる削減を目指します
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-16">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <ScrollAnimation>
            <h2 className="mb-4 text-[24px] font-bold text-[#0C4050] md:text-[28px]">
              冷媒に関するご相談
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              お客様の設備に最適な冷媒選択をサポートいたします。
              お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0C4050] px-8 py-3 font-bold text-white transition-all duration-200 hover:bg-[#1a6b7a] hover:shadow-lg"
            >
              お問い合わせ
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
