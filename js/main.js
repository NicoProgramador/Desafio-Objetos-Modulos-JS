import * as orderService from "./services/order-service.js";
import Order from "./models/Order.js";

const data = document.getElementById("order").innerHTML.split("\n");

const order = new Order(data[0], Number(data[1]), Number(data[2]));
const total = orderService.total(order);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);
