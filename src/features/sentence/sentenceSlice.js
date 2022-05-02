import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("sentence/fetchTodos", async () => {
  const response = await axios.get("https://gorest.co.in/public/v2/todos");
  return response.data;
});

export const fetchMovies = createAsyncThunk(
  "sentence/fetchMovies",
  async (input) => {
    let dohvaceniFilmovi = await fetch(
      `https://api.tvmaze.com/search/shows?q=${input}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return dohvaceniFilmovi;
  }
);

export const sentenceSlice = createSlice({
  name: "sentence",
  initialState: {
    input: "",
    totalSentence: "",
    todos: [],
    movies: [],
  },
  reducers: {
    handleInputChange: (state, action) => {
      console.log(action);
      state.input = action.payload;
    },
    addWordToSentence: (state, action) => {
      console.log(action);
      if (action.payload) {
        state.totalSentence = state.totalSentence + " " + action.payload;
      } else {
        state.totalSentence = state.totalSentence + " " + state.input;
      }
      state.input = "";
    },
    loadTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.todos = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(fetchMovies.pending, (state, action) => {
        state.movies = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export const { handleInputChange, addWordToSentence, loadTodos } =
  sentenceSlice.actions;

export default sentenceSlice.reducer;
