const products=[
    {name:'Hp laptop', price:75000},
    {name:'MacBook laptop', price:75000},
    {name:'Lenovo laptop', price:70000},
    {name:'asus laptop', price:65000},
    {name:'iphone 14 phone', price:60000},
    {name:'sumsung j5 phone', price:28000},
    {name:'vivo Y20', price:14000},
    {name:'sumsung watch', price:4000},
    {name:'Apple watch', price:10000}
]
function searchProducts(products,  searchText){
    let searchItems=[];
    for( const product of products){
        if(product.name.includes(searchText)){
            searchItems.push(product);
        }
    }
    return searchItems;
}
console.log(searchProducts(products, 'laptop'))

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);
}

   