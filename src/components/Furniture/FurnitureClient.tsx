"use client";
import styles from "./Furniture.module.css";
import { useState } from "react";
import useDataFurniture from "./useDataFurniture";
import { Link } from '@/i18n/navigation';

export default function FurnitureClient({ limit }: { limit: number}) {
    const [active, setActive] = useState<number>(1);
    const { selected, kitchens, wardrobe, shops, bedrooms } = useDataFurniture();
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
            <img src={item.img} alt={`Кухня ${index + 1}`} />
          </Link>
        ))}
      {active === 2 &&
        wardrobe.slice(0, limit).map((item, index) => (
          <Link href={`/service/${item.id}`} className={styles.card} key={item.id || index}>
            <img src={item.img} alt={`Шкаф ${index + 1}`} />
          </Link>
        ))}
        {active === 3 &&
        shops.slice(0, limit).map((item, index) => (
          <Link href={`/service/${item.id}`} className={styles.card} key={item.id ||index}>
            <img src={item.img} alt={`Магазин ${index + 1}`} />
          </Link>
        ))}
        {active === 4 && bedrooms.slice(0, limit).map((item, index) => (
          <Link href={`/service/${item.id}`} className={styles.card} key={item.id || index}>
            <img src={item.img} alt={`Спальня ${index + 1}`} />
          </Link>
        ))}
    </div>
  </div>
  )
}
