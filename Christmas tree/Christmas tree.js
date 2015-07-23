/**
Create a function christmasTree(height) that returns a christmas tree of the correct height

christmasTree(5) should return:

    *    
   ***   
  *****  
 ******* 
*********
Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.

*/



String.prototype.repeat = function(times) {
  return (new Array(times + 1)).join(this);
}

function christmasTree(height) {

var christmas = '',
    pattern = '*';

var height = prompt( 'How many *\'s high would you like your tree to be?' );

if(height<0 || height>100) return false;

if(height=0) return 0;

if(height >0 && height <100){

  for(var i=0;i<height;i++){

    christmas += ' '.repeat(height - i - 1);
    christmas += (pattern.repeat(2 * i + 1));
    // christmas += ' '.repeat(height - i - 1);
    christmas += '\n';

    }
      return christmas.slice(0, -1);
  }

}

===============================================================================================
/*Solution1*/
function christmasTree(height) {
  var lines = [], width = (2 * height) - 1;
  for (var i = 0, stars = 1; i < height; ++i, stars += 2) {
    var str = '', spaces = (width - stars) / 2;
    for(var j = 0; j < width; ++j) {
      str += j >= spaces && j < stars + spaces ? '*' : ' ';
    }
    lines.push(str);
  }
  return lines.join('\n');
}

===========================================================================================
/*Solution2*/
function christmasTree(height) {
  var tree = [];
  for(var i = 1; i <= height; i++) {
    tree.push(" ".repeat(height - i) + "*".repeat((i - 1) * 2 + 1) + " ".repeat(height - i));
  }
  return tree.join("\n");
}

String.prototype.repeat = function(n)
{
    return new Array(n+1).join(this);
}