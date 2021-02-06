// Falsy List:  যেইগুলো সত্য হবে না সেই ধরনের কন্ডিশন
// false
// 0 holo negative mean kore
// ""
// undefined
// null
// NaN not a number

// Truthy List: যেইগুলো সত্য হবে সেই ধরনের কন্ডিশন
// '0', ' ', [], {}, 
// koteshoner moddhe ja ja porbe sobi string sudhu empty string tai holo falsy baki sobi truthy

let name = null;
// let age = 0;
// if(age || age == 0){ // ai khatre 0 true condioton bujhat epare but amni age bosaile aita negative meaning suru korbe
console.log(name);
if(name) {
    console.log("Condition is true");
}
else {
    console.log("Condition is false");
}