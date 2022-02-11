// Problem:1  anaToVori  
function anaToVori (ana){  
    if(typeof ana !='number'){
        return "Please give number";
    } else if(ana <=0){
        return "minimun give 1 number";
    }
    const vori= ana/16;
  return vori;
}
const totalVori=anaToVori(48);
console.log(totalVori);

//Problem:2 pandaCost 
function pandaCost(singara, samuca, jilapi){
    let singaraPrice=7;
    let samucaPrice=10;
    let jilapiPrice=15;
    const totalSingaraPrice=singaraPrice*singara;
    const totalSamucaPrice=samucaPrice * samuca;
    const totalJilapiPrice= jilapiPrice*jilapi;
    const totalPrice= totalSingaraPrice + totalSamucaPrice+totalJilapiPrice;
    return totalPrice;
}
const getPrice=pandaCost(4, 10, 15);
console.log(getPrice);

//Problem: 3 picnicBudget 
function picnicBudget(picnicPerson){
    let firstPicnicBudget=5000;
    let secondPicnicBudget=4000;
    let thirdPicnicBudget=3000;
    if(picnicPerson<=100){
        const picnicMoney=picnicPerson*firstPicnicBudget;
        return picnicMoney;
    } else if(picnicPerson<=200){
        let first100Person=100*firstPicnicBudget;
        let restPicnicPerson = picnicPerson-100;
        let second100Person= restPicnicPerson*secondPicnicBudget;
        let secondTotalPerson=first100Person + second100Person;
        return secondTotalPerson;
    }else{
        let first100Person=100*firstPicnicBudget;
        let second100Person= 100*secondPicnicBudget;
        let restPicnicPerson=picnicPerson-200;
        let thirdPicnicPerson=restPicnicPerson*thirdPicnicBudget;
        let thirdTotalPerson=first100Person + second100Person +thirdPicnicPerson;
        return thirdTotalPerson;
    }
}
const getTotalPicnicBudget=picnicBudget(220);
console.log(getTotalPicnicBudget);

//Problem:4 oddFriend 
function oddFriend(friend){
   
    for(const oddPerson of friend ){
       if(oddPerson.length%2 !=0){
        return oddPerson;
       }
    }
    
}
let friendList=['Amin', 'Abdul', 'Kader', 'Jilani', 'Ashikur','Khokon', 'Leon']
let getOddFriend=oddFriend(friendList);
console.log(getOddFriend)
