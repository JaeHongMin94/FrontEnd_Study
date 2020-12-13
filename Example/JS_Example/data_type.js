/*
  Javascript는 동적인 언어이기 때문에 변수가 가지는 고정타입이 없다. 하지만 타입이 없는 것은 아니다.

  데이터 타입
  - 기본타입
    - Boolean
    - Null
    - Undefined
    - Number
    - String
    - Symbol(ECMAScript6에 추가됨)
  - 객체(Objects)
*/

// Boolean(논리)
const isTrue = true;
const isFalse = false;
console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

const a = new Boolean(false);
console.log(a, typeof a);

if (a) {
  // 객체는 조건문 안에서 평가할 때 true로 나오기 때문에 if문안에 코드들이 실행된다.
  console.log('false?');
}

const b = Boolean(false);
console.log(b, typeof b);

if (b) {
  console.log('false?');
}

// Null
const empty = null;
console.log(empty, typeof empty);

// Undefined
const defined = undefined;
console.log(defined, typeof defined);

if (empty == defined) console.log(a == b); // 조건문에 ==은 값만 비교
if (empty === defined) console.log(a === b); // 조건문에 ===은 값과 타입까지 비교

// Number(숫자)
let num = 27;
console.log(num, typeof num);

let num2 = 99;
console.log(num2, typeof num2);

let num3 = NaN;
console.log(num3, typeof num3);

let num4 = Number('Min');
console.log(num4, typeof num4);

let num5 = Number('27');
console.log(num5, typeof num5);

// String(문자열)
let string = 'Min';
console.log(string, typeof string);

let string2 = 'Min' + ' JaeHong';
let string3 = string + ' JaeHong';
console.log(string2, typeof string2);
console.log(string3, typeof string3);

// Sysbol
const sy = Symbol();
const sy2 = Symbol(27);
const sy3 = Symbol('Min');
const sy4 = Symbol('Min');

console.log(sy, typeof sy);
console.log(sy2, typeof sy2);
console.log(sy3, typeof sy3);
console.log(sy3 == sy4);
