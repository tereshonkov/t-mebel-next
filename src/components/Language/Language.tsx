"use client";
import styles from './Language.module.css';
import { useTranslations } from 'next-intl';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Language({ mobile = false }: { mobile?: boolean }) {

    const t = useTranslations('header');
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentLocale = pathname.split('/')[1];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // Сохраняем выбранный язык
        const selectedLocale = e.target.value;

        // Формируем строку с query параметрами, если они есть
        const paramsString = searchParams.toString();
        const query = paramsString ? `?${paramsString}` : '';

        // Формируем новый URL, заменяя старую локаль на новую
        // Например: "/ru/products" -> "/en/products"
        const newPathname = pathname.replace(`/${currentLocale}`, `/${selectedLocale}`);

        // Делаем переход на новый URL с помощью роутера Next.js
        router.push(`${newPathname}${query}`);
    };
    return (
        <div className={mobile ? styles.langWrapperDark : styles.langWrapper}>
            <img src={!mobile ? "/lang.svg" : "/lang-dark.svg"} alt="language" />
            {/* <p>{t('language')}</p> */}
            <div className={styles.langSelect}>
                <select className={styles.select} value={currentLocale} onChange={handleChange} name="language" id="language">
                    <option className={styles.darkItem} value="en">English</option>
                    <option className={styles.darkItem} value="ru">Русский</option>
                    <option className={styles.darkItem} value="uk">Українська</option>
                </select>
            </div>
        </div>
    )
}
