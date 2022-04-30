import { Counter } from "./features/counter/Counter";
import SentenceComposer from "./features/sentence/SentenceComposer";
import SentenceComposerKlasni from "./features/sentence/SentenceComposerKlasni";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Counter />
      <br />
      <Counter />
      <br />
      <SentenceComposer />
      <br />
      <SentenceComposerKlasni />
    </div>
  );
}

export default App;
