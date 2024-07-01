import { createSlice } from "@reduxjs/toolkit";

const loadThemeFromLocalStorage = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === null) {
    return true;
  }

  return savedTheme === "false" ? false : true;
};

const initialState = {
  theme: loadThemeFromLocalStorage(), // true --> light mode    false --> dark mode
};

const saveThemeToLocalStorage = (theme) => {
  localStorage.setItem("theme", theme);
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    lightMode: (state) => {
      state.theme = true;
      saveThemeToLocalStorage(true);
    },
    darkMode: (state) => {
      state.theme = false;
      saveThemeToLocalStorage(false);
    },
  },
});

export default themeSlice.reducer;

export const { lightMode, darkMode } = themeSlice.actions;
