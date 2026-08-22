import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "dark" | "light";

interface ThemeState {
  value: Theme;
}

// Default matches the inline no-flash script in app/layout.tsx, which reads
// localStorage before hydration and toggles the <html class="light"> attr.
const initialState: ThemeState = {
  value: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.value = state.value === "dark" ? "light" : "dark";
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.value = action.payload;
    },
    // Called once on mount to sync redux with whatever the no-flash script
    // already applied to <html>, so we never fight the DOM after hydration.
    hydrateFromDom(state) {
      if (typeof document === "undefined") return;
      state.value = document.documentElement.classList.contains("light")
        ? "light"
        : "dark";
    },
  },
});

export const { toggleTheme, setTheme, hydrateFromDom } = themeSlice.actions;
export default themeSlice.reducer;
