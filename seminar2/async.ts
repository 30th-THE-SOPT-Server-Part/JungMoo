// console.log("안녕하세요!");

// setTimeout( ()=> {
//     console.log("set Time out");
// }, 2000);

// console.log("끝!");

// const condition: boolean = true;

// const promise = new Promise((resolve, reject) => {
//     if(condition) {
//         resolve('성공');
//     } else {
//         reject(new Error('reject !! error'));
//     }
// });

// promise.then((resolveData): void =>{
//     console.log(resolveData);
// });

// const restaurant = (callback: ()=>void, time:number) => {
//     setTimeout(callback, time);
// }

// const order = ():Promise<string> => {
//     return new Promise((resolve, reject) => {
//         restaurant(()=>{
//             console.log('레스토랑 진행 상황 - 음식 주문');
//             resolve('음식 주문 시작!');
//         }, 1000);
//     })
// }

// const cook = (progress: string):Promise<string> => {
//     return new Promise((resolve, reject)=>{
//         restaurant(()=>{
//             console.log('레스토랑 진행 상황 - 음식 조리 중');
//             resolve('음식 요리 중!');
//         }, 1000);
//     });
// }

// const serving = (progress: string):Promise<string> => {
//     return new Promise((resolve, reject) => {
//         restaurant(()=>{
//             console.log('레스토랑 진행 상황 - 음식 서빙');
//             resolve('음식 서빙 중');
//         }, 2500);
//     });
// }

// const eat = (progress: string):Promise<string> => {
//     return new Promise((resolve, reject)=>{
//         restaurant(()=>{
//             console.log('레스토랑 진행 상황 - 음식 먹는 중');
//             resolve('음식 먹는 중');
//         }, 2000);
//     })
// }

// order()
//     .then((progress:string) => cook(progress))
//     .then((progress:string) => serving(progress))
//     .then((progress:string) => eat(progress))
//     .then((progress:string) => console.log(progress))

// Promise.resolve(123).then(res => {
//     throw new Error(`에러 발생`);
//     return 456;
// }).then(res => {
//     console.log(res); // 절대 실행되지 않음!
//     return Promise.resolve(789);
// }).catch(error => {
//     console.log(error.message);
// })

let asyncFunc1 = (msg: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`asyncFunc1 - ${msg}`);
    }, 1000);
  });
};

let asyncFunc2 = (msg: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`asyncFunc2 - ${msg}`);
    }, 1500);
  });
};

let promiseMain1 = (): void => {
  asyncFunc1("server part")
    .then((result: string) => {
      console.log(result);
      return asyncFunc2("채정아");
    })
    .then((result: string) => {
      console.log(result);
    });
};

promiseMain1();

const asyncMain = () => {};
