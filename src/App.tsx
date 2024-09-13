import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./utils/i18n";
import "./App.scss";

import MarketListPage from "./routes";
import MarketDetailPage from "./routes/market/marketDetail";
import { DarkModeContext, useDarkMode } from "hooks/useDarkMode";

function App() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  return (
    <div className="App">
      <Provider store={store}>
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <Router>
            <Routes>
              <Route path="/" element={<MarketListPage />} />
              <Route path="/market" element={<MarketListPage />} />
              <Route path="/market/:marketId" element={<MarketDetailPage />} />
            </Routes>
          </Router>
        </DarkModeContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
