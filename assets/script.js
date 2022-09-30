var textBox = document.getElementsByTagName("textarea");
var timeBox = document.getElementsByClassName("time-field");
var testing = document.getElementById("test");
var today = moment();
$("#currentDay").text(today.format("LLLL"));

console.log(timeBox.textContent);

if(moment().format('h') === timeBox.text) {

} 