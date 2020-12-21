//  map - 배열안에 요소들을 변환할 때 사용
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// for 사용
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}
console.log('for문 사용:');
console.log(squared);

console.log('--------');

// forEach 사용
const squared2 = [];
array.forEach((n) => {
  squared2.push(n * n);
});
console.log('forEach 사용:');
console.log(squared);

console.log('--------');

// map 사용
const squared3 = array.map((n) => n * n);
console.log('map 사용');
console.log(squared3);

console.log('--------');

const items = [
  {
    id: 1,
    text: 'hello',
  },
  {
    id: 2,
    text: 'bye',
  },
];
const texts = items.map((item) => item.text);
console.log(texts);
