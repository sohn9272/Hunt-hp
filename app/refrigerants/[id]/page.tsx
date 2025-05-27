import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

// 冷媒データの型定義
interface RefrigerantDetail {
  id: string;
  label: string;
  fullName: string;
  category: string;
  description: string;
  applications: string[];
  gwp: number;
  ozoneDepleting: boolean;
  properties: {
    chemicalFormula: string;
    boilingPoint: string;
    criticalTemperature: string;
    criticalPressure: string;
    density: string;
    flammability: string;
    toxicity: string;
  };
  advantages: string[];
  disadvantages: string[];
  regulations: string[];
  safetyPrecautions: string[];
  environmentalImpact: string;
  futureOutlook: string;
}

// 詳細な冷媒データ
const refrigerantDetails: Record<string, RefrigerantDetail> = {
  r410a: {
    id: 'r410a',
    label: '410A（R-410A）',
    fullName: 'R-410A（HFC混合冷媒）',
    category: 'HFC系',
    description:
      '家庭用・業務用エアコンで最も広く使用されている代替フロン。R-32とR-125の混合冷媒で、優れた冷却性能と安全性を持つ。',
    applications: [
      '家庭用エアコン',
      '業務用エアコン',
      'ヒートポンプ',
      'チラー',
      '除湿機',
    ],
    gwp: 2088,
    ozoneDepleting: false,
    properties: {
      chemicalFormula: 'R-32/R-125 (50/50 wt%)',
      boilingPoint: '-51.6°C',
      criticalTemperature: '72.1°C',
      criticalPressure: '4.90 MPa',
      density: '1.04 kg/L (25°C)',
      flammability: '不燃性（A1分類）',
      toxicity: '低毒性',
    },
    advantages: [
      'オゾン層を破壊しない',
      '優れた冷却性能',
      '不燃性で安全',
      '幅広い温度範囲で使用可能',
      '既存のR-22システムより高効率',
      '豊富な供給量',
    ],
    disadvantages: [
      '高いGWP値（地球温暖化係数）',
      'R-22より高い作動圧力',
      '価格がやや高い',
      '将来的な規制強化の可能性',
    ],
    regulations: [
      'フロン排出抑制法の対象',
      '2024年以降段階的削減予定',
      '回収・破壊義務あり',
      '漏えい点検義務',
    ],
    safetyPrecautions: [
      '密閉空間での作業時は換気を十分に行う',
      '高圧ガスのため取扱いに注意',
      '専用工具・機器を使用',
      '有資格者による作業',
      '適切な保護具の着用',
    ],
    environmentalImpact:
      'オゾン層破壊係数は0だが、GWP値が2088と高く、地球温暖化への影響が懸念される。適切な回収・破壊により環境負荷を最小限に抑える必要がある。',
    futureOutlook:
      '現在主流の冷媒だが、環境規制の強化により、将来的にはより低GWP冷媒への移行が進むと予想される。当面は既存設備のメンテナンス用として需要が継続する見込み。',
  },
  r407c: {
    id: 'r407c',
    label: '407C（R-407C）',
    fullName: 'R-407C（HFC混合冷媒）',
    category: 'HFC系',
    description:
      'R-22の代替として開発された混合冷媒。R-32、R-125、R-134aの3成分混合で、既存設備の改修に適している。',
    applications: [
      '業務用エアコン',
      '冷凍・冷蔵設備',
      'チラー',
      '既存R-22設備の代替',
    ],
    gwp: 1774,
    ozoneDepleting: false,
    properties: {
      chemicalFormula: 'R-32/R-125/R-134a (23/25/52 wt%)',
      boilingPoint: '-43.6°C',
      criticalTemperature: '86.7°C',
      criticalPressure: '4.63 MPa',
      density: '1.11 kg/L (25°C)',
      flammability: '不燃性（A1分類）',
      toxicity: '低毒性',
    },
    advantages: [
      'R-22からの改修が比較的容易',
      'オゾン層を破壊しない',
      '不燃性で安全',
      '既存配管の流用が可能な場合が多い',
      '幅広い用途に対応',
    ],
    disadvantages: [
      '温度グライドが大きい',
      'R-22より効率がやや劣る',
      '高いGWP値',
      '混合冷媒のため組成管理が必要',
    ],
    regulations: [
      'フロン排出抑制法の対象',
      '段階的削減対象',
      '回収・破壊義務あり',
      '漏えい点検義務',
    ],
    safetyPrecautions: [
      '混合冷媒のため液充填が必要',
      '温度グライドを考慮した設計',
      '専用工具・機器を使用',
      '有資格者による作業',
      '適切な保護具の着用',
    ],
    environmentalImpact:
      'オゾン層破壊係数は0だが、GWP値が1774と高い。R-22からの代替により環境負荷は改善されるが、さらなる低GWP冷媒への移行が望ましい。',
    futureOutlook:
      'R-22設備の代替需要は継続するが、新規設備では低GWP冷媒が選択される傾向。既存設備のメンテナンス用として一定の需要が見込まれる。',
  },
  r404a: {
    id: 'r404a',
    label: '404A（R-404A）',
    fullName: 'R-404A（HFC混合冷媒）',
    category: 'HFC系',
    description:
      '低温冷凍用途に特化した混合冷媒。R-125、R-143a、R-134aの3成分混合で、冷凍・冷蔵設備で広く使用される。',
    applications: [
      '冷凍・冷蔵設備',
      'アイスクリーム製造機',
      '冷凍倉庫',
      '業務用冷凍機',
      'ショーケース',
    ],
    gwp: 3922,
    ozoneDepleting: false,
    properties: {
      chemicalFormula: 'R-125/R-143a/R-134a (44/52/4 wt%)',
      boilingPoint: '-46.6°C',
      criticalTemperature: '72.1°C',
      criticalPressure: '3.73 MPa',
      density: '1.04 kg/L (25°C)',
      flammability: '不燃性（A1分類）',
      toxicity: '低毒性',
    },
    advantages: [
      '低温域での優れた性能',
      'オゾン層を破壊しない',
      '不燃性で安全',
      '冷凍・冷蔵用途に最適',
      '安定した性能',
    ],
    disadvantages: [
      '非常に高いGWP値',
      '温度グライドがある',
      '規制強化の対象',
      '代替冷媒への移行圧力',
    ],
    regulations: [
      'フロン排出抑制法の対象',
      'EU F-Gas規制で段階的削減',
      '回収・破壊義務あり',
      '漏えい点検義務',
      '新規設備での使用制限',
    ],
    safetyPrecautions: [
      '混合冷媒のため液充填が必要',
      '低温作業時の安全対策',
      '専用工具・機器を使用',
      '有資格者による作業',
      '適切な保護具の着用',
    ],
    environmentalImpact:
      'GWP値が3922と非常に高く、地球温暖化への影響が大きい。EU等では使用制限が強化されており、低GWP代替冷媒への移行が急務。',
    futureOutlook:
      '環境規制の強化により、新規設備での使用は大幅に制限される見込み。既存設備のメンテナンス用需要は継続するが、代替冷媒への移行が加速する。',
  },
  r22: {
    id: 'r22',
    label: 'R-22（HCFC-22）',
    fullName: 'R-22（HCFC-22）',
    category: 'HCFC系',
    description:
      '従来から広く使用されてきた冷媒。現在は新規製造が規制されており、回収・再生品のみ使用可能。',
    applications: [
      '既存エアコン（メンテナンス用）',
      '既存冷凍・冷蔵設備',
      'レトロフィット前の設備',
    ],
    gwp: 1810,
    ozoneDepleting: true,
    properties: {
      chemicalFormula: 'CHClF₂',
      boilingPoint: '-40.8°C',
      criticalTemperature: '96.1°C',
      criticalPressure: '4.99 MPa',
      density: '1.19 kg/L (25°C)',
      flammability: '不燃性（A1分類）',
      toxicity: '低毒性',
    },
    advantages: [
      '長年の使用実績',
      '優れた熱力学特性',
      '不燃性で安全',
      '既存設備との互換性',
    ],
    disadvantages: [
      'オゾン層を破壊する',
      '新規製造が禁止',
      '価格が高騰',
      '供給量が限定的',
      '将来的な全面禁止',
    ],
    regulations: [
      'モントリオール議定書による規制',
      '新規製造・輸入禁止（2020年）',
      '回収・再生品のみ使用可能',
      '2030年全面禁止予定',
      '厳格な管理義務',
    ],
    safetyPrecautions: [
      '回収・再生品の品質確認',
      '漏えい防止の徹底',
      '適切な回収・破壊',
      '有資格者による作業',
      '代替冷媒への計画的移行',
    ],
    environmentalImpact:
      'オゾン層破壊係数0.055、GWP値1810と環境への影響が大きい。使用量削減と適切な回収・破壊により環境負荷を最小限に抑える必要がある。',
    futureOutlook:
      '2030年に全面禁止予定。既存設備のメンテナンス用として限定的に使用されるが、代替冷媒への移行が急務。回収・再生品の価格は今後も上昇傾向。',
  },
  r32: {
    id: 'r32',
    label: 'R-32（HFC-32）',
    fullName: 'R-32（HFC-32）',
    category: 'HFC系',
    description:
      '次世代冷媒として注目される低GWP冷媒。環境負荷が少なく、エネルギー効率も優秀で、新しいエアコンで採用が拡大。',
    applications: [
      '最新家庭用エアコン',
      '業務用エアコン',
      'ヒートポンプ',
      '次世代冷凍機',
    ],
    gwp: 675,
    ozoneDepleting: false,
    properties: {
      chemicalFormula: 'CH₂F₂',
      boilingPoint: '-51.7°C',
      criticalTemperature: '78.1°C',
      criticalPressure: '5.78 MPa',
      density: '0.96 kg/L (25°C)',
      flammability: '微燃性（A2L分類）',
      toxicity: '低毒性',
    },
    advantages: [
      '低いGWP値（675）',
      'オゾン層を破壊しない',
      '高いエネルギー効率',
      '単一成分冷媒',
      '優れた熱力学特性',
      '将来性がある',
    ],
    disadvantages: [
      '微燃性（A2L）',
      '高い作動圧力',
      '特別な安全対策が必要',
      '既存設備への適用制限',
    ],
    regulations: [
      'フロン排出抑制法の対象',
      '微燃性冷媒の安全基準適用',
      '設備設計基準の遵守',
      '作業者の資格要件',
    ],
    safetyPrecautions: [
      '微燃性のため火気厳禁',
      '換気設備の確保',
      '漏えい検知器の設置',
      '専用工具・機器を使用',
      '特別な安全教育が必要',
    ],
    environmentalImpact:
      'GWP値675と従来冷媒より大幅に低く、オゾン層破壊係数も0。環境負荷が少ない次世代冷媒として期待される。',
    futureOutlook:
      '環境規制の強化により需要拡大が見込まれる。微燃性への対応技術の向上により、適用範囲も拡大予定。次世代の主力冷媒として期待される。',
  },
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function RefrigerantDetailPage({ params }: PageProps) {
  const refrigerant = refrigerantDetails[params.id];

  if (!refrigerant) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-[#0C4050] to-[#1a6b7a] py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimation>
            <div className="mb-4">
              <Link
                href="/refrigerants"
                className="inline-flex items-center gap-2 text-base opacity-80 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                冷媒一覧に戻る
              </Link>
            </div>
            <h1 className="mb-4 text-[28px] font-bold md:text-[36px]">
              {refrigerant.label}
            </h1>
            <p className="mb-2 text-xl opacity-90">{refrigerant.fullName}</p>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-white/20 px-4 py-2 text-base">
                {refrigerant.category}
              </span>
              <span
                className={`rounded-full px-4 py-2 text-base ${
                  refrigerant.gwp < 1000
                    ? 'bg-green-500/20'
                    : refrigerant.gwp < 2000
                      ? 'bg-yellow-500/20'
                      : 'bg-red-500/20'
                }`}
              >
                GWP: {refrigerant.gwp.toLocaleString()}
              </span>
              {!refrigerant.ozoneDepleting && (
                <span className="rounded-full bg-green-500/20 px-4 py-2 text-base">
                  オゾン層非破壊
                </span>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 概要セクション */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollAnimation>
              <div>
                <h2 className="mb-4 text-[24px] font-bold text-[#0C4050]">
                  概要
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  {refrigerant.description}
                </p>

                <h3 className="mb-3 text-[20px] font-bold text-[#0C4050]">
                  主な用途
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {refrigerant.applications.map((app) => (
                    <div
                      key={app}
                      className="rounded-lg bg-gray-100 p-3 text-center text-base"
                    >
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="flex items-center justify-center rounded-xl bg-gray-50 p-8">
                <Image
                  src={`/service/freon_gas_sales/${refrigerant.id}.png`}
                  alt={refrigerant.label}
                  width={400}
                  height={300}
                  className="h-auto w-full max-w-[400px] object-contain"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 物性値セクション */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <ScrollAnimation>
            <h2 className="mb-8 text-center text-[24px] font-bold text-[#0C4050]">
              物性値・特性
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(refrigerant.properties).map(([key, value]) => {
                const labels: Record<string, string> = {
                  chemicalFormula: '化学式',
                  boilingPoint: '沸点',
                  criticalTemperature: '臨界温度',
                  criticalPressure: '臨界圧力',
                  density: '密度',
                  flammability: '燃焼性',
                  toxicity: '毒性',
                };

                return (
                  <div key={key} className="rounded-lg bg-white p-4 shadow-sm">
                    <h4 className="mb-2 text-lg font-semibold text-[#0C4050]">
                      {labels[key]}
                    </h4>
                    <p className="text-base text-gray-700">{value}</p>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* メリット・デメリットセクション */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollAnimation>
              <div>
                <h2 className="mb-6 text-[24px] font-bold text-[#0C4050]">
                  メリット
                </h2>
                <div className="space-y-3">
                  {refrigerant.advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                      <p className="text-base text-gray-700">{advantage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div>
                <h2 className="mb-6 text-[24px] font-bold text-[#0C4050]">
                  デメリット・注意点
                </h2>
                <div className="space-y-3">
                  {refrigerant.disadvantages.map((disadvantage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                      <p className="text-base text-gray-700">{disadvantage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 規制・安全対策セクション */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollAnimation>
              <div>
                <h2 className="mb-6 text-[24px] font-bold text-[#0C4050]">
                  関連規制
                </h2>
                <div className="space-y-3">
                  {refrigerant.regulations.map((regulation, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <p className="text-base text-gray-700">{regulation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div>
                <h2 className="mb-6 text-[24px] font-bold text-[#0C4050]">
                  安全対策
                </h2>
                <div className="space-y-3">
                  {refrigerant.safetyPrecautions.map((precaution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-orange-500"></div>
                      <p className="text-base text-gray-700">{precaution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 環境影響・将来展望セクション */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollAnimation>
              <div>
                <h2 className="mb-4 text-[24px] font-bold text-[#0C4050]">
                  環境への影響
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {refrigerant.environmentalImpact}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div>
                <h2 className="mb-4 text-[24px] font-bold text-[#0C4050]">
                  将来展望
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {refrigerant.futureOutlook}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="bg-[#0C4050] py-16 text-white">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <ScrollAnimation>
            <h2 className="mb-4 text-[24px] font-bold md:text-[28px]">
              {refrigerant.label}に関するご相談
            </h2>
            <p className="mb-8 text-lg">
              価格、納期、技術的なご質問など、お気軽にお問い合わせください。
              専門スタッフが丁寧にご対応いたします。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 font-bold text-[#0C4050] transition-all duration-200 hover:bg-gray-100"
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
              <Link
                href="/refrigerants"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#0C4050]"
              >
                他の冷媒を見る
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
    </div>
  );
}

// 静的生成用のパラメータ
export function generateStaticParams() {
  return Object.keys(refrigerantDetails).map((id) => ({
    id,
  }));
}
