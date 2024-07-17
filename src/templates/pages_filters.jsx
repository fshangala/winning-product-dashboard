import { useEffect, useReducer, useState } from "react";
import pagesFiltersTemplate from "./pages_filters_template";
import initialize from "../utils/initialize";

export default function PagesFilters() {
  const template = pagesFiltersTemplate
  
  useEffect(()=>{
    initialize({querySelector:"#pages-filters"}).then((elem)=>{
      console.log(elem)
      // select2
      $(".select2-hidden-accessible").select2()

      // rangeSliders
      $("#page_like_range").ionRangeSlider({
        type:"double",
        skin:"round",
        min:0,
        max:500000000,
        onStart: function(data) {
          data.input.hide()
        }
      });
      $("#instagram_followers_range").ionRangeSlider({
        type:"double",
        skin:"round",
        min:0,
        max:50000000,
        onStart: function(data) {
          data.input.hide()
        }
      });
      $("#ads_range").ionRangeSlider({
        type:"double",
        skin:"round",
        min:0,
        max:5000,
        onStart: function(data) {
          data.input.hide()
        }
      });
      $("#adsets_range").ionRangeSlider({
        type:"double",
        skin:"round",
        min:0,
        max:500000,
        onStart: function(data) {
          data.input.hide()
        }
      });
      $("#avg_adsets_range").ionRangeSlider({
        type:"double",
        skin:"round",
        min:0,
        max:1000,
        onStart: function(data) {
          data.input.hide()
        }
      });
    }).catch((reason)=>{
      console.log(reason)
    })
  },[])

  return (
    <>
    <div dangerouslySetInnerHTML={{__html:template.html}} />
    </>
  )
}