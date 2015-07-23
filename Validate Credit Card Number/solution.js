function validate(n){
  // put each digit into an array
  arrN = n.toString().split("");
  
  for (var digit in arrN)
  {
    arrN[digit] = Number(arrN[digit]);
  }
  
  // double every other digit, starting from the end
  for (var digit = arrN.length - 2; digit >= 0; digit -= 2)
  {
    arrN[digit] *= 2;
    
    if (arrN[digit] > 9)
    {
      arrN[digit] -= 9;
    }
  }
  
  var sum = 0;
  
  for (var digit in arrN)
  {
    sum += arrN[digit];
  }
  
  if (sum % 10 === 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}