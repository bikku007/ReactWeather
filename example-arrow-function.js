// var names = ['Bikas','Rohit','Purvi'];
//
// names.forEach(function(name){
//   console.log('forEach',name);
// });
//
// names.forEach((name)=>{
//   console.log('arrowFunc',name);
// });
//
// names.forEach((name)=>console.log(name));


var returnMe = (name) => name+'!';

console.log(returnMe('Bikas'));


var addStatement = (a,b) =>{ return a+b; }
var addExpression = (a,b) => a+b;
console.log(addStatement(2,3));
console.log(addExpression(2,3));
