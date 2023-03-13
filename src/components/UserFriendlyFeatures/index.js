import styles from "./user-styles.module.css"

export default function UserFriendlyFeatures() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_content}>
                <div className={styles.header}>
                    <div className={styles.header_title}>User-friendly features that will unlock your workflow potential.</div>
                    <div className={styles.header_description}>
                        With CoinSender, you can easily distribute tokens and make
                        multi-transaction payouts in cryptocurrency hassle-free. Our platform is designed specifically to
                        make the process fast, secure, and efficient. Here's what you can expect when you sign up for
                        CoinSender:
                    </div>
                </div>
            </div>
        </div>
    )
}