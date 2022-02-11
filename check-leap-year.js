
function checkLeapYear(years){
    if(((years % 4==0) && (years % 100 != 0)) || (years % 400==0)){
        return"This is year is leap Year"
    }else{
        return"This is year is not leap Year"
    }
}
const checkLeap= 2100;
const checkLeap2=checkLeapYear(checkLeap)
console.log(checkLeap2)

function leap(year){
    if(year%4==0){
        return true;
    }
    return false
}
const specialLeap=leap(2100)
console.log(specialLeap)