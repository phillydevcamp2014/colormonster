$(document).ready(function() {
  $("header").append('<a id="color-monster" href="#">Random Color Pallette</a><div id="pallette-name"></div>');

  $('#color-monster').click(function() {
    $.getJSON("random-pallete.php", function(data) {
    	$('#pallette-name').html("Current pallette is: " + data[0].title);
    	var colors = data[0].colors;
    	for (var i in colors) {
    		var color = '#' + colors[i];
    		if (i == 0) {
          $('body').css("background-color", color);
    		}
    		if (i == 1) {
          $('h1').css("color", color);
    		}
    		if (i == 2) {
          $('h2, h3').css("color", color);
    		}
    		if (i == 3) {
          $('p').css("color", color);
    		}
    		if (i == 4) {
          $('a').css("color", color);
    		}
    	}
    });
  });
});
