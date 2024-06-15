import { useState } from "react";
import metaLogo from "../assets/images/meta.png";
import MetaAdvertisersFilter from "../components/meta_advertisers_filter";

export default function MetaAdvertisers() {

  const applyFilters = function(filters) {
    
  }

  return (
    <>
    <div className="header-container">
      <div className="header">
        <img src={metaLogo} alt="meta" />
        <h1>Meta Advertisers</h1>
      </div>
      <hr className="divider" />
    </div>
    <MetaAdvertisersFilter applyFilters={applyFilters} />
    <br />
    <div className="table-container">
      <div className="top-bar">
        <div className="input-group">
          Search <input type="search" className="input" />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Page name</th>
            <th>Countries</th>
            <th>Website</th>
            <th>Ads</th>
            <th>Adsets</th>
            <th>Avg. Adsets</th>
            <th>Likes</th>
            <th>Followers</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <div className="paginator">
        <button className="btn">Previous</button>
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="placeholder">...</button>
        <button className="btn">10</button>
        <button className="btn">Next</button>
      </div>
    </div>
    </>
  )
}