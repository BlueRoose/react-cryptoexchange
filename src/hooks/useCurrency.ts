import { useContext } from "react";
import { CurrencyContext } from "../providers/CurrentCurrency/CurrentCurrencyProvider";

export function useCurrency() {
  return useContext(CurrencyContext);
}
