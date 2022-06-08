import "./index.css";

import AdyenCheckout from "@adyen/adyen-web";
import { CheckoutConfiguration } from "./types";
import { PaymentAction } from "@adyen/adyen-web/dist/types/types";

export class Checkout {
  private action: PaymentAction;
  private environment: string;
  private clientKey: string;

  constructor(config: CheckoutConfiguration) {
    if (!config) {
      throw "The config object must be provided!";
    }

    const { action, environment, clientKey } = config;

    this.action = action;
    this.environment = environment;
    this.clientKey = clientKey;
  }

  async mount(domNodeContainer: string) {
    const elementToRender = document.getElementById(domNodeContainer);
    const threeCheckout = document.createElement("div");
    threeCheckout.setAttribute("id", "three-checkout");
    document.body.insertBefore(threeCheckout, elementToRender);

    if (!elementToRender) {
      throw `Element with id of ${domNodeContainer} not found`;
    }

    const threeDSConfiguration = {
      size: "02",
    };

    const configuration = {
      locale: "pt_BR",
      environment: this.environment,
      clientKey: this.clientKey,
      onAdditionalDetails: () => {},
    };

    const promise = new AdyenCheckout(configuration);
    const checkout = await promise;
    checkout
      .createFromAction(this.action, threeDSConfiguration)
      .mount("#three-checkout");
  }
}
