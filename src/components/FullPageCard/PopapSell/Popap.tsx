"use client";
import styles from "./Popap.module.css";
import { FaTags, FaGift } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { sendMessageApi } from "@/api/messages";
// import Link from "next/link";

interface InputState {
  name: string;
  phone: string;
}

export default function PopapSell({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (popap: boolean) => void;
}) {
  const t = useTranslations("popapSell");
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<InputState>({
    name: "",
    phone: "",
  });
  const sendMessage = async () => {
    const data = {
      message: `Сообщение с сайта: Имя: ${input.name}; Телефон: ${input.phone}; Сообщение: Заявка из карточки товара`,
    };

    await toast.promise(
      fetch("https://t-mebel.onrender.com/telegram/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }),
      {
        loading: "Отправка сообщения...",
        success: "Сообщение отправлено!",
        error: "Ошибка при отправке",
      }
    );
  };
  useEffect(() => {
    if (sessionStorage.getItem("popapShown")) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("popapShown", "true");
    }, 15000);
    return () => clearTimeout(timer);
  }, []);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage();
    await sendMessageApi({
      name: input.name,
      phone: input.phone,
      message: "скидка 10%",
    });
    console.log(input);
    setInput({ name: "", phone: "" });
    setIsOpen(false);
  };
  if (!isOpen) return null;
  return (
    <div className={styles.wrapper}>
      <div className={styles.popapWrapper}>
        <IoCloseCircleOutline
          onClick={() => setIsOpen(false)}
          className={styles.close}
          size={32}
        />
        <div className={styles.header}>
          <FaGift className={styles.iconGift} />
          <h2 className={styles.heading}>{t("title")}</h2>
          <h3 className={styles.heading}>{t("description")}</h3>
        </div>
        <div className={styles.body}>
          <p className={styles.text}>{t("text")}</p>
          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.inputsWrapper}>
              <input
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                type="text"
                placeholder={t("name")}
                className={styles.input}
                required
              />
              <input
                value={input.phone}
                onChange={(e) => setInput({ ...input, phone: e.target.value })}
                type="text"
                placeholder={t("phone")}
                className={styles.input}
                required
              />
            </div>
            <button type="submit" className={styles.button}>
              {t("btn")}
            </button>
          </form>
        </div>
        <FaTags className={styles.iconBgLeft} />
        <FaTags className={styles.iconBgRight} />
        {/* <div className={styles.dash}></div>
        <p>{t("or")}</p>
        <div className={styles.socialWrapper}>
            <Link href="https://www.instagram.com/tereshonkov.alexander/"  target="_blank" className={styles.instagram}></Link>
            <Link href="https://t.me/+380980276709"  target="_blank" className={styles.telegram}></Link>
            <Link href="https://www.facebook.com/tmebelsite?locale=ru_RU" target="_blank" className={styles.facebook}></Link>
          </div>
        <p>{t("tel")}</p>
        <p className={styles.tel}>067-149-67-41</p> */}
      </div>
    </div>
  );
}
