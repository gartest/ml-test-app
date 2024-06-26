import { Item } from 'types/base';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { capitalizeEveryWord } from 'utils';

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
        <div className={styles['card-info']}>
          <div className={styles['card-info-desc']}>
            <Link href={`/items/${item.id}`}>
              <h4>{`$${item.price.amount.toLocaleString()}`}</h4>
            </Link>
            <Link href={`/items/${item.id}`}>
              <p>{item.title}</p>
            </Link>            
          </div>
          <div className={styles['card-info-location']}>
            <span>{item?.seller ? capitalizeEveryWord(item.seller as string) : ""}</span>
          </div>
        </div>
    </div>
  );
}