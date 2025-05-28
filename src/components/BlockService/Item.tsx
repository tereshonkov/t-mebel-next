import styles from './BlockService.module.css';

type ItemProps = {
  data: {
    image: string;
    alt: string;
    category: string;
    description: string;
    btn: string;
  };
};

export default function Item({data}: ItemProps) {
  return (
    <div className={styles.item}>
    <div className={styles.image}>
        <img src={data.image} alt={data.alt} />
    </div>
    <div className={styles.text}>
        <h5>{data.category}</h5>
        <p>{data.description}</p>
        <button className={styles.btn}>{data.btn}</button>
    </div>
</div>
  )
}
