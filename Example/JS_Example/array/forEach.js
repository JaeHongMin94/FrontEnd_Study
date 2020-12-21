/*
  배열 내장함수
  forEach - 배열의 요소들을 순서대로 출력할 때 사용
*/
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// 방법1(선언적 방식)
function print(hero) {
  console.log(hero);
}
superheroes.forEach(print);

console.log('--------');

// 방법2(익명 함수)
superheroes.forEach(function (hero) {
  console.log(hero);
});

console.log('--------');

// 방법3(Arrow 함수)
superheroes.forEach((hero) => {
  console.log(hero);
});
