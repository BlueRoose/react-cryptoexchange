import { FC } from "react";
import styles from "./MainPage.module.scss";
import Header from "../../components/Header/Header";
import CurrencyRow from "../../components/CurrencyRow/CurrencyRow";
import { useCurrencies } from "../../hooks/useCurrencies";
import usePagination from "../../hooks/usePagination";
import { Currencies } from "../../providers/Currencies/types";
import { Link } from "react-router-dom";
import { useYourCryptos } from "../../hooks/useYourCryptos";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

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
      {currencies.length ? (
        <>
          <div className={styles.head}>
            <p>Rank</p>
            <p>Symbol</p>
            <p>Name</p>
            <p className={styles.hide}>Trades for 24 hr</p>
            <p className={styles.hide}>Volume for 24 hr</p>
            <p>Price(USDT)</p>
          </div>
          <div className={styles.rows}>
            {currencies
              ?.slice(firstContentIndex, lastContentIndex)
              .map((currency: Currencies) => (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "block",
                    maxWidth: "fit-content",
                    margin: "0 auto",
                  }}
                  key={currency.rank}
                  to={"/currency/" + currency.symbol}
                >
                  <CurrencyRow
                    rank={currency.rank}
                    name={currency.symbol}
                    fullname={currency.id}
                    percentage={
                      String(Number(currency.changePercent24Hr).toFixed(2)) +
                      "%"
                    }
                    volume={String(Number(currency.volumeUsd24Hr).toFixed(0))}
                    price={String(Number(currency.priceUsd).toFixed(5))}
                  />
                </Link>
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
        </>
      ) : (
        <h1 className={styles.sorry}>
          Your currencies are loading. Please hold on a second.
        </h1>
      )}
    </div>
  );
};

export default MainPage;
