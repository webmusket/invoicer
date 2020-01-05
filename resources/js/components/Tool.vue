<template>
    <div>
        <heading class="mb-6">Invoicer Tool</heading>
        <tabs>
            <tab name="General">
                <div class="card overflow-hidden">
                    <form @submit.prevent="updateSetting">
                        <div>

                            <div class="flex border-b border-40">
                                <div class="w-1/4 px-8 py-6">
                                    <label class="inline-block text-80 h-9 pt-2">
How do you want to view the PDF?</label>
                                    <p class="text-sm leading-normal text-80 italic"></p>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <select v-model="general.spdf" class="form-control form-select">
                                        <option value="download" >
                                           Download The Pdf
                                        </option>
                                        <option value="browser-tab" >
                                           Open the pdf in new window/tab
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex border-b border-40">
                                <div class="w-1/4 px-8 py-6">
                                    <label class="inline-block text-80 h-9 pt-2">Choose a template</label>
                                    <p class="text-sm leading-normal text-80 italic"></p>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <select v-model="general.template" class="form-control form-select">
                                        <option value="simple" >
                                            Simple
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex border-b border-40">
                                <div class="w-1/4 px-8 py-6">
                                    <label class="inline-block text-80 h-9 pt-2">Paper Size</label>
                                    <p class="text-sm leading-normal text-80 italic"></p>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <select v-model="general.paper_size" class="form-control form-select">
                                        <option value="a4" >
                                            A4
                                        </option>
                                        <option value="letter" >
                                            Letter
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Test Mode
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input type="checkbox" v-model="general.test_mode" class="checkbox mt-2" name="Active">
                                    <div class="help-text help-text mt-2">
                                        With test mode enabled, any document generated will always use the latest settings, rather than using the settings as configured at the time the document was first created.
Note: invoice numbers and dates are not affected by this setting and will still be generated.
                                    </div>
                                </div>
                            </div>
                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Extended currency symbol support
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="general.extended_currency_symbol" type="checkbox" class="checkbox mt-2" name="Active">
                                    <!---->
                                    <div class="help-text help-text mt-2">
                                        Enable this if your currency symbol is not displaying properly
                                    </div>
                                </div>
                            </div>

                            <div class="flex border-b border-40 " >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Enable font subsetting
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model='general.front_subsetting' type="checkbox" class="checkbox mt-2" name="Active">
                                    <!---->
                                    <div class="help-text help-text mt-2">
                                        Font subsetting can reduce file size by only including the characters that are used in the PDF, but limits the ability to edit PDF files later. Recommended if you're using an Asian font.
                                    </div>
                                </div>
                            </div>



                            <div class="flex border-b border-40">
                                <div class="w-1/4 px-8 py-6">
                                    <label for="profile_photo" class="inline-block text-80 pt-2 leading-tight">
                                        Shop Header/Logo
                                    </label>
                                </div>
                                <div class="w-2/4 px-8 py-6">
                                    <span class="form-file mr-4"><input  @change="onChange" dusk="profile_photo" type="file" id="file-profile_photo" name="name" accept="image/*" class="form-file-input select-none"> <label for="file-profile_photo" class="form-file-btn btn btn-default btn-primary select-none">
                                    Choose File
                                  </label></span> 
                                </div>
                                <div class="w-1/4 px-8 py-6">
                                    <img  src="https://www.gravatar.com/avatar/59a60f10561531f5719b98b55f37b481?s=300" class="align-bottom w-8 h-8 rounded-full" style="object-fit: cover;">

                                    <!-- <img v-if="item.imageUrl" :src="item.imageUrl" class="align-bottom w-8 h-8 rounded-full" style="object-fit: cover;"> -->
                                    
                                </div>
                                
                            </div>

                            <div class="flex border-b border-40">
                                <div class="w-1/4 px-8 py-6">
                                    <label class="inline-block text-80 h-9 pt-2">Shop Name</label>
                                    <p class="text-sm leading-normal text-80 italic"></p>
                                </div>
                                <div class="w-1/4 px-8 py-6">
                                    <input v-model="general.shop_name" placeholder="Year of copyrighting" type="year" class="w-full form-control form-input form-input-bordered">
                                </div>
                            </div>

                            <div class="flex border-b border-40">
                                <div class="w-1/5 px-8 py-6">
                                    <label for="excerpt" class="inline-block text-80 pt-2 leading-tight">
                                        Shop Address
                                    </label>
                                </div>
                                <div class="py-6 px-8 w-4/5">
                                    <textarea v-model='general.shop_address' rows="5" placeholder="Shop Address" class="w-full form-control form-input form-input-bordered py-3 h-auto"></textarea>
                                </div>
                            </div>

                            <div class="flex border-b border-40">
                                <div class="w-1/5 px-8 py-6">
                                    <label for="excerpt" class="inline-block text-80 pt-2 leading-tight">
                                        Footer: terms & conditions, policies, etc.
                                    </label>
                                </div>
                                <div class="py-6 px-8 w-4/5">
                                    <textarea v-model="general.footer_terms_policies" rows="3" placeholder="Footer: terms & conditions, policies, etc." class="w-full form-control form-input form-input-bordered py-3 h-auto"></textarea>
                                </div>
                            </div>

                            <div class="flex border-b border-40">
                                <div class="bg-20 remove-last-margin-bottom leading-normal w-full py-4 px-8">
                                    <h3>Extra template fields</h3>
                                    <div class="help-text help-text mt-2">
                                        These are used for the (optional) footer columns in the Modern (Premium) template, but can also be used for other elements in your custom template
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div class="bg-30 flex px-8 py-4">
                            <button type="submit" class="ml-auto btn btn-default btn-primary mr-3">
                                Update Setting
                            </button>
                        </div>
                    </form>
                </div>
            </tab>
            <tab name="Document">
                <div class="card overflow-hidden">
                    <form @submit.prevent="updateSetting">
                        <div>
                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Enable
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="documents.enable" type="checkbox" class="checkbox mt-2" id="active">
                                    <!---->
                                    <div class="help-text help-text mt-2">
                                        With test mode enabled, any document generated will always use the latest settings, rather than using the settings as configured at the time the document was first created.
