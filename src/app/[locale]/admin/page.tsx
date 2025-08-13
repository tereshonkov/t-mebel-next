import Sidebar from "@/components/Sidebar/Sidebar"
import styles from './page.module.css'

export default function AdminPage() {
  return (
    <>
      <div className={styles.sidebarContainer}>
        <img className={styles.logo} src="/logo.png" alt="Логотип" />
        <p>Привет (тут будет имя администратора если он будет не один)</p>
      </div>
      <div className={styles.adminPage}>
        <Sidebar />
        <p>Добро пожаловать в админку!</p>
      </div>
    </>
  )
}
