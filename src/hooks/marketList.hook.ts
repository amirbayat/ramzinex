import { useEffect, useState } from "react";
import { useGetMarketListQuery } from "../store/services/market/marketListApi.service";
import { TMarketListItem, TSortItem, TSortType } from "types/market";

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
export const useGetMarketList = () => {
  const [sortItem, setSortItem] = useState<TSortItem>(null);
  const [sortType, setSortType] = useState<TSortType>(null);
  const [search, setSearch] = useState("");
  const [markets, setMarkets] = useState<TMarketListItem[]>([]);
  // const { data, error, isLoading } = useGetMarketListQuery(undefined, {
  //   refetchOnMountOrArgChange: fetch,
  // });
  const { data, error, isLoading } = useGetMarketListQuery();

  useEffect(() => {
    setMarkets(JSON.parse(JSON.stringify(data?.data ?? [])));
  }, [JSON.stringify(data?.data ?? [])]);

  // if (search) {
  //   markets = markets?.filter((market) => market.name.fa.includes(search));
  // }

  useEffect(() => {
    if (sortItem) {
      if (window.Worker) {
        const worker = new Worker(
          new URL("../workers/sortWorker.js", import.meta.url)
        );
        worker.postMessage({ markets, sortItem, sortType });
        worker.onmessage = function (e) {
          setMarkets(e.data);
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
        setMarkets(sortedMarkets);
      }
    }
  }, [sortItem, sortType]);

  return {
    markets,
    isLoading,
    sortItem,
    setSortItem,
    sortType,
    setSortType,
    search,
    setSearch,
  };
};
