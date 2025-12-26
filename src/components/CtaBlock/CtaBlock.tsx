"use client";

import PopupForm from "../PopupForm/PopupForm";
import styles from "./CtaBlock.module.css";
import { useTranslations } from "next-intl";

export default function CtaBlock() {
  const t = useTranslations("ctaBlock");
  
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src="https://www.t-mebel.com.ua/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ft-mebel%2FImage%2FourPage%2Fmodal%2Fkitchen%2F4%2Ftablet.webp&w=1080&q=75"
            alt="кухня мдф крашеный глянцевый"
          />
        </div>
        <div className={styles.content}>
          <h2>{t("title")}</h2>
          <p>
            {t("description")}
          </p>
          <PopupForm
            triggerClassName={styles.ctaButton}
            triggerLabel={t("button")}
          />
        </div>
      </div>
    </section>
  );
}
