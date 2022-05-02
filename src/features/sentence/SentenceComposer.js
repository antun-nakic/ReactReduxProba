import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleInputChange,
  addWordToSentence,
  loadTodos,
  fetchTodos,
  fetchMovies,
} from "./sentenceSlice";
import axios from "axios";

const SentenceComposer = () => {
  const sentence = useSelector((state) => {
    console.log(state);
    return state.sentence;
  });
  const dispatch = useDispatch();
  const referencaInputa = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWordToSentence());
  };

  async function ucitajAsinkrono() {
    try {
      let response = await axios.get("https://gorest.co.in/public/v2/todos");
      dispatch(loadTodos(response.data));
    } catch (error) {
      dispatch(loadTodos(error));
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          ref={referencaInputa}
          onChange={() =>
            dispatch(handleInputChange(referencaInputa.current.value))
          }
          value={sentence.input}></input>
      </form>
      <button onClick={() => ucitajAsinkrono()}>
        Učitaj asinkrono todo iteme
      </button>
      <button onClick={() => dispatch(fetchTodos())}>
        Učitaj asinkrono u akscijskoj fuknici todo iteme
      </button>
      <button
        onClick={() => dispatch(fetchMovies(referencaInputa.current.value))}>
        Potraži filmove asinkrono
      </button>
      <dl>
        <dt>Trentuna rečenica</dt>
        <dd>{sentence.totalSentence}</dd>
      </dl>
    </div>
  );
};

export default SentenceComposer;
