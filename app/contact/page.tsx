import SectionTitle from '../_components/SectionTitle';
import ContactClient from './_components/ContactClient';

export const metadata = {
  title:
    'お問い合わせ | 株式会社HUNT｜フロンガス・産業用高圧ガスのご相談はこちら',
  description:
    '株式会社HUNTへのお問い合わせページ。フロンガス販売・産業用高圧ガス販売・フロンガス回収処理工事に関するご相談・ご質問・お見積り依頼はお気軽にご連絡ください。滋賀県全域対応。',
  openGraph: {
    title:
      'お問い合わせ | 株式会社HUNT｜フロンガス・産業用高圧ガスのご相談はこちら',
    description:
      '株式会社HUNTへのお問い合わせページ。フロンガス販売・産業用高圧ガス販売・フロンガス回収処理工事に関するご相談・ご質問・お見積り依頼はお気軽にご連絡ください。滋賀県全域対応。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://hunt-hp.com/contact',
    siteName: '株式会社HUNT',
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[960px] px-4 pt-20 pb-20 md:pt-30">
      <SectionTitle
        en="CONTACT"
        ja="お問い合わせ"
        position="ml-auto"
        large={true}
      />
      <div className="mt-16">
        <ContactClient />
      </div>
    </section>
  );
}
