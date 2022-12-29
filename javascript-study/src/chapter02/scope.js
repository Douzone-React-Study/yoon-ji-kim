//Global Scope: 코드의 모든 범위에서 사용가능
//Function Scopre: 함수 내에서만 사용 가능
//Block Scope: 특정 블록 내부에서만 사용 가능

// const value = 'hello!';
// function myFunc() {
//     const value = 'bye!';
//     // const anotherValue = 'world';
//     // function functionInside() {
//     //     console.log('functionInside: ');
//     //     console.log(value);
//     //     console.log(anotherValue);
//     // }
//     // functionInside();
//     // console.log('myFunc: ');
//     // console.log(value);
//     if(true){
//         const value = 'world';
//         console.log('function scope: ');
//         console.log(value);
//     }
//     console.log('function scope: ');
//     console.log(value);
// }

// function otherFunc() {
//     console.log('otherFunc: ');
//     const value = 'bye!';
//     console.log(value);
// }

// myFunc();
// otherFunc();

// console.log('global scope: ');
// console.log(value);
// console.log(anotherValue);

// Hoisting : 아직 선언되지 않은 함수/변수를 "끌어올려서" 사용할 수있는 JS 작동 방식
// Const와 let은 hoishing이 발생하지 않고, 에러가 발생
myFunction();
function myFunction() {
    console.log('hello w');
}