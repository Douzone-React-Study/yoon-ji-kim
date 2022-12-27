//프로토타입과 클래스

// function Animal(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//     // this.say = function() {
//     //     console.log(this.sound);
//     // };
// }
//프로토타입: 객체 생성자 함수 아래
//.prototype.[원하는키] = 코드
// Animal.prototype.say = function() {
//     console.log(this.sound);
// };
// Animal.prototype.sharedValue =1;
//객체 생성자
// const dog = new Animal('개', '댕댕', '멍멍');
// const cat = new Animal('고양이', '야옹', '애옹');
//객체 생성자 상속받기
// function Dog(name, sound) {
//     Animal.call(this, '개', name, sound);
// }
// Dog.prototype = Animal.prototype;
// function Cat(name, sound) {
//     Animal.call(this, '고양이', name, sound);
// }
// Cat.prototype = Animal.prototype;

// const dog = new Dog('멍멍이', '멍멍');
// const cat = new Cat('야옹이', '야옹')
// dog.say();
// cat.say();

// console.log(dog.sharedValue);
// console.log(cat.sharedValue);

//클래스
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
} 
//상속 extends
class Dog extends Animal {
    constructor(name, sound) {
        super('개', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

// const dog = new Animal('개', '멍멍이', '멍멍');
const dog = new Dog('개', '멍멍이', '멍멍');
// const cat = new Animal('고양이', '야옹이', '야옹');
const cat = new Cat('고양이', '야옹이', '야옹');

dog.say();
cat.say();