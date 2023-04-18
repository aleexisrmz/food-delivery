export default {
	orderStatusOptions: [
  {
    "label": "Order placed",
    "value": "ORDER PLACED"
  },
  {
    "label": "Delayed",
    "value": "DELAYED"
  },
  {
    "label": "Delivered",
    "value": "DELIVERED"
  },
  {
    "label": "Refunded",
    "value": "REFUNDED"
  }
],
	updateOrder: async () => {
		await edit_order.run();
			await fetch_orders.run();
			return closeModal('Modal1');
	},
	addOrder: async () => {
		const Order_ID = this.generateRandomID();
		await add_order.run({ Id: Order_ID});
		await add_product.run({ Id: Order_ID});
		await fetch_orders.run();
		await resetWidget('add_modal');
		return closeModal('add_modal');
	},
	generateRandomID: () => {
		return Math.floor(Math.random() * 1000);
	}
}