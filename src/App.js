import { Counter } from "./features/counter/Counter";
import SentenceComposer from "./features/sentence/SentenceComposer";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Counter />
      <br />
      <Counter />
      <br />
      <SentenceComposer />
    </div>
  );
}

export default App;
