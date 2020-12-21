// filter - 조건에 맞는 값들을 모두 출력, 특정 배열에서 특정 조건을 만족할 때 추출
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
const tasksNotDone = todos.filter((todo) => todo.done);
console.log(tasksNotDone);
