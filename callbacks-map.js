var words = ["ground", "control", "to", "major", "tom"];

function map(array, callFunction){
var newArray = [];
 for (i=0; i <array.length; i++){
   newArray[i] = callFunction(array[i]);
 }
 console.log(newArray);
}
map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

