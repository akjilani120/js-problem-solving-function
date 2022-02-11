function reGetFunc(number){
    let factorial=1;
    let i=number;
    while(i >=1){
        factorial=factorial*i;
        i--;
    }
    return factorial;
}
const getStart=reGetFunc(7);
console.log(getStart);