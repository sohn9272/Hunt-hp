import Image from 'next/image';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import Link from 'next/link';

export default function FreonGasSales() {
  return (
    <div>
      <ScrollAnimation className="mb-10 md:mb-20">
        <h3 className="mb-4 text-[20px] font-bold md:text-[24px]">
          フロンガス販売とは
        </h3>
        <p className="mb-6 text-sm text-[#0C4050]">What is Freon Gas Sales</p>
        <Image
          src="/service/freon_gas_sales/freon_gas_sales.png"
          alt="フロンガス販売"
          width={836}
          height={362}
          className="mx-auto mb-4 w-[90%] max-w-[836px] object-cover md:mb-6"
        />
        <p className="leading-1.8 tracling-[0.12em] mx-auto w-[90%] max-w-[836px] text-[14px] font-bold md:text-[18px]">
          エアコンや冷凍・冷蔵機器の心臓部ともいえる冷媒ガス。当社では、地球環境への影響が少ない代替フロン（低GWP製品）や、環境基準をクリアした最新のフロンガスを豊富に取り揃えています。
          <br className="max-md:hidden" />
          お客様の機器の種類、ご使用状況、そして環境への配慮といったご要望を丁寧にお伺いし、安全性・性能・環境負荷の観点から最適な製品をご提案いたします。
        </p>
      </ScrollAnimation>

      {/* <ScrollAnimation>
        <div className="leading-1.8 mx-auto w-[90%] max-w-[830px] rounded-sm border-2 border-[#0C4050] bg-[#F4F4F4] p-2 text-center tracking-[0.12em] md:p-4">
          <div className="mb-4 md:mb-5">
            <h4 className="">AICHISYSTEMが</h4>
            <p className="mx-auto w-fit rounded-sm bg-[#0C4050] px-6 py-1 text-white">
              選ばれる理由
            </p>
          </div>
          <p className="text-[12px] font-bold">
            甲種4類消防設備士 + 第二種電気工事士の資格を保有している弊社では、
            <br className="max-md:hidden" />
            自動火災報知設備やガス漏れ警報設備の設置工事と、それに伴う電気配線工事を
            <br className="max-md:hidden" />
            一貫して対応できるため安価にワンストップで対応が可能です。
          </p>
        </div>
      </ScrollAnimation> */}

      {/* 取扱冷媒の種類セクション */}
      <section className="mt-12">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="mb-2 text-[18px] font-bold md:text-[22px]">
            取扱冷媒の種類
          </h3>
          <p className="mb-6 text-sm text-[#0C4050]">
            Types of refrigerants handled
          </p>
          <div className="mb-6 text-center"></div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {[
              { id: 'r410a', label: '410A（R-410A）' },
              { id: 'r407c', label: '407C（R-407C）' },
              { id: 'r404a', label: '404A（R-404A）' },
              { id: 'r22', label: 'R-22（HCFC-22）' },
              { id: 'r32', label: 'R-32（HFC-32）' },
            ].map((item) => (
              <Link
                key={item.id}
                href={`/refrigerants/${item.id}`}
                className="group flex cursor-pointer flex-col items-center rounded-lg bg-gray-100 p-4 shadow transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-gray-400 hover:shadow-2xl"
              >
                <img
                  src={`/service/freon_gas_sales/${item.id}.png`}
                  alt={item.label}
                  className="mb-2 h-[250px] w-[500px] object-contain"
                />
                <span className="text-center text-[15px] font-semibold">
                  {item.label}
                </span>
                <span className="mt-4 hidden items-center justify-center gap-2 rounded bg-[#0C4050] px-4 py-2 text-sm font-bold text-white transition-all duration-200 group-hover:flex">
                  詳細を見る
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/refrigerants"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0C4050] to-[#1a6b7a] px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#0C4050]/25"
            >
              すべての冷媒を見る
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 配送可能エリアセクション */}
      <section className="mt-16">
        <h3 className="mb-2 text-[18px] font-bold md:text-[22px]">
          配送可能エリア
        </h3>
        <p className="mb-4 text-sm text-[#0C4050]">Delivery Area</p>
        <p className="mb-4">滋賀県全域へのご配送が可能です。</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {[
            '大津エリア',
            '草津・湖南エリア',
            '甲賀・信楽エリア',
            '近江八幡・東近江エリア',
            '彦根・湖東エリア',
            '長浜・湖北エリア',
            '高島・湖西エリア',
          ].map((area) => (
            <span key={area} className="rounded bg-gray-100 px-3 py-1 text-sm">
              {area}
            </span>
          ))}
        </div>
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-xl">
          <img
            src="/service/freon_gas_sales/delivery-area.png"
            alt="配送可能エリアマップ"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
