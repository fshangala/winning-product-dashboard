import { useEffect, useState } from "react";

export default function useReachedBottom() {
  const [reachedBottom,setReachedBottom] = useState(false)

  useEffect(function(){
    function handleScroll() {
      let pageBottom = document.querySelector("#page-bottom").getBoundingClientRect().bottom
      let innerHeight = window.innerHeight

      let hasReachedBottom = (pageBottom - innerHeight) < 10
      setReachedBottom(hasReachedBottom)
    }

    window.addEventListener("scroll",handleScroll)

    return function(){
      window.removeEventListener("scroll",handleScroll)
    }
  },[])

  return reachedBottom
}