import { useEffect, useState } from "react";

export default function useReachedBottom() {
  const [reachedBottom,setReachedBottom] = useState(false)

  useEffect(function(){
    function handleScroll() {
      let offSetHeight = document.documentElement.offsetHeight
      let scrollTop = document.documentElement.scrollTop
      let innerHeight = window.innerHeight

      let hasReachedBottom = (offSetHeight - (scrollTop + innerHeight)) < 10
      setReachedBottom(hasReachedBottom)
    }

    window.addEventListener("scroll",handleScroll)

    return function(){
      window.removeEventListener("scroll",handleScroll)
    }
  },[])

  return reachedBottom
}