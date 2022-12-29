//조건문 더 스마트하게 쓰기
// function isAnimal(text) {
//     return (
//         text === '고양이' || text ==='개' || text ==='거북이' || text === '너구리'
//     );
// }

// function isAnimal(text) {
//     const animals = ['고양이', '개', '거북이', '너구리'];
//     return animals.includes(text);
// }

const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);
// console.log(isAnimal('개'));        //true
// console.log(isAnimal('노트북'));    //false

//값에 따라 다른 결과물 반환 시
// function getSound(animal) {
//     if(animal === '개') return '멍멍!';
//     if(animal === '고양이') return '냐옹!';
//     if(animal === '참새') return '짹짹!';
//     if(animal === '비둘기') return '구구!';
//     return '...?';
// }

function getSound(animal) {
    const sounds = {
        개 : '멍멍!',
        고양이 : '야옹',
        참새 : '짹짹',
        비둘기 : '구 구'
    };
    return sounds[animal] ||'...?';
}
console.log(getSound('개'));  
console.log(getSound('비둘기'));  
console.log(getSound('댕댕'));  

//값에 따라 실행해야하는 구문이 다를 때

function makeSound(animal) {
    const tasks = {
        개() {
            console.log('멍멍');
        },
        고양이() {
            console.log('야옹');
        },
        비둘기() {
            console.log('구 구');
        },
    };
    if(!tasks[animal]){
        console.log('...?');
        return;
    }
    tasks[animal]();
}

makeSound('개');
makeSound('비둘기');