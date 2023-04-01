import { FC } from "react";
import styles from "./Header.module.scss";
import { useCurrencies } from "../../hooks/useCurrencies";

const Header: FC = () => {
  const { topThree } = useCurrencies();
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <h1 className={styles.heading}>Crypto Exchange</h1>
        <div className={styles.personalInfo}>
          <div className={styles.balance}>
            <p className={styles.price}>143,32 USD</p>
            <p className={styles.price}>+2,38(1,80 %)</p>
          </div>
          <img className={styles.case} src="/res/case.png" alt="case" />
        </div>
      </div>
      <div className={styles.bottom}>
        {topThree.map((el) => (
          <div className={styles.currency}>
            <p className={styles.value}>
              {el
                ? el?.symbol + " - " + Number(el?.priceUsd).toFixed(5)
                : "---"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
