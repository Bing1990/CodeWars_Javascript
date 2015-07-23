
/*Description:

Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/


var countBits = function(n) {
	//declear the number of 1 in the number
	var a = 0;
	//transit the decimal number into binary number
	var num = n.toString(n);
	
	for(var i in num){
		if(num[i]==1){
			a++;
		}
		
	}
	return a;
}