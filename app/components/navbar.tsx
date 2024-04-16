"use client"

import styles from './navbar.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";

export default function NavBar() {
  const [searchText, setSearchText] = useState("");
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-bounds']}>
        <Link href="/">
          <Image src="/Logo_ML.png" alt="Logo Mercado libre" width={60} height={40} />
        </Link>        
        <input 
          className={styles['navbar-input']} 
          type="text" 
          placeholder="Nunca dejes de buscar"
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
        />
      </div>      
    </nav>
  );
}