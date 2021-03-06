module.exports = {
  AddProductPage: {
    exit_welcome_button: '[class="btn btn-tertiary-outline btn-lg onboarding-button-shut-down"]',
    click_outside: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]',
    logout: '#header_logout',
    products_subtab: '#subtab-AdminCatalog',
    go_to_catalog_button: '#form > div.product-footer.justify-content-md-center > div.col-sm-5.col-lg-7.text-right > div.btn-group.hide.dropdown.show > div > a.dropdown-item.go-catalog.js-btn-save',
    new_product_dropdown_button: '#form > div.product-footer.justify-content-md-center > div.col-sm-5.col-lg-7.text-right > div.btn-group.hide.dropdown.show > div > a.dropdown-item.new-product.js-btn-save',
    more_option_button: '.btn.btn-primary.dropdown-toggle',
    basic_settings_tab: '//*[@id="tab_step1"]/a',
    new_product_button: '#page-header-desc-configuration-add',
    product_name_input: '#form_step1_name_1',
    product_name_fr_input: '#form_step1_name_2',
    save_product_button: '//*[@id="form"]/div[4]/div[2]/div/button[1]',
    green_validation_notice: '[class="growl growl-notice growl-medium"]',
    close_validation_button: '.growl-close',
    validation_msg: '#growls-default > .growl-notice > .growl-message:not(:empty)',
    red_validation_notice: '[class="growl growl-error growl-medium"]',
    description_tab: '[href="#description"]',
    quantity_shortcut_input: '#form_step1_qty_0_shortcut',
    picture: '[class="dz-hidden-input"]',
    picture_cover: '.iscover',
    product_online_toggle: '.switch-input ',
    catalogue_filter_by_name_input: '//input[@name="filter_column_name"]',
    catalogue_submit_filter_button: '//button[@name="products_filter_submit"]',
    variations_type_button: '//*[@id="show_variations_selector"]/div[2]/label/input',
    variations_tab: '//*[@id="tab_step3"]/a',
    variations_input: '//*[@id="form_step3_attributes-tokenfield"]',
    variations_generate: '//*[@id="create-combinations"]',
    variations_select: '//*[@id="attributes-generator"]/div[2]/div[1]/fieldset/div/span/div/div/div',
    var_selected: '//*[@id="toggle-all-combinations"]',
    var_selected_quantitie: '//*[@id="product_combination_bulk_quantity"]',
    combinations_thead: '//*[@id="combinations_thead"]/tr/th[7]',
    save_quantitie_button: '//*[@id="apply-on-combinations"]',
    add_feature_to_product_button: '//*[@id="add_feature_button"]',
    feature_select: '//*[@id="features-content"]/div/div[%NUMBER]/div[1]/fieldset/span/span[1]/span',
    select_feature_created: '/html/body//span/span[1]/input',
    feature_select_button: '//*[@id="select2-form_step1_features_%ID_feature-container"]',
    feature_select_button1: '//*[@id="features-content"]/div/div/div[1]/fieldset/span/span[1]/span',
    customized_value_input: '//*[@id="form_step1_features_%ID_custom_value_1"]',
    feature_btn:'//*[@id="add_feature_button"]',
    result_feature_select: '//*[@id="select2-form_step1_features_%ID_feature-results"]/li',
    summary_textarea: '(//*[@id="form_step1_description_short"]//div[@class="mce-tinymce mce-container mce-panel"])[1]',
    description_textarea: '(//*[@id="form_step1_description"]//div[@class="mce-tinymce mce-container mce-panel"])[1]',
    tab_description: '//*[@id="tab_description"]/a',
    feature_value_select: '//*[@id="form_step1_features_%ID_value" and %V]',
    product_create_category_btn: '//*[@id="add-category-button"]',
    product_type: '#form_step1_type_product',
    product_category_name_input: '//*[@id="form_step1_new_category_name"]',
    category_create_btn: '//*[@id="form_step1_new_category_save"]',
    category_home: '//*[@id="form_step1_categories"]/ul/li/div/label/input',
    product_add_brand_btn: '//*[@id="add_brand_button"]',
    product_brand_select: '//*[@id="manufacturer-content"]/div/div[1]/fieldset/span',
    product_brand_select_option: '//*[@id="select2-form_step1_id_manufacturer-results"]/li[2]',
    search_product_pack: '//*[@id="form_step1_inputPackItems"]',
    product_item_pack: '//*[@id="js_form_step1_inputPackItems"]/div/div[1]/span/div/div/div[1]/table/tbody/tr[1]',
    product_pack_item_quantity: '//*[@id="form_step1_inputPackItems-curPackItemQty"]',
    product_pack_add_button: '//*[@id="form_step1_inputPackItems-curPackItemAdd"]',
    add_related_product_btn: '//*[@id="add-related-product-button"]',
    search_add_related_product_input: '//*[@id="form_step1_related_products"]',
    related_product_item: '//*[@id="related-content"]/div[2]/fieldset/div/div[1]/span/div/div',
    product_add_feature_btn: '//*[@id="add_feature_button"]',
    feature_select_option: '//*[@id="select2-form_step1_features_0_feature-results"]/li[2]',
    feature_custom_value_height: '//*[@id="form_step1_features_0_custom_value_1"]',
    feature_select_option_text: '//*[@id="select2-form_step1_features_%ID_feature-results"]/li[text()="%V"]',
    feature_custom_value: '//*[@id="form_step1_features_%ID_custom_value_1"]',
    priceTE_shortcut: '#form_step1_price_shortcut',
    priceTTC_shortcut: '#form_step1_price_ttc_shortcut',
    product_reference: '//*[@id="form_step6_reference"]',
    product_quantities_tab: '//*[@id="tab_step3"]/a',
    product_quantity_input: '//*[@id="form_step3_qty_0"]',
    minimum_quantity_sale: '//*[@id="form_step3_minimal_quantity"]',
    pack_stock_type: '//*[@id="form_step3_pack_stock_type"]',
    virtual_associated_file: '#form_step3_virtual_product_is_virtual_file_0',
    virtual_select_file: '#form_step3_virtual_product_file',
    virtual_file_name: '#form_step3_virtual_product_name',
    virtual_file_number_download: '#form_step3_virtual_product_nb_downloadable',
    virtual_expiration_file_date: '#form_step3_virtual_product_expiration_date',
    virtual_number_days: '#form_step3_virtual_product_nb_days',
    virtual_save_attached_file: '#form_step3_virtual_product_save',
    pack_availability_preferences: '//*[@id="form_step3_out_of_stock_0"]',
    pack_label_in_stock: '//*[@id="form_step3_available_now_1"]',
    pack_label_out_stock: '//*[@id="form_step3_available_later_1"]',
    pack_availability_date: '//*[@id="form_step3_available_date"]',
    pack_unit_price: '//*[@id="form_step2_unit_price"]',
    product_shipping_tab: '//*[@id="tab_step4"]/a',
    shipping_width: '//*[@id="form_step4_width"]',
    shipping_height: '//*[@id="form_step4_height"]',
    shipping_depth: '//*[@id="form_step4_depth"]',
    shipping_weight: '//*[@id="form_step4_weight"]',
    shipping_fees: '//*[@id="form_step4_additional_shipping_cost"]',
    shipping_available_carriers: '//*[@id="form_step4_selectedCarriers_1"]',
    product_combinations_tab: '//*[@id="tab_step3"]/a',
    product_combinations: '//*[@id="show_variations_selector"]/div[%I]/label/input',
    combination_size_s: '//*[@id="attribute-group-1"]//label[@for="attribute-1"]',
    combination_size_m: '//*[@id="attribute-group-1"]//label[@for="attribute-2"]',
    combination_color: '//*[@id="attribute-group-2"]//label[@for="attribute-%ID"]',
    combination_dimension: '//*[@id="attribute-group-3"]//label[@for="attribute-%ID"]',
    combination_color_beige: '//*[@id="attribute-group-2"]//label[@for="attribute-7"]',
    combination_total_number: '//*[@id="js-bulk-combinations-total"]',
    combination_color_green: '//label[@for="attribute-15"]',
    combination_color_red: '//label[@for="attribute-10"]',
    combination_generate_button: '//*[@id="create-combinations"]',
    combination_impact_price_input: '//*[@id="attribute_%NUMBER"]/td[@class="attribute-price"]//input',
    combination_final_price_span: '//*[@id="attribute_%NUMBER"]/td[contains(@class, "attribute-finalprice")]/span',
    combination_availability_preferences: '//*[@id="form_step3_out_of_stock_0"]',
    combination_label_in_stock: '//*[@id="form_step3_available_now_1"]',
    combination_label_out_stock: '//*[@id="form_step3_available_later_1"]',
    combination_panel: '//*[@id="accordion_combinations"]/tr[%NUMBER]',
    combination_quantity: '//*[@id="combination_%NUMBER_attribute_quantity"]',
    combination_available_date: '//*[@id="combination_%NUMBER_available_date_attribute"]',
    combination_min_quantity: '//*[@id="combination_%NUMBER_attribute_minimal_quantity"]',
    combination_reference: '//*[@id="combination_%NUMBER_attribute_reference"]',
    combination_whole_sale: '//*[@id="combination_%NUMBER_attribute_wholesale_price"]',
    combination_low_stock: '//*[@id="combination_%NUMBER_attribute_low_stock_threshold"]',
    combination_priceTI: '//*[@id="combination_%NUMBER_attribute_priceTI"]',
    combination_attribute_unity: '//*[@id="combination_%NUMBER_attribute_unity"]',
    combination_attribute_weight: '//*[@id="combination_%NUMBER_attribute_weight"]',
    combination_attribute_isbn: '//*[@id="combination_%NUMBER_attribute_isbn"]',
    combination_attribute_ean13: '//*[@id="combination_%NUMBER_attribute_ean13"]',
    combination_attribute_upc: '//*[@id="combination_%NUMBER_attribute_upc"]',
    combination_attribute_image: '//*[@id="attribute_%NUMBER"]/td[2]/img',
    combination_attribute_quantity: '//*[@id="attribute_%NUMBER"]/td[6]/div/input',
    combination_image: '//*[@id="combination_%NUMBER_id_image_attr"]/div[2]/img',
    combination_edit: '//*[@id="attribute_%NUMBER"]/td[7]/div[1]/a',
    combination_default_button: '//input[@class="attribute-default" and @data-id="%NUMBER"]',
    default_combination: '//*[@id="combination_%NUMBER_attribute_default"]',
    back_to_product: '//*[@id="combination_form_%NUMBER"]/div[2]/div[1]/button',
    product_pricing_tab: '//*[@id="tab_step2"]/a',
    unit_price: '#form_step2_unit_price',
    unity: '#form_step2_unity',
    pricing_tax_rule_select: '//*[@id="step2"]/div/div/div/div/div[3]/div/div[1]/span',
    pricing_tax_rule_input: '//span[contains(@class, "select2-search")]/input[@type="search"]',
    pricing_tax_rule_option: '//*[@id="select2-form_step2_id_tax_rules_group-results"]',
    pricing_wholesale: '//*[@id="form_step2_wholesale_price"]',
    pricing_tax_rule_arrow_button: '//*[@id="step1"]//div[3]//span[@class="select2-selection__arrow"]/b[@role="presentation"]',
    tax_rule_value: '//span[@class="select2-results"]/ul/li[contains(text(), "%ID")]',
    pricing_add_specific_price_button: '//*[@id="specific-price"]/a',
    specific_price_starting_at_input: '//*[@id="form_step2_specific_price_sp_from_quantity"]',
    leave_initial_price_checkbox: '//*[@id="form_step2_specific_price_leave_bprice"]',
    specific_product_price_input: '//*[@id="form_step2_specific_price_sp_price"]',
    specific_price_reduction_type_select: '//*[@id="form_step2_specific_price_sp_reduction_type"]',
    specific_price_reduction_tax_select: '//*[@id="form_step2_specific_price_sp_reduction_tax"]',
    specific_price_discount_input: '//*[@id="form_step2_specific_price_sp_reduction"]',
    specific_price_save_button: '//*[@id="form_step2_specific_price_save"]',
    specific_price_delete_button: '//*[@id="js-specific-price-list"]//i[text()="delete"]',
    pricing_first_priorities_select: '//*[@id="form_step2_specificPricePriority_0"]',
    pricing_second_priorities_select: '//*[@id="form_step2_specificPricePriority_1"]',
    pricing_third_priorities_select: '//*[@id="form_step2_specificPricePriority_2"]',
    pricing_fourth_priorities_select: '//*[@id="form_step2_specificPricePriority_3"]',
    product_SEO_tab: '//*[@id="tab_step5"]/a',
    SEO_meta_title: '//*[@id="form_step5_meta_title_1"]',
    SEO_meta_description: '//*[@id="form_step5_meta_description_1"]',
    SEO_friendly_url: '//*[@id="form_step5_link_rewrite_1"]',
    product_options_tab: '//*[@id="tab_step6"]/a',
    options_visibility: '//*[@id="form_step6_visibility"]',
    options_online_only: '//*[@id="form_step6_display_options_online_only"]',
    options_condition_select: '//*[@id="form_step6_condition"]',
    options_isbn: '//*[@id="form_step6_isbn"]',
    options_ean13: '//*[@id="form_step6_ean13"]',
    options_upc: '//*[@id="form_step6_upc"]',
    options_add_customization_field_button: '//*[@id="custom_fields"]/a',
    options_first_custom_field_label: '//*[@id="form_step6_custom_fields_0_label_1"]',
    options_first_custom_field_type: '//*[@id="form_step6_custom_fields_0_type"]',
    options_first_custom_field_require: '//*[@id="form_step6_custom_fields_0_require"]',
    options_second_custom_field_label: '//*[@id="form_step6_custom_fields_1_label_1"]',
    options_second_custom_field_type: '//*[@id="form_step6_custom_fields_1_type"]',
    options_add_new_file_button: '//*[@id="step6"]/div/div/div/div/div/div[11]/div/a',
    options_select_file: '//*[@id="form_step6_attachment_product_file"]',
    options_add_virtual_product_file_button: '//*[@id="form_step3_virtual_product_file"]',
    options_file_name: '//*[@id="form_step6_attachment_product_name"]',
    options_file_description: '//*[@id="form_step6_attachment_product_description"]',
    options_file_add_button: '//*[@id="form_step6_attachment_product_add"]',
    options_file_checkbox: '//*[@id="form_step6_attachments_0"]',
    attached_file_checkbox: '//*[@id="product-attachment-file"]/tbody//label[contains(text(),"%FileName")]/input',
    catalog_product_table: '#product_catalog_list table.product',
    get catalog_product_name() {
      return this.catalog_product_table + ' > tbody tr:first-child > td:nth-child(4) > a';
    },
    get catalog_product_reference() {
      return this.catalog_product_table + ' > tbody tr:first-child > td:nth-child(5)';
    },
    get catalog_product_category() {
      return this.catalog_product_table + ' > tbody tr:first-child > td:nth-child(6)';
    },
    get catalog_product_price() {
      return this.catalog_product_table + ' > tbody tr:first-child > td:nth-child(7)';
    },
    get catalog_product_quantity() {
      return this.catalog_product_table + ' > tbody tr:first-child > td:nth-child(9)';
    },
    get catalog_product_online() {
      return this.catalog_product_table + ' > tbody tr:first-child > td:nth-child(10) > a > i';
    },
    get catalog_reset_filter() {
      return this.catalog_product_table + ' .column-filters button[name="products_filter_reset"]';
    },
    get catalog_submit_filter() {
      return this.catalog_product_table + '.column-filters button[name="products_filter_submit"]';
    },
    catalog_home: '//*[@id="form_step1_categories"]/ul/li/div/label',
    catalog_first_element_radio: '//*[@id="form_step1_categories"]/ul/li/ul/li[1]/div',
    catalog_second_element_radio: '//*[@id="form_step1_categories"]/ul/li/ul/li[2]/div',
    category_radio_button: '//*[@id="form_step1_categories"]//input[@name="ignore" and @value="%VALUE"]',
    category_radio: '//*[@id="form_step1_categories"]//label[text()[contains(.,"%S")]]/input[2]',
    preview_buttons: '//*[@id="product_form_preview_btn"]',
    dropdown_button: '//*[@id="dropdownMenu"]',
    duplicate_button: '//*[@aria-labelledby="dropdownMenu"]//a[contains(@class, "duplicate")]',
    success_panel: '//div[contains(@class, "alert-success")]//p',
    delete_button: '//*[@id="product_form_delete_btn"]',
    delete_confirmation_button: '//*[@id="confirmation_modal"]//button[contains(text(), "%BUTTON")]',
    confirmation_modal_content: '//*[@id="confirmation_modal"]//div[@class="modal-body"]',
    symfony_toolbar: '//*[contains (@id, "sfToolbarMainContent")]/a',
    summary_tinymce_buttons: '//*[@id="description_short"]//div[contains(@class, "mce-toolbar-grp")]',
    combination_table: '//*[@id="accordion_combinations"]',
    home_delete_button: '//*[@id="ps_categoryTags"]/span[1]/a',
    created_category: '//*[@id="ps_categoryTags"]/span[2]/span',
    preview_link: '//a',
    continue_confirmation: '//*[@id="confirmation_modal"]//button[2]',
    search_categories: '//*[@id="ps-select-product-category"]',
    list_categories: '//*[@id="ui-id-1"]/li',
    default_category: '//*[@id="ps_categoryTags"]/span[1]/a',
    image_combination_src: '(//*[@id="combination_%ID_id_image_attr"]//img)[%POS]',
    img_added_product_pack: '//*[@id="form_step1_inputPackItems-data"]/li[%ID]//img',
    product_type_option: '//*[@id="form_step1_type_product"]/option[%POS]',
    tax_rule_taux_standard_option: '//*[@id="step2_id_tax_rules_group_rendered"]/option[5]',
    predefined_value_option: '//*[@id="form_step1_features_0_value"]/option[text()="%V"]',
    custom_value_input: '//*[@id="form_step1_features_0_custom_value_1"]',
    background_picture: '//*[@id="product-images-dropzone"]//div[@class="dz-image bg"]',
    product_pack_items: '//*[@id="form_step1_inputPackItems-data"]',
    add_products_to_pack: '//*[@id="js_form_step1_inputPackItems"]/div',
    attribute_group_name: '//*[@id="attributes-list"]//a[text()[contains(.,"%NAME")]]',
    attribute_value_checkbox: '//*[@id="attribute-group-%ID"]/div/div[%S]//label',
    price_tax_included_input: '//*[@id="form_step1_price_ttc_shortcut"]',
    delete_feature_button: '(//*[@id="features-content"]//a[contains(@class,"delete")])[%ID]',
    alert_button: '//*[@id="confirmation_modal"]//button[contains(@class,"%B")]',
    product_language: '//*[@id="form_switch_language"]',
    sales_button: '//*[@id="product_form_go_to_sales"]',
    product_list_button: '//*[@id="product_form_open_quicknav"]',
    help_button: '//*[@id="product_form_open_help"]',
    tooltip_button: '//*[@id="form"]/div[contains(@class,"product-header")]//span[contains(@class,"help-box")]',
    tooltip_box_content: '//div[contains(@class, "popover")]/div[2]',
    input_pack_item: '//*[@id="js_form_step1_inputPackItems"]',
    calendar_form: '//*[@id="calendar"]',
    right_sidebar: '//*[@id="right-sidebar"]'
  },
  ProductList: {
    product_id: '//*[@id="product_catalog_list"]//tr[%ID]/td[2]/label',
    product_name: '//*[@id="product_catalog_list"]//tbody/tr[%ID]/td[4]/a',
    product_reference: '//*[@id="product_catalog_list"]//tbody/tr[%ID]/td[5]',
    sort_by_icon: '//*[@id="product_catalog_list"]//div[@data-sort-col-name="%B" and @data-sort-direction="%W"]/span[@role="button"]',
    sort_button: '//*[@id="product_catalog_list"]//div[@data-sort-col-name="%B"]/span[@role="button"]',
    status_select: '//*[@id="product_filter_column_active"]//select[@name="filter_column_active"]',
    product_status: '//*[@id="product_catalog_list"]//tr[%I]/td[10]/a/i[contains(@class, "action-%ACTION")]',
    edit_button: '//*[@id="product_catalog_list"]//i[text()="mode_edit"]',
    pagination_products: '//*[@id="product_catalog_list"]//div[contains(@class, "justify-content-center")]/div[1]',
    dropdown_button: '(//*[@id="product_catalog_list"]//tbody//div[@class="btn-group-action"]//button[@data-toggle="dropdown"])[%POS]',
    action_preview_button: '(//*[@id="product_catalog_list"]//tbody//div[@class="btn-group-action"]//a[contains(@target,"_blank")])[%POS]',
    action_duplicate_button: '(//*[@id="product_catalog_list"]//tbody//div[@class="btn-group-action"]//a[contains(@onclick,"duplicate")])[%POS]',
    action_delete_button: '(//*[@id="product_catalog_list"]//tbody//div[@class="btn-group-action"]//a[contains(@onclick,"delete")])[%POS]',
    delete_now_modal_button: '//*[@id="catalog_deletion_modal"]//button[contains(text(), "Delete now")]',
    search_no_results: '//*[@id="product_catalog_list"]//tbody/tr[1]/td',
    pagination_next: '//*[@id="pagination_next_url"]',
    pagination_previous: '//*[@id="product_catalog_list"]//li[@class="page-item previous "]//a',
    page_active_number: '//*[@id="product_catalog_list"]//li[@class="page-item active"]//input',
    item_per_page: '//*[@id="paginator_select_page_limit"]',
    product_category: '//*[@id="product_catalog_list"]//div//tr[%I]/td[6]',
    reset_button: '//*[@id="product_catalog_list"]//tr[2]/th[9]/button[@name="products_filter_reset"]',
    status_filter: '//*[@id="product_filter_column_active"]//select[@name=\'filter_column_active\']',
    item_per_page_select: '//*[@id="paginator_select_page_limit"]',
    search_product_button: '//button[@name="filter_column_name"]'
  }
};
