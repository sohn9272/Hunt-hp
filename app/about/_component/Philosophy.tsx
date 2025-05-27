import SectionTitle from '@/app/_components/SectionTitle';
import Image from 'next/image';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default async function Philosophy() {
  return (
    <section className="mx-auto max-w-[960px] px-4">
      <SectionTitle en="Philosophy" ja="企業理念" position="ml-auto" />
      <ScrollAnimation>
        <h2 className="mt-8 text-[24px] leading-[1.8] font-bold tracking-[0.1em] md:text-[30px]">
          地域と共に歩む、ガスのプロフェッショナル
        </h2>
        <p className="mt-6 text-[14px] leading-[1.8] font-bold tracking-[0.1em]">
          滋賀県を拠点として、フロンガス・産業用高圧ガスの専門企業として地域の産業発展と環境保護に貢献しています。
          私たちは、お客様の「困った」に迅速に対応し、安全で確実なガス供給を通じて、地域産業の基盤を支えます。
          <br />
          環境に配慮した低GWP冷媒の普及促進、適切なフロンガス回収・処理による地球温暖化防止、
          そして次世代に美しい滋賀を残すための取り組みを続けています。
          <br />
          地域密着だからこそできる、きめ細やかなサービスと確かな技術力で、
          お客様と地域社会から信頼される『ガスのパートナー』であり続けること。それが私たちの使命です。
        </p>
      </ScrollAnimation>

      {/* Mission・Vision・Value */}
      <ScrollAnimation delay={0.1}>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-[#F4F4F4] p-6">
            <h3 className="mb-4 text-center text-[20px] font-bold text-[#0C4050]">
              MISSION
            </h3>
            <h4 className="mb-3 text-center text-[16px] font-bold">
              地域産業の基盤を支える
            </h4>
            <p className="text-[14px] leading-[1.6]">
              滋賀県全域でフロンガス・産業用高圧ガスの安全な供給を通じて、地域産業の発展と環境保護に貢献します。
            </p>
          </div>

          <div className="rounded-lg bg-[#F4F4F4] p-6">
            <h3 className="mb-4 text-center text-[20px] font-bold text-[#0C4050]">
              VISION
            </h3>
            <h4 className="mb-3 text-center text-[16px] font-bold">
              滋賀No.1のガス専門企業
            </h4>
            <p className="text-[14px] leading-[1.6]">
              地域密着のサービスと専門技術で、滋賀県で最も信頼されるガス専門企業を目指します。
            </p>
          </div>

          <div className="rounded-lg bg-[#F4F4F4] p-6">
            <h3 className="mb-4 text-center text-[20px] font-bold text-[#0C4050]">
              VALUE
            </h3>
            <h4 className="mb-3 text-center text-[16px] font-bold">
              安全・迅速・環境配慮
            </h4>
            <p className="text-[14px] leading-[1.6]">
              安全第一の取り扱い、迅速な対応、環境への配慮を大切にし、地域社会に貢献します。
            </p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={0.2}>
        <Image
          className="mx-auto mt-[50px]"
          src="/about/philosophy.png"
          alt="企業理念"
          width={622}
          height={312}
        />
      </ScrollAnimation>
    </section>
  );
}
