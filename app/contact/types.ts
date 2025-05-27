export interface ContactFormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  privacyPolicy: boolean;
}

export const INQUIRY_TYPES = [
  { value: 'freon_gas_sales', label: 'フロンガス販売について' },
  { value: 'industrial_gas_sales', label: '産業用高圧ガス販売について' },
  {
    value: 'freon_recovery_service',
    label: 'フロンガス回収・処理の工事について',
  },
  {
    value: 'freon_recycling_disposal',
    label: 'フロンガス再生・破壊処理について',
  },
  { value: 'other', label: 'その他のお問い合わせ' },
] as const;
