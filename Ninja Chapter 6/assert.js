<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chapter6 Template tEst</title>
<style>
  #results li.pass {color: red;}
  #results li.fail { color: red; }
  </style>
  <script>
  function assert(value,desc) {
    alert("Recieved" + valule);
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
  }
  window.onload = function() {
    assert(true," The testt marco suite is runnning.");
    assert(false, "Fail is not an option");
  }
  </script>
</head>
<body>
  <ul id = "results"></ul>
</body>
</html>
