import React, { useEffect, useState, useMemo } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';

// Fallback dataset matching the exact schema with all 18 live product assets
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    sku: "FUR-001",
    name: "Nordic Accent Chair",
    slug: "nordic-accent-chair",
    category: "Furniture",
    subcategory: "Chairs",
    description: "A clean Scandinavian-style accent chair with a compact silhouette, supportive backrest and versatile neutral finish. Designed for living rooms, bedrooms and reading corners.",
    price: "201.00",
    compare_price: "229.00",
    currency: "USD",
    rating: "4.8",
    review_count: 126,
    image: "06.png",
    stock: 24,
    material: "Wood and upholstered fabric",
    color: "Ivory / Natural",
    dimensions: "78 x 72 x 82 cm",
    featured: 1,
    status: "active",
    created_at: "2026-08-17 09:40:11",
    updated_at: "2026-08-18 09:17:18",
    image_url: "https://projects.analogenterprise.com/images/06.png"
  },
  {
    id: 2,
    sku: "FUR-002",
    name: "Minimalist Lounge Chair",
    slug: "minimalist-lounge-chair",
    category: "Furniture",
    subcategory: "Chairs",
    description: "Ergonomically contoured lounge chair crafted with solid ash wood framing and high-density breathable foam cushioning for hours of relaxed seating.",
    price: "185.00",
    compare_price: "210.00",
    currency: "USD",
    rating: "4.9",
    review_count: 94,
    image: "01.png",
    stock: 18,
    material: "Solid Ash Wood & Linen",
    color: "Oatmeal Beige",
    dimensions: "82 x 76 x 80 cm",
    featured: 1,
    status: "active",
    created_at: "2026-08-17 10:12:00",
    updated_at: "2026-08-18 09:20:00",
    image_url: "https://projects.analogenterprise.com/images/01.png"
  },
  {
    id: 3,
    sku: "FUR-003",
    name: "Velvet Curved Armchair",
    slug: "velvet-curved-armchair",
    category: "Furniture",
    subcategory: "Armchairs",
    description: "Plush velvet upholstered statement chair featuring sweeping curved contours and gold-brushed stainless steel leg caps.",
    price: "249.00",
    compare_price: "289.00",
    currency: "USD",
    rating: "4.7",
    review_count: 82,
    image: "02.png",
    stock: 12,
    material: "Velvet & Steel",
    color: "Emerald / Brass",
    dimensions: "85 x 80 x 78 cm",
    featured: 0,
    status: "active",
    created_at: "2026-08-17 10:30:00",
    updated_at: "2026-08-18 09:22:00",
    image_url: "https://projects.analogenterprise.com/images/02.png"
  },
  {
    id: 4,
    sku: "FUR-004",
    name: "Geometric Oak Coffee Table",
    slug: "geometric-oak-coffee-table",
    category: "Tables",
    subcategory: "Coffee Tables",
    description: "Modern organic coffee table designed with smooth beveled edges and a lower floating shelf for books and art magazines.",
    price: "310.00",
    compare_price: "350.00",
    currency: "USD",
    rating: "4.9",
    review_count: 140,
    image: "03.png",
    stock: 9,
    material: "White Oak Timber",
    color: "Natural Oak",
    dimensions: "110 x 60 x 42 cm",
    featured: 1,
    status: "active",
    created_at: "2026-08-17 11:00:00",
    updated_at: "2026-08-18 09:25:00",
    image_url: "https://projects.analogenterprise.com/images/03.png"
  },
  {
    id: 5,
    sku: "FUR-005",
    name: "Sleek Dining Armchair",
    slug: "sleek-dining-armchair",
    category: "Dining",
    subcategory: "Chairs",
    description: "Refined dining room chair with subtle wraparound cushioning and sturdy powder-coated matte black steel base.",
    price: "160.00",
    compare_price: "190.00",
    currency: "USD",
    rating: "4.6",
    review_count: 58,
    image: "04.png",
    stock: 30,
    material: "Matte Metal & Textured Fabric",
    color: "Slate Grey",
    dimensions: "60 x 58 x 84 cm",
    featured: 0,
    status: "active",
    created_at: "2026-08-17 11:30:00",
    updated_at: "2026-08-18 09:28:00",
    image_url: "https://projects.analogenterprise.com/images/04.png"
  },
  {
    id: 6,
    sku: "FUR-006",
    name: "Modernist Tufted Loveseat",
    slug: "modernist-tufted-loveseat",
    category: "Living Room",
    subcategory: "Sofas",
    description: "Two-seater designer compact sofa with tailored blind tufting and kiln-dried hardwood interior construction.",
    price: "540.00",
    compare_price: "620.00",
    currency: "USD",
    rating: "4.9",
    review_count: 210,
    image: "05.png",
    stock: 7,
    material: "Bouclé Fabric & Hardwood",
    color: "Warm Cream",
    dimensions: "160 x 88 x 78 cm",
    featured: 1,
    status: "active",
    created_at: "2026-08-17 12:00:00",
    updated_at: "2026-08-18 09:30:00",
    image_url: "https://projects.analogenterprise.com/images/05.png"
  },
  {
    id: 7,
    sku: "FUR-007",
    name: "Artisan Ceramic Side Table",
    slug: "artisan-ceramic-side-table",
    category: "Decor",
    subcategory: "Side Tables",
    description: "Handcrafted sculptural side pedestal that doubles as an accent stool or gallery display stand.",
    price: "135.00",
    compare_price: "160.00",
    currency: "USD",
    rating: "4.5",
    review_count: 42,
    image: "07.png",
    stock: 15,
    material: "Glazed Terracotta",
    color: "Chalk Matte",
    dimensions: "38 x 38 x 46 cm",
    featured: 0,
    status: "active",
    created_at: "2026-08-17 12:20:00",
    updated_at: "2026-08-18 09:32:00",
    image_url: "https://projects.analogenterprise.com/images/07.png"
  },
  {
    id: 8,
    sku: "FUR-008",
    name: "Executive Ergonomic Desk Chair",
    slug: "executive-ergonomic-desk-chair",
    category: "Office",
    subcategory: "Chairs",
    description: "Premium workplace chair with synchro-tilt mechanism, 4D adjustable armrests and lumbar contouring.",
    price: "379.00",
    compare_price: "430.00",
    currency: "USD",
    rating: "4.8",
    review_count: 180,
    image: "08.png",
    stock: 20,
    material: "Breathable Mesh & Aluminum",
    color: "Midnight Black",
    dimensions: "68 x 68 x 118 cm",
    featured: 1,
    status: "active",
    created_at: "2026-08-17 12:45:00",
    updated_at: "2026-08-18 09:35:00",
    image_url: "https://projects.analogenterprise.com/images/08.png"
  },
  {
    id: 9,
    sku: "FUR-009",
    name: "Cylindrical Storage Ottoman",
    slug: "cylindrical-storage-ottoman",
    category: "Storage",
    subcategory: "Benches",
    description: "Multi-functional accent ottoman with hidden lift-off lid for seamless living room blanket and pillow storage.",
    price: "95.00",
    compare_price: "120.00",
    currency: "USD",
    rating: "4.7",
    review_count: 67,
    image: "09.png",
    stock: 35,
    material: "Textured Weave Fabric",
    color: "Mustard Gold",
    dimensions: "45 x 45 x 45 cm",
    featured: 0,
    status: "active",
    created_at: "2026-08-17 13:00:00",
    updated_at: "2026-08-18 09:37:00",
    image_url: "https://projects.analogenterprise.com/images/09.png"
  },
  {
    id: 10,
    sku: "FUR-010",
    name: "Cantilever Dining Chair",
    slug: "cantilever-dining-chair",
    category: "Dining",
    subcategory: "Chairs",
    description: "Bauhaus-inspired tubular chrome cantilever frame with ribbed vegan leather seat padding.",
    price: "175.00",
    compare_price: "199.00",
    currency: "USD",
    rating: "4.6",
    review_count: 73,
    image: "10.png",
    stock: 22,
    material: "Chrome Steel & Vegan Leather",
    color: "Cognac Brown",
    dimensions: "52 x 58 x 82 cm",
    featured: 0,
    status: "active",
    created_at: "2026-08-17 13:20:00",
    updated_at: "2026-08-18 09:40:00",
    image_url: "https://projects.analogenterprise.com/images/10.png"
  },
  {
    id: 11,
    sku: "FUR-011",
    name: "Acoustic Wall Panel Shelf",
    slug: "acoustic-wall-panel-shelf",
    category: "Storage",
    subcategory: "Shelving",
    description: "Modular wall mounting unit with acoustic dampening felt backing and solid walnut floating display ledge.",
    price: "120.00",
    compare_price: "145.00",
    currency: "USD",
    rating: "4.8",
    review_count: 45,
    image: "11.png",
    stock: 14,
    material: "Walnut & PET Felt",
    color: "Charcoal & Walnut",
    dimensions: "90 x 20 x 30 cm",
    featured: 0,
    status: "active",
    created_at: "2026-08-17 13:40:00",
    updated_at: "2026-08-18 09:42:00",
    image_url: "https://projects.analogenterprise.com/images/11.png"
  },
  {
    id: 12,
    sku: "FUR-012",
    name: "Curved Back Wooden Stool",
    slug: "curved-back-wooden-stool",
    category: "Dining",
    subcategory: "Bar Stools",
    description: "Counter-height counter stool carved from solid beech wood with an integrated footrest ring.",
    price: "149.00",
    compare_price: "179.00",
    currency: "USD",
    rating: "4.7",
    review_count: 88,
    image: "12.png",
    stock: 16,
    material: "Solid Beech Wood",
    color: "Natural Matte",
    dimensions: "44 x 44 x 92 cm",
    featured: 1,
    status: "active",
    created_at: "2026-08-17 14:00:00",
    updated_at: "2026-08-18 09:45:00",
    image_url: "https://projects.analogenterprise.com/images/12.png"
  },
  {
    id: 13,
    sku: "FUR-013",
    name: "Architectural Floor Lamp",
    slug: "architectural-floor-lamp",
    category: "Decor",
    subcategory: "Lighting",
    description: "Slender sweeping arc floor lamp with rotatable linen drum shade and heavy marble balance base.",
    price: "220.00",
    compare_price: "260.00",
    currency: "USD",
    rating: "4.9",
    review_count: 110,
    image: "13.png",
    stock: 11,
    material: "Steel, Linen & White Marble",
    color: "Brushed Nickel",
    dimensions: "120 x 40 x 195 cm",
    featured: 0,
    status: "active",
    created_at: "2026-08-17 14:20:00",
    updated_at: "2026-08-18 09:48:00",
    image_url: "https://projects.analogenterprise.com/images/13.png"
  },
  {
    id: 14,
    sku: "FUR-014",
    name: "Ribbed Glass Pendant Light",
    slug: "ribbed-glass-pendant-light",
    category: "Decor",
    subcategory: "Lighting",
    description: "Hand-blown amber ribbed glass globe pendant designed for kitchen islands and dining dining tables.",
    price: "115.00",
    compare_price: "140.00",
    currency: "USD",
    rating: "4.8",
    review_count: 96,
    image: "14.png",
    stock: 28,
    material: "Blown Glass & Brass",
    color: "Amber Glow",
    dimensions: "28 x 28 x 35 cm",
    featured: 1,
    status: "active",
    created_at: "2026-08-17 14:40:00",
    updated_at: "2026-08-18 09:50:00",
    image_url: "https://projects.analogenterprise.com/images/14.png"
  },
  {
    id: 15,
    sku: "FUR-015",
    name: "Solid Oak Bookshelf Tower",
    slug: "solid-oak-bookshelf-tower",
    category: "Storage",
    subcategory: "Shelving",
    description: "Five-tier open shelf library display unit made from sustainably harvested FSC-certified oak.",
    price: "460.00",
    compare_price: "520.00",
    currency: "USD",
    rating: "4.9",
    review_count: 64,
    image: "15.png",
    stock: 5,
    material: "FSC Certified Oak",
    color: "Smoked Oak",
    dimensions: "80 x 35 x 185 cm",
    featured: 0,
    status: "active",
    created_at: "2026-08-17 15:00:00",
    updated_at: "2026-08-18 09:52:00",
    image_url: "https://projects.analogenterprise.com/images/15.png"
  },
  {
    id: 16,
    sku: "FUR-016",
    name: "Minimalist Floating Bedside Table",
    slug: "minimalist-floating-bedside-table",
    category: "Furniture",
    subcategory: "Side Tables",
    description: "Space-saving wall mounted nightstand with soft-close push drawer and wireless charging cutout.",
    price: "110.00",
    compare_price: "130.00",
    currency: "USD",
    rating: "4.7",
    review_count: 52,
    image: "16.png",
    stock: 19,
    material: "Engineered Wood & Veneer",
    color: "Walnut",
    dimensions: "45 x 32 x 18 cm",
    featured: 0,
    status: "active",
    created_at: "2026-08-17 15:20:00",
    updated_at: "2026-08-18 09:55:00",
    image_url: "https://projects.analogenterprise.com/images/16.png"
  },
  {
    id: 17,
    sku: "FUR-017",
    name: "Woven Rattan Room Divider",
    slug: "woven-rattan-room-divider",
    category: "Decor",
    subcategory: "Screens",
    description: "Three-panel folding partition screen featuring handwoven Indonesian cane webbing.",
    price: "270.00",
    compare_price: "310.00",
    currency: "USD",
    rating: "4.8",
    review_count: 39,
    image: "17.png",
    stock: 8,
    material: "Natural Cane & Solid Pine",
    color: "Blonde Rattan",
    dimensions: "150 x 3 x 175 cm",
    featured: 1,
    status: "active",
    created_at: "2026-08-17 15:40:00",
    updated_at: "2026-08-18 09:58:00",
    image_url: "https://projects.analogenterprise.com/images/17.png"
  },
  {
    id: 18,
    sku: "FUR-018",
    name: "Contoured Daybed Cushion Bench",
    slug: "contoured-daybed-cushion-bench",
    category: "Living Room",
    subcategory: "Benches",
    description: "Versatile entryway and window bench featuring cylindrical bolster pillow and tapered brass feet.",
    price: "340.00",
    compare_price: "390.00",
    currency: "USD",
    rating: "4.9",
    review_count: 105,
    image: "18.png",
    stock: 10,
    material: "Chenille & Solid Wood",
    color: "Terracotta Rust",
    dimensions: "140 x 50 x 48 cm",
    featured: 0,
    status: "active",
    created_at: "2026-08-17 16:00:00",
    updated_at: "2026-08-18 10:00:00",
    image_url: "https://projects.analogenterprise.com/images/18.png"
  }
];

