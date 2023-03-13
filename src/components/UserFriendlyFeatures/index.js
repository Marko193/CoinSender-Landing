import styles from "./user-styles.module.css"

import {mockCardsData} from './mockCardsData'

export default function UserFriendlyFeatures() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_content}>
                <div className={styles.header}>
                    <div className={styles.header_title}>User-friendly features that will unlock your workflow
                        potential.
                    </div>
                    <div className={styles.header_description}>
                        With CoinSender, you can easily distribute tokens and make
                        multi-transaction payouts in cryptocurrency hassle-free. Our platform is designed specifically
                        to
                        make the process fast, secure, and efficient. Here's what you can expect when you sign up for
                        CoinSender:
                    </div>
                </div>
                <div className={styles.cards_group}>
                    <div className={styles.cards_group_row}>
                        <div className={styles.row_card}>
                            {mockCardsData.map((item, index) => {
                                return (
                                    <div className={styles.card_content} key={item.id}>
                                        <img src={`${item.icon}`} alt='img'/>
                                        <div className={styles.card_text_block}>
                                            <div className={styles.text_block_title}>
                                                {item.title}
                                            </div>
                                            <div className={styles.text_block_description}>
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.cards_group_row}>Column 3</div>
                </div>
            </div>
        </div>
    )
}