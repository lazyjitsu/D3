window.onload = function() {
    var http = new XMLHttpRequest(); // ready state -
    http.onreadystatechange = function() {
    //the above runs the function when the 'ready state' changes
    if(http.readyState == 4 && http.status == 200) {
      // this is  javascript string console.log(http.response);
      //we want it to be in object format so we can do cooler stuff w/itt
      console.log(JSON.parse(http.response));
    }
    // console.log(http);
  };

  http.open("GET","tweets.json",true); /* true = aysynchronous; ready state 1 ; false is synchronous */
  http.send(); //ready state 2
 // console.log(http); //this should be ready state 4, data received.
 console.log("test"); //this will be printed first even though its last because
 //we are aysynchronous and a thread is spawned in the background so we can get to this quickly
//the jquery method is:
$.get("tweets.json",function(data) {
    console.log(data);
	document.write(data);
});
  console.log("testt");
};
/* call back version
var cb(data) {
  console.log(data);
}; */

/* READY STATES
  0 - request not initialized
  1 - request has been set up
  2 - request has been sent
  3 - request is in process
  4 - request is complete
*/
