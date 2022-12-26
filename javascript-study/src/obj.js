//객체
const dog = {
  name: "멍멍이",
  age: 2
  // 키: 원하는 값
};
console.log(dog.name);
console.log(dog.age);

//키에는 공백X 또는 따옴표로 감싸기
const sample = {
  "key with space": true
};

const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨"
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카"
};
// console.log(ironMan);
// console.log(captainAmerica);

//함수에서 객체를 파라미터로 받기
// function print(hero) {
//   const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}`;
//   console.log(text);
// }

//객체 비구조화 할당, 객체 구조 분해
// function print(hero) {
//   const { alias, name, actor } = hero;
//   const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}`;
//   console.log(text);
// }
function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}`;
  console.log(text);
}
print(ironMan);
print(captainAmerica);

//객체 안에 함수 넣기
//객체 안의 함수에서 this는 자신이 속해있는 객체를 가르킴

const cat = {
  name: "고양이",
  sound: "야옹!",
  // say: function say() {
  say: function () {
    console.log(this.sound);
  }
};
cat.say();

// Getter 함수와 Setter 함수
// 특정 값 수정, 조회 시 원하는 코드 실행시킬 수 있음
// const numbers = {
//   a: 1,
//   b: 2,
//   get sum() {
//     console.log("sum 함수 실행");
//     return this.a + this.b;
//   }
// };
// // 조회 시 함수가 실행되어 결과값 출력
// console.log(numbers.sum);
// numbers.a = 5;
// console.log(numbers.sum);

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log("a가 바뀝니다.");
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log("b가 바뀝니다.");
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
