import SectionTitle from '@/app/_components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default async function AboutUs() {
  return (
    <>
      <section className="relative">
        <div className="flex bg-[#0C4050] px-4 py-8 lg:h-[500px] lg:px-8 lg:pt-16">
          <div className="mx-auto h-fit items-center justify-center lg:flex lg:w-full lg:max-w-[1200px]">
            <SectionTitle
              en="About Us"
              ja="会社情報"
              position="mr-auto"
              variant={true}
            />
            <ScrollAnimation className="text-white lg:w-1/2 lg:border-l-2 lg:border-white lg:pl-14">
              <h2 className="mt-4 text-[24px] font-bold tracking-[0.08em] md:text-[30px] lg:mt-6 lg:text-[35px] xl:text-[40px]">
                見つける、備える、守る
              </h2>
              <h3 className="leading-[1.8] font-bold tracking-[0.1em] lg:text-[26px]">
                Find. Prepare. Protect.
              </h3>
            </ScrollAnimation>
          </div>
        </div>
        <div className="hidden h-[180px] bg-[#F4F4F4] lg:block"></div>
        <ScrollAnimation className="mx-auto w-full bg-white px-8 py-8 md:mt-20 lg:absolute lg:top-[calc(50%+65px)] lg:left-1/2 lg:mt-10 lg:max-w-[960px] lg:-translate-x-1/2 lg:-translate-y-1/2">
          <div className="flex flex-col-reverse justify-between gap-4 md:flex-row">
            <p className="mt-4 leading-[1.8]">
              滋賀県全域で、地球環境に配慮したガスソリューションを提供しています。温暖化係数の低い代替フロンや最新の環境基準をクリアした製品、酸素・窒素・アルゴンといった多様な産業用高圧ガスを豊富に取り揃え、お客様のニーズに最適な形でご提案・供給いたします。
              <br />
              また、法令遵守を徹底し、フロンガスの回収・処理工事から、最新技術を用いた再生・破壊処理まで一貫して対応し、
              環境保全を最優先に、お客様の事業活動を支え、持続可能な社会の実現に貢献してまいります。
            </p>
            <Image
              className="mx-auto w-[70%] md:w-[40%]"
              src="/top/aboutus/about_us.png"
              alt="about_us_1"
              width={360}
              height={220}
            />
          </div>
          <Link
            className="mt-4 block rounded-sm bg-[#343434] py-4 text-center text-[20px] text-white hover:cursor-pointer max-md:mx-auto max-md:mt-8 md:h-[64px] md:w-[285px]"
            href="/about"
          >
            <div>Read More</div>
          </Link>
        </ScrollAnimation>
      </section>
    </>
  );
}
