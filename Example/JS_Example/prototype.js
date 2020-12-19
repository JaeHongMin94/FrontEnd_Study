// 프로토타입과 클래스
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function () {
  console.log(this.sound);
};

const dog = new Animal('개', '멍멍이', '멍멍!');
const cat = new Animal('고양이', '야옹이', '야옹~');

dog.say();
cat.say();

// 상속
function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

class Animal2 {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog2 extends Animal2 {
  constructor(name, sound) {
    super('게', name, sound);
  }
}

class Cat2 extends Animal2 {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog2 = new Dog('댕댕이', '왈왈!');
const cat2 = new Cat('냥냥이', '냐오오옹');

dog2.say();
cat2.say();

// 연습
class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name}을(를) 파는 음식점들: `);
    console.log(this.brands.join(', '));
  }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');

pizza.print();
chicken.print();
