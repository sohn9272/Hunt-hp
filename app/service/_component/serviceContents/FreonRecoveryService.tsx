import ServiceSectionTitle from './ServiceSectionTitle';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import {
  Recycle,
  FileCheck,
  Shield,
  Trash2,
  Leaf,
  FileText,
} from 'lucide-react';

export default function FreonRecoveryService() {
  return (
    <div>
      <ScrollAnimation className="mb-10 md:mb-20">
        <h3 className="mb-4 text-[20px] font-bold md:text-[24px]">
          フロンガス回収・処理とは
        </h3>
        <p className="mb-6 text-sm text-[#0C4050]">
          What is CFC gas recovery and treatment?
        </p>
        <div className="mx-auto mb-4 flex h-[362px] w-[90%] max-w-[836px] items-center justify-center rounded-lg bg-gray-200 md:mb-6">
          <div className="text-center text-gray-500">
            <Recycle className="mx-auto mb-2 h-16 w-16" />
            <p className="text-sm">フロンガス回収・処理工事</p>
          </div>
        </div>
        <p className="leading-1.8 tracling-[0.12em] mx-auto w-[90%] max-w-[836px] text-[14px] font-bold md:text-[18px]">
          フロンガス回収・処理工事は、エアコンや冷凍機器の廃棄・更新時に、機器内のフロンガスを適切に回収し、環境に配慮した処理を行う重要な工事です。フロン排出抑制法に基づき、第1種フロン類回収業者として適切な回収・処理を実施いたします。
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1} className="mb-10">
        <ServiceSectionTitle enTitle="Freon gas recovery work" />
        <h3 className="leading-1.8 mb-4 text-[20px] font-bold md:text-[24px]">
          フロンガス回収工事
        </h3>
        <div className="mx-auto mb-4 flex h-[362px] w-[90%] max-w-[836px] items-center justify-center rounded-lg bg-gray-200 md:mb-6">
          <div className="text-center text-gray-500">
            <Recycle className="mx-auto mb-2 h-16 w-16" />
            <p className="text-sm">フロンガス回収作業</p>
          </div>
        </div>
        <ul className="mx-auto mb-4 flex w-[90%] max-w-[836px] flex-col gap-6 pr-2">
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              01
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <Recycle className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                業務用エアコン・冷凍冷蔵機器からのフロンガス回収
              </p>
            </div>
          </li>
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              02
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <FileCheck className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                回収証明書の発行・適切な記録管理
              </p>
            </div>
          </li>
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              03
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <Shield className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                法令に基づく適切な回収作業
              </p>
            </div>
          </li>
        </ul>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1} className="mb-10">
        <ServiceSectionTitle enTitle="Freon gas treatment and disposal" />
        <h3 className="leading-1.8 mb-4 text-[20px] font-bold md:text-[24px]">
          フロンガス処理・処分
        </h3>
        <div className="mx-auto mb-4 flex h-[362px] w-[90%] max-w-[836px] items-center justify-center rounded-lg bg-gray-200 md:mb-6">
          <div className="text-center text-gray-500">
            <Trash2 className="mx-auto mb-2 h-16 w-16" />
            <p className="text-sm">フロンガス処理・処分</p>
          </div>
        </div>
        <ul className="mx-auto mb-4 flex w-[90%] max-w-[836px] flex-col gap-6 pr-2">
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              01
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <Trash2 className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                認定業者による適切な破壊処理
              </p>
            </div>
          </li>
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              02
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <Leaf className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                環境負荷を最小限に抑えた処理方法の選択
              </p>
            </div>
          </li>
        </ul>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1} className="mb-10">
        <ServiceSectionTitle enTitle="Legal compliance and documentation" />
        <h3 className="leading-1.8 mb-4 text-[20px] font-bold md:text-[24px]">
          法令遵守・書類作成
        </h3>
        <div className="mx-auto mb-4 flex h-[362px] w-[90%] max-w-[836px] items-center justify-center rounded-lg bg-gray-200 md:mb-6">
          <div className="text-center text-gray-500">
            <FileText className="mx-auto mb-2 h-16 w-16" />
            <p className="text-sm">法令遵守・書類作成</p>
          </div>
        </div>
        <ul className="mx-auto mb-4 flex w-[90%] max-w-[836px] flex-col gap-6 pr-2">
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              01
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <FileText className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                フロン排出抑制法に基づく適切な手続き・書類作成
              </p>
            </div>
          </li>
        </ul>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="leading-1.8 mx-auto w-[90%] max-w-[830px] rounded-sm border-2 border-[#0C4050] bg-[#F4F4F4] p-2 text-center tracking-[0.12em] md:p-4">
          <div className="mb-4 md:mb-5">
            <h4 className="">HUNTが</h4>
            <p className="mx-auto w-fit rounded-sm bg-[#0C4050] px-6 py-1 text-white">
              選ばれる理由
            </p>
          </div>
          <p className="text-[12px] font-bold">
            第1種フロン類回収業者として登録済みの弊社では、
            <br className="max-md:hidden" />
            フロン排出抑制法に基づく適切な回収・処理から
            <br className="max-md:hidden" />
            必要書類の作成まで一貫して対応できるため
            <br className="max-md:hidden" />
            安心してお任せいただけます。
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
}
