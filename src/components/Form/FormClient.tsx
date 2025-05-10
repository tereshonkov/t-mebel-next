"use client";
import styles from './Form.module.css';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

type FormValue = {
    name: string;
    phone: string;
}

export default function FormClient() {
    const [value , setValue] = useState<FormValue>({
        name: '',
        phone: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValue({
            name: '',
            phone: ''
        });
        console.log(value);
    }
    const t = useTranslations('Form');

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
            <input placeholder={t('name')} onChange={handleChange} name="name" value={value.name} id='labelName' type="text" className={styles.input} />
            <input placeholder={t('phone')} onChange={handleChange} name='phone' value={value.phone} id='phone' type="text" className={styles.input} />
            <div>
            <button className={styles.btn} type='submit'>{t('button')}</button>
            </div>
</form>
  )
}
