import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./slices/inventory-slice";
import projectsSliceReducer from "./slices/projects-slice";

export const store = configureStore({
  reducer: {
    inventoryModel: inventoryReducer,
    projectsModel: projectsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
