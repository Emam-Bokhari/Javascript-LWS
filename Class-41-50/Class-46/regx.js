// Class:46
// regx

const pattern = "Visit Microsoft Powered By Microsoft \n Microsoft";
console.log(pattern.replace(/microsoft/ig, "W3Schools"));

console.log(pattern.search(/microsoft/i));

console.log(pattern.match(/[a-z]/g));

console.log(pattern.match(/[A-Z]/g));

console.log(pattern.match(/[A-Z]/ig));

const numbers = "1,2,3,5,6,3,4,2,6";
console.log(numbers.match(/[0-9]/g));

console.log(numbers.match(/[0-3]/g));