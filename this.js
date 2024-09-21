var obj = {};
obj.foo = function() {
  console.log("this test of foo");
  console.log(this);
  document.write("foo's this here: " + this);
}
function test() {
    console.log(this);
    document.write("my ttest obj: " + this);
}
function Bicycle(cadence, speed, gear, tirePressure) {
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  this.inflateTires = function() {
      document.write("Inflating tires for<br>" + this);
      this.tirePressure += 3;
      document.write(this.tirePressure + "<br>" + "and this");
      document.write(this);
  }
}

var bike1 = new Bicycle(10,11,12,13);
var bikeDose = new Bicycle(100,111,112,113);
bike1.inflateTires();
bikeDose.inflateTires();
function Mechanic(name) {
    this.name = name;
    document.write("MechThis:" + this);
}

var mech = new Mechanic();

mech.inflateTires = bike1.inflateTires;
document.write("MexPressure\n" + mech.tirePressure);
mech.inflateTires();



//foo();  is 1 way to call a function. recall a function is an
//object.
//foo.call(); is another way to call and is equiv to foo();



//obj.foo();
//new test();
