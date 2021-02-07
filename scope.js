let bonus = 20;
function sum(first, second){
    let result = first + second;
    console.log(bonus);
    if(result > 9){
        var mood = "happy";
        mood = "fisky";
        mood = 'funky';
        mood = "cranky";
        console.log(mood);
    }
    return result;
}
const output = sum(3,7);
console.log(output);
console.log(bonus);
// thatjsdude.com --> scope&closure