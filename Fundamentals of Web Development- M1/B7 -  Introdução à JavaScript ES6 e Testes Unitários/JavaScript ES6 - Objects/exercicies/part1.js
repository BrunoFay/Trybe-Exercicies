const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = order.name
  const phoneNumber = order.phoneNumber
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment
  const deliveryWoman = order.order.delivery.deliveryPerson;
  return `Ola, ${deliveryWoman}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, N: ${number}, AP: ${apartment}`;

}
console.log(customerInfo(order));

//console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newValues = Object.assign(order, order)
  newValues.name = 'luiz Silva'
  newValues.payment = 50;
  return `Olá ${order.name}, o total do seu pedido de merguerita,peperoni e coca-cola é ${order.payment} R$`

}
console.log(orderModifier(order));

  //`Ola ana silveira, entraga para ${Object.values(order)[0]},${Object.entries(order)[1]}`
