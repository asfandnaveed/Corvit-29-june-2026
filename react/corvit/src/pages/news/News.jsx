import React, { useEffect, useState } from 'react';
import './News.css';

function News() {
  const [topnews, setTopNews] = useState();
  const [isLoading, setisLoading] = useState(true);
  const getData = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY");
    const result = await response.json();
    setTopNews(result);
    setisLoading(false);
  }
  useEffect(() => {
    getData();
  }, [])

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className="news-app-container py-4">

      {/* ==========================================
          HEADER & NAVIGATION BAR
      ========================================== */}


      <header className="news-header mb-4">
        <div className="row align-items-center g-3">
          <div className="col-md-6 col-12 d-flex align-items-center gap-3">
            <h1 className="news-brand-title h3 m-0">PulseNews</h1>
            <span className="live-badge">
              <span className="live-dot"></span>
              LIVE UPDATES
            </span>
          </div>

          <div className="col-md-6 col-12 d-flex justify-content-md-end align-items-center gap-2">
            {/* Search Input Box */}
            <div className="news-search-box d-flex align-items-center flex-grow-1 flex-md-grow-0" style={{ minWidth: '240px' }}>
              <i className="bi bi-search text-secondary me-2"></i>
              <input
                type="text"
                className="form-control news-search-input py-1 shadow-none"
                placeholder="Search breaking news..."
              />
            </div>

            {/* Sort Dropdown */}
            <select className="form-select border-secondary text-light bg-dark w-auto py-1 shadow-none">
              <option value="latest">Latest First</option>
              <option value="popular">Most Popular</option>
              <option value="relevant">Most Relevant</option>
            </select>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="d-flex align-items-center gap-2 mt-4 overflow-auto pb-2">
          <a href="#" className="category-pill active">All Articles</a>
          <a href="#" className="category-pill">Politics</a>
          <a href="#" className="category-pill">World</a>
          <a href="#" className="category-pill">Business</a>
          <a href="#" className="category-pill">Technology</a>
          <a href="#" className="category-pill">Sports</a>
          <a href="#" className="category-pill">Entertainment</a>
          <a href="#" className="category-pill">Science</a>
        </div>
      </header>


      {/* ==========================================
          FEATURED / HERO BREAKING NEWS SECTION
      ========================================== */}
      <section className="mb-5">
        <div className="featured-hero-card">
          <div className="row g-0">
            <div className="col-lg-7 col-12 position-relative">
              <div className="featured-img-wrapper">
                <img
                  src="https://media.cnn.com/api/v1/images/stellar/prod/crowleyhong.jpg?c=16x9&q=w_800,c_fill"
                  alt="Featured Article"
                  className="featured-img"
                />
                <span className="source-badge">
                  <i className="bi bi-newspaper me-1"></i> CNN
                </span>
                <div className="featured-overlay-gradient d-lg-none"></div>
              </div>
            </div>

            <div className="col-lg-5 col-12 d-flex flex-column justify-content-between p-4 bg-dark-card">
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="badge bg-danger text-uppercase px-2 py-1">Breaking News</span>
                  <span className="news-meta-item">
                    <i className="bi bi-clock"></i> 2026-08-12T03:46:00Z
                  </span>
                </div>

                <h2 className="featured-title mb-3">
                  Live updates: Democrats Francesca Hong and David Crowley locked in tight race for Wisconsin governor - CNN
                </h2>

                <p className="featured-desc mb-4">
                  Wisconsin state Assemblymember Francesca Hong, a democratic socialist, is locked in a tight contest for the Democratic nomination for governor against David Crowley, the establishment-backed Milwaukee County executive. Follow our live updates.
                </p>
              </div>

              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <i className="bi bi-person-circle text-secondary"></i>
                  <span className="author-tag">
                    By Arit John, Patrick Svitek, David Wright, Ethan Cohen...
                  </span>
                </div>

                <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-25">
                  <a
                    href="https://www.cnn.com/2026/08/11/politics/live-news/elections-south-carolina-wisconsin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-read-more px-3 py-2"
                  >
                    Read Full Story <i className="bi bi-arrow-up-right ms-1"></i>
                  </a>

                  <div className="d-flex gap-2">
                    <button className="btn-action-icon" title="Save Bookmark">
                      <i className="bi bi-bookmark"></i>
                    </button>
                    <button className="btn-action-icon" title="Share Article">
                      <i className="bi bi-share"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          MAIN LAYOUT: NEWS GRID + SIDEBAR
      ========================================== */}
      <div className="row g-4">

        {/* LEFT COLUMN: ARTICLES GRID (COL-LG-8) */}
        <div className="col-lg-8 col-12">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3 className="h5 fw-bold m-0 text-light d-flex align-items-center gap-2">
              <i className="bi bi-journal-text text-primary"></i> Top Headlines
            </h3>
            <span className="text-secondary small">Showing 18 Articles</span>
          </div>

          <div className="row g-4">



            {/* Article Card 1 */}

            {topnews.articles.map((article) => (

              <div className="col-md-6 col-12">
                <div className="news-card">
                  <div className="card-img-wrapper">
                    <img
                      src={article.urlToImage}
                      alt="Article Thumbnail"
                      className="card-news-img"
                    />
                    <span className="source-badge">CNN</span>
                  </div>

                  <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span className="news-meta-item">
                          <i className="bi bi-clock"></i> Aug 12, 03:11 AM
                        </span>
                        <span className="badge bg-secondary bg-opacity-25 text-info px-2 py-1">World</span>
                      </div>

                      <h4 className="news-card-title mb-2">
                      {article.title}
                      </h4>

                      <p className="news-card-desc mb-3">
                        The Colombian government has declared a state of national disaster after a powerful earthquake killed at least 200 people and injured hundreds more. Follow for the latest updates.
                      </p>
                    </div>

                    <div>
                      <div className="news-meta-item mb-3">
                        <i className="bi bi-pen"></i>
                        <span className="author-tag">Michael Rios, Maureen Chowdhury, Rocio Munoz...</span>
                      </div>

                      <div className="d-flex align-items-center justify-content-between pt-2 border-top border-secondary border-opacity-25">
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-read-more px-3 py-1.5"
                        >
                          Read Story <i className="bi bi-box-arrow-up-right ms-1"></i>
                        </a>
                        <button className="btn-action-icon" title="Save">
                          <i className="bi bi-bookmark"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))}







          </div>

          {/* PAGINATION CONTROLS */}
          <div className="d-flex justify-content-center mt-5">
            <nav>
              <ul className="pagination custom-pagination m-0">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>


        {/* RIGHT COLUMN: SIDEBAR WIDGETS (COL-LG-4) */}
        <div className="col-lg-4 col-12 d-flex flex-column gap-4">

          {/* Widget 1: Trending Top Stories */}
          <div className="sidebar-widget">
            <h4 className="widget-title d-flex align-items-center gap-2">
              <i className="bi bi-fire text-danger"></i> Trending Stories
            </h4>

            <div className="d-flex flex-column">

              {/* Trending Item 01 */}
              <div className="trending-item">
                <span className="trending-number">01</span>
                <div>
                  <a
                    href="https://www.theverge.com/games/978374/xbox-elite-3-prototype-pad-leaks-with-tiny-built-in-screen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trending-title mb-1 d-block"
                  >
                    Xbox Elite 3 prototype pad leaks with tiny built-in screen - The Verge
                  </a>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-dark border border-secondary text-info">The Verge</span>
                    <span className="news-meta-item">Aug 11</span>
                  </div>
                </div>
              </div>

              {/* Trending Item 02 */}
              <div className="trending-item">
                <span className="trending-number">02</span>
                <div>
                  <a
                    href="http://www.hollywoodreporter.com/tv/tv-news/nicholas-hoult-harry-potter-season-2-hbo-gilderoy-lockhart-1236671608/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trending-title mb-1 d-block"
                  >
                    Nicholas Hoult Boards ‘Harry Potter’ Season 2 as Gilderoy Lockhart - The Hollywood Reporter
                  </a>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-dark border border-secondary text-warning">Hollywood Reporter</span>
                    <span className="news-meta-item">Aug 11</span>
                  </div>
                </div>
              </div>

              {/* Trending Item 03 */}
              <div className="trending-item">
                <span className="trending-number">03</span>
                <div>
                  <a
                    href="https://www.cbsnews.com/news/trump-media-truth-social-api-contracts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trending-title mb-1 d-block"
                  >
                    Trump Media sells $100,000 contracts for access to Truth Social - CBS News
                  </a>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-dark border border-secondary text-primary">CBS News</span>
                    <span className="news-meta-item">Aug 11</span>
                  </div>
                </div>
              </div>

              {/* Trending Item 04 */}
              <div className="trending-item">
                <span className="trending-number">04</span>
                <div>
                  <a
                    href="https://www.cnbc.com/2026/08/11/nvidia-ai-funding-jensen-huang-china-risk.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trending-title mb-1 d-block"
                  >
                    Why Jensen Huang’s $500 billion AI financing plan faces a big risk - CNBC
                  </a>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-dark border border-secondary text-success">CNBC</span>
                    <span className="news-meta-item">Aug 11</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Widget 2: Popular Topics / Hashtags */}
          <div className="sidebar-widget">
            <h4 className="widget-title d-flex align-items-center gap-2">
              <i className="bi bi-hash text-primary"></i> Popular Topics
            </h4>
            <div className="d-flex flex-wrap gap-2">
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-pill px-3">#WisconsinPrimary</a>
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-pill px-3">#ColombiaEarthquake</a>
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-pill px-3">#XboxElite3</a>
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-pill px-3">#CoreWeave</a>
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-pill px-3">#HarryPotterHBO</a>
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-pill px-3">#WNBA2026</a>
              <a href="#" className="btn btn-sm btn-outline-secondary rounded-pill px-3">#NvidiaAI</a>
            </div>
          </div>

          {/* Widget 3: Breaking News Newsletter Box */}
          <div className="newsletter-card text-center">
            <div className="mb-3">
              <i className="bi bi-envelope-open fs-1 text-primary"></i>
            </div>
            <h4 className="fw-bold text-light mb-2">Daily Digest</h4>
            <p className="small text-secondary mb-4">
              Get the most important global headlines delivered directly to your inbox every morning.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control bg-dark border-secondary text-light py-2 shadow-none"
                  placeholder="Enter your email address..."
                />
              </div>
              <button className="btn btn-primary w-100 py-2 rounded-3 fw-semibold">
                Subscribe Free
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default News;
