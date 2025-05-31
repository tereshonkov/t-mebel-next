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
        {
          question: 'Можно ли изготовить мебель по нашему дизайну?',
          answer: 'Да, конечно! Мы с радостью изготовим мебель на заказ по вашему индивидуальному проекту. Вам достаточно поделиться своими идеями или чертежами — и мы реализуем их с учётом всех пожеланий по стилю, материалам и габаритам. Изготовление мебели под заказ — это возможность создать не просто предмет интерьера, а уникальное решение, идеально вписывающееся в ваш дом или офис.',
        },
        {
          question: 'Где я могу выбрать комплектующие по своему бюджету?',
          answer: 'Выбор комплектующих — важный этап, и мы полностью его учитываем. Вы сможете подобрать материалы, фурнитуру и декоры в соответствии со своим бюджетом и предпочтениями.Мы сотрудничаем с надёжными партнёрами, такими как Вияр, Дарк, Блюм и другими проверенными поставщиками, поэтому предлагаем широкий ассортимент фасадов, механизмов и фурнитуры — от эконом до премиум-класса.С нами вы получаете свободу выбора и уверенность в качестве каждой детали!',
        },
        {
          question: 'В каких городах вы работаете?',
          answer: 'Наша основная зона работы — город Харьков и Харьковская область.Однако мы открыты к сотрудничеству и готовы рассматривать выезды в другие регионы Украины — такие проекты обсуждаются индивидуально по договорённости. Если вы находитесь в другом городе — просто свяжитесь с нами, и мы постараемся найти оптимальное решение!',
        },
      ];

  return (
    <ul className={styles.accWrapper}>
        {faqData.map((elem, index) => (
        <li key={index} className={styles.accItem}>
            <h2 onClick={() => {toggleAccordion(index)}} className={styles.itemQ}>{elem.question}</h2>
            <div className={`${styles.collapse} ${index === isOpen ? styles.open : ""}`}>
            <div className={styles.answer}>{elem.answer}</div>
            </div>
        </li>
        ))}
    </ul>
  );
}
