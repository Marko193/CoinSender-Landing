import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import WalletIcon1 from "../../assets/images/networks/wallet1.svg";
import WalletIcon2 from "../../assets/images/networks/wallet2.svg";
import WalletIcon3 from "../../assets/images/networks/wallet3.svg";
import Oasis from "../../assets/images/networks/oasis.svg";
import Sol from "../../assets/images/networks/sol.svg";
import Dot from "../../assets/images/networks/dot.svg";
import CPolygon from "../../assets/images/networks/c-polygon.svg";
import BCH from "../../assets/images/networks/bch.svg";
import USDT from "../../assets/images/networks/usdt.svg";
import Matic from "../../assets/images/networks/matic.svg";
import ETH from "../../assets/images/networks/eth.svg";
import BNB from "../../assets/images/networks/bnb.svg";
import USDC from "../../assets/images/networks/usdc.svg";
import Colgate from "../../assets/images/networks/colgate.svg";
import Romb from "../../assets/images/networks/romb.svg";
import Heco from "../../assets/images/networks/heco.svg";
import Bird from "../../assets/images/networks/bird.svg";
import XML from "../../assets/images/networks/xml.svg";
import Arrows from "../../assets/images/networks/arrows.svg";
import LTC from "../../assets/images/networks/ltc.svg";
import HBar from "../../assets/images/networks/hbar.svg";
import Kaplya from "../../assets/images/networks/kaplya.svg";
import Opacha from "../../assets/images/networks/opacha.svg";
import Cya from "../../assets/images/networks/cya.svg";
import XMR from "../../assets/images/networks/xmr.svg";
import MANA from "../../assets/images/networks/mana.svg";
import ETC from "../../assets/images/networks/etc.svg";
import VET from "../../assets/images/networks/vet.svg";
import NEAR from "../../assets/images/networks/near.svg";
import ADA from "../../assets/images/networks/ada.svg";
import AVAX from "../../assets/images/networks/avax.svg";
import CELO from "../../assets/images/networks/celo.svg";
import RINGS from "../../assets/images/networks/rings.svg";
import OPPO from "../../assets/images/networks/oppo.svg";
import LINK from "../../assets/images/networks/link.svg";
import SCIENCE from "../../assets/images/networks/science.svg";
import BUSD from "../../assets/images/networks/busd.svg";
import BTC from "../../assets/images/networks/btc.svg";
import APE from "../../assets/images/networks/ape.svg";
import LeftArrow from "../../assets/images/networks/left-arrow.svg";
import RightArrow from "../../assets/images/networks/right-arrow.svg";

