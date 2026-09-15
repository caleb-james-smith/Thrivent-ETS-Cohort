import { useContext, useEffect, useRef, useState } from "react";
import { decrement, increment, reset } from "./features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { ThemeContext } from "./ThemeContext";
import type { CounterProps } from "./types/props";

export default function Counter({
  initialCount,
  counterTitle,
  changeText,
}: CounterProps) {
  const [count, setCount] = useState<number>(Number(initialCount));
  const [refCountSnapshot, setRefCountSnapshot] = useState<number>(0);
  const [textToBeChanged, setTextToBeChanged] = useState("");

  const clickCountRef = useRef<number>(0);
  const themeContext = useContext(ThemeContext);

  const reduxCount = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  if (!themeContext) {
    throw new Error("Counter must be used inside ThemeContext.Provider");
  }

  useEffect(() => {
    console.log(`Count has updated. It is now ${count}.`);
  }, [count]);

  useEffect(() => {
    console.log("Component has loaded.");
  }, []);

  function handleStateUpdate() {
    setCount((currentCount) => currentCount + 1);
    setRefCountSnapshot(clickCountRef.current);
  }

  function handleRefOnlyUpdate() {
    clickCountRef.current += 1;

    console.log(`ref updated without re-render: ${clickCountRef.current}`);
  }

  function changeTextToBeChanged(newText: string) {
    setTextToBeChanged(newText);
  }

  return (
    <div>
      <h2>{counterTitle}</h2>

      <p>Count: {count}</p>
      <p>Redux count: {reduxCount}</p>
      <p>Ref count snapshot: {refCountSnapshot}</p>

      <div className="button-container">
        <button onClick={handleStateUpdate}>Add 1 to local counter</button>

        <button onClick={handleRefOnlyUpdate}>Update ref only</button>

        <button onClick={() => dispatch(increment())}>
          Increment Redux count
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrement Redux count
        </button>

        <button onClick={() => dispatch(reset())}>Reset Redux count</button>
      </div>

      <input
        value={textToBeChanged}
        onChange={(event) => changeTextToBeChanged(event.target.value)}
      />

      <button onClick={() => changeText(textToBeChanged)}>
        Do the text update in the parent
      </button>
    </div>
  );
}
