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

export type ItemsSearchResponse = {
    author: Author,
    categories: String[] | undefined,
    items: Item[],
}

export type DescriptionItem = Item & { description: String };

export type ItemDescriptionResponse = {
    autor: Author,
    item: DescriptionItem,
  };

export type ResponseError = {
    error: String,
    message: String,
};
   



