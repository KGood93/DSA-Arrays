const Array = require('./array');

function main() {
    Array.SIZE_RATIO = 3;

    //Create an instance of the Array Class
    let arr = new Array();

    //Add items to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    //Pop methods
    arr.pop();
    arr.pop();
    arr.pop();

    console.log(arr);
}
main();