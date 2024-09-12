import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import MarketListPage from "./routes";
import MarketDetailPage from "./routes/market/marketDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MarketListPage />} />
          <Route path="/market" element={<MarketListPage />} />
          <Route path="/market/:marketId" element={<MarketDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
