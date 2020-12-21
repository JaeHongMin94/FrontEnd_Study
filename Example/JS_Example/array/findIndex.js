/*
  findIndex, find
  findIndex - 객체 안에 특정 값을 조회할 때 사용, 몇 번째 자리에 있는지 출력, 존재하지 않다면 -1출력
  find - 찾은 값을 출력
  findIndex, find는 조건에 맞는 값이 여러개일 경우 제일 첫 번째 값 출력
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

const index = todos.findIndex((todo) => todo.done === true);
console.log(index);

const index2 = todos.find((todo) => todo.done === false);
console.log(index2);
