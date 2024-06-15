import metaLogo from "../assets/images/meta.png";

export default function MetaAdvertisers({}) {
  return (
    <>
    <div className="header-container">
      <div className="header">
        <img src={metaLogo} alt="meta" />
        <h1>Meta Advertisers</h1>
      </div>
      <hr className="divider" />
    </div>
    </>
  )
}