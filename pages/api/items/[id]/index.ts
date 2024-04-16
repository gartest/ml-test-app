import { BASE_URL, AUTHOR_NAME, AUTHOR_LASTNAME } from '@/pages/constants';
import { Author, Item } from '@/pages/types';
import { DescriptionResponse } from '@/pages/types/descriptionresponse';
import { DetailResponse } from '@/pages/types/detailresponse';
import type { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';

type DescriptionItem = Item & { description: String };

type ResponError = {
    error: String,
    message: String,
  };

type ResponseData = {
  autor: Author,
  item: DescriptionItem,
};
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponError>
) {
    const { id: rawId } = req?.query;
    const id = validator.escape(rawId ? rawId.toString() : "");

    const detailResponse = await fetch(`${BASE_URL}/items/${id}`);
    if(!detailResponse.ok){
        const responseError: ResponError = await detailResponse.json();
        res.status(detailResponse.status).json(responseError)
    }
    const detailData: DetailResponse = await detailResponse.json();

    const descriptionResponse = await fetch(`${BASE_URL}/items/${id}/description`);
    if(!descriptionResponse.ok){
        const responseError: ResponError = await descriptionResponse.json();
        res.status(descriptionResponse.status).json(responseError)
    }
    if(!descriptionResponse.ok){
        return await descriptionResponse.json();
    }
    const descriptionData: DescriptionResponse = await descriptionResponse.json();

    res.status(200).json({ 
        autor: {
            name: AUTHOR_NAME,
            lastname: AUTHOR_LASTNAME,
        },
        item: {
            id: detailData.id,
            title: detailData.title,
            price: {
                currency: detailData.currency_id,
                amount: detailData.price,
                decimals: 2,
            },
            picture: detailData.pictures[0].secure_url,
            condition: detailData.condition,
            free_shippin: detailData.shipping.free_shipping,
            description: descriptionData.plain_text,
        }
     });
}