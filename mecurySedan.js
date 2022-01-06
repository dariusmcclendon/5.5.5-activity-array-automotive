//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

let sedan = new VehicleModule.Car("Mercury", "Sedan", 1965, "red", 19000, 6, 300, 200);
console.log(sedan)