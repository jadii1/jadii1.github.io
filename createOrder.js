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
    totalPrice: Number(data.totalPrice),
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

  // 3️⃣ Save back to LocalStorage
  localStorage.setItem("orders", JSON.stringify(allOrders));

  // 4️⃣ Push Purchase Event to DataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "purchase",
    transaction_id: order.id,
    value: order.totalPrice,
    currency: "USD",
    contents: order.orderItems.map((item) => ({
      id: item.id || item.uniqueId,
      quantity: Number(item.quantity),
      item_price: Number(item.price)
    })),
    content_ids: order.orderItems.map((item) => item.id || item.uniqueId),
    content_type: "product"
  });

  // 🔎 Debug Confirmation Logs
  console.log("✅ PURCHASE EVENT PUSHED SUCCESSFULLY");
  console.log("Latest DataLayer Entry:", window.dataLayer[window.dataLayer.length - 1]);
  console.log("All Purchase Events:", window.dataLayer.filter(e => e.event === "purchase"));

  alert("Order placed successfully! (Redirect temporarily disabled for debugging)");

  // ❌ REDIRECT DISABLED FOR DEBUGGING
  // window.location.href = `order.html?orderId=${order.id}`;

  // Cart cleared AFTER debugging (optional)
  localStorage.removeItem("cart");

  return order;
}
