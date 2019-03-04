<html>
<body
    <p id="demo"> </p>
    <script>
	var cars = [ "BMW", "Benz", "Toyota"];
	
     document.write( "There are " + cars.length + "cars..." + cars.toString() + "<br>");	
     

	cars.push("Landrover")
     document.write( "There are " + cars.length + "cars..." + cars.toString() + "<br>");
     

     cars.pop()
     cars.pop()
     document.write( "There are " + cars.length + "cars..." + cars.toString() + "<br>");
    </script>
</body>