//  concat - 두 개의 배열을 합칠 때 사용, 기존의 배열 요소는 건드리지 않음
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated);
const concated2 = [...arr1, ...arr2];
console.log(concated2);
