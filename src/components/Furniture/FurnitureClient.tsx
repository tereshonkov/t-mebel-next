"use client";
import styles from "./Furniture.module.css";
import { useState } from "react";
import useDataFurniture from "./useDataFurniture";

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
          <div className={styles.card} key={index}>
            <img src={item.img} alt={`Кухня ${index + 1}`} />
          </div>
        ))}
      {active === 2 &&
        wardrobe.slice(0, limit).map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.img} alt={`Шкаф ${index + 1}`} />
          </div>
        ))}
        {active === 3 &&
        shops.slice(0, limit).map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.img} alt={`Магазин ${index + 1}`} />
          </div>
        ))}
        {active === 4 && bedrooms.slice(0, limit).map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.img} alt={`Спальня ${index + 1}`} />
          </div>
        ))}
    </div>
  </div>
  )
}
