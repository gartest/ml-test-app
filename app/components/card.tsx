import { Item } from '@/pages/types';
import styles from './card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ item }: { item: Item }) {
  return (
    <div className={styles.card}>
        <Link href={`/items/${item.id}`}>
            <Image 
                src={item.picture} 
                width={180} 
                height={180} 
                alt={item.title} 
            />  
        </Link>
    </div>
  );
}