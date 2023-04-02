import { FC, useState } from "react";
import styles from "./Header.module.scss";
import { useCurrencies } from "../../hooks/useCurrencies";
import Case from "../Case/Case";
import { useYourCryptos } from "../../hooks/useYourCryptos";

const Header: FC = () => {
  const [isCaseShowed, setIsCaseShowed] = useState<boolean>(false);
  const { topThree } = useCurrencies();
  const { balance, profit } = useYourCryptos();

  const calculateProfit = () => {
    return balance - profit;
  };

  const calculatePercentage = () => {
    if (!balance || !profit) {
      return "0%";
    }
    else if ((balance / profit) * 100 > 100) {
      return `+${((balance / profit) * 100 - 100).toFixed(2)} %`;
    } else {
      return `-${(100 - (balance / profit) * 100).toFixed(2)} %`;
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <h1 className={styles.heading}>Crypto Exchange</h1>
        <div className={styles.personalInfo}>
          <div className={styles.balance}>
            <p className={styles.price}>{balance.toFixed(2)} USDT</p>
            <p className={styles.price}>
              {calculateProfit().toFixed(2)} USDT({calculatePercentage()})
            </p>
          </div>
          <img
            className={styles.case}
            onClick={() => setIsCaseShowed(!isCaseShowed)}
            src="/res/case.png"
            alt="case"
          />
        </div>
        {isCaseShowed && <Case onChange={setIsCaseShowed} />}
      </div>
      <div className={styles.bottom}>
        {topThree.map((el, index) => (
          <div className={styles.currency} key={index}>
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
