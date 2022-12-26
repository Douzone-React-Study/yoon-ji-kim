//반복문
// for문
for (let i = 0; i < 10; i++) {
  // console.log(i);
}

const names = ["멍멍이", "야옹이", "멍뭉이"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//while문
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//for..of
//배열에 관한 반복문
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}

//for...in
//객체의 정보를 배열로 받아오기
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};
//[[키,값], [키, 값], [키 값]]
// console.log(Object.entries(doggy));
// [키,키,키]
// console.log(Object.keys(doggy));
//[값, 값, 값]
// console.log(Object.values(doggy));
//객체가 지닌 값에 대해 반복
for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}

// 배열의 숫자 중 3보다 큰 숫자로만 이루어진 배열 반환
function biggerThanThree(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 3) {
      result.push(nums[i]);
    }
  }
  return result;
}

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(nums));
