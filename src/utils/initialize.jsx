

async function initialize({querySelector=''}) {
  var trial = 0;
  function fn() {
    var elem = document.querySelector(querySelector)
    if(elem) {
      return elem
    } else {
      if (trial < 5) {
        trial += 1
        setTimeout(fn,1000)
      } else {
        throw Error(querySelector+" => Element not found!")
      }
    }
  }

  return fn()
}

export default initialize