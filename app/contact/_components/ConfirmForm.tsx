import React from 'react';
import { ContactFormData, INQUIRY_TYPES } from '../types';

interface ConfirmFormProps {
  formData: ContactFormData;
  onBack: () => void;
  onSubmit: () => void;
}

export default function ConfirmForm({
  formData,
  onBack,
  onSubmit,
}: ConfirmFormProps) {
  const inquiryTypeLabel = INQUIRY_TYPES.find(
    (type) => type.value === formData.inquiryType
  )?.label;

  return (
    <div className="mx-auto max-w-[800px]">
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-bold text-[#2B2B2B]">
            会社名
          </label>
          <div className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm">
            {formData.company}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#2B2B2B]">氏名</label>
          <div className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm">
            {formData.name}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#2B2B2B]">
            メールアドレス
          </label>
          <div className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm">
            {formData.email}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#2B2B2B]">
            電話番号
          </label>
          <div className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm">
            {formData.phone}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#2B2B2B]">
            お問い合わせ項目
          </label>
          <div className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm">
            {inquiryTypeLabel}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#2B2B2B]">
            お問い合わせ内容
          </label>
          <div className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm whitespace-pre-wrap">
            {formData.message}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={onBack}
            className="rounded-md bg-[#282828] px-5 py-1 text-[18px] leading-[2.0] font-bold tracking-[0.1em] text-white hover:cursor-pointer"
          >
            修正する
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="rounded-md bg-[#0C4050] px-5 py-1 text-[18px] leading-[2.0] font-bold tracking-[0.1em] text-white hover:cursor-pointer"
          >
            送信する
          </button>
        </div>
      </div>
    </div>
  );
}
