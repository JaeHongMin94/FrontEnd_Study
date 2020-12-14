/*
  객체
  함수, 클래스(틀) => 객체, 개체, object
  function 틀 () {} => new 틀 ()
*/
// 생성자 함수
function A() {}

const a = new A();
console.log(a, typeof a);
console.log(A());

// 생성하면서 데이터 넣기
function B(name, age) {
  console.log(name, age);
}

const b = new B();
const c = new B('Min', 27);
console.log(B());

console.log();
// 객체에 속성 추가하기(property)
// 값을 속성으로 넣기
function D() {
  this.name = 'Min';
}

const d = new D();
console.log(d);

console.log();

// 함수를 속성으로 넣기
function E() {
  this.hello = function () {
    console.log('hello');
  };
}

new E().hello();

console.log();

/*
  new Object()
  Object로 객체 만들기
*/
const f = new Object();
console.log(f, typeof f);

const g = new Object(true);
console.log(g, typeof g);

const h = new Object({ name: 'Min' });
console.log(h, typeof h);

console.log();

// 프로토타입 체인
console.log(this);
