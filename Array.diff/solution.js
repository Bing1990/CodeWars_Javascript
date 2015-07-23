/**

Your goal in this kata is to implement an difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b.

difference([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

difference([1,2,2,2,3],[2]) == [1,3]

*/


function array_diff(a, b) {

var a = [];
var b = [];
var count =0;

if(a.length < 0) return false;

if(a.length==0) return 0;

var arr_sort= a.sort();

for(var i =0; i<a.length; i++){

    if(arr_sort[i]==arr_sort[i+1]){
         
        count++;
          
      }else{
		  
            b.push(arr_sort[i]);
       }
   }
 return b;
  
}

========================================================
Solution:

function array_diff(a, b) {

var bSet = new Set(b);

return a.filter(function(x){

 return !bSet.has(x);

});

}
  
function symmetric_difference(a,b){
     return array_diff(a,b).concat(array_diff(b,a));
}