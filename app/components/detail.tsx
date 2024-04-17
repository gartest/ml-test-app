import { DescriptionItem } from '@/pages/types';
import styles from './detail.module.scss';

export default function Detail({ item }: { item: DescriptionItem }) {
  return (
    <div className={styles.detail}>
        <div className={styles['detail-upper-section']}>
            <div className={styles['detail-upper-section-image-container']}>
                <img src={item.picture} />
            </div> 
            <section className={styles['detail-upper-section-right-section']}>
                <span>{item.condition}</span>
                <h4>{item.title}</h4>
                <h1>{`$${item.price.amount.toLocaleString()}`}</h1>
                <button>Comprar</button>
            </section>
        </div>
        <div className={styles['detail-description']}>
            <h2>Descripción</h2>
            <p>{item.description}</p>
        </div>
    </div>
  );
}