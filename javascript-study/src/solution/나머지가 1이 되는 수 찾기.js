function solution(n) {
    var answer = 999999;
    for(let i=1; i<n; i++){
        //1~n-1까지 나누면서
        //나머지가 1이고 answer보다 작으면 answer에 저장
        if(n%i ==1 && i<answer) answer =i;
    }
    return answer;
}