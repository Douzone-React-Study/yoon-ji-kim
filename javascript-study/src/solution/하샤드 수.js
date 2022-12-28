function solution(x) {
    var arr = (x+'').split('');
    var hap = 0;
    for(let num of arr){
        hap += Number(num);
        
    }
    var answer = true;
    if(x%hap !==0) answer = false;
    return answer;
}