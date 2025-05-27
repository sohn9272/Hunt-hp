// 冷媒データの型定義
export interface Refrigerant {
  id: string;
  label: string;
  fullName: string;
  category: string;
  description: string;
  applications: string[];
  gwp?: number; // Global Warming Potential
  ozoneDepleting: boolean;
}

export interface RefrigerantDetail extends Refrigerant {
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

// 基本冷媒データ（一覧表示用）
export const refrigerants: Refrigerant[] = [
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

// 冷媒IDから基本データを取得
export function getRefrigerant(id: string): Refrigerant | undefined {
  return refrigerants.find((r) => r.id === id);
}

// 冷媒カテゴリーでフィルタリング
export function getRefrigerantsByCategory(category: string): Refrigerant[] {
  return refrigerants.filter((r) => r.category === category);
}

// GWP値でソート
export function getRefrigerantsSortedByGWP(
  ascending: boolean = true
): Refrigerant[] {
  return [...refrigerants].sort((a, b) => {
    const gwpA = a.gwp || 0;
    const gwpB = b.gwp || 0;
    return ascending ? gwpA - gwpB : gwpB - gwpA;
  });
}

// 環境に優しい冷媒（低GWP）を取得
export function getEcoFriendlyRefrigerants(
  gwpThreshold: number = 1000
): Refrigerant[] {
  return refrigerants.filter(
    (r) => r.gwp && r.gwp < gwpThreshold && !r.ozoneDepleting
  );
}

// 冷媒の環境影響レベルを取得
export function getEnvironmentalImpactLevel(
  refrigerant: Refrigerant
): 'low' | 'medium' | 'high' {
  if (refrigerant.ozoneDepleting) return 'high';
  if (!refrigerant.gwp) return 'medium';
  if (refrigerant.gwp < 1000) return 'low';
  if (refrigerant.gwp < 2000) return 'medium';
  return 'high';
}

// 冷媒の環境影響レベルに応じた色を取得
export function getEnvironmentalImpactColor(
  level: 'low' | 'medium' | 'high'
): string {
  switch (level) {
    case 'low':
      return 'text-green-600';
    case 'medium':
      return 'text-yellow-600';
    case 'high':
      return 'text-red-600';
  }
}

// 冷媒の環境影響レベルに応じた背景色を取得
export function getEnvironmentalImpactBgColor(
  level: 'low' | 'medium' | 'high'
): string {
  switch (level) {
    case 'low':
      return 'bg-green-100';
    case 'medium':
      return 'bg-yellow-100';
    case 'high':
      return 'bg-red-100';
  }
}
