import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TMarketList } from "../../../types/market";
import { Urls } from "../../../utils/urls";

export const marketListApi = createApi({
  reducerPath: "marketList",
  baseQuery: fetchBaseQuery({ baseUrl: Urls.baseUrl }),
  endpoints: (builder) => ({
    getMarketList: builder.query<TMarketList, unknown>({
      query: () => Urls.getMarketList,
    }),
  }),
});

export const { useGetMarketListQuery } = marketListApi;
