// Class:13
const details={
    name:"Emam Bokhari",
    age:24,
    address:function(){
        console.log(`My Name is ${this.name} and age ${this.age}`)
    }
   
}

console.log(details)

details.address()

// new keyword example
let x=20
let y=new Number(30)

console.log(x)
console.log(y)
