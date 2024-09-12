import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
// import marketListReducer from "./reducers/market/marketList.reducer";
import { marketListApi } from "./services/market/marketListApi.service";
export const store = configureStore({
  reducer: {
    [marketListApi.reducerPath]: marketListApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
