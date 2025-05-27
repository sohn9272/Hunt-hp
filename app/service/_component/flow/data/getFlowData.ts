import freonGasSalesData from './freon_gas_sales.json';
import industrialGasSalesData from './industrial_gas_sales.json';
import freonRecoveryServiceData from './freon_recovery_service.json';
import freonRecyclingDisposalData from './freon_recycling_disposal.json';

export type ServiceType =
  | 'freon_gas_sales'
  | 'industrial_gas_sales'
  | 'freon_recovery_service'
  | 'freon_recycling_disposal';

export async function getFlowData(serviceType: ServiceType) {
  switch (serviceType) {
    case 'freon_gas_sales':
      return freonGasSalesData;
    case 'industrial_gas_sales':
      return industrialGasSalesData;
    case 'freon_recovery_service':
      return freonRecoveryServiceData;
    case 'freon_recycling_disposal':
      return freonRecyclingDisposalData;
    default:
      throw new Error(`Invalid service type: ${serviceType}`);
  }
}
