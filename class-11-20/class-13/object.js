// this keyword
const person = {
    firstName: "Emam",
    lastName: "Bokhari",
    age: 24,
    weight: "50Kg",
    height: '5.4" inch',
    fullName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}
person.fullName()