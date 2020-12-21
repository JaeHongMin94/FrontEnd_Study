const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple',
};

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);

const { attribute, ...slime } = rest;
console.log(slime);

// 배열에서의 rest는 항상 맨 뒤에 사용해야함
const numbers = [1, 2, 3, 4, 5, 6, 7];

const [one, two, ...numbersRest] = numbers;
console.log(one);
console.log(two);
console.log(numbersRest);

// 함수 파라미터에서의 rest
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const sum2 = function (...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
};
console.log(sum2(1, 2, 3));

const sum3 = (...rest) => rest.reduce((acc, current) => acc + current, 0);
console.log(sum3(1, 2, 3, 4, 5));

// 함수 인자에서의 spread
function subtract(x, y) {
  return x - y;
}

const result = subtract(1, 2);
console.log(result);
const numbers2 = [1, 2];
console.log(subtract(...numbers2));
console.log(sum(...numbers2));

// 함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.
function max(...numbers) {
  return numbers.reduce(
    (acc, current) => (current > acc ? current : acc),
    numbers[0]
  );
}

const result3 = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result3);