function Shop() {
  // State management
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters and UI states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(600);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Interactive Cart & Wishlist states
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quickViewQty, setQuickViewQty] = useState(1);
  const [toastMessage, setToastMessage] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch API data with graceful fallback
  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // You can replace the URL below with your exact live API endpoint
      const response = await fetch("https://projects.analogenterprise.com/api/products");

      if (response.ok) {
        const result = await response.json();
        if (result && Array.isArray(result.data)) {
          setProducts(result.data);
          return;
        }
      }
      // Use structured default products if endpoint returns 404 or non-JSON
      setProducts(DEFAULT_PRODUCTS);
    } catch (err) {
      console.warn("API fetch error, using fallback products:", err);
      setProducts(DEFAULT_PRODUCTS);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Compute Categories with counts
  const categories = useMemo(() => {
    const counts = { All: products.length };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return Object.keys(counts).map((name) => ({
      name,
      count: counts[name],
    }));
  }, [products]);

  // Wishlist handler
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const updated = exists ? prev.filter((id) => id !== productId) : [...prev, productId];
      showToast(exists ? "Removed from Wishlist" : "Added to Wishlist ❤️");
      return updated;
    });
  };

  // Add to Cart handler
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    showToast(`Added "${product.name}" to cart! 🛍️`);
  };

  // Remove from Cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Update Cart Quantity
  const updateCartQty = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Temporary Toast Feedback
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'All' && p.category !== selectedCategory) {
          return false;
        }
        // Search query (name, category, description, sku, material)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name?.toLowerCase().includes(q);
          const matchCat = p.category?.toLowerCase().includes(q);
          const matchSub = p.subcategory?.toLowerCase().includes(q);
          const matchDesc = p.description?.toLowerCase().includes(q);
          const matchSku = p.sku?.toLowerCase().includes(q);
          const matchMat = p.material?.toLowerCase().includes(q);
          if (!matchName && !matchCat && !matchSub && !matchDesc && !matchSku && !matchMat) {
            return false;
          }
        }
        // Price filter
        const priceNum = parseFloat(p.price) || 0;
        if (priceNum > maxPrice) {
          return false;
        }
        // Stock filter
        if (inStockOnly && p.stock <= 0) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (selectedSort === 'price-low') {
          return parseFloat(a.price) - parseFloat(b.price);
        }
        if (selectedSort === 'price-high') {
          return parseFloat(b.price) - parseFloat(a.price);
        }
        if (selectedSort === 'rating') {
          return parseFloat(b.rating) - parseFloat(a.rating);
        }
        if (selectedSort === 'reviews') {
          return (b.review_count || 0) - (a.review_count || 0);
        }
        if (selectedSort === 'name-az') {
          return a.name.localeCompare(b.name);
        }
        // Default: featured first
        return (b.featured || 0) - (a.featured || 0);
      });
  }, [products, selectedCategory, searchQuery, maxPrice, inStockOnly, selectedSort]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

  // Render Star Ratings
  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      if (i < full) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      } else if (i === full && rating % 1 >= 0.4) {
        stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-secondary"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="shop-page-wrapper">
      {/* =========================================================================
          HERO & HEADER BANNER
      ========================================================================= */}
      <section className="shop-hero-banner">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 col-12">
            <div className="shop-breadcrumb">
              <a href="#"><i className="bi bi-house-door me-1"></i>Home</a>
              <i className="bi bi-chevron-right text-muted small"></i>
              <span>Shop Collection</span>
            </div>
            <h1 className="shop-title-main">Artisan Furniture & Modern Living</h1>
            <p className="shop-subtitle-text">
              Elevate your spaces with our meticulously curated collection of Scandinavian and modern minimalist furniture, engineered for comfort, durability, and timeless aesthetic.
            </p>
          </div>

          <div className="col-lg-5 col-12 d-flex justify-content-lg-end">
            <div className="shop-hero-badges">
              <div className="hero-pill-badge">
                <i className="bi bi-truck"></i>
                <span>Free Express Delivery over $200</span>
              </div>
              <div className="hero-pill-badge">
                <i className="bi bi-shield-check"></i>
                <span>5-Year Timber Warranty</span>
              </div>
              <div className="hero-pill-badge">
                <i className="bi bi-arrow-repeat"></i>
                <span>30-Day In-Home Trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TOOLBAR: SEARCH, CATEGORY PILLS & CONTROLS
      ========================================================================= */}
      <div className="shop-toolbar-card">
        <div className="row g-3 align-items-center mb-3">
          {/* Search Box */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="shop-search-wrapper">
              <i className="bi bi-search"></i>
              <input
                type="text"
                className="form-control shop-search-input"
                placeholder="Search chairs, tables, oak, materials..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
              {searchQuery && (
                <button
                  className="btn btn-sm text-secondary position-absolute end-0 top-50 translate-middle-y me-2"
                  onClick={() => setSearchQuery('')}
                >
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              )}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="col-lg-3 col-md-6 col-6">
            <select
              className="form-select shop-select"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option value="featured">✨ Featured Products</option>
              <option value="price-low">💵 Price: Low to High</option>
              <option value="price-high">💎 Price: High to Low</option>
              <option value="rating">⭐ Highest Rated</option>
              <option value="reviews">🔥 Most Reviewed</option>
              <option value="name-az">🔤 Alphabetical (A-Z)</option>
            </select>
          </div>

          {/* In-Stock Filter Checkbox */}
          <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center gap-2">
            <div className="form-check form-switch m-0">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="stockSwitch"
                checked={inStockOnly}
                onChange={(e) => {
                  setInStockOnly(e.target.checked);
                  setCurrentPage(1);
                }}
              />
              <label className="form-check-label small text-light fw-medium" htmlFor="stockSwitch">
                In-Stock Only
              </label>
            </div>
          </div>

          {/* View Mode Grid/List & Total Count */}
          <div className="col-lg-2 col-md-6 col-12 d-flex align-items-center justify-content-lg-end justify-content-between gap-3">
            <span className="small text-secondary">
              <strong>{filteredProducts.length}</strong> items
            </span>
            <div className="d-flex gap-2">
              <button
                className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                <i className="bi bi-grid-3x3-gap-fill"></i>
              </button>
              <button
                className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title="List View"
              >
                <i className="bi bi-list-ul"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="category-filter-scroll pt-2 border-top border-secondary border-opacity-25">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`cat-btn ${selectedCategory === cat.name ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat.name);
                setCurrentPage(1);
              }}
            >
              <span>{cat.name}</span>
              <span className="cat-badge-count">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* =========================================================================
          MAIN SHOP CONTENT: SIDEBAR + PRODUCT GRID
      ========================================================================= */}
      <div className="row g-4">
        {/* LEFT COLUMN: FILTERS SIDEBAR */}
        <div className="col-lg-3 col-12">
          <div className="shop-sidebar-box">
            <div className="filter-heading">
              <span><i className="bi bi-sliders me-2 text-primary"></i>Refine Search</span>
              {(selectedCategory !== 'All' || searchQuery || maxPrice < 600 || inStockOnly) && (
                <button
                  className="btn btn-sm text-info p-0"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                    setMaxPrice(600);
                    setInStockOnly(false);
                    setCurrentPage(1);
                  }}
                >
                  Reset All
                </button>
              )}
            </div>

            {/* Price Filter Slider */}
            <div className="filter-group">
              <label className="filter-label">Max Price Limit</label>
              <input
                type="range"
                className="custom-range"
                min="90"
                max="600"
                step="10"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setCurrentPage(1);
                }}
              />
              <div className="price-range-values">
                <span>$90</span>
                <span className="text-light fw-bold">${maxPrice}.00</span>
                <span>$600</span>
              </div>
            </div>

            {/* Curated Material / Features Guide */}
            <div className="filter-group">
              <label className="filter-label">Popular Materials</label>
              <div className="d-flex flex-wrap gap-1">
                {['Solid Oak', 'Ash Wood', 'Bouclé', 'Velvet', 'Linen', 'Ceramic', 'Steel'].map((mat) => (
                  <button
                    key={mat}
                    className={`btn btn-sm rounded-pill ${searchQuery.toLowerCase() === mat.toLowerCase() ? 'btn-primary' : 'btn-outline-secondary text-light'}`}
                    style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
                    onClick={() => {
                      setSearchQuery(searchQuery.toLowerCase() === mat.toLowerCase() ? '' : mat);
                      setCurrentPage(1);
                    }}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Support & Guarantee Note */}
            <div className="p-3 rounded-4 bg-dark border border-secondary border-opacity-25 mt-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-headset text-info fs-5"></i>
                <h6 className="m-0 text-light fw-bold small">Design Consultation</h6>
              </div>
              <p className="small text-secondary mb-0">
                Need customized dimensions or swatches? Chat directly with our interior stylists.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PRODUCT CARDS GRID */}
        <div className="col-lg-9 col-12">
          {/* Loading Skeleton State */}
          {isLoading ? (
            <div className="row g-4">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <div key={idx} className="col-md-6 col-lg-4 col-12">
                  <div className="skeleton-card">
                    <div className="skeleton-shimmer"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : paginatedProducts.length === 0 ? (
            /* Empty State */
            <div className="empty-state-box">
              <i className="bi bi-box-seam text-secondary fs-1 mb-3 d-block"></i>
              <h4 className="text-light fw-bold">No Products Found</h4>
              <p className="text-secondary mx-auto" style={{ maxWidth: '400px' }}>
                We couldn't find any products matching your selected search or filter criteria.
              </p>
              <button
                className="btn btn-primary rounded-pill px-4 py-2 mt-2"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setMaxPrice(600);
                  setInStockOnly(false);
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            /* Products Grid */
            <div className="row g-4">
              {paginatedProducts.map((product) => {
                const discount =
                  product.compare_price && parseFloat(product.compare_price) > parseFloat(product.price)
                    ? Math.round(
                      ((parseFloat(product.compare_price) - parseFloat(product.price)) /
                        parseFloat(product.compare_price)) *
                      100
                    )
                    : null;

                const isFav = wishlist.includes(product.id);
                const isInCart = cart.some((item) => item.id === product.id);

                return (
                  <div
                    key={product.id}
                    className={viewMode === 'grid' ? 'col-lg-4 col-md-6 col-12' : 'col-12'}
                  >
                    <Link to="/shop/detail">
                      <div className={`product-card ${viewMode === 'list' ? 'list-view' : ''}`}>
                        {/* Image Box */}
                        <div className="product-img-box">
                          {product.featured === 1 && (
                            <span className="badge-featured">Featured</span>
                          )}

                          {discount && (
                            <span
                              className={`badge-discount ${product.featured === 1 ? 'has-featured' : ''
                                }`}
                            >
                              -{discount}% OFF
                            </span>
                          )}

                          <div className="product-floating-actions">
                            <button
                              className={`btn-float-action ${isFav ? 'active-fav' : ''}`}
                              onClick={() => toggleWishlist(product.id)}
                              title={isFav ? 'Remove from Wishlist' : 'Add to Wishlist'}
                            >
                              <i className={isFav ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
                            </button>
                            <button
                              className="btn-float-action"
                              onClick={() => {
                                setQuickViewProduct(product);
                                setQuickViewQty(1);
                              }}
                              title="Quick View"
                            >
                              <i className="bi bi-eye"></i>
                            </button>
                          </div>

                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="product-img"
                            loading="lazy"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://projects.analogenterprise.com/images/06.png";
                            }}
                          />
                        </div>

                        {/* Product Details */}
                        <div className="product-details">
                          <div>
                            <div className="product-meta-row">
                              <span className="product-category-tag">{product.category}</span>
                              <span className="product-sku">{product.sku}</span>
                            </div>

                            <h3
                              className="product-name-heading"
                              onClick={() => {
                                setQuickViewProduct(product);
                                setQuickViewQty(1);
                              }}
                            >
                              {product.name}
                            </h3>

                            <p className="product-desc-snippet">{product.description}</p>

                            <div className="rating-stars-box">
                              {renderStars(parseFloat(product.rating))}
                              <span className="rating-score">{product.rating}</span>
                              <span className="rating-reviews">({product.review_count})</span>
                            </div>

                            <div className="product-specs-chips">
                              {product.dimensions && (
                                <span className="spec-chip">
                                  <i className="bi bi-rulers"></i> {product.dimensions}
                                </span>
                              )}
                              {product.material && (
                                <span className="spec-chip">
                                  <i className="bi bi-layers"></i> {product.material}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Price & Action Row */}
                          <div className="product-footer-row">
                            <div className="price-container">
                              <span className="current-price">
                                ${parseFloat(product.price).toFixed(2)}
                              </span>
                              {product.compare_price && (
                                <span className="compare-price">
                                  ${parseFloat(product.compare_price).toFixed(2)}
                                </span>
                              )}
                            </div>

                            <button
                              className={`btn-add-cart ${isInCart ? 'in-cart' : ''}`}
                              onClick={() => addToCart(product, 1)}
                            >
                              <i className={isInCart ? 'bi bi-check-lg' : 'bi bi-bag-plus'}></i>
                              <span>{isInCart ? 'Added' : 'Add to Cart'}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {/* =========================================================================
              PAGINATION CONTROLS
          ========================================================================= */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
              <button
                className="btn btn-outline-secondary btn-sm px-3 rounded-pill"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                <i className="bi bi-chevron-left me-1"></i> Previous
              </button>

              <div className="d-flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`btn btn-sm ${currentPage === page ? 'btn-primary' : 'btn-dark border-secondary'
                      }`}
                    style={{ minWidth: '36px', borderRadius: '8px' }}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                className="btn btn-outline-secondary btn-sm px-3 rounded-pill"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              >
                Next <i className="bi bi-chevron-right ms-1"></i>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          QUICK VIEW MODAL
      ========================================================================= */}
      {quickViewProduct && (
        <div className="modal-backdrop-custom" onClick={() => setQuickViewProduct(null)}>
          <div className="modal-card-custom" onClick={(e) => e.stopPropagation()}>
            <button
              className="btn-close-modal"
              onClick={() => setQuickViewProduct(null)}
              title="Close modal"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="row g-0">
              <div className="col-md-6 col-12">
                <div className="modal-img-wrapper">
                  <img
                    src={quickViewProduct.image_url}
                    alt={quickViewProduct.name}
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12 p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="product-category-tag">{quickViewProduct.category}</span>
                    <span className="badge bg-secondary bg-opacity-25 text-info">
                      {quickViewProduct.subcategory}
                    </span>
                    <span className="text-secondary small ms-auto">SKU: {quickViewProduct.sku}</span>
                  </div>

                  <h2 className="h4 fw-bold text-light mb-2">{quickViewProduct.name}</h2>

                  <div className="rating-stars-box mb-3">
                    {renderStars(parseFloat(quickViewProduct.rating))}
                    <span className="rating-score">{quickViewProduct.rating}</span>
                    <span className="rating-reviews">({quickViewProduct.review_count} customer reviews)</span>
                  </div>

                  <div className="d-flex align-items-baseline gap-2 mb-3">
                    <span className="h3 fw-bold text-light m-0">
                      ${parseFloat(quickViewProduct.price).toFixed(2)}
                    </span>
                    {quickViewProduct.compare_price && (
                      <span className="text-secondary text-decoration-line-through">
                        ${parseFloat(quickViewProduct.compare_price).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <p className="text-secondary small mb-4 line-height-lg">
                    {quickViewProduct.description}
                  </p>

                  <div className="border-top border-bottom border-secondary border-opacity-25 py-3 mb-4">
                    <div className="row g-2 small text-light">
                      <div className="col-6">
                        <span className="text-secondary d-block">Material:</span>
                        <strong>{quickViewProduct.material || 'Premium Timber'}</strong>
                      </div>
                      <div className="col-6">
                        <span className="text-secondary d-block">Color Tone:</span>
                        <strong>{quickViewProduct.color || 'Natural'}</strong>
                      </div>
                      <div className="col-6 mt-2">
                        <span className="text-secondary d-block">Dimensions:</span>
                        <strong>{quickViewProduct.dimensions || 'Standard'}</strong>
                      </div>
                      <div className="col-6 mt-2">
                        <span className="text-secondary d-block">Availability:</span>
                        <span className="badge bg-success bg-opacity-25 text-success">
                          In Stock ({quickViewProduct.stock} units)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span className="small text-secondary fw-semibold">Quantity:</span>
                    <div className="qty-controller">
                      <button
                        className="qty-btn"
                        onClick={() => setQuickViewQty((q) => Math.max(1, q - 1))}
                      >
                        -
                      </button>
                      <span className="qty-val">{quickViewQty}</span>
                      <button
                        className="qty-btn"
                        onClick={() => setQuickViewQty((q) => q + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-primary flex-grow-1 py-2 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                      onClick={() => {
                        addToCart(quickViewProduct, quickViewQty);
                        setQuickViewProduct(null);
                      }}
                    >
                      <i className="bi bi-bag-plus"></i> Add to Cart (
                      ${(parseFloat(quickViewProduct.price) * quickViewQty).toFixed(2)})
                    </button>

                    <button
                      className={`btn ${wishlist.includes(quickViewProduct.id)
                          ? 'btn-danger'
                          : 'btn-outline-secondary'
                        } px-3 rounded-3`}
                      onClick={() => toggleWishlist(quickViewProduct.id)}
                    >
                      <i className="bi bi-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          FLOATING CART BUTTON & CART DRAWER
      ========================================================================= */}
      {totalCartCount > 0 && (
        <button
          className="cart-floating-btn"
          onClick={() => setIsCartOpen(true)}
          title="Open Shopping Cart"
        >
          <i className="bi bi-bag-fill fs-5"></i>
          <span>View Cart</span>
          <span className="cart-count-pill">{totalCartCount}</span>
        </button>
      )}

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <h5 className="m-0 text-light fw-bold d-flex align-items-center gap-2">
                <i className="bi bi-bag-check text-primary"></i> Shopping Cart ({totalCartCount})
              </h5>
              <button
                className="btn btn-sm btn-outline-secondary rounded-circle"
                onClick={() => setIsCartOpen(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="cart-drawer-body">
              {cart.length === 0 ? (
                <div className="text-center py-5 text-secondary">
                  <i className="bi bi-bag-x fs-1 mb-2 d-block"></i>
                  <p>Your shopping bag is currently empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <img src={item.image_url} alt={item.name} className="cart-item-img" />
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <h6 className="text-light fw-semibold m-0 small">{item.name}</h6>
                        <button
                          className="btn btn-sm text-secondary p-0 ms-2"
                          onClick={() => removeFromCart(item.id)}
                          title="Remove item"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                      <span className="small text-secondary d-block mt-1">
                        ${parseFloat(item.price).toFixed(2)} each
                      </span>

                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <div className="qty-controller">
                          <button
                            className="qty-btn"
                            style={{ width: '24px', height: '24px' }}
                            onClick={() => updateCartQty(item.id, -1)}
                          >
                            -
                          </button>
                          <span className="qty-val" style={{ minWidth: '24px', fontSize: '0.8rem' }}>
                            {item.quantity}
                          </span>
                          <button
                            className="qty-btn"
                            style={{ width: '24px', height: '24px' }}
                            onClick={() => updateCartQty(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                        <span className="text-light fw-bold small">
                          ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="d-flex justify-content-between text-secondary small mb-1">
                  <span>Shipping</span>
                  <span className="text-success fw-semibold">FREE</span>
                </div>
                <div className="d-flex justify-content-between text-light fw-bold fs-6 mb-3">
                  <span>Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                <button
                  className="btn btn-primary w-100 py-2.5 rounded-3 fw-semibold shadow"
                  onClick={() => {
                    alert("Thank you for shopping! Checkout simulated successfully.");
                    setCart([]);
                    setIsCartOpen(false);
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="shop-toast">
          <i className="bi bi-info-circle text-info fs-5"></i>
          <span className="small fw-semibold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default Shop;
