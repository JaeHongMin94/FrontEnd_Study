/*
  class(클래스)
  객체를 만들 수 있는 새로운 방법(es6)
*/
// 선언적 방식
class A {}
console.log(new A());

// class 표현식을 변수에 할당
const B = class {};
console.log(new B());

// 선언적 방식이지만 호이스팅은 일어나지 않는다.
//new C();
//class C {}

console.log();

// constructor(생성자)
class D {}
console.log(new D());

class E {
  constructor() {
    console.log('constructor');
  }
}
console.log(new E());

class F {
  constructor(name, age) {
    console.log('constructor', name, age);
  }
}
console.log(new F('Min', 27));

console.log();

/*
  멤버 변수
  객체의 프로퍼티
*/
// 멤버 변수
class G {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
console.log(new G('Min', 27));

// class field는 런타임 확인
class H {
  name;
  age;
}
console.log(new H());

class I {
  name = 'no name';
  age = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
console.log(new I('Min', 27));

console.log();

// 멤버 함수
class J {
  hello() {
    console.log('hello', this);
  }

  hello2 = () => {
    console.log('hello2', this);
  };
}
new J().hello();
new J().hello2();

class K {
  name = 'Min';

  hello() {
    console.log('hello', this.name);
  }
}
new K().hello();

console.log();

// get, set
class L {
  _name = 'no name';

  get name() {
    return this._name + '@@@';
  }

  set name(value) {
    this._name = value + '!!!';
  }
}
const l = new L();
console.log(l);
l.name = 'Min';
console.log(l);
console.log(l.name);
console.log(l._name);

// readonly
class M {
  _name = 'no name';

  get name() {
    return this._name + '@@@';
  }
}
const m = new M();
console.log(m);
m.name = 'Min';
console.log(m);

console.log();

/*
  static 변수, 함수
  객체가 아니고, 클래스의 변수와 함수
*/
class N {
  static age = 27;
  static hello() {
    console.log(A.age);
  }
}
console.log(N, N.age);
N.hello();

class O {
  age = 27;
  static hello() {
    console.log(this.age);
  }
}
console.log(O, O.age);
O.hello();

class P {
  static name = '이 클래스의 이름을 P 가 아니다.';
}
console.log(P);

console.log();

/*
  extends
  클래스의 상속 기봄
*/
// 상속 기본
class Parent {
  name = 'Min';

  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {}

const p = new Parent();
const ch = new Child();
console.log(p, ch);

ch.hello();
ch.name = 'Kim';
ch.hello();

/*
  override
  클래스의 상속 멤버 변수 및 함수 오버라이딩, 추가
*/
// 변수, 함수 추가 및 오버라이딩
class Parent2 {
  name = 'Min';

  hello() {
    console.log('hello', this.name);
  }
}

class Child2 extends Parent2 {
  age = 37;
  hello() {
    console.log('hello', this.name, this.age);
  }
}
const p2 = new Parent2();
const ch2 = new Child2();
console.log(p2, ch2);
ch2.name = 'Kim';
ch2.hello();

/*
  super
  클래스의 상속 생성자 함수 변경
*/
class Parent3 {
  name;

  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log('hello', this.name);
  }
}

class Child3 extends Parent3 {
  age;

  constructor(name, age) {
    super(name);
    this.age = age;
  }

  hello() {
    console.log('hello', this.name, this.age);
  }
}
const p3 = new Parent3('Min');
const ch3 = new Child3('Min', 27);
console.log(p3, ch3);

console.log();

/*
  static
  클래스의 상속 static 상속
*/
class Parent4 {
  static age = 27;
}

class Child4 extends Parent4 {}
console.log(Parent4.age, Child4.age);
