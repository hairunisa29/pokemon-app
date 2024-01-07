import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionItems: [],
};

function getStoredCollection() {
  const collectionString = localStorage.getItem("collection");

  if (collectionString) {
    return {
      collectionItems: JSON.parse(collectionString),
    };
  }

  return { ...initialState };
}

const collectionSlice = createSlice({
  name: "collection",
  initialState: getStoredCollection(),
  reducers: {
    addItem: (state, action) => {
      state.collectionItems.push({ ...action.payload });
      localStorage.setItem("collection", JSON.stringify(state.collectionItems));
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== id);
    },
  },
});

export const { addItem, removeItem } = collectionSlice.actions;
export default collectionSlice.reducer;
