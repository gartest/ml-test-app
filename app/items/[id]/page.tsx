import { APP_URL } from "@/pages/constants";
import { ItemDescriptionResponse } from "@/pages/types";
import Breadcrumb from "app/components/breadcrumb";
import Detail from "app/components/detail";

type Params = {
    params: {
      id: string;
    };
};

async function getProductDetail(q:string | string[] | undefined): Promise<ItemDescriptionResponse> {
  const res = await fetch(`${APP_URL}/api/items/${q?.toString()}`);
  if (!res.ok) {
      throw new Error('Failed to fetch data');
  } 
  return res.json();
}
  
export const metadata = {
    title: "Items: id",
};
  
export default async function ItemDetail({ params }: Params) {
  const data = await getProductDetail(params.id);
  return (
    <> 
      <Breadcrumb categories={null} />
      <Detail item={data.item} />
    </>
  );
}
  