import styles from './Button.module.css'
import { Link } from '../../i18n/navigation'

interface ButtonProps {
    children: React.ReactNode;
    link: string;
    dark?: boolean;
}
const darkTheme = {
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    color: 'rgba(112, 64, 21, 1)',
    border: '1px solid rgba(112, 64, 21, 1)',
}

export default function Button({children, link, dark}: ButtonProps) {
  return (
  <Link href={link} style={dark ? darkTheme : undefined} className={styles.btn}>{children}</Link> 
  )
}
