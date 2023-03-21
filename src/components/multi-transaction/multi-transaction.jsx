import Image from "next/image";
import Logo from "../../assets/images/animation.gif";
import styles from "./multi-transaction.module.css";

export const MultiTransactionSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles["multi-transaction"]}>
          <div>
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
              <button className="button">Get Started</button>
            </div>
          </div>
          <div className="multi-transaction--logo">
            <Image
              style={{ padding: "45px 21px 42px 39px" }}
              src={Logo}
              fill
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
