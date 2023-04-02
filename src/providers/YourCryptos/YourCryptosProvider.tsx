import { createContext, FC, useState } from "react";
import { Currencies, YourCryptosContextType, Props } from "./types";

export const YourCryptosContext = createContext<YourCryptosContextType>({
  yourCryptos: [],
  setYourCryptos: (crypto) => {},
  isBuyWindowShowed: false,
  setIsBuyWindowShowed: (state) => {},
});

export const YourCryptosProvider: FC<Props> = ({ children }) => {
  const [yourCryptos, setYourCryptos] = useState<Currencies[]>([]);
  const [isBuyWindowShowed, setIsBuyWindowShowed] = useState<boolean>(false);

  const value = {
    yourCryptos,
    setYourCryptos,
    isBuyWindowShowed,
    setIsBuyWindowShowed,
  };

  return (
    <YourCryptosContext.Provider value={value}>
      {children}
    </YourCryptosContext.Provider>
  );
};
