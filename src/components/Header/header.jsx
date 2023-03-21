import {useState} from "react";
import {BurgerMenu} from "../burger-menu/burger-menu";
import styles from "./header.module.css";
import Logo from "../../assets/images/logo-header.svg";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

export const Header = () => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.header__container + " container"}>
                <div>
                    <Link href="/">
                        <Image src={Logo} alt=""/>
                    </Link>
                </div>
                <div className={styles.header__desktop_menu}>
                    <ul className={styles.header__nav}>
                        <li>
                          <Link href={`/#home`}>Home</Link>
                        </li>
                        <li>
                            <Link href={`/#features`}>Features</Link>
                        </li>
                        <li>
                            <Link href={`/#howitworks`}>How it works</Link>
                        </li>
                        <li>
                            <Link href={`/#benefits`}>Benefits</Link>
                        </li>
                        <li>
                            <Link href={`/#pricing`}>Pricing</Link>
                        </li>
                        <li>
                            <Link href={`/#integrations`}>Integrations</Link>
                        </li>
                        <li>
                            <Link href={`/#roadmap`}>Roadmap</Link>
                        </li>
                        <li onClick={() => router.push(`/faq`)}>
                            <Link href={`/faq`}>FAQ</Link>
                        </li>
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
            <BurgerMenu isActive={isActive} setIsActive={setIsActive}/>
        </header>
    );
};
