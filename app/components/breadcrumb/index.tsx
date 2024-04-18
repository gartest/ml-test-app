"use client"

import { useState } from 'react';
import styles from './styles.module.scss';
import Icon from '../icon';

export default function Breadcrumb({ categories }: { categories: string[] | undefined}) {
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