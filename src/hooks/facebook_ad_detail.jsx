import { useEffect, useState } from "react";

export default function useFacebookAdDetail(id) {
  const [open,setOpen] = useState(false)

  function handleOpenAd(e) {
    setOpen(true)
  }

  function handleCloseAd(e) {
    setOpen(false)
  }

  useEffect(function(){
    let element = document.querySelector(`[copiwin-id="${id}"]`)

    element.querySelector(".searchadchild .add-popup").style.display=open?"block":"none"

    element.querySelector("button.see-details").addEventListener("click",handleOpenAd)
    element.querySelector(".searchadchild .close-ad").addEventListener("click",handleCloseAd)
  })

  return open
}