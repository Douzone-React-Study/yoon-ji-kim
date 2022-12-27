//삼항 연산자
// 조건 ? true일때 : false일때
const arr = [];
// let text = '';
// if(arr.length === 0) {
//     text = '배열이 비어있습니다.';
// }else {
//     text = '배열이 비어있지 않습니다.';
// }
let text = arr.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';
console.log(text);

const condition1 = false;
const condition2 = false;

const value = condition1
    ? '와우!'
    : condition2
    ? 'blabla'
    : 'foo';

console.log(value);