var salesTrackerStoresTableTemplate = {
  table_rows:null,
  get html() {
    return `<div id="store-table_wrapper" class="dataTables_wrapper no-footer">
  <div class="dataTables_length" id="store-table_length"><label>Show <select name="store-table_length"
        aria-controls="store-table" class="">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select> stores</label></div>
  <div id="store-table_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-input"
        placeholder="" aria-controls="store-table"></label></div>
  <table id="store-table" class="shadow-backdrop hidden dataTable no-footer dtr-inline"
    style="width: 100%; display: table;" data-wg-notranslate="" aria-describedby="store-table_info">
    <thead>
      <tr>
        <th class="dt-center sorting" tabindex="0" aria-controls="store-table" rowspan="1" colspan="1"
          style="width: 250px;" aria-label="Store: activate to sort column descending">Store</th>
        <th class="dt-center sorting" tabindex="0" aria-controls="store-table" rowspan="1" colspan="1"
          style="width: 213px;" aria-label="Today: activate to sort column descending">Today</th>
        <th class="dt-center sorting" tabindex="0" aria-controls="store-table" rowspan="1" colspan="1"
          style="width: 296px;" aria-label="Yesterday: activate to sort column descending">Yesterday</th>
        <th class="dt-center sorting" tabindex="0" aria-controls="store-table" rowspan="1" colspan="1"
          style="width: 227px;" aria-label="7 Days: activate to sort column descending">7 Days</th>
        <th class="dt-center sorting" tabindex="0" aria-controls="store-table" rowspan="1" colspan="1"
          style="width: 264px;" aria-label="30 Days: activate to sort column descending">30 Days</th>
      </tr>
    </thead>
    <tbody>${this.table_rows}</tbody>
  </table>
  <div class="dataTables_info" id="store-table_info" role="status" aria-live="polite">Showing 1 to 10 of 12 stores</div>
  <div class="dataTables_paginate paging_simple_numbers" id="store-table_paginate"><a
      class="paginate_button previous disabled" aria-controls="store-table" aria-disabled="true" aria-role="link"
      data-dt-idx="previous" tabindex="-1" id="store-table_previous">Previous</a><span><a
        class="paginate_button current" aria-controls="store-table" aria-role="link" aria-current="page" data-dt-idx="0"
        tabindex="0">1</a><a class="paginate_button " aria-controls="store-table" aria-role="link" data-dt-idx="1"
        tabindex="0">2</a></span><a class="paginate_button next" aria-controls="store-table" aria-role="link"
      data-dt-idx="next" tabindex="0" id="store-table_next">Next</a></div>
</div>`
  }
}

export default salesTrackerStoresTableTemplate