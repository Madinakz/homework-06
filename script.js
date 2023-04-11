
//#1
// function delay(ms) {
//     return new Promise(resolve=>setTimeout(resolve,ms))
//   }
  
//   delay(3000).then(() => alert('выполнилось через 3 секунды'))


//#2
  let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

  //отображается только первый resolve

  //#3
  promise.then(f1).catch(f2);
  promise.then(f1, f2);

  //коды разные. then отвечает за правильный ответ/resolve, а catch за ошибку/reject.
  // В первом варианте есть код и для правильного ответа и для ошибки. Во втором варианте только за правильный ответ