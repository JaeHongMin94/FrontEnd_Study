function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  // this.say = function () {
  //   console.log(this.sound);
  // };
}

// 객체에서 만드는 함수보다는 따로 만드는것이 더 효율적
Animal.prototype.say = function () {
  console.log(this.sound);
};

const dog = new Animal('개', '멍멍이', '멍멍!!');
const cat = new Animal('고양이', '야옹이', '야옹~');

dog.say();
cat.say();

console.log('---------');

// 객체 생성자 상속받기
function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog2 = new Dog('뭉뭉이', '왈왈!!');
const cat2 = new Cat('냥이', '냐아앙!!');

dog2.say();
cat2.say();
