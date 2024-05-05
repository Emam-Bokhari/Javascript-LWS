function yourName(name, time) {
    console.log(name + " " + "is sleeping from" + " " + time + " " + "PM")
}
function yourName(name, time) {
    return name + " " + "is sleeping from" + " " + time + " " + "PM"
}

yourName("Bokhari", "12")
yourName("Emam", "10")

let y=yourName("Emam", "10")
let z=yourName("Bokhari", "12")
console.log(y,z)

let x = "Sleeping time and name" + " " + yourName("Sultan Mehmed Khan","10")
console.log(x)

var carName="BMW"

function carName2(){
    var carName="Volvo"
    console.log(carName)
}
carName2()
console.log(carName)