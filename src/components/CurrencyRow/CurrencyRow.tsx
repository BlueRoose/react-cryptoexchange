import { FC } from "react";
import styles from "./CurrencyRow.module.scss";
import { useYourCryptos } from "../../hooks/useYourCryptos";
import { Link } from "react-router-dom";

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
  const { setIsBuyWindowShowed, setSymbol, setPrice } = useYourCryptos();

  const handleAddButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSymbol(name);
    setPrice(price);
    setIsBuyWindowShowed(true);
  };

  return (
    <div className={styles.currencyRow}>
      <Link to={"/currency/" + name}>
        <p>{rank}</p>
        <p>{name}</p>
        <p>{fullname}</p>
        <p className={styles.hide}>{percentage}</p>
        <p className={styles.hide}>{volume}</p>
        <p>{price}</p>
      </Link>
      <button onClick={handleAddButtonClick}>+</button>
    </div>
  );
};

export default CurrencyRow;
