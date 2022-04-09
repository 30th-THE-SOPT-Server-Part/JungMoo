const sopt = {
    season : 30,
    group : ['YB', 'OB'],
    part : ['plan', 'design', 'server', 'android', 'ios', 'web'],
    president : '김규민',
    introduce : function(){
        this.part.map(x => {
            console.log(`sopt 내에는 ${x}파트가 있어요!`);
        })
    }
}

console.log(sopt.introduce());

let persons = [
    {
        name : '김소령',
        age : 5
    },
    {
        name : '박정무',
        age : 15
    }
]

console.log(persons);
console.log(typeof persons);

// js에서 함수는 1급 객체!
// 변수, 데이터 구조에 담을 수 있음
// 함수에 파라미터로 전달 가능
// 반환값으로 사용가능

// 함수 선언식 => 함수가 정의되기전에 호출될 수 있어 주의가 필요하다.
function menu1(dinner) {
    return `오늘 메뉴는 ${dinner} 입니다.`;
}

const menuDescription1 = menu1('삼겹살');
console.log(menuDescription1);

// 함수 표현식 => 실행 흐름이 함수에 도달했을 때 함수를 사용할 수 있다.
const menu2 = (dinner) => {
    return `오늘 메뉴는 ${dinner} 입니다.`;
}

const menuDescription2 = menu2('삼겹살');
console.log(menuDescription2);

let a = 1;
let b = 1;

if (a == b) console.log(`a == b`);
if (a === b) console.log(`a === b`);

let c = 2;
let d = 3;

// 값과 type을 검사?
if (typeof a === `number`) {
    console.log('number');
}

console.log(typeof typeof d);