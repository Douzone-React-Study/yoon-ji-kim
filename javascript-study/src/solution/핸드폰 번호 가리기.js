function solution(phone_number) {
    var answer = '';
    //전화번호 길이 구하기
    var len = phone_number.length;
    //*을 4자리를 제외한 길이 만큼 반복 + 나머지 4자리 숫자
    answer = '*'.repeat(len-4) + phone_number.substring(len-4, len);
    return answer;
}