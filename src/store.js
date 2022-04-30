import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import sentenceSlice from "./features/sentence/sentenceSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    sentence: sentenceSlice,
  },
});
