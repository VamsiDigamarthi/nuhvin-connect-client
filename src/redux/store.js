import { configureStore } from "@reduxjs/toolkit";

import theme from "./features/colorChange";

const store = configureStore({
  reducer: {
    theme: theme,
  },
});

export default store;
