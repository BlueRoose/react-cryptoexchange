import { ChangeEvent, FC, useState } from "react";
import styles from "./ModalWindow.module.scss";
import { useYourCryptos } from "../../hooks/useYourCryptos";

interface Props {
  price: string;
  symbol: string;
}

const ModalWindow: FC<Props> = ({ price, symbol }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { setIsBuyWindowShowed, addCryptos } = useYourCryptos();

  const getPrice = () => {
    return Number(Number(searchValue) * Number(price)).toFixed(5);
  };

  const handleClickAdd = () => {
    if (searchValue === "" || searchValue === "0") {
      alert("Amount couldn't be empty, negative or zero!");
    } else {
      addCryptos({
        symbol: symbol,
        amount: Number(searchValue),
        price: Number(getPrice()),
      });
      setIsBuyWindowShowed(false);
    }
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.includes("-")) {
      event.target.value = "";
      alert("Amount couldn't be negative!");
    } else {
      setSearchValue(event?.target.value);
    }
  };

  const handleClickCross = () => {
    setIsBuyWindowShowed(false);
  }

  return (
    <div className={styles.modalWindow}>
      <div className={styles.head}>
        <p>Buy crypto</p>
        <button
          onClick={handleClickCross}
          className={styles.cross}
        >
          X
        </button>
      </div>
      <div className={styles.buyArea}>
        <p>Enter amount: </p>
        <input
          type="number"
          onChange={(event) => handleChangeInput(event)}
          required
        />
        <p>Price: {getPrice()} USDT</p>
      </div>
      <button onClick={handleClickAdd}>Buy</button>
    </div>
  );
};

export default ModalWindow;
