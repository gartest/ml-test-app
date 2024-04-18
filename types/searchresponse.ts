export interface SearchResponse {
    site_id:                   SiteID;
    country_default_time_zone: string;
    query:                     string;
    paging:                    Paging;
    results:                   Result[];
    sort:                      Sort;
    available_sorts:           Sort[];
    filters:                   Filter[];
    available_filters:         AvailableFilter[];
    pdp_tracking:              PDPTracking;
}

export interface AvailableFilter {
    id:     string;
    name:   string;
    type:   Type;
    values: AvailableFilterValue[];
}

export enum Type {
    Boolean = "boolean",
    List = "list",
    Number = "number",
    Range = "range",
    String = "STRING",
    Text = "text",
}

export interface AvailableFilterValue {
    id:      string;
    name:    string;
    results: number;
}

export interface Sort {
    id:   string;
    name: string;
}

export interface Filter {
    id:     string;
    name:   string;
    type:   Type;
    values: FilterValue[];
}

export interface FilterValue {
    id:              string;
    name:            string;
    path_from_root?: Sort[];
}

export interface Paging {
    total:           number;
    primary_results: number;
    offset:          number;
    limit:           number;
}

export interface PDPTracking {
    group:        boolean;
    product_info: ProductInfo[];
}

export interface ProductInfo {
    id:     string;
    score:  number;
    status: Status;
}

export enum Status {
    Shown = "shown",
}

export interface Result {
    id:                    string;
    title:                 string;
    condition:             Condition;
    thumbnail_id:          string;
    catalog_product_id:    null | string;
    listing_type_id:       ListingTypeID;
    permalink:             string;
    buying_mode:           BuyingMode;
    site_id:               SiteID;
    category_id:           CategoryID;
    domain_id:             DomainID;
    thumbnail:             string;
    currency_id:           CurrencyID;
    order_backend:         number;
    price:                 number;
    original_price:        number | null;
    sale_price:            null;
    available_quantity:    number;
    official_store_id:     number | null;
    official_store_name?:  OfficialStoreName;
    use_thumbnail_id:      boolean;
    accepts_mercadopago:   boolean;
    shipping:              Shipping;
    stop_time:             Date;
    seller:                Seller;
    attributes:            Attribute[];
    installments:          Installments;
    winner_item_id:        null;
    catalog_listing:       boolean;
    discounts:             null;
    promotions:            any[];
    inventory_id:          null;
    differential_pricing?: DifferentialPricing;
    variation_id?:         string;
    variation_filters?:    VariationFilter[];
    variations_data?:      { [key: string]: VariationsDatum };
}

export interface Attribute {
    id:                   VariationFilter;
    name:                 Name;
    value_id:             null | string;
    value_name:           string;
    attribute_group_id:   AttributeGroupID;
    attribute_group_name: AttributeGroupName;
    value_struct:         Struct | null;
    values:               AttributeValue[];
    source:               number;
    value_type:           ValueType;
}

export enum AttributeGroupID {
    Others = "OTHERS",
}

export enum AttributeGroupName {
    Otros = "Otros",
}

export enum VariationFilter {
    Brand = "BRAND",
    Color = "COLOR",
    DetailedModel = "DETAILED_MODEL",
    GPUModel = "GPU_MODEL",
    Gtin = "GTIN",
    ItemCondition = "ITEM_CONDITION",
    Line = "LINE",
    MainColor = "MAIN_COLOR",
    Model = "MODEL",
    ProcessorModel = "PROCESSOR_MODEL",
    Weight = "WEIGHT",
}

export enum Name {
    Color = "Color",
    ColorPrincipal = "Color principal",
    CondiciónDelÍtem = "Condición del ítem",
    CódigoUniversalDeProducto = "Código universal de producto",
    Línea = "Línea",
    Marca = "Marca",
    Modelo = "Modelo",
    ModeloDeGPU = "Modelo de GPU",
    ModeloDelProcesador = "Modelo del procesador",
    ModeloDetallado = "Modelo detallado",
    Peso = "Peso",
}

export interface Struct {
    number: number;
    unit:   Unit;
}

export enum Unit {
    G = "g",
}

export enum ValueType {
    List = "list",
    NumberUnit = "number_unit",
    String = "string",
}

export interface AttributeValue {
    id:     null | string;
    name:   string;
    struct: Struct | null;
    source: number;
}

export enum BuyingMode {
    BuyItNow = "buy_it_now",
}

export enum CategoryID {
    Mla1055 = "MLA1055",
}

export enum Condition {
    New = "new",
}

export enum CurrencyID {
    Ars = "ARS",
}

export interface DifferentialPricing {
    id: number;
}

export enum DomainID {
    MlaCellphones = "MLA-CELLPHONES",
}

export interface Installments {
    quantity:    number;
    amount:      number;
    rate:        number;
    currency_id: CurrencyID;
}

export enum ListingTypeID {
    GoldPro = "gold_pro",
    GoldSpecial = "gold_special",
}

export enum OfficialStoreName {
    Apple = "Apple",
}

export interface Seller {
    id:       number;
    nickname: string;
}

export interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: LogisticType;
    mode:          Mode;
    tags:          Tag[];
    benefits:      null;
    promise:       null;
}

export enum LogisticType {
    CrossDocking = "cross_docking",
    DropOff = "drop_off",
    XdDropOff = "xd_drop_off",
}

export enum Mode {
    Me2 = "me2",
}

export enum Tag {
    MandatoryFreeShipping = "mandatory_free_shipping",
    SelfServiceIn = "self_service_in",
    SelfServiceOut = "self_service_out",
}

export enum SiteID {
    Mla = "MLA",
}

export interface VariationsDatum {
    thumbnail:       string;
    ratio:           string;
    name:            string;
    pictures_qty:    number;
    price:           number;
    user_product_id: string;
}