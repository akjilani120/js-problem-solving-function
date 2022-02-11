const phones=[
    {brandName:"Oppo", price:15000, storage:8, camera:5},
    {brandName:"Mi", price:85000, storage:16, camera:60},
    {brandName:"vivo", price:14000, storage:4, camera:13},
    {brandName:"samsung", price:4500, storage:8, camera:32},
    {brandName:"Taitanic", price:5000, storage:2, camera:5},
    {brandName:"iphone", price:45000, storage:8, camera:32},
]
let chespsePrice=phones[0];
for(let i=0; i<phones.length; i++){
    let element=phones[i]
    if(element.price<chespsePrice.price){
        chespsePrice=element;
    }
}
console.log(chespsePrice.price)

