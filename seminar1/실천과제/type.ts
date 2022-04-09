let n = 'hello world!';
console.log(n);

let ages:Array<Number> = [1,2,3,4];
let weights: Number[] = [1,2,3,4,5];

console.log(typeof ages);
console.log(weights);

let obj: object = {

}

let obj2: Object = {

}

// object != Object
// 왜? 
// Object는 자바스크립트의 모든 생성자를 extend => 즉 자바스크립트의 모든 타입이 할당될 수 있다.
// object는 원시타입을 제외한 모든 타입을 할당 가능. 

const f1 = (data: Object) => {
    console.log(data);
}

const f2 = (data: object) => {
    console.log(data);
}

f1([1,2,3,4,5]);
f1('hishih');
f1(1);

// f2('hi!') => Argument of type 'string' is not assignable to parameter of type 'object';

let myName: any = 'park';
let myNameLength = (myName as string).length;
console.log(myNameLength);


