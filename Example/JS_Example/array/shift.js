/*
  shift, pop, unshift, push
  shift - 배열의 맨 앞에 있는 요소를 제거
  pop - 배열의 맨 뒤에 있는 요소를 제거
  unshift - 배열 맨 앞에 요소를 추가
  push - 배열 맨 뒤에 요소를 추가
*/
const numbers = [1, 2, 3, 4];
numbers.shift();
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.unshift(1);
console.log(numbers);
numbers.push(4);
console.log(numbers);
