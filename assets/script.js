var textBox = document.getElementsByTagName("textarea");
var timeBox = document.getElementsByClassName("time-field");
var testing = document.getElementById("test");
var today = moment();
$("#currentDay").text(today.format("LLLL"));



for(i=0; i<textBox.length; i++) {
    if(textBox[i].id < moment().format('HH')) {
        $(textBox[i]).addClass("past")
        $(textBox[i]).removeClass("future")
        $(textBox[i]).removeClass("present")
    } else if(textBox[i].id === moment().format('HH')) {
        $(textBox[i]).addClass("present")
        $(textBox[i]).removeClass("future")
        $(textBox[i]).removeClass("past")
    } else if(textBox[i].id > moment().format('HH')) {
        $(textBox[i]).addClass("future")
        $(textBox[i]).removeClass("present")
        $(textBox[i]).removeClass("past")
    }
}

console.log(textBox)