import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
// import marketListReducer from "./reducers/market/marketList.reducer";
import { marketListApi } from "./services/market/marketListApi.service";
import { marketDetailApi } from "./services/market/marketDetailApi.service";

export const store = configureStore({
  reducer: {
    [marketListApi.reducerPath]: marketListApi.reducer,
    [marketDetailApi.reducerPath]: marketDetailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(marketListApi.middleware)
      .concat(marketDetailApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
