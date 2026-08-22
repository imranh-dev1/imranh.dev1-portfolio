import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/slices/themeSlice";
import experienceReducer from "@/lib/slices/experienceSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      theme: themeReducer,
      experience: experienceReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];