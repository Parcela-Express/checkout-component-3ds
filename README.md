# Parcela Express Checkout Component 3ds

## Importação

Para importar o componente adicione o script
*`<script src="https://parcela-sub-api-components.s3.us-east-1.amazonaws.com/checkout-component-3ds/v2.0.0/index.js"></script>`*
 no body do seu site e importe o css através do link: 
 *`<link rel="stylesheet" href="https://parcela-sub-api-components.s3.us-east-1.amazonaws.com/checkout-component-3ds/v2.0.0/index.css" />`*

O componente pode ser usado da seguinte forma:

#### **`index.html`**
  ```html
...
<body>
    <div id='checkout-container'></div>
</body>
...
  ```

#### **`index.js`**
  ```js
import * as ParcelaChekout from '@parcelaexpress/checkout-component-3ds';

const action = {
		paymentData: "",
		paymentMethodType: "scheme",
		url: "",
		data: {
			MD: "",
			PaReq: "",
			TermUrl: ""
		},
		method: "POST",
		type: "redirect"
	}

const config = {
    clientKey: 'test_IBIF7UD6SNB7ZJG3KVEGM3UP5M57BJ4B',
    environment: 'TEST',
    action
};



const checkoutInstance = new window.Component.Checkout3ds(config);
checkoutInstance.mount("checkout-container");
  ```