import { BASE_URL, AUTHOR_NAME, AUTHOR_LASTNAME } from '@/pages/constants';
import { ResponseError, ItemDescriptionResponse } from 'types/base';
import { DescriptionResponse } from 'types/descriptionresponse';
import { DetailResponse } from 'types/detailresponse';
import type { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import { CategoryResponse } from 'types/categoryresponse';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemDescriptionResponse | ResponseError>
) {
    const { id: rawId } = req?.query;
    const id = validator.escape(rawId ? rawId.toString() : "");

    const detailResponse = await fetch(`${BASE_URL}/items/${id}`);
    if(!detailResponse.ok){
        const responseError: ResponseError = await detailResponse.json();
        res.status(detailResponse.status).json(responseError)
    }
    const detailData: DetailResponse = await detailResponse.json();

    const descriptionResponse = await fetch(`${BASE_URL}/items/${id}/description`);
    if(!descriptionResponse.ok){
        const responseError: ResponseError = await descriptionResponse.json();
        res.status(descriptionResponse.status).json(responseError)
    }
    const descriptionData: DescriptionResponse = await descriptionResponse.json();    

    const categoryResponse = await fetch(`${BASE_URL}/categories/${detailData.category_id}`);
    if(!categoryResponse.ok){
        const responseError: ResponseError = await categoryResponse.json();
        res.status(categoryResponse.status).json(responseError)
    }
    const categoryData: CategoryResponse = await categoryResponse.json();  

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
            picture: detailData.pictures[0]?.url,
            condition: detailData.condition,
            free_shippin: detailData.shipping.free_shipping,
            description: descriptionData.plain_text,
        },
        categories: categoryData?.path_from_root?.map(v => v.name),
     });
}