//배열 내장함수

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// for(let i =0; i<superheroes.length; i++){
//     console.log(superheroes[i]);
// }

//1. forEach
// superheroes.forEach(hero => {  //콜백함수: 함수형태의 파라미터를 전달하는 것
//     console.log(hero);
// });

const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const squared = [];
// for(let i=0; i<array.length; i++){
//     squared.push(array[i] * array[i]);
// }
// console.log(squared);
//1. forEach
// array.forEach(arr =>{
//     squared.push(arr * arr);
// });
//2. Map
// const square = n => n*n;
//map 함수의 파라미터는 변화함수(변화를 주는 함수 전달)
// const squared = array.map(square); //<----square는 변화함수
const squared = array.map(n=> n*n);
console.log(squared);

// indexOf: 원하는 항목이 몇번째 원소인지 찾아주는 함수
// index는 0부터 시작
// const index = superheroes.indexOf('토르');
// console.log(index);

// findIndex 배열 안에 있는 값이 숫자,문자,불리언이 아닐때
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    },
];

const idx = todos.findIndex(todo => todo.id ===3);
console.log(idx);

//find: 인덱스가 아닌 찾아낸 값 자체를 반환
const todo = todos.find(todo => todo.id ===3);
console.log(todo);

//filter: 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열 생성
// const tasksNotDone = todos.filter(todo => todo.done === false);
const tasksNotDone = todos.filter(todo => !todo.done); 
console.log(tasksNotDone);

//splice: 배열에서 특정 항목 제거할 때 사용
const numbers = [10, 20, 30, 40 ,50];
const index = numbers.indexOf(30);
