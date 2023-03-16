import styles from './backend-product.module.scss'

export default function BackendProduct() {
    return (
        <div className={styles.backend_product_container}>
            <div className={styles.container_text_wrapper}>
                <div className={styles.title}>
                    Backed by
                    <span className={styles.product_company_label}>Product Company</span>
                </div>
                <div className={styles.description}>
                    CoinSender is backed by MeGaDev, a digital transformation business at the cutting edge of crypto.
                    MeGaDev has well-established technical and management teams with a wealth of experience between
                    them. The MeGaDev team is proud to contribute ground-breaking products that shape the future of
                    crypto, including CoinSender.
                </div>
                <button className={styles.discover_button}>Discover</button>
            </div>
        </div>
    )
}