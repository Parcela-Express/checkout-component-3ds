import { CoreConfiguration, PaymentAction } from '@adyen/adyen-web';

export type CheckoutConfiguration = {
  environment: CoreConfiguration["environment"];
  clientKey: string;
  action: PaymentAction;
};