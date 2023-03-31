import { FC } from "react";
import styles from "./SmallCurrencyRow.module.scss";

const SmallCurrencyRow: FC = () => {
  return (
    <div className={styles.row}>
      <p>
        1 <span>BTC</span> ~ 22000 <span>USDT</span>
      </p>
      <img className={styles.cross} src="res/plus.png" alt="cross" />
    </div>
  );
};

export default SmallCurrencyRow;
