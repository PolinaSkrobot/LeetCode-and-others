/*
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)]. */

function solution(arr) {
  //60% only
  // let maximumNumber = arr.length + 1;
  // if(arr.length === 0) return 1;
  // arr.sort((a,b)=> a-b);
  // if (arr.includes(maximumNumber)) {
  //   for(let i=0; i<arr.length; i++) {
  //     if (arr[i+1]-arr[i]!==1) return (arr[i+1]+arr[i])/2
  //   }

  // }
  // return arr[arr.length-1]+1
  //100%
  let maximumNumber = A.length + 1;
  let totalSum = (maximumNumber * (maximumNumber + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < A.length; i++) {
    partialSum += A[i];
  }
  return totalSum - partialSum;
}
//console.log(solution([]));

function slow_solution(n) {
  result = 0;
  counter = 0;
  while (counter < n) {
    result += n - counter;
    counter++;
  }
  return result; //15 1+2+3+4+5
}
console.log(slow_solution(5));
