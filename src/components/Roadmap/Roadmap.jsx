import Image from "next/image";
import styles from "./styles.module.css";
import checked from "../../assets/images/roadmap/checked.svg";
import dot from "../../assets/images/roadmap/dot.svg";
import empty from "../../assets/images/roadmap/empty.svg";
import { useState } from "react";
import ArrowLeft from "../../assets/images/how-it-works/left-arrow.svg";
import ArrowRight from "../../assets/images/how-it-works/right-arrow.svg";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwappableViews from "react-swipeable-views";

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

const sliderItems = [
  { title: "Done", icon: checked, items: doneItems },
  { title: "In Progress", icon: dot, items: inProgressItems },
  { title: "To Do", icon: empty, items: toDoItems },
];

export const Roadmap = () => {
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep === sliderItems.length - 1 ? 0 : activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep === 0 ? sliderItems.length - 1 : activeStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <section id="roadmap">
      <div className={styles.roadmap + " container"}>
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
                {sliderItems[0].items.map((item) => (
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
                {sliderItems[1].items.map((item) => (
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
                {sliderItems[2].items.map((item) => (
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
      <div>
        <div className={styles.mobile_version + " container"}>
          <div className={styles.title}>
            Building the Future of Cryptocurrency Payments: Our Roadmap
          </div>
          <div className={styles.currentItem}>
            <div className={styles.item_title}>
              {sliderItems[activeStep].title}
            </div>
            <div>
              <MobileStepper
                variant="dots"
                steps={sliderItems.length}
                position="static"
                className={styles.steps}
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
                })}
                nextButton={
                  <Button onClick={handleNext}>
                    <i className={styles.next_button} />
                  </Button>
                }
                backButton={
                  <Button onClick={handleBack}>
                    <i className={styles.back_button} />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.carousel_layout}>
            <SwappableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {sliderItems.map((step, index) => (
                <>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <div className={styles.item}>
                      <div className={styles.items}>
                        {step.items.map((item) => (
                          <div key={item} className={styles.item_content}>
                            <Image src={step.icon} />

                            <div>{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </>
              ))}
            </SwappableViews>
          </div>
        </div>
      </div>
    </section>
  );
};
