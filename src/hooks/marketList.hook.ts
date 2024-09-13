import { useEffect, useRef, useState } from "react";
import { useGetMarketListQuery } from "../store/services/market/marketListApi.service";
import { TMarketListItem, TSortItem, TSortType } from "types/market";
import { Debounce } from "utils/debounce";

// type TMarketListArgs = {
//   sort?: {
//     sortItem?: "name" | "price" | null;
//     sortType?: "asc" | "desc" | null;
//   };
//   search?: string | null;
//   fetch?: boolean;
// };

// const defaultArgs: TMarketListArgs = {
//   sort: {
//     sortItem: null,
//     sortType: null,
//   },
//   search: null,
//   fetch: true,
// };

// export const useGetMarketList = (args: TMarketListArgs = defaultArgs) => {

const SEARCH_DEBOUNCE_DELAY = 500;
export const useGetMarketList = () => {
  const { data, error, isLoading } = useGetMarketListQuery();

  const [sortItem, setSortItem] = useState<TSortItem>(null);
  const [sortType, setSortType] = useState<TSortType>(null);
  const [search, setSearch] = useState("");
  const [markets, setMarkets] = useState<TMarketListItem[]>(data?.data ?? []);
  const [marketsToShow, setMarketsToShow] = useState<TMarketListItem[]>(
    data?.data ?? []
  );

  const searchEffectFirstRun = useRef(true);
  // const { data, error, isLoading } = useGetMarketListQuery(undefined, {
  //   refetchOnMountOrArgChange: fetch,
  // });

  useEffect(() => {
    setMarkets(JSON.parse(JSON.stringify(data?.data ?? [])));
    setMarketsToShow(JSON.parse(JSON.stringify(data?.data ?? [])));
  }, [JSON.stringify(data?.data ?? [])]);

  // if (search) {
  //   markets = markets?.filter((market) => market.name.fa.includes(search));
  // }

  const searchMarket = (searchValue: string) => {
    if (window.Worker) {
      const worker = new Worker(
        new URL("../workers/searchWorker.js", import.meta.url)
      );
      worker.postMessage({ markets, searchValue });
      worker.onmessage = function (e) {
        setMarketsToShow(e.data);
        worker.terminate();
      };
      worker.onerror = function (error) {
        console.error("Worker error:", error);
        worker.terminate();
      };
    } else {
      let searchedMarkets = markets.filter(
        (market) =>
          market.name.fa.includes(searchValue) ||
          market.name.en.includes(searchValue)
      );
      setMarketsToShow(searchedMarkets);
    }
  };
  const searchMarketDebounce = Debounce(searchMarket, SEARCH_DEBOUNCE_DELAY, [
    JSON.stringify(markets),
  ]);

  useEffect(() => {
    if (search) {
      searchMarketDebounce(search);
      searchEffectFirstRun.current = false;
    } else if (search == "" && !searchEffectFirstRun.current) {
      setMarketsToShow(markets);
    }
  }, [search]);

  useEffect(() => {
    if (sortItem) {
      if (window.Worker) {
        const worker = new Worker(
          new URL("../workers/sortWorker.js", import.meta.url)
        );
        worker.postMessage({ markets, sortItem, sortType });
        worker.onmessage = function (e) {
          setMarketsToShow(e.data);
          worker.terminate();
        };
        worker.onerror = function (error) {
          console.error("Worker error:", error);
          worker.terminate();
        };
      } else {
        let sortedMarkets: TMarketListItem[] = [];
        if (sortItem == "name") {
          sortedMarkets = markets?.sort((a, b) => {
            if (a.name.en < b.name.en) {
              return sortType == "asc" ? -1 : 1;
            } else if (a.name.en > b.name.en) {
              return sortType == "asc" ? 1 : -1;
            } else {
              return 0;
            }
          });
        } else if (sortItem == "price") {
          sortedMarkets = markets?.sort((a, b) => {
            if (a.buy < b.buy) {
              return sortType == "asc" ? -1 : 1;
            } else if (a.buy > b.buy) {
              return sortType == "asc" ? 1 : -1;
            } else {
              return 0;
            }
          });
        }
        setMarketsToShow(sortedMarkets);
      }
    }
  }, [sortItem, sortType]);

  return {
    markets: marketsToShow,
    isLoading,
    sortItem,
    setSortItem,
    sortType,
    setSortType,
    search,
    setSearch,
  };
};
