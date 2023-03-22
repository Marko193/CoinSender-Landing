import { useState } from "react";
import { BurgerMenu } from "../burger-menu/burger-menu";
import styles from "./header.module.css";
import Logo from "../../assets/images/logo-header.svg";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "react-scroll";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const items = [
    { name: "Home", link: "/" },
    { name: "Features", link: "features" },
    { name: "How it works", link: "howitworks" },
    { name: "Benefits", link: "benefits" },
    { name: "Pricing", link: "pricing" },
    { name: "Intagrations", link: "integrations" },
    { name: "Roadmap", link: "roadmap" },
    { name: "Contact", link: "contact" },
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
              <li>
                <Link
                  key={index}
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={1}
                >
                  {name}
                </Link>
              </li>
            ))}

            <li onClick={() => router.push(`/faq`)}>
              <NextLink href={`/faq`}>FAQ</NextLink>
            </li>
          </ul>
        </div>
        <div className={styles.header__signup}>
          <NextLink href="https://transfer.coinsender.io/auth">
            <button className="button">Sign Up</button>
          </NextLink>
        </div>
        <div
          onClick={() => setIsActive(!isActive)}
          className={`${styles.button_menu} ${isActive ? styles.active : ""}`}
        >
          <span></span>
        </div>
      </div>
      <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
};
