export type Currency = {
  symbol: string;
  amount: number;
  price: number;
};

export type Props = {
  children: JSX.Element;
};

export interface YourCryptosContextType {
  yourCryptos: Currency[];
  addCryptos: (crypto: Currency) => void;
  isBuyWindowShowed: boolean;
  setIsBuyWindowShowed: (state: boolean) => void;
  balance: number;
  profit: number;
}
