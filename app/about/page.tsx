import Contact from '../_components/Contact';
import Company from './_component/Company';
import Philosophy from './_component/Philosophy';

export const metadata = {
  title:
    '会社概要 | 株式会社HUNT｜滋賀県のフロンガス・産業用高圧ガス販売の専門会社',
  description:
    '株式会社HUNTの会社概要ページです。滋賀県全域でフロンガス販売、産業用高圧ガス販売、フロンガス回収・処理工事、フロンガス再生・破壊処理を通じて環境保護と産業発展に貢献しています。会社情報・理念・ビジョンをご紹介します。',
  openGraph: {
    title:
      '会社概要 | 株式会社HUNT｜滋賀県のフロンガス・産業用高圧ガス販売の専門会社',
    description:
      '株式会社HUNTの会社概要ページです。滋賀県全域でフロンガス販売、産業用高圧ガス販売、フロンガス回収・処理工事、フロンガス再生・破壊処理を通じて環境保護と産業発展に貢献しています。会社情報・理念・ビジョンをご紹介します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://hunt-hp.com/about',
    siteName: '株式会社HUNT',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:pt-40 md:pb-30">
        <Philosophy />
        <Company />
      </section>
      <Contact />
    </>
  );
}
