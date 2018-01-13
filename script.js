const isla = [65, 90, 89, 88, 69, 87, 85, 84, 73, 83, 82, 76, 80, 78, 79, 77, 81, 75, 74, 72, 85, 71, 70, 68, 66, 65];
const BIG_A = 65;
const LITTLE_A = 97;
const LENGTH = 26;

function translatecurrent() {
  var input = document.getElementById("input").value;
  if(input != undefined) {
    document.getElementById("output").innerHTML = translate(input);
  }
};
window.addEventListener('load', function() {


});

function translate(english) {
//  if(english == "") return "type something to translate";
  var builder = "";
  for(var i = 0; i < english.length; i++) {
    var c = english.charCodeAt(i);
    if(c >= BIG_A && c <= BIG_A+LENGTH) {
        builder = builder + isla[c-BIG_A];
    } else if(c >= LITTLE_A && c <= LITTLE_A+LENGTH) {
        builder = builder + String.fromCharCode(isla[c-LITTLE_A]-BIG_A+LITTLE_A);
    } else {
       builder = builder + String.fromCharCode(c);
    }
  }
  return builder;
};
