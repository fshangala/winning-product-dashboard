export default class CopiwinSDK{
  constructor(){
    //this.baseUrl = "http://copiwin.com:8001"
    this.baseUrl = "https://api.copiwin.com"
  }

  async login({username,password}){
    console.log(username)
    const response = await fetch(`${this.baseUrl}/accounts/api-token-auth/`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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

  async userByEmail({email}){
    const response = await fetch(`${this.baseUrl}/accounts/user-by-email/?email=${email}`)
    return await response.json()
  }

  async createAccount({email,password}) {
    const response = await fetch(`${this.baseUrl}/accounts/create-account/`,{
      method:'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
    return await response.json()
  }

  async facebookAds({search_term}) {
    const response = await fetch(`${this.baseUrl}/facebook-ads/?search_term=${search_term}`)
    return await response.json()
  }
}