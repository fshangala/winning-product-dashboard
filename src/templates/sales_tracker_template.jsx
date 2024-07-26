var salesTrackerTemplate = {
    id:null,
    stores_table:null,
    table_rows: '',
    get html() {
        return `<div class="margin-bottom margin-xlarge" copiwin-id="${this.id}">
    <div>
        <div class="w-form">
            <div class="flex justify-between flex-wrap">
                <h5><img src="https://app.winninghunter.com/assets/images/sales.svg" height="30px" width="50.33px"> Sales Tracker</h5>

            </div>
            <div class="">
                <div x-data="{ activeTab:  0 }">
                    <div class="border-b border-b-gray-300">
                        <div class="-mb-px flex items-center gap-4 text-md font-medium">
                            <li class="mb-[-2px] p-0"> <a @click="activeTab = 0"
                                    :class="{ 'relative text-primary after:absolute after:left-0 text-lg border-primary border-b-4 font-bold after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700': activeTab === 0 }"
                                    class="inline-flex cursor-pointer transition-all duration-200 delay-200 transform items-center gap-2 text-gray-500 hover:text-primary-700 relative text-primary after:absolute after:left-0 text-lg border-primary border-b-4 font-bold after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700">
                                    Track Stores</a> </li>

                        </div>
                    </div> <!-- tab content -->
                    <div class="py-3">
                        <div :class="{ '!block': activeTab === 0 }"
                            x-show.transition.in.opacity.duration.600="activeTab === 0" class="hidden !block">

                            <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                class="dashboard_form" autocomplete="off" aria-label="Email Form">
                                <div class="search-bar-2"><input type="text"
                                        class="form-input store-tracker-input w-node-_0322e9d6-424f-4199-3983-70c178bb4fa4-0ff95548 w-input"
                                        maxlength="1000" name="Store-URL" data-name="Store URL"
                                        placeholder="Insert Store URL" id="Store-URL" required="" value="">
                                    <button id="start-tracking-btn" type="submit" class="applly-filter w-button">Start
                                        Tracking</button>
                                    <div class="skeleton store_amount" style="display: none;"></div>
                                    <div id="w-node-_1cec01a0-b946-73f1-6c9a-1da1ecab96c0-0ff95548"
                                        class="div-block-58">
                                        <div id="w-node-_07575d5b-b30a-d5b0-8568-2c3705a3b90b-0ff95548"
                                            class="stores-count-wrapper product-count-wrapper" style="">
                                            <div>Stores</div>
                                            <div class="stores-left"><span id="storecount">12</span>/25</div>
                                        </div>
                                        <div class="skeleton store_amount" style="display: none;"></div>
                                    </div>
                                </div>
                            </form>
                            <div class="py-5">${this.stores_table}</div>



                        </div>

                    </div>
                    <!-- shop explorer -->

                </div>
            </div>
        </div>
        <hr>
    </div>
</div>`
    }
}

export default salesTrackerTemplate