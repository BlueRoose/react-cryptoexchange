import Router from "./Router/Router";
import { CurrenciesProvider } from "./providers/Currencies/CurrenciesProvider";

function App() {
  return (
    <div className="App">
      <CurrenciesProvider>
        <Router />
      </CurrenciesProvider>
    </div>
  );
}

export default App;
