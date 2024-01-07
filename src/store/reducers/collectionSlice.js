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
      const { name, nickname } = action.payload;
      state.collectionItems = state.collectionItems.filter(
        (item) => item.name !== name && item.alias !== nickname
      );
      localStorage.setItem("collection", JSON.stringify(state.collectionItems));
    },
  },
});

export const { addItem, removeItem } = collectionSlice.actions;
export default collectionSlice.reducer;
