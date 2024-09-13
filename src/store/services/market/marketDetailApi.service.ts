import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  TMarketDetail,
  TMarketItem,
  TMarketList,
} from "../../../types/market";
import { Urls } from "../../../utils/urls";

export const marketDetailApi = createApi({
  reducerPath: "marketDetail",
  baseQuery: fetchBaseQuery({ baseUrl: Urls.baseUrl }),
  endpoints: (builder) => ({
    getMarketDetail: builder.query<TMarketDetail, string>({
      query: (id) => `${Urls.getMarketList}/${id}`,
    }),
  }),
});

export const { useGetMarketDetailQuery } = marketDetailApi;
