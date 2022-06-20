# Parcela Express Checkout Component 3ds

[![npm](https://img.shields.io/npm/v/@parcelaexpress/checkout-component-3ds.svg)](https://www.npmjs.com/package/@parcelaexpress/checkout-component-3ds)

## Instalação

Esse pacote é um módulo [Node.js](https://nodejs.org/en/) disponibilizado pelo 
[npm](https://www.npmjs.com/).

Siga as instruções abaixo para realizar a instalação do componente em sua aplicação.

1. Instale o componente [Parcela Express Checkout Component 3ds](https://www.npmjs.com/package/@parcelaexpress/checkout-component-3ds):

  ```sh
  npm install @parcelaexpress/checkout-component-3ds --save
  ```

  ```sh
  yarn add @parcelaexpress/checkout-component-3ds
  ```

## Instalação

O componente pode ser usado da seguinte forma:

Importe o componente dentro de sua aplicação e adicione uma div container para renderizar o componente:

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



const checkoutInstance = new window.Checkout.Checkout(config);
checkoutInstance.mount('checkout-container');
  ```