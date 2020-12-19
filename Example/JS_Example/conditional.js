/*
  if(표현식){
  조건문 - 표현식이 참으로 평가될 때, 실행되는 블럭
  }
*/
if (true) {
  console.log('항상 실행');
}

if (false) {
  console.log('항상 실행되지 않음');
}

// 블럭안에 코드가 한줄이면, 중괄호 {}는 생략 가능
if (true) console.log('항상 실행');
if (false) console.log('항상 실행되지 않음');

/*
  표현식이 거짓으로 평가될 때
  Falsy
  - false
  - 0
  - ''
  - null
  - undefined
  - NaN
*/
if (false) console.log(false);
if (0) console.log(0);
if ('') console.log('');
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);

/*
  표현식이 참으로 평가될 때
  Truethy
  Falsy의 반대
  - true
  - 0이 아닌 수
  - '값'
  - {}
  - []
*/
if (true) console.log(true);
if (27) console.log(27);
if ('Min') console.log('Min');
if ({}) console.log({});
if ([]) console.log([]);

// else {} - if에 해당하지 않을 때
let num = -27;
if (num < 0) {
  console.log('num이 0보다 큰 경우');
} else {
  console.log('num이 0보다 크지 않은 경우');
}

if (num < 0) console.log('num이 0보다 큰 경우');
else console.log('num이 0보다 크지 않은 경우');

// else if {} - if에 해당하지 않을 때
let n = 15;
if (n % 3 === 0 && n % 5 === 0) console.log('n은 3과 5의 배수입니다.');
else if (n % 3 === 0) console.log('n은 3의 배수입니다.');
else if (n % 5 === 0) console.log('n은 5의 배수입니다.');
else console.log('n은 3의 배수도 아니고, 5의 배수도 아닙니다.');

/*
  논리 연산자를 이용한 조건문 평가
  &&, ||, !
*/
// 표현식 && 표현식
if (true && true) console.log('두개 모두 참이면 참');
if (true && false) console.log('한개만 참이면 거짓');
if (false && true) console.log('한개만 참이면 거짓');
if (false && false) console.log('두개 모두 거짓이면 거짓');

// 표현식 || 표현식
if (true || true) console.log('두개 모두 참이면 참');
if (true || false) console.log('한개만 참이면 참');
if (false || true) console.log('한개만 참이면 참');
if (false || false) console.log('두개 모두 거짓이면 거짓');

// !표현식
if (!true) console.log('참이면 거짓');
if (!false) console.log('거짓이면 참');

/*
  삼항 연산자를 이용한 조건부 실행
  조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
  중괄호{}를 사용할 수 없는 문법이기 때문에 하나의 표현식만 가능
*/
n = 5;
console.log(n % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아닙니다.');
console.log(n % 2 === 0 ? '2의 배수입니다.' : '2의 배수가 아닙니다.');

/*
  switch를 이용한 조건문
  switch 뒤 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교해서 실행합니다.
*/
n = 5;
switch (n % 5) {
  case 0:
    console.log('5의 배수입니다.');
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('5의 배수가 아닙니다.');
    break;
  default:
    console.log(n);
}

/*
  삼항 연산자
  condition ? true : false
*/
const array = [];
let text =
  array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';
console.log(text);
