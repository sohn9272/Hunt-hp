import SectionTitle from '@/app/_components/SectionTitle';
import content from './data/content.json';
import Link from 'next/link';
import NewsCard from './NewsCard';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default async function News() {
  const topNews = content.slice(0, 3);

  return (
    <>
      <section className="bg-[#F4F4F4] py-[60px]">
        <div className="mx-auto max-w-[960px] px-10">
          <SectionTitle en="NEWS" ja="ニュース" position="ml-auto" />
          <ScrollAnimation className="mt-[60px]">
            {topNews.map(
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
          <ScrollAnimation>
            <Link
              className="mx-auto mt-8 block rounded-sm bg-[#343434] py-4 text-center text-[20px] text-white hover:cursor-pointer max-md:mx-auto max-md:mt-8 md:h-[64px] md:w-[285px]"
              href="/news"
            >
              <div>Read More</div>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
