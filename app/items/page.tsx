import { APP_URL } from '@/pages/constants';
import { ItemsSearchResponse } from '@/pages/types';
import Breadcrumb from 'app/components/breadcrumb';
import Card from 'app/components/card';
import { Metadata } from 'next';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

async function searchProducts(q:string | string[] | undefined): Promise<ItemsSearchResponse> {
    const res = await fetch(`${APP_URL}/api/items?q=${q?.toString()}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    } 
    return res.json();
}

export async function generateMetadata({searchParams }: Props): Promise<Metadata> {   
    return {
      title: `Buscando: ${searchParams?.search}`,
    }
}

  
export default async function Items({ 
    searchParams
 }: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
const search = searchParams?.search;

const data = await searchProducts(search);


return (
    <>
        <Breadcrumb categories={data.categories as string[]}/>
        {
            data.items.slice(0,4).map(i => <Card item={i} />)
        }
    </>
);
}
  