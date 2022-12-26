function solution(n)
{
    let answer = 0;
    let num = n.toString().length;
    for(let i=num; i>0; i--){
        let div = 10 **(i-1);
        let num = Math.floor(n/div);
        n = Math.floor(n%div);
        console.log(num);
        answer += num;
    }

    return answer;
}