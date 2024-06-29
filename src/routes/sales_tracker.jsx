import StoreInput from "../components/store_input";

export default function SalesTracker() {
  return (
    <>
    <div className="header-container">
      <div className="header">
        {/* <img src={metaLogo} alt="meta" /> */}
        <h1>Sales Tracker</h1>
      </div>
      <div className="sub-header">
        <h3>Track Stores</h3>
      </div>
      <hr className="divider" />
    </div>
    <StoreInput />
    <br />
    
    <div className="store-table-filters">
      <span className="show-prefix">Show</span>
      <select className="show-input">
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <span className="show-sufix">stores</span>
      <label className="search-label">Search:</label>
      <input type="search" className="search-input" />
    </div>

    <table className="sales-table">
      <thead>
        <tr>
          <th>Store</th>
          <th>Today</th>
          <th>Yesterday</th>
          <th>7 Days</th>
          <th>30 Days</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ohsnap</td>
          <td>$10000</td>
          <td>$20000</td>
          <td>$30000</td>
          <td>$40000</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}