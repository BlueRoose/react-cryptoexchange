import { FC, useState, useEffect } from "react";
import styles from "./CurrencyPage.module.scss";
import Header from "../../components/Header/Header";
import { useCurrencies } from "../../hooks/useCurrencies";
import { useParams } from "react-router-dom";
import { getCurrencysHistory } from "../../api/currenciesRequests";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { useYourCryptos } from "../../hooks/useYourCryptos";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

interface History {
  priceUsd: string;
  time: number;
  date: string;
}

const CurrencyPage: FC = () => {
  const { currencies } = useCurrencies();
  const { id } = useParams();
  const { setIsBuyWindowShowed, isBuyWindowShowed } = useYourCryptos();
  const currency = currencies.filter((curr) => curr.symbol === id)[0];
  const [history, setHistory] = useState<History[]>([]);

  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
  );

  useEffect(() => {
    getCurrencysHistory(currency?.id).then((hist) => {
      setHistory(hist);
    });
  }, [currency?.id]);

  function capitalize() {
    if (!currency?.id) return currency?.id;

    return currency?.id[0].toUpperCase() + currency?.id.slice(1);
  }

  const chartData = {
    labels: history.map((hist: History) => {
      return hist.date;
    }),
    datasets: [
      {
        label: `${currency?.symbol} to USDT`,
        data: history.map((hist: History) => {
          return hist.priceUsd;
        }),
        color: "#fff",
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      {isBuyWindowShowed && (
        <>
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "absolute",
              backgroundColor: "#000000",
              opacity: "0.8",
              zIndex: "1",
            }}
          ></div>
          <ModalWindow symbol={currency.symbol} price={currency.priceUsd} />
        </>
      )}
      <Header />
      {currency ? (
        <div className={styles.main}>
          <div className={styles.left}>
            <h2>{capitalize() + " " + currency?.symbol}</h2>
            <p>Current price:</p>
            <p>
              1 {currency?.symbol} - {Number(currency?.priceUsd).toFixed(7)}{" "}
              USDT
            </p>
            <button onClick={() => setIsBuyWindowShowed(true)}>
              Buy {currency?.symbol}
            </button>
          </div>
          <div className={styles.graph}>
            <Line data={chartData} options={options} />
          </div>
        </div>
      ) : (
        <h1 className={styles.sorry}>
          Your currency is loading. Please hold on a second.
        </h1>
      )}
    </div>
  );
};

export default CurrencyPage;
