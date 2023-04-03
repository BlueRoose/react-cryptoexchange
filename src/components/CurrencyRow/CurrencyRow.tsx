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

  const handleAddButtonClick = () => {
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
      <button onClick={handleAddButtonClick}>+</button>
    </div>
  );
};

export default CurrencyRow;
