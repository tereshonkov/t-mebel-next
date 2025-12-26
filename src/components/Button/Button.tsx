import styles from "./Button.module.css";
import { Link } from "../../i18n/navigation";

interface ButtonProps {
  children: React.ReactNode;
  link?: string;
}

export default function Button({ children, link }: ButtonProps) {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  } else {
    return <button className={styles.btn}>{children}</button>;
  }
}
