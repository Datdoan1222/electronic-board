import { configureStore } from "@reduxjs/toolkit";
import user from "./user/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import cons from "./cons/consSlice";

export const store = configureStore({
  reducer: {
    user,
    cons,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

setupListeners(store.dispatch);
