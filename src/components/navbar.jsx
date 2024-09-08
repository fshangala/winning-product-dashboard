import { Link, useLocation, useNavigate } from "react-router-dom";
import brandImage from "../assets/images/detailed-brand.png";
import userAvatarImage from "../assets/images/user-icon.svg";
import { useContext, useState } from "react";
import { UserContext, UserDispatchContext } from "../context/UserContext";

export default function Navbar() {
  const location = useLocation()
  const [openProfileDropdown,setOpenProfileDropdown] = useState(false)
  const user = useContext(UserContext)
  const userDispatch = useContext(UserDispatchContext)
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem("auth")
    userDispatch({
      type:"set-auth",
      auth:null,
    })
    userDispatch({
      type:"set-profile",
      profile:null,
    })
  }

  return (
    <>
    <div id="profile-dropdown-open" style={{zIndex: 9999, position: "fixed", inset: "65px 25px auto auto", margin: "0px", display:openProfileDropdown?"block":"none"}} data-wg-notranslate="" data-popper-escaped="" data-popper-placement="bottom">
      <div className="dropdown-container has-shadow rounded mt-1 text-size-small">
        <div className="dropdown-padding">
          <p className="font-medium">{user.profile?user.profile.username:''}</p>
          <p className="text-gray-500 text-size-tiny">{user.profile?user.profile.email:''}</p>
        </div>
        <hr/>
        <Link to="/profile" className="dropdown-item dark-hover text-size-small rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className="d-inline mr-5" width="1.5rem">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
            </path>
          </svg>
          My Account</Link>
        <a href="/payment/portal" className="dropdown-item dark-hover text-size-small rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className="d-inline mr-5" width="1.5rem">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z">
            </path>
          </svg>
          Billing Portal</a>
        <a href="/tutorials" className="dropdown-item dark-hover text-size-small rounded">
          <svg width="1.5rem" className="d-inline mr-5" viewBox="0 0 800 800" enable-background="new 0 0 800 800" id="GUIDE"
            version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#"
            xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
              <path
                d="M573.209,268.504l6.092,2.619c2.576,1.108,5.254,1.631,7.891,1.631c7.75,0,15.127-4.533,18.383-12.104   c4.363-10.147-0.326-21.911-10.473-26.273l-6.092-2.62c-10.148-4.363-21.91,0.326-26.273,10.473   C558.373,252.378,563.063,264.141,573.209,268.504z">
              </path>
              <path
                d="M748.934,428.852V313.685c0-11.046-8.953-20-20-20H386.189c-11.046,0-20,8.954-20,20s8.954,20,20,20h245.586   L386.189,439.268L94.083,313.685l292.106-125.583l131.116,56.369c10.148,4.362,21.91-0.327,26.273-10.475   c4.361-10.147-0.328-21.911-10.475-26.273l-139.015-59.766c-5.043-2.168-10.756-2.168-15.799,0L35.545,295.311   c-7.342,3.157-12.101,10.382-12.101,18.374s4.759,15.218,12.101,18.374L378.29,479.411c2.521,1.084,5.211,1.626,7.899,1.626   s5.378-0.542,7.899-1.626l188.64-81.101l0.004,138.395c-110.08,101.846-283.009,101.846-393.086-0.001l0.001-35.302   c0-11.046-8.954-20.001-20-20.001l0,0c-11.045,0-20,8.955-20,19.999l-0.001,43.873c0,5.373,2.163,10.521,6.001,14.283   c61.922,60.689,143.796,94.112,230.541,94.112c86.746,0,168.621-33.423,230.542-94.11c3.838-3.762,6.002-8.91,6.002-14.285   l-0.004-164.159l86.205-37.062v84.799c-16.293,7.572-27.623,24.086-27.623,43.204c0,19.62,14.643,71.239,47.623,71.239   c32.979,0,47.621-51.619,47.621-71.239C776.555,452.938,765.227,436.425,748.934,428.852z M728.934,497.887   c-3.885-7.633-7.623-19.427-7.623-25.831c0-4.203,3.42-7.623,7.623-7.623s7.621,3.42,7.621,7.623   C736.555,478.46,732.816,490.254,728.934,497.887z">
              </path>
              <path
                d="M169.648,460.571c11.046,0,20-8.954,20-20v-6.655c0-11.046-8.954-20-20-20s-20,8.954-20,20v6.655   C149.648,451.617,158.602,460.571,169.648,460.571z">
              </path>
            </g>
          </svg>
          Tutorials</a>
        <a href="/contact" className="dropdown-item dark-hover text-size-small rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
            className="d-inline mr-5" width="1.5rem">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
          Support</a>
        <hr/>
        {user.profile?
        user.profile.is_staff?
        <button onClick={function(e){navigate("/admin/dashboard")}} className="dropdown-item dark-hover text-size-small rounded">
          <i className="pi pi-gauge" style={{width:"1.5rem"}}/> 
          Admin</button>
        :null
        :null}
        <button onClick={logout} className="dropdown-item dark-hover text-size-small rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className="d-inline mr-5" width="1.5rem">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9">
            </path>
          </svg>
          Logout</button>
      </div>
    </div>
    <div data-animation="default" className="navbar_component p-bottom-top-0" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="fbbd3357-a308-4244-f630-6ac7f084078e" role="banner" data-duration="400">
      <div className="navbar_container">
        <Link to="/" aria-current="page" className="navbar1_logo-link w-nav-brand" aria-label="home"><img src={brandImage} loading="lazy" alt="" className="navbar1_logo"/></Link>
        <nav role="navigation" className="navbar_menu is-page-height-tablet w-nav-menu">
          <Link to="/" className={"menu_links dark-hover w-inline-block "+(location.pathname == "/" ? "w--current" : "")}>
            {/*             <div className="svg-embeds w-embed"><img src="/images/facebook-2.svg" style="height:24px;width:24px;"></div> */}
            <div className="dashboard-label">Facebook Ads</div>
          </Link>
          <Link to="/meta-advertisers" className={"menu_links dark-hover w-inline-block "+(location.pathname == "/meta-advertisers" ? "w--current" : "")}>
            {/*             <div className="svg-embeds w-embed"><img src="/images/facebook.svg" style="height:24px;width:24px;"></div> */}
            <div className="dashboard-label">Meta Advertisers</div>
          </Link>
          <Link to="/tiktok-ads" className={"menu_links dark-hover w-inline-block "+(location.pathname == "/tiktok-ads" ? "w--current" : "")}>
            {/*             <div className="svg-embeds w-embed"><img src="/images/tiktok-menu.svg" style="height:24px;width:24px;"></div> */}
            <div className="dashboard-label">Tiktok Ads</div>
          </Link>
          <Link to="/tiktok-creative-center" className={"menu_links dark-hover w-inline-block "+(location.pathname == "/tiktok-creative-center" ? "w--current" : "")}>
            {/*             <div className="svg-embeds w-embed"><img src="/images/tools.svg" style="height:24px;width:24px;"></div> */}
            <div className="dashboard-label">Tiktok Creative Center</div>
          </Link>
          <Link to="/sales-tracker" className={"menu_links dark-hover w-inline-block "+(location.pathname == "/sales-tracker" ? "w--current" : "")}>
            {/*             <div className="svg-embeds w-embed">
                  <svg width="100%" height="100%" viewbox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" fill="none"></rect>
                    <path d="M41 13.9997L24 4L7 13.9997L7 33.9998L24 44L41 33.9998V13.9997Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path>
                    <path d="M24 22V30" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M32 18V30" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M16 26V30" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div> */}
            <div className="dashboard-label">Sales Tracker</div>
          </Link>
          <Link to="/magic-ai" className={"menu_links dark-hover w-inline-block "+(location.pathname == "/magic-ai" ? "w--current" : "")}>
            <div className="dashboard-label">Magic AI</div>
          </Link>
          <Link to="/saved-ads" className={"menu_links dark-hover w-inline-block "+(location.pathname == "/saved-ads" ? "w--current" : "")}>
            {/*             <div className="svg-embeds w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                    <path d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
                    <path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> 
                    <path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div> */}
            <div className="dashboard-label">Saved Ads</div>
          </Link>
          <div className="navbar-end" style={{display:"flex",alignItems:"center"}}>
            {/*<p><span className="referral-count">0</span> / 5 friends invited</p>
            <button className="openModal invite-friends-btn w-inline-block dark-hover" data-modal="#referral-modal">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838" stroke="#ffab3d" stroke-width="1.5" stroke-linecap="round" />
              </svg>
              <p className="invite-friends-btn__text">Get a free account for life</p>
            </button> */}

                              <Link to="#" className="invite-friends-btn w-inline-block upgrade-btn-navbar c-bg-primary" style={{border:"none"}}>
              <p className="invite-friends-btn__text">Upgrade</p>
            </Link>
            


            <Link to="/tutorials" className="invite-friends-btn w-inline-block dark-hover">
              <p className="invite-friends-btn__text">Tutorials</p>
            </Link>
            <div className="avatar dark-hover">
                <img src="https://app.winninghunter.com/images/avatar_placeholder.png" className="rounded-circle dropdowninit" aria-describedby="profile-dropdown-open" data-dropdown-toggle="profile-dropdown-open" onClick={function(){setOpenProfileDropdown(function(state){return !state})}}/>
            </div>

          </div>
        </nav>

        {/* Section for refer a friend popup */}
    {/*     <div id="referral-modal" className="referral-background animate-fade out">
          <div id="referral-background__overlay" className="modal__overlay" data-modal="#referral-modal"></div>
          <form id="referral-form" className="referral-form modal__content">
            <button type="button" className="closeModal" data-modal="#referral-modal">X</button>
            <p className="ref-count"><span className="referral-count">0</span>/5 friends invited</p>
            <h5>Invite friends to get a free account</h5>
            <div className="rewards-section">
              <div className="reward">
                <img className="reward-icon" src="https://emojiisland.com/cdn/shop/products/Thumbs_Up_Sign_Emoji_Icon_ios10_large.png?v=1571606114">
                <p className="">1 friend</p>
                <p className="blue-gradient-text">15% discount</p>
              </div>
              <img className="dash-rewards" src="https://www.svgrepo.com/show/532931/dash.svg" />
              <div className="reward">
                <img className="reward-icon" src="https://emojiisland.com/cdn/shop/products/Heart_Eyes_Emoji_2_large.png?v=1571606090">
                <p className="">2 friends</p>
                <p className="blue-gradient-text">30% discount</p>
              </div>
              <img className="dash-rewards" src="https://www.svgrepo.com/show/532931/dash.svg" />
              <div className="reward">
                <img className="reward-icon" src="https://www.svgrepo.com/show/396240/crown.svg">
                <p className="">3 friends</p>
                <p className="blue-gradient-text">Free for life</p>
              </div>
            </div>
            <p className="gray-text text-sm referral-background__copy-text">Copy the link below or send the link directly via email</p>

            <div className="flex referral-bottom">
              <div className="referral-background__copy w-full">
                <input type="text" id="referralLink" className="form-input w-input" value="" disabled="true" />
                <button className="copy-text" value="copy-text" id="clickCopy" type="button">Copy</button>
              </div>

              <p className="gray-text center-text">OR</p>
              <input type="email" className="form-input w-input" id="email_referral" name="email" placeholder="Enter friends email here" />
              <button type="button" className="btn-snd-black send-by-email" value="send-by-email" id="sendByEmail">Send by email</button>
            </div>

          </form>
        </div> */}

        <div className="navbar1_menu-button w-nav-button" style={{WebkitUserSelect:"text"}} aria-label="menu" role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
          <div className="menu-icon1">
            <div className="menu-icon1_line-top"></div>
            <div className="menu-icon1_line-middle">
              <div className="menu-icon_line-middle-inner"></div>
            </div>
            <div className="menu-icon1_line-bottom"></div>
          </div>
        </div>
      </div>
      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" style={{display:"none"}}></div>
      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
    </>
  )
}