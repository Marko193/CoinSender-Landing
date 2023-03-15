import styles from './coin-sender-benefits.module.scss'
import TitleDescriptionHelper from "@/components/TitleDescHelper";

export default function CoinSenderBenefits() {
    return (
        <div className={styles.benefits_wrapper}>
            <TitleDescriptionHelper
                title="Discover the Benefits of Using CoinSender for Your Cryptocurrency Payouts"
                description="When it comes to multi-transaction payouts in cryptocurrency, CoinSender is the platform of choice for businesses and projects of all sizes."
            />
            <div className={styles.content_container}>
                <div className={styles.content} id={styles.first_row}>
                    <div className={styles.block}>
                        <div className={styles.sub_block}>
                            <div className={styles.title}>Wallet Integration</div>
                            <div className={styles.description}>CoinSender uses funds allocated directly in your Web3
                                wallet, so you can easily send funds directly to your recipient's wallets.
                            </div>
                        </div>
                        <div className={styles.separator}/>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.sub_block}>
                            <div className={styles.title}>Smart Contracts</div>
                            <div className={styles.description}>
                                Our platform uses smart contract-based settings for token distribution flows. This
                                ensures that your transactions are always secure and transparent.
                            </div>
                        </div>
                        <div className={styles.separator} style={{marginTop: '70px'}}/>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.sub_block}>
                            <div className={styles.title}>Decentralized Database</div>
                            <div className={styles.description}>
                                Enjoy transparent tracking of fund distribution history and transaction breakdown, all
                                securely stored on a blockchain-based platform.
                            </div>
                        </div>
                        <div className={styles.separator}/>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.sub_block}>
                            <div className={styles.title}>Security Compliance</div>
                            <div className={styles.description}>
                                The CoinSender team constantly analyzes and upgrades our security systems beyond
                                compliance with current cybersecurity standards.
                            </div>
                        </div>
                        <div className={styles.separator}/>
                    </div>
                </div>
                <div className={styles.content} id={styles.second_row}>
                    <div className={styles.block}>
                        <div className={styles.sub_block}>
                            <div className={styles.title}>Billing</div>
                            <div className={styles.description}>Send invoices to customers efficiently using our
                                flexible, professional invoice constructor. It’s designed specifically for the crypto
                                industry to make sure you look sharp.
                            </div>

                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.sub_block}>
                            <div className={styles.title}>Multi-Network Support</div>
                            <div className={styles.description}>CoinSender supports multiple networks, including
                                Ethereum, Binance Smart Chain, and Polygon, making it easy to distribute tokens across
                                different networks.
                            </div>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.sub_block}>
                            <div className={styles.title}>Time-Saving</div>
                            <div className={styles.description}>Save time with automated processes for recipient list
                                collection. Our simple step-by-step process will save you time and reduce your errors.
                            </div>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.sub_block}>
                            <div className={styles.title}>Only 0.1% fee</div>
                            <div className={styles.description}>Any cryptocurrency transaction requires computational
                                resources, and GAS is the fee that covers the cost of those. So by bringing your
                                transactions together with CoinSender, you can make big savings on GAS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}