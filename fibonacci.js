// let fibo=[0, 1];
// for(let i=2; i<=10; i++){
//     fibo[i]=fibo[i-1]+ fibo[i-2];
// }
// console.log(fibo)
function febonacci(num) {
    if(typeof num !="number"){
        return "Please enter number"
    }else if( num <2){
        return " Please give minimun 2 number"
    }
    let fibo=[0,1 ];
    for(let i=2; i<num; i++){
        fibo[i]=fibo[i-1] + fibo[i-2];
    }
   return fibo
}
const getFibo=febonacci(5)
console.log(getFibo)
