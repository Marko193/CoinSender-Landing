import styles from "./user-styles.module.scss";
import TitleDescriptionHelper from "@/components/TitleDescHelper";

export default function UserFriendlyFeatures() {
  return (
    <div id="features" className={styles.wrapper_content}>
      <TitleDescriptionHelper
        title="User-friendly features that will unlock your workflow potential."
        description=" With CoinSender, you can easily distribute tokens and make multi-transaction payouts in cryptocurrency hassle-free. Our platform is designed specifically to make the process fast, secure, and efficient. Here s what you can expect when you sign up for CoinSender:"
      />
      <div className={styles.cards_group}>
        <div className={styles.arrows_ark_group}>
          <img src="/assets/arrow_ark_left.svg" alt="img" />
          <img src="/assets/arrow_ark_right.svg" alt="img" />
        </div>
        <div className={styles.cards_group_row} id={styles.first_card_row}>
          <div className={styles.row_card}>
            <div className={styles.card_content}>
              <img src="/assets/btc_1.svg" alt=" img" />
              <div className={styles.card_text_block}>
                <div className={styles.text_block_title}>
                  Massive Crypto Payouts with Ease
                </div>
                <div className={styles.text_block_description}>
                  CoinSender processes even the most complex multi-transaction
                  payments to your crypto drop/pool participants and other
                  recipients on different blockchains.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row_card}>
            <div className={styles.card_content}>
              <img src="/assets/btc_2.svg" alt=" img" />
              <div className={styles.card_text_block}>
                <div className={styles.text_block_title}>
                  Streamlined Employee Payments
                </div>
                <div className={styles.text_block_description}>
                  Manage employee records and salary payouts to make the process
                  faster and more convenient.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row_card}>
            <div className={styles.card_content}>
              <img src="/assets/icon_8949.svg" alt=" img" />
              <div className={styles.card_text_block}>
                <div className={styles.text_block_title}>Customer Database</div>
                <div className={styles.text_block_description}>
                  Keep track of your customers information and transaction
                  history with our customer database feature.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cards_group_row} id={styles.second_card_row}>
          <div className={styles.arrow_rounded_left_layout}>
            <img src="/assets/arrow_rounded_left.svg" alt=" img" />
          </div>
          <div className={styles.row_card}>
            <div className={styles.card_content}>
              <img src="/assets/btc_3.svg" alt=" img" />
              <div className={styles.card_text_block}>
                <div className={styles.text_block_title}>
                  Transparent Transaction History
                </div>
                <div className={styles.text_block_description}>
                  Our decentralized database provides a transparent track of
                  fund distribution history, ensuring you can easily track your
                  transactions.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row_card}>
            <div className={styles.card_content}>
              <img src="/assets/btc_4.svg" alt=" img" />
              <div className={styles.card_text_block}>
                <div className={styles.text_block_title}>
                  Customizable Invoices
                </div>
                <div className={styles.text_block_description}>
                  Our platform also features a customizable invoice creator, so
                  you can efficiently send professional invoices.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.arrow_rounded_right_layout}>
            <img src="/assets/arrow_rounded_right.svg" alt=" img" />
          </div>
        </div>
        <div className={styles.cards_group_row} id={styles.sign_up_layout}>
          <div className={styles.sign_up}>
            <button className={styles.sign_up_button}>Sign up</button>
            <div className={styles.sign_up_description}>
              Sign up for CoinSender today and experience the power of fast,
              secure, and easy multi-transaction payouts in cryptocurrency.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
