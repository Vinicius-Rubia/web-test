import { InventoryState } from "@/interfaces/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InventoryState = {
  actionsSelected: [],
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setActionsSelected(state, { payload }: { payload: InventoryState["actionsSelected"] }) {
      return { ...state, actionsSelected: payload };
    },
  },
});

export const { setActionsSelected } = inventorySlice.actions;

export default inventorySlice.reducer;
