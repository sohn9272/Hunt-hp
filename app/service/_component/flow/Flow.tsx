import SectionTitle from '@/app/_components/SectionTitle';
import { getFlowData } from './data/getFlowData';
import FlowCard from './FlowCard';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

interface FlowProps {
  serviceType:
    | 'freon_gas_sales'
    | 'industrial_gas_sales'
    | 'freon_recovery_service'
    | 'freon_recycling_disposal';
}

export default async function Flow({ serviceType }: FlowProps) {
  const data = await getFlowData(serviceType);

  return (
    <ScrollAnimation>
      <section className="relative bg-[#F4F4F4] py-20">
        <div className="relative mx-auto max-w-[958px] px-4">
          <SectionTitle en="Flow" ja="フロー" position="ml-auto" />
          {data.map(
            (
              item: { title: string; text: string; image: string },
              index: number
            ) => (
              <div key={index} className="relative">
                <FlowCard
                  stepNumber={index + 1}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                />
                {index < data.length - 1 && (
                  <div className="relative">
                    <div className="absolute left-[50%] h-8 w-0 border-l-[2px] border-[#0C4050] sm:h-16 sm:border-l-[3px]"></div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </section>
    </ScrollAnimation>
  );
}
