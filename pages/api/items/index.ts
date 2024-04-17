import { BASE_URL, AUTHOR_NAME, AUTHOR_LASTNAME } from '@/pages/constants';
import { Item, ItemsSearchResponse } from '@/pages/types';
import { SearchResponse } from '@/pages/types/searchresponse';
import type { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemsSearchResponse>
) {
  const { q: rawQ } = req?.query;
  const q = validator.escape(rawQ ? rawQ.toString() : "");
  const response = await fetch(`${BASE_URL}/sites/MLA/search?q=${q}`);
  const data: SearchResponse = await response.json();

  const filters = data.filters && data.filters.find(f => f.id === "category");

  const categories = filters?.values ? filters?.values[0]?.path_from_root?.map(v => v.name) : [];

  const items = data.results ? data.results.map(r => ({ 
    id: r.id, 
    title: r.title, 
    price: { 
      currency: r.currency_id, 
      amount: r.price, 
      decimals: 2, 
    }, 
    picture: r.thumbnail, 
    condition: r.condition,
    free_shippin: r.shipping.free_shipping,
  }) as Item) : [];

  res.status(200).json({ 
    author: {
      name: AUTHOR_NAME,
      lastname: AUTHOR_LASTNAME,
    },
    categories,
    items,
   })
}