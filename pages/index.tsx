import * as React from "react";

import { useUnit } from "effector-react";
import {
  $counter,
  incrementCounter,
  decrementCounter,
  randCounter,
} from "../stores/counter";

export default function Home() {
  const { counter, onIncrement, onDecrement, onRandom } = useUnit({
    counter: $counter,
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
    onRandom: randCounter,
  });
  return (
    <>
      <h2>Число: {counter}</h2>
      <button variant="outlined" color="secondary" onClick={onDecrement}>
        Уменьшить
      </button>

      <button variant="contained" color="primary" onClick={onIncrement}>
        Увеличить
      </button>

      <button variant="contained" color="primary" onClick={onRandom}>
        Рандомное число
      </button>
    </>
  );
}
