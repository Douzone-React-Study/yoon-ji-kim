function solution(n) {
    var answer = 0;
    //루트 n 구하기
    let num = Math.sqrt(n);
    //루트 n이 정수이면 n은 x의 제곱
   if(Number.isInteger(num)){
       //(x+1)의 제곱구하기
        answer = (num+1) *(num+1);
    }else{
        //그렇지 않으면 -1 리턴
        answer = -1;
    }
    return answer;
}