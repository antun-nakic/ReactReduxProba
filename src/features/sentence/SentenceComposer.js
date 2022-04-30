import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInputChange, addWordToSentence } from "./sentenceSlice";

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
      <dl>
        <dt>Trentuna rečenica</dt>
        <dd>{sentence.totalSentence}</dd>
      </dl>
    </div>
  );
};

export default SentenceComposer;
