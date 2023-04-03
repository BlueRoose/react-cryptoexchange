import { createContext, FC, useState, useEffect } from "react";
import { Currency, YourCryptosContextType, Props } from "./types";
import { useCurrencies } from "../../hooks/useCurrencies";

export const YourCryptosContext = createContext<YourCryptosContextType>({
  yourCryptos: [],
  addCryptos: (crypto) => {},
  removeCryptos: (symbol) => {},
  isBuyWindowShowed: false,
  setIsBuyWindowShowed: (state) => {},
  currentBalance: 0,
  oldBalance: 0,
});

export const YourCryptosProvider: FC<Props> = ({ children }) => {
  const [yourCryptos, setYourCryptos] = useState<Currency[]>([]);
  const [isBuyWindowShowed, setIsBuyWindowShowed] = useState<boolean>(false);
  const [currentBalance, setCurrentBalance] = useState<number>(0);
  const [oldBalance, setOldBalance] = useState<number>(0);

  const { currencies } = useCurrencies();

  useEffect(() => {
    if (localStorage.getItem("cryptos") !== null) {
      setYourCryptos([
        ...JSON.parse(localStorage.getItem("cryptos") as string),
      ]);
    } else {
      localStorage.setItem("cryptos", "[]");
    }
  }, []);

  useEffect(() => {
    setCurrentBalance(
      yourCryptos.reduce(
        (sum: number, element: Currency) =>
          (sum +=
            Number(
              currencies?.find((el) => el.symbol === element.symbol)?.priceUsd
            ) * element.amount),
        0
      )
    );
    setOldBalance(
      yourCryptos.reduce(
        (sum: number, element: Currency) => (sum += element.price),
        0
      )
    );
  }, [currencies, yourCryptos]);

  function addCryptos(crypto: Currency) {
    let arr = yourCryptos;
    if (arr.some((el) => el.symbol === crypto.symbol)) {
      arr.map((element) => {
        if (element.symbol === crypto.symbol) {
          element.price += crypto.price;
          element.amount += crypto.amount;
        }
      });
    } else {
      return arr.push(crypto);
    }
    setYourCryptos(arr);
    setCurrentBalance(
      yourCryptos.reduce(
        (sum: number, element: Currency) =>
          (sum +=
            Number(
              currencies?.find((el) => el.symbol === element.symbol)?.priceUsd
            ) * element.amount),
        0
      )
    );
    setOldBalance(
      yourCryptos.reduce(
        (sum: number, element: Currency) => (sum += element.price),
        0
      )
    );
    localStorage.setItem("cryptos", JSON.stringify(yourCryptos));
  }

  function removeCryptos(symbol: string) {
    setYourCryptos((prev) => prev.filter((el) => el.symbol !== symbol));
    localStorage.setItem(
      "cryptos",
      JSON.stringify(yourCryptos.filter((el) => el.symbol !== symbol))
    );
  }

  const value = {
    yourCryptos,
    addCryptos,
    removeCryptos,
    isBuyWindowShowed,
    setIsBuyWindowShowed,
    currentBalance,
    oldBalance,
  };

  return (
    <YourCryptosContext.Provider value={value}>
      {children}
    </YourCryptosContext.Provider>
  );
};
