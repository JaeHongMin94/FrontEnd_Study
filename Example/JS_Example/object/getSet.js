// get
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  },
};

console.log(numbers.sum); // 출력문에 numbers.sum을 하게되면 get함수 실행

console.log('---------');

// set
const dog = {
  _name: '멍멍이',
  set name(value) {
    console.log('이름이 바뀝니다...' + value);
    this._name = value;
  },
};

console.log(dog._name);
dog.name = '뭉뭉이'; // dog객체 name에 값을 넣게되면 set함수 실행
console.log(dog._name);

console.log('---------');

const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  },
};

console.log(numbers2.sum);
numbers2.a = 5; // set함수가 실행되면서 calculate()함수가 실행하면서 값이 더해진다.
numbers2.b = 9;
console.log(numbers2.sum); // 계산은 값이 바뀔때 연산되기 때문에 이전에 연산한 값을 출력한다.
console.log(numbers2.sum); // get sum()을 사용하게 되면 조회할 때 마다 값을 계산하게 된다.
console.log(numbers2.sum);
