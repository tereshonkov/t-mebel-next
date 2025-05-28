import styles from './BlockService.module.css';
import Button from '../Button/Button';

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
        {/* <Button dark link="#">Подробнее</Button> */}
        <button className={styles.btn}>{data.btn}</button>
    </div>
</div>
  )
}
