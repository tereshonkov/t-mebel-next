import styles from './BlockService.module.css';
import Item from './Item';
import { getMessages } from 'next-intl/server';
type ItemProps = {
    image: string;
    alt: string;
    category: string;
    description: string;
    btn: string;
};

export default async function BlockService() {
 const messages = await getMessages();
 const kitchens: ItemProps[] = messages?.categories?.kitchens;
 const wardrobes: ItemProps[] = messages?.categories?.wardrobes;
 const bedrooms: ItemProps[] = messages?.categories?.bedrooms;
 const bathrooms: ItemProps[] = messages?.categories?.bathrooms;
 const shops: ItemProps[] = messages?.categories?.shops;
  return (
    <section className={styles.wrapper}>
        <div className={styles.sidebar}>
            <h3>Выберите категорию</h3>
            <ul className={styles.lists}>
                <li>Кухни</li>
                <li>Шкафы</li>
                <li>Спальня</li>
                <li>Ванные комнаты</li>
                <li>Магазины</li>
            </ul>
        </div>
        <div className={styles.container}>
          {kitchens.map((item, index) => (
            <Item key={index} data={item} />
          ))}
          {wardrobes.map((item, index) => (
            <Item key={index} data={item} />
          ))}
          {bedrooms.map((item, index) => (
            <Item key={index} data={item} />
          ))}
          {bathrooms.map((item, index) => (
            <Item key={index} data={item} />
          ))}
          {shops.map((item, index) => (
            <Item key={index} data={item} />
          ))}
        </div>
    </section>
  )
}
