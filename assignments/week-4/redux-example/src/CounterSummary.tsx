import { useAppSelector } from "./app/hooks";

export default function CounterSummary() {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <section aria-labelledby="counter-summary-title">
      <h2 id="counter-summary-title">Counter Summary</h2>

      <p>Shared Redux count: {count}</p>
    </section>
  );
}
