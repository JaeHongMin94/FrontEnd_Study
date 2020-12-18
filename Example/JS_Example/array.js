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

/*
  배열 내장함수
  forEach - 배열의 요소들을 순서대로 출력할 때 사용
*/
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

//  map - 배열안에 요소들을 변환할 때 사용
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

// indexOf - 배열에서 원하는 항목이 어느 자리에 있는지 알고 싶을 때 사용, 존재하지 않을 때는 -1
const index = superheroes.indexOf('토르');
console.log(index);

/*
  findIndex, find
  findIndex - 객체 안에 특정 값을 조회할 때 사용, 몇 번째 자리에 있는지 출력
  find - 찾은 값을 출력, 조건에 맞는 값이 여러개일 경우 제일 첫 번째 값 출력
*/
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

// filter - 조건에 맞는 값들을 모두 출력, 특정 배열에서 특정 조건을 만족할 때 추출
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

console.log();

/*
  shift, pop, unshift, push
  shift - 배열의 맨 앞에 있는 요소를 제거
  pop - 배열의 맨 뒤에 있는 요소를 제거
  unshift - 배열 맨 앞에 요소를 추가
  push - 배열 맨 뒤에 요소를 추가
*/
const numbers3 = [1, 2, 3, 4];
numbers3.shift();
console.log(numbers3);
numbers3.pop();
console.log(numbers3);
numbers3.unshift(1);
console.log(numbers3);
numbers3.push(4);
console.log(numbers3);

console.log();

//  concat - 두 개의 배열을 합칠 때 사용, 기존의 배열 요소는 건드리지 않음
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated);
const concated2 = [...arr1, ...arr2];
console.log(concated2);

console.log();

// join - 배열 안에 있는 값들을 문자열형태로 합칠 때 사용
console.log(arr1.concat(arr2).join());
console.log(arr1.concat(arr2).join(' '));
console.log(arr1.concat(arr2).join(', '));

// reduce - 배열 안에 모든 값들을 사용하여 어떤한 값을 연산해야 할 때 사용
const arr3 = [1, 2, 3, 4, 5];

let sum = 0;
arr3.forEach((n) => {
  sum += n;
});
console.log(sum);

sum = arr3.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

let avg = arr3.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
console.log(avg);

// reduce 다른 예시
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((accumulator, current) => {
  if (accumulator[current]) {
    accumulator[current] += 1;
  } else {
    accumulator[current] = 1;
  }
  return accumulator;
}, {});
console.log(counts);

// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
// 방법1
function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
  let count = 0;
  numbers.forEach((element) => {
    if (element > 10) count += 1;
  });
  return count;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

// 방법2
function countBiggerThanTen(numbers) {
  return numbers.filter((n) => n > 10).length;
}

const count2 = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

// 방법3
function countBiggerThanTen(numbers) {
  return numbers.reduce((acc, current) => {
    if (current > 10) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

const count3 = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
