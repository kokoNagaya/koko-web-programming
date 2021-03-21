console.log ("testing")

$("body").mousemove(function(event) {
  $("#taiwan").css({"left" : event.pageX, "top" : event.pageY});
});