Note: invoice numbers and dates are not affected by this setting and will still be generated.
                                    </div>
                                </div>
                            </div>
                            <div class="flex border-b border-40">
                                <div class="w-1/4 px-8 py-6">
                                    <label class="inline-block text-80 h-9 pt-2">Attach to:</label>
                                    <p class="text-sm leading-normal text-80 italic"></p>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <label class="flex items-center select-none mt-2">
                                        <input id="new_order" v-model="documents.attach_to" type="checkbox" class="checkbox mr-2" value="new_order"> New order (Admin email)
                                    </label>
                                    <label class="flex items-center select-none mt-2">
                                        <input id="cancelled_order" v-model="documents.attach_to" type="checkbox" class="checkbox mr-2" value="cancelled_order">Cancelled order
                                    </label>
                                    <label class="flex items-center select-none mt-2">
                                        <input id="failed_order" v-model="documents.attach_to" type="checkbox" class="checkbox mr-2" value="failed_order">Failed order
                                    </label>
                                    <label class="flex items-center select-none mt-2">
                                        <input id="order_on_hold" v-model="documents.attach_to" type="checkbox" class="checkbox mr-2" value="order_on_hold"> Order on-hold
                                    </label>
                                </div>
                            </div>

                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Display shipping address
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="documents.display_shipping_address" type="checkbox" class="checkbox mt-2" name="Active">
                                </div>
                            </div>

                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Display email address
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="documents.display_email_address" type="checkbox" class="checkbox mt-2" name="Active">
                                    <!---->
                                   
                                </div>
                            </div>

                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Display phone number
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="documents.display_phone_number" type="checkbox" class="checkbox mt-2" name="Active">
                                    
                                </div>
                            </div>

                            <div class="flex border-b border-40">
                                <div class="w-1/4 px-8 py-6">
                                    <label class="inline-block text-80 h-9 pt-2">Display invoice date</label>
                                    <p class="text-sm leading-normal text-80 italic"></p>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <select v-model="documents.display_invoice_date" class="form-control form-select">
                                        <option value="no" >
                                           No
                                        </option>
                                        <option value="invoice_date" >
                                           Invoice Date
                                        </option>
                                        <option value="order_date" >
                                           Order Date
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="flex border-b border-40">
                                <div class="w-1/4 px-8 py-6">
                                    <label class="inline-block text-80 h-9 pt-2">Display invoice number</label>
                                    <p class="text-sm leading-normal text-80 italic"></p>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <select v-model="documents.display_phone_number" class="form-control form-select">
                                        <option value="no" >
                                           No
                                        </option>
                                        <option value="invoice_number" >
                                           Invoice Number
                                        </option>
                                        <option value="order_number" >
                                           Order Number
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Enable invoice number column in the orders list
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="documents.enable_invoice_number_column_oder_list" type="checkbox" class="checkbox mt-2" name="Active">
                                    
                                </div>
                            </div>

                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Disable for free products
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="documents.disable_for_free_products" type="checkbox" class="checkbox mt-2" name="Active">
                                    <div class="help-text help-text mt-2">
                                        Disable automatic creation/attachment when only free products are ordered
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="bg-30 flex px-8 py-4">
                            <button type="submit" class="ml-auto btn btn-default btn-primary mr-3">
                                Update Setting
                            </button>
                        </div>
                    </form>
                </div>
            </tab>
            <tab name="Status">
                <div class="card overflow-hidden">
                    <form @submit.prevent="updateSetting">
                        <div>
                            
                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Legacy mode
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="status.legacy_mode" type="checkbox" class="checkbox mt-2" name="Active">
                                    <div class="help-text help-text mt-2">
                                        Legacy mode ensures compatibility with templates and filters from previous versions.
                                    </div>
                                </div>
                            </div>

                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Allow guest access
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="status.allow_guest_access" type="checkbox" class="checkbox mt-2" name="Active">
                                    <div class="help-text help-text mt-2">
                                        Enable this to allow customers that purchase without an account to access their PDF with a unique key
                                    </div>
                                </div>
                            </div>

                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Calculate document numbers (slow)
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="status.calculate_document_number" type="checkbox" class="checkbox mt-2" name="Active">
                                    <div class="help-text help-text mt-2">
                                        Document numbers (such as invoice numbers) are generated using AUTO_INCREMENT by default. Use this setting if your database auto increments with more than 1.
                                    </div>
                                </div>
                            </div>

                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Enable debug output
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="status.enable_debug_output" type="checkbox" class="checkbox mt-2" >
                                    <div class="help-text help-text mt-2">
                                        Enable this option to output plugin errors if you're getting a blank page or other PDF generation issues
