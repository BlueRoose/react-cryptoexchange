import { FC } from "react";
import styles from "./CurrencyRow.module.scss";
import { useYourCryptos } from "../../hooks/useYourCryptos";

interface Props {
  rank: string;
  name: string;
  fullname: string;
  percentage: string;
  volume: string;
  price: string;
}

const CurrencyRow: FC<Props> = ({
  rank,
  name,
  fullname,
  percentage,
  volume,
  price,
}) => {
  const { setIsBuyWindowShowed } = useYourCryptos();

  const handleClick = (event: MouseEvent) => {
    console.log(1);
    event.preventDefault();
    setIsBuyWindowShowed(true);
  };

  return (
    <div className={styles.currencyRow}>
      <p>{rank}</p>
      <p>{name}</p>
      <p>{fullname}</p>
      <p className={styles.hide}>{percentage}</p>
      <p className={styles.hide}>{volume}</p>
      <p>{price}</p>
      <img
        onClick={(event) => handleClick(event.nativeEvent)}
        src="res/plus.png"
        alt="plus"
      />
    </div>
  );
};

export default CurrencyRow;
