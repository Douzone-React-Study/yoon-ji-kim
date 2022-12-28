function solution(s){
    var answer = true;
    let pNum = 0, yNum =0;
    s = s.toUpperCase(); //문자열 대문자로 변경

    // for..in : object의 key값에 접근
    // for..of : Iterable 객체 사용가능(String, Array, Typed Array, Map, Set)
    for(let c of s){     //문자열 반복문 돌면서 P,Y 개수 세기
        if(c === 'P') pNum++;
         if(c === 'Y') yNum++;
     }
     if((pNum + yNum)===0 ) return true;  //하나도 없는경우 True
     if(pNum === yNum){                   //p와 y 개수가 같으면 True
         answer = true;
     } else{                              //다르면 False
         answer = false;
     }
     return answer;
}