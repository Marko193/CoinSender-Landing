import styles from './footer.module.scss'
import {useState} from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo-header.svg";
import Link from "next/link";
import {BurgerMenu} from "@/components/burger-menu/burger-menu";

export default function Footer() {
    const [isActive, setIsActive] = useState(false);

    const items = [
        {name: "Home", link: "#home"},
        {name: "Features", link: "#features"},
        {name: "How it works", link: "#howitworks"},
        {name: "Benefits", link: "#benefits"},
        {name: "Pricing", link: "#pricing"},
        {name: "Intagrations", link: "#integrations"},
        {name: "Roadmap", link: "#roadmap"},
        {name: "Backed by Product Company", link: "#backed"},
        {name: "FAQ", link: "#faq"},
        {name: "Contact", link: "#contact"},
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container + " container"}>
                <div className={styles.logo}>
                    <Image src={Logo} alt=""/>
                </div>
                <div className={styles.footer__desktop_menu}>
                    <ul className={styles.footer__nav}>
                        {items.map(({name, link}, index) => (
                            <li key={index}>
                                <Link href={link}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.icons_row}>
               <img src='/assets/socials_icons/logo_twitter.svg' alt='social_icon'/>
               <img src='/assets/socials_icons/logo_telegram.svg' alt='social_icon'/>
               <img src='/assets/socials_icons/logo_discord.svg' alt='social_icon'/>
               <img src='/assets/socials_icons/logo_instagram.svg' alt='social_icon'/>
               <img src='/assets/socials_icons/logo_linkedin.svg' alt='social_icon'/>
               <img src='/assets/socials_icons/logo_facebook.svg' alt='social_icon'/>
               <img src='/assets/socials_icons/logo_youtube.svg' alt='social_icon'/>
            </div>
        </footer>
    );
}
