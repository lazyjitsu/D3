
var obj = {
    myFcn: function(x) {
        var list = { 2:["republican","democrat"],"student":"math" }
        return list[x];
        }
};
function tweenAnchor(d) {
    var interpolator = getArcInterpolator(this,d);
    return function(t) {
        var x = myCentroid(d)[0];
        return (x > 0) ? "start" : "end";
    }
}
console.log(myCentroid(3)[1]);
function myCentroid(x) {
    var myobjs = {1: ["one","tree","flour!!!"], 2: "two",3:["merrry","la familia C"]};
    return myobjs[x];
}

console.log(obj.myFcn(2)[0]);
