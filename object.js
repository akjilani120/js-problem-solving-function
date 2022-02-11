var laptop={
    name:"Hp",
    ram:'4gb',
    rom:'500gb',
    processor:'intel i5',
    authon:'Jilani'
}
console.log(laptop)
console.log(laptop.authon);
laptop.authon="Ak Jilani"
console.log(laptop)
var chanceRam="ram";
laptop[chanceRam]='16gb';
console.log(laptop);
laptop['name']="Hight Quelity";
console.log(laptop)