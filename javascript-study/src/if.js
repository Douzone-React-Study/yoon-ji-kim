//조건문 (if문, if-else문, if-elseif문, switch/case문)
// const a = 1;
// if (a + 1 === 2) {
//   console.log("a+1이 2입니다.");
// }

// const a = 1;
// if (true) {
//   const a = 2;
//   console.log('if문 안의 a 값은 ' + a);
// }
// console.log('if문 밖의 a 값은 ' + a);

const device = "ipad";

switch (device) {
  case "iphone":
    console.log("아이폰!");
    break;
  case "ipad":
    console.log("아이패드!");
    break;
  case "galaxy note":
    console.log("갤럭시 노트!");
    break;
  default:
    console.log("모르겠네요..");
}
