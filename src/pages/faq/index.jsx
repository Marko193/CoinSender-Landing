import {Header} from "@/components/Header/header";
import Footer from "@/components/Footer";
import styles from './faq.module.scss';

export default function FAQ() {
    return (
        <>
            <Header/>
            <div className={styles.main_wrapper}>
                <div className={styles.title_description_block}>
                    <div className={styles.title}>Frequently Asked Questions</div>
                    <div className={styles.description}>We've put together a list of frequently asked questions to help
                        address any concerns you may have about using CoinSender. If you have any additional questions,
                        please don't hesitate to reach out to our customer support team for assistance.
                    </div>
                </div>
                <div className={styles.accordions_layout}>
                    CONTENT for accordions
                </div>
            </div>
            <Footer/>
        </>
    )
}