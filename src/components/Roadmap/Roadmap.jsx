import Image from "next/image";
import styles from "./styles.module.css";
import checked from "../../assets/images/roadmap/checked.svg";
import dot from "../../assets/images/roadmap/dot.svg";
import empty from "../../assets/images/roadmap/empty.svg";

const doneItems = [
  "Platform token launch",
  "Audit",
  "Close beta tests",
  "Adding new blockchain-supported extensions",
  "Fixing Bugs",
  "Public Alpha Testnet",
  "Improvement of the platform by feedbacks",
  "Notifications",
  "Connecting new markets",
  "Referral Program",
];

const inProgressItems = [
  "Application testing by influencers",
  "User acquisition",
  "Expanding user community",
  "Collection of early-engaged users shortlist",
  "Beta and alpha testing",
  "Transaction analytics feature",
  "User roles",
  "Security audit",
];

const toDoItems = [
  "Token launch",
  "Airdrop distribution to early-engaged users",
  "NFT creation and distribution functionality",
  "Launch staking",
  "Launch of token farming",
  "Mobile app",
  "Application library",
  "Crypto wallet integration",
  "External accounting & tax software integrations feature",
];

export const Roadmap = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div className={styles.info_container}>
            <div className={styles.title}>
              Building the Future of Cryptocurrency Payments: Our Roadmap
            </div>
            <div className={styles.description_block}>
              <div>
                Our roadmap includes a range of exciting new features and
                enhancements, such as support for new adding new
                blockchain-supported extensions, notifications, and improved
                security measures to keep your transactions safe and secure.
                We're also focused on improving the user experience, with new
                tools and features that make it easier and more intuitive to
                manage your cryptocurrency payments.
              </div>
              <div>
                Our roadmap is constantly evolving, and we're always listening
                to feedback from our users to ensure that we're providing the
                best possible service. We're excited to be building the future
                of cryptocurrency payments. <br /> <br /> We're committed to
                constantly improving our application and providing the best
                possible experience for our users.
              </div>
            </div>
          </div>

          <div className={styles.roadmap_items}>
            <div className={styles.item}>
              <div className={styles.item_title}>Done</div>
              <div className={styles.items}>
                {doneItems.map((item) => (
                  <div key={item} className={styles.item_content}>
                    <Image src={checked} />

                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_title}>In Progress</div>
              <div className={styles.items}>
                {inProgressItems.map((item) => (
                  <div key={item} className={styles.item_content}>
                    <Image src={dot} />

                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_title}>To Do</div>
              <div className={styles.items}>
                {toDoItems.map((item) => (
                  <div key={item} className={styles.item_content}>
                    <Image src={empty} />

                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
