// 배열
const array = [1, 2, 3, 4, 5];
console.log(array, typeof array);

const array2 = [1, 'balbla', {}, 4];
console.log(array2[1]);

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

objects.push({
  name: '멍뭉이',
});
console.log(objects);
console.log(objects.length);

console.log();

const array3 = [1, true, { a: 1 }, [1, 2, 3, 4]];
array3.push(6);
console.log(array3, typeof array3);
console.log(array3[0], typeof array3[0]);
console.log(array3[1], typeof array3[1]);
console.log(array3[2], typeof array3[2]);
console.log(array3[3], typeof array3[3]);
console.log(array3[4], typeof array3[4]);
console.log(array3[5], typeof array3[5]);

console.log();

// 배열 내장함수
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// 방법1
function print(hero) {
  console.log(hero);
}
superheroes.forEach(print);

console.log('-');

// 방법2
superheroes.forEach(function (hero) {
  console.log(hero);
});

console.log('-');

// 방법3
superheroes.forEach((hero) => {
  console.log(hero);
});

console.log();

// map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
numbers.forEach((n) => {
  squared.push(n * n);
});

console.log(squared);

const square = numbers.map((n) => n * n);
console.log(square);

console.log();

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

console.log();

// indexOf
const index = superheroes.indexOf('토르');
console.log(index);

// findIndex, find
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true,
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false,
  },
];

const index2 = todos.find((todo) => todo.done === false);
console.log(index2);

// filter
const tasksNotDone = todos.filter((todo) => todo.done);
console.log(tasksNotDone);

/*
  splice, slice
  splice는 기존의 배열을 건드리고, slice는 기존의 배열을 건드리지 않는다.
*/
// numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const index3 = numbers.indexOf(4);
const spliced = numbers.splice(index3, 3);
console.log(spliced);
console.log(numbers);

console.log();

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers2);
