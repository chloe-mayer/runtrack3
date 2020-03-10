var keylogger = document.getElementById('keylogger');

window.addEventListener("keydown", function textArea(){
    var key = event.key;
    keylogger.value += key;
})