import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "../counter/counterSlice";

export const sentenceSlice = createSlice({
  name: "sentence",
  initialState: {
    input: "",
    totalSentence: "",
  },
  reducers: {
    handleInputChange: (state, action) => {
      state.input = action.payload;
    },
    addWordToSentence: (state) => {
      state.totalSentence = state.totalSentence + " " + state.input;
      state.input = "";
    },
  },
});

export const { handleInputChange, addWordToSentence } = sentenceSlice.actions;

export default sentenceSlice.reducer;
