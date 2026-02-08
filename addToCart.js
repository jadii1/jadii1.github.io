function addToCart(product) {
  // 1. YOUR ORIGINAL LOGIC (Adding product to localStorage)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find((item) => item.slug === product.slug);
  if (exists) {
    exists.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);

  // 2. META PIXEL LOGIC (Tracking only the 4 specific products)
  const mySpecialProducts = [
    'red-chief-genuine-leather-derby-lace-up-formal-shoes-for-men-for-office-pu-sole-rc3506',
    'lymio-mens-loose-shirt-mens-shirt-pants-denim-shirt-baggy',
    'lymio-mens-loose-jeans-mens-jeans-pants-denim-jeans-baggy',
    'fossil-nate-chronograph-analog-black-dial-grey-band-mens-stainless-steel-watch'
  ];

  // Check if the product being added matches our VIP list
  if (mySpecialProducts.includes(product.slug)) {
    fbq('track', 'AddToCart', {
      content_name: product.name,
      content_ids: [product.slug],
      content_type: 'product',
      value: product.price,
      currency: 'USD'
    });
    console.log("🛒 Meta Pixel: AddToCart tracked for " + product.name);
  }
}
