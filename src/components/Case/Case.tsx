import { FC } from "react";
import styles from "./Case.module.scss";
import SmallCurrencyRow from "../SmallCurrencyRow/SmallCurrencyRow";

interface Props {
  onChange: (state: boolean) => void;
}

const Case: FC<Props> = ({ onChange }) => {
  return (
    <div className={styles.case}>
      <p className={styles.cross} onClick={() => onChange(false)}>
        X
      </p>
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
