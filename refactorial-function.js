function refactorialFuct(item){
    var factorial=1;
    for(var i=1; i<=item; i++ ){
        factorial=factorial*i;
       
    }
    return factorial; 
  
}
var factorialMain=refactorialFuct(3);
console.log(factorialMain)