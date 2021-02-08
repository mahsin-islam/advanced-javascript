function doSomething() {
    console.log(3333);
}
console.log(44444);
// doSomething();
setTimeout(doSomething);
setTimeout(function() {
    console.log('lazy and waiting');
}, 4000);
setTimeout(() => {
    console.log('See you letter');
}, 4000);

setInterval(function(){
    console.log('doing it again');
}, 3000);
// differnece between setTimeout and setInterval setTimeout sudhu akber execute hobe and setInterval holo kichu birotier por or somoi por execute hote thakbe
console.log(22222);