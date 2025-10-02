import styles from './Hero.module.css'
import Header from '../Header/Header';
import { Link } from '@/i18n/navigation';
import HeroCarusel from './HeroCarusel';
import { getTranslations } from 'next-intl/server';
import PageVisit from '../PageVisit/PageVisit';


export default async function Hero({ startIndex = 0, home, page }: { startIndex?: number, home?: boolean, page?:boolean }) {
  const t = await getTranslations('hero');
  const form = await getTranslations('form');
  return (
    <header className={styles.wrapper} style={page ? { height: '50vh' } : { height: '100vh' }}>
      <PageVisit />
      <Header />
      <HeroCarusel initialIndex={startIndex} />
      {home && <div className={styles.wrapperContent}>
        <div className={styles.banner}>
          <div className={styles.banerWrapper}>
            <div className={styles.bannerText}>
              <h2>{t('title')}</h2>
              <p>{t('subtitle')}</p>
            </div>
            <div className={styles.bannerButton}>
              <a href='tel:0671496741' className={styles.btn}>{t('button')}</a>
              <Link href="/contacts" className={styles.btnSecond}>{t('buttonTwo')}</Link>
            </div>
          </div>
        </div>
        <h1 className={styles.title}>{t('header')} <span>{t('bold')}</span></h1>
      </div>}
      {!home &&
        <div className={styles.numberWrapper}>
          <h3 className={styles.number}>
            067 - 149 - 67 - 41
          </h3>
          <Link href="tel:0671496741" className={styles.btnCaller}>
            {form('btn')}
          </Link>
        </div>
      }
    </header>
  )
}
