import {Header} from "@/components/Header/header";
import Footer from "@/components/Footer";
import styles from './privacy_policy.module.scss'

export default function PrivacyPolicy() {
    return (
        <>
            <Header/>
            <div className={styles.main_wrapper}>
                <div className={styles.main_title}>
                    Privacy policy
                </div>
                <div className={styles.blocks_info_wrapper}>
                    <div className={styles.blocks_info_content}>
                        <div className={styles.block_title}>
                            <p>General information</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}