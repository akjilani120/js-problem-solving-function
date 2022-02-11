// let sum=1;
// for(let i=6; i>=1; i--){
//     console.log(i)
//     sum=sum*i
// }
// console.log(sum)
function factorial(i){
    console.log(i)
    if(i==1){
        return 1;
    }
    return i*factorial(--i);
}
console.log(factorial(4))