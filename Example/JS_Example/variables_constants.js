/*
  let 변수를_지칭하는_이름 = 값;
  let은 변수를 선언할 때 사용하는 키워드
  let의 변수들은 값을 바꿀 수 있음
*/
let a = 10;
console.log(a, typeof a);
a = 15;
console.log(a);

/*
  const 상수를_지칭하는_이름 = 값;
  const는 상수를 선언할 때 사용하는 키워드
  const는 상수이기 때문에 선언 즉시 값을 넣어야하며 이후에 변경이 불가능
*/
const b = 20;
console.log(b, typeof b);
// b = 15; 상수는 값의 변경이 불가능하기 때문에 에러가 발생한다.

/*
  전역변수는 함수 및 블럭{} 외부에서 선언된 변수로, 프로그램 전체에서 접근할 수 있는 변수
  지역변수는 함수 및 블럭{} 내부에서 선언된 변수로, 함수가 실행되면 만들어지고 함수가 종료되면 소멸하는 변수입니다. 함수 외부에서는 접근할 수 없습니다.
*/
let name = 'Mark';
{
  console.log(name);
}
console.log(name);

{
  let age = 27;
  console.log(age);
}
//console.log(age);
