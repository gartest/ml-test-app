"use client"

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
  
export default function Items() {
const searchParams = useSearchParams();
const search = searchParams && searchParams.get('search');

useEffect(()=>{
    document.title = `Buscando: ${search}`;
})

return (
    <>
        <h1>Search: {search}</h1>
    </>
);
}
  