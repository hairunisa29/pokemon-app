import { configureStore } from "@reduxjs/toolkit";
import collectionSlice from "./reducers/collectionSlice";

const store = configureStore({
  reducer: {
    collection: collectionSlice,
  },
});

export default store;