import Contact from './_components/Contact';
import AboutUs from './_components/AboutUs';
import News from './_components/news/News';
import Service from './_components/Serivece';
import FirstView from './_components/FirstView';
import RefrigerantSection from './_components/RefrigerantSection';

export const metadata = {
  title: '株式会社HUNT | 滋賀県のフロンガス・産業用高圧ガス販売の専門会社',
  description:
    '株式会社HUNTは、滋賀県大津市を拠点とするフロンガス・産業用高圧ガスの専門企業です。フロンガス販売、産業用高圧ガス販売、フロンガス回収・処理工事、フロンガス再生・破壊処理を通じて地域産業の発展と環境保護に貢献しています。',
  keywords:
    '滋賀県, 大津市, フロンガス, 産業用高圧ガス, 冷媒, 酸素, 窒素, アルゴン, 二酸化炭素, アセチレン, ヘリウム, 回収, 処理, 再生, 破壊, 環境保護, 地域密着',
  openGraph: {
    title: '株式会社HUNT | 滋賀県のフロンガス・産業用高圧ガス販売の専門会社',
    description:
      '株式会社HUNTは、滋賀県大津市を拠点とするフロンガス・産業用高圧ガスの専門企業です。フロンガス販売、産業用高圧ガス販売、フロンガス回収・処理工事、フロンガス再生・破壊処理を通じて地域産業の発展と環境保護に貢献しています。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://hunt-hp.com/',
    siteName: '株式会社HUNT',
  },
};

export default function Home() {
  return (
    <>
      <FirstView />
      <AboutUs />
      <Service />
      <RefrigerantSection />
      <News />
      <Contact />
    </>
  );
}
