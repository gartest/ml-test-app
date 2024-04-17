"use client"

import { useEffect } from 'react';
import styles from './breadcrumb.module.scss';
import Icon from './icon';

export default function Breadcrumb({ categories }: { categories: string[] | null}) {
  useEffect(() =>{
    if(typeof categories !== null){
      localStorage.setItem('categories', JSON.stringify(categories));
    } else {
      categories = JSON.parse(localStorage.getItem('categories') as string);
    }
  })
  return (
    <div className={styles.breadcrumb}>
      <ul>
        {
          categories?.map(c => <li key={c}>{c} <Icon type='chevron' /></li>)
        }
      </ul>      
    </div>
  );
}