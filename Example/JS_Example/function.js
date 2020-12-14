/*
  함수 - function
*/
// 이름이 hello인 함수를 선언
function hello() {
  console.log('hello');
}

console.log(hello, typeof hello);

console.log();

// 함수의 매개변수, 함수를 호출할 때 값을 지정
function hello2(name) {
  return `hello ${name}`;
}

console.log(hello2('JaeHong'), typeof hello2);

console.log();

// const hello = function () {}
const hello3 = function () {
  console.log('hello');
};

console.log(hello3, typeof hello3);

console.log();

/*
  차이점 - 선언적 function과 익명 함수를 만들어 변수에 할당
  선언적 방식은 호이스팅이 가능합니다.
 */

/*
  const hello4 = new Function ();
  생성자 함수로 함수를 만드는 방법
*/
// new Function (인자1, 인자2, ..., 함수의 바디);
const sum = new Function('a', 'b', 'c', 'return a + b + c');
console.log(sum(1, 2, 3));

console.log();

// function과 new Function (); 의 차이점
console.log('function과 new Function의 차이점');
global.a = 0;

{
  const a = 1;
  const test = new Function('return a');
  console.log(test());
}

{
  const a = 2;
  const test = function () {
    return a;
  };
  console.log(test());
}

console.log();
/*
  () => {}
  arrow function (es6)
*/
// arrow 함수를 만들어 이름이 hi인 변수에 할당
const hi = () => {
  console.log('hi');
};
console.log(hi);

// 매개변수가 하나일 때, 괄호 생략 가능
const hi2 = (name) => `hi2 ${name}`; // 필자는 확장 프로그램 때문에 저장 시 자동으로 괄호가 씌어진다.
console.log(hi2('JaeHong'));

const hi3 = (name, age) => {
  return `hi3 ${name}, ${age}`;
};
console.log(hi3('JaeHong', 27));

console.log();

/*
  new function();
  생성자 함수
*/
// 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법
function Person(name, age) {
  console.log(this);
  this.name = name;
  this.age = age;
}

const p = new Person('Min', 27);
console.log(p, p.name, p.age);

const p2 = new Person('JaeHong', 28);
console.log(p2, p2.name, p2.age);

console.log();

// 함수 안에서 함수를 만들어 리턴
function Plus(base) {
  return function (num) {
    return base + num;
  };
}

const plus5 = Plus(5);
console.log(plus5(10));

const plus7 = Plus(7);
console.log(plus7(8));

// 함수를 호출할 때, 인자로 함수를 사용
function bye(c) {
  console.log('bye');
  c();
}

bye(function () {
  console.log('콜백');
});
