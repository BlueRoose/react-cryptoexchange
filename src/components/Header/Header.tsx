import { FC, useState } from "react";
import styles from "./Header.module.scss";
import { useCurrencies } from "../../hooks/useCurrencies";
import Case from "../Case/Case";

const Header: FC = () => {
  const [isCaseShowed, setIsCaseShowed] = useState<boolean>(false);
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
