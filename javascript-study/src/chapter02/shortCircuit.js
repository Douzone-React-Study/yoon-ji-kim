//단축 평가 논리 계산법
const dog = {
    name: '멍멍이'
};

// function getName(animal) {
//     return animal.name;
// }

//제대로된 객체가 주어지지 않았을 경우
// function getName(animal) {
//     if(animal){
//         return animal.name;
//     }
//     return undefined;
// }
//&& 연산자 사용해서 코드 단축시키기
function getName(animal) {
    // animal이 truthy 값이면 animal.name이 결과값
    // animal이 falsy 값이면 animal이 결과값
    return animal && animal.name;
}
// const name = getName(dog);
const name = getName(); //Cannot read properties of undefined (reading 'name')
console.log(name);

// || 연산자로 코드 단축시키기
const namelessDog = {
    name:''
};
// function getName(animal){
//     const name = animal && animal.name;
//     if(!name) {
//         return '이름이 없는 동물입니다';
//     }
//     return name;
// }

//A&&B 에서 A가 truthy한 값이면 b가 결과 값
console.log(true && 'hello');   //hello
console.log(false && 'hello');  //false
console.log('hello' && 'bye');  //bye
console.log(null && 'hello');   //null
console.log(undefined && 'hello');//undefined
console.log('' && 'hello');     //''
console.log(0 && 'hello');      //0
console.log(1 && 'hello');      //hello
console.log(1 && 1);            //1