import Sidebar from "@/components/Sidebar/Sidebar"
import styles from './page.module.css'

export default function AdminPage() {
  return (
    <>
      <div className={styles.sidebarContainer}>
        <img className={styles.logo} src="/logo.png" alt="Логотип" />
        <p className={styles.greeting}>Привет, Александр</p>
      </div>
      <div className={styles.adminPage}>
        <Sidebar />
        <div className={styles.content}>Контент</div>
      </div>
    </>
  )
}
