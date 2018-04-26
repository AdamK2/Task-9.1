function getTriangleArea(a, h) {	
	if ( (a <= 0) || (h <= 0) ) {		
        console.log("Input data incorect")
		}	
	/* else {
		var value = a*h/2;
		console.log("Result is: "+ value); 
		} */
	else {	
		console.log("Result is: "+ (a*h/2))
		} 		
}
var triangle1Area = getTriangleArea(10, 15);
var triangle1Area = getTriangleArea(6, -5);
var triangle1Area = getTriangleArea(2, 7);
var triangle1Area = getTriangleArea(0, 5);

