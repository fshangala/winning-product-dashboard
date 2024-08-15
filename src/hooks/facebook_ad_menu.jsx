import { useEffect, useState } from "react";

export default function useFacebookAdMenu(id) {
  const [open,setOpen] = useState(false)

  function handleClick(e) {
    setOpen(function(state){
      return !state
    })
  }

  useEffect(function(){
    document.querySelector(`#tooltip${id}`).style.display=open?"block":"none"

    let element = document.querySelector(`[copiwin-id="${id}"]`)
    element.querySelector(".threedot-more-info").addEventListener("click",handleClick)
  })

  return open
}