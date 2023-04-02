import { FC } from "react";
import styles from "./ModalWindow.module.scss";
import { useYourCryptos } from "../../hooks/useYourCryptos";

const ModalWindow: FC = () => {
  const { setIsBuyWindowShowed } = useYourCryptos();
  return (
    <div className={styles.modalWindow}>
      <div className={styles.head}>
        <p>Buy crypto</p>
        <p onClick={() => setIsBuyWindowShowed(false)} className={styles.cross}>
          X
        </p>
      </div>
      <div className={styles.buyArea}>
        <p>Enter amount: </p>
        <input type="number" required />
        <p>Price: 1000 USDT</p>
      </div>
      <button>Buy</button>
    </div>
  );
};

export default ModalWindow;
