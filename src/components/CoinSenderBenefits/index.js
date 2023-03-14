import styles from './coin-sender-benefits.module.scss'
import TitleDescriptionHelper from "@/components/TitleDescHelper";

export default function CoinSenderBenefits() {
    return (
        <div className={styles.benefits_wrapper}>
            <TitleDescriptionHelper
                title="Discover the Benefits of Using CoinSender for Your Cryptocurrency Payouts"
                description="When it comes to multi-transaction payouts in cryptocurrency, CoinSender is the platform of choice for businesses and projects of all sizes."
            />
        </div>
    )
}