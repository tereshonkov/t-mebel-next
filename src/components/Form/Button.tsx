"use client";
import styles from "./Form.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Button() {
  const t = useTranslations("form");
  const token = localStorage.getItem("token");

  const postClick = async () => {
    try {
      const response = await fetch(
        "https://t-mebel.onrender.com/callclick/record",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.numberWrapper}>
      <h3 className={styles.number}>067 - 149 - 67 - 41</h3>
      <Link onClick={postClick} href="tel:0671496741" className={styles.btn}>
        {t("btn")}
      </Link>
    </div>
  );
}
