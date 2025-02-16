import { ChartComponent } from "./Chart";
import { useState, useEffect } from "react";

export default function Sorting({
  setSort,
  sort,
  setIterator,
  iterator,
  setArray,
  array,
  sampleSize,
  sortingAlgorithm,
  algorithm
}) {

  /* useEffect(() => {
    console.log("re-rendering useEffect")
    let A = Array(sampleSize)
      .fill(0)
      .map(() => Math.random());
    A = A.map((value, index) => ({ index, value }));

    setArray(A);
    setIterator(1);
  }, [sampleSize, setArray, setIterator, setArray]); */


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
  }, [
    sort,
    iterator,
    array,
    sampleSize,
    sortingAlgorithm,
    setSort,
    setIterator,
    setArray,
  ]);

  function formatAlgorithmName(name) {
    return name
      .replace(/([A-Z])/g, ' $1') // Insert space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
  }

  return (
    <>
      <ChartComponent chartData={array} sortingAlgorithm={algorithm}></ChartComponent>
    </>
  );
}
