

for(let i=1; i<=30;i++){
    if(i%3== 0 && i%5==0 ){
        console.log('Foobar')
    }
    else if(i%3==0){
       console.log("foo")
    }else if(i%5==0){
        console.log('bar')
    } else{
        console.log(i)
    }
   
}

// function positibe (numbers){
//     let addArray=[];
//     for(const element of numbers){
//         if(element>=0){
//             addArray.push(element)
//         }else if(element<=0){
//             break;
//         }else{
//             console.log(element)
//         }
//     }
//     return addArray;
// }
// let getArray=[10, 15, 84, 12, 25, 14, 95, 62, 82, 32, -54, 98, -65, 87, -75, 95, -24, -74, -34, -79]
// let positbeNumber=positibe(getArray);
// console.log(positbeNumber)
