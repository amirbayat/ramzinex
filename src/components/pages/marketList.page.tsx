import React from "react";
import { useGetMarketList } from "../../hooks/marketList.hook";
import Search from "../market/search";
import Header from "../common/header";
import SortMarket from "../market/sortMarket";
import MarketList from "../market/marketList";

const MarketListPage = () => {
  const {
    markets,
    isLoading,
    sortItem,
    sortType,
    search,
    setSortItem,
    setSortType,
    setSearch,
  } = useGetMarketList();
  return (
    <>
      <Header search={<Search />} />
      <SortMarket />
      <MarketList markets={markets} />
    </>
  );
};

export default MarketListPage;
