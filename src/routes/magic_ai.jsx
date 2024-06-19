import cameraImage from "../assets/images/camera.png"
import MagicAIFilter from "../components/magic_ai_filter"

export default function MagicAI({}) {

  return (
    <>
    <div className="magic-header">
      <div className="top-section">
        <button className="btn">Watch Tutorial</button>
      </div>
      <h1 className="title">Magic AI Search</h1>
      <div className="search-section">
        <input type="search" className="search-input" placeholder="Enter AI search prompt here" />
        <button className="search-btn">Search</button>
        <button className="file-input-btn"><img src={cameraImage} /></button>
      </div>
    </div>
    <MagicAIFilter />
    </>
  )
}