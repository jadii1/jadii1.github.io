function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find((item) => item.slug === product.slug);
  if (exists) {
    exists.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}
