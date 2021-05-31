import { useReducer, useState } from "react";
import "./styles.css";

function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    increment() {
      setCount(count + 1);
    },
    decrement() {
      setCount(count - 1);
    },
    reset(value = 0) {
      setCount(value);
    },
    add(value = 0) {
      setCount(count + value);
    },
    subsctract(value = 0) {
      setCount(count - value);
    }
  };
}

export default function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="p-10">
        <h1>{count}</h1>
      </div>
      <div className="flex">
        <div className="p-2">
          <button
            className="rounded bg-purple-500 hover:bg-purple-700 focus:outline-none text-white px-2 py-1"
            onClick={() => increment()}
          >
            Increment
          </button>
        </div>
        <div className="p-2">
          <button
            className="rounded bg-purple-500 hover:bg-purple-700 focus:outline-none text-white px-2 py-1"
            onClick={() => decrement()}
          >
            Decrement
          </button>
        </div>
      </div>
      <div className="p-2">
        <button
          className="rounded bg-red-500 hover:bg-red-700 focus:outline-none text-white px-2 py-1"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
