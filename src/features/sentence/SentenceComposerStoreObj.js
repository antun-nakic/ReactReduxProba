import React from "react";
import store from "../../store";

const SentenceComposerStoreObj = () => {
  return (
    <div>
      SentenceComposerStoreObj:
      {store.getState().sentence.totalSentence}
      <button
        onClick={() =>
          store.dispatch({
            type: "sentence/addWordToSentence",
            payload: "Amen",
          })
        }>
        Dodaj riječ "Amen"
      </button>
    </div>
  );
};

export default SentenceComposerStoreObj;
