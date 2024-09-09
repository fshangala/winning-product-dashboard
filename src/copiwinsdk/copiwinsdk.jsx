import isDefined from "../utils/is_defined"

export default class CopiwinSDK {
  #access_token=null
  constructor(access_token=null){
    this.scheme = process.env.COPIWIN_SCHEME
    this.host = process.env.COPIWIN_HOST
    this.port = process.env.COPIWIN_PORT
    this.baseUrl = `${this.scheme}://${this.host}:${this.port}`

    this.#access_token=access_token
  }
  
  async fetchWrapper(path="/",config={
    method:"get",
    headers: {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${this.#access_token}`,
    },
    body:null,
  }) {
    var defaultConfig = {
      method:isDefined(config.method)?config.method:"get",
      headers: {
        "Content-Type":isDefined(config.headers)?isDefined(config.headers["Content-Type"])?config.headers["Content-Type"]:"application/json":"application/json",
        "Authorization":isDefined(config.headers)?isDefined(config.headers.Authorization)?config.headers.Authorization:`Bearer ${this.#access_token}`:`Bearer ${this.#access_token}`,
      },
      body:isDefined(config.body)?JSON.stringify(config.body):null
    }
    console.log(defaultConfig)
    const response = await fetch(`${this.baseUrl}${path}`, {...defaultConfig})
    var data = await response.json()
    if(response.status == 200) {
      return data
    }

    throw {status:response.status,statusText:response.statusText,data:data}
  }

  async login({username,password}){
    const response = await fetch(`${this.baseUrl}/accounts/oauth-token/`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "client_id":process.env.COPIWIN_CLIENT_ID,
        "client_secret":process.env.COPIWIN_CLIENT_SECRET,
        "grant_type":"password",
        "username": username,
        "password": password
      })
    })
    return await response.json()
  }

  async googleLogin({email,first_name,last_name,google_id,picture_url}){
    const response = await fetch(`${this.baseUrl}/accounts/google-login/`, {
      method: 'post',
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        email:email,
        first_name:first_name,
        last_name:last_name,
        google_id:google_id,
        picture_url:picture_url
      })
    })
    return await response.json()
  }

  async loginWithGoogle({google_access_token}) {
    const response = await fetch(`${this.baseUrl}/accounts/login-with-google/`, {
      method: 'post',
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        "client_id":process.env.COPIWIN_CLIENT_ID,
        "google_access_token":google_access_token
      })
    })
    return await response.json()
  }

  async me({access_token}) {
    const response = await fetch(`${this.baseUrl}/accounts/me/`, {
      method: 'get',
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${access_token}`,
      }
    })
    var data = await response.json()
    if(response.status == 200) {
      return data
    }

    throw {status:response.status,statusText:response.statusText,data:data}
  }

  async userByEmail({email}){
    const response = await fetch(`${this.baseUrl}/accounts/user-by-email/?email=${email}`)
    return await response.json()
  }

  async createAccount({email,password,first_name,last_name}) {
    const response = await fetch(`${this.baseUrl}/accounts/create-account/`,{
      method:'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "username": email,
        "first_name": first_name,
        "last_name": last_name,
        "password": password
      })
    })
    return await response.json()
  }

  async facebookAds({
    access_token,
    keyword="",
    search_keyword='',
    countries="",
    sort_direction='',
    media_type='',
    ad_creation_date="",
    randomize="",
  }) {
    var url = `${this.baseUrl}/facebook-ads/search/?limit=10`
    if (keyword) {
      url += `&search_term=${keyword}`
    }
    if (countries !== "") {
      url += `&country_code=${countries}`
    }
    if (search_keyword !== "") {
      url += `&search_keyword_in=${search_keyword}`
    }
    if (media_type !== "") {
      url += `&media_type=${media_type}`
    }
    if (sort_direction !== "") {
      url += `&sort_direction=${sort_direction}`
    }
    if(ad_creation_date !== "") {
      url += `&ad_creation_date=${ad_creation_date}`
    }
    if (randomize) {
      url += `&randomize=${randomize}`
    }

    const response = await fetch(url,{
      headers:{
        "Authorization":`Bearer ${access_token}`,
      }
    })
    return await response.json()
  }

  async nexPage({access_token,nextPageUrl}) {
    let urlSplit = nextPageUrl.split("/")
    urlSplit[0]="https:"
    urlSplit[2]="api.copiwin.com"
    let url = urlSplit.join("/")
    const response = await fetch(url,{
      headers:{
        "Authorization":`Bearer ${access_token}`,
      }
    })
    return await response.json()
  }

  async nextPage({nextPageUrl}) {
    let urlSplit = nextPageUrl.split("/")
    let url = urlSplit.slice(3).join("/")
    return this.fetchWrapper(`/${url}`)
  }

  async facebookAd({ad_id}) {
    return await this.fetchWrapper(`/facebook-ads/search/${ad_id}/`)
  }

  async saveFacebookAd({ad_archive_id}) {
    return await this.fetchWrapper("/facebook-ads/saved-facebook-ads/",{
      method:"post",
      body:JSON.stringify({
        ad_archive_id:ad_archive_id,
      }),
    })
  }

  async savedFacebookAds({access_token}) {
    const response = await fetch(`${this.baseUrl}/facebook-ads/saved-facebook-ads/`,{
      headers:{
        "Authorization":`Bearer ${access_token}`,
      }
    })
    return await response.json()
  }

  async tiktokAds({access_token,keyword,country='US'}) {
    const response = await fetch(`${this.baseUrl}/tiktok-ads/?search_term=${keyword}&country=${country}`,{
      headers:{
        "Authorization":`Bearer ${access_token}`,
      }
    })
    return await response.json()
  }

  async tiktokAd({access_token,ad_id}) {
    const response = await fetch(`${this.baseUrl}/tiktok-ads/${ad_id}/`,{
      headers:{
        "Authorization":`Bearer ${access_token}`,
      }
    })
    return await response.json()
  }

  async metaAdvertisers({access_token}) {
    const response = await fetch(`${this.baseUrl}/meta-advertisers/`,{
      headers:{
        "Authorization":`Bearer ${access_token}`,
      }
    })
    return await response.json()
  }

  async magicAI({access_token,search_term}) {
    const response = await fetch(`${this.baseUrl}/magic-ai/?search_term=${search_term}`,{
      headers:{
        "Authorization":`Bearer ${access_token}`,
      }
    })
    return await response.json()
  }

  async savedAds({access_token}) {
    const response = await fetch(`${this.baseUrl}/save-ad/`,{
      headers:{
        "Authorization":`Bearer ${access_token}`,
      }
    })
    return await response.json()
  }

  async saveAd({access_token,user_id,source,ad}) {
    const response = await fetch(`${this.baseUrl}/save-ad/`,{
      method:'post',
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${access_token}`,
      },
      body: JSON.stringify({
        user:user_id,
        source:source,
        content:ad
      })
    })
    return await response.json()
  }

  async addStore({access_token,storeUrl}) {
    const response = await fetch(`${this.baseUrl}/sales-tracker/`,{
      method:"post",
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${access_token}`,
      },
      body: JSON.stringify({url:storeUrl})
    })

    if(response.status == 500) {
      throw {status:response.status,statusText:response.statusText,data:null}
    }
    
    return await response.json()
  }

  async stores({access_token}) {
    const response = await fetch(`${this.baseUrl}/sales-tracker/`,{
      headers:{
        "Authorization":`Bearer ${access_token}`,
      }
    })

    var data = await response.json()
    if (response.status == 200) {
      return data
    }
    
    throw {status:response.status,statusText:response.statusText,data:data}
  }

  async store({access_token,id}) {
    const response = await fetch(`${this.baseUrl}/sales-tracker/${id}/`,{
      headers:{
        "Authorization":`Bearer ${access_token}`
      }
    })

    var data = await response.json()
    if(response.status == 200) {
      return data
    }
    
    throw {status:response.status,statusText:response.statusText,data:data}
  }

  async importProduct({store_url,product_url}){
    return await this.fetchWrapper("/sales-tracker/import-product/",{
      method:'post',
      body: {
        "store_url":store_url,
        "product_url":product_url,
      }
    })
  }

  async addUserStore({store_url,access_token}) {
    return await this.fetchWrapper("/sales-tracker/user-shopify-store/",{
      method:"post",
      body:{
        "url":store_url,
        "access_token":access_token,
      }
    })
  }

  async adminFacebookAds() {
    return await this.fetchWrapper("/api-admin/facebook-ads/")
  }

  async adminMetaAdvertisers() {
    return await this.fetchWrapper("/api-admin/meta-advertisers/")
  }

  async adminGetSiteSettings() {
    return await this.fetchWrapper("/api-admin/site-settings/")
  }

  async adminSaveSiteSettings({
    auto_load_facebook_ads,
  }) {
    return await this.fetchWrapper("/api-admin/site-settings/",{
      method:"post",
      body:{
        "auto_load_facebook_ads":auto_load_facebook_ads,
      }
    })
  }
}

