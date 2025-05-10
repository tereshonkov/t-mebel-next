"use client";
import { useState } from "react";
import styles from "./Faq.module.css";
import { useTranslations } from "next-intl";

type faqType = {
    question: string;
    answer: string;
};


export default function Accordion() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
    const toggleAccordion = (index: number): void => {
        setIsOpen(isOpen === index ? null : index);
    };

    const t = useTranslations('FAQ');

    const faqData: faqType[] = [
        {
          question: t('question-one'),
          answer: t('answer-one'),
        },
        {
          question: t('question-two'),
          answer: t('answer-two'),
        },
        {
          question: t('question-three'),
          answer: t('answer-three'),
        },
      ];

  return (
    <ul className={styles.accWrapper}>
        {faqData.map((elem, index) => (
        <li key={index} className={styles.accItem}>
            <button onClick={() => {toggleAccordion(index)}} className={styles.itemQ}>{elem.question}</button>
            <div className={`${styles.collapse} ${index === isOpen ? styles.open : ""}`}>
            <div className={styles.answer}>{elem.answer}</div>
            </div>
        </li>
        ))}
    </ul>
  );
}
