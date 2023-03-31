import { FC } from "react";
import styles from "./CurrencyPage.module.scss";
import Header from "../../components/Header/Header";

const CurrencyPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <div className={styles.left}>
          <h2>Bitcoin BTC</h2>
          <p>Current price:</p>
          <p>1 BTC - 21963 USDT</p>
          <button>Buy BTC</button>
        </div>
        <div className={styles.graph}></div>
      </div>
    </div>
  );
};

export default CurrencyPage;
