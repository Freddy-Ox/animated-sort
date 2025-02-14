import { ChartComponent } from "./Chart";
import { useState, useEffect } from "react";

export default function Sorting({
  setSort,
  sort,
  sampleSize,
  sortingAlgorithm,
}) {
  const [array, setArray] = useState([]);
  const [iterator, setIterator] = useState(1);

  useEffect(() => {
    let A = Array(sampleSize)
      .fill(0)
      .map(() => Math.random());
    A = A.map((value, index) => ({ index, value }));

    setArray(A);
    setIterator(1);
  }, [sampleSize]);

  useEffect(() => {
    if (iterator === sampleSize) setSort(false);
    if (sort === false) {
      return;
    }

    let A = array.map((elem) => elem.value);
    let i = iterator;

    if (i < A.length) {
      A = sortingAlgorithm(A, i);

      setTimeout(() => {
        let sorted = A.map((value, index) => ({ index, value }));
        setIterator(() => iterator + 1);
        setArray(sorted);
      }, 10);
    }
  }, [sort, iterator, array, sampleSize, sortingAlgorithm, setSort]);

  return (
    <>
      <ChartComponent chartData={array}></ChartComponent>
    </>
  );
}
