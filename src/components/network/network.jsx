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
    <section>
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
            onMouseOut={handleMouseOut}
            style={{
              transform: `translate(${offsetX}px, ${offsetY}px)`,
            }}
          >
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={Oasis} />
              <Image src={Sol} />
              <Image src={Dot} />
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={CPolygon} />
              <Image src={Colgate} />
              <Image src={ETH} />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={USDC} />
              <Image src={USDT} />
              <Image src={BCH} />
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={Matic} />
              <Image src={BNB} />
              <Image src={Romb} />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={Heco} />
              <Image src={Bird} />
              <Image src={XML} />
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={Arrows} />
              <Image src={HBar} />
              <Image src={LTC} />
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
              <div className={styles.arrows_text}>Available in the app</div>
              <div>Networks</div>
              <div className={styles.arrows_text}>In the testing process</div>
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
            onMouseOut={handleMouseOut}
            style={{
              transform: `translate(${offsetX2}px, ${offsetY2}px)`,
            }}
          >
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={APE} />
              <Image src={BTC} />
              <Image src={BUSD} />
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={SCIENCE} />
              <Image src={LINK} />
              <Image src={VET} />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={NEAR} />
              <Image src={ADA} />
              <Image src={AVAX} />
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={CELO} />
              <Image src={RINGS} />
              <Image src={OPPO} />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Image src={XMR} />
              <Image src={ETC} />
              <Image src={MANA} />
            </div>
            <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
              <Image src={Cya} />
              <Image src={Opacha} />
              <Image src={Kaplya} />
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
              <div>Available in the app</div>
            </div>
            <div className={styles.icons}>
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                  <Image src={Oasis} />
                  <Image src={Sol} />
                  <Image src={Dot} />
                  <Image src={USDC} />
                  <Image src={USDT} />
                  <Image src={BCH} />
                  <Image src={Heco} />
                  <Image src={Bird} />
                  <Image src={XML} />
                </div>
                <div
                  style={{ display: "flex", gap: "20px", marginLeft: "50px" }}
                >
                  <Image src={CPolygon} />
                  <Image src={Colgate} />
                  <Image src={ETH} />
                  <Image src={Matic} />
                  <Image src={BNB} />
                  <Image src={Romb} />
                  <Image src={Arrows} />
                  <Image src={HBar} />
                  <Image src={LTC} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.subtitle}>
              <div>In the testing process</div>
            </div>
            <div className={styles.icons}>
              <div style={{ display: "flex", gap: "20px" }}>
                <Image src={APE} />
                <Image src={BTC} />
                <Image src={BUSD} />
                <Image src={SCIENCE} />
                <Image src={LINK} />
                <Image src={VET} />
                <Image src={NEAR} />
                <Image src={ADA} />
                <Image src={AVAX} />
              </div>
              <div style={{ display: "flex", gap: "20px", marginLeft: "50px" }}>
                <Image src={CELO} />
                <Image src={RINGS} />
                <Image src={OPPO} />
                <Image src={XMR} />
                <Image src={ETC} />
                <Image src={MANA} />
                <Image src={Cya} />
                <Image src={Opacha} />
                <Image src={Kaplya} />
              </div>
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
              <Image src={WalletIcon1} />
              <Image src={WalletIcon2} />
              <Image src={WalletIcon3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
