import { client } from '@/lib/microCMS/clinet';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '../_components/Contact';
import SectionTitle from '../_components/SectionTitle';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

type ColumnItem = {
  id: string;
  title: string;
  image?: {
    url: string;
    height: number;
    width: number;
  };
  text: string;
  public_at: string;
};

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export const metadata = {
  title: 'フロンガス・産業用高圧ガスコラム一覧 | 株式会社HUNT',
  description:
    '株式会社HUNTのコラム一覧ページ。フロンガス・産業用高圧ガス・冷媒に関する最新情報やお役立ちコラムを発信しています。滋賀県の皆様に安全で環境に配慮したガス供給をお届けします。',
  openGraph: {
    title: 'フロンガス・産業用高圧ガスコラム一覧 | 株式会社HUNT',
    description:
      '株式会社HUNTのコラム一覧ページ。フロンガス・産業用高圧ガス・冷媒に関する最新情報やお役立ちコラムを発信しています。滋賀県の皆様に安全で環境に配慮したガス供給をお届けします。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://hunt-hp.com/column',
    siteName: '株式会社HUNT',
  },
};

export default async function ColumnPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const ITEMS_PER_PAGE = 10;
  const currentPage = Number(resolvedSearchParams.page || '1');
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const response = await client.get({
    endpoint: 'columns',
    queries: {
      offset,
      limit: ITEMS_PER_PAGE,
    },
  });

  const data: ColumnItem[] = response.contents || [];
  const totalPages = Math.ceil(response.totalCount / ITEMS_PER_PAGE);

  const renderPaginationNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      // 5ページ以下の場合は全ページ表示
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 2) {
      // 1,2ページ目の場合
      pages.push(1, 2, 3, 'dots', totalPages);
    } else if (currentPage >= totalPages - 1) {
      // 最後から2ページ以内の場合
      pages.push(1, 'dots', totalPages - 2, totalPages - 1, totalPages);
    } else {
      // それ以外の場合は現在のページを中心に表示
      pages.push(
        1,
        'dots',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        'dots',
        totalPages
      );
    }

    return pages.map((page, index) => {
      if (page === 'dots') {
        return (
          <span key={`dots-${index}`} className="px-1">
            ...
          </span>
        );
      }

      return (
        <Link
          key={page}
          href={`/column?page=${page}`}
          className={`inline-flex h-8 w-8 items-center justify-center ${
            currentPage === page
              ? 'text-[#0C4050]'
              : 'text-black hover:text-[#0C4050]'
          } transition-colors duration-300`}
        >
          {page}
        </Link>
      );
    });
  };

  return (
    <>
      <section className="mx-auto max-w-[960px] px-4 pt-20 pb-20 md:pb-30">
        <SectionTitle en={'Column'} ja={'コラム'} position="ml-auto" />
        {data.length > 0 ? (
          <>
            <div className="mt-16 grid grid-cols-1 justify-center gap-8 px-4 md:grid-cols-2 md:px-8">
              {data.map((item: ColumnItem, index: number) => (
                <ScrollAnimation key={item.id} delay={index * 0.1}>
                  <Link
                    href={`/column/${item.id}?from=${currentPage}`}
                    className="group block"
                  >
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                      {item.image && (
                        <div className="relative w-full overflow-hidden">
                          <Image
                            src={item.image.url}
                            alt={item.title}
                            width={item.image.width}
                            height={item.image.height}
                            className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <CardHeader className="p-4">
                        <p className="mb-2 text-sm text-gray-600 transition-colors duration-300 group-hover:text-[#0C4050]">
                          {new Date(item.public_at).toLocaleDateString('ja-JP')}
                        </p>
                        <CardTitle className="line-clamp-2 text-lg font-semibold transition-colors duration-300 group-hover:text-[#0C4050]">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-6 flex justify-center gap-1 md:mt-12">
                {renderPaginationNumbers()}
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-600">コラムがありません</p>
        )}
      </section>
      <Contact />
    </>
  );
}
