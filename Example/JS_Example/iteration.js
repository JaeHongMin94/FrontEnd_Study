/*
  반복문
  for (초기화; 반복조건; 반복이 된 후 샐행되는 코드) {
    반복이 되는 코드 블럭
  }
*/
for (let i = 0; i < 5; i++) {
  console.log('안녕하세요.' + i);
}

console.log();

// for (;;) {} 무한루프
console.log('for(;;)');
for (;;) {
  console.log('안녕하세요');
  if (Math.random() * 10 > 5) break; // 계속 반복하게 되면 컴퓨터에 무리가 가기때문에 랜덤하게 멈춰준다.
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
  if (Math.random() * 10 > 5) break;
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
  객체와 같이 사용
*/
var doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2,
};
console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));
console.log('for in');
for (const key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}

console.log();

// continue, break
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 반복문으로 돌아간다.
  console.log(i);
  if (i === 5) break; // 반복문을 종료한다.
}

console.log();

// 숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.
function biggerThanThree(numbers) {
  // 내가 짠 코드
  /* 구현해보세요 */
  let array = [];
  for (let i = 0, j = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
      array[j] = numbers[i];
      j++;
    }
  }
  return array;
}

function biggerThanThree2(numbers) {
  // 출제자 정답 코드
  k = [];
  for (let number of numbers) {
    if (number > 3) {
      k.push(number);
    }
  }

  return k;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
console.log(biggerThanThree2(numbers)); // [4, 5, 6, 7]
