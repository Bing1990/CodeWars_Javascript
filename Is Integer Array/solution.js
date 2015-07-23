function isIntArray(arr) {
  if( !Array.isArray( arr ) ) return false;
  
  if( arr.length == 0 ){
    return true;
  }else{
    for( var i = 0; i < arr.length; i++ ){  
      if( typeof( arr[ i ] ) != "number" ||  arr[ i ]%1 !== 0 ) return false;
    }
  }
  return true;
}