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
                        <div className={styles.text_block}>
                            CoinSender (hereinafter referred to as: the “Company” “CoinSender”, “we,” “us”, “our”) is
                            committed to protecting and respecting your privacy. This Privacy Policy describes our
                            privacy practices with regard to your Personal Data. “Personal Data” in this Privacy Policy
                            shall mean any data that may be provided to Us which personally identifies you, such as your
                            name, email address, or billing information, or other data that can be reasonably linked to
                            such information by CoinSender This Policy covers both our online and offline data
                            collection activities, including Personal Data that We collect through our various channels
                            such as websites, social networks, exhibitions and events.
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}