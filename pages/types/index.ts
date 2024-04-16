export type Price = {
    currency: String,
    amount: Number,
    decimals: Number
};

export type Item = {
    id: String,
    title: String,
    price: Price,
    picture: String,
    condition: String,
    free_shippin: Boolean,
};

export type Author = {
    name: String,
    lastname: String
};



