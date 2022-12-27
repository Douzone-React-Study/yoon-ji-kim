// Truthy: Falsy이외의 값
// Falsy: undefined, null, 0 ,'', NaN

function print(person) {
    // if(person === undefined || person ===null) {
    //     return;
    // }
    if(!person) {
        console.log('person이 없습니다.');
        return;
    }
    console.log(person.name);
}

// const person = {
//     name : 'John'
// };
const person = null; // Cannot read properties of null (reading 'name')

// print();    //Cannot read properties of undefined (reading 'name')
print(person);

// Falsy: undefined와 null은 Falsy한 값입니다.
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN); //Not A Number
//  ---> true

//NaN
const num = parseInt('15', 10); //10진수 15를 숫자로 변환하겠다
console.log(num);
const notnum = parseInt('야호~', 10);
console.log(notnum); //NaN

console.log(!3);
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{value: 1});
// ---> false

const value = {a:1};
if(value) {
    console.log('value가 Truty');
}

const truthy = value ? true : false;
console.log(truthy);
// const truthy = !!value;