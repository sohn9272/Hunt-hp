import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

// 産業用ガスデータの型定義
interface IndustrialGasDetail {
  id: string;
  label: string;
  fullName: string;
  category: string;
  description: string;
  applications: string[];
  chemicalFormula: string;
  hazardClass: string;
  properties: {
    molecularWeight: string;
    boilingPoint: string;
    meltingPoint: string;
    density: string;
    solubility: string;
    flammability: string;
    toxicity: string;
  };
  advantages: string[];
  precautions: string[];
  regulations: string[];
  safetyMeasures: string[];
  industrialUse: string;
  futureOutlook: string;
}

// 詳細な産業用ガスデータ
const industrialGasDetails: Record<string, IndustrialGasDetail> = {
  oxygen: {
    id: 'oxygen',
    label: '酸素（O₂）',
    fullName: '酸素（Oxygen）',
    category: '支燃性ガス',
    description:
      '無色・無臭の気体で、燃焼を助ける支燃性ガス。溶接・切断作業や医療用として広く使用される。',
    applications: [
      '溶接・切断',
      '医療用酸素',
      '製鉄・製鋼',
      '化学工業',
      '水処理',
      '養殖業',
    ],
    chemicalFormula: 'O₂',
    hazardClass: '支燃性ガス',
    properties: {
      molecularWeight: '32.00 g/mol',
      boilingPoint: '-183.0°C',
      meltingPoint: '-218.8°C',
      density: '1.429 g/L (0°C)',
      solubility: '水に微溶',
      flammability: '支燃性（燃焼助長）',
      toxicity: '無毒',
    },
    advantages: [
      '燃焼効率の向上',
      '高温炎の生成が可能',
      '医療用として安全',
      '環境に無害',
      '高純度品の供給可能',
      '豊富な供給量',
    ],
    precautions: [
      '可燃物との接触を避ける',
      '油脂類との接触厳禁',
      '高圧容器の取り扱い注意',
      '換気の確保',
    ],
    regulations: [
      '高圧ガス保安法の適用',
      '医療用酸素は薬事法の適用',
      '容器の定期検査義務',
      '保安距離の確保',
    ],
    safetyMeasures: [
      '専用の調整器・配管を使用',
      '油脂類の除去',
      '適切な容器保管',
      '有資格者による取り扱い',
      '緊急時対応計画の策定',
    ],
    industrialUse:
      '製鉄業では高炉での燃焼効率向上、溶接業では酸素アセチレン炎による切断・溶接、医療分野では呼吸補助や手術時の使用、水処理では生物学的処理の促進に使用される。',
    futureOutlook:
      '医療需要の増加、環境技術への応用拡大により需要は安定的に成長。特に水素エネルギー分野での利用拡大が期待される。',
  },
  nitrogen: {
    id: 'nitrogen',
    label: '窒素（N₂）',
    fullName: '窒素（Nitrogen）',
    category: '不活性ガス',
    description:
      '無色・無臭の不活性ガス。化学的に安定で、酸化防止や不活性雰囲気の形成に使用される。',
    applications: [
      '不活性雰囲気',
      '食品保存',
      '化学工業',
      '半導体製造',
      '金属熱処理',
      '石油精製',
    ],
    chemicalFormula: 'N₂',
    hazardClass: '不活性ガス',
    properties: {
      molecularWeight: '28.01 g/mol',
      boilingPoint: '-195.8°C',
      meltingPoint: '-210.0°C',
      density: '1.251 g/L (0°C)',
      solubility: '水に難溶',
      flammability: '不燃性',
      toxicity: '無毒（窒息性）',
    },
    advantages: [
      '化学的に不活性',
      '酸化防止効果',
      '無毒・無害',
      '豊富で安価',
      '高純度品の供給可能',
      '液体窒素として冷却剤利用可能',
    ],
    precautions: [
      '密閉空間での窒息注意',
      '液体窒素の凍傷注意',
      '換気の確保',
      '酸素濃度の監視',
    ],
    regulations: [
      '高圧ガス保安法の適用',
      '容器の定期検査義務',
      '作業環境管理',
      '酸素欠乏症防止規則',
    ],
    safetyMeasures: [
      '酸素濃度計の設置',
      '適切な換気設備',
      '液体窒素用保護具着用',
      '緊急時の避難経路確保',
      '定期的な安全教育',
    ],
    industrialUse:
      '半導体製造では超高純度窒素による不活性雰囲気形成、食品業界では酸化防止・鮮度保持、金属工業では熱処理時の酸化防止、化学工業では反応雰囲気制御に使用される。',
    futureOutlook:
      '半導体・電子部品製造の拡大、食品保存技術の高度化により需要増加。特に液体窒素の冷却用途での利用拡大が見込まれる。',
  },
  argon: {
    id: 'argon',
    label: 'アルゴン（Ar）',
    fullName: 'アルゴン（Argon）',
    category: '不活性ガス',
    description:
      '無色・無臭の希ガス。化学的に極めて安定で、TIG溶接やアーク溶接のシールドガスとして使用される。',
    applications: [
      'TIG溶接',
      'アーク溶接',
      '金属加工',
      '研究・分析',
      '電球充填ガス',
      '半導体製造',
    ],
    chemicalFormula: 'Ar',
    hazardClass: '不活性ガス',
    properties: {
      molecularWeight: '39.95 g/mol',
      boilingPoint: '-185.9°C',
      meltingPoint: '-189.3°C',
      density: '1.784 g/L (0°C)',
      solubility: '水に難溶',
      flammability: '不燃性',
      toxicity: '無毒（窒息性）',
    },
    advantages: [
      '化学的に極めて安定',
      '優れたシールド効果',
      '溶接品質の向上',
      '無毒・無害',
      '高純度品の供給可能',
      'アークの安定性向上',
    ],
    precautions: [
      '密閉空間での窒息注意',
      '換気の確保',
      '酸素濃度の監視',
      '高圧容器の取り扱い注意',
    ],
    regulations: [
      '高圧ガス保安法の適用',
      '容器の定期検査義務',
      '作業環境管理',
      '酸素欠乏症防止規則',
    ],
    safetyMeasures: [
      '酸素濃度計の設置',
      '適切な換気設備',
      '専用調整器の使用',
      '溶接作業時の安全確保',
      '定期的な設備点検',
    ],
    industrialUse:
      'TIG溶接では高品質な溶接を実現するシールドガス、アルミニウム・ステンレス鋼の溶接、電球・蛍光灯の充填ガス、半導体製造での不活性雰囲気形成に使用される。',
    futureOutlook:
      '高品質溶接の需要増加、半導体産業の成長により需要拡大。特に自動車・航空宇宙産業での精密溶接用途での利用増加が期待される。',
  },
  'carbon-dioxide': {
    id: 'carbon-dioxide',
    label: '二酸化炭素（CO₂）',
    fullName: '二酸化炭素（Carbon Dioxide）',
    category: '不活性ガス',
    description:
      '無色・無臭の気体。溶接のシールドガスや食品保存、消火剤として幅広く使用される。',
    applications: [
      'MAG溶接',
      '食品保存',
      '消火剤',
      '冷却剤（ドライアイス）',
      '炭酸飲料',
      '植物栽培',
    ],
    chemicalFormula: 'CO₂',
    hazardClass: '不活性ガス',
    properties: {
      molecularWeight: '44.01 g/mol',
      boilingPoint: '-78.5°C（昇華点）',
      meltingPoint: '-56.6°C（三重点）',
      density: '1.977 g/L (0°C)',
      solubility: '水に可溶',
      flammability: '不燃性',
      toxicity: '高濃度で有害',
    },
    advantages: [
      '不活性で安全',
      '食品添加物として認可',
      '環境に無害',
      '安価で入手容易',
      '液化・固化が容易',
      '多用途での利用可能',
    ],
    precautions: [
      '高濃度での窒息注意',
      'ドライアイスの凍傷注意',
      '密閉空間での使用注意',
      '換気の確保',
    ],
    regulations: [
      '高圧ガス保安法の適用',
      '食品衛生法（食品用）',
      '容器の定期検査義務',
      '作業環境管理',
    ],
    safetyMeasures: [
      'CO₂濃度計の設置',
      '適切な換気設備',
      'ドライアイス用保護具着用',
      '緊急時の避難経路確保',
      '定期的な安全教育',
    ],
    industrialUse:
      'MAG溶接では軟鋼の溶接用シールドガス、食品業界では炭酸飲料・冷却保存、消防設備では二酸化炭素消火設備、農業では植物の光合成促進に使用される。',
    futureOutlook:
      '食品産業の成長、溶接技術の高度化により需要安定。カーボンリサイクル技術の発展により、回収CO₂の有効利用が拡大する見込み。',
  },
  acetylene: {
    id: 'acetylene',
    label: 'アセチレン（C₂H₂）',
    fullName: 'アセチレン（Acetylene）',
    category: '可燃性ガス',
    description:
      '無色で特有の臭いを持つ可燃性ガス。酸素と混合して高温炎を作り、溶接・切断作業に使用される。',
    applications: [
      'ガス溶接',
      'ガス切断',
      '金属加工',
      '化学合成',
      '原子吸光分析',
      '熱処理',
    ],
    chemicalFormula: 'C₂H₂',
    hazardClass: '可燃性ガス',
    properties: {
      molecularWeight: '26.04 g/mol',
      boilingPoint: '-84.0°C',
      meltingPoint: '-80.8°C',
      density: '1.165 g/L (0°C)',
      solubility: '水に可溶',
      flammability: '可燃性（爆発性）',
      toxicity: '軽度の麻酔性',
    },
    advantages: [
      '最高温度の炎（約3200°C）',
      '優れた切断・溶接性能',
      '携帯性に優れる',
      '即座の着火・消火可能',
      '化学合成原料として有用',
      '高い燃焼効率',
    ],
    precautions: [
      '爆発性混合気の形成注意',
      '火気厳禁',
      '衝撃・摩擦を避ける',
      '銅・銀との接触禁止',
    ],
    regulations: [
      '高圧ガス保安法の適用',
      '消防法の適用',
      '容器の特別管理',
      '保安距離の確保',
    ],
    safetyMeasures: [
      '専用調整器・配管の使用',
      '逆火防止器の設置',
      '適切な容器保管',
      '火気管理の徹底',
      '緊急時対応計画の策定',
    ],
    industrialUse:
      'ガス溶接・切断では厚板鋼材の切断・溶接、金属加工では局部加熱・曲げ加工、化学工業では各種化学品の合成原料、分析機器では原子吸光分析の燃料ガスとして使用される。',
    futureOutlook:
      '溶接技術の多様化により一部代替されるが、特殊用途や化学合成分野での需要は継続。安全技術の向上により、より安全な取り扱いが可能になる見込み。',
  },
  helium: {
    id: 'helium',
    label: 'ヘリウム（He）',
    fullName: 'ヘリウム（Helium）',
    category: '不活性ガス',
    description:
      '無色・無臭の軽量な希ガス。化学的に極めて安定で、リークテストや特殊溶接に使用される。',
    applications: [
      'リークテスト',
      '特殊溶接',
      '研究・分析',
      '冷却剤（液体ヘリウム）',
      '気球・飛行船',
      'MRI装置',
    ],
    chemicalFormula: 'He',
    hazardClass: '不活性ガス',
    properties: {
      molecularWeight: '4.00 g/mol',
      boilingPoint: '-268.9°C',
      meltingPoint: '-272.2°C（26気圧下）',
      density: '0.179 g/L (0°C)',
      solubility: '水に難溶',
      flammability: '不燃性',
      toxicity: '無毒（窒息性）',
    },
    advantages: [
      '最も軽い不活性ガス',
      '化学的に極めて安定',
      '優れた熱伝導性',
      '低温での液化可能',
      '高い拡散性',
      '無毒・無害',
    ],
    precautions: [
      '密閉空間での窒息注意',
      '液体ヘリウムの極低温注意',
      '希少資源のため節約使用',
      '換気の確保',
    ],
    regulations: [
      '高圧ガス保安法の適用',
      '容器の定期検査義務',
      '作業環境管理',
      '酸素欠乏症防止規則',
    ],
    safetyMeasures: [
      '酸素濃度計の設置',
      '適切な換気設備',
      '液体ヘリウム用保護具着用',
      '極低温対応設備',
      '定期的な安全教育',
    ],
    industrialUse:
      'リークテストでは高い拡散性を利用した精密検査、特殊溶接では高品質溶接の実現、研究分野では超伝導磁石の冷却、医療分野ではMRI装置の冷却剤として使用される。',
    futureOutlook:
      '半導体・医療機器の高度化により需要増加が見込まれるが、希少資源のため価格上昇傾向。リサイクル技術の発展と代替技術の開発が重要課題。',
  },
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function IndustrialGasDetailPage({ params }: PageProps) {
  const { id } = await params;
  const gas = industrialGasDetails[id];

  if (!gas) {
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
                href="/industrial-gases"
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
                ガス一覧に戻る
              </Link>
            </div>
            <h1 className="mb-4 text-[28px] font-bold md:text-[36px]">
              {gas.label}
            </h1>
            <p className="mb-2 text-xl opacity-90">{gas.fullName}</p>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-white/20 px-4 py-2 text-base">
                {gas.category}
              </span>
              <span className="rounded-full bg-blue-500/20 px-4 py-2 text-base">
                {gas.chemicalFormula}
              </span>
              <span
                className={`rounded-full px-4 py-2 text-base ${
                  gas.hazardClass === '可燃性ガス'
                    ? 'bg-red-500/20'
                    : gas.hazardClass === '支燃性ガス'
                      ? 'bg-orange-500/20'
                      : 'bg-green-500/20'
                }`}
              >
                {gas.hazardClass}
              </span>
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
                  {gas.description}
                </p>

                <h3 className="mb-3 text-[20px] font-bold text-[#0C4050]">
                  主な用途
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {gas.applications.map((app) => (
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
                  src={`/service/industrial_gas_sales/${gas.id}.png`}
                  alt={gas.label}
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
              {Object.entries(gas.properties).map(([key, value]) => {
                const labels: Record<string, string> = {
                  molecularWeight: '分子量',
                  boilingPoint: '沸点',
                  meltingPoint: '融点',
                  density: '密度',
                  solubility: '溶解性',
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

      {/* メリット・注意点セクション */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollAnimation>
              <div>
                <h2 className="mb-6 text-[24px] font-bold text-[#0C4050]">
                  メリット・特長
                </h2>
                <div className="space-y-3">
                  {gas.advantages.map((advantage, index) => (
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
                  注意点・取り扱い
                </h2>
                <div className="space-y-3">
                  {gas.precautions.map((precaution, index) => (
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
                  {gas.regulations.map((regulation, index) => (
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
                  {gas.safetyMeasures.map((measure, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-500"></div>
                      <p className="text-base text-gray-700">{measure}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 産業利用・将来展望セクション */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollAnimation>
              <div>
                <h2 className="mb-4 text-[24px] font-bold text-[#0C4050]">
                  産業での利用
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {gas.industrialUse}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div>
                <h2 className="mb-4 text-[24px] font-bold text-[#0C4050]">
                  将来展望
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {gas.futureOutlook}
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
              {gas.label}に関するご相談
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
                href="/industrial-gases"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#0C4050]"
              >
                他のガスを見る
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
  return Object.keys(industrialGasDetails).map((id) => ({
    id,
  }));
}
