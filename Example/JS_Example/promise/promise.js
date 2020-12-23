/*
  Promise
  비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값을 나타냄
  ES6부터 JavaScript의 표준 내장 객체로 추가
  ES6를 지원하는 브라우저나 Node.js에서 전역에 있는 Promise를 확인할 수 있음
*/
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

// callback 지옥
increaseAndPrint(0, (n) => {
  increaseAndPrint(n, (n) => {
    increaseAndPrint(n, (n) => {
      increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
          console.log('작업 끝!');
        });
      });
    });
  });
});

// 해결 방법
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(new Error());
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.error(e);
  });
