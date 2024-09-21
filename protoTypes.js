/* Prototypes
function Bicycle(cadence, speed, gear, tirePressure) {
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  this.inflateTires = function() {
    this.tirePressure += 4;
  }
}
var bike1 = new Bicycle(10,11,12,13);
document.write(this.bike1 + "<br>");
document.write(this); */

function Employee(name) {this.name = name;}
var emp1 = new Employee("Rickson");
var emp2 = new Employee("Zuko");

//Now if we wanted to add a property to Employee that emp1 and emp2 can share
//The cool thing is there will be ONLY one seeMe() function
Employee.prototype.seeMe = function () {
  return this.name;
};
//using __proto__ is NOT recommended! use .prototype instead.
document.write(emp1.seeMe() + "<br>");
document.write(emp2.seeMe() +"<br>");
document.write("Is the function that created me: " + emp2.constructor +"  End <br>");
document.write("dun construct: " + emp2.__proto__.constructor +"  End <br>");

document.write("dun" + emp2.__proto__);

//lets explore the constructor/prototype relationship

//The simplestt way to create an object
var simple = {};

//a bit more difficult
var obj = new Object();
