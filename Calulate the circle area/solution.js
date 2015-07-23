var circleArea = function(radius) {

 if (radius<=0 || typeof radius!=="number"){

   return false;

}else{
   
  var result = Math.PI*Math.pow(radius, 2);
 
  var res = result.toFixed(2);

  return res;
  }
  
};