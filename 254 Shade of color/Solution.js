function shadesOfGrey(n){
      
      if(n < 1)
        return [];

      if(n>254)
        n = 254;

      var shades = [];
      var num = "0";

      for(var i=1; i<=n; i++){
        //create shade
      var item = (i).toString(16);
      if(item.length == 1)
        num += item.charAt(0);
      else
        num = item;

      shades.push("#"+num+num+num);
      num = "0";
      }
      return shades;
  }