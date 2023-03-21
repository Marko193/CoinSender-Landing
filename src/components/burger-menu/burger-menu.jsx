import Link from "next/link";
import styles from "./menu.module.css";
import {useRouter} from "next/router";

export const BurgerMenu = ({isActive, setIsActive}) => {
    const router = useRouter();
    return (
        <>
            <div
                className={
                    isActive ? `${styles.menu} ${styles["menu-active"]}` : styles.menu
                }
            >
                <ul>
                    <li>
                        <Link href={`/#home`} onClick={() => setIsActive(false)}>Home</Link>
                    </li>
                    <li>
                        <Link href={`/#features`} onClick={() => setIsActive(false)}>Features</Link>
                    </li>
                    <li>
                        <Link href={`/#howitworks`} onClick={() => setIsActive(false)}>How it works</Link>
                    </li>
                    <li>
                        <Link href={`/#benefits`} onClick={() => setIsActive(false)}>Benefits</Link>
                    </li>
                    <li>
                        <Link href={`/#pricing`} onClick={() => setIsActive(false)}>Pricing</Link>
                    </li>
                    <li>
                        <Link href={`/#integrations`} onClick={() => setIsActive(false)}>Integrations</Link>
                    </li>
                    <li>
                        <Link href={`/#roadmap`} onClick={() => setIsActive(false)}>Roadmap</Link>
                    </li>
                    <li onClick={() => router.push(`/faq`)}>
                        <Link href={`/faq`} onClick={() => setIsActive(false)}>FAQ</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};
