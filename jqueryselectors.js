$(document).ready(function(){
    $("ul li:first").click(function(){
  	    $(this).hide();
  	});
}); 		

$(document).ready(function(){
  	$("button#hide").click(function(){
  		$("p").hide(); 		
  	});
});


$(document).ready(function(){ 	
  	$("button#show").click(function(){
  		$("p").show();
	});
});


 

