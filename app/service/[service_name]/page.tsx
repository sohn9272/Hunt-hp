import Contact from '@/app/_components/Contact';
import Flow from '../_component/flow/Flow';
import ServiceBody from '../_component/ServiceBody';

interface PageProps {
  params: Promise<{ service_name: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { service_name } = await params;

  const getServiceType = (serviceName: string) => {
    switch (serviceName) {
      case 'freon-gas-sales':
        return 'freon_gas_sales';
      case 'industrial-gas-sales':
        return 'industrial_gas_sales';
      case 'freon-recovery-service':
        return 'freon_recovery_service';
      case 'freon-recycling-disposal':
        return 'freon_recycling_disposal';
      default:
        throw new Error(`Invalid service name: ${serviceName}`);
    }
  };

  const serviceType = getServiceType(service_name);

  return (
    <>
      <section>
        <ServiceBody />
        <Flow serviceType={serviceType} />
      </section>
      <Contact />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service_name: string }>;
}) {
  const { service_name: serviceName } = await params;
  switch (serviceName) {
    case 'freon-gas-sales':
      return {
        title: 'フロンガス販売 | 株式会社HUNT',
        description:
          '滋賀県でフロンガス・冷媒の販売を行っています。R410A、R32、R134aなど各種冷媒を取り扱い。第1種高圧ガス販売主任者が在籍し、安全で確実な供給を実現。滋賀県のフロンガス販売は株式会社HUNTにお任せください。',
        keywords:
          'フロンガス, 冷媒, R410A, R32, R134a, 販売, 滋賀県, 大津市, HUNT',
        openGraph: {
          title: 'フロンガス販売 | 株式会社HUNT',
          description:
            '滋賀県でフロンガス・冷媒の販売を行っています。R410A、R32、R134aなど各種冷媒を取り扱い。第1種高圧ガス販売主任者が在籍し、安全で確実な供給を実現。滋賀県のフロンガス販売は株式会社HUNTにお任せください。',
          type: 'article',
          locale: 'ja_JP',
          url: 'https://hunt-hp.com/service/freon-gas-sales',
          siteName: '株式会社HUNT',
        },
      };
    case 'industrial-gas-sales':
      return {
        title: '産業用高圧ガス販売 | 株式会社HUNT',
        description:
          '滋賀県で産業用高圧ガスの販売を行っています。酸素、窒素、アルゴン、二酸化炭素、アセチレン、ヘリウムなど各種ガスを取り扱い。高圧ガス保安法に基づく安全な供給を実現。滋賀県の産業用高圧ガス販売は株式会社HUNTへ。',
        keywords:
          '産業用高圧ガス, 酸素, 窒素, アルゴン, 二酸化炭素, アセチレン, ヘリウム, 販売, 滋賀県, HUNT',
        openGraph: {
          title: '産業用高圧ガス販売 | 株式会社HUNT',
          description:
            '滋賀県で産業用高圧ガスの販売を行っています。酸素、窒素、アルゴン、二酸化炭素、アセチレン、ヘリウムなど各種ガスを取り扱い。高圧ガス保安法に基づく安全な供給を実現。滋賀県の産業用高圧ガス販売は株式会社HUNTへ。',
          type: 'article',
          locale: 'ja_JP',
          url: 'https://hunt-hp.com/service/industrial-gas-sales',
          siteName: '株式会社HUNT',
        },
      };
    case 'freon-recovery-service':
      return {
        title: 'フロンガス回収・処理工事 | 株式会社HUNT',
        description:
          '滋賀県でフロンガス回収・処理工事を行っています。第1種フロン類回収業者として適切な回収・処理を実施。環境保護と法令遵守を徹底し、地球温暖化防止に貢献。滋賀県のフロンガス回収工事は株式会社HUNTにお任せください。',
        keywords:
          'フロンガス回収, 処理工事, 第1種フロン類回収業者, 環境保護, 滋賀県, 京都, 大阪, HUNT',
        openGraph: {
          title: 'フロンガス回収・処理工事 | 株式会社HUNT',
          description:
            '滋賀県でフロンガス回収・処理工事を行っています。第1種フロン類回収業者として適切な回収・処理を実施。環境保護と法令遵守を徹底し、地球温暖化防止に貢献。滋賀県のフロンガス回収工事は株式会社HUNTにお任せください。',
          type: 'article',
          locale: 'ja_JP',
          url: 'https://hunt-hp.com/service/freon-recovery-service',
          siteName: '株式会社HUNT',
        },
      };
    case 'freon-recycling-disposal':
      return {
        title: 'フロンガス再生・破壊処理 | 株式会社HUNT',
        description:
          '滋賀県でフロンガス再生・破壊処理を行っています。回収したフロンガスの適切な再生・破壊処理により環境負荷を最小限に抑制。循環型社会の実現に貢献。滋賀県のフロンガス再生・破壊処理は株式会社HUNTへ。',
        keywords:
          'フロンガス再生, 破壊処理, 環境保護, 循環型社会, 地球温暖化防止, 滋賀県, HUNT',
        openGraph: {
          title: 'フロンガス再生・破壊処理 | 株式会社HUNT',
          description:
            '滋賀県でフロンガス再生・破壊処理を行っています。回収したフロンガスの適切な再生・破壊処理により環境負荷を最小限に抑制。循環型社会の実現に貢献。滋賀県のフロンガス再生・破壊処理は株式会社HUNTへ。',
          type: 'article',
          locale: 'ja_JP',
          url: 'https://hunt-hp.com/service/freon-recycling-disposal',
          siteName: '株式会社HUNT',
        },
      };
    default:
      return {
        title: 'サービス詳細 | 株式会社HUNT',
        description:
          '株式会社HUNTのサービス詳細ページです。フロンガス販売、産業用高圧ガス販売、フロンガス回収・処理工事、フロンガス再生・破壊処理など幅広く対応しています。',
        keywords:
          'サービス, フロンガス, 産業用高圧ガス, 回収, 処理, 再生, 破壊, 滋賀県, HUNT',
        openGraph: {
          title: 'サービス詳細 | 株式会社HUNT',
          description:
            '株式会社HUNTのサービス詳細ページです。フロンガス販売、産業用高圧ガス販売、フロンガス回収・処理工事、フロンガス再生・破壊処理など幅広く対応しています。',
          type: 'article',
          locale: 'ja_JP',
          url: 'https://hunt-hp.com/service',
          siteName: '株式会社HUNT',
        },
      };
  }
}
