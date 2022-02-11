// Feet To inche
// function feetToInche(feet){
//     const inche=feet*12;
//     return inche;
// }
// console.log(feetToInche(42));

// // Centi meter to Meter
// function centimeterToMeter(cente){
//     let meter=cente/100;
//     return meter;
// }
// console.log(centimeterToMeter(5000));

// // book calculation
// function pageRequirement(firstBook, secondBook, thirdBook){
//     const firstBookPage=100;
//     const secondBookPage=200;
//     const thirdBookPage=300;

//     let firstBookQuentity=firstBookPage*firstBook;
//     let secondBookQuentity=secondBookPage*secondBook;
//     let thirdBookQuentity=thirdBookPage*thirdBook;
//     const totalBookList=firstBookQuentity+ secondBookQuentity+ thirdBookQuentity

//     return totalBookList;

// }
// console.log(pageRequirement(10, 8, 5));

// // largest array lengh

// function friendLength(friendList){
//  let largestLengh='';
//  for(const element of friendList){
//     if(element.length>largestLengh.length){
//         largestLengh=element;
//     }
//  }
//  return largestLengh;
// }
// let bestList=['Abdul kader Jilani', 'AK jilani', 'Aminul islam AMin', 'Ashikur Islam Ashik']
// console.log(friendLength(bestList))

// let i=2;
// while(i<=17){
//     console.log(i)
//     i+=2;

// }
function checkOdd(number){
    if(number%2!=0){
        return"I am odd"
    }else{
        return"I am even"
    }
}
console.log(checkOdd(4121))