'use client';

import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import styles from './PopupForm.module.css';
import { toast } from 'react-hot-toast';

interface PopupFormProps {
  triggerLabel?: string;
  triggerClassName?: string;
}

export default function PopupForm({
  triggerLabel = 'Записатися на консультацію',
  triggerClassName,
}: PopupFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

    const sendMessage = async () => {
    const data = {
      message: `Сообщение с сайта: Имя: ${formData.name}; Телефон: ${formData.phone}; Сообщение: Новая заявка!!!`,
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
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closeForm = () => setIsOpen(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: hook into API submission when ready
    sendMessage();
    setIsOpen(false);
    setFormData({ name: '', phone: '' });
  };

  const triggerClasses = [styles.triggerButton, triggerClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <button
        type="button"
        className={triggerClasses}
        onClick={() => setIsOpen(true)}
      >
        {triggerLabel}
      </button>

      {isOpen && (
        <div
          className={styles.backdrop}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-form-title"
        >
          <div className={styles.modal}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeForm}
              aria-label="Закрити форму"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div className={styles.header}>
              <p className={styles.pill}>Індивідуальний прорахунок</p>
              <h3 id="popup-form-title">Залиште контакти</h3>
              <p className={styles.subtitle}>
                Підготуємо точний кошторис та надішлемо перші ескізи вже сьогодні.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span>Ваше ім&apos;я</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Марія"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Телефон</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+38 (0_) ___ __ __"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit" className={styles.submitButton}>
                Надіслати заявку
              </button>
              <p className={styles.note}>
                Менеджер зателефонує, щоб узгодити деталі та варіанти матеріалів.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
