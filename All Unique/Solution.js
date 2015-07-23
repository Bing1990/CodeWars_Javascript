function hasUniqueChars(str){
  if (str.length === 0) {
    return true;
  }
  for (var i = 1; i < str.length; ++i) {
    for (var j = 0; j < i; ++j ) {
      if (str[j] === str[i] ) {
        return false;
      }
    }
  }
  return true;
}