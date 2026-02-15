function createOrder(data) {
  console.log("data :", data);

  // 1. orderId is generated here
  const orderId = Date.now();

  const order = {
    id: orderId,
    user: data.user,
    status: "pending",
    createdAt: new Date(),
    orderItems: data.orderItems, // These are your "cartItems"
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
    totalPrice: data.totalPrice, // This is your "totalPrice"
    paymentInfo: {
      paymentMethod: "card",
      cardNumber: data.cardNumber,
      expiry: data.expiry,
    },
  };

  // Save order logic
  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
  allOrders.push(order);
  localStorage.setItem("orders", JSON.stringify(allOrders));

  // 🚨 Before Redirect — We Push DataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "purchase",
    order_id: orderId,
    value: data.totalPrice, // Matching your variable name
    currency: "USD",
    contents: data.orderItems.map(item => ({
      id: item.id || item.uniqueId,
      quantity: item.quantity,
      item_price: item.price
    })), // Mapping your actual cart array (orderItems)
    content_ids: data.orderItems.map(item => item.id || item.uniqueId),
    content_type: "product"
  });

  // Log to console so you can see it immediately
  console.log("DataLayer Purchase Event Pushed:", window.dataLayer);

  // Remove cart
  localStorage.removeItem("cart");

  // Alert stops execution, allowing you to check the console!
  alert(`Order placed successfully! Check the console now.`);

  // Redirect happens ONLY after you click "OK" on the alert
  window.location.href = `order.html?orderId=${orderId}`;

  return true;
}
