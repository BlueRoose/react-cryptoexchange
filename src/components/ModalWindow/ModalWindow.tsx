import { FC } from "react";
import styles from "./ModalWindow.module.scss";

const ModalWindow: FC = () => {
  return (
    <div className={styles.modalWindow}>
      <div className={styles.head}>
        <p>Покупка криптовалюты</p>
        <p className={styles.cross}>X</p>
      </div>
      <div className={styles.buyArea}>
        <p>Введите количество: </p>
        <input type="number" required />
        <p>Стоимость: 1000 USDT</p>
      </div>
      <button>Купить</button>
    </div>
  );
};

export default ModalWindow;
