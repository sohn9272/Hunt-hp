import React from 'react';
import Link from 'next/link';

export default function CompleteMessage() {
  return (
    <div className="mx-auto max-w-[800px] text-center">
      <div className="mb-8">
        <p className="text-2xl font-bold text-gray-900">
          お問い合わせありがとうございます
        </p>
        <p className="mt-4 text-gray-600">
          お問い合わせを受け付けました。
          <br />
          内容を確認次第、担当者よりご連絡させていただきます。
        </p>
      </div>
      <Link
        href="/"
        className="inline-block rounded-md bg-[#0C4050] px-8 py-3 text-white hover:bg-[#8B0E1C]"
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
