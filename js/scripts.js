$(document).ready(function() {
$("form#movie-listing").submit(function(event) {
var movieAge = $("select#movie-age").val();
var movieTime = $("select#movie-time").val();
var movieName = $("select#movie-name").val();

if (movieAge === "Child up to 12") {
  var result = '$4.00';
}

else if (movieAge === "13-64" && movieTime === "5pm" || movieTime === "7pm") {
  var result = '$10.00';
}

else if (movieAge === "65 and up") {
  var result = '$5.00';
}

else {
  var result = '$7.00'
}


$("#output").show();
$("#result").empty().append(result);
$("#result").show();

event.preventDefault();
  });
});
