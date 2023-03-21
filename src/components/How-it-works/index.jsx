import Image from "next/image";
import styles from "./styles.module.css";
import ConnectWallet from "../../assets/images/how-it-works/connect-wallet.svg";
import MakePayment from "../../assets/images/how-it-works/make-payment.svg";
import Secure from "../../assets/images/how-it-works/secure.svg";
import SignUp from "../../assets/images/how-it-works/signup.svg";
import Track from "../../assets/images/how-it-works/track.svg";
import ArrowLeft from "../../assets/images/how-it-works/left-arrow.svg";
import ArrowRight from "../../assets/images/how-it-works/right-arrow.svg";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwappableViews from "react-swipeable-views";
import { useState } from "react";
import Link from "next/link";

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

export const HowItWorks = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handlePrevClick = () => {
    setActiveSlide(activeSlide === 0 ? items.length - 1 : activeSlide - 1);
  };

  const handleNextClick = () => {
    setActiveSlide(activeSlide === items.length - 1 ? 0 : activeSlide + 1);
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <section id="howitworks">
      <div className="container">
        <div className={styles.section_title}>
          <div className={styles.title}>How it works</div>
          <MobileStepper
            variant="dots"
            steps={items.length}
            className={styles.steps}
            position="static"
            activeStep={activeStep}
            style={{
              background: "transparent",
              padding: 0,
            }}
            sx={() => ({
              "& .MuiMobileStepper-dot": {
                border: "1px solid #FFFFFF",
                backgroundColor: "transparent",
                borderRadius: "10px",
              },
              "& .MuiMobileStepper-dotActive": {
                backgroundColor: "white",
              },
              display: { xs: "flex", sm: "none" },
            })}
            nextButton={
              <Button
                onClick={handleNext}
                disabled={activeStep === items.length - 1}
              >
                <i className={styles.next_button} />
              </Button>
            }
            backButton={
              <Button onClick={handleBack} disabled={activeStep === 0}>
                <i className={styles.back_button} />
              </Button>
            }
          />
        </div>
        <div className={styles.section__container}>
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
            <Link href="https://transfer.coinsender.io/auth">
              <button>Try now</button>
            </Link>
          </div>
        </div>

        <div className={styles.carousel_layout}>
          <SwappableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {items.map((slide, index) => (
              <div key={slide.id}>
                <div className={styles.image_block}>
                  <Image src={slide.icon} alt="" />
                </div>
                <div className={styles.block_title}>{slide.title}</div>
                <div className={styles.block_description}>
                  {slide.description}
                </div>
                <div>
                  <iframe
                    style={{ height: "178px", width: "100%" }}
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </div>
              </div>
            ))}
          </SwappableViews>
        </div>
        <Link href="https://transfer.coinsender.io/auth">
          <button className={styles.try + " button"}>Try now</button>
        </Link>
      </div>
    </section>
  );
};
