import { FC, useState } from "react";
import styles from "./ModalWindow.module.scss";
import { useYourCryptos } from "../../hooks/useYourCryptos";

interface Props {
  price: string;
  symbol: string;
}

const ModalWindow: FC<Props> = ({ price, symbol }) => {
  const [searchValue, setSearchValue] = useState<number>(0);
  const { setIsBuyWindowShowed, addCryptos } = useYourCryptos();

  const getPrice = () => {
    return Number(searchValue * Number(price)).toFixed(5);
  }

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
        <input type="number" onChange={(event) => setSearchValue(Number(event?.target.value))} required />
        <p>Price: {getPrice()} USDT</p>
      </div>
      <button onClick={() => addCryptos({symbol: symbol, amount: searchValue, price: Number(getPrice())})}>Buy</button>
    </div>
  );
};

export default ModalWindow;
