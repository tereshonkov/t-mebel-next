import styles from "./Furniture.module.css";
import Button from "../Button/Button";
import FurnitureClient from "./FurnitureClient";
import { getTranslations } from "next-intl/server";

export default async function Slider() {
  const t = await getTranslations("furniture");
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{t('title')}</h2>
      <FurnitureClient />
      <div>
        <Button link="#">{t('btnFurniture')}</Button>
      </div>
    </section>
  );
}
