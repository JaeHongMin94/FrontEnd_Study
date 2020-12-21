let value = 'hello'; // 글로벌 scope, 전역 변수

function myFunction() {
  let value = 'bye!'; // 함수 scope, 지역 변수
  if (true) {
    let value = 'world'; // 블럭 scope
    console.log(`block scope: ${value}`);
  }
  console.log(`function scope: ${value}`);
}

myFunction();
console.log(`golbal scope: ${value}`);
