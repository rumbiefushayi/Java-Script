
$(document).ready(function(){
  	$("#flip").click(function(){
  	    $("#panel").slideToggle()
  	        $("#panel").css("background-color", "#FF1493")
  	            alert("Hello! I am an alert box!")
  	            	$("#panel").text("Click me and see")
  	                	$("#panel").html("<b>Hello World!</b>");
    });
});



