function solution(n) {
    var answer = [];
    //숫자 -> 문자열 -> 문자열 배열
    var arr = (n+"").split("").reverse();
    //문자 -> 숫자
    answer = arr.map((i) => Number(i));
    return answer;
     
}