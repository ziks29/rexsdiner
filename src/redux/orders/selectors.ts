import { RootState } from "../store";

export const selectOrders = (state: RootState) => state.orders.orders;
export const selectIsOrderHistoryOpen = (state: RootState) =>
  state.orders.isOrderHistoryOpen;
