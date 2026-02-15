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
    totalPrice: Number(data.totalPrice), // Ensure numeric value
    paymentInfo: {
      paymentMethod: "card",
      cardNumber: data.cardNumber,
      expiry: data.expiry,
    },
  };

  // 1️⃣ Get existing orders
  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

  // 2️⃣ Add new order
  allOrders.push(order);

  // 3️⃣ Save back
  localStorage.setItem("orders", JSON.stringify(allOrders));

  // 4️⃣ Push Purchase Event to DataLayer (Meta Optimized Structure)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "purchase",
    transaction_id: order.id,
    value: order.totalPrice,
    currency: "USD", // Change if needed
    contents: order.orderItems.map((item) => ({
      id: item.id || item.uniqueId,
      quantity: Number(item.quantity),
      item_price: Number(item.price)
    })),
    content_ids: order.orderItems.map((item) => item.id || item.uniqueId),
    content_type: "product"
  });

  // 5️⃣ Clear cart BEFORE redirect
  localStorage.removeItem("cart");

  // 6️⃣ Redirect to success page
  window.location.href = `order.html?orderId=${order.id}`;

  return order;
}
