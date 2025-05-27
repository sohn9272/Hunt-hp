import React from 'react';
import { ContactFormData, INQUIRY_TYPES } from '../types';

interface ContactFormProps {
  formData: ContactFormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({
  formData,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-[800px]">
      <div className="space-y-8">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-bold text-[#2B2B2B]"
          >
            <span className="text-red-500">*</span>
            会社名
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={onChange}
            required
            minLength={1}
            maxLength={100}
            className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm focus:border-[#0C4050] focus:ring-1 focus:ring-[#0C4050] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-[#2B2B2B]"
          >
            <span className="text-red-500">*</span>
            氏名
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            minLength={1}
            maxLength={50}
            className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm focus:border-[#0C4050] focus:ring-1 focus:ring-[#0C4050] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-[#2B2B2B]"
          >
            <span className="text-red-500">*</span>
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm focus:border-[#0C4050] focus:ring-1 focus:ring-[#0C4050] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-[#2B2B2B]"
          >
            <span className="text-red-500">*</span>
            電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            required
            pattern="[0-9-+()]*"
            className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm focus:border-[#0C4050] focus:ring-1 focus:ring-[#0C4050] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="inquiryType"
            className="block text-sm font-bold text-[#2B2B2B]"
          >
            <span className="text-red-500">*</span>
            お問い合わせ項目
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={onChange}
            required
            className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm focus:border-[#0C4050] focus:ring-1 focus:ring-[#0C4050] focus:outline-none"
          >
            <option value="">選択してください</option>
            {INQUIRY_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-[#2B2B2B]"
          >
            <span className="text-red-500">*</span>
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            required
            rows={6}
            minLength={10}
            maxLength={1000}
            className="mt-3 block w-full rounded-sm bg-[#F2F2F2] p-3 text-sm focus:border-[#0C4050] focus:ring-1 focus:ring-[#0C4050] focus:outline-none"
          />
        </div>
        <div className="leadins-[2.0] mt-10 text-sm leading-[2.0] tracking-[0.1em]">
          このフォームではお客様の名前やメールアドレスなどの個人情報を収集いたします。
          <br />
          詳しくは、当社の個人情報の取扱いについてをご確認いただき、同意いただいた上で送信いただくようお願いいたします。
        </div>

        <div>
          <label className="mt-14 flex items-center justify-center space-x-3">
            <input
              type="checkbox"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={onChange}
              required
              className="h-4 w-4 text-[#0C4050] focus:ring-[#0C4050]"
            />
            <span className="text-sm text-[#2B2B2B]">
              <a
                href="/privacy-policy"
                className="text-sm text-[#0C4050] underline"
              >
                個人情報の取り扱いについて
              </a>
            </span>
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="rounded-xs bg-[#282828] px-5 py-3 text-[18px] leading-[2.0] font-bold tracking-[0.1em] text-white hover:cursor-pointer"
          >
            同意の上、入力内容を確認
          </button>
        </div>
      </div>
    </form>
  );
}
