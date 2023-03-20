import { Header } from "@/components/Header/header";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
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
import NotFoundIcon from "../../assets/images/NotFound/404.svg";

export default function NotFound() {
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
    <div className={styles.network_container}>
      <div className={styles.hide}>
        <div
          onMouseMove={(e) =>
            handleMouseMove(e, setOffsetX, setOffsetY, setOffsetX2, setOffsetY2)
          }
          onMouseOut={handleMouseOut}
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
          }}
        >
          <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
            <Image src={Oasis} alt="" />
            <Image src={Sol} alt="" />
            <Image src={Dot} alt="" />
          </div>
          <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
            <Image src={CPolygon} alt="" />
            <Image src={Colgate} alt="" />
            <Image src={ETH} alt="" />
          </div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
            <Image src={USDC} alt="" />
            <Image src={USDT} alt="" />
            <Image src={BCH} alt="" />
          </div>
          <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
            <Image src={Matic} alt="" />
            <Image src={BNB} alt="" />
            <Image src={Romb} alt="" />
          </div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
            <Image src={Heco} alt="" />
            <Image src={Bird} alt="" />
            <Image src={XML} alt="" />
          </div>
          <div style={{ display: "flex", gap: "20px", marginLeft: "90px" }}>
            <Image src={Arrows} alt="" />
            <Image src={HBar} alt="" />
            <Image src={LTC} alt="" />
          </div>
        </div>
      </div>

      <div
        className={styles.network_details}
        style={{
          transform: `translate(${offsetX2}px, ${offsetY2}px)`,
        }}
      >
        <Image src={NotFoundIcon} />
      </div>
      <div className={styles.hide}>
        <div
          onMouseMove={(e) =>
            handleMouseMove(e, setOffsetX2, setOffsetY2, setOffsetX, setOffsetY)
          }
          onMouseOut={handleMouseOut}
          style={{
            transform: `translate(${offsetX2}px, ${offsetY2}px)`,
          }}
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
  );
}
