"use client";
import styles from "./Furniture.module.css";
import Button from "../Button/Button";
import { useState } from "react";

type Kitchen = {
  img: string;
}
type SelectedItem = {
  name: string;
  id: number;
}
const selected: SelectedItem[] = [
  {
    name: "Кухни",
    id: 1,
  },
  {
    name: "Шкафы",
    id: 2,
  },
  {
    name: "Магазины",
    id: 3,
  },
  {
    name: "Спальни",
    id: 4,
  },
]

const kitchens: Kitchen[] = [
  {
    img: 'https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/1/tablet.webp',
},
{
    img: 'https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/2/tablet.webp'
},
{
    img: 'https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/3/tablet.webp'
},
{
    img: 'https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/4/tablet.webp'
},
{
    img: 'https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/7/tablet.webp'
},
{
    img: 'https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp'
},
{
  img: 'https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5/tablet.webp'
},
{
  img: 'https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/6/tablet.webp'
},
]

export default function Slider() {
  const [active, setActive] = useState<number>(1);
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Реализованные проэкты</h2>
      <div className={styles.container}>
        <ul className={styles.nav}>
          {selected.map((item) => (
            <li
              key={item.id}
              className={`${styles.navItem} ${item.id === active ? styles.active : ''}`}
              onClick={() => setActive(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className={styles.cards}>
          {kitchens.slice(0,6).map((item, index) => (
            <div className={styles.card} key={index}>
              <img src={item.img} alt={`Кухня ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button link="#">Все работы</Button>
      </div>
    </section>
  );
}
