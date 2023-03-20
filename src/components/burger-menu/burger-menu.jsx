import Link from "next/link";
import styles from "./menu.module.css";

export const BurgerMenu = ({ items, isActive, setIsActive }) => {
  return (
    <>
      <div
        className={
          isActive ? `${styles.menu} ${styles["menu-active"]}` : styles.menu
        }
      >
        <ul>
          {items.map(({ name, link }, index) => (
            <li key={index}>
              <Link onClick={() => setIsActive(false)} href={"/" + link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
