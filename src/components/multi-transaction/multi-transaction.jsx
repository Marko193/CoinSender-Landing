import Image from "next/image";
import Logo from "../../assets/images/animation.gif";
import styles from "./multi-transaction.module.scss";
import Link from "next/link";

export const MultiTransactionSection = () => {
  return (
    <div id="/" className={styles.section}>
      <div className={styles.container}>
          <div className={styles.text_column}>
            <div className={styles["multi-transaction--title"]}>
              Fast and Convenient <br /> <span>Multi-Transaction </span> Payouts
              <br /> with CoinSender
            </div>
            <div className={styles["multi-transaction--description"]}>
              Say ‘goodbye’ to complicated token distribution, and ‘hello’ to
              multi-transaction payouts with a few clicks. CoinSender makes it
              easy to distribute tokens to pay employees, staking pool
              participants, and airdrops. Just link your wallet and select your
              recipients – we'll handle the rest.
            </div>
            <div>
              <Link href="https://transfer.coinsender.io/auth">
                <button className="button" id={styles.desktop_btn}>Get Started</button>
              </Link>
            </div>
          </div>
          <div className={styles.logo_wrapper}>
            <Image className={styles.logo} src={Logo} alt="img"  />
          </div>
          <button className={styles.mobile_btn}>Get Started</button>
        </div>

    </div>
  );
};
