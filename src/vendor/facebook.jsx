export function initFacebookSdk() {
  return new Promise(resolve => {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'))
    
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '664236434430951',
        cookie: true,
        xfbml: true,
        version: 'v9.0'
      })

      resolve()
    }
  })
}