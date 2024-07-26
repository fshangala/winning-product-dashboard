async function initialize({querySelector=''}) {
  var trial = 0;
  var obj = null;

  for (let index = 0; index < 10; index++) {
    var elem = document.querySelector(querySelector)
    if(elem != null && elem != undefined) {
      obj = elem
    }
    await new Promise(function(resolve){setTimeout(function(){resolve()},1000)})
  }

  if (obj === null) {
    throw Error(querySelector+" => Element not found!")
  } else {
    return obj;
  }
}

export default initialize