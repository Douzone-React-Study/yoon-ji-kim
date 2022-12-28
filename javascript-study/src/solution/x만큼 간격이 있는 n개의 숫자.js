function solution(x, n) {
    var answer = [];
    let num = x;
    for(let i=1; i<=n; i++){
        //x씩 증가 ==> x = x*1
        //            x+x = x*2
        //           x+x+x = x*3
        //       -->        x에 i만큼 곱하기
        answer[i-1]= num *i;
    }
    return answer;
}