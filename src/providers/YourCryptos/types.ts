export type Currencies = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
};

export type Props = {
  children: JSX.Element;
};

export interface YourCryptosContextType {
  yourCryptos: Currencies[];
  setYourCryptos: (crypto: Currencies[]) => void;
  isBuyWindowShowed: boolean;
  setIsBuyWindowShowed: (state: boolean) => void;
}
