function largestNumber(a , b, c){
    if(a>b && a>c){
        return a;
    }else if(b>c && b>a){
        return b;
    }else{
        return c
    }
}
let getlargest=largestNumber(250, 2621, 4110);
console.log(getlargest)

function smallesttNumber(a , b, c){
    if(a<b && a<c){
        return a;
    }else if(b<c && b<a){
        return b;
    }else{
        return c
    }
}
let getsmollest=smallesttNumber(250, 2621, 4110);
console.log(getsmollest)