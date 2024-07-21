import { useEffect, useReducer, useState } from "react";
import pagesFiltersTemplate from "./pages_filters_template";
import initialize from "../utils/initialize";

export default function PagesFilters() {
  const template = pagesFiltersTemplate

  let formatter = Intl.NumberFormat('en', { notation: 'compact' });

  Number.prototype.map = function (inMin, inMax, outMin, outMax) {
    return (this - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
  Number.prototype.mapLog = function (min, max) {
    const mapped = (this - min) * (Math.log(max) - Math.log(min)) / (max - min) + Math.log(min);
    return Math.exp(mapped);
  }
  Number.prototype.mapLogRev = function (min, max) {
    return (Math.log(this) - Math.log(min)) * (max - min) / (Math.log(max) - Math.log(min)) + Math.log(min);
  }
  function mapLogarithmic(value, MIN, MAX){
    return Math.ceil(value.mapLog(MIN, MAX));
  }
  function renderRangeslider(element, MIN, MAX) {
    function mapLogarithmicReverse(value){
      return parseFloat(value).mapLogRev(MIN, MAX);
    }
    function prettifyLog(value) {
      return formatter.format(mapLogarithmic(value, MIN, MAX));
    }
    if(MIN == 0) {
      MIN = 1;
    }
    var ranger = $(element);
    ranger.ionRangeSlider({
        skin: "round",
        type: "double",
        min: mapLogarithmicReverse(MIN),
        max: mapLogarithmicReverse(MAX),
        prettify: prettifyLog,
        onStart: function(data) {
          data.input.hide()
        }
    });
  }
  
  useEffect(()=>{
    initialize({querySelector:"#pages-filters"}).then((elem)=>{
      console.log(elem)
      // select2
      $(".select2-hidden-accessible").select2()

      // rangeSliders
      function number_prettify(n) {
        if(n >= 1000) {
          if(n >= 1000000) {
            return `${Math.trunc(n/1000000)}M`
          }
          return `${Math.trunc(n/1000)}K`
        }
        return n
      }

      renderRangeslider("#page_like_range",1,500000000)
      renderRangeslider("#instagram_followers_range",1,50000000)
      renderRangeslider("#ads_range",1,5000)
      renderRangeslider("#adsets_range",1,500000)
      renderRangeslider("#avg_adsets_range",1,1000)
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