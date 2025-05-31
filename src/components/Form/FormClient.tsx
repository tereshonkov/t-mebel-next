"use client";
import styles from './Form.module.css';
import { useState } from 'react';

export default function FormClient() {
    const [value, setValue] = useState("");
  return (
    <form className={styles.form}>
            <input onChange={(e) => {setValue(e.target.value)}} placeholder='067 - 149 - 67 - 41'  name='phone' value={value} type="phone" className={styles.input} />
            <button className={styles.btn} type='submit'>Позвонить мне</button>
    </form>
  )
}
