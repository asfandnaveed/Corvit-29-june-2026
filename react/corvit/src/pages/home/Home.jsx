import React, { useEffect, useState } from 'react';

function Home() {

  const [weatherdata, setWeatherData] = useState();//null
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {

    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=API_KEY&q=Lahore");
    const result = await response.json();
    setWeatherData(result);
    setIsLoading(false);
  };

  useEffect(() => {

    getData();

  }, []);

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


  return (
    <div className="weather-dashboard">
      {/* Left Sidebar Card */}
      <div className="sidebar-card">
        {/* Search Bar */}
        <div className="search-container">
          <div className="search-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search city..."
          />
        </div>

        {/* 3D Weather Illustration */}
        <div className="illustration-container">
          <img
            src="/assets/images/weather/vecteezy_rain-on-transparent-background_19781571 1.png"
            alt="Weather Condition"
            className="weather-hero-img"
          />
        </div>

        {/* Temperature Display */}
        <div className="temp-display">
          <span className="temp-value">{weatherdata?.current.temp_c}</span>
          <span className="temp-unit">°C</span>
        </div>

        {/* Location & Day */}
        <div className="location-day-row">
          <span>Kuala Lumpur</span>
          <span>Monday</span>
        </div>

        {/* Weather Details List */}
        <div className="details-list">
          <div className="detail-item">
            <span className="detail-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
                <line x1="8" y1="19" x2="8" y2="21"></line>
                <line x1="12" y1="19" x2="12" y2="21"></line>
                <line x1="16" y1="19" x2="16" y2="21"></line>
              </svg>
            </span>
            <span>{weatherdata.current.condition.text}</span>
          </div>

          <div className="detail-item">
            <span className="detail-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                <circle cx="12" cy="9" r="1"></circle>
              </svg>
            </span>
            <span>Min Temperature - 28°C</span>
          </div>

          <div className="detail-item">
            <span className="detail-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                <circle cx="12" cy="9" r="1"></circle>
              </svg>
            </span>
            <span>Max Temperature - 31°C</span>
          </div>
        </div>

        {/* Bottom Humidity & Wind Speed Box */}
        <div className="stats-pill-card">
          <div className="stat-item">
            <img
              src="/assets/images/weather/water.png"
              alt="Humidity"
              className="stat-icon"
            />
            <div className="stat-text">
              <span className="stat-value">83%</span>
              <span className="stat-label">Humidity</span>
            </div>
          </div>

          <div className="stat-item">
            <img
              src="/assets/images/weather/wind.png"
              alt="Wind Speed"
              className="stat-icon"
            />
            <div className="stat-text">
              <span className="stat-value">6km/h</span>
              <span className="stat-label">Wind Speed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Main Content Card */}
      <div className="main-content-card">
        {/* Navigation Tabs */}
        <div className="nav-tabs-header">
          <button className="tab-btn inactive">Today</button>
          <div className="tab-btn active">
            <span>Week</span>
            <svg className="wavy-underline" width="54" height="8" viewBox="0 0 54 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4C3.5 1.5 6 1.5 8.5 4C11 6.5 13.5 6.5 16 4C18.5 1.5 21 1.5 23.5 4C26 6.5 28.5 6.5 31 4C33.5 1.5 36 1.5 38.5 4C41 6.5 43.5 6.5 46 4C48.5 1.5 51 1.5 53 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Weekly Forecast Cards */}
        <div className="weekly-grid">
          <div className="weekly-card">
            <span className="day-name">Sun</span>
            <img
              src="/assets/images/weather/vecteezy_windy-sunny-on-transparent-background_19552638 1.png"
              alt="Sun weather"
              className="weekly-icon"
            />
            <span className="day-temp">32°</span>
          </div>

          <div className="weekly-card">
            <span className="day-name">Mon</span>
            <img
              src="/assets/images/weather/vecteezy_sun-on-transparent-background_19781530 1.png"
              alt="Mon weather"
              className="weekly-icon"
            />
            <span className="day-temp">31°</span>
          </div>

          <div className="weekly-card">
            <span className="day-name">Tue</span>
            <img
              src="/assets/images/weather/vecteezy_windy-cloud-on-transparent-background_19552646 1.png"
              alt="Tue weather"
              className="weekly-icon"
            />
            <span className="day-temp">27°</span>
          </div>

          <div className="weekly-card">
            <span className="day-name">Wed</span>
            <img
              src="/assets/images/weather/vecteezy_rain-on-transparent-background_19781571 1.png"
              alt="Wed weather"
              className="weekly-icon"
            />
            <span className="day-temp">31°</span>
          </div>

          <div className="weekly-card">
            <span className="day-name">Thu</span>
            <img
              src="/assets/images/weather/vecteezy_cloudy-rain-on-transparent-background_19781539 1.png"
              alt="Thu weather"
              className="weekly-icon"
            />
            <span className="day-temp">25°</span>
          </div>

          <div className="weekly-card">
            <span className="day-name">Fri</span>
            <img
              src="/assets/images/weather/vecteezy_cloudy-rain-on-transparent-background_19781539 1.png"
              alt="Fri weather"
              className="weekly-icon"
            />
            <span className="day-temp">26°</span>
          </div>

          <div className="weekly-card">
            <span className="day-name">Sat</span>
            <img
              src="/assets/images/weather/vecteezy_rain-on-transparent-background_19781571 1.png"
              alt="Sat weather"
              className="weekly-icon"
            />
            <span className="day-temp">30°</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="overview-title">Today’s Overview</h2>

        {/* Row 1: Overview Cards */}
        <div className="overview-grid-row1">
          {/* Air Quality Card */}
          <div className="overview-card">
            <span className="card-subtitle">Air Quality Index</span>
            <span className="card-main-value">53</span>
            <div className="card-bottom-row">
              <span className="status-tag good">Good</span>
              <img
                src="/assets/images/weather/air-pollution.png"
                alt="Air Quality"
                className="card-corner-img"
              />
            </div>
          </div>

          {/* UV Index Card */}
          <div className="overview-card">
            <span className="card-subtitle">UV Index</span>
            <span className="card-main-value">{weatherdata.current.humidity}</span>
            <div className="card-bottom-row">
              <span className="status-tag moderate">Moderate</span>
              <img
                src="/assets/images/weather/uv.png"
                alt="UV Index"
                className="card-corner-img"
              />
            </div>
          </div>

          {/* Pressure Card */}
          <div className="overview-card">
            <span className="card-subtitle">Pressure (hpa)</span>
            <span className="card-main-value">1006</span>
            <div className="card-bottom-row">
              <span className="status-tag normal">Normal</span>
              <img
                src="/assets/images/weather/barometer.png"
                alt="Pressure"
                className="card-corner-img"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Overview Cards (Graph & Sunrise) */}
        <div className="overview-grid-row2">
          {/* Precipitation Chart Card */}
          <div className="graph-card">
            <span className="card-subtitle" style={{ marginBottom: 4 }}>Precipitation</span>

            <div className="graph-container">
              {/* Y-Axis */}
              <div className="y-axis">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
              </div>

              {/* Graph Plot Area */}
              <div className="graph-plot-area">
                {/* Horizontal Dashed Lines */}
                <div className="grid-lines">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>

                {/* SVG Curve Line */}
                <svg className="svg-chart" viewBox="0 0 300 80" preserveAspectRatio="none">
                  <path
                    d="M 0 55 C 30 70, 60 50, 90 40 C 130 25, 170 30, 210 65 C 240 80, 270 40, 300 20"
                    fill="none"
                    stroke="#9ca2ad"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* X-Axis */}
                <div className="x-axis">
                  <span>10AM</span>
                  <span>11AM</span>
                  <span>12PM</span>
                  <span>1PM</span>
                  <span>2PM</span>
                  <span>3PM</span>
                  <span>4PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sunrise & Sunset Card */}
          <div className="sun-card">
            <span className="card-subtitle">Sunrise & Sunset</span>

            <div className="sun-items-container">
              <div className="sun-item">
                <div className="sun-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v3"></path>
                    <path d="M4.93 10.93l-2.12-2.12"></path>
                    <path d="M19.07 10.93l2.12-2.12"></path>
                    <path d="M12 16v4"></path>
                    <path d="M9 18l3-3 3 3"></path>
                  </svg>
                </div>
                <div className="sun-info">
                  <span className="sun-label">Sunrise</span>
                  <span className="sun-time">7:06 AM</span>
                </div>
              </div>

              <div className="sun-item">
                <div className="sun-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v3"></path>
                    <path d="M4.93 10.93l-2.12-2.12"></path>
                    <path d="M19.07 10.93l2.12-2.12"></path>
                    <path d="M12 15v5"></path>
                    <path d="M9 17l3 3 3-3"></path>
                  </svg>
                </div>
                <div className="sun-info">
                  <span className="sun-label">Sunset</span>
                  <span className="sun-time">7:03 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;