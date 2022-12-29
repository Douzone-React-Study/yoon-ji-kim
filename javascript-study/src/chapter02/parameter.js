//함수의 기본 파라미터
//원의 넓이를 구하는 함수
// function calCircleArea(r){
//     const radius = r || 1;
//     return Math.PI * radius *radius;
// }

//화살표 함수
const calCircleArea = (r = 1) => Math.PI * r * r;

// const area = calCircleArea();  //NaN
const area = calCircleArea();
console.log(area);
