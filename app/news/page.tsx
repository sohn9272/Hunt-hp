import NewsCard from '../_components/news/NewsCard';
import SectionTitle from '../_components/SectionTitle';
import content from '../_components/news/data/content.json';
import Contact from '../_components/Contact';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export const metadata = {
  title: 'お知らせ・最新情報 | 株式会社HUNT',
  description:
    '株式会社HUNTのニュースページ。フロンガス・産業用高圧ガス販売、回収・処理工事に関する最新のお知らせや更新情報を掲載しています。滋賀県の皆様へ重要な情報をお届けします。',
  openGraph: {
    title: 'お知らせ・最新情報 | 株式会社HUNT',
    description:
      '株式会社HUNTのニュースページ。フロンガス・産業用高圧ガス販売、回収・処理工事に関する最新のお知らせや更新情報を掲載しています。滋賀県の皆様へ重要な情報をお届けします。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://hunt-hp.com/news',
    siteName: '株式会社HUNT',
  },
};

export default async function NewsPage() {
  return (
    <>
      <section className="mx-auto max-w-[960px] px-10 pt-20 pb-20 md:pt-30">
        <SectionTitle en="NEWS" ja="ニュース" position="ml-auto" />
        <ScrollAnimation className="mt-[60px]">
          {content.map(
            (
              item: {
                publication_date: string;
                content: string;
                image: string;
              },
              index: number
            ) => (
              <NewsCard
                key={index}
                date={item.publication_date}
                content={item.content}
                image={item.image}
                hasTopBorder={index === 0}
              />
            )
          )}
        </ScrollAnimation>
      </section>
      <Contact />
    </>
  );
}
