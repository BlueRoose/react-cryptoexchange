import { FC } from "react";
import styles from "./CurrencyRow.module.scss";

const CurrencyRow: FC = () => {
  return (
    <div className={styles.currencyRow}>
      <p>1</p>
      <p>BTC</p>
      <p>Bitcoin</p>
      <p className={styles.hide}>50583</p>
      <p className={styles.hide}>1466124</p>
      <p>21000</p>
      <img src="res/plus.png" alt="plus" />
    </div>
  );
};

export default CurrencyRow;
