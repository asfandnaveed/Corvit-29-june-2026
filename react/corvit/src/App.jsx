
import './App.css';
import { TypeAnimation } from 'react-type-animation';

function App() {


  return (
    <>

      <header>
        <nav className="navbar navbar-expand-lg bg-header">
          <div className="container">
            <a href="" className="navbar-brand">
              <img className="logo" src="assets/images/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              data-bs-target="#buttonOnOff"
              data-bs-toggle="collapse"
            >
              Nav
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="buttonOnOff"
            >
              <div className="navbar-nav">
                <a href="" className="nav-link">
                  Home
                </a>
                <a href="" className="nav-link">
                  Menu
                </a>
                <a href="" className="nav-link">
                  Offers
                </a>
                <a href="" className="nav-link">
                  Service
                </a>
                <a href="" className="nav-link">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div className="bg-header position-relative">
          <div className="container">
            {/* ROW 1 */}
            <div className="row">
              <div className="col-lg-8 col-12 text-lg-start text-center d-flex flex-column align-items-lg-start align-items-center justify-content-center gap-3">
                <div className="h-heading">
                  <span>Quick</span> and <span>Tasty Food Delivered</span> with{" "}
                  <span>a Dash of </span> 

                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Speed',
                      2000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Quick',
                      2000,
                      'Fast',
                      2000,
                      
                    ]}
                    wrapper="small"
                    speed={30}
                    
                    repeat={Infinity}
                  />
                </div>
                <button className="btn btn-primary rounded-pill w-25 btn-order-now shadow-sm">
                  Order Now
                </button>
                <button className="btn btn-outline-primary rounded-pill w-25 btn-track-order">
                  Track Order
                </button>
              </div>
              <div className="col-lg-4 col-12">
                <img
                  className="header-img img-fluid "
                  src="assets/images/header.png"
                  alt=""
                />
              </div>
            </div>
            {/* Row 2 */}
            <div className="bg-white shadow rounded-4 p-3 position-absolute top-100 start-50 translate-middle w-75">
              <div className="row">
                <div className="col-4 d-flex align-items-center gap-3">
                  <img src="assets/images/icons/fast-delivery 1.png" alt="" />
                  <div>
                    <div className="d-box-heading">Fast Delivery</div>
                    <div className="d-box-subheading">
                      Promise To Deliver Within 30 Mins
                    </div>
                  </div>
                </div>
                <div className="col-4 d-flex align-items-center gap-3">
                  <img src="assets/images/icons/fresh.png" alt="" />
                  <div>
                    <div className="d-box-heading">Fresh Food</div>
                    <div className="d-box-subheading">
                      Your Food Will Be Delivered 100% Fresh To Your Home.
                    </div>
                  </div>
                </div>
                <div className="col-4 d-flex align-items-center gap-3">
                  <img src="assets/images/icons/box.png" alt="" />
                  <div>
                    <div className="d-box-heading">Free Delivery</div>
                    <div className="d-box-subheading">
                      Your Food Delivery Is Absolutely Free. No Cost Just Order
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Indian dish Section */}
        <section className="indian-section">
          <div className="container">
            {/* Heading */}
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="h-heading">
                  Our <span>Best Delivered</span> Indian Dish
                </div>
              </div>
              <div className="col-lg-2 col-12" />
              <div className="col-lg-4 col-12 d-flex align-items-center">
                <div className="indian-subheading">
                  It’s Not Just About Bringing You Good Food From Restaurants, We
                  Deliver You Experience
                </div>
              </div>
            </div>
            {/* Products */}
            <div className="row">
              <div className="col-md-4 col-12 text-center">
                <img
                  className="img-fluid"
                  src="assets/images/products/1.png"
                  alt=""
                />
                <div className="p-name">Indian Vegetable Pulao</div>
                <a href="" className="p-link">
                  Order Now &gt;
                </a>
              </div>
              <div className="col-md-4 col-12 text-center">
                <img
                  className="img-fluid"
                  src="assets/images/products/2.png"
                  alt=""
                />
                <div className="p-name">Paneer Bhuna Masala</div>
                <a href="" className="p-link">
                  Order Now &gt;
                </a>
              </div>
              <div className="col-md-4 col-12 text-center">
                <img
                  className="img-fluid"
                  src="assets/images/products/3.png"
                  alt=""
                />
                <div className="p-name">Vermicelli Upma</div>
                <a href="" className="p-link">
                  Order Now &gt;
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Regular Menu */}
        <section className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="h-heading">
                  Our <span>Regular</span> Menu
                </div>
                <button className="btn btn-primary rounded-pill btn-order-now">
                  See all
                </button>
              </div>
              <div className="col-12">
                <div className="indian-subheading mt-3 menu-spacing">
                  There Are Our Regular Menus.{" "}
                  <div>You Can Order Anything You Like.</div>{" "}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 products-spacing">
                <div className="bg-product-color position-relative px-3 pb-3 rounded-4">
                  <img
                    className="position-absolute top-0 start-100 translate-middle"
                    src="assets/images/products/4.png"
                    alt=""
                  />
                  <div className="p-menu-name">
                    <span>Indian Dessert</span> Angoori Rasmalai
                  </div>
                  <div className="rating-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <span>(100)</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3 ">
                    <div className="p-price">₹250</div>
                    <button className="btn btn-primary rounded-pill btn-buy-now px-3 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 products-spacing">
                <div className="bg-product-color position-relative px-3 pb-3 rounded-4">
                  <img
                    className="position-absolute top-0 start-100 translate-middle"
                    src="assets/images/products/4.png"
                    alt=""
                  />
                  <div className="p-menu-name">
                    <span>Indian Dessert</span> Angoori Rasmalai
                  </div>
                  <div className="rating-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <span>(100)</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3 ">
                    <div className="p-price">₹250</div>
                    <button className="btn btn-primary rounded-pill btn-buy-now px-3 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 products-spacing">
                <div className="bg-product-color position-relative px-3 pb-3 rounded-4">
                  <img
                    className="position-absolute top-0 start-100 translate-middle"
                    src="assets/images/products/4.png"
                    alt=""
                  />
                  <div className="p-menu-name">
                    <span>Indian Dessert</span> Angoori Rasmalai
                  </div>
                  <div className="rating-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <span>(100)</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3 ">
                    <div className="p-price">₹250</div>
                    <button className="btn btn-primary rounded-pill btn-buy-now px-3 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 products-spacing">
                <div className="bg-product-color position-relative px-3 pb-3 rounded-4">
                  <img
                    className="position-absolute top-0 start-100 translate-middle"
                    src="assets/images/products/4.png"
                    alt=""
                  />
                  <div className="p-menu-name">
                    <span>Indian Dessert</span> Angoori Rasmalai
                  </div>
                  <div className="rating-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <span>(100)</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3 ">
                    <div className="p-price">₹250</div>
                    <button className="btn btn-primary rounded-pill btn-buy-now px-3 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 products-spacing">
                <div className="bg-product-color position-relative px-3 pb-3 rounded-4">
                  <img
                    className="position-absolute top-0 start-100 translate-middle"
                    src="assets/images/products/4.png"
                    alt=""
                  />
                  <div className="p-menu-name">
                    <span>Indian Dessert</span> Angoori Rasmalai
                  </div>
                  <div className="rating-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <span>(100)</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3 ">
                    <div className="p-price">₹250</div>
                    <button className="btn btn-primary rounded-pill btn-buy-now px-3 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 products-spacing">
                <div className="bg-product-color position-relative px-3 pb-3 rounded-4">
                  <img
                    className="position-absolute top-0 start-100 translate-middle"
                    src="assets/images/products/4.png"
                    alt=""
                  />
                  <div className="p-menu-name">
                    <span>Indian Dessert</span> Angoori Rasmalai
                  </div>
                  <div className="rating-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <span>(100)</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3 ">
                    <div className="p-price">₹250</div>
                    <button className="btn btn-primary rounded-pill btn-buy-now px-3 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 products-spacing">
                <div className="bg-product-color position-relative px-3 pb-3 rounded-4">
                  <img
                    className="position-absolute top-0 start-100 translate-middle"
                    src="assets/images/products/4.png"
                    alt=""
                  />
                  <div className="p-menu-name">
                    <span>Indian Dessert</span> Angoori Rasmalai
                  </div>
                  <div className="rating-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <span>(100)</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3 ">
                    <div className="p-price">₹250</div>
                    <button className="btn btn-primary rounded-pill btn-buy-now px-3 py-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer />
    </>

  )
}

export default App
