import { useState } from "react";
import "./App.css";
import type { CounterProps } from "./types/props";
import Counter from "./Counter";
import CounterSummary from "./CounterSummary";

function App() {
  const [count, setCount] = useState(0);
  const initialCount: number = 0;
  const counterTitle: string = "Counter";
  const changeText = (text: string): void => {};

  const counterProps: CounterProps = {
    initialCount: initialCount,
    counterTitle: counterTitle,
    changeText: changeText,
  };

  return (
    <>
      <div>
        <section id="center">
          <div>
            <h1>Example App</h1>
            <p>Example app.</p>
          </div>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </section>
        <section>
          <Counter {...counterProps} />
          <CounterSummary />
        </section>
      </div>
    </>
  );
}

export default App;
