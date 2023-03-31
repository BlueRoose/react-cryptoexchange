import { FC } from "react";
import styles from "./Case.module.scss";
import SmallCurrencyRow from "../SmallCurrencyRow/SmallCurrencyRow";

const Case: FC = () => {
  return (
    <div className={styles.case}>
      <p className={styles.cross}>X</p>
      <p className={styles.text}>Your cryptos</p>
      <div className={styles.rows}>
        <SmallCurrencyRow />
        <SmallCurrencyRow />
        <SmallCurrencyRow />
        <SmallCurrencyRow />
      </div>
    </div>
  );
};

export default Case;
