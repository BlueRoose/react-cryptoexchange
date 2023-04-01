import { createContext, FC, useEffect, useState } from "react";
import { getOneCurrency } from "../../api/currenciesRequests";
import { Currency, CurrencyContextType, Props } from "./types";
import { useParams } from "react-router-dom";

export const CurrencyContext = createContext<CurrencyContextType>({
  currency: null,
  isCurrencyLoading: true,
});

export const CurrencyProvider: FC<Props> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency | null>(null);
  const [isCurrencyLoading, setIsCurrencyLoading] = useState(true);

  const id = useParams();

  useEffect(() => {
    getOneCurrency(String(id)).then((currency) => {
      setCurrency(currency.rows);
      setIsCurrencyLoading(false);
    });
  }, [id]);

  const value = { currency, isCurrencyLoading };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
