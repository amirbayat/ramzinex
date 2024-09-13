import React from "react";
import { useGetMarketList } from "../../hooks/marketList.hook";
import Search from "../market/search/search";
import Header from "../common/header/header";
import SortMarket from "../market/sortMarket/sortMarket";
import MarketList from "../market/marketList";
import Layout from "components/common/layout/layout";

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
    <Layout>
      <Header
        search={<Search searchValue={search} changeSearchValue={setSearch} />}
      />
      <SortMarket
        sortItem={sortItem}
        sortType={sortType}
        setSortItem={setSortItem}
        setSortType={setSortType}
      />

      <MarketList markets={markets} isLoading={isLoading} />
    </Layout>
  );
};

export default MarketListPage;
