import styles from "./ready-to-start.module.scss";

export default function ReadyToStart() {
  return (
    <section id="intergrations">
      <div className={styles.ready_to_start_wrapper}>
        <div className={styles.ready_to_start_layout}>
          <div className={styles.title}>
            Ready to start sending multi-transaction payments quickly and
            securely?
          </div>
          <div className={styles.description}>
            Sign up for CoinSender today and start enjoying the benefits of
            fast, secure, and hassle-free multi-transaction payments.
          </div>
          <button className={styles.sign_up_button}>
            Sign up for progress
          </button>
        </div>
      </div>
    </section>
  );
}
