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
                <div className={styles.cards_group}>
                    <div className={styles.cards_group_row}>
                        <div className={styles.row_card}>
                            Card 1
                        </div>
                        <div className={styles.row_card}>
                            Card 2
                        </div>
                        <div className={styles.row_card}>
                            Card 3
                        </div>
                    </div>
                    <div className={styles.cards_group_row}>
                        <div className={styles.row_card}>
                            Card 4
                        </div>
                        <div className={styles.row_card}>
                            Card 5
                        </div>
                    </div>
                    <div className={styles.cards_group_row}>Column 3</div>
                </div>
            </div>
        </div>
    )
}