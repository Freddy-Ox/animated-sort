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
  algorithm,
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
    /* if (iterator === sampleSize) setSort(false); */
    if (sort === false) {
      return;
    }

    function isSorted(A) {
        return A.every((val, i, arr) => i === 0 || arr[i - 1] <= val);
    }

    let A = array.map((elem) => elem.value);
    let i = iterator;

    if(isSorted(A)) setSort(false)

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

  return (
    <>
      <ChartComponent
        chartData={array}
        sortingAlgorithm={algorithm}
      ></ChartComponent>
    </>
  );
}
