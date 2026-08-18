import React, { useState } from 'react';
import './Detail.css';

function Detail() {
  // Gallery active image
  const galleryImages = [
    { id: 1, label: "Front Angle", url: "https://projects.analogenterprise.com/images/06.png" },
    { id: 2, label: "Side Contour", url: "https://projects.analogenterprise.com/images/01.png" },
    { id: 3, label: "Velvet Curve", url: "https://projects.analogenterprise.com/images/02.png" },
    { id: 4, label: "Oak Frame", url: "https://projects.analogenterprise.com/images/04.png" }
  ];

  const [activeImage, setActiveImage] = useState(galleryImages[0].url);
  const [selectedColor, setSelectedColor] = useState("Ivory / Natural");
  const [selectedMaterial, setSelectedMaterial] = useState("Solid Ash & Linen");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("specs"); // 'specs', 'story', 'shipping', 'reviews'

  // Swatches config
  const colorOptions = [
    { name: "Ivory / Natural", colorCode: "#f5f2eb" },
    { name: "Smoked Charcoal", colorCode: "#2b2d30" },
    { name: "Oatmeal Beige", colorCode: "#d4c8b8" },
    { name: "Nordic Forest Moss", colorCode: "#3e4c41" }
  ];

  // Material options
  const materialOptions = [
    "Solid Ash & Linen",
    "White Oak & Bouclé",
    "Smoked Walnut & Wool"
  ];

  return (
    <div className="detail-page-container">
      {/* =========================================================================
          TOP BREADCRUMB & NAVIGATION BAR
      ========================================================================= */}
      <div className="detail-top-nav">
        <div className="detail-breadcrumb">
          <a href="#"><i className="bi bi-house-door me-1"></i> Home</a>
          <i className="bi bi-chevron-right text-muted small"></i>
          <a href="#">Furniture</a>
          <i className="bi bi-chevron-right text-muted small"></i>
          <a href="#">Chairs</a>
          <i className="bi bi-chevron-right text-muted small"></i>
          <span className="text-light">Nordic Accent Chair</span>
        </div>

        <div className="detail-top-actions">
          <button
            className={`btn-detail-icon ${isWishlisted ? 'active-heart' : ''}`}
            onClick={() => setIsWishlisted(!isWishlisted)}
            title="Save to Wishlist"
          >
            <i className={isWishlisted ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
          </button>
          <button className="btn-detail-icon" title="Share Product">
            <i className="bi bi-share"></i>
          </button>
        </div>
      </div>

      {/* =========================================================================
          MAIN PRODUCT SHOWCASE CARD (GALLERY + CONFIGURATOR)
      ========================================================================= */}
      <div className="detail-main-card">
        <div className="row g-5">
          {/* LEFT COLUMN: INTERACTIVE GALLERY */}
          <div className="col-lg-6 col-12">
            <div className="gallery-wrapper">
              <div className="main-preview-box">
                <div className="gallery-badge-top-left">
                  <span className="badge-tag-pill featured">
                    <i className="bi bi-stars"></i> Featured Choice
                  </span>
                  <span className="badge-tag-pill sale">
                    -12% Special Off
                  </span>
                </div>

                <img
                  src={activeImage}
                  alt="Nordic Accent Chair Preview"
                  className="main-preview-img"
                />
              </div>

              {/* Multi-angle Thumbnail Strip */}
              <div className="thumbnail-strip">
                {galleryImages.map((img) => (
                  <div
                    key={img.id}
                    className={`thumb-item ${activeImage === img.url ? 'active' : ''}`}
                    onClick={() => setActiveImage(img.url)}
                  >
                    <img src={img.url} alt={img.label} />
                  </div>
                ))}
              </div>

              {/* Trust & Guarantee Mini Row */}
              <div className="gallery-trust-row">
                <div className="trust-item-mini">
                  <i className="bi bi-tree"></i>
                  <span>100% FSC Solid Timber</span>
                </div>
                <div className="trust-item-mini">
                  <i className="bi bi-shield-check"></i>
                  <span>5-Year Structural Warranty</span>
                </div>
                <div className="trust-item-mini">
                  <i className="bi bi-box-seam"></i>
                  <span>Free White-Glove Shipping</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PRODUCT CONFIGURATOR */}
          <div className="col-lg-6 col-12">
            <div className="configurator-wrapper">
              <div>
                {/* Meta Category & SKU */}
                <div className="product-meta-header">
                  <span className="category-badge-lg">Furniture · Chairs</span>
                  <span className="sku-text">SKU: FUR-001</span>
                </div>

                {/* Product Title */}
                <h1 className="detail-product-title">Nordic Accent Chair</h1>

                {/* Ratings & Social Proof */}
                <div className="detail-rating-row">
                  <div className="detail-rating-stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <span className="text-light fw-bold">4.8</span>
                  <span className="rating-count-pill">(126 customer reviews)</span>
                  <span className="verified-buyer-badge">
                    <i className="bi bi-check-circle-fill"></i> 98% Recommend
                  </span>
                </div>

                {/* Price Display */}
                <div className="detail-price-box">
                  <span className="detail-main-price">$201.00</span>
                  <span className="detail-strike-price">$229.00</span>
                  <span className="detail-save-badge">Save $28.00 (12%)</span>
                </div>

                {/* Lead Description */}
                <p className="detail-lead-desc">
                  A clean Scandinavian-style accent chair with a compact silhouette, supportive backrest, and versatile neutral finish. Meticulously handcrafted for living rooms, master bedrooms, and curated reading corners.
                </p>

                {/* Color Variant Swatches */}
                <div className="option-section-title">
                  <span>Selected Color Finish</span>
                  <span className="text-info">{selectedColor}</span>
                </div>
                <div className="color-swatches-row">
                  {colorOptions.map((c) => (
                    <button
                      key={c.name}
                      className={`swatch-btn ${selectedColor === c.name ? 'active' : ''}`}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                    >
                      <div
                        className="swatch-color-fill"
                        style={{ backgroundColor: c.colorCode }}
                      ></div>
                    </button>
                  ))}
                </div>

                {/* Material Selection */}
                <div className="option-section-title">
                  <span>Upholstery & Wood Grade</span>
                </div>
                <div className="materials-chips-row">
                  {materialOptions.map((mat) => (
                    <button
                      key={mat}
                      className={`material-chip-btn ${selectedMaterial === mat ? 'active' : ''}`}
                      onClick={() => setSelectedMaterial(mat)}
                    >
                      {mat}
                    </button>
                  ))}
                </div>

                {/* Stock Status & Estimated Delivery */}
                <div className="stock-estimator-box">
                  <div className="stock-status-row">
                    <span className="pulse-green-dot"></span>
                    <span>In Stock (24 units available) - Ready to dispatch</span>
                  </div>
                  <p className="delivery-estimate-text">
                    <i className="bi bi-truck me-1 text-info"></i> Order within the next <strong>3 hrs 40 mins</strong> to receive by <strong>Thursday, Aug 20</strong>.
                  </p>
                </div>
              </div>

              {/* Purchase Actions CTA Bar */}
              <div>
                <div className="detail-cta-bar">
                  <div className="detail-qty-picker">
                    <button
                      className="qty-arrow-btn"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="qty-num-display">{quantity}</span>
                    <button
                      className="qty-arrow-btn"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button className="btn-main-add-bag">
                    <i className="bi bi-bag-plus fs-5"></i>
                    <span>Add to Bag • ${(201 * quantity).toFixed(2)}</span>
                  </button>

                  <button className="btn-instant-buy">
                    Buy Now
                  </button>
                </div>

                <div className="d-flex align-items-center justify-content-between text-secondary small px-1 mt-2">
                  <span><i className="bi bi-lock me-1"></i> Secure 256-bit SSL Checkout</span>
                  <span><i className="bi bi-arrow-clockwise me-1"></i> 30-Day Risk-Free Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          KEY SPECIFICATIONS & HIGHLIGHTS GRID (4 CARDS)
      ========================================================================= */}
      <div className="specs-grid-row">
        <div className="spec-feature-card">
          <div className="spec-icon-box">
            <i className="bi bi-rulers"></i>
          </div>
          <div>
            <div className="spec-card-title">Dimensions</div>
            <div className="spec-card-value">78 x 72 x 82 cm</div>
          </div>
        </div>

        <div className="spec-feature-card">
          <div className="spec-icon-box">
            <i className="bi bi-layers"></i>
          </div>
          <div>
            <div className="spec-card-title">Frame Material</div>
            <div className="spec-card-value">Kiln-Dried Hardwood</div>
          </div>
        </div>

        <div className="spec-feature-card">
          <div className="spec-icon-box">
            <i className="bi bi-shield-check"></i>
          </div>
          <div>
            <div className="spec-card-title">Weight Capacity</div>
            <div className="spec-card-value">Tested up to 150 kg</div>
          </div>
        </div>

        <div className="spec-feature-card">
          <div className="spec-icon-box">
            <i className="bi bi-tools"></i>
          </div>
          <div>
            <div className="spec-card-title">Assembly</div>
            <div className="spec-card-value">Zero Assembly Needed</div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE SPECIFICATION TABS & STORY
      ========================================================================= */}
      <div className="detail-tabs-container">
        {/* Tab Headers */}
        <div className="detail-tab-header">
          <button
            className={`tab-nav-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            Technical Specifications
          </button>
          <button
            className={`tab-nav-btn ${activeTab === 'story' ? 'active' : ''}`}
            onClick={() => setActiveTab('story')}
          >
            Design Story & Craftsmanship
          </button>
          <button
            className={`tab-nav-btn ${activeTab === 'shipping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shipping')}
          >
            Shipping & In-Home Trial
          </button>
          <button
            className={`tab-nav-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Customer Reviews (126)
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'specs' && (
          <div className="row g-4">
            <div className="col-lg-6 col-12">
              <table className="tech-spec-table">
                <tbody>
                  <tr>
                    <td className="spec-key">Product SKU</td>
                    <td className="spec-val">FUR-001</td>
                  </tr>
                  <tr>
                    <td className="spec-key">Overall Dimensions</td>
                    <td className="spec-val">78 cm (W) x 72 cm (D) x 82 cm (H)</td>
                  </tr>
                  <tr>
                    <td className="spec-key">Seat Height</td>
                    <td className="spec-val">44 cm from floor level</td>
                  </tr>
                  <tr>
                    <td className="spec-key">Seat Depth</td>
                    <td className="spec-val">54 cm deep contour</td>
                  </tr>
                  <tr>
                    <td className="spec-key">Net Weight</td>
                    <td className="spec-val">14.8 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-lg-6 col-12">
              <table className="tech-spec-table">
                <tbody>
                  <tr>
                    <td className="spec-key">Upholstery Fabric</td>
                    <td className="spec-val">Heavyweight Belgian Linen Blend</td>
                  </tr>
                  <tr>
                    <td className="spec-key">Martindale Rubs</td>
                    <td className="spec-val">50,000+ Cycles (Commercial Grade)</td>
                  </tr>
                  <tr>
                    <td className="spec-key">Cushion Core</td>
                    <td className="spec-val">High-resilience memory foam & feather topper</td>
                  </tr>
                  <tr>
                    <td className="spec-key">Wood Finish</td>
                    <td className="spec-val">Eco-friendly matte protective lacquer</td>
                  </tr>
                  <tr>
                    <td className="spec-key">Care Instructions</td>
                    <td className="spec-val">Spot clean with mild fabric cleaner; vacuum gently</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'story' && (
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 col-12">
              <h3 className="text-light fw-bold h4 mb-3">Scandinavian Harmony & Pure Ergonomics</h3>
              <p className="text-secondary leading-relaxed mb-3">
                Rooted in Danish modernist design traditions, the Nordic Accent Chair strips away unnecessary ornamentation to emphasize proportion, material authenticity, and timeless form.
              </p>
              <p className="text-secondary leading-relaxed mb-0">
                Each curve is precision-milled from sustainable European solid hardwood and joined using master mortise-and-tenon joints. The result is a chair that not only holds its silhouette for decades, but develops a warm patina that enriches over time.
              </p>
            </div>
            <div className="col-lg-4 col-12 text-center">
              <div className="p-4 rounded-4 bg-dark border border-secondary border-opacity-25">
                <i className="bi bi-award text-warning fs-1 mb-2 d-block"></i>
                <h5 className="text-light fw-bold">Red Dot Design Nominee</h5>
                <p className="text-secondary small mb-0">Recognized for ergonomic innovation and sustainable woodcraft in 2026.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="row g-4">
            <div className="col-md-4 col-12">
              <div className="p-4 rounded-4 bg-dark border border-secondary border-opacity-25 h-100">
                <i className="bi bi-box-seam text-info fs-2 mb-2 d-block"></i>
                <h5 className="text-light fw-bold">White Glove Delivery</h5>
                <p className="text-secondary small mb-0">
                  Shipped in reinforced protective packaging. Our logistics team brings the chair directly to your room of choice and unpacks it.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="p-4 rounded-4 bg-dark border border-secondary border-opacity-25 h-100">
                <i className="bi bi-calendar-check text-success fs-2 mb-2 d-block"></i>
                <h5 className="text-light fw-bold">30-Day In-Home Trial</h5>
                <p className="text-secondary small mb-0">
                  Live with your new chair for 30 days. If it does not fit your space or comfort expectations, we arrange a pickup with 100% refund.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="p-4 rounded-4 bg-dark border border-secondary border-opacity-25 h-100">
                <i className="bi bi-shield-lock text-primary fs-2 mb-2 d-block"></i>
                <h5 className="text-light fw-bold">5-Year Warranty</h5>
                <p className="text-secondary small mb-0">
                  Comprehensive coverage against structural defects, timber warping, and joint failures under standard residential use.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <div className="row g-4 mb-4">
              <div className="col-md-4 col-12 text-center p-4 bg-dark rounded-4 border border-secondary border-opacity-25">
                <div className="display-4 fw-bold text-light mb-1">4.8</div>
                <div className="text-warning mb-2 fs-5">
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-half me-1"></i>
                </div>
                <p className="text-secondary small mb-0">Based on 126 verified owner reviews</p>
              </div>

              <div className="col-md-8 col-12 d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center gap-3 mb-2 small text-secondary">
                  <span style={{ width: '45px' }}>5 Star</span>
                  <div className="progress flex-grow-1 bg-dark" style={{ height: '8px' }}>
                    <div className="progress-bar bg-warning" style={{ width: '85%' }}></div>
                  </div>
                  <span>85%</span>
                </div>
                <div className="d-flex align-items-center gap-3 mb-2 small text-secondary">
                  <span style={{ width: '45px' }}>4 Star</span>
                  <div className="progress flex-grow-1 bg-dark" style={{ height: '8px' }}>
                    <div className="progress-bar bg-warning" style={{ width: '12%' }}></div>
                  </div>
                  <span>12%</span>
                </div>
                <div className="d-flex align-items-center gap-3 small text-secondary">
                  <span style={{ width: '45px' }}>3 Star</span>
                  <div className="progress flex-grow-1 bg-dark" style={{ height: '8px' }}>
                    <div className="progress-bar bg-warning" style={{ width: '3%' }}></div>
                  </div>
                  <span>3%</span>
                </div>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="review-item-card">
              <div className="review-author-row">
                <div>
                  <span className="reviewer-name">Sophia Sterling</span>
                  <span className="badge bg-success bg-opacity-25 text-success ms-2 small">Verified Purchase</span>
                </div>
                <span className="text-secondary small">2 days ago</span>
              </div>
              <div className="text-warning small mb-2">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h6 className="text-light fw-bold mb-1">Exceptional quality and ergonomic support!</h6>
              <p className="text-secondary small mb-0">
                The linen weave is thick, tactile, and durable. The chair arrived pre-assembled and fits seamlessly in our living room reading nook. Extremely comfortable for long hours.
              </p>
            </div>

            <div className="review-item-card">
              <div className="review-author-row">
                <div>
                  <span className="reviewer-name">Marcus Vance</span>
                  <span className="badge bg-success bg-opacity-25 text-success ms-2 small">Verified Purchase</span>
                </div>
                <span className="text-secondary small">1 week ago</span>
              </div>
              <div className="text-warning small mb-2">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h6 className="text-light fw-bold mb-1">Stunning craftsmanship that feels like an art piece</h6>
              <p className="text-secondary small mb-0">
                The solid ash wood beveling is smooth to the touch and the finish has no harsh odors. Delivery was punctual and carefully handled. 10/10 recommend!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          COMPLETE THE LOOK / RELATED PRODUCTS SECTION
      ========================================================================= */}
      <div>
        <div className="related-section-header">
          <div>
            <h2 className="related-title m-0">Complete The Look</h2>
            <p className="text-secondary small m-0">Complementary Scandinavian pieces styled by our interior designers</p>
          </div>
          <a href="#" className="btn btn-outline-secondary btn-sm rounded-pill px-3">
            View All Collection <i className="bi bi-arrow-right ms-1"></i>
          </a>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="related-product-card">
              <div className="related-img-box">
                <img src="https://projects.analogenterprise.com/images/03.png" alt="Geometric Oak Coffee Table" />
              </div>
              <div>
                <span className="text-info small fw-bold">TABLES</span>
                <h5 className="text-light fw-semibold h6 mt-1 mb-2">Geometric Oak Coffee Table</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light fw-bold">$310.00</span>
                  <button className="btn btn-sm btn-primary rounded-pill px-3">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="related-product-card">
              <div className="related-img-box">
                <img src="https://projects.analogenterprise.com/images/01.png" alt="Minimalist Lounge Chair" />
              </div>
              <div>
                <span className="text-info small fw-bold">CHAIRS</span>
                <h5 className="text-light fw-semibold h6 mt-1 mb-2">Minimalist Lounge Chair</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light fw-bold">$185.00</span>
                  <button className="btn btn-sm btn-primary rounded-pill px-3">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="related-product-card">
              <div className="related-img-box">
                <img src="https://projects.analogenterprise.com/images/02.png" alt="Velvet Curved Armchair" />
              </div>
              <div>
                <span className="text-info small fw-bold">ARMCHAIRS</span>
                <h5 className="text-light fw-semibold h6 mt-1 mb-2">Velvet Curved Armchair</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light fw-bold">$249.00</span>
                  <button className="btn btn-sm btn-primary rounded-pill px-3">View</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="related-product-card">
              <div className="related-img-box">
                <img src="https://projects.analogenterprise.com/images/13.png" alt="Architectural Floor Lamp" />
              </div>
              <div>
                <span className="text-info small fw-bold">LIGHTING</span>
                <h5 className="text-light fw-semibold h6 mt-1 mb-2">Architectural Floor Lamp</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light fw-bold">$220.00</span>
                  <button className="btn btn-sm btn-primary rounded-pill px-3">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
export { Detail };
