// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//
//       reject('City not found!');
//       resolve(79);
//     },1000);
//   });
// }
//
// getTempPromise('Bangalore').then(function(temp){
//   console.log('Promise success ',temp);
// }, function(err){
//   console.log('Promise error', err);
// });
//


function addPromise(a, b){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('Invalid parameters');
      }
    },1000);
  })
}

addPromise(10,'20').then(function(result){
    console.log('Promise success :: '+result);
}, function(err){
  console.log('Promise error :: '+err);
});
