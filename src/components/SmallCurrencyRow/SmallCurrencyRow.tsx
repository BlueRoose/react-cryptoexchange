import { FC } from "react";
import styles from "./SmallCurrencyRow.module.scss";
import { useCurrencies } from "../../hooks/useCurrencies";
import { Currencies } from "../../providers/Currencies/types";

interface Props {
  symbol: string;
  amount: number;
}

const SmallCurrencyRow: FC<Props> = ({ symbol, amount }) => {
  const { currencies } = useCurrencies();

  const getPrice = () => {
    return Number(currencies.find((element: Currencies) => element.symbol === symbol)?.priceUsd) * amount;
  };
  return (
    <div className={styles.row}>
      <p>
        {amount} <span>{symbol}</span> ~ {getPrice().toFixed(5)} <span>USDT</span>
      </p>
      <img className={styles.cross} src="/res/plus.png" alt="cross" />
    </div>
  );
};

export default SmallCurrencyRow;
