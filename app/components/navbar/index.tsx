"use client"

import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation';

export default function NavBar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = (searchParams && searchParams.get('search')) || "";
  const [searchText, setSearchText] = useState(search);


  const goToSearch = (query: string) => {
    if(searchText){
      router.push(`/items?search=${query}`);
    }
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-bounds']}>
        <Link href="/" className={styles.logo}>
          <Image src="/Logo_ML.png" alt="Logo Mercado libre" width={60} height={40} />
        </Link>        
        <input 
          className={styles['navbar-input']} 
          type="text" 
          placeholder="Nunca dejes de buscar"
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
          onKeyDown={(e) => {
            if(e.key === 'Enter'){
              goToSearch(searchText);
            }
          }}
        />
        <button className={styles['navbar-btn']} onClick={() => goToSearch(searchText)}>
          <Image src="/ic_Search.png" alt="Buscar" width={28} height={28} />
        </button>
      </div>      
    </nav>
  );
}