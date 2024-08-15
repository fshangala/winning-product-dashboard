import { useEffect, useState } from "react";

export default function useFacebookAdDetail(id) {
  const [open,setOpen] = useState(false)

  function handleClick(e) {
    setOpen(function(state){
      return !state
    })
  }

  useEffect(function(){
    document.querySelector(`#tooltip${id}`).style.display=open?"block":"none"

    let element = document.querySelector(`[copiwin-id="${id}"]`)
    element.querySelector("button.see-details").addEventListener("click",handleClick)
  })

  return open
}