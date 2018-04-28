function getTriangleArea(a, h) {	
  if ( (a <= 0) || (h <= 0) ) {		
    console.log("Input data incorect")
    return -1;
  }	
  var value = a*h/2;
  console.log("inFunc Result is: "+ value);

  return value;
}
var triangle1Area = getTriangleArea(10, 15);
console.log("Result is: " + triangle1Area);





