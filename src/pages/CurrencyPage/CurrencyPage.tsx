import { FC } from "react";
import styles from "./CurrencyPage.module.scss";
import Header from "../../components/Header/Header";
import { useCurrencies } from "../../hooks/useCurrencies";
import { useParams } from "react-router-dom";

const CurrencyPage: FC = () => {
  const { currencies } = useCurrencies();
  const { id } = useParams();
  const currency = currencies.filter((curr) => curr.symbol === id)[0];

  function capitalize() {
    if (!currency?.id) return currency?.id;

    return currency?.id[0].toUpperCase() + currency?.id.slice(1);
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      {currency ?
      <div className={styles.main}>
        <div className={styles.left}>
          <h2>{capitalize() + " " + currency?.symbol}</h2>
          <p>Current price:</p>
          <p>
            1 {currency?.symbol} - {Number(currency?.priceUsd).toFixed(7)} USDT
          </p>
          <button>Buy {currency?.symbol}</button>
        </div>
        <div className={styles.graph}></div>
      </div> : <h1 className={styles.sorry}>Your currency is loading. Please hold on a second.</h1> }
    </div>
  );
};

export default CurrencyPage;
