import { useEffect, useState } from "react";
import { DropdownComponent } from "./components/components/Dropdown";
import "./App.css";
import Sorting from "./components/components/Sorting";

function App() {
  const [sampleSize, setSampleSize] = useState(100);
  const [sort, setSort] = useState(false);
  const [algorithm, setAlgorithm] = useState("Bubble Sort")

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
    "Bubble Sort" : bubbleSort,
    "Insertion Sort" : insertionSort
  }

  function onSampleChange(value) {
    setSampleSize(value);
  }

  function onAlgorithmChange(newAlgorithm) {
    setAlgorithm(newAlgorithm)
  }

  return (
    <>
      <Sorting
        setSort={setSort}
        sort={sort}
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
    </>
  );
}

export default App;
