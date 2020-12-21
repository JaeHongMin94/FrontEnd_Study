// 배열
const array = [1, 2, 3, 4, 5];
console.log(array, typeof array);

const array2 = [1, 'blabla', {}, 4]; // 자바스크립트에서는 배열에 여러타입의 값을 넣을 수 있다.
console.log(array2[1]); // 배열에 [1]자리 요소 출력
// 배열의 index시작은 0으로 시작하기 때문에 첫번째자리는 array[0]이다.

console.log('--------');

const objects = [{ name: '멍멍이' }, { name: '야옹이' }]; // 객체로 이루어진 배열
console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

// push - 기존의 배열에 새로운 항목을 추가
objects.push({
  name: '멍뭉이',
});
console.log(objects);
console.log(objects.length);

console.log('--------');

const array3 = [1, true, { a: 1 }, [1, 2, 3, 4]];
array3.push(6);
console.log(array3, typeof array3);
console.log(array3[0], typeof array3[0]);
console.log(array3[1], typeof array3[1]);
console.log(array3[2], typeof array3[2]);
console.log(array3[3], typeof array3[3]);
console.log(array3[4], typeof array3[4]);
console.log(array3[5], typeof array3[5]); // 배열의 크기는 5이기 때문에 undifined가 출력된다.
