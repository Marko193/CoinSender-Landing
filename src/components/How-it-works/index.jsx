import Image from "next/image";
import styles from "./styles.module.css";
import ConnectWallet from "../../assets/images/how-it-works/connect-wallet.svg";
import MakePayment from "../../assets/images/how-it-works/make-payment.svg";
import Secure from "../../assets/images/how-it-works/secure.svg";
import SignUp from "../../assets/images/how-it-works/signup.svg";
import Track from "../../assets/images/how-it-works/track.svg";

export const HowItWorks = () => {
  const items = [
    {
      id: 1,
      icon: SignUp,
      title: "Sign up for an account, or use CoinSender via your web3 wallet",
      description:
        "There are two authentication methods - either sign up for an account with email and password, or use CoinSender via your web3 wallet, which requires no password and no personal data.",
      video: "",
    },
    {
      id: 2,
      icon: ConnectWallet,
      title: "Connect your wallet(s)",
      description:
        "If you choose to create a CoinSender account, you can then connect your cryptocurrency wallet. This will allow you to send multi-transaction payments from your wallet.",
      video: "",
    },
    {
      id: 3,
      icon: MakePayment,
      title: "Make a payment",
      description:
        "To make a payment, simply enter the recipient's wallet address and the amount of cryptocurrency you wish to send. You can also create a list of recipients if you need to make multiple payments simultaneously.",
      video: "",
    },
    {
      id: 4,
      icon: Secure,
      title: "Enjoy fast and secure cryptocurrency payments",
      description:
        "Our advanced security measures ensure that your transactions are always secure and encrypted. Our user-friendly platform makes it easy to manage your payments with just a few clicks.",
      video: "",
    },
    {
      id: 5,
      icon: Track,
      title: "Track your transactions",
      description:
        "CoinSender allows you to monitor the status of your payments in real-time, so you know what’s happening and you can communicate this easily with recipients as required.",
      video: "",
    },
  ];

  return (
    <section>
      <div className={styles.section__container + " container"}>
        {items.map(({ icon, title, description }) => (
          <div key={title} className={styles.block}>
            <div className={styles.image_block}>
              <Image src={icon} alt="" />
            </div>
            <div className={styles.block_title}>{title}</div>
            <div className={styles.block_description}>{description}</div>
            <div>
              <iframe
                style={{ height: "178px", width: "100%" }}
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe>
            </div>
          </div>
        ))}
        <div className={styles.block}>
          <button>Try now</button>
        </div>
      </div>
      {/* <div>
        <Slider slides={items} />
      </div> */}
    </section>
  );
};
