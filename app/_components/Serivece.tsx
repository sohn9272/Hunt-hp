import SectionTitle from '@/app/_components/SectionTitle';
import Image from 'next/image';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import Link from 'next/link';

export default async function Service() {
  const cards = [
    {
      num: '01',
      title: 'フロンガス販売',
      desc: '地球温暖化対策が重要視される現代において、フロンガスの適切な管理と、環境負荷の低い製品の選択は不可欠です。当社では、温暖化係数の低い代替フロンや、環境基準をクリアした最新の製品を豊富に取り揃え、お客様のニーズに合わせた最適な製品をご提案いたします。環境への影響、安全性、使いやすさなど厳しい基準をクリアした製品を主力に、滋賀県全域へ素早くお届けいたします。',
      img: '/top/service/freon-gas-sales.webp',
      alt: 'フロンガス販売',
      href: '/service/freon-gas-sales',
    },
    {
      num: '02',
      title: '産業用高圧ガス販売',
      desc: '産業用高圧ガスは、製造業、医療、研究開発など、様々な分野で重要な役割を担っております。当社では、酸素、窒素、アルゴン、液化窒素(LN2)、といった幅広い種類の産業用高圧ガスを取り扱っており、お客様の多様なニーズにお応えいたします。ガス供給方法も、ボンベ、ローリー、オンサイトなど、お客様の使用量や用途に合わせて最適な方法をご提案いたします。',
      img: '/top/service/Sales-of-high-pressure-gas-for-industrial.png',
      alt: '産業用高圧ガス販売',
      href: '/service/industrial-gas-sales',
    },
    {
      num: '03',
      title: 'フロンガス回収・処理の工事',
      desc: '環境保全と法令遵守を重視し、フロンガスの適正な回収・処理を実施しております。フロンガスは、オゾン層破壊や地球温暖化の原因となる物質であり、適切な回収・処理を行うことが大切です。エアコン、冷蔵庫、冷凍機器など幅広い機器から環境に配慮し、持続可能な社会の実現に貢献いたします。',
      img: '/top/service/Construction-of-CFC-gas-recovery-and-treatment.png',
      alt: 'フロンガス回収・処理の受託',
      href: '/service/freon-recovery-service',
    },
    {
      num: '04',
      title: 'フロンガス再生・破壊処理',
      desc: 'フロンガスの再生・破壊処理は、環境保全と法令遵守の観点から非常に重要な業務です。当社では、使用済みフロンガスを適切に回収し、最新の技術で再生処理または安全に破壊処理を行っています。これにより、オゾン層破壊や地球温暖化の防止に貢献し、持続可能な社会の実現を目指しています。お客様のご要望や機器の種類に応じて、最適な処理方法をご提案いたします。',
      img: '/top/service/CFC-gas-regeneration-and-destruction treatment.png',
      alt: 'フロンガス再生・破壊処理',
      href: '/service/freon-recycling-disposal',
    },
  ];

  return (
    <ScrollAnimation>
      <section className="bg-[#F4F4F4] pt-14 md:pt-20">
        <div className="mx-auto w-full px-0 md:px-0 md:pl-40">
          <SectionTitle en="Our Service" ja="事業内容" position="mr-auto" />
        </div>
        <div className="mt-[30px] flex w-full flex-col items-center gap-8 md:mt-[60px]">
          {cards.map((card, idx) => (
            <Link
              key={card.num}
              href={card.href}
              className={`relative h-[500px] w-full overflow-hidden rounded-xl bg-[#343434] text-white shadow-lg transition-all duration-300 hover:bg-[#0C4050] sm:w-[52%] ${idx % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'} mx-auto sm:mx-0`}
            >
              <Image
                src={card.img}
                alt={card.alt}
                fill
                className="h-full w-full object-cover"
                style={{ opacity: 0.7 }}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-8">
                <div>
                  <div className="flex items-center gap-x-2">
                    <span className="text-base font-light tracking-widest">
                      {card.num}
                    </span>
                    <h4 className="text-xl font-bold">{card.title}</h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">{card.desc}</p>
                </div>
                <div className="flex justify-end">
                  <span className="block h-6 w-6">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
}
