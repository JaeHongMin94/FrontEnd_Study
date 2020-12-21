const slime = {
  name: '슬라임',
};

const cuteSlime = {
  ...slime,
  attribute: 'cute',
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple',
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];

console.log(animals);
console.log(anotherAnimals);
