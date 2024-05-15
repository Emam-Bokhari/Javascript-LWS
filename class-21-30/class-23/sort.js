const marks = [55, 33, 79, 70, 41]
marks.sort(function (a, b) {
    return a - b
})
console.log(marks)

const marks2=[55, 33, 79, 70, 41]
marks2.sort(function(a,b){
    return b-a 
})
console.log(marks2)

const numbers=[1,2,3,4,5]

const number=numbers.map((value)=>{
    return value*2 
})

console.log(number)

const myFunstion=function(value){
    return value*value*value
}

const qube=numbers.map(myFunstion)

console.log(qube)