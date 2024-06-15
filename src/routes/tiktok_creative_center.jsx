import { Link } from "react-router-dom";

export default function TiktokCreativeCenter() {
  return (
    <>
    <div className="header-container">
      <div className="header">
        <h1>Tiktok Creative Center</h1>
      </div>
      <hr className="divider" />
    </div>
    <div className="creative-container">
      <div className="search-section">
        <div className="search-card">
          <h3>Enter video URL</h3>
          <div className="input-group">
            <label>Share URL</label>
            <input type="text" className="input" />
          </div>
          <div className="input-group">
            <button className="input">Search</button>
          </div>
        </div>
      </div>
      <div className="download-section">
        <div className="download-card">
          <h3>Video information</h3>
          <hr />
          <div className="output-section">
            <div className="details">
              <div className="input-group">
                <label>Product URL</label>
                <input type="text" className="input" placeholder="-" readOnly />
              </div>
              <div className="about">
                <h3>About this Ad</h3>
                <div className="about-container">
                  <div className="about-item">
                    <div>Region</div>
                    <div>-</div>
                    <div>Objective</div>
                    <div>-</div>
                    <div>Landing Page</div>
                    <div>-</div>
                  </div>
                  <div className="about-item">
                    <div>Industry</div>
                    <div>-</div>
                    <div>Brand name</div>
                    <div>-</div>
                    <div>Ad caption</div>
                    <div>-</div>
                  </div>
                </div>
              </div>
              <div className="performance">
                <h3>Ad Performance</h3>
                <div className="performance-container">
                  <div className="performance-item">
                    <div>Likes</div>
                    <div>-</div>
                  </div>
                  <div className="performance-item">
                    <div>Comments</div>
                    <div>-</div>
                  </div>
                  <div className="performance-item">
                    <div>Shares</div>
                    <div>-</div>
                  </div>
                  <div className="performance-item">
                    <div>CTR</div>
                    <div>-</div>
                  </div>
                  <div className="performance-item">
                    <div>Budget</div>
                    <div>-</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="video-output">
              <p>Video without watermark</p>
              <div className="ad-content">
                <video className="video"></video>
                <Link className="download-btn" to="" target="_blank" download>Download</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}