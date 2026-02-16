function createOrder(data) {
  console.log("data :", data);

  //   let totalPrice = 0;
  //   data?.orderItems?.forEach((item) => {
  //     totalPrice += item.price * item.quantity;
  //   });
  const order = {
    id: Date.now(),
    user: data.user,
    status: "pending",
    createdAt: new Date(),
    orderItems: data.orderItems,
    shippingAddress: {
      address: data.address,
      city: data.city,
      country: data.country,
      createdAt: data.createdAt,
      email: data.email,
      fullName: data.fullName,
      uniqueId: data.uniqueId,
      zip: data.zip,
    },
    totalPrice: data.totalPrice,
    paymentInfo: {
      paymentMethod: "card",
      cardNumber: data.cardNumber,
      expiry: data.expiry,
    },
  };

  // Get existing orders
  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

  // Add new order
  allOrders.push(order);

  // Save back
  const saveOrder = localStorage.setItem("orders", JSON.stringify(allOrders));

  alert(`Order placed successfully!`);
  window.location.href = `order.html?orderId=${order?.id}`;
  localStorage.removeItem("cart");

  return saveOrder;
  //   return localStorage.setItem("order", JSON.stringify(order));
}
