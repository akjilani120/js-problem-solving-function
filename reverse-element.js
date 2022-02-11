let helloWord="Hello I am ok";
function reverseWord(params) {
    let reverse='';
    for(const letter of params){
       reverse=letter + reverse;
    }
    return reverse;
}
console.log(reverseWord(helloWord))

