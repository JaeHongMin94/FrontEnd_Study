/*
  객체
  함수, 클래스(틀) => 객체, 개체, object
  function 틀 () {} => new 틀 ()
*/
// 생성자 함수
function A() {}

const a = new A();
console.log(a, typeof a); // A{} object
console.log(A()); // undefined

// 생성하면서 데이터 넣기
function B(name, age) {
  console.log(name, age);
}

const b = new B(); // undefined undefined
const c = new B('Min', 27); // Min 27
console.log(B()); // undefined undefined
// undefined

console.log('--------');

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

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);

console.log();

// 비구조화 할당
function print2({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
console.log('비구조화 할당 : ');
print2(ironMan);
print2(captainAmerica);

console.log();

// 객체 안에 함수 넣기
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function () {
    console.log(this.sound);
  }, // 단, Arrow function은 this를 사용할 수 없다.
};

const cat = {
  name: '야옹이',
  sound: '야옹~',
};

cat.say = dog.say;
dog.say();
cat.say();
