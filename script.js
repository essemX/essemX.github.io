const isla = [65, 90, 89, 88, 69, 87, 86, 84, 73, 83, 82, 76, 80, 78, 79, 77, 81, 75, 74, 72, 85, 71, 70, 68, 67, 66];
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
  var result = findGetParameter("translate");
  if(result != null) {
    document.getElementById("input").value = result;
    translatecurrent();
  }
});

function findGetParameter(parameter) {
  var tmp = [];
  var result = null;
  location.search.substr(1).split("&").forEach(function (item) {
    tmp = item.split("=");
    if(tmp.length > 1 && tmp[0] == parameter) result = decodeURIComponent(tmp[1]);
  });
  return result;
}

function translate(english) {
  if(english.length < 1) return "type something to translate";
  var builder = "";
  for(var i = 0; i < english.length; i++) {
    var c = english.charCodeAt(i);
    if(c >= BIG_A && c <= BIG_A+LENGTH) {
        builder = builder + String.fromCharCode(isla[c-BIG_A]);
    } else if(c >= LITTLE_A && c <= LITTLE_A+LENGTH) {
        builder = builder + String.fromCharCode(isla[c-LITTLE_A]-BIG_A+LITTLE_A);
    } else {
       builder = builder + String.fromCharCode(c);
    }
  }
  return builder;
};
