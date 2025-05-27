import ServiceSectionTitle from './ServiceSectionTitle';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import {
  Recycle,
  Trash2,
  Leaf,
  Shield,
  FileCheck,
  Factory,
} from 'lucide-react';

export default function FreonRecyclingDisposal() {
  return (
    <div>
      <ScrollAnimation className="mb-10 md:mb-20">
        <h3 className="mb-4 text-[20px] font-bold md:text-[24px]">
          フロンガス再生・破壊処理とは
        </h3>
        <p className="mb-6 text-sm text-[#0C4050]">
          What is CFC gas recycling and destruction?
        </p>
        <div className="mx-auto mb-4 flex h-[362px] w-[90%] max-w-[836px] items-center justify-center rounded-lg bg-gray-200 md:mb-6">
          <div className="text-center text-gray-500">
            <Recycle className="mx-auto mb-2 h-16 w-16" />
            <p className="text-sm">フロンガス再生・破壊処理</p>
          </div>
        </div>
        <p className="leading-1.8 tracling-[0.12em] mx-auto w-[90%] max-w-[836px] text-[14px] font-bold md:text-[18px]">
          フロンガス再生・破壊処理は、回収したフロンガスを環境負荷を最小限に抑制しながら適切に処理する重要な工程です。再利用可能なフロンガスは精製・再生を行い、再利用できないものは適切な破壊処理により無害化いたします。
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1} className="mb-10">
        <ServiceSectionTitle enTitle="Freon gas recycling process" />
        <h3 className="leading-1.8 mb-4 text-[20px] font-bold md:text-[24px]">
          フロンガス再生処理
        </h3>
        <div className="mx-auto mb-4 flex h-[362px] w-[90%] max-w-[836px] items-center justify-center rounded-lg bg-gray-200 md:mb-6">
          <div className="text-center text-gray-500">
            <Recycle className="mx-auto mb-2 h-16 w-16" />
            <p className="text-sm">フロンガス再生処理</p>
          </div>
        </div>
        <ul className="mx-auto mb-4 flex w-[90%] max-w-[836px] flex-col gap-6 pr-2">
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              01
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <FileCheck className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                回収フロンガスの品質検査・成分分析
              </p>
            </div>
          </li>
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              02
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <Factory className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                不純物除去・精製による品質向上
              </p>
            </div>
          </li>
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              03
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <Recycle className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                再生フロンガスとして再利用可能な状態に処理
              </p>
            </div>
          </li>
        </ul>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1} className="mb-10">
        <ServiceSectionTitle enTitle="Freon gas destruction process" />
        <h3 className="leading-1.8 mb-4 text-[20px] font-bold md:text-[24px]">
          フロンガス破壊処理
        </h3>
        <div className="mx-auto mb-4 flex h-[362px] w-[90%] max-w-[836px] items-center justify-center rounded-lg bg-gray-200 md:mb-6">
          <div className="text-center text-gray-500">
            <Trash2 className="mx-auto mb-2 h-16 w-16" />
            <p className="text-sm">フロンガス破壊処理</p>
          </div>
        </div>
        <ul className="mx-auto mb-4 flex w-[90%] max-w-[836px] flex-col gap-6 pr-2">
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              01
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <Shield className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                認定破壊業者による安全な破壊処理
              </p>
            </div>
          </li>
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              02
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <Trash2 className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                高温燃焼による完全な分解・無害化
              </p>
            </div>
          </li>
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              03
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <FileCheck className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                破壊証明書の発行・適切な記録管理
              </p>
            </div>
          </li>
        </ul>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1} className="mb-10">
        <ServiceSectionTitle enTitle="Environmental benefits" />
        <h3 className="leading-1.8 mb-4 text-[20px] font-bold md:text-[24px]">
          環境への配慮
        </h3>
        <div className="mx-auto mb-4 flex h-[362px] w-[90%] max-w-[836px] items-center justify-center rounded-lg bg-gray-200 md:mb-6">
          <div className="text-center text-gray-500">
            <Leaf className="mx-auto mb-2 h-16 w-16" />
            <p className="text-sm">環境保護への取り組み</p>
          </div>
        </div>
        <ul className="mx-auto mb-4 flex w-[90%] max-w-[836px] flex-col gap-6 pr-2">
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              01
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <Leaf className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                オゾン層破壊の防止・地球温暖化抑制
              </p>
            </div>
          </li>
          <li className="flex items-center gap-6 md:gap-8">
            <p className="text-[16px] font-bold text-[#0C4050] md:text-[18px]">
              02
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex min-h-[50px] min-w-[50px] items-center justify-center rounded-full bg-[#0C4050]/10">
                <Recycle className="h-7 w-7 text-[#0C4050]" />
              </div>
              <p className="text-[14px] leading-relaxed md:text-[16px]">
                資源の有効活用・循環型社会への貢献
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
            認定業者との連携により、フロンガスの再生から破壊まで
            <br className="max-md:hidden" />
            環境負荷を最小限に抑えた適切な処理を実現し、
            <br className="max-md:hidden" />
            お客様の環境保護への取り組みを
            <br className="max-md:hidden" />
            全面的にサポートいたします。
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
}
