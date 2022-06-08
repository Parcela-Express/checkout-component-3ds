import { PaymentAction } from "@adyen/adyen-web/dist/types/types";

export type CheckoutConfiguration = {
  environment: string;
  clientKey: string;
  action: PaymentAction;
};