
var total_miles = 0;
var totalDistance = 0; //in pixels
var oldCursorX, oldCursorY;
var ratio = 1.6440444056709E-7;
//pixels to mile ratio source: https://www.justintools.com/unit-conversion/length.php?k1=pixels&k2=miles

$("html").mousemove(function(e) {
	if (oldCursorX) totalDistance += Math.sqrt(Math.pow(oldCursorY - e.clientY, 2) + Math.pow(oldCursorX - e.clientX, 2));
	$("h3").replaceWith("<h3>Your mouse has <i>" + (totalDistance*ratio).toFixed(4) + "</i> miles on it.</h3>");

	oldCursorX = e.clientX;
    oldCursorY = e.clientY;
});