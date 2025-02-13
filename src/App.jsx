import { useEffect, useState } from "react";
import { ChartComponent } from "./components/components/Chart";
import seedrandom from "seedrandom";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);
  const [sort, setSort] = useState(false);
  const [step, setStep] = useState(10);

  useEffect(() => {
    let A = randomDraws(500);
    A = A.map((value, index) => ({ index, value }));

    setArray(A);
  }, []);

  useEffect(() => {
    if (sort === false) return;

    let A = array.map((elem) => elem.value);

    // sorting algorithm
    let i, j, x;
    i = Math.floor(step / 10);

    if (i < A.length) {
      j = i;
      while (j > 0 && A[j - 1] > A[j]) {
        x = A[j];
        A[j] = A[j - 1];
        A[j - 1] = x;
        j--;
      }

      setTimeout(() => {
        let sorted = A.map((value, index) => ({ index, value }));
        setStep(() => step + 10);
        setArray(sorted);
      }, 1);
    }
    
  }, [sort, step]);

  function randomDraws(n, seed) {
    const rng = seedrandom(seed); // Initialize RNG with a seed
    return Array.from({ length: n }, () => rng()); // Generate n random numbers
  }

  return (
    <>
      <ChartComponent chartData={array}></ChartComponent>
      {
        <button
          className="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg"
          onClick={() => setSort((prev) => !prev)}
        >
          {sort ? "stop sorting" : "sort"}
        </button>
      }
    </>
  );
}

export default App;
