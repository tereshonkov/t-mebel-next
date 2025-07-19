"use client";
import styles from './Contact.module.css';
import { useState } from 'react';
import { FormEvent } from 'react';
import { useTranslations } from 'next-intl';
interface FormData {
    name: string;
    phone: string;
    message: string;
  }

export default function FormContact() {
    const t = useTranslations('contactPage');
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        message: ''
    });
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
        name: '',
        phone: '',
        message: ''
    });
    }
  return (
    <div className={styles.form}>
    <h2 className={styles.titleForm}>{t('conactForm')}</h2>
    <form onSubmit={handleSubmit} className={styles.formContact}>
      <input
        type="text"
        placeholder={t('nameInput')}
        className={styles.input}
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder={t('phoneInput')}
        className={styles.input}
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <textarea
        placeholder={t('messageInput')}
        className={styles.textarea}
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      ></textarea>
      <button type="submit" className={styles.button}>
      {t('submitButton')}
      </button>
    </form>
  </div>
  )
}
