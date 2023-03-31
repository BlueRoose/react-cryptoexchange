import { FC } from "react";
import styles from "./MainPage.module.scss";
import Header from "../../components/Header/Header";
import CurrencyRow from "../../components/CurrencyRow/CurrencyRow";

const MainPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.head}>
        <p>Rank</p>
        <p>Symbol</p>
        <p>Name</p>
        <p>Trades for 24 hr</p>
        <p>Volume for 24 hr</p>
        <p>Price(USTD)</p>
      </div>
      <div className={styles.rows}>
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
      </div>
      <div className={styles.buttons}>
        <button>.</button>
        <button>1</button>
        <button>.</button>
      </div>
    </div>
  );
};

export default MainPage;
