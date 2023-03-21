import { useState } from "react";
import { BurgerMenu } from "../burger-menu/burger-menu";
import styles from "./header.module.css";
import Logo from "../../assets/images/logo-header.svg";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const items = [
    { name: "Home", link: "#home" },
    { name: "Features", link: "#features" },
    { name: "How it works", link: "#howitworks" },
    { name: "Benefits", link: "#benefits" },
    { name: "Pricing", link: "#pricing" },
    { name: "Intagrations", link: "#integrations" },
    { name: "Roadmap", link: "#roadmap" },
    { name: "FAQ", link: "#faq" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header__container + " container"}>
        <div>
          <Link href="/">
            <Image src={Logo} alt="" />
          </Link>
        </div>
        <div className={styles.header__desktop_menu}>
          <ul className={styles.header__nav}>
            {items.map(({ name, link }, index) => (
              <li key={index}>
                <Link href={"/" + link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.header__signup}>
          <Link href="https://transfer.coinsender.io/auth">
            <button className="button">Sign Up</button>
          </Link>
        </div>
        <div
          onClick={() => setIsActive(!isActive)}
          className={`${styles.button_menu} ${isActive ? styles.active : ""}`}
        >
          <span></span>
        </div>
      </div>
      <BurgerMenu isActive={isActive} setIsActive={setIsActive} items={items} />
    </header>
  );
};
