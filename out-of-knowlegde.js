function bestFriend(friend){
let bestLengh='';
for(element of friend){
    if(element.length>bestLengh.length){
        bestLengh=element
    }
}
return bestLengh
}
const friendList=['Abdul Kader Jilani ', 'Md Aminul Islam Amin', 'Md Rokunur Jaman Khokon', 'Md habibur Rohman']
const getFriend=bestFriend(friendList)
console.log(getFriend)