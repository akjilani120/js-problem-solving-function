function largestNumber (params) {
    let largest=0;
    for(let i=0; i<params.length; i++){
        let element=params[i]
       if(element>largest){
           largest=element;           
       }
    }
    return largest;
}
const getlargest=largestNumber([10, 15, 85, 65, 784, 960, 810, 320]);
console.log(getlargest);