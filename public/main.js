// Write a function addNumbers that takes a single string parameter
var isNumber = function(n) { 
  return !isNaN(parseFloat(n)) && isFinite(n); 
};

function getSum(total, num) {
    return total + num;
  }

function removeNonNumbers(string) {
  var subString = string.split('');
  for (var i = 0; i < subString.length; i++) {
    if (!isNumber(subString[i])) {
      subString[i] = 0;
    } 
  }
  return subString;
}

function isolateNumbers(array) {
  var newNumber = [];
  var numberArray = [];
  array.forEach(function(element){
    if (element > 0) {
      newNumber.push(element)
    } else {
      numberArray.push(newNumber);
      newNumber = [];
    }
  })
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i].length > 0) {
      numberArray[i] = numberArray[i].join('');
      numberArray[i] = Number(numberArray[i]);
    } else {
      numberArray[i] = 0;
    } 
  }
  for (var j = 0; j < numberArray.length; j++) {
    if (numberArray[j] === 0) {
      numberArray.splice(j, 1)
      j--;
    } 
  }
  return numberArray;
}



function addNumbers(string) {

  var valueArray = isolateNumbers(removeNonNumbers(string));
  var value = valueArray.reduce(getSum);
  return value;
}

function averageStringNumbers(string) {
  var valueArray = isolateNumbers(removeNonNumbers(string));
  var total = 0;
  var average = 0;
  
  valueArray.forEach(function(element){
    total = (total + element);
    average = total / valueArray.length;
  })
  
  return average;
}