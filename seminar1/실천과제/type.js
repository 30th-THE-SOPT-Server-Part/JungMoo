let name = 'boong_u';
let age = 18;
let server = true;

let desc = `안녕하세요. 제 이름은 ${name}입니다. 제 나이는 ${age}입니다. 저는 ${server ? "서버" : "서버가아님"}입니다.`;

console.log(desc);

console.log(typeof null);

console.log(typeof undefined);

console.log(`null == undefined의 결과 : ${null == undefined}`);
console.log(`null === undefined의 결과 : ${null === undefined}`);

let numArray = [1,2,3,4,5];
console.log(numArray);

let newNumArray = numArray.map(x => x * 2);
newNumArray.map(x => console.log(x));