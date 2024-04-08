const result = [];
Promise.all([
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(1);
    }, 1000);
  }),
  new Promise(function (resolve, reject) {
    resolve(2);
  }),
  new Promise(function (resolve, reject) {
    reject(3);
  }),
])
  .then((arr) => {
    result.push(arr);
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
    result.push(e);
  });
