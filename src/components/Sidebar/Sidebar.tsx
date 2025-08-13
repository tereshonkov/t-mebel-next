import styles from './Sidebar.module.css'
import { FcComboChart,  FcFeedback, FcSms, FcSettings } from 'react-icons/fc'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}><FcComboChart /> Статистика</li>
            <li className={styles.sidebarItem}><FcFeedback /> Сообщения</li>
            <li className={styles.sidebarItem}><FcSms /> Отзывы</li>
            <li className={styles.sidebarItem}><FcSettings /> Настройки</li>
        </ul>
    </div>
  )
}
