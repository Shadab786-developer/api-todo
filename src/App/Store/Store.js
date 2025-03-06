import { configureStore } from "@reduxjs/toolkit";

import MainitemReducer from "../../Feactures/Mainitem.slice/Mainitem";
import authReducer from "../../Feactures/Authentication/AuthSlice";

export const store = configureStore({
  // Combine different reducers for different features
  reducer: {
    mainItem: MainitemReducer,
    auth: authReducer,
  },
});
