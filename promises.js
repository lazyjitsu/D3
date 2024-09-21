window.upload = function(){

      function get(url) {
        return new Promise(function(resolve.reject)) {
          var xhttp = new XMLHttpRequest();
          xhttp.onload = function(){
            if (xhttp.status == 200) {
              resolve(JSON.parse(xhttp.response));
            } else {
                reject(xhttp.statusText);
            }
          };
          xhttp.onerror = function(){
            reject(xhttp.statusText);
          };
          xhttp.send();
        }
      };
};