export const Network = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetX2, setOffsetX2] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [offsetY2, setOffsetY2] = useState(0);

  const handleMouseMove = (
    event,
    setStateLeftSideX,
    setStateLeftSideY,
    setStateRightSideX,
    setStateRightSideY
  ) => {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const moveX = (clientX - windowWidth / 2) / windowWidth;
    const moveY = (clientY - windowHeight / 2) / windowHeight;

    setStateLeftSideX(-moveX * 300);
    setStateLeftSideY(-moveY * 300);
    setStateRightSideX(-moveX * 200);
    setStateRightSideY(-moveY * 300);
  };

  const handleMouseOut = () => {
    setOffsetX(0);
    setOffsetY(0);
    setOffsetX2(0);
    setOffsetY2(0);
  };

  return (
    <section id="pricing">
      <div className={styles.network_container}>
        <div>
          <div
            onMouseMove={(e) =>
              handleMouseMove(
                e,
                setOffsetX,
                setOffsetY,
                setOffsetX2,
                setOffsetY2
              )
            }
            onMouseLeave={handleMouseOut}
            style={{
              transform: `translate(${offsetX}px, ${offsetY}px)`,
            }}
            className={styles.desktop_icons}
          >
            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={CPolygon} alt="" />
              <Image src={Colgate} alt="" />
              <Image src={ETH} alt="" />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={Oasis} alt="" />
              <Image src={Sol} alt="" />
              <Image src={Dot} alt="" />
            </div>

            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={Matic} alt="" />
              <Image src={BNB} alt="" />
              <Image src={Romb} alt="" />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={USDC} alt="" />
              <Image src={USDT} alt="" />
              <Image src={BCH} alt="" />
            </div>

            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={Arrows} alt="" />
              <Image src={HBar} alt="" />
              <Image src={LTC} alt="" />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={Heco} alt="" />
              <Image src={Bird} alt="" />
              <Image src={XML} alt="" />
            </div>
          </div>
        </div>

        <div
          className={styles.network_details}
          style={{
            transform: `translate(${offsetX2}px, ${offsetY2}px)`,
          }}
        >
          <div>
            <div className={styles.title + " " + styles.arrows}>
              <div className={styles.arrows_text}>
                <div>
                  <Image src={LeftArrow} />
                </div>
                <div className={styles.subtitles}>Available in the app</div>
              </div>
              <div className={styles.main_title}>Networks</div>
              <div className={styles.arrows_text}>
                <div className={styles.subtitles}>In the testing process</div>
                <div>
                  <Image src={RightArrow} />
                </div>
              </div>
            </div>
            <div className={styles.section_description}>
              This sector is moving fast, so we’re constantly innovating to keep
              you ahead of your competitors. Coming soon, we’ll bring you new
              network capabilities that will give your business a new boost.
            </div>
          </div>
          <div>
            <div className={styles.title}>
              <div>Wallets</div>
            </div>
            <div className={styles.section_description}>
              Connect to your wallets with ease. Bring it all together on
              CoinSender for sensible and efficient processing.
            </div>
            <div className={styles.wallet_icons}>
              <Image src={WalletIcon1} />
              <Image src={WalletIcon2} />
              <Image src={WalletIcon3} />
            </div>
          </div>
        </div>
        <div>
          <div
            onMouseMove={(e) =>
              handleMouseMove(
                e,
                setOffsetX2,
                setOffsetY2,
                setOffsetX,
                setOffsetY
              )
            }
            onMouseLeave={handleMouseOut}
            style={{
              transform: `translate(${offsetX2}px, ${offsetY2}px)`,
            }}
            className={styles.desktop_icons}
          >
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={APE} alt="" />
              <Image src={BTC} alt="" />
              <Image src={BUSD} alt="" />
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={SCIENCE} alt="" />
              <Image src={LINK} alt="" />
              <Image src={VET} alt="" />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={NEAR} alt="" />
              <Image src={ADA} alt="" />
              <Image src={AVAX} alt="" />
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={CELO} alt="" />
              <Image src={RINGS} alt="" />
              <Image src={OPPO} alt="" />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={XMR} alt="" />
              <Image src={ETC} alt="" />
              <Image src={MANA} alt="" />
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={Cya} alt="" />
              <Image src={Opacha} alt="" />
              <Image src={Kaplya} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.mobile_container}>
          <div className="container">
            <div className={styles.title}>
              <div>Networks</div>
            </div>
            <div className={styles.section_description}>
              This sector is moving fast, so we’re constantly innovating to keep
              you ahead of your competitors. Coming soon, we’ll bring you new
              network capabilities that will give your business a new boost.
            </div>
          </div>
          <div>
            <div className={styles.subtitle}>
              <div className={styles.subtitles}>Available in the app</div>
            </div>
            <div className={styles.icons}>
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                  <Image src={Oasis} alt="" />
                  <Image src={Sol} alt="" />
                  <Image src={Dot} alt="" />
                  <Image src={USDC} alt="" />
                  <Image src={USDT} alt="" />
                  <Image src={BCH} alt="" />
                  <Image src={Heco} alt="" />
                  <Image src={Bird} alt="" />
                  <Image src={XML} alt="" />
                </div>
                <div
                  style={{ display: "flex", gap: "20px", marginLeft: "50px" }}
                >
                  <Image src={CPolygon} alt="" />
                  <Image src={Colgate} alt="" />
                  <Image src={ETH} alt="" />
                  <Image src={Matic} alt="" />
                  <Image src={BNB} alt="" />
                  <Image src={Romb} alt="" />
                  <Image src={Arrows} alt="" />
                  <Image src={HBar} alt="" />
                  <Image src={LTC} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.subtitle}>
              <div className={styles.subtitles}>In the testing process</div>
            </div>

            <div className={styles.icons} style={{ paddingBottom: "60px" }}>
              <div style={{ display: "flex", gap: "20px" }}>
                <Image src={APE} alt="" />
                <Image src={BTC} alt="" />
                <Image src={BUSD} alt="" />
                <Image src={SCIENCE} alt="" />
                <Image src={LINK} alt="" />
                <Image src={VET} alt="" />
                <Image src={NEAR} alt="" />
                <Image src={ADA} alt="" />
                <Image src={AVAX} alt="" />
              </div>
              <div style={{ display: "flex", gap: "20px", marginLeft: "50px" }}>
                <Image src={CELO} alt="" />
                <Image src={RINGS} alt="" />
                <Image src={OPPO} alt="" />
                <Image src={XMR} alt="" />
                <Image src={ETC} alt="" />
                <Image src={MANA} alt="" />
                <Image src={Cya} alt="" />
                <Image src={Opacha} alt="" />
                <Image src={Kaplya} alt="" />
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <Image src={AVAX} alt="" />
                <Image src={ADA} alt="" />
                <Image src={NEAR} alt="" />
                <Image src={VET} alt="" />
                <Image src={LINK} alt="" />
                <Image src={BUSD} alt="" />
                <Image src={SCIENCE} alt="" />
                <Image src={BTC} alt="" />
                <Image src={APE} alt="" />
              </div>
            </div>
            <div className="container">
              <div
                style={{
                  borderBottom: "1px solid #36394b",
                  marginBottom: "30px",
                }}
              ></div>
            </div>
          </div>
          <div className="container">
            <div className={styles.title}>
              <div>Wallets</div>
            </div>
            <div className={styles.section_description}>
              Connect to your wallets with ease. Bring it all together on
              CoinSender for sensible and efficient processing.
            </div>
            <div className={styles.wallet_icons}>
              <Image src={WalletIcon1} alt="" />
              <Image src={WalletIcon2} alt="" />
              <Image src={WalletIcon3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
