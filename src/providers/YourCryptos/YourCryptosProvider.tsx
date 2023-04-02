import { createContext, FC, useState, useEffect } from "react";
import { Currency, YourCryptosContextType, Props } from "./types";
import { useCurrencies } from "../../hooks/useCurrencies";

export const YourCryptosContext = createContext<YourCryptosContextType>({
  yourCryptos: [],
  addCryptos: (crypto) => {},
  isBuyWindowShowed: false,
  setIsBuyWindowShowed: (state) => {},
  balance: 0,
  profit: 0,
});

export const YourCryptosProvider: FC<Props> = ({ children }) => {
  const [yourCryptos, setYourCryptos] = useState<Currency[]>([]);
  const [isBuyWindowShowed, setIsBuyWindowShowed] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  const { currencies } = useCurrencies();

  useEffect(() => {
    if (localStorage.getItem("cryptos") !== null) {
      setYourCryptos([...JSON.parse(localStorage.getItem("cryptos") as string)]);
    } else {
      localStorage.setItem("cryptos", "[]");
    }
    setBalance(
      yourCryptos?.reduce(
        (sum: number, element: Currency) =>
          (sum +=
            Number(
              currencies?.find((el) => el.symbol === element.symbol)?.priceUsd
            ) * element.amount),
        0
      )
    );
    setProfit(
      yourCryptos?.reduce(
        (sum: number, element: Currency) => (sum += element.price),
        0
      )
    );
  }, []);

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
      arr.push(crypto);
    }
    setYourCryptos(arr);
    localStorage.setItem("cryptos", JSON.stringify(yourCryptos));
    setBalance(
      yourCryptos.reduce(
        (sum: number, element: Currency) =>
          (sum +=
            Number(
              currencies?.find((el) => el.symbol === element.symbol)?.priceUsd
            ) * element.amount),
        0
      )
    );
    setProfit(
      yourCryptos.reduce(
        (sum: number, element: Currency) => (sum += element.price),
        0
      )
    );
  }

  const value = {
    yourCryptos,
    addCryptos,
    isBuyWindowShowed,
    setIsBuyWindowShowed,
    balance,
    profit,
  };

  return (
    <YourCryptosContext.Provider value={value}>
      {children}
    </YourCryptosContext.Provider>
  );
};
