export default class FastAPISDK {
  constructor() {
    this.baseUrl = "http://localhost:8000"
  }

  async get_facebook_ads(search_term="dropshipping",country="us") {
    const response = await fetch(`${this.baseUrl}/apis/test_facebook_ads/?search_term=dropshipping&country=us`,{
      method:"get",
    })

    return await response.json()
  }

  async get_test_ads() {
    const response = await fetch(`${this.baseUrl}/apis/test_data`,{
      method:"get",
      headers:{
        "Accept":"application/json",
      }
    })
    return await response.json()
  }
}