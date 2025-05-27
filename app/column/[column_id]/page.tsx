import { client } from '@/lib/microCMS/clinet';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '../../_components/Contact';
import SectionTitle from '../../_components/SectionTitle';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import '@/app/styles/microcms.css';

type Props = {
  params: Promise<{
    column_id: string;
  }>;
  searchParams: Promise<{
    from?: string;
  }>;
};

export default async function ColumnDetailPage({
  params,
  searchParams,
}: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const data = await client.get({
    endpoint: 'columns',
    contentId: resolvedParams.column_id,
  });

  const backUrl = resolvedSearchParams.from
    ? `/column?page=${resolvedSearchParams.from}`
    : '/column';

  return (
    <>
      <main className="mx-auto max-w-[960px] px-4 pt-10 pb-14 md:pt-20 md:pb-30">
        <SectionTitle en={'Column'} ja={'コラム'} position="ml-auto" />
        <article className="mx-auto mt-16 max-w-[700px] bg-white px-4 md:px-8">
          <ScrollAnimation>
            <div>
              <p className="mb-4 text-[14px] text-gray-600 md:text-[16px]">
                {new Date(data.public_at).toLocaleDateString('ja-JP')}
              </p>
              <h3 className="leading-1.8 mb-6 text-[20px] font-bold md:text-[24px]">
                {data.title}
              </h3>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="column-body prose">
              {data.image && (
                <div className="relative mb-8 w-full">
                  <Image
                    src={data.image.url}
                    alt={data.title}
                    width={data.image.width}
                    height={data.image.height}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              )}
              <div>
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: data.text }}
                />
              </div>
            </div>
          </ScrollAnimation>
        </article>
        <ScrollAnimation delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href={backUrl}
              className="inline-block rounded-sm border border-black px-8 py-2 font-bold transition-opacity duration-300 hover:border-[#0C4050] hover:text-[#0C4050] hover:opacity-80"
            >
              コラム一覧に戻る
            </Link>
          </div>
        </ScrollAnimation>
      </main>
      <Contact />
    </>
  );
}
