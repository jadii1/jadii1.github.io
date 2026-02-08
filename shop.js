// Assume products array is loaded from products.js

const productGrid = document.getElementById("productGrid");
const filterCategory = document.getElementById("filterCategory");
const filterBrand = document.getElementById("filterBrand");
const filterColor = document.getElementById("filterColor");
const filterPrice = document.getElementById("filterPrice");
const priceValue = document.getElementById("priceValue");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const paginationDiv = document.getElementById("pagination");

let currentPage = 1;
const productsPerPage = 6;

// Generate filter checkboxes/radios based on product data
function generateFilters(products) {
  const categorySet = new Set();
  const brandSet = new Set();
  const colorSet = new Set();

  products.forEach((product) => {
    categorySet.add(product.category);
    brandSet.add(product.brand);
    product.color.forEach((col) => colorSet.add(col));
  });

  filterCategory.innerHTML = Array.from(categorySet)
    .map(
      (cat) => `
    <label>
      <input type="radio" name="category" value="${cat}" />
      ${cat}
    </label>
  `
    )
    .join("");

  filterBrand.innerHTML = Array.from(brandSet)
    .map(
      (brand) => `
    <label>
      <input type="radio" name="brand" value="${brand}" />
      ${brand}
    </label>
  `
    )
    .join("");

  filterColor.innerHTML = Array.from(colorSet)
    .map(
      (color) => `
    <label>
      <input type="checkbox" name="color" value="${color}" />
      ${color}
    </label>
  `
    )
    .join("");

  // Set price slider max based on max product price
  const maxPrice = Math.max(...products.map((p) => p.price));
  filterPrice.max = Math.ceil(maxPrice);
  filterPrice.value = filterPrice.max;
  priceValue.textContent = filterPrice.value;
}

// Get currently selected filters
function getSelectedFilters() {
  // Category radio
  const categoryRadio = filterCategory.querySelector(
    'input[name="category"]:checked'
  );
  const selectedCategory = categoryRadio ? categoryRadio.value : null;

  // Brand radio
  const brandRadio = filterBrand.querySelector('input[name="brand"]:checked');
  const selectedBrand = brandRadio ? brandRadio.value : null;

  // Colors checkboxes (multiple)
  const colorCheckboxes = [
    ...filterColor.querySelectorAll('input[name="color"]:checked'),
  ];
  const selectedColors = colorCheckboxes.map((c) => c.value);

  // Price value
  const selectedPrice = Number(filterPrice.value);

  // Search text
  const searchText = searchInput.value.trim().toLowerCase();

  // Sort value
  const sortValue = sortSelect.value;

  return {
    selectedCategory,
    selectedBrand,
    selectedColors,
    selectedPrice,
    searchText,
    sortValue,
  };
}

// Filter and sort products based on selections
function filterAndRenderProducts() {
  const {
    selectedCategory,
    selectedBrand,
    selectedColors,
    selectedPrice,
    searchText,
    sortValue,
  } = getSelectedFilters();

  let filtered = products.filter((p) => {
    // Category filter
    if (selectedCategory && p.category !== selectedCategory) return false;

    // Brand filter
    if (selectedBrand && p.brand !== selectedBrand) return false;

    // Color filter (multi-select)
    if (selectedColors.length > 0) {
      // Check if product colors intersect selected colors
      const hasColor = p.color.some((c) => selectedColors.includes(c));
      if (!hasColor) return false;
    }

    // Price filter
    if (p.price > selectedPrice) return false;

    // Search filter (name or brand)
    if (
      searchText &&
      !p.name.toLowerCase().includes(searchText) &&
      !p.brand.toLowerCase().includes(searchText)
    ) {
      return false;
    }

    return true;
  });

  // Sorting
  if (sortValue === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === "name-desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  // Pagination
  const totalPages = Math.ceil(filtered.length / productsPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;

  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filtered.slice(
    startIndex,
    startIndex + productsPerPage
  );

  renderProducts(paginatedProducts);
  renderPagination(totalPages);
}

// Render products to page
function renderProducts(productsToRender) {
  productGrid.innerHTML = "";

  if (productsToRender.length === 0) {
    productGrid.textContent = "No products found.";
    return;
  }

  productsToRender.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Brand: ${product.brand}</p>
      <p>Category: ${product.category}</p>
      <p>Colors: ${product.color.join(", ")}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button><a href="product.html?slug=${
        product.slug
      }">View Details</a></button>
    `;

    productGrid.appendChild(card);
  });
}

// Render pagination buttons
function renderPagination(totalPages) {
  paginationDiv.innerHTML = "";

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.disabled = true;

    btn.addEventListener("click", () => {
      currentPage = i;
      filterAndRenderProducts();
      window.scrollTo(0, 0);
    });

    paginationDiv.appendChild(btn);
  }
}

// Event listeners for filters
filterCategory.addEventListener("change", () => {
  currentPage = 1;
  filterAndRenderProducts();
});

filterBrand.addEventListener("change", () => {
  currentPage = 1;
  filterAndRenderProducts();
});

filterColor.addEventListener("change", () => {
  currentPage = 1;
  filterAndRenderProducts();
});

filterPrice.addEventListener("input", () => {
  priceValue.textContent = filterPrice.value;
  currentPage = 1;
  filterAndRenderProducts();
});

searchInput.addEventListener("input", () => {
  currentPage = 1;
  filterAndRenderProducts();
});

sortSelect.addEventListener("change", () => {
  currentPage = 1;
  filterAndRenderProducts();
});

// Initialize filters and render products on page load
generateFilters(products);
filterAndRenderProducts(products);
