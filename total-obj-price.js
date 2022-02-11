// let products=[
//     {name:"laptop", price:45000},
//     {name:"shirt", price:500},
//     {name:"watch", price:5000},
//     {name:"phone", price:55000}
// ]
// let totalPrice=0;
// for(let product of products){
//    totalPrice=totalPrice+ product.price;
// }
// console.log(totalPrice)
let products=[
    {name:"laptop", price:45000,  quentity:2},
    {name:"shirt", price:500, quentity:10},
    {name:"watch", price:5000, quentity:2},
    {name:"phone", price:55000, quentity:1}
]
let totalPrice=0;
for(let productyfity of products){
   let  totalProduct= productyfity.price * productyfity.quentity;
   totalPrice= totalProduct + totalPrice;
}
console.log(totalPrice)