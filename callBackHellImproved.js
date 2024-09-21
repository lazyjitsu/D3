window.onload = function(){
function errorHandler(jqXHR,textStatus,error){
  console.log(error);
}
  $.ajax({
    type: "GET",
    url: "tweets.json",
    success:cbTweets,
    error: errorHandler
    });

  function cbTweets(data) {
    //once we know we know we got it, hence 'success', lets display it!
    console.log(data);
    $.ajax({
      type: "GET",
      url: "videos.json",
      success: function(data) {
        console.log(data);
      },
        //once we know we know we got it, hence 'success', lets display it!
      error: errorHandler
    });
  }
  function cbFriends(data){
    console.log(data);
    $.ajax({
      type: "GET",
      url: "friends.json",
      success: function(data) {
        console.log(data);
      },
      error: errorHandler
      });
  }
};
