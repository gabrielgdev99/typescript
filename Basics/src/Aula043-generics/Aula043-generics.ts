type FilterCallBack<U> = (
  value: U,
  index?: number,
  array?: U[],
) => boolean;

export function myFilter<T>(
  array: T[],
  callbackfn: FilterCallBack<T>,
): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arraysFilterOriginal = arrays.filter((value) => value < 5);
console.log(arraysFilterOriginal);

const arrayFilted = myFilter(arrays, (value) => value < 5);
console.log(arrayFilted);
