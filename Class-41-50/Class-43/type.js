// Class:43
// type

const x = [1, 2, 3];
console.log(x.constructor.toString().indexOf("Array") > -1)

// how to check array/object/function/etc
function myArray(array) {
    return array.constructor.toString().indexOf("Array") > -1
};

console.log(myArray([1, 2, 3]))

console.log(typeof undefined)