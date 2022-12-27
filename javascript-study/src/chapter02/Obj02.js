//비구조화 할당(구조분해) 문법
// const object = {a:1, b:2};
const object = {a:1};
// const {a,b } = object;

// console.log(a); //1
// console.log(b); //2
// function print({a,b}){
    // 기본값 설정
// function print({a,b =2}){
//     console.log(a); //1
//     console.log(b); //2
// }

// print(object);
const animal = {
    name: '멍멍이',
    type: '개'
};
// const nickname = animal.name;
// animal객체에 있는 name을 nickname으로 선언하겠다.
const {name : nickname} = animal
// console.log(nickname);

// 배열 비구조화 할당
const arr = [1];
const [one, two =2] =arr;

console.log(one);
console.log(two);

//깊은 값 비구조화 할당
const deepObject = {
    state : {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
};
//name, languages, value 값 밖으로 꺼내기
// 방법1. 비구조화 할당 문법 두번 사용하기
// const {name , languages} = deepObject.state.information;
// const {value} = deepObject;
// 방법2. 한번에 모두 추출하기
const {
    state : {
        information: {name, languages}
    },
    value
} = deepObject;
const extracted = {
    name,
    languages,
    value
};
console.log(extracted);

