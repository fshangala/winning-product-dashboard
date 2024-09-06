export default function InputKeyword({value="",onChange=function({value}){}}) {
  return (
    <div className="price-input price">
      <div className="select-wrapper">
        <div className="div-block-71">
          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4 absolute ml-2 mt-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </span>
          <input value={value} onChange={function(e){onChange({value:e.target.value})}} type="text" className="form-input select2-selection adset-count w-input itemsetcounter !pe-10" maxlength="2560" placeholder="Search..." id="keyword" style={{width:"100%"}} autocomplete="off"/>
        </div>
      </div>
    </div>
  )
}