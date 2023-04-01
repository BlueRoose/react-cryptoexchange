import { createContext, FC, useEffect, useState } from "react";
import { getCurrencies } from "../../api/currenciesRequests";
import { Currencies, CurrenciesContextType, Props } from "./types";

export const CurrenciesContext = createContext<CurrenciesContextType>({
  currencies: [],
  count: 0,
  isCurrenciesLoading: true,
  topThree: [],
});

export const CurrenciesProvider: FC<Props> = ({ children }) => {
  const [currencies, setCurrencies] = useState<Currencies[]>([]);
  const [topThree, setTopThree] = useState<Currencies[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isCurrenciesLoading, setIsCurrenciesLoading] = useState(true);

  useEffect(() => {
    getCurrencies().then((currencies) => {
      setCurrencies(currencies);
      setCount(currencies.count);
      setIsCurrenciesLoading(false);
      setTopThree(currencies.slice(3, currencies.length));
    });
  }, []);

  const value = { currencies, count, isCurrenciesLoading, topThree };

  return (
    <CurrenciesContext.Provider value={value}>
      {children}
    </CurrenciesContext.Provider>
  );
};
