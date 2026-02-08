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

  // 1. Get existing orders and Save
  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
  allOrders.push(order);
  const saveOrder = localStorage.setItem("orders", JSON.stringify(allOrders));

  /* --- META PIXEL: PURCHASE EVENT START --- */
  const mySpecialProducts = [
    'red-chief-genuine-leather-derby-lace-up-formal-shoes-for-men-for-office-pu-sole-rc3506',
    'lymio-mens-loose-shirt-mens-shirt-pants-denim-shirt-baggy',
    'lymio-mens-loose-jeans-mens-jeans-pants-denim-jeans-baggy',
    'fossil-nate-chronograph-analog-black-dial-grey-band-mens-stainless-steel-watch'
  ];

  // Check if any of your "Special 4" were in the order items
  const hasTrackedItem = data.orderItems.some(item => mySpecialProducts.includes(item.slug));

  if (hasTrackedItem) {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Purchase', {
        content_type: 'product',
        content_ids: data.orderItems.map(item => item.slug),
        value: data.totalPrice,
        currency: 'USD'
      });
      console.log("💰 Meta Pixel: Purchase tracked for " + data.totalPrice);
    }
  }
  /* --- META PIXEL: PURCHASE EVENT END --- */

  // 2. Cleanup and Redirect
  alert(`Order placed successfully!`);
  localStorage.removeItem("cart"); // Clear cart after tracking
  window.location.href = `order.html?orderId=${order?.id}`;

  return saveOrder;
}
