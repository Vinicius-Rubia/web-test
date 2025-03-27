import { configureStore } from "@reduxjs/toolkit";
import inventorReducer from "./slices/inventory-slice";

export const store = configureStore({
  reducer: {
    inventory: inventorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
