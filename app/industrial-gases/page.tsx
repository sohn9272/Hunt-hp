import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

// 産業用ガスデータの型定義
interface IndustrialGas {
  id: string;
  label: string;
  fullName: string;
  category: string;
  description: string;
  applications: string[];
  chemicalFormula: string;
  hazardClass?: string;
}

// 産業用ガスデータ
const industrialGases: IndustrialGas[] = [
  {
    id: 'oxygen',
    label: '酸素（O₂）',
    fullName: '酸素（Oxygen）',
    category: '支燃性ガス',
    description:
      '溶接・切断作業に不可欠な支燃性ガス。医療用酸素としても広く使用される。',
    applications: ['溶接・切断', '医療用', '製鉄・製鋼', '化学工業'],
    chemicalFormula: 'O₂',
    hazardClass: '支燃性ガス',
  },
  {
    id: 'nitrogen',
    label: '窒素（N₂）',
    fullName: '窒素（Nitrogen）',
    category: '不活性ガス',
    description: '化学的に不活性で、酸化防止や不活性雰囲気の形成に使用される。',
    applications: ['不活性雰囲気', '食品保存', '化学工業', '半導体製造'],
    chemicalFormula: 'N₂',
    hazardClass: '不活性ガス',
  },
  {
    id: 'argon',
    label: 'アルゴン（Ar）',
    fullName: 'アルゴン（Argon）',
    category: '不活性ガス',
    description: 'TIG溶接やアーク溶接のシールドガスとして使用される希ガス。',
    applications: ['TIG溶接', 'アーク溶接', '金属加工', '研究・分析'],
    chemicalFormula: 'Ar',
    hazardClass: '不活性ガス',
  },
  {
    id: 'carbon-dioxide',
    label: '二酸化炭素（CO₂）',
    fullName: '二酸化炭素（Carbon Dioxide）',
    category: '不活性ガス',
    description: '溶接のシールドガスや食品保存、消火剤として幅広く使用される。',
    applications: ['MAG溶接', '食品保存', '消火剤', '冷却剤'],
    chemicalFormula: 'CO₂',
    hazardClass: '不活性ガス',
  },
  {
    id: 'acetylene',
    label: 'アセチレン（C₂H₂）',
    fullName: 'アセチレン（Acetylene）',
    category: '可燃性ガス',
    description:
      '酸素と混合して高温炎を作り、溶接・切断作業に使用される可燃性ガス。',
    applications: ['ガス溶接', 'ガス切断', '金属加工', '化学合成'],
    chemicalFormula: 'C₂H₂',
    hazardClass: '可燃性ガス',
  },
  {
    id: 'helium',
    label: 'ヘリウム（He）',
    fullName: 'ヘリウム（Helium）',
    category: '不活性ガス',
    description: '軽量で不活性な希ガス。リークテストや特殊溶接に使用される。',
    applications: ['リークテスト', '特殊溶接', '研究・分析', '冷却剤'],
    chemicalFormula: 'He',
    hazardClass: '不活性ガス',
  },
];

export default function IndustrialGasesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-[#0C4050] to-[#1a6b7a] py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimation>
            <h1 className="mb-4 text-center text-[28px] font-bold md:text-[36px]">
              取扱ガス種類
            </h1>
            <p className="mb-6 text-center text-xl opacity-90">
              Types of Industrial Gases Handled
            </p>
            <p className="mx-auto max-w-[800px] text-center text-lg leading-relaxed">
              当社では、製造業、医療、研究開発など様々な分野で使用される
              産業用高圧ガスを幅広く取り扱っております。
              お客様の用途に最適なガスをご提案いたします。
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* ガス一覧セクション */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimation>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-[24px] font-bold text-[#0C4050] md:text-[28px]">
                ガスラインナップ
              </h2>
              <p className="text-lg text-gray-600">
                各ガスの特性と用途をご確認いただけます
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industrialGases.map((gas, index) => (
              <ScrollAnimation key={gas.id} delay={index * 0.1}>
                <Link
                  href={`/industrial-gases/${gas.id}`}
                  className="group block h-full"
                >
                  <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    {/* ガス画像 */}
                    <div className="mb-4 flex h-[200px] items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                      <Image
                        src={`/service/industrial_gas_sales/${gas.id}.png`}
                        alt={gas.label}
                        width={300}
                        height={200}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* ガス情報 */}
                    <div className="flex flex-1 flex-col space-y-3">
                      <h3 className="text-[20px] font-bold text-[#0C4050]">
                        {gas.label}
                      </h3>

                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-[#0C4050] px-3 py-1 text-sm text-white">
                          {gas.category}
                        </span>
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                          {gas.chemicalFormula}
                        </span>
                      </div>

                      <p className="text-base leading-relaxed text-gray-600">
                        {gas.description}
                      </p>

                      {/* 主な用途 */}
                      <div className="flex-1">
                        <p className="mb-2 text-base font-semibold text-gray-700">
                          主な用途:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {gas.applications.slice(0, 2).map((app) => (
                            <span
                              key={app}
                              className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-600"
                            >
                              {app}
                            </span>
                          ))}
                          {gas.applications.length > 2 && (
                            <span className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-600">
                              +{gas.applications.length - 2}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* 詳細ボタン */}
                      <div className="mt-auto pt-4">
                        <div className="flex items-center justify-center gap-2 rounded-lg bg-[#0C4050] px-4 py-3 text-base font-bold text-white transition-all duration-200 group-hover:bg-[#1a6b7a]">
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

      {/* 安全への取り組みセクション */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="mb-4 text-[24px] font-bold text-[#0C4050] md:text-[28px]">
                安全への取り組み
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                高圧ガス保安法に基づく適切な管理と安全な取り扱いを徹底しています
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-[40px]">🛡️</div>
                  <h3 className="mb-2 text-lg font-bold text-[#0C4050]">
                    法令遵守
                  </h3>
                  <p className="text-base text-gray-600">
                    高圧ガス保安法に基づく適切な保管・輸送・取り扱いを実施
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-[40px]">🚛</div>
                  <h3 className="mb-2 text-lg font-bold text-[#0C4050]">
                    安全輸送
                  </h3>
                  <p className="text-base text-gray-600">
                    専用車両による安全な輸送と適切な容器管理を徹底
                  </p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-[40px]">👨‍🔬</div>
                  <h3 className="mb-2 text-lg font-bold text-[#0C4050]">
                    専門知識
                  </h3>
                  <p className="text-base text-gray-600">
                    有資格者による専門的なアドバイスと技術サポートを提供
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
              産業用ガスに関するご相談
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              お客様の用途に最適なガス選択をサポートいたします。
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
