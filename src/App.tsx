import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";

import MarketListPage from "./routes";
import MarketDetailPage from "./routes/market/marketDetail";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<MarketListPage />} />
            <Route path="/market" element={<MarketListPage />} />
            <Route path="/market/:marketId" element={<MarketDetailPage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
