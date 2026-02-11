const products = [
  // best-seller products
  {
    id: 1,
    name: "Red Chief Genuine Leather Derby Lace Up |Formal Shoes for Men for Office | PU Sole | RC3506",
    slug: "red-chief-genuine-leather-derby-lace-up-formal-shoes-for-men-for-office-pu-sole-rc3506",

    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 29.99,
    listPrice: 0,

    images: [
      "/images/watches/watches_p2-1.jpg",
      "/images/watches/watches_p2-2.jpg",
    ],
    category: "Watches",
    brand: "Omega ",
    tags: ["best-seller"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue", "yellow"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 2,
    name: "Lymio Men's Loose Shirt || Men's Shirt Pants || Denim Shirt || Baggy",
    slug: "lymio-mens-loose-shirt-mens-shirt-pants-denim-shirt-baggy",

    description:
      "Elevate your street cred by pairing these Baggy Oversized shirt with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 29.99,
    listPrice: 0,

    images: [
      "/images/shirts/shirts_p1-1.jpg",
      "/images/shirts/shirts_p1-2.jpg",
    ],
    category: "Shirts",
    brand: "Levi's",
    tags: ["best-seller"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 3,
    name: "Maniac || Mens || Solid || Collared Neck || Full Sleeve || Knitted Shoes",
    slug: "maniac-mens-solid-collared-neck-full-sleeve-knitted-shoes",
    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic shoes and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 29.99,
    listPrice: 0,

    images: ["/images/shoes/shoes_p3-1.jpg", "/images/shoes/shoes_p3-2.jpg"],
    category: "Shoes",
    brand: "Adidas",
    tags: ["best-seller"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 4,
    name: "Lymio Men's Fit T-Shirts || Men's T-Shirts || Denim T-Shirts || Baggy",
    slug: "lymio-mens-fit-t-shirts-mens-t-shirts-denim-t-shirts-baggy",

    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 29.99,
    listPrice: 0,

    images: [
      "/images/t-shirts/t-shirts_p2-1.jpg",
      "/images/t-shirts/t-shirts_p2-2.jpg",
    ],
    category: "T-Shirts",
    brand: "Polo",
    tags: ["best-seller"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 5,
    name: "Lymio Men's Loose Jeans || Men's Jeans Pants || Denim Jeans || Baggy",
    slug: "lymio-mens-loose-jeans-mens-jeans-pants-denim-jeans-baggy",

    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 29.99,
    listPrice: 0,

    images: ["/images/jeans/jeans_p1-1.jpg", "/images/jeans/jeans_p1-2.jpg"],
    category: "Jeans",
    brand: "Levi's",
    tags: ["best-seller"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 6,
    name: "Lymio Men's Loose shirts || Men's shirts Pants || Denim shirts || Baggy",
    slug: "lymio-mens-loose-shirts-mens-shirts-pants-denim-shirts-baggyss",

    description:
      "Elevate your street cred by pairing these Baggy Oversized shirts with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 29.99,
    listPrice: 0,

    images: [
      "/images/shirts/shirts_p1-1.jpg",
      "/images/shirts/shirts_p1-2.jpg",
    ],
    category: "Shirts",
    brand: "Tom Ford",
    tags: ["best-seller"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 7,
    name: "Lymio Men's Loose shirts || Men's t-shirts Pants || Baggy",
    slug: "lymio-mens-loose-shirts-mens-t-shirts-pants-baggy",

    description:
      "Elevate your street cred by pairing these Baggy Oversized shirts with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 29.99,
    listPrice: 0,

    images: [
      "/images/shirts/shirts_p2-1.jpg",
      "/images/shirts/shirts_p2-2.jpg",
    ],
    category: "Shirts",
    brand: "Tom Ford",
    tags: ["best-seller"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  // new-arrival products
  {
    id: 8,
    name: "Noble Monk Men's Solid Casual Shirt |Full Sleeve|Stylish Shirt for Men",
    slug: "noble-monk-mens-solid-casual-shirt-full-sleeve-stylish-shirt-for-men",

    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 29.99,
    listPrice: 0,

    images: ["/images/shoes/shoes_p1-1.jpg", "/images/shoes/shoes_p1-2.jpg"],
    category: "Shirts",
    brand: "Levi's",
    tags: ["new-arrival"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 9,
    name: "Fossil Nate Chronograph Analog Black Dial Grey Band Men's Stainless Steel Watch ",
    slug: "fossil-nate-chronograph-analog-black-dial-grey-band-mens-stainless-steel-watch",

    description: "Fossil Nate JR1401 Chronograph Watch - For Men",
    price: 149.99,
    listPrice: 0,
    images: [
      "/images/watches/watches_p1-1.jpg",
      "/images/watches/watches_p1-2.jpg",
    ],
    category: "Jeans",
    brand: "Levi’s",
    tags: ["new-arrival"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 16,
    countInStock: 20,
    colors: ["blue", "red", "green"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 10,
    name: "Classic Moccasins Non-Lace Up Formal Shoes for Office, Party,Wedding | Dress Shoes",
    slug: "classic-moccasins-non-lace-up-formal-shoes-for-office-party-wedding-dress-shoes",

    description: "This is the description of product.",
    price: 129.99,
    listPrice: 0,
    images: ["/images/shoes/shoes_p3-1.jpg", "/images/shoes/shoes_p3-2.jpg"],
    category: "Jeans",
    brand: "Levi’s",
    tags: ["new-arrival"],
    isPublished: true,
    avgRating: 4,
    numReviews: 6,

    numSales: 16,
    countInStock: 20,
    colors: ["blue", "red", "green"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 11,
    name: "Centrino Mens 7957 Classic Moccasins Non-Lace Up Formal Shoes for Office, Party",
    slug: "centrino-mens-7957-classic-moccasins-non-lace-up-formal-shoes-for-office-party",
    description: "This is the description of product 1.",
    price: 149.99,
    listPrice: 0,
    images: ["/images/shoes/shoes_p2-1.jpg", "/images/shoes/shoes_p2-2.jpg"],
    category: "Jeans",
    brand: "Levi’s",
    tags: ["new-arrival"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 16,
    countInStock: 20,
    colors: ["blue", "red", "green"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 12,
    name: "Symbol Premium Men's Slim Fit Stretchable Jeans | Casual Denim | Cotton Stretch ",
    slug: "symbol-premium-mens-slim-fit-stretchable-jeans-casual-denim-cotton-stretch",

    description:
      "Symbol Premium's easy stretch jeans feature 'Air-Lite' hollow fiber, providing a unique blend of style, comfort. A desirable choice for denim lovers seeking both fashion and functionality in their wardrobe",
    price: 149.99,
    listPrice: 0,
    images: ["/images/jeans/jeans_p1-1.jpg", "/images/jeans/jeans_p1-2.jpg"],
    category: "Jeans",
    brand: "Levi’s",
    tags: ["new-arrival"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 16,
    countInStock: 20,
    colors: ["blue", "red", "green"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 13,
    name: "Ben Martin Men's Relaxed Fit Jeans",
    slug: "ben-martin-mens-relaxed-fit-jeans",

    description:
      "This Ben Martin casual denim jeans pant for men Durable and timeless look.AVAILABLE SIZE & COLOUR: This Ben Martin Mens Cotton Denim Jeans comes Range of sizes & Colors to suit different types. 40 Dark Blue, Light Blue, Brown, Green, Grey, Black & White. This Ben Martin Denim Jeans pant for Men is light weight breathable soft denim fabric. 1) Comfortable for all-day wear. 2) Casual and laid-back style. 3) 5 Basic Coin pockets for added functionality. 4) vailable in different washes and finishes.",
    price: 149.99,
    listPrice: 0,
    images: ["/images/jeans/jeans_p2-1.jpg", "/images/jeans/jeans_p2-2.jpg"],
    category: "Jeans",
    brand: "Levi’s",
    tags: ["new-arrival"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 16,
    countInStock: 20,
    colors: ["blue", "red", "green"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },

  // today's deal products
  {
    id: 14,
    name: "Ben Martin Men's Regular Fit Stylish Stretchable 32 Size Brown Casusal Denim Jeans Pant for Men",
    slug: "ben-martin-mens-regular-fit-stylish-stretchable-32-size-brown-casual-denim-jeans-pant-for-men",
    description:
      "STRETCH COMFORT : These Ben Martin cotton denim casual jeans pant for men are constructed from a perfect blend of stretch-cotton fabric, which maximizes freedom of movement and ensures comfortable wear all day long.",
    price: 59.99,
    listPrice: 0,

    images: ["/images/jeans/jeans_p3-1.jpg", "/images/jeans/jeans_p3-2.jpg"],
    category: "Jeans",
    brand: "Gucci",
    tags: ["today-deal"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 13,
    countInStock: 40,
    colors: ["black", "white"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 15,
    name: "Red Chief Genuine Leather Derby Lace Up |Formal Shoes for Men for Office | PU Sole | RC3506",
    slug: "lymio-polo-t-shirt-for-men-men-casual-t-shirt-polo-44-47",
    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 29.99,
    listPrice: 0,

    images: ["/images/shoes/shoes_p2-1.jpg", "/images/shoes/shoes_p2-2.jpg"],
    category: "Shoes",
    brand: "Puma",
    tags: ["today-deal"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 16,
    name: "Lymio Men's Loose Jeans || Men's Jeans Pants || Denim Jeans || Baggy",
    slug: "lymio-polo-t-shirt-for-men-men-casual-t-shirt",

    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 229.99,
    listPrice: 0,

    images: ["/images/jeans/jeans_p2-1.jpg", "/images/jeans/jeans_p2-2.jpg"],
    category: "Jeans",
    brand: "Gucci",
    tags: ["today-deal"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 17,
    name: "Lymio Polo T Shirt for Men || Men Casual T-Shirt (Polo 44-47)",
    slug: "Lymio Polo T Shirt for Men || Men Casual T-Shirt (Polo 44-47)",
    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 329.99,
    listPrice: 0,

    images: [
      "/images/t-shirts/t-shirts_p1-1.jpg",
      "/images/t-shirts/t-shirts_p1-2.jpg",
    ],
    category: "T-Shirts",
    brand: "Polo",
    tags: ["today-deal"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 18,
    name: "Lymio Polo T Shirt for Men || Men Casual T-Shirt",
    slug: "Lymio Polo T Shirt for Men || Men Casual T-Shirt",

    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 329.99,
    listPrice: 0,

    images: [
      "/images/t-shirts/t-shirts_p2-1.jpg",
      "/images/t-shirts/t-shirts_p3-2.jpg",
    ],
    category: "T-Shirts",
    brand: "Polo",
    tags: ["today-deal"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 19,
    name: "POLO Men's Wonder-14 T-Shirts (p-40-69)",
    slug: "POLO Men's Wonder-14 T-Shirts (p-40-69)",
    description:
      "Elevate your street cred by pairing these Baggy POLO Men's Wonder-13 Sports Running T-Shirts. High-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 99.99,
    listPrice: 0,

    images: [
      "/images/t-shirts/t-shirts_p3-1.jpg",
      "/images/t-shirts/t-shirts_p3-2.jpg",
    ],
    category: "T-Shirts",
    brand: "Burberry",
    tags: ["today-deal"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },

  // featured products
  {
    id: 20,
    name: "Urbano Fashion Men's Cotton Full Sleeve Regular Fit Casual Solid Shirt",
    slug: "Urbano Fashion Men's Cotton Full Sleeve Regular Fit Casual Solid Shirt",

    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 329.99,
    listPrice: 0,

    images: [
      "/images/shirts/shirts_p1-1.jpg",
      "/images/shirts/shirts_p1-2.jpg",
    ],
    category: "Shirts",
    brand: "Levi's",
    tags: ["featured"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 21,
    name: "Urbano Fashion Men's Cotton Full Sleeve Regular Fit Casual Solid Shirt",
    slug: "Urbano Fashion Men's Cotton Full Sleeve Regular Fit Casual Solid Shirt",

    description:
      "Elevate your street cred by pairing these Baggy Oversized Jeans with a graphic t-shirt and high-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 329.99,
    listPrice: 0,

    images: [
      "/images/watches/watches_p2-1.jpg",
      "/images/watches/watches_p2-2.jpg",
    ],
    category: "Watches",
    brand: "Breitling ",
    tags: ["featured"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 22,
    name: "ASIAN Men's Wonder-13 Sports Running Shoes",
    slug: "ASIAN Men's Wonder-13 Sports Running Shoes",

    description:
      "Elevate your street cred by pairing these Baggy ASIAN Men's Wonder-13 Sports Running Shoe. High-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 329.99,
    listPrice: 0,

    images: ["/images/shoes/shoes_p4-1.jpg", "/images/shoes/shoes_p4-2.jpg"],
    category: "Shoes",
    brand: "Nike",
    tags: ["featured"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 23,
    name: "ASIAN Men's Wonder-13 Sports Running Shoes",
    slug: "ASIAN Men's Wonder-13 Sports Running Shoes",

    description:
      "Elevate your street cred by pairing these Baggy ASIAN Men's Wonder-13 Sports Running Shoe. High-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 329.99,
    listPrice: 0,

    images: [
      "/images/shirts/shirts_p2-1.jpg",
      "/images/shirts/shirts_p2-2.jpg",
    ],
    category: "Shirts",
    brand: "Burberry",
    tags: ["featured"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 24,
    name: "POLO Men's Wonder-13 T-Shirts",
    slug: "POLO Men's Wonder-13 T-Shirts",

    description:
      "Elevate your street cred by pairing these Baggy POLO Men's Wonder-13 Sports Running T-Shirts. High-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 329.99,
    listPrice: 0,

    images: [
      "/images/t-shirts/t-shirts_p4-1.jpg",
      "/images/t-shirts/t-shirts_p4-2.jpg",
    ],
    category: "T-Shirts",
    brand: "Burberry",
    tags: ["featured"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
  {
    id: 25,
    name: "POLO Men's Wonder-14 T-Shirts (p-40-69)",
    slug: "POLO Men's Wonder-14 T-Shirts (p-40-69)",
    description:
      "Elevate your street cred by pairing these Baggy POLO Men's Wonder-13 Sports Running T-Shirts. High-top sneakers. Roll up the cuffs for an added edge and throw on a bomber jacket to complete the look",
    price: 99.99,
    listPrice: 0,

    images: [
      "/images/t-shirts/t-shirts_p3-1.jpg",
      "/images/t-shirts/t-shirts_p3-2.jpg",
    ],
    category: "T-Shirts",
    brand: "Burberry",
    tags: ["featured"],
    isPublished: true,
    avgRating: 4.5,
    numReviews: 6,

    numSales: 9,
    countInStock: 60,
    colors: ["blue", "dark-blue"],
    sizes: ["S", "M", "L", "XL"],
    reviews: [],
  },
];
