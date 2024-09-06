import { useEffect, useState } from "react";

export default function useFacebookAdPageads(id) {
  const [open,setOpen] = useState(false)

  function handleOpenAd(e) {
    setOpen(true)
  }

  function handleCloseAd(e) {
    setOpen(false)
  }

  useEffect(function(){
    console.log(open)
    let element = document.querySelector(`[copiwin-id="${id}"]`)

    element.querySelector(".pageads .page-popup").style.display=open?"flex":"none"

    element.querySelector(".linkclicks a[copiwin-id]").addEventListener("click",handleOpenAd)
    element.querySelectorAll(".pageads .close-ad")[1].addEventListener("click",handleCloseAd)
  })

  return open
}