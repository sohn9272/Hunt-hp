import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default async function Contact() {
  return (
    <>
      <section
        className="relative bg-gray-400 leading-[1.8] tracking-[0.1em] text-white"
        style={{
          backgroundImage: 'url(/contact/contact-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="relative z-10 py-10 pt-12 pb-20">
          <ScrollAnimation className="text-center font-bold">
            <p className="text-[45px] tracking-[0.35em] sm:text-[55px]">
              CONTACT
            </p>
            <p className="text-[18px] sm:text-[24px]">
              お気軽にお問い合わせ下さい！
            </p>
          </ScrollAnimation>
          <ScrollAnimation className="mx-auto mt-10 flex max-w-[960px] items-center justify-evenly font-bold max-lg:flex-col max-lg:gap-y-8">
            <div className="mx-auto flex items-center justify-center gap-x-3 max-lg:w-[80%] sm:gap-x-6">
              <div className="relative h-[50px] w-[50px] sm:h-[80px] sm:w-[80px]">
                <Image
                  src="/contact/phone.svg"
                  alt="電話アイコン"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-[28px] leading-[1.3] sm:text-[44px]">
                  0545-43-2943
                </p>
                <p className="text-[18px] tracking-[0.12em] sm:text-[22px]">
                  営業時間 8:00 ~ 17:00
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="hover:cursor-pointer max-sm:w-[90%]"
            >
              <div className="mx-auto flex h-20 items-center justify-center gap-x-6 rounded-sm bg-[#0C4050] px-6 duration-150 hover:bg-[#072635] sm:px-9">
                <div className="relative h-[27px] w-[42px]">
                  <Image src="/contact/mail.svg" alt="メールアイコン" fill />
                </div>
                <p className="text-[18px] sm:text-[20px]">
                  お問い合わせフォームへ
                </p>
              </div>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
