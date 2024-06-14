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
        <h3>Video information</h3>
        <hr />
      </div>
    </div>
    </>
  );
}