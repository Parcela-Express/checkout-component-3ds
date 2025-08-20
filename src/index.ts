import "./index.css";

import {
  AdyenCheckout,
  CoreConfiguration,
  PaymentAction,
} from "@adyen/adyen-web";
import { CheckoutConfiguration } from "./types";

export class Checkout3ds {
  private action: PaymentAction;
  private environment: CoreConfiguration["environment"];
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
    elementToRender.appendChild(threeCheckout);

    if (!elementToRender) {
      throw `Element with id of ${domNodeContainer} not found`;
    }

    const threeDSConfiguration = {
      size: "02",
    };

    const configuration: CoreConfiguration = {
      locale: "pt_BR",
      countryCode: "pt-BR",
      environment: this.environment,
      clientKey: this.clientKey,
      onAdditionalDetails: () => {},
    };

    const promise = await AdyenCheckout(configuration);
    const checkout = await promise;
    checkout
      .createFromAction(this.action, threeDSConfiguration)
      .mount("#three-checkout");
  }
}
