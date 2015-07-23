function isIntArray(arr) {
       if(!arr) return false; 
        if (arr.length === 0) return true;
        
        for(var i=0;i<arr.length;i++){
            if (isNaN(arr[i])) 
              return false;
            if (parseInt(arr[i]) !== arr[i]) return false;
        }
        return true;
    }
	

