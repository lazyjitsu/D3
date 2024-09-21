window.onload = function() {
//async tutorial from net ninja cont'd using callbacks
  var fruits = ["pears","tamales","chili"];
//an inline callback fcn
  fruits.forEach(function(val){
	  console.log(val);
  });
};
/* var callback(val) {
  console.log(val);
}
fruits.forEach(callback);
console.log("done");  //prove its a synchronous operation cause 'done' will be
printed last!
*/
