import SectionTitle from '@/app/_components/SectionTitle';
import TableRow from './TableRow';
import companyData from './data/companyData.json';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default async function Company() {
  return (
    <section className="mx-auto mt-14 max-w-[960px] px-4 md:mt-20">
      <SectionTitle en="Company" ja="会社概要" position="left" />
      <ScrollAnimation className="md:mt-10">
        <table className="w-full border-collapse md:table-fixed">
          <tbody>
            {companyData.companyInfo.map((item, index) => (
              <TableRow
                key={item.label}
                label={item.label}
                value={item.value}
                isFirstRow={index === 0}
              />
            ))}
          </tbody>
        </table>
      </ScrollAnimation>

      {/* Googleマップ */}
      <ScrollAnimation delay={0.1} className="mt-12">
        <h3 className="mb-6 text-[20px] font-bold text-[#0C4050]">アクセス</h3>
        <div className="overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.193957338488!2d135.9250557754543!3d35.12683306023001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600175618844d079%3A0xfb883cccd249b1d8!2z44CSNTIwLTAyNDEg5ruL6LOA55yM5aSn5rSl5biC5LuK5aCF55Sw77yT5LiB55uu77yR77yZ4oiS77yR!5e0!3m2!1sja!2sjp!4v1748361710007!5m2!1sja!2sjp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="株式会社HUNT 本社所在地"
          />
        </div>
        <div className="mt-4 rounded-lg bg-[#F4F4F4] p-4">
          <p className="text-[14px] leading-[1.6] text-gray-700">
            <strong>住所:</strong> 〒520-0241 滋賀県大津市今堅田3丁目19番1号2F
            <br />
            <strong>アクセス:</strong> JR湖西線「堅田駅」より徒歩15分
            <br />
            <strong>駐車場:</strong>{' '}
            完備（お車でお越しの際はお気軽にご利用ください）
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
}
