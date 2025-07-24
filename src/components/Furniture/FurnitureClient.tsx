"use client";
import styles from "./Furniture.module.css";
import useDataFurniture from "./useDataFurniture";
import { Link } from '@/i18n/navigation';
import Image from "next/image";

export default function FurnitureClient({ limit }: { limit: number}) {
    const { selected, active, setActive, kitchens, wardrobe, bedrooms, store } = useDataFurniture();
  return (
    <div className={styles.container}>
    <ul className={styles.nav}>
      {selected.map((item) => (
        <li
          key={item.id}
          className={`${styles.navItem} ${
            item.id === active ? styles.active : ""
          }`}
          onClick={() => setActive(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
    <div className={styles.cards}>
      {active === 1 &&
        kitchens.slice(0, limit).map((item, index) => (
          <Link href={`/service/${item.id}`} className={styles.card} key={item.id || index}>
            <Image src={item.image} alt={`Кухня ${index + 1}`} width={1024} height={768} />
          </Link>
        ))}
      {active === 2 &&
        wardrobe.slice(0, limit).map((item, index) => (
          <Link href={`/service/${item.id}`} className={styles.card} key={item.id || index}>
            <Image src={item.image} alt={`Шкаф ${index + 1}`} width={1024} height={768} />
          </Link>
        ))}
        {active === 3 &&
        store.slice(0, limit).map((item, index) => (
          <Link href={`/service/${item.id}`} className={styles.card} key={item.id ||index}>
            <Image src={item.image} alt={`Магазин ${index + 1}`} width={1024} height={768} />
          </Link>
        ))}
        {active === 4 && bedrooms.slice(0, limit).map((item, index) => (
          <Link href={`/service/${item.id}`} className={styles.card} key={item.id || index}>
            <Image src={item.image} alt={`Спальня ${index + 1}`} width={1024} height={768} />
          </Link>
        ))}
    </div>
  </div>
  )
}
