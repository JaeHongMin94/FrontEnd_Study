// reduce - 배열 안에 모든 값들을 사용하여 어떤한 값을 연산해야 할 때 사용
const arr = [1, 2, 3, 4, 5];

let sum = 0;
arr.forEach((n) => {
  sum += n;
});
console.log(sum);

sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

let avg = arr.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);
console.log(avg);

// reduce 다른 예시
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((accumulator, current) => {
  if (accumulator[current]) {
    accumulator[current] += 1;
  } else {
    accumulator[current] = 1;
  }
  return accumulator;
}, {});
console.log(counts);
