import { configureStore } from "@reduxjs/toolkit";
import achatReducer from "./features/AchatSlice";

import coursesReducer from "./features/CoursesSlice";



const store = configureStore({
  reducer: {
    Achats: achatReducer,
    Course: coursesReducer,

  },
});


export default store;
