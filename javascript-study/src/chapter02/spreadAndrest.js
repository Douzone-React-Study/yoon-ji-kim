//spread: 객체 혹은 배열을 펼칠 수 있음
//rest: 객체, 배열, 함수의 파라미터에서 사용 가능

const slime = {
    name : '슬라임'
};

const cuteSlime = {
    // name : '슬라임',
    ...slime,
    attribute : 'cute'
};

const purpleCuteSlime = {
    // name : '슬라임',
    // attribute : 'cute',
    ...cuteSlime,
    color: 'purple'
};

// console.log(slime);
// console.log(cuteSlime);
// console.log(purpleCuteSlime);

const animals = ['개', '고양이'];
const anotherAnimals = [...animals, '비둘기'];

// console.log(animals);
// console.log(anotherAnimals);
//배열에서 spread 연산자 여러번 사용
const  numbers = [1,2,3,4,5];
const spreadNumbers = [...numbers, 1000, ...numbers];
// console.log(spreadNumbers);

// const {color, ...rest} = purpleCuteSlime;
// console.log(color);
// console.log(rest);  //color를 제외한 값이 들어 있음

const {color, ...cuteslime} = purpleCuteSlime;
// console.log(color);
// console.log(cuteslime);

const nums = [0, 1, 2, 3, 4 ,5, 6];
const[one,...rest] = nums;
// console.log(one);  //원하는 값 밖으로 꺼내기
// console.log(rest);

function sum (a,b,c,d,e,f){
    let sum =0;
    if(a) sum += a;
    if(b) sum += b;
    if(c) sum += c;
    if(d) sum += d;
    if(e) sum += e;
    if(f) sum += f;
    return sum;
}

function sum(...rest) {
    return rest.reduce((acc, current) => acc+ current,0);
}
const result = sum(1,2,3,4,5,6);
// console.log(result);

//배열 안 원소를 모두 파라미터로 넣고 싶다면
// const res = sum(
//     nums[0],
//     nums[1],
//     nums[2],
//     nums[3],
//     nums[4],
//     nums[5],
//     nums[6],
// );
// ==> spread
const res = sum(...nums);
console.log(res);

function max(...rest) {  //함수 파라미터가 몇개가 될 지 모르는 상황에서 유용
    return Math.max(...rest);
  }
  
  const answer = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(answer);