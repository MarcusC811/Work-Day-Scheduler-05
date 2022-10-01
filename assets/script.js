var today = moment();
var saveText = document.getElementById("saveMessage");
var textBox = document.getElementsByTagName("textarea");
var testing = document.getElementById("test");
var hour9 = document.getElementById("09")
var hour10 = document.getElementById("10")
var hour11 = document.getElementById("11")
var hour12 = document.getElementById("12")
var hour13 = document.getElementById("13")
var hour14 = document.getElementById("14")
var hour15 = document.getElementById("15")
var hour16 = document.getElementById("16")
var hour17 = document.getElementById("17")
var saveButton = document.getElementsByClassName(".btn");
var storedInput = localStorage.getItem('9am');

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

$(".saveBtn").on("click", function () {
    saveText.innerText = 'Your entry has been saved!'
    localStorage.setItem("9am", hour9.value);
    localStorage.setItem("10am", hour10.value);
    localStorage.setItem("11am", hour11.value);
    localStorage.setItem("12pm", hour12.value);
    localStorage.setItem("1pm", hour13.value);
    localStorage.setItem("2pm", hour14.value);
    localStorage.setItem("3pm", hour15.value);
    localStorage.setItem("4pm", hour16.value);
    localStorage.setItem("5pm", hour17.value);
})

hour9.textContent = localStorage.getItem('9am');
hour10.textContent = localStorage.getItem('10am');
hour11.textContent = localStorage.getItem('11am');
hour12.textContent = localStorage.getItem('12pm');
hour13.textContent = localStorage.getItem('1pm');
hour14.textContent = localStorage.getItem('2pm');
hour15.textContent = localStorage.getItem('3pm');
hour16.textContent = localStorage.getItem('4pm');
hour17.textContent = localStorage.getItem('5pm');