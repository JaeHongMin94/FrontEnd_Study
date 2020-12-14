/*
  반복문
  for (초기화; 반복조건; 반복이 된 후 샐행되는 코드) {
    반복이 되는 코드 블럭
  }
*/
for (let i = 0; i < 10; i++) {
  console.log('안녕하세요.' + i);
}

console.log();

// for (;;) {} 무한루프
console.log('for(;;)');
for (;;) {
  console.log('안녕하세요');
  if (Math.random() * 100 > 90) break; // 계속 반복하게 되면 컴퓨터에 무리가 가기때문에 랜덤하게 멈춰준다.
}

console.log();

/*
  while (조건) {
    조건이 거짓이 될 때까지 반복 실행
  }
  조건이 계속 true일 경우 계속 반복(무한루프)
*/
console.log('while()');
while (true) {
  console.log('안녕하세요');
  if (Math.random() * 100 > 90) break;
}

console.log();

/*
  do{
    조건이 거짓이 될 때 까지 반복 실행
  } while (조건);
  do_while은 조건이 처음부터 false여도 최초의 한번은 실행
*/
console.log('do_while');
do {
  console.log('안녕하세요');
} while (Math.random() * 100 > 90);

console.log();

/*
  for of
  배열과 같이 사용
*/
console.log('for of');
for (let i of [1, 1, 2, 2, 3, 3]) {
  console.log(i);
}

console.log();

/*
  for in
*/
var obj = { a: 1, b: 2, c: 3 };

console.log('for in');
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
