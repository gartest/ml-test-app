import styles from './breadcrumb.module.scss';

export default function Breadcrumb({ categories }: { categories: String[] | undefined}) {
  return (
    <div className={styles.breadcrumb}>
      <ul>
        {
          categories?.map(c => <li>{c}</li>)
        }
      </ul>      
    </div>
  );
}