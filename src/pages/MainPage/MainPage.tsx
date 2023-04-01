import { FC } from "react";
import styles from "./MainPage.module.scss";
import Header from "../../components/Header/Header";
import CurrencyRow from "../../components/CurrencyRow/CurrencyRow";
import { useCurrencies } from "../../hooks/useCurrencies";
import usePagination from "../../hooks/usePagination";
import { Currencies } from "../../providers/Currencies/types";

const MainPage: FC = () => {
  const { currencies } = useCurrencies();
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    setPage,
    totalPages,
    page,
  } = usePagination({
    contentPerPage: 10,
    count: currencies?.length,
  });

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.head}>
        <p>Rank</p>
        <p>Symbol</p>
        <p>Name</p>
        <p className={styles.hide}>Trades for 24 hr</p>
        <p className={styles.hide}>Volume for 24 hr</p>
        <p>Price(USTD)</p>
      </div>
      <div className={styles.rows}>
        {currencies
          ?.slice(firstContentIndex, lastContentIndex)
          .map((currency: Currencies) => (
            <CurrencyRow
              key={currency.rank}
              rank={currency.rank}
              name={currency.symbol}
              fullname={currency.id}
              percentage={
                String(Number(currency.changePercent24Hr).toFixed(2)) + "%"
              }
              volume={String(Number(currency.volumeUsd24Hr).toFixed(0))}
              price={String(Number(currency.priceUsd).toFixed(7))}
            />
          ))}
      </div>
      <div className={styles.buttons}>
        <button onClick={prevPage}>{"<"}</button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pg) => (
            <button
              className={page === pg ? styles.active : ""}
              key={pg}
              onClick={() => setPage(pg)}
            >
              {pg}
            </button>
          )
        )}
        <button onClick={nextPage}>{">"}</button>
      </div>
    </div>
  );
};

export default MainPage;
