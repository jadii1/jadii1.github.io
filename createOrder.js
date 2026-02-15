function createOrder(data) {
  // 1. Order ID Generation
  const orderId = Date.now();
  const totalPrice = data.totalPrice;
  const cartItems = data.orderItems || [];

  // 2. DataLayer Logic
  window.dataLayer = window.dataLayer || [];
  
  const purchaseEvent = {
    event: "purchase",
    order_id: orderId,
    value: totalPrice,
    currency: "USD",
    contents: cartItems.map(item => ({
      id: item.id || item.uniqueId || "no-id",
      quantity: item.quantity || 1,
      item_price: item.price || 0
    })),
    content_ids: cartItems.map(item => item.id || item.uniqueId || "no-id"),
    content_type: "product"
  };

  // 🚨 THE FIX: Force it into the console BEFORE the push
  console.log("--- DATALAYER DEBUG START ---");
  console.dir(purchaseEvent); // This shows the clickable object
  console.table(purchaseEvent.contents); // This shows your items in a nice table
  console.log("--- DATALAYER DEBUG END ---");

  // Push to GTM
  window.dataLayer.push(purchaseEvent);

  // 3. Save to LocalStorage
  const order = {
    id: orderId,
    user: data.user,
    status: "pending",
    createdAt: new Date(),
    orderItems: cartItems,
    totalPrice: totalPrice,
    shippingAddress: {
       address: data.address,
       city: data.city,
       country: data.country,
       fullName: data.fullName,
       zip: data.zip
    }
  };

  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
  allOrders.push(order);
  localStorage.setItem("orders", JSON.stringify(allOrders));

  // 4. STOP HERE FOR INSPECTION
  localStorage.removeItem("cart");
  
  alert("STOP! Look at your console now BEFORE clicking OK.");

  // Redirect
  window.location.href = `order.html?orderId=${orderId}`;
}
