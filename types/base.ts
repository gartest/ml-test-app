export type Price = {
    currency: string,
    amount: Number,
    decimals: Number
};

export type Item = {
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shippin: Boolean,
    seller?: string,
};

export type Author = {
    name: string,
    lastname: string
};

export type ItemsSearchResponse = {
    author: Author,
    categories: string[] | undefined,
    items: Item[],
}

export type DescriptionItem = Item & { description: string };

export type ItemDescriptionResponse = {
    autor: Author,
    item: DescriptionItem,
    categories?: string[]
  };

export type ResponseError = {
    error: string,
    message: string,
};
   



