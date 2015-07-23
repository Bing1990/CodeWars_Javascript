/*

You've just recently been hired to calculate scores for a Dart Board game! 

Scoring specifications:
0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5

If all radiuses are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radiuses (can be integers and/or floats), 
and returns a total score using the above specification.
An empty array should return 0.

Examples:
scoreThrows( [1, 5, 11] ) => returns 15 
scoreThrows( [15, 20, 30] ) => returns 0 
scoreThrows( [1, 2, 3, 4] ) => returns 140


*/

==================================================================

function scoreThrows(radiuses){
	
	var points =0;
	var isValidForBouns = true;
	
	radiuses.forEach(function(value){
		if(value<5){
		  points+=10;
		}else if(value >=5 && value <=10){
			points +=5;
			isValidForBouns = false;
		}else{
			points +=0;
			isValidForBouns = false;
		}
	})
      if(isValidForBouns && points >0){
		  points += 100;
	  }
	  return points;
}



===============================================================================

/*Solution2

*/
function scoreThrows(radiuses){

  if (radiuses.length <= 0) { return 0 }
  
  var score = 0
  var isValidForBouns = true
  for(var i = 0; i < radiuses.length; i++) {
    if      (radiuses[i] < 5)   { score += 10 }
    else if (radiuses[i] <= 10) { score += 5; isValidForBouns = false }
    else                        { isValidForBouns = false }
  }
  
  if (isValidForBouns) { score += 100 }
  
  return score;
}






