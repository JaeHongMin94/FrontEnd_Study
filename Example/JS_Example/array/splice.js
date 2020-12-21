/*
  splice, slice
  splice는 기존의 배열을 건드리고, slice는 기존의 배열을 건드리지 않는다.
*/
numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const index = numbers.indexOf(4); // index = 4
const spliced = numbers.splice(index, 3); // [4]자리부터 3개 제거
console.log(spliced);
console.log(numbers);

console.log('--------');

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const sliced = numbers.slice(0, 2); // [0]자리부터 [2]자리 전 까지를 자른다.
console.log(sliced);
console.log(numbers2);

// splice는 배열의 기존 요소를 삭제 도는 고체하거나 새 요소를 추가하여 배열의 내용 변경가능
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

months.splice(4, 1, 'May', 'June', 'July');
console.log(months);
