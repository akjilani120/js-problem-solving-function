function totalSum(numbers){
 let sum=0;
 for(let i=0; i<numbers.length; i++){
     let element= numbers[i];
     sum = sum + element;
 }
 return sum;
}
const getSum=totalSum([51, 620, 410, 850 , 751, 620])
console.log(getSum)