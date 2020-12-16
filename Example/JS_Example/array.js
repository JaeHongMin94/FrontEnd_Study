// 배열
const array = [1, 2, 3, 4, 5];
console.log(array, typeof array);

const array2 = [1, 'balbla', {}, 4];
console.log(array2[1]);

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

objects.push({
  name: '멍뭉이',
});
console.log(objects);
console.log(objects.length);

console.log();

const array3 = [1, true, { a: 1 }, [1, 2, 3, 4]];
array3.push(6);
console.log(array3, typeof array3);
console.log(array3[0], typeof array3[0]);
console.log(array3[1], typeof array3[1]);
console.log(array3[2], typeof array3[2]);
console.log(array3[3], typeof array3[3]);
console.log(array3[4], typeof array3[4]);
console.log(array3[5], typeof array3[5]);
