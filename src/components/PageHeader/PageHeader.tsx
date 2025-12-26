"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  const router = useRouter();

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <button 
          onClick={() => router.back()} 
          className={styles.backButton}
          aria-label="Повернутись назад"
        >
          <IoArrowBack size={20} />
          <span>Назад</span>
        </button>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
