/**
 * Created by 明 on 2019/3/25.
 */
// let tmc = function(a) {
//   console.log(a);
// }
// tmc(1)
//
// let tmcs = a => {
//   let c = a;
//   console.log(c);
// }
// tmcs(4)

let obj = {
  name: 'txm',
  age: 23,
  sex: '男'
}
// console.log(obj.name);
// console.log(obj['name']);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// for(let item in obj) {
//   console.log(item);
//   console.log(obj[item]);
// }

for(let i=0; i<5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000)
}

