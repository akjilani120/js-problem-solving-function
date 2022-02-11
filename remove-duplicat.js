
// function  DuplicatNames(namesFriend) {
//     let unique=[];
//     for(const element of  namesFriend){
       
//         if(unique.indexOf(element)== -1){
//             unique.push(element)
//         }
//     }
//     return unique;
// }
// const names=['ajit', 'ajil', 'ajim', 'abul', 'akash', 'alam', 'amir', 'ajim', 'alim', 'abul', 'ajit', 'abul']
// const duplicat=DuplicatNames(names)
// console.log(duplicat)

function  DuplicatNames(namesFriend) {
    let unique=[];
    for(const element of  namesFriend){
       
        if(unique.indexOf(element)== -1){
            unique.push(element)
        }
    }
    return unique;
}
const numbers=[10, 25, 14, 151, 10, 14, 852, 210, 15, 25, 65, 25, 32]
const duplicat=DuplicatNames(numbers)
console.log(duplicat)