import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { ContactFormData, INQUIRY_TYPES } from '@/app/contact/types';
import type { TransportOptions } from 'nodemailer';

// メール送信用のトランスポーターを作成
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST as string,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
} as TransportOptions);

// お問い合わせ種別を日本語に変換する関数
const getInquiryTypeLabel = (value: string): string => {
  const type = INQUIRY_TYPES.find((type) => type.value === value);
  return type ? type.label : value;
};

export async function POST(request: Request) {
  try {
    const formData: ContactFormData = await request.json();

    // メール本文の作成
    const mailContent = `
お問い合わせ頂きありがとうございます。
以下の内容にて、お問い合わせを受け付けました。

お問い合わせ内容：
会社名：${formData.company}
お名前：${formData.name}
メールアドレス：${formData.email}
電話番号：${formData.phone}
お問い合わせ種別：${getInquiryTypeLabel(formData.inquiryType)}
メッセージ：
${formData.message}

内容を確認の上、改めて担当者よりご連絡差し上げます。
引き続きどうぞよろしくお願いいたします。
    `;

    // メール送信（awaitで完了を待つ）
    await transporter.sendMail({
      from: process.env.NODE_MAILER_USER,
      to: formData.email,
      bcc: process.env.NODE_MAILER_USER, // 管理者にもBCCで送信
      subject: '【株式会社HUNT】お問い合わせありがとうございます',
      text: mailContent,
    });

    // 成功レスポンス
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メールの送信に失敗しました' },
      { status: 500 }
    );
  }
}
