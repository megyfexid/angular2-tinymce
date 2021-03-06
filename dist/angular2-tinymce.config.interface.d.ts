export interface TinymceOptions {
    plugins?: Array<string>;
    skin_url?: string;
    selector?: string;
    setup?: any;
    init_instance_callback?: any;
    baseURL?: string;
    contextmenu?: string;
    auto_focus?: boolean;
    cache_suffix?: string;
    content_security_policy?: string;
    external_plugins?: string;
    hidden_input?: string;
    color_picker_callback?: any;
    elementpath?: boolean;
    event_root?: string;
    fixed_toolbar_container?: string;
    height?: number;
    inline?: boolean;
    insert_button_items?: string;
    insert_toolbar?: string;
    max_height?: number;
    max_width?: number;
    menu?: any;
    menubar?: boolean | string;
    min_height?: number;
    min_width?: number;
    preview_styles?: boolean | string;
    removed_menuitems?: string;
    resize?: boolean | string;
    selection_toolbar?: string;
    skin?: string;
    statusbar?: boolean;
    theme_url?: string;
    theme?: string;
    toolbar?: boolean | string | Array<string>;
    width?: number;
    body_class?: string;
    body_id?: string;
    content_css?: string;
    content_style?: any;
    visual_anchor_class?: string;
    visual_table_class?: string;
    visual?: boolean;
    allow_conditional_comments?: boolean;
    allow_html_in_named_anchor?: boolean;
    allow_unsafe_link_target?: boolean;
    convert_fonts_to_spans?: boolean;
    custom_elements?: string;
    doctype?: string;
    element_format?: string;
    encoding?: string;
    entities?: string;
    entity_encoding?: string;
    extended_valid_elements?: string;
    fix_list_elements?: boolean;
    force_hex_style_colors?: boolean;
    forced_root_block?: string;
    forced_root_block_attrs?: any;
    invalid_elements?: string;
    invalid_styles?: string | any;
    keep_styles?: boolean;
    protect?: any;
    remove_trailing_brs?: boolean;
    schema?: string;
    valid_children?: string;
    valid_classes?: string | any;
    valid_elements?: string;
    valid_styles?: any;
    block_formats?: string;
    font_formats?: string;
    fontsize_formats?: string;
    formats?: any;
    indentation?: string;
    style_formats?: any;
    style_formats_autohide?: any;
    style_formats_merge?: any;
    browser_spellcheck?: boolean;
    gecko_spellcheck?: boolean;
    automatic_uploads?: boolean;
    file_browser_callback?: any;
    file_browser_callback_types?: string;
    file_picker_callback?: any;
    file_picker_types?: string;
    images_dataimg_filter?: any;
    images_reuse_filename?: boolean;
    images_upload_base_path?: string;
    images_upload_credentials?: boolean;
    images_upload_handler?: any;
    images_upload_url?: string;
    directionality?: string;
    language?: string;
    language_url?: string;
    allow_script_urls?: boolean;
    convert_urls?: boolean;
    document_base_url?: string;
    relative_urls?: boolean;
    remove_script_host?: boolean;
    urlconverter_callback?: any;
    anchor_bottom?: string;
    anchor_top?: string;
    br_in_pre?: boolean;
    custom_undo_redo_levels?: number;
    end_container_on_empty_block?: boolean;
    nowrap?: boolean;
    object_resizing?: boolean | string;
    type_ahead_urls?: boolean;
    default_link_target?: string;
    link_assume_external_targets?: boolean;
    target_list?: Array<TitleValue>;
    image_dimensions?: boolean;
    image_class_list?: Array<TitleValue>;
}
export interface TitleValue {
    title: string;
    value: string;
}
