
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const hash = {};
  let order = true;
  A.sort((a,b)=> a-b)
  if (A.length !== A[A.length-1]) return 0
  return 1
}
console.log(solution([4,2,1,3]));