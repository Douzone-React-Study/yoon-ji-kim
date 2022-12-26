const a = 1;
const b = 2;
const sum = a + b;
console.log(sum);

// //함수로 바꾸기
// function add(a, b) {
//   return a + b;
// }

// const result = add(1, 2);
// console.log(result);

// function hello(name) {
//   console.log("Hell0," + name + "!");
// }
// hello("World!");
// ==> ES6로 구현
function hello(name) {
  // console.log(`Hello, ${name}!`);
}
hello("World");

//화살표 함수.
// 함수명 = (파라미터) => {
// 코드블록
// }
const add = (a, b) => {
  return a + b;
};
// == const add = (a,b) => a+b;
console.log(add(1, 2));
