function openOrSenior(data){

  var result=[];
    
  for(var i=0; i<data.length; i++) {
                 
            var a=data[i][0];
            var b=data[i][1];
            var c;
                 
      if(a >=55 && b>=7){
      c = "Senior";
      result.push(c);

   }else{
    c ="Open";
    result.push(c);
         }
};

return result;
};
      