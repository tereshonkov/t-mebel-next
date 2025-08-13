"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false, // сами решаем, куда редиректить
      email,
      password,
    });

    if (res?.error) {
      alert("Неверный логин или пароль");
    } else {
      router.push("/admin"); // успешный вход → в админку
    }
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src="/logo.png" alt="Logo" />
      <h2 className={styles.header}>Вход в систему Администратора</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Нужно ввести Email"
          required
        />
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Нужно ввести Пароль"
          required
        />
        <button className={styles.button} type="submit">Войти</button>
      </form>
    </div>

  );
}
