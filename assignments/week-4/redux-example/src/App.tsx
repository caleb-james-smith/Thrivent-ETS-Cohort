import { useState } from "react";
import "./App.css";
import type { CounterProps, HeaderProps } from "./types/props";
import Counter from "./Counter";
import CounterSummary from "./CounterSummary";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  const headerTitle = "Example App";
  const headerText = "Example app.";

  const initialCount: number = 0;
  const counterTitle: string = "Counter";
  const changeText = (text: string): void => {};

  const headerProps: HeaderProps = {
    title: headerTitle,
    text: headerText
  };

  const counterProps: CounterProps = {
    initialCount: initialCount,
    counterTitle: counterTitle,
    changeText: changeText,
  };

  return (
    <>
      <div>
        <section id="center">
          <Header title={headerTitle} text={headerText} />
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
