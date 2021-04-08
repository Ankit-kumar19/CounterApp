function minus() {
    var n = parseInt(document.getElementById("count").innerHTML);
    if (n == 10) {
      $("#b3").attr("disabled", false);
    }
    if (n == 0) {
      $("#b1").attr("disabled", true);
    } else {
      n = n - 1;
      oddEven(n);
      document.getElementById("count").innerHTML = n;
      if (n == 0) {
        $("#b1").attr("disabled", true);
      }
    }
  }
  
  function plus() {
    var n = parseInt(document.getElementById("count").innerHTML);
    if (n == 0) {
      $("#b1").attr("disabled", false);
    }
  
    $("#b3").attr("disabled", false);
    n = n + 1;
    oddEven(n);
    document.getElementById("count").innerHTML = n;
    if (n == 10) {
      $("#b3").attr("disabled", true);
    }
  }
  
  function reset() {
    var n = parseInt(document.getElementById("count").innerHTML);
    n = 0;
    document.getElementById("count").innerHTML = n;
    $("#b1").attr("disabled", false);
    $("#b3").attr("disabled", false);
    $("body").css({ "background-color": "aqua" });
    $("#count").css("color", "white");
  }
  
  function oddEven(n) {
    if (n % 2 == 0) {
      console.log("testing");
      $("body").css({ "background-color": "aqua" });
      $("#count").css("color", "white");
    } else {
      $("body").css({ "background-color": "grey" });
      $("#count").css("color", "red");
    }
  }