Caution! This setting may reveal errors (from other plugins) in other places on your site too, therefor this is not recommended to leave it enabled on live sites.
                                    </div>
                                </div>
                            </div>
                            <div class="flex border-b border-40" >
                                <div class="w-1/4 px-8 py-6">
                                    <label for="active" class="inline-block text-80 pt-2 leading-tight">
                                       Output to HTML
                                    </label>
                                </div>
                                <div class="w-3/4 px-8 py-6">
                                    <input v-model="status.output_to_html" type="checkbox" class="checkbox mt-2">
                                    <div class="help-text help-text mt-2">
                                        Send the template output as HTML to the browser instead of creating a PDF.
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="bg-30 flex px-8 py-4">
                            <button type="submit" class="ml-auto btn btn-default btn-primary mr-3">
                                Update Setting
                            </button>
                        </div>
                    </form>
                </div>
            </tab>
        </tabs>

    </div>
</template>

<script>

export default {
    data() {
        return {
            general: {},
            documents: {
                attach_to: [

                ]
            },
            status: {},
            item:{
                image : null,
                imageUrl: null
            }
        }
    },
    mounted() {
        this.loadDefaultSetting()
    },
    methods: {

        loadDefaultSetting() {
            Nova.request().get("/nova-vendor/invoicer/default-setting")
                .then(response => {
                     //console.log(response.data.documents)
                        this.general = response.data.general
                        this.documents = response.data.documents
                        this.status = response.data.status
                })
                .catch(() => this.error = true)
        },

        updateSetting() {
            Nova.request().put("/nova-vendor/invoicer/update-setting", {general: this.general, documents: this.documents,status: this.status,image: this.item.imageUrl})
                .then(response => {
                     console.log(response.data)
                        // this.general = response.data.general
                        // this.documents = response.data.documents
                        // this.status = response.data.status
                        this.$toasted.success(response.data, {
                            duration : 5000,
                            // onComplete : () => window.location.reload(true)
                    })
                })
                .catch(() => this.error = true)
        },
        onChange(e) {
          const file = e.target.files[0]
          this.image = file
          this.item.imageUrl = URL.createObjectURL(file)
        }
    }
}
</script>

<style>

</style>