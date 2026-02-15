function createOrder(data) {
  console.log("data :", data);

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

  // 1. Get existing orders from LocalStorage
  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

  // 2. Add new order to the list
  allOrders.push(order);

  // 3. Save back to LocalStorage
  localStorage.setItem("orders", JSON.stringify(allOrders));

  // --- DATALAYER PUSH (Your exact requested structure) ---
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "purchase",
    transaction_id: order.id,
    value: order.totalPrice,
    currency: "USD",
    contents: order.orderItems.map((item) => ({
      id: item.id || item.uniqueId,
      quantity: item.quantity,
      item_price: item.price
    })),
    content_ids: order.orderItems.map((item) => item.id || item.uniqueId),
    content_type: "product"
  });
  // --- END DATALAYER PUSH ---

  // 4. User Notification and Redirect
  alert(`Order placed successfully!`);
  
  // Clear the cart before leaving
  localStorage.removeItem("cart");

  // Redirect to the order success page
  window.location.href = `order.html?orderId=${order?.id}`;

  return order;
}
