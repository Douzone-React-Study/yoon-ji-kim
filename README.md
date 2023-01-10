# [JavaScript](https://learnjs.vlpt.us/)

##  12/23(금)
#### Github Organizations, Repository생성
#### 1장. 자바스크립트 입문
     01. Hello JavaScript ~ 08. 반복문
#### 프로그래머스 문제풀이
     과제: 평균 구하기, 약수의 합, 짝수와 홀수, 자릿수 더하기
    
## 12/26(월)
#### 1장. 자바스크립트 입문 ~ 2장
     1장: 배열내장함수, 프로토타입과 클래스
     2장: 삼항 연산자, Truthy And Falsy, 비구조화 할당
#### 프로그래머스 문제풀이
    풀이: 평균 구하기, 약수의 합, 짝수와 홀수, 자릿수 더하기
    과제: 자연수 뒤집어 배열로 만들기, 정수 제곱근 판별, 문자내 p와 y의 개수, x만큼 간격이 있는 n의 숫자, 문자열을 정수로 바꾸기, 하샤드 수

## 12/28(수)
#### 2장. 알고있으면 유용한 JS
    03. Truthy and Falsy ~ 08. scope의 이해
#### 프로그래머스 문제풀이
    풀이: 자연수 뒤집어 배열로 만들기, 정수 제곱근 판별, 문자내 p와 y의 개수, x만큼 간격이 있는 n의 숫자, 문자열을 정수로 바꾸기, 하샤드 수
    과제: 정수 내림차순으로 배치하기, 나머지가 1이 되는 수 찾기, 두 정수 사이의 합, 콜라츠 추측, 서울에서 김서방 찾기, 핸드폰 번호 가리기


## 1/10(화)
#### JS로 그림 앱 만들기
     [JS로 그램 앱 만들기](https://nomadcoders.co/javascript-for-beginners-2/lectures/3736)
     ```javascript
          /*
          ctx.fillRect(x,y,w,h) : 사각형 채우기
          ctx.stroke() : 선만
          ctx.fill() : 색 채우기
          ctx.beginPath() : 위에 선들과는 다른 경로를 만들겠다
          ctx.moveTo(x,y); :이동
          ctx.lineTo(x,y); :선 그리기
          */
          //코너 왼쪽 위가 0,0 
          ctx.fillRect(210 - 40, 200 - 30, 15,100);
          ctx.fillRect(350 - 40, 200 - 30, 15,100);
          ctx.fillRect(260 - 40, 200 - 30, 60,200);
          ctx.arc(250, 100, 50, 0, 2*Math.PI);
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = "white"
          ctx.arc(260 + 10, 80, 8,Math.PI, 2*Math.PI);
          ctx.arc(220 + 10, 80, 8,Math.PI, 2*Math.PI);
          ctx.fill();
     ```