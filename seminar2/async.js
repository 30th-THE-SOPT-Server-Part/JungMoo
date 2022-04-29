console.log("안녕하세요!");
setTimeout(function () {
    console.log("set Time out");
}, 2000);
console.log("끝!");
var condition = true;
var promise = new Promise(function (resolve, reject) {
    if (condition) {
        resolve('성공');
    }
    else {
        reject(new Error('reject !! error'));
    }
});
promise.then(function (resolveData) {
    console.log(resolveData);
});
var restaurant = function (callback, time) {
    setTimeout(callback, time);
};
var order = function () {
    return new Promise(function (resolve, reject) {
        restaurant(function () {
            console.log('레스토랑 진행 상황 - 음식 주문');
            resolve('음식 주문 시작!');
        }, 1000);
    });
};
var cook = function (progress) {
    return new Promise(function (resolve, reject) {
        restaurant(function () {
            console.log('레스토랑 진행 상황 - 음식 조리 중');
            resolve('음식 요리 중!');
        }, 1000);
    });
};
var serving = function (progress) {
    return new Promise(function (resolve, reject) {
        restaurant(function () {
            console.log('레스토랑 진행 상황 - 음식 서빙');
            resolve('음식 서빙 중');
        }, 2500);
    });
};
var eat = function (progress) {
    return new Promise(function (resolve, reject) {
        restaurant(function () {
            console.log('레스토랑 진행 상황 - 음식 먹는 중');
            resolve('음식 먹는 중');
        }, 2000);
    });
};
order().then(function (progress) { return cook(progress); });
