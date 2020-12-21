// 자바스크립트에서 작동하는 호이스팅 현상
myFunction();

function myFunction() {
  console.log('hello');
}
// 함수를 선언 후에 정의를 하면 나중에 유지 보수 측면에서 배우 힘들어짐

// 자바스크립트에서 var는 호이스팅 현상이 나타난다.
var naumber;
console.log(number);
number = 2;

// es6에서 나온 let, const는 호이스팅이 발생하지 않는다.
let number2;
console.log(number2);
number2 = 3;
