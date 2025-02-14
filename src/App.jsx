import { useEffect, useState} from "react";
import { ChartComponent } from "./components/components/Chart";
import "./App.css";
import { DropdownComponentSample } from "./components/components/Dropdown_sample";

function App() {
  const [array, setArray] = useState([]);
  const [sort, setSort] = useState(false);
  const [iterator, setIterator] = useState(1);
  const [sample, setSample] = useState(100);

  useEffect(() => {
    let A = Array(sample)
      .fill(0)
      .map(() => Math.random());
    A = A.map((value, index) => ({ index, value }));

    setArray(A);
    setIterator(1);
  }, [sample]);

  function insertionSort(A, i) {
    let j,x

    j = i;
    while (j > 0 && A[j - 1] > A[j]) {
      x = A[j];
      A[j] = A[j - 1];
      A[j - 1] = x;
      j--;
    }
    return A
  }

  function bubbleSort(A, i) {
    let j,x

    for (j = i; j < A.length; j++) {
      if (A[j-1] > A[j]) {
        x = A[j]
        A[j] = A[j-1]
        A[j-1] = x
      }
    }
    return A
  }

  useEffect(() => {
    
    if (iterator === sample) setSort(false)
    if (sort === false) {      
      return;
    }

    let A = array.map((elem) => elem.value);
    let i = iterator;

    if (i < A.length) {

      /* A = insertionSort(A, i) */
      A = bubbleSort(A, i)

      setTimeout(() => {
        let sorted = A.map((value, index) => ({ index, value }));
        setIterator(() => iterator + 1);
        setArray(sorted);
      }, 10);
    }
  }, [sort, iterator]);

  function onSampleChange(value) {
    setSample(() => value);
  }

  return (
    <>
      <ChartComponent chartData={array}></ChartComponent>

      <button
        className="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg"
        onClick={() => setSort((prev) => !prev)}
      >
        {sort ? "Stop" : "Start"}
      </button>

      <DropdownComponentSample
        sample={sample}
        onSampleChange={() => onSampleChange}
      ></DropdownComponentSample>
    </>
  );
}

export default App;
