// carousal
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 5000);

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

function resetTimer() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

next.addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

prev.addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

updateSlidePosition();

const productGrid = document.getElementById("productGrid");

// Render products
function renderProducts(filterCategory = "all") {
  productGrid.innerHTML = ""; // Clear previous content

  const filtered =
    filterCategory === "all"
      ? products.slice(0, 10)
      : products.slice(0, 10).filter((p) => p.category === filterCategory);

  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.setAttribute("data-category", product.category);

    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.title}">
      <h3>${product.name.slice(0, 30)}...</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button>
        <a href="product.html?slug=${product.slug}">View Details</a>
      </button>
      <button class="add-to-cart-btn" data-id="${product.slug}">Add to Cart</button>
    `;

    productGrid.appendChild(card);
  });

  // --- ADD TO CART & DATALAYER SECTION ---
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.getAttribute("data-id");
      const productToAdd = products.find((p) => p.slug == productId);

      if (productToAdd) {
        // 1. Execute the actual cart logic
        addToCart(productToAdd);

        // 2. Push to DataLayer for GTM/Facebook
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "add_to_cart",
          ecommerce: {
            currency: "USD",
            value: productToAdd.price,
            items: [{
              item_id: productToAdd.slug,
              item_name: productToAdd.name,
              item_category: productToAdd.category,
              item_brand: productToAdd.brand,
              quantity: 1,
              price: productToAdd.price
            }]
          }
        });

        console.log("AddToCart DataLayer Fired:", productToAdd.name);
      }
    });
  });
}

// Filter logic
function generateCategoryButtons(data) {
  const categories = ["all", ...new Set(data.map((item) => item.category))];
  const filterContainer = document.getElementById("filterButtons");

  filterContainer.innerHTML = categories
    .map(
      (cat) => `
      <button class="filter-btn ${cat === "all" ? "active" : ""}" data-category="${cat}">
         ${cat}
      </button>`
    )
    .join("");

  const buttons = filterContainer.querySelectorAll(".filter-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.category);
    });
  });
}

generateCategoryButtons(products);
renderProducts("all");

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
}
updateCartCount();
