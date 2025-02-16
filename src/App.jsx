import { useEffect, useState } from "react";
import { DropdownComponent } from "./components/components/Dropdown";
import "./App.css";
import Sorting from "./components/components/Sorting";

function App() {
  const [sampleSize, setSampleSize] = useState(100);
  const [sort, setSort] = useState(false);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const [array, setArray] = useState([]);
  const [iterator, setIterator] = useState(1);

  useEffect(() => {
    let A = Array(sampleSize)
      .fill(0)
      .map(() => Math.random());
    A = A.map((value, index) => ({ index, value }));
    setArray(A);
    setIterator(1);
  }, [sampleSize, algorithm]);

  function insertionSort(A, i) {
    let j, x;

    j = i;
    while (j > 0 && A[j - 1] > A[j]) {
      x = A[j];
      A[j] = A[j - 1];
      A[j - 1] = x;
      j--;
    }
    return A;
  }

  function selectionSort(A, i) {
    let minIndex = i - 1;
    let j, x;

    for (j = i; j < A.length; j++) {
      if (A[j] < A[minIndex]) {
        minIndex = j;
      }
    }

    x = A[i - 1];
    A[i - 1] = A[minIndex];
    A[minIndex] = x;

    return A;
  }

  function cocktailShakerSort(A, i) {
    let x, j;

    if (i % 2 === 1) {
      for (j = 1; j < A.length; j++) {
        if (A[j - 1] > A[j]) {
          x = A[j];
          A[j] = A[j - 1];
          A[j - 1] = x;          
        }
      }
      return A;
    }

    if (i % 2 === 0) {
      for (j = A.length; j > 1; j--) {
        if (A[j - 1] > A[j]) {
          x = A[j];
          A[j] = A[j - 1];
          A[j - 1] = x;
        }
      }
      return A
    }
  }

  function bubbleSort(A, i) {
    let j, x;

    for (j = 1; j < A.length; j++) {
      if (A[j - 1] > A[j]) {
        x = A[j];
        A[j] = A[j - 1];
        A[j - 1] = x;
      }
    }
    return A;
  }

  const sortingAlgorithms = {
    "Bubble Sort": bubbleSort,
    "Insertion Sort": insertionSort,
    "Selection Sort": selectionSort,
    "Cocktail Shaker Sort": cocktailShakerSort,
  };

  function onSampleChange(value) {
    setSampleSize(value);
  }

  function onAlgorithmChange(newAlgorithm) {
    setAlgorithm(newAlgorithm);
  }

  function handleReset() {
    let A = Array(sampleSize)
      .fill(0)
      .map(() => Math.random());
    A = A.map((value, index) => ({ index, value }));

    setArray(A);
    setIterator(1);
  }

  function handleStart() {}

  return (
    <>
      <Sorting
        setSort={setSort}
        sort={sort}
        setIterator={setIterator}
        iterator={iterator}
        setArray={setArray}
        array={array}
        sampleSize={sampleSize}
        sortingAlgorithm={sortingAlgorithms[algorithm]}
      ></Sorting>

      <button
        className="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg"
        onClick={() => setSort((prev) => !prev)}
      >
        {sort ? "Stop" : "Start"}
      </button>

      <DropdownComponent
        value={sampleSize}
        options={[100, 250, 500]}
        handleChange={onSampleChange}
      ></DropdownComponent>

      <DropdownComponent
        value={algorithm}
        options={Object.keys(sortingAlgorithms)}
        handleChange={onAlgorithmChange}
      ></DropdownComponent>

      {/* <button
        className="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg"
        onClick={handleReset}
      >
        Apply Settings
      </button> */}
    </>
  );
}

export default App;
