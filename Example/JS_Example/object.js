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
function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.hello = function () {
  //   console.log('hello', this.name, this, age);
  // };
}

Person.prototype.hello = function () {
  console.log('hello', this.name, this.age);
};

const p = new Person('Min', 27);

p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(p instanceof Object);

console.log();

// 프로토타입을 이용한 객체 확장
function Person2() {}

Person2.prototype.hello = function () {
  console.log('hello');
};

function Korean(region) {
  this.region = region;
  this.where = function () {
    console.log('where', this.region);
  };
}

Korean.prototype = Person2.prototype;

const k = new Korean('Seoul');
k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person2);
console.log(k instanceof Object);

console.log();

// 객체 리터럴
const aa = {};
console.log(aa, typeof aa);

const bb = {
  name: 'Min',
};
console.log(bb, typeof bb);

const cc = {
  name: 'Min',
  hello1() {
    console.log('hello1', this.name);
  },
  hello2: function () {
    console.log('hello2', this.name);
  },
  hello3: () => {
    console.log('hello3', this.name);
  },
};

cc.hello1();
cc.hello2();
cc.hello3();

console.log();

// 표준 내장 객체 : Array
const area = new Array('red', 'green', 'blue');
console.log(area, typeof area);
console.log(area instanceof Array);
console.log(area instanceof Object);

const area2 = ['black', 'gray', 'white'];
console.log(area2, typeof area2);
console.log(area2 instanceof Array);
console.log(area2 instanceof Object);

console.log(area2.slice(0, 2));
console.log(Array.prototype.slice, Object.prototype.slice);

console.log();

// 객체 비구조화 할당
const ironMan = {
  name: '토니스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카',
};

function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);

console.log();

const object = { a: 1 };

function print2({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}
print2(object);

console.log();

const deepObject = {
  state: {
    information: {
      name: 'MinJaeHong',
      languages: ['korean', 'english', 'chinese'],
    },
  },
  value: 5,
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name,
  languages,
  value,
};

console.log(extracted);

// 객체 안에 함수 넣기
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function () {
    console.log(this.sound);
  },
};

const cat = {
  name: '야옹이',
  sound: '야옹~',
};

cat.say = dog.say;
dog.say();
cat.say();
