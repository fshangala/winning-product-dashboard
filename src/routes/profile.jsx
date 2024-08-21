import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import CopiwinSDK from "../copiwinsdk/copiwinsdk"
import { toast } from "react-toastify"

export default function Profile() {
  const user = useContext(UserContext)
  const [storeUrl,setStoreUrl] = useState('')
  const [access_token,setAccessToken] = useState('')
  const copiwinSDK = new CopiwinSDK(user.auth.access_token)

  function handleAddStore() {
    toast.info("Adding store...")
    copiwinSDK.addUserStore({store_url:storeUrl,access_token:access_token}).then(function(response){
      if("id" in response) {
        toast.success(`${response.store.title} successfully added!`)
      }
      console.log(response)
    }).catch(function(reason){
      if ("data" in reason) {
        if ("detail" in reason.data) {
          toast.error(reason.data.detail)
        }
        if ("access_token" in reason.data) {
          toast.error("access_token: "+reason.data.access_token[0])
        }
        if ("url" in reason.data) {
          toast.error("url: "+reason.data.url[0])
        }
      }
      console.log(reason)
    })
  }

  return (
    <>
    <div>
      <div className="margin-bottom margin-xlarge">
        <div>
          <div className="flex justify-between flex-wrap">
            <div>
                <h5>Update profile</h5>
            </div>
            <div className="flex gap-3">
              <a className="place-self-end invite-friends-btn w-inline-block dark-hover watch-tutorial-button">
                <p className="invite-friends-btn__text">Manage Plan</p>
              </a>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="profile_list">
        <div className="profile-section">
          <div>
            <div className="profile-header">
              <div className="text-block-20">Basic Profile Info</div>
              <div className="div-block-60"></div>
            </div>
          </div>

          <div className="w-form">
            <form id="name-form" name="email-form" data-name="Email Form" method="get" data-ms-form="profile" className="profile-form" aria-label="Email Form">
              <div id="w-node-_8428153d-c465-b15e-53a6-50491e99432d-da3bb3ff" className="field_group">
                <div id="w-node-_8428153d-c465-b15e-53a6-50491e99432e-da3bb3ff" className="form-field-wrapper">
                  <label for="First-Name" id="w-node-_8428153d-c465-b15e-53a6-50491e99432f-da3bb3ff">First Name</label>
                  <input type="text" className="form-input w-input" maxlength="256" name="First-Name" data-name="First Name" placeholder="First Name" id="First-Name" data-ms-member="first-name" required="" />
                </div>
                <div id="w-node-_8428153d-c465-b15e-53a6-50491e994332-da3bb3ff" className="form-field-wrapper">
                  <label for="Last-Name" id="w-node-_8428153d-c465-b15e-53a6-50491e994333-da3bb3ff">Last Name</label>
                  <input type="text" className="form-input w-input" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="Last Name" id="Last-Name" data-ms-member="last-name" required="" />
                </div>
              </div>
              <button type="submit" className="login button w-button">
                Save Profile
                <div className="shadow"></div>
                <div className="glow" style={{willChange: "transform", transform: "translate3d(49.982%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)", transformStyle: "preserve-3d"}}></div>
              </button>
            </form>
            <div className="w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="profile-section">
          <div>
            <div className="profile-header">
              <div className="text-block-20">Email</div>
              <div className="div-block-60"></div>
            </div>
          </div>
          <div className="w-form">
            <form id="wf-form-Updated-Email" name="wf-form-Updated-Email" data-name="Updated Email" method="get" data-ms-form="email" className="profile-form" aria-label="Updated Email">
              <div id="w-node-abe465fc-6310-c419-0cff-0d7914a9f5ae-da3bb3ff" className="form-field-wrapper">
                <label for="Email-4" id="w-node-abe465fc-6310-c419-0cff-0d7914a9f5af-da3bb3ff"> Email</label>
                <input type="email" className="form-input w-input" maxlength="256" name="Email" disabled="" data-name="Email" placeholder="Email" id="Email-4" data-ms-member="email" required="" value={user.profile?user.profile.email:''} />
              </div>
            </form>
          </div>
        </div>
        <div className="profile-section">
          <div>
            <div className="profile-header">
              <div className="text-block-20">Password update</div>
              <div className="div-block-60"></div>
            </div>
          </div>
          <div className="w-form">
            <form id="password-form" name="email-form" data-name="Email Form" method="get" data-ms-form="password" className="profile-form" aria-label="Email Form">
              <div id="w-node-_134dd4f2-bde4-04d9-0710-f9d132546c78-da3bb3ff" className="form-field-wrapper">
                <label for="Current-Password" id="w-node-_134dd4f2-bde4-04d9-0710-f9d132546c79-da3bb3ff">Current Password</label>
                <input type="password" className="form-input w-input" maxlength="256" name="Current-Password" data-name="Current Password" placeholder="Current Password" id="Current-Password" data-ms-member="current-password" required="" />
              </div>
              <div id="w-node-a0ef241f-9492-81ca-e11b-718377b3380b-da3bb3ff" className="form-field-wrapper">
                <label for="New-Password" id="w-node-a0ef241f-9492-81ca-e11b-718377b3380c-da3bb3ff">New Password</label>
                <input type="password" className="form-input w-input" maxlength="256" name="New-Password" data-name="New Password" placeholder="New Password" id="New-Password" data-ms-member="new-password" required="" />
              </div>
              <button type="submit" className="login button w-button">
                Update Password
                <div className="shadow"></div>
                <div className="glow" style={{willChange: "transform", transform: "translate3d(49.976%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)", transformStyle: "preserve-3d"}}></div>
              </button>
            </form>
          </div>
        </div>
        <div className="profile-section">
          <div>
            <div className="profile-header">
              <div className="text-block-20">User stores</div>
              <div className="div-block-60"></div>
            </div>
          </div>
          <div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              {user.profile?user.profile.my_stores.map(function(store){
                return (
                  <>
                  <div key={store.id}>{store.store.title}</div>
                  </>
                )
              }):null}
            </div>
          </div>
          <div className="w-form">
            <form id="update-user-stores" name="update-user-stores" data-name="Add Store" method="post" data-ms-form="url" className="profile-form" aria-label="Add Store">
              <div className="form-field-wrapper">
                <label for="store_url" id="w-node-abe465fc-6310-c419-0cff-0d7914a9f5af-da3bb3ff"> Store URL</label>
                <input type="url" className="form-input w-input" maxlength="256" name="store_url" data-name="Store URL" placeholder="Store URL" id="store_url" data-ms-member="url" required={true} value={storeUrl} onChange={function(e){setStoreUrl(e.target.value)}} />
              </div>
              <div className="form-field-wrapper">
                <label for="store_url"> Access Token</label>
                <input type="text" className="form-input w-input" name="access_token" data-name="Access Token" placeholder="Access Token" id="access_token" data-ms-member="access_token" required={true} value={access_token} onChange={function(e){setAccessToken(e.target.value)}} />
              </div>
              <button type="button" className="login button w-button" onClick={handleAddStore}>
                Add Store
                <div className="shadow"></div>
                <div className="glow" style={{willChange: "transform", transform: "translate3d(49.976%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)", transformStyle: "preserve-3d"}}></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}