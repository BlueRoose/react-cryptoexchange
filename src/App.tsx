import Router from "./Router/Router";
import { CurrenciesProvider } from "./providers/Currencies/CurrenciesProvider";
import { CurrencyProvider } from "./providers/CurrentCurrency/CurrentCurrencyProvider";

function App() {
  return (
    <div className="App">
      <CurrenciesProvider>
        <CurrencyProvider>
          <Router />
        </CurrencyProvider>
      </CurrenciesProvider>
    </div>
  );
}

export default App;
